import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as n,d as t}from"./app-D23J47JW.js";const r={};function i(p,e){return o(),n("div",null,e[0]||(e[0]=[t("h1",{id:"自己如何实现消息队列",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#自己如何实现消息队列"},[t("span",null,"自己如何实现消息队列")])],-1),t("p",null,"大体上的设计是由一条线程 1 执行从等待列表中获取任务插入任务队列再由线程池中的线程从任务队列中取出任务去执行.",-1),t("p",null,"添加一条线程 1 主要是防止在执行耗时的任务时阻塞主线程.当执行耗时任务时,添加的任务的操作快于取出任务的操作,",-1),t("p",null,"当任务队列长度达到最大值时,线程 1 将被阻塞,等待线程 2,3... 从任务队列取出任务执行。",-1)]))}const l=a(r,[["render",i],["__file","Java-MQ5.html.vue"]]),d=JSON.parse('{"path":"/audition/mq/Java-MQ5.html","title":"自己如何实现消息队列","lang":"zh-CN","frontmatter":{"description":"自己如何实现消息队列 大体上的设计是由一条线程 1 执行从等待列表中获取任务插入任务队列再由线程池中的线程从任务队列中取出任务去执行. 添加一条线程 1 主要是防止在执行耗时的任务时阻塞主线程.当执行耗时任务时,添加的任务的操作快于取出任务的操作, 当任务队列长度达到最大值时,线程 1 将被阻塞,等待线程 2,3... 从任务队列取出任务执行。","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/mq/Java-MQ5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"自己如何实现消息队列"}],["meta",{"property":"og:description","content":"自己如何实现消息队列 大体上的设计是由一条线程 1 执行从等待列表中获取任务插入任务队列再由线程池中的线程从任务队列中取出任务去执行. 添加一条线程 1 主要是防止在执行耗时的任务时阻塞主线程.当执行耗时任务时,添加的任务的操作快于取出任务的操作, 当任务队列长度达到最大值时,线程 1 将被阻塞,等待线程 2,3... 从任务队列取出任务执行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:04:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:04:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自己如何实现消息队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:04:29.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1731863069000,"updatedTime":1731863069000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.51,"words":153},"filePathRelative":"audition/mq/Java-MQ5.md","localizedDate":"2024年11月17日","autoDesc":true}');export{l as comp,d as data};
