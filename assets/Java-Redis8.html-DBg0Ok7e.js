import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as n,e as i}from"./app-CByLrYFG.js";const l={};function r(s,e){return t(),n("div",null,e[0]||(e[0]=[i('<h1 id="缓存崩溃-与-缓存降级" tabindex="-1"><a class="header-anchor" href="#缓存崩溃-与-缓存降级"><span>缓存崩溃 与 缓存降级</span></a></h1><h2 id="缓存崩溃" tabindex="-1"><a class="header-anchor" href="#缓存崩溃"><span>缓存崩溃</span></a></h2><p>碰到这种情况，一般并发量不是特别多的时候，使用最多的解决方案是加锁排队。 加锁排队只是为了减轻数据库的压力，并没有提高系统吞吐量。假设在高并发下，缓存重建期间 key 是锁着的，这时过来 1000 个请求 999 个都在阻塞的。同样会导致用户等待超时，这是个治标不治本的方法。</p><h2 id="页面降级" tabindex="-1"><a class="header-anchor" href="#页面降级"><span>页面降级</span></a></h2><p>在大促或者某些特殊情况下，某些页面占用了一些稀缺服务资源，在紧急情况下可以对其整个降级，以达到丢卒保帅；</p><h2 id="页面片段降级" tabindex="-1"><a class="header-anchor" href="#页面片段降级"><span>页面片段降级</span></a></h2><p>比如商品详情页中的商家部分因为数据错误了，此时需要对其进行降级；</p><h2 id="页面异步请求降级" tabindex="-1"><a class="header-anchor" href="#页面异步请求降级"><span>页面异步请求降级</span></a></h2><p>比如商品详情页上有推荐信息/配送至等异步加载的请求，如果这些信息响应慢或者后端服务有问题，可以进行降级；</p><h2 id="服务功能降级" tabindex="-1"><a class="header-anchor" href="#服务功能降级"><span>服务功能降级</span></a></h2><p>比如渲染商品详情页时需要调用一些不太重要的服务：相关分类、热销榜等，而这些服务在异常情况下直接不获取，即降级即可；</p><h2 id="读降级" tabindex="-1"><a class="header-anchor" href="#读降级"><span>读降级</span></a></h2><p>比如多级缓存模式，如果后端服务有问题，可以降级为只读缓存，这种方式适用于对读一致性要求不高的场景；</p><h2 id="写降级" tabindex="-1"><a class="header-anchor" href="#写降级"><span>写降级</span></a></h2><p>比如秒杀抢购，我们可以只进行Cache的更新，然后异步同步扣减库存到DB，保证最终一致性即可，此时可以将DB降级为Cache。</p><h2 id="爬虫降级" tabindex="-1"><a class="header-anchor" href="#爬虫降级"><span>爬虫降级</span></a></h2><p>在大促活动时，可以将爬虫流量导向静态页或者返回空数据，从而保护后端稀缺资源。</p><h2 id="自动开关降级" tabindex="-1"><a class="header-anchor" href="#自动开关降级"><span>自动开关降级</span></a></h2><p>自动降级是根据系统负载、资源使用情况、SLA等指标进行降级。</p><h2 id="超时降级" tabindex="-1"><a class="header-anchor" href="#超时降级"><span>超时降级</span></a></h2><p>当访问的数据库/http服务/远程调用响应慢或者长时间响应慢，且该服务不是核心服务的话可以在超时后自动降级；比如商品详情页上有推荐内容/评价，但是推荐内容/评价暂时不展示对用户购物流程不会产生很大的影响；对于这种服务是可以超时降级的。如果是调用别人的远程服务，和对方定义一个服务响应最大时间，如果超时了则自动降级。</p>',21)]))}const c=a(l,[["render",r],["__file","Java-Redis8.html.vue"]]),d=JSON.parse('{"path":"/audition/cache/Java-Redis8.html","title":"缓存崩溃 与 缓存降级","lang":"zh-CN","frontmatter":{"description":"缓存崩溃 与 缓存降级 缓存崩溃 碰到这种情况，一般并发量不是特别多的时候，使用最多的解决方案是加锁排队。 加锁排队只是为了减轻数据库的压力，并没有提高系统吞吐量。假设在高并发下，缓存重建期间 key 是锁着的，这时过来 1000 个请求 999 个都在阻塞的。同样会导致用户等待超时，这是个治标不治本的方法。 页面降级 在大促或者某些特殊情况下，某些页...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/cache/Java-Redis8.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"缓存崩溃 与 缓存降级"}],["meta",{"property":"og:description","content":"缓存崩溃 与 缓存降级 缓存崩溃 碰到这种情况，一般并发量不是特别多的时候，使用最多的解决方案是加锁排队。 加锁排队只是为了减轻数据库的压力，并没有提高系统吞吐量。假设在高并发下，缓存重建期间 key 是锁着的，这时过来 1000 个请求 999 个都在阻塞的。同样会导致用户等待超时，这是个治标不治本的方法。 页面降级 在大促或者某些特殊情况下，某些页..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:42:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:42:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缓存崩溃 与 缓存降级\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T16:42:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"缓存崩溃","slug":"缓存崩溃","link":"#缓存崩溃","children":[]},{"level":2,"title":"页面降级","slug":"页面降级","link":"#页面降级","children":[]},{"level":2,"title":"页面片段降级","slug":"页面片段降级","link":"#页面片段降级","children":[]},{"level":2,"title":"页面异步请求降级","slug":"页面异步请求降级","link":"#页面异步请求降级","children":[]},{"level":2,"title":"服务功能降级","slug":"服务功能降级","link":"#服务功能降级","children":[]},{"level":2,"title":"读降级","slug":"读降级","link":"#读降级","children":[]},{"level":2,"title":"写降级","slug":"写降级","link":"#写降级","children":[]},{"level":2,"title":"爬虫降级","slug":"爬虫降级","link":"#爬虫降级","children":[]},{"level":2,"title":"自动开关降级","slug":"自动开关降级","link":"#自动开关降级","children":[]},{"level":2,"title":"超时降级","slug":"超时降级","link":"#超时降级","children":[]}],"git":{"createdTime":1731861734000,"updatedTime":1731861734000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":2.16,"words":648},"filePathRelative":"audition/cache/Java-Redis8.md","localizedDate":"2024年11月17日","autoDesc":true}');export{c as comp,d as data};
