if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),u={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>u[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Img/Backpack.png",revision:"27947bbbf5cbbd21b602db2d61b288ab"},{url:"/Img/SpinnerSample.gif",revision:"96de35a71a7b5674e7cea5742b8b98ff"},{url:"/Img/다운로드.png",revision:"a339a9b08f25958aed1e89fd5276c653"},{url:"/Img/열기.png",revision:"af63e487e055e5f1ef2cbdebb4678cdc"},{url:"/Img/취소.png",revision:"3adc23cf1eec21a04fe5a59077368001"},{url:"/Img/화살표.png",revision:"274fc73517dfb4127b8f961c71e2d288"},{url:"/Img/회원가입.png",revision:"1d7e49183301630131638804cfc2ab4f"},{url:"/Sound/message.mp3",revision:"27c016df38e6ad38501785969ed3d31c"},{url:"/_next/app-build-manifest.json",revision:"6731f5fa9aa6dfb35fb0ca7d9de613ca"},{url:"/_next/static/chunks/00cbbcb7-87da92e2b0aa93bd.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/12038df7-322ddd0bc0961ae8.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/1269-54b3eadaaa544550.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/17d537d6.e4abc194abd13831.js",revision:"e4abc194abd13831"},{url:"/_next/static/chunks/2503-2ed88f45a8aad08b.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/2531-dc2ae366b58c32fe.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/2965-acfaa07620829cb0.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/3208.b730c0838ca27cc5.js",revision:"b730c0838ca27cc5"},{url:"/_next/static/chunks/3258-d962691d76ac312b.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/341-9031d6ce326f92cb.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/358ff52d-85aa0e43e4c84b75.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/3627521c-b7c7b28d7c7938f0.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/3842-e7530ce3194bb050.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/3896-b98e0f839c232a20.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/39209d7c-9eb03b640dfe4f38.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/39aecf79-d1a73fafef960d95.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/4090-62f8f51edbd535a6.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/4182-00d274e3874ed525.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/4235-fc540bbed95093ce.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/449-fde07dbc59faf51c.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/483-5abc3d6e887bd0b9.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/48507feb-d17e6612446c6281.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/4b494101-0265720d0c918479.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/4cb6dfa8-2a2f47f2f8667763.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/4f53ad1b-5294163201ae7212.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/4f9d9cd8-7f508293dcb94056.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/594-d8921fc59d84fc1c.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/6291-5ffcb697d45bcf8e.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/6595-16c59ab9c0006289.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/6691-ac51ba30e0c6e08d.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/7319.358307964f091265.js",revision:"358307964f091265"},{url:"/_next/static/chunks/737dfa3e-32d0409e707bcfe7.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/7582-efe4eb2daa5ee5cd.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/7635-3d7898d9fd9bbd31.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/7a49ec60-1d6d6a58e4119b53.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/8315-4a0a926161327962.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/8641.078d36236e241e43.js",revision:"078d36236e241e43"},{url:"/_next/static/chunks/8849-673113acd0ecf57c.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/8879-56d63ae616afe253.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/8dc5345f-7b21ca8980e060af.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/93854f56-1222bb81409e0d6a.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/aaea2bcf-10fe941641d43f45.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/_not-found-d975140b04da8b09.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/dashboard/page-3cf25bf8a834ad8a.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/layout-feac1d04aa9b5fc3.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/%5BlectureId%5D/page-f6f0b76fb53ef03c.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/create/page-66719fe7cd9e026b.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/layout-86b651de1a7768fb.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/page-457713d8c14cfe72.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/%5BnoticeId%5D/page-edca3e76758638d4.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/create/page-e1d818400e43fb7e.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/layout-c079e921c1cd21c0.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/page-72f6d5980c440f48.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/%5BquestionId%5D/page-b03a9f22589da32f.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/create/page-846e86526e994f42.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/layout-bcd3efb2e849ad1b.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/page-047829eb4bfe44cd.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/listening/%5BhomeworkId%5D/problem/%5BproblemId%5D/page-15f6a92c4d0168fe.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/listening/page-c8505404eef98416.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/page-f57586786fd75839.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/explanation/%5Bproblemid%5D/page-0f909ac3bb918003.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/layout-e1331d53fa1e6e47.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/problem/%5Bproblemid%5D/page-6e7919c6507690b2.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/page-e7c204aaeda0a23e.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/speaking/%5BhomeworkId%5D/problem/%5BproblemId%5D/page-40cfc90cbba72172.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/speaking/%5BhomeworkId%5D/problem/page-a2548b2c446ff8ce.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/speaking/page-a358fa142c6f48b7.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/class/page-750636a0f6ce9a93.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/layout-c4022b50ba152a3b.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/login/page-6c20208d77d7a4e9.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/classlist/page-d90a1d264bb1d13f.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/layout-f4da18e6d3f3c2e8.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/homework/assign/%5BhomeworkId%5D/page-dc3ea8a5606bdbe7.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/homework/create/page-9addcaae2ffd0a7b.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/student/listening/%5BhomeworkId%5D/page-af96ee4090e7dfb6.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/student/listening/page-56dd98ae4e10e846.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/student/page-5daf4300866621b4.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/student/reading/%5BhomeworkId%5D/page-006dc63b9428a54a.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/student/reading/page-207c7d610973ad35.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/student/speaking/%5BhomeworkId%5D/page-6333e7ad10a147f9.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/student/speaking/page-b9069b368cf9ba6e.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/teacher/listening/%5BhomeworkId%5D/page-42fec9583b06e865.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/teacher/listening/page-7afcc8d3566d0321.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/teacher/page-a56eb7d86301aabd.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/teacher/reading/%5BhomeworkId%5D/page-a2dce14a2f6d945f.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/teacher/reading/page-46503d9cfd8a1815.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/teacher/speaking/%5BhomeworkId%5D/page-46af1fa5d902c2e0.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/main/library/teacher/speaking/page-735328de8cf6de28.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/page-9f0b1a53aa5ae693.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/app/test/page-a19ba45c52ab310b.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/bc9c3264-15c1f0b661665235.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/ca377847-64aaa5788badee79.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/d622d42c-5b6d970b82ad676c.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/ec3863c0-0c541fcb7a43dd5f.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/f1dbb792-652abac9db3871d8.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/f4e5f4e1-9d862876aaeb6343.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/fd9d1056-81eab0bbd26b1eb6.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/main-a17035e5b6dbc2da.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/main-app-5ae0005219bfee4c.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/pages/_app-a88fc46701f6c6d9.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/pages/_error-e092f2694d86fff0.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-be9e232354bd4b27.js",revision:"hIKjqNwFM2kePyyA18A2B"},{url:"/_next/static/css/0f95cc300e539de3.css",revision:"0f95cc300e539de3"},{url:"/_next/static/css/6122e5b27df29a0c.css",revision:"6122e5b27df29a0c"},{url:"/_next/static/css/6201f2509c2c56c5.css",revision:"6201f2509c2c56c5"},{url:"/_next/static/css/6f034f8ec6f90d29.css",revision:"6f034f8ec6f90d29"},{url:"/_next/static/css/854eb55ebbd65909.css",revision:"854eb55ebbd65909"},{url:"/_next/static/css/b520a8fbfc31c3a2.css",revision:"b520a8fbfc31c3a2"},{url:"/_next/static/css/ba6057dd988749d5.css",revision:"ba6057dd988749d5"},{url:"/_next/static/hIKjqNwFM2kePyyA18A2B/_buildManifest.js",revision:"c1d0d17a0e43a3061959521d2d0f78ba"},{url:"/_next/static/hIKjqNwFM2kePyyA18A2B/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/Backpack.a332b464.png",revision:"27947bbbf5cbbd21b602db2d61b288ab"},{url:"/_next/static/media/다운로드.0a6736c3.png",revision:"a339a9b08f25958aed1e89fd5276c653"},{url:"/_next/static/media/열기.d76e18ac.png",revision:"af63e487e055e5f1ef2cbdebb4678cdc"},{url:"/_next/static/media/회원가입.98773a12.png",revision:"1d7e49183301630131638804cfc2ab4f"},{url:"/asset-headphonebook-450x450.png",revision:"c6d6e982650f1076980a355c7c6d0fde"},{url:"/dashboard.png",revision:"18126b4ddc6d44516f1d78f708f57c01"},{url:"/firebase-messaging-sw.js",revision:"b93916301db129f1e8774595ae6fcc7e"},{url:"/icon-192x192.png",revision:"76fcd20cd2feaa441edf3b069c672b65"},{url:"/icon-256x256.png",revision:"57945fb489acae6781be59b471100d97"},{url:"/icon-384x384.png",revision:"5137873f70752f5c8975060481099805"},{url:"/icon-512x512.png",revision:"bd53395c30ccf5d090affeac6b8f1bcf"},{url:"/logo.png",revision:"80edab507375153931f236468aa97ae5"},{url:"/manifest.json",revision:"baeca1a8e628820dbd20db13a1d632f5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/start-logo.svg",revision:"7e88a00bbb85e52623977645295eb895"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
