import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,d as t}from"./app-CByLrYFG.js";const r={};function i(c,e){return a(),n("div",null,e[0]||(e[0]=[t("h1",{id:"aba-问题",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#aba-问题"},[t("span",null,"ABA 问题")])],-1),t("p",null,"CAS 会导致“ABA问题”。",-1),t("p",null,"CAS 算法实现一个重要前提需要取出内存中某时刻的数据，而在下时刻比较并替换，那么在这个时间差类会导致数据的变化。",-1),t("p",null,"比如说一个线程 one 从内存位置 V 中取出 A，这时候另一个线程 two 也从内存中取出 A，并且 two 进行了一些操作变成了 B，然后 two 又将 V 位置的数据变成 A，这时候线程 one 进行 CAS 操作发现内存中仍然是 A，然后 one 操作成功。尽管线程 one 的 CAS 操作成功，但是不代表这个过程就是没有问题的。",-1),t("p",null,"部分乐观锁的实现是通过版本号（version）的方式来解决 ABA 问题，乐观锁每次在执行数据的修改操作时，都会带上一个版本号，一旦版本号和数据的版本号一致就可以执行修改操作并对版本号执行 +1 操作，否则就执行失败。因为每次操作的版本号都会随之增加，所以不会出现 ABA 问题，因为版本号只会增加不会减少。",-1)]))}const l=o(r,[["render",i],["__file","Java-Locking6.html.vue"]]),m=JSON.parse('{"path":"/audition/threads/Java-Locking6.html","title":"ABA 问题","lang":"zh-CN","frontmatter":{"description":"ABA 问题 CAS 会导致“ABA问题”。 CAS 算法实现一个重要前提需要取出内存中某时刻的数据，而在下时刻比较并替换，那么在这个时间差类会导致数据的变化。 比如说一个线程 one 从内存位置 V 中取出 A，这时候另一个线程 two 也从内存中取出 A，并且 two 进行了一些操作变成了 B，然后 two 又将 V 位置的数据变成 A，这时候线程...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/threads/Java-Locking6.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"ABA 问题"}],["meta",{"property":"og:description","content":"ABA 问题 CAS 会导致“ABA问题”。 CAS 算法实现一个重要前提需要取出内存中某时刻的数据，而在下时刻比较并替换，那么在这个时间差类会导致数据的变化。 比如说一个线程 one 从内存位置 V 中取出 A，这时候另一个线程 two 也从内存中取出 A，并且 two 进行了一些操作变成了 B，然后 two 又将 V 位置的数据变成 A，这时候线程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:42:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:42:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ABA 问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T16:42:14.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1731861734000,"updatedTime":1731861734000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.02,"words":305},"filePathRelative":"audition/threads/Java-Locking6.md","localizedDate":"2024年11月17日","autoDesc":true}');export{l as comp,m as data};
