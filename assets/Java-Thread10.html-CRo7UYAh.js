import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as a,e as r}from"./app-Bu8N3Y5k.js";const d={};function i(c,e){return o(),a("div",null,e[0]||(e[0]=[r('<h1 id="线程池的几种方式与使用场景" tabindex="-1"><a class="header-anchor" href="#线程池的几种方式与使用场景"><span>线程池的几种方式与使用场景</span></a></h1><p>在 <code>Executors</code> 类里面提供了一些静态工厂，生成一些常用的线程池。</p><ol><li><code>newFixedThreadPool</code>：创建固定大小的线程池。线程池的大小一旦达到最大值就会保持不变，如果某个线程因为执行异常而结束，那么线程池会补充一个新线程。</li><li><code>newCachedThreadPool</code>：创建一个可缓存的线程池。如果线程池的大小超过了处理任务所需要的线程，那么就会回收部分空闲（60秒不执行任务）的线程，当任务数增加时，此线程池又可以智能的添加新线程来处理任务。此线程池不会对线程池大小做限制，线程池大小完全依赖于操作系统（或者说 JVM）能够创建的最大线程大小。</li><li><code>newSingleThreadExecutor</code>：创建一个单线程的线程池。这个线程池只有一个线程在工作，也就是相当于单线程串行执行所有任务。如果这个唯一的线程因为异常结束，那么会有一个新的线程来替代它。此线程池保证所有任务的执行顺序按照任务的提交顺序执行。</li><li><code>newScheduledThreadPool</code>：创建一个大小无限的线程池。此线程池支持定时以及周期性执行任务的需求。</li><li><code>newSingleThreadScheduledExecutor</code>：创建一个单线程的线程池。此线程池支持定时以及周期性执行任务的需求。</li></ol>',3)]))}const h=t(d,[["render",i],["__file","Java-Thread10.html.vue"]]),p=JSON.parse('{"path":"/audition/threads/Java-Thread10.html","title":"线程池的几种方式与使用场景","lang":"zh-CN","frontmatter":{"description":"线程池的几种方式与使用场景 在 Executors 类里面提供了一些静态工厂，生成一些常用的线程池。 newFixedThreadPool：创建固定大小的线程池。线程池的大小一旦达到最大值就会保持不变，如果某个线程因为执行异常而结束，那么线程池会补充一个新线程。 newCachedThreadPool：创建一个可缓存的线程池。如果线程池的大小超过了处理...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/threads/Java-Thread10.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"线程池的几种方式与使用场景"}],["meta",{"property":"og:description","content":"线程池的几种方式与使用场景 在 Executors 类里面提供了一些静态工厂，生成一些常用的线程池。 newFixedThreadPool：创建固定大小的线程池。线程池的大小一旦达到最大值就会保持不变，如果某个线程因为执行异常而结束，那么线程池会补充一个新线程。 newCachedThreadPool：创建一个可缓存的线程池。如果线程池的大小超过了处理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:19:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线程池的几种方式与使用场景\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T16:19:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1731860389000,"updatedTime":1731860389000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"audition/threads/Java-Thread10.md","localizedDate":"2024年11月17日","autoDesc":true}');export{h as comp,p as data};
