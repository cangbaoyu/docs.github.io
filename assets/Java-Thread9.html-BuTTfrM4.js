import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as r,d as e}from"./app-D23J47JW.js";const n={};function i(l,t){return o(),r("div",null,t[0]||(t[0]=[e("h1",{id:"讲讲线程池的实现原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#讲讲线程池的实现原理"},[e("span",null,"讲讲线程池的实现原理")])],-1),e("p",null,"当提交一个新任务到线程池时，线程池的处理流程如下：",-1),e("ol",null,[e("li",null,"线程池判断核心线程池里的线程是否都在执行任务。如果不是，则创建一个新的工作线程来执行任务。如果核心线程池里的线程都在执行任务，则进入下个流程。"),e("li",null,"线程池判断工作队列是否已经满。如果工作队列没有满，则将新提交的任务存储在这个工作队列里。如果工作队列满了，则进入下个流程。"),e("li",null,"线程池判断线程池的线程是否都处于工作状态。如果没有，则创建一个新的工作线程来执行任务。如果已经满了，则交给饱和策略来处理这个任务。")],-1)]))}const c=a(n,[["render",i],["__file","Java-Thread9.html.vue"]]),m=JSON.parse('{"path":"/audition/threads/Java-Thread9.html","title":"讲讲线程池的实现原理","lang":"zh-CN","frontmatter":{"description":"讲讲线程池的实现原理 当提交一个新任务到线程池时，线程池的处理流程如下： 线程池判断核心线程池里的线程是否都在执行任务。如果不是，则创建一个新的工作线程来执行任务。如果核心线程池里的线程都在执行任务，则进入下个流程。 线程池判断工作队列是否已经满。如果工作队列没有满，则将新提交的任务存储在这个工作队列里。如果工作队列满了，则进入下个流程。 线程池判断线...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/threads/Java-Thread9.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"讲讲线程池的实现原理"}],["meta",{"property":"og:description","content":"讲讲线程池的实现原理 当提交一个新任务到线程池时，线程池的处理流程如下： 线程池判断核心线程池里的线程是否都在执行任务。如果不是，则创建一个新的工作线程来执行任务。如果核心线程池里的线程都在执行任务，则进入下个流程。 线程池判断工作队列是否已经满。如果工作队列没有满，则将新提交的任务存储在这个工作队列里。如果工作队列满了，则进入下个流程。 线程池判断线..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:04:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:04:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"讲讲线程池的实现原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:04:29.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1731863069000,"updatedTime":1731863069000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.73,"words":218},"filePathRelative":"audition/threads/Java-Thread9.md","localizedDate":"2024年11月17日","autoDesc":true}');export{c as comp,m as data};
