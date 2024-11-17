import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,e as o}from"./app-Bu8N3Y5k.js";const n={};function s(r,e){return a(),i("div",null,e[0]||(e[0]=[o('<h1 id="谈谈业务中使用分布式的场景" tabindex="-1"><a class="header-anchor" href="#谈谈业务中使用分布式的场景"><span>谈谈业务中使用分布式的场景</span></a></h1><p>首先，需要了解系统为什么使用分布式。</p><p>随着互联网的发展，传统单工程项目的很多性能瓶颈越发凸显，性能瓶颈可以有几个方面：</p><ol><li>应用服务层：随着用户量的增加，并发量增加，单项目难以承受如此大的并发请求导致的性能瓶颈。</li><li>底层数据库层：随着业务的发展，数据库压力越来越大，导致的性能瓶颈。</li></ol><h2 id="场景1-应用系统集群的-session-共享" tabindex="-1"><a class="header-anchor" href="#场景1-应用系统集群的-session-共享"><span>场景1：应用系统集群的 Session 共享</span></a></h2><p>应用系统集群最简单的就是服务器集群，比如：Tomcat 集群。应用系统集群的时候，比较凸显的问题是 Session 共享，Session 共享我们一是可以通过服务器插件来解决。另外一种也可以通过 Redis 等中间件实现。</p><h2 id="场景2-应用系统的服务化拆分" tabindex="-1"><a class="header-anchor" href="#场景2-应用系统的服务化拆分"><span>场景2：应用系统的服务化拆分</span></a></h2><p>服务化拆分，是目前非常火热的一种方式。现在都在提微服务。通过对传统项目进行服务化拆分，达到服务独立解耦，单服务又可以横向扩容。服务化拆分遇到的经典问题就是分布式事务问题。目前，比较常用的分布式事务解决方案有几种：消息最终一致性、TCC 补偿型事务等。</p><h2 id="场景3-底层数据库的压力分摊" tabindex="-1"><a class="header-anchor" href="#场景3-底层数据库的压力分摊"><span>场景3：底层数据库的压力分摊</span></a></h2><p>如果系统的性能压力出现在数据库，那我们就可以读写分离、分库分表等方案进行解决。</p>',10)]))}const c=t(n,[["render",s],["__file","Java-Distributed1.html.vue"]]),d=JSON.parse('{"path":"/audition/other/Java-Distributed1.html","title":"谈谈业务中使用分布式的场景","lang":"zh-CN","frontmatter":{"description":"谈谈业务中使用分布式的场景 首先，需要了解系统为什么使用分布式。 随着互联网的发展，传统单工程项目的很多性能瓶颈越发凸显，性能瓶颈可以有几个方面： 应用服务层：随着用户量的增加，并发量增加，单项目难以承受如此大的并发请求导致的性能瓶颈。 底层数据库层：随着业务的发展，数据库压力越来越大，导致的性能瓶颈。 场景1：应用系统集群的 Session 共享 应...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/other/Java-Distributed1.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"谈谈业务中使用分布式的场景"}],["meta",{"property":"og:description","content":"谈谈业务中使用分布式的场景 首先，需要了解系统为什么使用分布式。 随着互联网的发展，传统单工程项目的很多性能瓶颈越发凸显，性能瓶颈可以有几个方面： 应用服务层：随着用户量的增加，并发量增加，单项目难以承受如此大的并发请求导致的性能瓶颈。 底层数据库层：随着业务的发展，数据库压力越来越大，导致的性能瓶颈。 场景1：应用系统集群的 Session 共享 应..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:19:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"谈谈业务中使用分布式的场景\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T16:19:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"场景1：应用系统集群的 Session 共享","slug":"场景1-应用系统集群的-session-共享","link":"#场景1-应用系统集群的-session-共享","children":[]},{"level":2,"title":"场景2：应用系统的服务化拆分","slug":"场景2-应用系统的服务化拆分","link":"#场景2-应用系统的服务化拆分","children":[]},{"level":2,"title":"场景3：底层数据库的压力分摊","slug":"场景3-底层数据库的压力分摊","link":"#场景3-底层数据库的压力分摊","children":[]}],"git":{"createdTime":1731860389000,"updatedTime":1731860389000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.33,"words":400},"filePathRelative":"audition/other/Java-Distributed1.md","localizedDate":"2024年11月17日","autoDesc":true}');export{c as comp,d as data};
