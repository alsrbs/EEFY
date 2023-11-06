package com.eefy.member.domain.member.service;

import com.eefy.member.domain.member.dto.request.EmailConfirmRequest;
import com.eefy.member.domain.member.dto.response.EmailSendResponse;
import com.eefy.member.domain.member.persistence.EmailCodeRedisRepository;
import com.eefy.member.domain.member.persistence.EmailConfirmRedisRepository;
import com.eefy.member.domain.member.persistence.entity.redis.EmailCode;
import com.eefy.member.domain.member.persistence.entity.redis.EmailConfirm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Random;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {
    @Value("${spring.mail.username}")
    private String username;
    private final JavaMailSender javaMailSender;
    private final EmailCodeRedisRepository emailCodeRedisRepository;
    private final EmailConfirmRedisRepository emailConfirmRedisRepository;

    @Transactional
    public ResponseEntity<EmailSendResponse> sendEmail(String toEmail) {
        String code = createCode();
        try {
            if (emailCodeRedisRepository.existsById(toEmail)) {
                throw new IllegalAccessException("시간 만료 후 이메일 인증 재요청");
            }
            MimeMessage emailForm = createEmailForm(code, toEmail);
            emailCodeRedisRepository.save(new EmailCode(toEmail, code));
            javaMailSender.send(emailForm);
        } catch (IllegalAccessException e) {
            log.error(e.getMessage());
        } catch (MessagingException e) {
            log.error("이메일 인증 코드 발송 오류");
        }
        return ResponseEntity.ok(new EmailSendResponse(code));
    }

    @Transactional
    public ResponseEntity<String> confirmCode(EmailConfirmRequest emailConfirmRequest) {
        String email = emailConfirmRequest.getEmail();
        String emailCode = emailCodeRedisRepository.findById(email)
                .orElseThrow(() -> {
                    log.error("인증번호 없음");
                    return new IllegalArgumentException("인증번호 없음");
                })
                .getCode();

        if (!emailCode.equals(emailConfirmRequest.getCode())) {
            log.error("이메일 인증번호 확인 오류");
            throw new IllegalStateException("이메일 인증번호 확인 오류");
        }

        emailCodeRedisRepository.deleteById(email);
        emailConfirmRedisRepository.save(new EmailConfirm(email, true));
        return ResponseEntity.ok("SUCCESS");
    }

    private MimeMessage createEmailForm(String code, String email) throws MessagingException {
        String subject = "EEFY 회원가입 인증 번호";
        String htmlContent = getHtmlString(code);
        MimeMessage message = javaMailSender.createMimeMessage();
        message.addRecipient(Message.RecipientType.TO, new InternetAddress(email));
        message.setSubject(subject);
        message.setFrom(new InternetAddress(username));
        message.setContent(htmlContent, "text/html; charset=utf-8");

        return message;
    }

    private String createCode() {
        int leftLimit = 48;
        int rightLimit = 122;
        int targetStringLength = 6;
        Random random = new Random();
        return random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
    }

    private String getHtmlString(String code) {
        return "<html><body>" +
                "<h1>EEFY 회원가입 이메일 인증 번호</h1>" +
                "<p>아래 인증 번호를 회원가입 시 입력해주세요:</p>" +
                "<p style='font-size: 18px; background-color: #f0f0f0; padding: 10px;'><strong>" +
                code +
                "</strong></p>" +
                "</body></html>";
    }
}
