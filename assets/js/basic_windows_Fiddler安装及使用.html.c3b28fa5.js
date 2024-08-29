"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[770],{105:(i,e)=>{e.A=(i,e)=>{const d=i.__vccOpts||i;for(const[i,t]of e)d[i]=t;return d}},1258:(i,e,d)=>{d.r(e),d.d(e,{comp:()=>n,data:()=>p});var t=d(6904);const a=[(0,t.Fv)('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>Fiddler 是一个 http 协议调试代理工具，它能够记录并检查所有你的电脑和互联网之间的 http 通讯，设置断点，查看所有的进出 Fiddler 的数据。 Fiddler 要比其他的网络调试器要更加简单，因为它不仅仅暴露 http 通讯还提供了一个用户友好的格式。</p><h2 id="为什么使用-fiddler" tabindex="-1"><a class="header-anchor" href="#为什么使用-fiddler"><span>为什么使用 Fiddler</span></a></h2><ul><li>FireBug：虽然可以抓包，但是对于分析 http 请求的详细信息，不够强大。模拟 http 请求的功能也不够，且 firebug 常常是需要“无刷新修改”，如果刷新了页面，所有的修改都不会保存。</li><li>WireShark：是通用的抓包工具，但是比较庞大，对于只需要抓取 http 请求的应用来说，似乎有些大材小用。</li><li>HttpWatch：也是比较常用的 http 抓包工具，但是只支持 IE 和 firefox 浏览器(其他浏览器可能会有相应的插件)，对于想要调试 chrome 浏览器的 http 请求，似乎稍显无力，而 Fiddler 是一个使用本地 127.0.0.1:8888 的 HTTP 代理，任何能够设置 HTTP 代理为 127.0.0.1:8888 的浏览器和应用程序都可以使用 Fiddler。</li></ul><h2 id="fiddler-简介" tabindex="-1"><a class="header-anchor" href="#fiddler-简介"><span>Fiddler 简介</span></a></h2><p>Fiddler 是位于客户端和服务器端的 HTTP 代理，也是目前最常用的 http 抓包工具之一，它能够记录客户端和服务器之间的所有 HTTP 请求，可以针对特定的 HTTP 请求，分析请求数据、设置断点、调试web应用、修改请求的数据，甚至可以修改服务器返回的数据，功能非常强大，是 web 调试的利器。</p><p>既然是代理，也就是说：客户端的所有请求都要先经过 Fiddler，然后转发到相应的服务器，反之，服务器端的所有响应，也都会先经过 Fiddler 然后发送到客户端，基于这个原因，Fiddler支持所有可以设置 http 代理为 127.0.0.1:8888 的浏览器和应用程序。使用了 Fiddler 之后，web 客户端和服务器的请求如下所示：</p><figure><img src="https://pic.sansei.top/images/windows/772156-20170609120423684-397552650.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="fiddler-捕获-https-会话" tabindex="-1"><a class="header-anchor" href="#fiddler-捕获-https-会话"><span>Fiddler 捕获 HTTPS 会话</span></a></h2><p>默认下，Fiddler 不会捕获 <code>HTTPS</code> 会话，需要设置下, 打开 <code>Fiddler Tools</code> --&gt; <code>Fiddler Options</code> --&gt; <code>HTTPS</code></p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517155878.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>选中 Checkbox，弹出如下的对话框，点击 “Yes”</strong></p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517155967.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>安装证书</strong></p><figure><img src="https://pic.sansei.top/images/windows/fidller_1517156054.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>忽略 HTTPS 错误</strong></p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517156151.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="fiddler-基本界面" tabindex="-1"><a class="header-anchor" href="#fiddler-基本界面"><span>Fiddler 基本界面</span></a></h2><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517156582.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong><code>Inspectors</code> 下有很多查看 <code>Request</code> 或者 <code>Response</code> 的消息。其中 <code>Raw</code> 可以查看完整的消息，<code>Headers</code> 只查看消息中的 <code>header</code>，<code>JSON</code> 返回响应的 <code>JSON</code> 数据，如下图：</strong></p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517157333.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="fiddler-http-统计" tabindex="-1"><a class="header-anchor" href="#fiddler-http-统计"><span>Fiddler HTTP 统计</span></a></h2><p>通过陈列出所有的 HTTP 通信量，Fiddler 可以很容易的向您展示哪些文件生成了您当前请求的页面。使用 Statistics 页签，用户可以通过选择多个会话来得来这几个会话的总的信息统计，比如多个请求和传输的字节数。选择第一个请求和最后一个请求，可获得整个页面加载所消耗的总体时间。</p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517157702.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="fiddler-命令行工具" tabindex="-1"><a class="header-anchor" href="#fiddler-命令行工具"><span>Fiddler 命令行工具</span></a></h2><p>Fiddler 的左下角有一个命令行工具叫做 QuickExec，允许你直接输入命令，常用命令，如：</p><ul><li><code>help</code>：打开官方的使用页面介绍，所有的命令都会列出来</li><li><code>cls</code>：清屏(Ctrl + X)</li><li><code>select</code>：选择会话的命令</li><li><code>?.png</code>：用来选择 png 后缀的图片</li><li><code>bpu</code>：截获 Request</li></ul><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517158627.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="fiddler-会话管理" tabindex="-1"><a class="header-anchor" href="#fiddler-会话管理"><span>Fiddler 会话管理</span></a></h2><p>每次使用 Fiddler, 打开一个网站，都能在 Fiddler 中看到几十个会话，看得眼花缭乱。最好的办法是过滤掉一些会话，比如过滤掉图片的会话. Fiddler 中有过滤的功能, 在右边的 Filters 页签中</p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517159097.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="过滤会话" tabindex="-1"><a class="header-anchor" href="#过滤会话"><span>过滤会话</span></a></h3><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517159097.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="比较会话" tabindex="-1"><a class="header-anchor" href="#比较会话"><span>比较会话</span></a></h3><p>选中 2 个会话，右键然后点击 Compare，就可以用 WinDiff 来比较两个会话的不同了(在此之前需要先设置并安装 WinDiff)</p><h4 id="设置-windiff" tabindex="-1"><a class="header-anchor" href="#设置-windiff"><span>设置 WinDiff</span></a></h4><p>图1</p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517159628.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>图2</p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517159657.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="比较" tabindex="-1"><a class="header-anchor" href="#比较"><span>比较</span></a></h4><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517159707.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517159730.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="查询会话" tabindex="-1"><a class="header-anchor" href="#查询会话"><span>查询会话</span></a></h3><p>用快捷键 <code>Ctrl+F</code> 打开 <code>Find Sessions</code> 的对话框，输入关键字查询你要的会话。查询到的会话会用黄色显示 <img src="https://pic.sansei.top/images/windows/fiddler_1517160507.png" alt="" loading="lazy"></p><h3 id="保存会话" tabindex="-1"><a class="header-anchor" href="#保存会话"><span>保存会话</span></a></h3><p>有些时候我们需要把会话保存下来，以便发给别人或者以后去分析。选中你想保存的会话，然后点击 <code>File</code> --&gt; <code>Save</code> --&gt; <code>Selected Sessions</code></p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517160597.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="fiddler-手机抓包" tabindex="-1"><a class="header-anchor" href="#fiddler-手机抓包"><span>Fiddler 手机抓包</span></a></h2><h3 id="fiddler-配置" tabindex="-1"><a class="header-anchor" href="#fiddler-配置"><span>Fiddler 配置</span></a></h3><p>需要配置 <code>Fiddler</code> 允许远程连接，点击 <code>Tools</code> --&gt; <code>Fiddler Options</code> --&gt; <code>Connections</code>，勾选 <code>allow remote computers to connect</code>，默认监听端口为 <code>8888</code>，若端口被占用可以设置成其他的，配置好后要重新启动 <code>Fiddler</code>，如下图：</p><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517161191.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="ios-系统抓包" tabindex="-1"><a class="header-anchor" href="#ios-系统抓包"><span>iOS 系统抓包</span></a></h3><h4 id="设置网络代理" tabindex="-1"><a class="header-anchor" href="#设置网络代理"><span>设置网络代理</span></a></h4><p>打开 <code>iPhone</code>, 找到你的网络连接，打开 <code>HTTP 代理</code>，输入 <code>Fiddler</code> 所在机器的 <code>IP</code> 地址以及 <code>Fiddler</code> 的端口号 <code>8888</code></p><figure><img src="https://pic.sansei.top/images/windows/IMG_0412.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="安装-fiddler-证书" tabindex="-1"><a class="header-anchor" href="#安装-fiddler-证书"><span>安装 Fiddler 证书</span></a></h4><p>这一步是为了让 <code>Fiddler</code> 能捕获 <code>HTTPS</code> 请求。如果你只需要截获 <code>HTTP</code> 请求，可以忽略这一步</p><figure><img src="https://pic.sansei.top/images/windows/IMG_0413.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>首先要知道 <code>Fiddler</code> 所在的机器的 <code>IP</code> 地址，例如我安装了 <code>Fiddler</code> 的机器的 <code>IP</code> 地址是：<code>192.168.0.103</code> 打开 <code>iPhone</code> 的 <code>Safari</code>，访问 <code>http://192.168.0.103:8888</code>，点击 <code>FiddlerRoot certificate</code> 然后安装证书</p><figure><img src="https://pic.sansei.top/images/windows/IMG_0414.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/windows/IMG_0415.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/windows/IMG_0416.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/windows/IMG_0417.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="开启-fiddler-证书" tabindex="-1"><a class="header-anchor" href="#开启-fiddler-证书"><span>开启 Fiddler 证书</span></a></h4><p>iOS 10.3 以后，安装了的证书不是默认启用的，而是需要手动开启。<code>设置</code> --&gt; <code>通用</code> -&gt; <code>关于本机</code> -&gt; <code>证书信息设置</code></p><figure><img src="https://pic.sansei.top/images/windows/IMG_0418.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="抓包效果图" tabindex="-1"><a class="header-anchor" href="#抓包效果图"><span>抓包效果图</span></a></h3><figure><img src="https://pic.sansei.top/images/windows/fiddler_1517163431.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><p>用完了，需要把 <code>iPhone</code> 上的 <code>Fiddler</code> 代理关闭，否则无法上网。</p>',71)],s={},n=(0,d(105).A)(s,[["render",function(i,e){return(0,t.uX)(),(0,t.CE)("div",null,a)}]]),p=JSON.parse('{"path":"/basic/windows/Fiddler%E5%AE%89%E8%A3%85%E5%8F%8A%E4%BD%BF%E7%94%A8.html","title":"Fiddler 安装及使用","lang":"zh-CN","frontmatter":{"title":"Fiddler 安装及使用","icon":"wand-magic-sparkles","order":3,"category":["Windows"],"tag":["Windows"],"description":"概述 Fiddler 是一个 http 协议调试代理工具，它能够记录并检查所有你的电脑和互联网之间的 http 通讯，设置断点，查看所有的进出 Fiddler 的数据。 Fiddler 要比其他的网络调试器要更加简单，因为它不仅仅暴露 http 通讯还提供了一个用户友好的格式。 为什么使用 Fiddler FireBug：虽然可以抓包，但是对于分析 h...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/basic/windows/Fiddler%E5%AE%89%E8%A3%85%E5%8F%8A%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"Fiddler 安装及使用"}],["meta",{"property":"og:description","content":"概述 Fiddler 是一个 http 协议调试代理工具，它能够记录并检查所有你的电脑和互联网之间的 http 通讯，设置断点，查看所有的进出 Fiddler 的数据。 Fiddler 要比其他的网络调试器要更加简单，因为它不仅仅暴露 http 通讯还提供了一个用户友好的格式。 为什么使用 Fiddler FireBug：虽然可以抓包，但是对于分析 h..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/windows/772156-20170609120423684-397552650.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T09:01:42.000Z"}],["meta",{"property":"article:tag","content":"Windows"}],["meta",{"property":"article:modified_time","content":"2024-08-29T09:01:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fiddler 安装及使用\\",\\"image\\":[\\"https://pic.sansei.top/images/windows/772156-20170609120423684-397552650.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517155878.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517155967.png\\",\\"https://pic.sansei.top/images/windows/fidller_1517156054.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517156151.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517156582.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517157333.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517157702.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517158627.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517159097.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517159097.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517159628.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517159657.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517159707.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517159730.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517160507.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517160597.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517161191.png\\",\\"https://pic.sansei.top/images/windows/IMG_0412.png\\",\\"https://pic.sansei.top/images/windows/IMG_0413.png\\",\\"https://pic.sansei.top/images/windows/IMG_0414.png\\",\\"https://pic.sansei.top/images/windows/IMG_0415.png\\",\\"https://pic.sansei.top/images/windows/IMG_0416.png\\",\\"https://pic.sansei.top/images/windows/IMG_0417.png\\",\\"https://pic.sansei.top/images/windows/IMG_0418.png\\",\\"https://pic.sansei.top/images/windows/fiddler_1517163431.png\\"],\\"dateModified\\":\\"2024-08-29T09:01:42.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"为什么使用 Fiddler","slug":"为什么使用-fiddler","link":"#为什么使用-fiddler","children":[]},{"level":2,"title":"Fiddler 简介","slug":"fiddler-简介","link":"#fiddler-简介","children":[]},{"level":2,"title":"Fiddler 捕获 HTTPS 会话","slug":"fiddler-捕获-https-会话","link":"#fiddler-捕获-https-会话","children":[]},{"level":2,"title":"Fiddler 基本界面","slug":"fiddler-基本界面","link":"#fiddler-基本界面","children":[]},{"level":2,"title":"Fiddler HTTP 统计","slug":"fiddler-http-统计","link":"#fiddler-http-统计","children":[]},{"level":2,"title":"Fiddler 命令行工具","slug":"fiddler-命令行工具","link":"#fiddler-命令行工具","children":[]},{"level":2,"title":"Fiddler 会话管理","slug":"fiddler-会话管理","link":"#fiddler-会话管理","children":[{"level":3,"title":"过滤会话","slug":"过滤会话","link":"#过滤会话","children":[]},{"level":3,"title":"比较会话","slug":"比较会话","link":"#比较会话","children":[]},{"level":3,"title":"查询会话","slug":"查询会话","link":"#查询会话","children":[]},{"level":3,"title":"保存会话","slug":"保存会话","link":"#保存会话","children":[]}]},{"level":2,"title":"Fiddler 手机抓包","slug":"fiddler-手机抓包","link":"#fiddler-手机抓包","children":[{"level":3,"title":"Fiddler 配置","slug":"fiddler-配置","link":"#fiddler-配置","children":[]},{"level":3,"title":"iOS 系统抓包","slug":"ios-系统抓包","link":"#ios-系统抓包","children":[]},{"level":3,"title":"抓包效果图","slug":"抓包效果图","link":"#抓包效果图","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"createdTime":1724922102000,"updatedTime":1724922102000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":4.68,"words":1404},"filePathRelative":"basic/windows/Fiddler安装及使用.md","localizedDate":"2024年8月29日","autoDesc":true}')}}]);