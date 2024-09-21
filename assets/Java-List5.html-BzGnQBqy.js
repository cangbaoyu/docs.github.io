import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,e as a,o as l}from"./app-D_Fb6juQ.js";const o={};function n(h,e){return l(),s("div",null,e[0]||(e[0]=[a("h1",{id:"hashmap-和-hashtable-的区别",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#hashmap-和-hashtable-的区别"},[a("span",null,"HashMap 和 HashTable 的区别")])],-1),a("ul",null,[a("li",null,"HashMap 几乎可以等价于 HashTable，除了 HashMap 是非 synchronized 的，并可以接受 null(HashMap 可以接受为 null 的键值 (key) 和值 (value)，而 HashTable 则不行)。"),a("li",null,"HashMap 是非 synchronized，而 HashTable 是 synchronized，这意味着 HashTable 是线程安全的，多个线程可以共享一个 HashTable；而如果没有正确的同步的话，多个线程是不能共享 HashMap 的。Java 5 提供了 ConcurrentHashMap，它是 HashTable 的替代，比 HashTable 的扩展性更好。"),a("li",null,"另一个区别是 HashMap 的迭代器 (Iterator) 是 fail-fast 迭代器，而 HashTable 的 enumerator 迭代器不是 fail-fast 的。所以当有其它线程改变了 HashMap 的结构（增加或者移除元素），将会抛出 ConcurrentModificationException，但迭代器本身的 remove() 方法移除元素则不会抛出 ConcurrentModificationException 异常。但这并不是一个一定发生的行为，要看 JVM。这条同样也是 Enumeration 和 Iterator 的区别。"),a("li",null,"由于 HashTable 是线程安全的也是 synchronized，所以在单线程环境下它比 HashMap 要慢。如果你不需要同步，只需要单一线程，那么使用 HashMap 性能要好过 HashTable。"),a("li",null,"HashMap 不能保证随着时间的推移 Map 中的元素次序是不变的。")],-1)]))}const p=t(o,[["render",n],["__file","Java-List5.html.vue"]]),c=JSON.parse('{"path":"/exambook/collection/Java-List5.html","title":"HashMap 和 HashTable 的区别","lang":"zh-CN","frontmatter":{"description":"HashMap 和 HashTable 的区别 HashMap 几乎可以等价于 HashTable，除了 HashMap 是非 synchronized 的，并可以接受 null(HashMap 可以接受为 null 的键值 (key) 和值 (value)，而 HashTable 则不行)。 HashMap 是非 synchronized，而 Has...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/collection/Java-List5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"HashMap 和 HashTable 的区别"}],["meta",{"property":"og:description","content":"HashMap 和 HashTable 的区别 HashMap 几乎可以等价于 HashTable，除了 HashMap 是非 synchronized 的，并可以接受 null(HashMap 可以接受为 null 的键值 (key) 和值 (value)，而 HashTable 则不行)。 HashMap 是非 synchronized，而 Has..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:38:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:38:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashMap 和 HashTable 的区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T02:38:00.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1726886280000,"updatedTime":1726886280000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"exambook/collection/Java-List5.md","localizedDate":"2024年9月21日","autoDesc":true}');export{p as comp,c as data};
