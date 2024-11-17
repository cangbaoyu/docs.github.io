import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as a,e as p}from"./app-CByLrYFG.js";const s={};function n(l,t){return i(),a("div",null,t[0]||(t[0]=[p('<h1 id="https-原理剖析" tabindex="-1"><a class="header-anchor" href="#https-原理剖析"><span>HTTPS 原理剖析</span></a></h1><h2 id="为什么使用-https" tabindex="-1"><a class="header-anchor" href="#为什么使用-https"><span>为什么使用 HTTPS</span></a></h2><p>HTTP 协议，本身是明文传输的，没有经过任何安全处理。那么这个时候就很容易在传输过程中被中间者窃听、篡改、冒充等风险。这里提到的中间者主要指一些网络节点，是用户数据在浏览器和服务器中间传输必须要经过的节点，比如 WIFI 热点，路由器，防火墙，反向代理，缓存服务器等。</p><p>HTTP 协议，中间者可以窃听隐私，使用户的敏感数据暴露无遗；篡改网页，例如往页面插的广告内容，甚至进行流量劫持，比如有的时候你会发现域名没输错，结果却跑到了一个钓鱼网站上，因为被它劫持了。</p><p>为了解决这三大风险，HTTPS 的价值就体现出来了。</p><ul><li>内容加密，第三方无法窃听。</li><li>身份认证，一旦被篡改，通信双方会立刻发现。</li><li>数据完整性。防止内容冒充或者篡改。</li></ul><h2 id="什么是-https" tabindex="-1"><a class="header-anchor" href="#什么是-https"><span>什么是 HTTPS</span></a></h2><p>HTTPS，简单的理解 HTTP 的安全版，即 HTTP 下加入 SSL 层，由两部分组成：HTTP + SSL / TLS。</p><h2 id="https-原理剖析-1" tabindex="-1"><a class="header-anchor" href="#https-原理剖析-1"><span>HTTPS 原理剖析</span></a></h2><figure><img src="https://pic.sansei.top/images/security/HTTPS原理.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>用户在浏览器里输入一个 https 网址，此时客户端发起 HTTPS 请求，通过 TCP 和服务器建立连接（443端口）。</li><li>服务器存放 CA 证书进行处理，注意的是采用 HTTPS 协议的服务器必须要有一套数字证书，这套证书其实就是一对公钥和私钥。</li><li>服务器向客户端返回证书。证书里面包含了很多信息：比如域名，申请证书的公司，公钥等。以下是一个淘宝网的 CA 证书。</li></ul><figure><img src="https://pic.sansei.top/images/security/CA证书1.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/security/CA证书2.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>客户端对证书进行解析。这部分工作是有客户端的 TLS 来完成的，首先会验证公钥是否有效，比如颁发机构，过期时间等，如果发现异常，则会弹出一个警告框，提示证书存在问题。如果证书没有问题，那么就生成一个随机数，然后用证书对该随机数进行加密。</li><li>向服务器发送证书加密后的随机数。</li><li>服务器用它的私钥进行解密，得到了客户端传过来的随机数。</li><li>服务器用客户端的随机数加密后的信息发送给客户端。</li><li>客户端用之前生成的密钥解密服务端传过来的信息。 以上就是整个 HTTPS 的交互过程，大家是不是对整个流程有了比较大致的了解了呢。</li></ul><h2 id="https-的相关场景" tabindex="-1"><a class="header-anchor" href="#https-的相关场景"><span>HTTPS 的相关场景</span></a></h2><p>真实业务场景是复杂的，这里，整理 3 个项目中遇到的比较复杂的应用场景。</p><h3 id="场景一-对-https-进行-cdn-加速" tabindex="-1"><a class="header-anchor" href="#场景一-对-https-进行-cdn-加速"><span>场景一，对 HTTPS 进行 CDN 加速</span></a></h3><p>这种情况下，CA 证书需要存放在哪里呢？主要两个方案：</p><ul><li>服务器（源站）提供证书给 CDN 厂商，包括公钥证书和私钥，CDN 负责交互和内容缓存，CDN 有缓存则直接响应，以 HTTP 或 HTTPS 的形式回源。这个方案，适用仅对防劫持、防篡改有需求，而愿意提供证书给 CDN 的源站加速。</li><li>服务器（源站）不提供证书，CDN 存放公钥，服务器（源站）存放私钥。在 CDN 与前端浏览器进行 TLS 的认证和秘钥协商过程中，通过安全的信道把协商过程中的信息以 HTTP 或 HTTPS 的形式转发给源网站。此方案中，CDN 不做缓存，仅以自有的加速网络，将用户的请求快速送到服务器（源站），降低公网延迟。这个方案，适用于对安全要求更高，不愿将私钥共享给 CDN 的源站加速。</li></ul><h3 id="场景二-对https-的域名通过-cname-绑定到另外一个-https-域名上" tabindex="-1"><a class="header-anchor" href="#场景二-对https-的域名通过-cname-绑定到另外一个-https-域名上"><span>场景二，对HTTPS 的域名通过 CNAME 绑定到另外一个 HTTPS 域名上</span></a></h3><p>这个情况下，我们需要一个证书还是两个证书呢？</p><p>我们的方案是，两个证书。因为每个证书跟自己的域名进行绑定，即使它们都在同一个服务器上，也不能使用同一个证书。</p><h3 id="场景三-两台服务器的证书问题" tabindex="-1"><a class="header-anchor" href="#场景三-两台服务器的证书问题"><span>场景三，两台服务器的证书问题</span></a></h3><p>因为安全问题，CA 证书在一台服务器上，而服务部署在另外一台服务器上。这种情况就比较难办。</p><figure><img src="https://pic.sansei.top/images/security/反向代理方案1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时，需要借助 Nginx 进行反向代理，回源到具体的服务器。</p><h2 id="https-设计上的借鉴" tabindex="-1"><a class="header-anchor" href="#https-设计上的借鉴"><span>HTTPS 设计上的借鉴</span></a></h2><p>对于 HTTPS 设计上的方案，对于我们而言，有什么可以借鉴的地方么？</p><p>答案是肯定的：有。一个非常典型的方案就是 RSA 双向认证。</p><p>RSA 双向认证，顾名思义，就是用对方的公钥加密是为了保密，这个只有对方用私钥能解密。用自己的私钥加密是为了防抵赖，能用我的公钥解开，说明这是我发来的。例如，支付宝的支付接口就是非常典型的RSA双向认证的安全方案。此外，我们之前的教育资源、敏感验证码出于安全性考虑都借鉴了这个方案。</p>',30)]))}const c=e(s,[["render",n],["__file","Java-Security4.html.vue"]]),T=JSON.parse('{"path":"/audition/other/Java-Security4.html","title":"HTTPS 原理剖析","lang":"zh-CN","frontmatter":{"description":"HTTPS 原理剖析 为什么使用 HTTPS HTTP 协议，本身是明文传输的，没有经过任何安全处理。那么这个时候就很容易在传输过程中被中间者窃听、篡改、冒充等风险。这里提到的中间者主要指一些网络节点，是用户数据在浏览器和服务器中间传输必须要经过的节点，比如 WIFI 热点，路由器，防火墙，反向代理，缓存服务器等。 HTTP 协议，中间者可以窃听隐私，...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/other/Java-Security4.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"HTTPS 原理剖析"}],["meta",{"property":"og:description","content":"HTTPS 原理剖析 为什么使用 HTTPS HTTP 协议，本身是明文传输的，没有经过任何安全处理。那么这个时候就很容易在传输过程中被中间者窃听、篡改、冒充等风险。这里提到的中间者主要指一些网络节点，是用户数据在浏览器和服务器中间传输必须要经过的节点，比如 WIFI 热点，路由器，防火墙，反向代理，缓存服务器等。 HTTP 协议，中间者可以窃听隐私，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/security/HTTPS原理.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:42:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:42:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HTTPS 原理剖析\\",\\"image\\":[\\"https://pic.sansei.top/images/security/HTTPS原理.png\\",\\"https://pic.sansei.top/images/security/CA证书1.PNG\\",\\"https://pic.sansei.top/images/security/CA证书2.PNG\\",\\"https://pic.sansei.top/images/security/反向代理方案1.png\\"],\\"dateModified\\":\\"2024-11-17T16:42:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"为什么使用 HTTPS","slug":"为什么使用-https","link":"#为什么使用-https","children":[]},{"level":2,"title":"什么是 HTTPS","slug":"什么是-https","link":"#什么是-https","children":[]},{"level":2,"title":"HTTPS 原理剖析","slug":"https-原理剖析-1","link":"#https-原理剖析-1","children":[]},{"level":2,"title":"HTTPS 的相关场景","slug":"https-的相关场景","link":"#https-的相关场景","children":[{"level":3,"title":"场景一，对 HTTPS 进行 CDN 加速","slug":"场景一-对-https-进行-cdn-加速","link":"#场景一-对-https-进行-cdn-加速","children":[]},{"level":3,"title":"场景二，对HTTPS 的域名通过 CNAME 绑定到另外一个 HTTPS 域名上","slug":"场景二-对https-的域名通过-cname-绑定到另外一个-https-域名上","link":"#场景二-对https-的域名通过-cname-绑定到另外一个-https-域名上","children":[]},{"level":3,"title":"场景三，两台服务器的证书问题","slug":"场景三-两台服务器的证书问题","link":"#场景三-两台服务器的证书问题","children":[]}]},{"level":2,"title":"HTTPS 设计上的借鉴","slug":"https-设计上的借鉴","link":"#https-设计上的借鉴","children":[]}],"git":{"createdTime":1731861734000,"updatedTime":1731861734000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":4.41,"words":1324},"filePathRelative":"audition/other/Java-Security4.md","localizedDate":"2024年11月17日","autoDesc":true}');export{c as comp,T as data};
