if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Img/Backpack.png",revision:"27947bbbf5cbbd21b602db2d61b288ab"},{url:"/Img/SpinnerSample.gif",revision:"96de35a71a7b5674e7cea5742b8b98ff"},{url:"/Img/다운로드.png",revision:"a339a9b08f25958aed1e89fd5276c653"},{url:"/Img/열기.png",revision:"af63e487e055e5f1ef2cbdebb4678cdc"},{url:"/Img/취소.png",revision:"3adc23cf1eec21a04fe5a59077368001"},{url:"/Img/화살표.png",revision:"274fc73517dfb4127b8f961c71e2d288"},{url:"/Img/회원가입.png",revision:"1d7e49183301630131638804cfc2ab4f"},{url:"/_next/app-build-manifest.json",revision:"e5e798dd7dc09c2a5e31907b62630881"},{url:"/_next/static/chunks/00cbbcb7-87da92e2b0aa93bd.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/12038df7-322ddd0bc0961ae8.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/1396-a59c3512b5b51c5b.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/2080.ff59267654a69fc2.js",revision:"ff59267654a69fc2"},{url:"/_next/static/chunks/212-4f6aa3030c7044d2.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/2503-2ed88f45a8aad08b.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/2531-dc2ae366b58c32fe.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/3007-741c4eedb081f0a9.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/3113-5dc147644dfdb87a.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/3258-d962691d76ac312b.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/358ff52d-85aa0e43e4c84b75.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/3627521c-b7c7b28d7c7938f0.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/39209d7c-9eb03b640dfe4f38.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/3975359d.5436660779f6ce4b.js",revision:"5436660779f6ce4b"},{url:"/_next/static/chunks/39aecf79-d1a73fafef960d95.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/4182-00d274e3874ed525.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/4353-5bcf6708e2839b34.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/449-fde07dbc59faf51c.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/48507feb-d17e6612446c6281.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/4b494101-0265720d0c918479.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/4cb6dfa8-0c465173ca975f95.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/4f53ad1b-5294163201ae7212.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/4f9d9cd8-7f508293dcb94056.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/563-ad589918cbdf31de.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/5839-6585a5e53bedbcd9.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/6023-af8b509f3df3033b.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/663-e83be6d1c06360de.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/6691-ac51ba30e0c6e08d.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/7265-69cd85d22b14407d.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/7319.358307964f091265.js",revision:"358307964f091265"},{url:"/_next/static/chunks/737dfa3e-32d0409e707bcfe7.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/7582-efe4eb2daa5ee5cd.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/7979-23bdf90696696276.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/7a49ec60-1d6d6a58e4119b53.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/8194-ee644b79eda10da3.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/8269-78be2c8ebfab884f.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/8641.078d36236e241e43.js",revision:"078d36236e241e43"},{url:"/_next/static/chunks/8dc5345f-bb0932269577815e.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/93854f56-1222bb81409e0d6a.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/aaea2bcf-10fe941641d43f45.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/_not-found-d975140b04da8b09.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/dashboard/page-b53d48c4013af9ff.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/homeworktest/page-35d77a6e9c0fd476.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/layout-7bd09e5523b9d6e9.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/lecture/page-594801e91827c1b1.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/%5BnoticeId%5D/page-fe393439721256a2.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/create/page-6c22075c2625daaf.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/layout-b665944c1c3cccd4.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/notice/page-f0194abd12a8a0cc.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/question/page-657e80ef659a8ad0.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studydetail/page-d41ea7adcf2d79ff.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studydetail/speaking/page-c825f3b113fe1432.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/page-97e0bc3199c7212e.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/explanation/%5Bproblemid%5D/page-ff01dcbd6e9b077a.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/layout-ee8b3f41c97e5b59.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/%5Bhomeworkid%5D/problem/%5Bproblemid%5D/page-2a486c9f100e4c77.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/%5BclassId%5D/studylist/reading/page-f27f93bb674e7689.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/page-13ed6aeb001c2543.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/studylist/layout-62596f92d70416e0.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/studylist/reading/%5Bhomeworkid%5D/explanation/%5Bproblemid%5D/page-b68027f3aca86fcc.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/studylist/reading/%5Bhomeworkid%5D/layout-538b360650b520f1.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/class/studylist/reading/%5Bhomeworkid%5D/problem/%5Bproblemid%5D/page-2ae29cf18a6842fd.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/layout-fbc059bdca394879.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/login/page-e3496de489e4acb7.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/classlist/page-0b52f7820c870c68.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/layout-d7338edf373e7e17.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/homework/create/page-e0d54dee4b1549e7.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/student/listening/%5BhomeworkId%5D/page-1673f939d4f6f803.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/student/listening/page-c652cfb14222ade2.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/student/page-6935c064ddf8d8ff.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/student/reading/%5BhomeworkId%5D/page-d9b6c3e2ef33b06b.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/student/reading/page-5b6771e694de9137.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/student/speaking/%5BhomeworkId%5D/page-c3b0292f7690fdce.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/student/speaking/page-c3c09ee091ab64da.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/teacher/listening/%5BhomeworkId%5D/page-59956bb5e591e456.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/teacher/listening/page-20dc0be185731cac.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/teacher/page-2db3ed8f2d5aaf1a.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/teacher/reading/%5BhomeworkId%5D/page-299c5a98f5683045.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/teacher/reading/page-9d5e89f512edcc9c.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/teacher/speaking/%5BhomeworkId%5D/page-fcfdd2ce80e1719b.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/main/library/teacher/speaking/page-b9a6e5341eb11f95.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/app/page-fa349c6d2ddfa16e.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/bc9c3264-15c1f0b661665235.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/d622d42c-5b6d970b82ad676c.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/ec3863c0-0cea5cdb865e2f53.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/f4e5f4e1-9d862876aaeb6343.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/fd9d1056-81eab0bbd26b1eb6.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/main-38428f14e4043a67.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/main-app-5ae0005219bfee4c.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/pages/_app-a88fc46701f6c6d9.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/pages/_error-e092f2694d86fff0.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a4fcf6d6bf45cc49.js",revision:"im7dfArYRq6U-Cm2ovVdv"},{url:"/_next/static/css/6122e5b27df29a0c.css",revision:"6122e5b27df29a0c"},{url:"/_next/static/css/6f034f8ec6f90d29.css",revision:"6f034f8ec6f90d29"},{url:"/_next/static/css/7d83623da4b80257.css",revision:"7d83623da4b80257"},{url:"/_next/static/css/854eb55ebbd65909.css",revision:"854eb55ebbd65909"},{url:"/_next/static/css/b520a8fbfc31c3a2.css",revision:"b520a8fbfc31c3a2"},{url:"/_next/static/css/ba6057dd988749d5.css",revision:"ba6057dd988749d5"},{url:"/_next/static/css/cba20f6d5c8ab82e.css",revision:"cba20f6d5c8ab82e"},{url:"/_next/static/im7dfArYRq6U-Cm2ovVdv/_buildManifest.js",revision:"c1d0d17a0e43a3061959521d2d0f78ba"},{url:"/_next/static/im7dfArYRq6U-Cm2ovVdv/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/Backpack.a332b464.png",revision:"27947bbbf5cbbd21b602db2d61b288ab"},{url:"/_next/static/media/회원가입.98773a12.png",revision:"1d7e49183301630131638804cfc2ab4f"},{url:"/asset-headphonebook-450x450.png",revision:"c6d6e982650f1076980a355c7c6d0fde"},{url:"/dashboard.png",revision:"18126b4ddc6d44516f1d78f708f57c01"},{url:"/firebase-messaging-sw.js",revision:"b93916301db129f1e8774595ae6fcc7e"},{url:"/icon-192x192.png",revision:"76fcd20cd2feaa441edf3b069c672b65"},{url:"/icon-256x256.png",revision:"57945fb489acae6781be59b471100d97"},{url:"/icon-384x384.png",revision:"5137873f70752f5c8975060481099805"},{url:"/icon-512x512.png",revision:"bd53395c30ccf5d090affeac6b8f1bcf"},{url:"/logo.png",revision:"80edab507375153931f236468aa97ae5"},{url:"/manifest.json",revision:"baeca1a8e628820dbd20db13a1d632f5"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/start-logo.svg",revision:"7e88a00bbb85e52623977645295eb895"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
