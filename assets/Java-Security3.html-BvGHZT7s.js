import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as r}from"./app-CByLrYFG.js";const s={};function n(p,e){return t(),i("div",null,e[0]||(e[0]=[r('<h1 id="服务端通信安全攻防" tabindex="-1"><a class="header-anchor" href="#服务端通信安全攻防"><span>服务端通信安全攻防</span></a></h1><p>服务端接口通信过程中，一般是明文传输的，没有经过任何安全处理。那么这个时候就很容易在传输过程中被中间者窃听、篡改、冒充等风险。因此，对于敏感信息，以及重要文件就需要进行加密策略，保证通信的安全性。</p><h2 id="base64-加密传输" tabindex="-1"><a class="header-anchor" href="#base64-加密传输"><span>Base64 加密传输</span></a></h2><p>Base64 是网络上最常见的用于传输 8Bit 字节代码的编码方式之一，但是它其实并不是一种用于安全领域的加密解密算法。</p><p>但是，Base64 编码的数据并不会被人用肉眼所直观的理解，所以也有人使用 Base64 来进行加密解密，这里所说的加密与解密实际是指编码和解码的过程。</p><p>这种，加密传输的安全性是非常低的，Base64 加密非常容易被人识别并解码。</p><h2 id="des-对称加密" tabindex="-1"><a class="header-anchor" href="#des-对称加密"><span>DES 对称加密</span></a></h2><p>DES 也是一种非常常用的加密方案，我们会将敏感的信息在通信过程中通过DES进行加密传输，然后在客户端和服务端直接进行解码。</p><p>此时，作为读者的你，可能会有个疑问，那如何保管密钥呢？其实，想想，答案就复出水面了，因为客户端和服务端都需要进行解码，所以两者都要存一份密钥。其实，还有一种方案是通过服务端下发，但是下发的时候通信的安全性也是没有很好的保障。</p><p>所以，DES 对称加密也是存在一定的安全隐患：密钥可能会泄漏。这边，举个真实的案例，某个 APP 的资源不错，同事想抓包分析下其服务端通信的信息结构，但是发现它既然全部采用了 DES 加密方案，本来想放弃了，但是我们又回头想想客户端肯定需要密钥对接口的加密的内容做解码才能正常展现，那么密钥肯定在 APP 包中，因此我们又对 APP 进行了反编译，结果成功的获取到了密钥，对服务端通信的加密信息进行了解码。</p><h2 id="aes-对称加密" tabindex="-1"><a class="header-anchor" href="#aes-对称加密"><span>AES 对称加密</span></a></h2><p>AES 和 DES 类似，相较于 DES 算法而言，AES 算法有着更高的速度和资源使用效率，安全级别也较之更高。一般情况下，用于文件的加密。我们之前做个不准确测试，AES 和 DES 分别对一个大文件加密，AES 的速度大概是 DES 的 5 倍。（因为基于工具和环境问题，这个数据不是很准确哟）。</p><p>仍然存在一个相同的问题：密钥可能会泄漏。因此，保管好密钥很关键。</p><h2 id="升级到-https" tabindex="-1"><a class="header-anchor" href="#升级到-https"><span>升级到 HTTPS</span></a></h2><p>HTTPS 的价值在于：</p><ol><li>内容加密，第三方无法窃听。</li><li>身份认证，一旦被篡改，通信双方会立刻发现。</li><li>数据完整性。防止内容冒充或者篡改。 这个方案，没法保护敏感数据，如果需要对敏感数据进行加密，还是需要考虑加密方案。</li></ol><h2 id="url-签名" tabindex="-1"><a class="header-anchor" href="#url-签名"><span>URL 签名</span></a></h2><p>基于 OAuth2 协议，进行 URL 签名。这个方案，有很多话题可以分享，后面另开一篇来详细讲解。</p><p>值得注意的是，URL 签名只能垂直权限管理，但没法保护敏感数据，如果需要对敏感数据进行保护，还是需要考虑加密方案。</p><h2 id="双向-rsa-加密" tabindex="-1"><a class="header-anchor" href="#双向-rsa-加密"><span>双向 RSA 加密</span></a></h2><p>RSA 双向认证，就是用对方的公钥加密是为了保密，这个只有对方用私钥能解密。用自己的私钥加密是为了防抵赖，能用我的公钥解开，说明这是我发来的。</p><p>例如，支付宝的支付接口就是非常典型的 RSA 双向认证的安全方案。此外，我们之前的教育资源、敏感验证码出于安全性考虑都借鉴了这个方案。</p>',22)]))}const h=a(s,[["render",n],["__file","Java-Security3.html.vue"]]),c=JSON.parse('{"path":"/audition/other/Java-Security3.html","title":"服务端通信安全攻防","lang":"zh-CN","frontmatter":{"description":"服务端通信安全攻防 服务端接口通信过程中，一般是明文传输的，没有经过任何安全处理。那么这个时候就很容易在传输过程中被中间者窃听、篡改、冒充等风险。因此，对于敏感信息，以及重要文件就需要进行加密策略，保证通信的安全性。 Base64 加密传输 Base64 是网络上最常见的用于传输 8Bit 字节代码的编码方式之一，但是它其实并不是一种用于安全领域的加密...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/other/Java-Security3.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"服务端通信安全攻防"}],["meta",{"property":"og:description","content":"服务端通信安全攻防 服务端接口通信过程中，一般是明文传输的，没有经过任何安全处理。那么这个时候就很容易在传输过程中被中间者窃听、篡改、冒充等风险。因此，对于敏感信息，以及重要文件就需要进行加密策略，保证通信的安全性。 Base64 加密传输 Base64 是网络上最常见的用于传输 8Bit 字节代码的编码方式之一，但是它其实并不是一种用于安全领域的加密..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:42:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:42:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务端通信安全攻防\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T16:42:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Base64 加密传输","slug":"base64-加密传输","link":"#base64-加密传输","children":[]},{"level":2,"title":"DES 对称加密","slug":"des-对称加密","link":"#des-对称加密","children":[]},{"level":2,"title":"AES 对称加密","slug":"aes-对称加密","link":"#aes-对称加密","children":[]},{"level":2,"title":"升级到 HTTPS","slug":"升级到-https","link":"#升级到-https","children":[]},{"level":2,"title":"URL 签名","slug":"url-签名","link":"#url-签名","children":[]},{"level":2,"title":"双向 RSA 加密","slug":"双向-rsa-加密","link":"#双向-rsa-加密","children":[]}],"git":{"createdTime":1731861734000,"updatedTime":1731861734000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":3.37,"words":1010},"filePathRelative":"audition/other/Java-Security3.md","localizedDate":"2024年11月17日","autoDesc":true}');export{h as comp,c as data};
