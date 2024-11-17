import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as s,e as a}from"./app-D23J47JW.js";const n={};function l(p,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="如何理解-restful-api-的幂等性" tabindex="-1"><a class="header-anchor" href="#如何理解-restful-api-的幂等性"><span>如何理解 RESTful API 的幂等性</span></a></h1><h2 id="什么是幂等性" tabindex="-1"><a class="header-anchor" href="#什么是幂等性"><span>什么是幂等性</span></a></h2><p>HTTP 幂等方法，是指无论调用多少次都不会有不同结果的 HTTP 方法。不管你调用一次，还是调用一百次，一千次，结果都是相同的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GET     /tickets       # 获取ticket列表</span></span>
<span class="line"><span>GET     /tickets/12    # 查看某个具体的ticket</span></span>
<span class="line"><span>POST    /tickets       # 新建一个ticket</span></span>
<span class="line"><span>PUT     /tickets/12    # 更新ticket 12</span></span>
<span class="line"><span>PATCH   /tickets/12    # 更新ticket 12</span></span>
<span class="line"><span>DELETE  /tickets/12    # 删除ticekt 12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http-get-方法" tabindex="-1"><a class="header-anchor" href="#http-get-方法"><span>HTTP GET 方法</span></a></h3><p>HTTP GET 方法，用于获取资源，不管调用多少次接口，结果都不会改变，所以是幂等的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GET     /tickets       # 获取ticket列表</span></span>
<span class="line"><span>GET     /tickets/12    # 查看某个具体的ticket</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>只是查询数据，不会影响到资源的变化，因此我们认为它幂等。</p><p>值得注意，幂等性指的是作用于结果而非资源本身。怎么理解呢？例如，这个 HTTP GET 方法可能会每次得到不同的返回内容，但并不影响资源。</p><p>可能你会问有这种情况么？当然有咯。例如，我们有一个接口获取当前时间，我们就应该设计成</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GET     /service_time # 获取服务器当前时间</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>它本身不会对资源本身产生影响，因此满足幂等性。</p><h3 id="http-post-方法" tabindex="-1"><a class="header-anchor" href="#http-post-方法"><span>HTTP POST 方法</span></a></h3><p>HTTP POST 方法是一个非幂等方法，因为调用多次，都将产生新的资源。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>POST    /tickets       # 新建一个ticket</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>因为它会对资源本身产生影响，每次调用都会有新的资源产生，因此不满足幂等性。</p><h3 id="http-put-方法" tabindex="-1"><a class="header-anchor" href="#http-put-方法"><span>HTTP PUT 方法</span></a></h3><p>HTTP PUT 方法是不是幂等的呢？我们来看下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PUT     /tickets/12    # 更新ticket 12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>因为它直接把实体部分的数据替换到服务器的资源，我们多次调用它，只会产生一次影响，但是有相同结果的 HTTP 方法，所以满足幂等性。</p><h3 id="http-patch-方法" tabindex="-1"><a class="header-anchor" href="#http-patch-方法"><span>HTTP PATCH 方法</span></a></h3><p>HTTP PATCH 方法是非幂等的。HTTP POST 方法和 HTTP PUT 方法可能比较好理解，但是 HTTP PATCH 方法只是更新部分资源，怎么是非幂等的呢?</p><p>因为，PATCH 提供的实体则需要根据程序或其它协议的定义，解析后在服务器上执行，以此来修改服务器上的资源。换句话说，PATCH 请求是会执行某个程序的，如果重复提交，程序可能执行多次，对服务器上的资源就可能造成额外的影响，这就可以解释它为什么是非幂等的了。</p><p>可能你还不能理解这点。我们举个例子</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PATCH   /tickets/12    # 更新ticket 12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此时，我们服务端对方法的处理是，当调用一次方法，更新部分字段，将这条 ticket 记录的操作记录加一，这次，每次调用的资源是不是变了呢，所以它是有可能是非幂等的操作。</p><h3 id="http-delete-方法" tabindex="-1"><a class="header-anchor" href="#http-delete-方法"><span>HTTP DELETE 方法</span></a></h3><p>HTTP DELETE 方法用于删除资源，会将资源删除。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>DELETE  /tickets/12    # 删除ticekt 12</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>调用一次和多次对资源产生影响是相同的，所以也满足幂等性。</p><h2 id="如何设计符合幂等性的高质量-restful-api" tabindex="-1"><a class="header-anchor" href="#如何设计符合幂等性的高质量-restful-api"><span>如何设计符合幂等性的高质量 RESTful API</span></a></h2><h3 id="http-get-vs-http-post" tabindex="-1"><a class="header-anchor" href="#http-get-vs-http-post"><span>HTTP GET vs HTTP POST</span></a></h3><p>也许，你会想起一个面试题。<strong>HTTP 请求的 GET 与 POST 方式有什么区别</strong>？ 你可能会回答到：GET 方式通过 URL 提交数据，数据在 URL 中可以看到；POST 方式，数据放置在 HTML HEADER 内提交。但是，我们现在从 RESTful 的资源角度来看待问题，HTTP GET 方法是幂等的，所以它适合作为查询操作，HTTP POST 方法是非幂等的，所以用来表示新增操作。</p><p>但是，也有例外，我们有的时候可能需要把查询方法改造成 HTTP POST 方法。比如，超长（1k）的 GET URL 使用 POST 方法来替代，因为 GET 受到 URL 长度的限制。虽然，它不符合幂等性，但是它是一种折中的方案。</p><h3 id="http-post-vs-http-put" tabindex="-1"><a class="header-anchor" href="#http-post-vs-http-put"><span>HTTP POST vs HTTP PUT</span></a></h3><p>对于 HTTP POST 方法和 HTTP PUT 方法，我们一般的理解是 POST 表示创建资源，PUT 表示更新资源。当然，这个是正确的理解。</p><p>但是，实际上，两个方法都用于创建资源，更为本质的差别是在幂等性。HTTP POST 方法是非幂等，所以用来表示创建资源，HTTP PUT 方法是幂等的，因此表示更新资源更加贴切。</p><h3 id="http-put-vs-http-patch" tabindex="-1"><a class="header-anchor" href="#http-put-vs-http-patch"><span>HTTP PUT vs HTTP PATCH</span></a></h3><p>此时，你看会有另外一个问题。HTTP PUT 方法和 HTTP PATCH 方法，都是用来表述更新资源，它们之间有什么区别呢？我们一般的理解是 PUT 表示更新全部资源，PATCH 表示更新部分资源。首先，这个是我们遵守的第一准则。根据上面的描述，PATCH 方法是非幂等的，因此我们在设计我们服务端的 RESTful API 的时候，也需要考虑。如果，我们想要明确的告诉调用者我们的资源是幂等的，我的设计更倾向于使用 HTTP PUT 方法。</p><h2 id="如何保证接口的幂等性" tabindex="-1"><a class="header-anchor" href="#如何保证接口的幂等性"><span>如何保证接口的幂等性</span></a></h2><p>当通过调用创建实例接口在负载均衡中创建云服务器时，如果遇到了请求超时或服务器内部错误时，客户端可能会尝试重发请求，这时客户端可以通过提供可选参数 ClientToken 避免服务器创建出比预期要多的实例，也就是通过提供 ClientToken 参数保证请求的幂等性。ClientToken 是一个由客户端生成的唯一的、大小写敏感、不超过 64 个 ASCII 字符的字符串。</p><p>如果用户使用同一个 ClientToken 值调用创建实例接口，则服务端会返回相同的请求结果，包含相同的 InstanceId。因此用户在遇到错误进行重试的时候，可以通过提供相同的 ClientToken 值，来确保负载均衡只创建一个实例，并得到这个实例的 InstanceId。</p><p>如果用户提供了一个已经使用过的 ClientToken，但其他请求参数不同，则负载均衡会返回 IdempotentParameterMismatch 的错误代码。但需要注意的是，SignatureNonce、Timestamp 和 Signature 参数在重试时是需要变化的，因为负载均衡使用 SignatureNonce 来防止重放攻击，使用 Timestamp 来标记每次请求时间，所以再次请求必须提供不同的 SignatureNonce 和 Timestamp 参数值，这同时也会导致 Signature 值的变化。</p><p>通常，客户端只需要在 500（InternetError）或 503（ServiceUnavailable）错误、或者无法得到响应结果的情况下进行重试操作。返回结果是 200 时，重试可以得到上次相同的结果，但不会对服务端状态带来任何影响。而对 4xx 的返回错误，通常重试也是不能成功的。</p>`,44)]))}const d=t(n,[["render",l],["__file","Java-Service6.html.vue"]]),c=JSON.parse('{"path":"/audition/microservices/Java-Service6.html","title":"如何理解 RESTful API 的幂等性","lang":"zh-CN","frontmatter":{"description":"如何理解 RESTful API 的幂等性 什么是幂等性 HTTP 幂等方法，是指无论调用多少次都不会有不同结果的 HTTP 方法。不管你调用一次，还是调用一百次，一千次，结果都是相同的。 HTTP GET 方法 HTTP GET 方法，用于获取资源，不管调用多少次接口，结果都不会改变，所以是幂等的。 只是查询数据，不会影响到资源的变化，因此我们认为它...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/microservices/Java-Service6.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"如何理解 RESTful API 的幂等性"}],["meta",{"property":"og:description","content":"如何理解 RESTful API 的幂等性 什么是幂等性 HTTP 幂等方法，是指无论调用多少次都不会有不同结果的 HTTP 方法。不管你调用一次，还是调用一百次，一千次，结果都是相同的。 HTTP GET 方法 HTTP GET 方法，用于获取资源，不管调用多少次接口，结果都不会改变，所以是幂等的。 只是查询数据，不会影响到资源的变化，因此我们认为它..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:04:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:04:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何理解 RESTful API 的幂等性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:04:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是幂等性","slug":"什么是幂等性","link":"#什么是幂等性","children":[{"level":3,"title":"HTTP GET 方法","slug":"http-get-方法","link":"#http-get-方法","children":[]},{"level":3,"title":"HTTP POST 方法","slug":"http-post-方法","link":"#http-post-方法","children":[]},{"level":3,"title":"HTTP PUT 方法","slug":"http-put-方法","link":"#http-put-方法","children":[]},{"level":3,"title":"HTTP PATCH 方法","slug":"http-patch-方法","link":"#http-patch-方法","children":[]},{"level":3,"title":"HTTP DELETE 方法","slug":"http-delete-方法","link":"#http-delete-方法","children":[]}]},{"level":2,"title":"如何设计符合幂等性的高质量 RESTful API","slug":"如何设计符合幂等性的高质量-restful-api","link":"#如何设计符合幂等性的高质量-restful-api","children":[{"level":3,"title":"HTTP GET vs HTTP POST","slug":"http-get-vs-http-post","link":"#http-get-vs-http-post","children":[]},{"level":3,"title":"HTTP POST vs HTTP PUT","slug":"http-post-vs-http-put","link":"#http-post-vs-http-put","children":[]},{"level":3,"title":"HTTP PUT vs HTTP PATCH","slug":"http-put-vs-http-patch","link":"#http-put-vs-http-patch","children":[]}]},{"level":2,"title":"如何保证接口的幂等性","slug":"如何保证接口的幂等性","link":"#如何保证接口的幂等性","children":[]}],"git":{"createdTime":1731863069000,"updatedTime":1731863069000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":5.67,"words":1701},"filePathRelative":"audition/microservices/Java-Service6.md","localizedDate":"2024年11月17日","autoDesc":true}');export{d as comp,c as data};
