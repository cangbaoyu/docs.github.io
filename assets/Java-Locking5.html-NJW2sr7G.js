import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o,c as n,d as t}from"./app-Bu8N3Y5k.js";const r={};function i(c,e){return o(),n("div",null,e[0]||(e[0]=[t("h1",{id:"cas-乐观锁",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#cas-乐观锁"},[t("span",null,"CAS 乐观锁")])],-1),t("p",null,"CAS 是项乐观锁技术，当多个线程尝试使用 CAS 同时更新同一个变量时，只有其中一个线程能更新变量的值，而其它线程都失败，失败的线程并不会被挂起，而是被告知这次竞争中失败，并可以再次尝试。",-1),t("p",null,"CAS 操作包含三个操作数 —— 内存位置（V）、预期原值（A）和新值(B)。如果内存位置的值与预期原值相匹配，那么处理器会自动将该位置值更新为新值。否则，处理器不做任何操作。无论哪种情况，它都会在 CAS 指令之前返回该位置的值。（在 CAS 的一些特殊情况下将仅返回 CAS 是否成功，而不提取当前值。）CAS 有效地说明了“我认为位置 V 应该包含值 A；如果包含该值，则将 B 放到这个位置；否则，不要更改该位置，只告诉我这个位置现在的值即可。”这其实和乐观锁的冲突检查 + 数据更新的原理是一样的。",-1)]))}const m=a(r,[["render",i],["__file","Java-Locking5.html.vue"]]),d=JSON.parse('{"path":"/audition/threads/Java-Locking5.html","title":"CAS 乐观锁","lang":"zh-CN","frontmatter":{"description":"CAS 乐观锁 CAS 是项乐观锁技术，当多个线程尝试使用 CAS 同时更新同一个变量时，只有其中一个线程能更新变量的值，而其它线程都失败，失败的线程并不会被挂起，而是被告知这次竞争中失败，并可以再次尝试。 CAS 操作包含三个操作数 —— 内存位置（V）、预期原值（A）和新值(B)。如果内存位置的值与预期原值相匹配，那么处理器会自动将该位置值更新为新...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/threads/Java-Locking5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"CAS 乐观锁"}],["meta",{"property":"og:description","content":"CAS 乐观锁 CAS 是项乐观锁技术，当多个线程尝试使用 CAS 同时更新同一个变量时，只有其中一个线程能更新变量的值，而其它线程都失败，失败的线程并不会被挂起，而是被告知这次竞争中失败，并可以再次尝试。 CAS 操作包含三个操作数 —— 内存位置（V）、预期原值（A）和新值(B)。如果内存位置的值与预期原值相匹配，那么处理器会自动将该位置值更新为新..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:19:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAS 乐观锁\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T16:19:49.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1731860389000,"updatedTime":1731860389000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.94,"words":282},"filePathRelative":"audition/threads/Java-Locking5.md","localizedDate":"2024年11月17日","autoDesc":true}');export{m as comp,d as data};
