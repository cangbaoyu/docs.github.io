import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as l,d as t,f as a}from"./app-D23J47JW.js";const n={};function r(c,e){return i(),l("div",null,e[0]||(e[0]=[t("h1",{id:"volatile-实现原理",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#volatile-实现原理"},[t("span",null,"volatile 实现原理")])],-1),t("ul",null,[t("li",null,[a("在 JVM 底层 "),t("code",null,"volatile"),a(" 是采用“内存屏障”来实现的")]),t("li",null,"缓存一致性协议（MESI协议）它确保每个缓存中使用的共享变量的副本是一致的。其核心思想如下：当某个 CPU 在写数据时，如果发现操作的变量是共享变量，则会通知其他 CPU 告知该变量的缓存行是无效的，因此其他 CPU 在读取该变量时，发现其无效会重新从主存中加载数据")],-1)]))}const m=o(n,[["render",r],["__file","Java-Locking2.html.vue"]]),s=JSON.parse('{"path":"/audition/threads/Java-Locking2.html","title":"volatile 实现原理","lang":"zh-CN","frontmatter":{"description":"volatile 实现原理 在 JVM 底层 volatile 是采用“内存屏障”来实现的 缓存一致性协议（MESI协议）它确保每个缓存中使用的共享变量的副本是一致的。其核心思想如下：当某个 CPU 在写数据时，如果发现操作的变量是共享变量，则会通知其他 CPU 告知该变量的缓存行是无效的，因此其他 CPU 在读取该变量时，发现其无效会重新从主存中加载数据","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/threads/Java-Locking2.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"volatile 实现原理"}],["meta",{"property":"og:description","content":"volatile 实现原理 在 JVM 底层 volatile 是采用“内存屏障”来实现的 缓存一致性协议（MESI协议）它确保每个缓存中使用的共享变量的副本是一致的。其核心思想如下：当某个 CPU 在写数据时，如果发现操作的变量是共享变量，则会通知其他 CPU 告知该变量的缓存行是无效的，因此其他 CPU 在读取该变量时，发现其无效会重新从主存中加载数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:04:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:04:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"volatile 实现原理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:04:29.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1731863069000,"updatedTime":1731863069000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.44,"words":131},"filePathRelative":"audition/threads/Java-Locking2.md","localizedDate":"2024年11月17日","autoDesc":true}');export{m as comp,s as data};
