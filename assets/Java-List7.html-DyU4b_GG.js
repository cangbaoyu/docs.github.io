import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,e as a,o as n}from"./app-D_Fb6juQ.js";const r={};function s(p,e){return n(),o("div",null,e[0]||(e[0]=[a("h1",{id:"hashmap-和-concurrenthashmap-的区别",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#hashmap-和-concurrenthashmap-的区别"},[a("span",null,"HashMap 和 ConcurrentHashMap 的区别")])],-1),a("ul",null,[a("li",null,"放入 HashMap 的元素是 key-value 对。"),a("li",null,"底层说白了就是散列结构。"),a("li",null,"要将元素放入到 HashMap 中，那么 key 的类型必须要实现 hashcode 方法，默认这个方法是根据对象的地址来计算的，接着还必须覆盖对象的 equals() 方法。"),a("li",null,"ConcurrentHashMap 对整个桶数组进行了分段，而 HashMap 则没有"),a("li",null,"ConcurrentHashMap 在每一个分段上都用锁进行保护，从而让锁的粒度更精细一些，并发性能更好，而 HashMap 没有锁机制，不是线程安全的")],-1)]))}const h=t(r,[["render",s],["__file","Java-List7.html.vue"]]),i=JSON.parse('{"path":"/exambook/collection/Java-List7.html","title":"HashMap 和 ConcurrentHashMap 的区别","lang":"zh-CN","frontmatter":{"description":"HashMap 和 ConcurrentHashMap 的区别 放入 HashMap 的元素是 key-value 对。 底层说白了就是散列结构。 要将元素放入到 HashMap 中，那么 key 的类型必须要实现 hashcode 方法，默认这个方法是根据对象的地址来计算的，接着还必须覆盖对象的 equals() 方法。 ConcurrentHash...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/collection/Java-List7.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"HashMap 和 ConcurrentHashMap 的区别"}],["meta",{"property":"og:description","content":"HashMap 和 ConcurrentHashMap 的区别 放入 HashMap 的元素是 key-value 对。 底层说白了就是散列结构。 要将元素放入到 HashMap 中，那么 key 的类型必须要实现 hashcode 方法，默认这个方法是根据对象的地址来计算的，接着还必须覆盖对象的 equals() 方法。 ConcurrentHash..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:38:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:38:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap 和 ConcurrentHashMap 的区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T02:38:00.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1726886280000,"updatedTime":1726886280000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.48,"words":145},"filePathRelative":"exambook/collection/Java-List7.md","localizedDate":"2024年9月21日","autoDesc":true}');export{h as comp,i as data};
