import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as r,c as n,d as i,b as l,e as o}from"./app-D23J47JW.js";const a={};function d(p,e){return r(),n("div",null,[e[0]||(e[0]=i("h2",{id:"概述",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概述"},[i("span",null,"概述")])],-1)),e[1]||(e[1]=i("p",null,"目前市场上主流的 第一套微服务架构解决方案：Spring Boot + Spring Cloud Netflix",-1)),e[2]||(e[2]=i("p",null,"Spring Cloud 为开发人员提供了快速构建分布式系统中一些常见模式的工具（例如配置管理，服务发现，断路器，智能路由，微代理，控制总线）。分布式系统的协调导致了样板模式, 使用 Spring Cloud 开发人员可以快速地支持实现这些模式的服务和应用程序。他们将在任何分布式环境中运行良好，包括开发人员自己的笔记本电脑，裸机数据中心，以及 Cloud Foundry 等托管平台。",-1)),e[3]||(e[3]=i("p",null,"目前业界对 Spring Cloud 使用最广的就是 Spring Cloud Netflix 了。这意味着继续使用它再也没有新功能福利了。",-1)),l(" [点击开始](../spring-cloud/netflix/) "),e[4]||(e[4]=o('<h2 id="项目已经进入维护模式" tabindex="-1"><a class="header-anchor" href="#项目已经进入维护模式"><span>项目已经进入维护模式</span></a></h2><p><a href="https://spring.io/blog/2018/12/12/spring-cloud-greenwich-rc1-available-now" target="_blank" rel="noopener noreferrer">【官方新闻】Spring Cloud Greenwich.RC1 available now</a></p><p><strong>2018 年 12 月 12 日，Netflix 宣布 Spring Cloud Netflix 系列技术栈进入维护模式（不再添加新特性）</strong></p><p>最近，Netflix 宣布 <code>Hystrix</code> 正在进入维护模式。自 2016 年以来，<code>Ribbon</code> 已处于类似状态。虽然 Hystrix 和 Ribbon 现已处于维护模式，但它们仍然在 Netflix 大规模部署。</p><p><code>Hystrix Dashboard</code> 和 <code>Turbine</code> 已被 <strong>Atlas</strong> 取代。这些项目的最后一次提交分别是 2 年前和 4 年前。<code>Zuul1</code> 和 <code>Archaius1</code> 都被后来不兼容的版本所取代。</p><p>以下 Spring Cloud Netflix 模块和相应的 Starter 将进入维护模式：</p><ul><li>spring-cloud-netflix-archaius</li><li>spring-cloud-netflix-hystrix-contract</li><li>spring-cloud-netflix-hystrix-dashboard</li><li>spring-cloud-netflix-hystrix-stream</li><li>spring-cloud-netflix-hystrix</li><li>spring-cloud-netflix-ribbon</li><li>spring-cloud-netflix-turbine-stream</li><li>spring-cloud-netflix-turbine</li><li>spring-cloud-netflix-zuul</li></ul><h3 id="维护模式" tabindex="-1"><a class="header-anchor" href="#维护模式"><span>维护模式</span></a></h3><p>将模块置于维护模式，意味着 Spring Cloud 团队将不会再向模块添加新功能。我们将修复 block 级别的 bug 以及安全问题，我们也会考虑并审查社区的小型 pull request。</p><h3 id="替代品" tabindex="-1"><a class="header-anchor" href="#替代品"><span>替代品</span></a></h3><p>我们建议对这些模块提供的功能进行以下替换</p><table><thead><tr><th>CURRENT</th><th>REPLACEMENT</th></tr></thead><tbody><tr><td>Hystrix</td><td>Resilience4j</td></tr><tr><td>Hystrix Dashboard / Turbine</td><td>Micrometer + Monitoring System</td></tr><tr><td>Ribbon</td><td>Spring Cloud Loadbalancer</td></tr><tr><td>Zuul 1</td><td>Spring Cloud Gateway</td></tr><tr><td>Archaius 1</td><td>Spring Boot external config + Spring Cloud Config</td></tr></tbody></table><h3 id="其它补充" tabindex="-1"><a class="header-anchor" href="#其它补充"><span>其它补充</span></a></h3><h4 id="netflix-concurrency-limits" tabindex="-1"><a class="header-anchor" href="#netflix-concurrency-limits"><span>Netflix Concurrency Limits</span></a></h4><p>并发限制模块，它是 Netflix 开源的限流器项目，Spring Cloud 在 Greenwich 版本中引入 spring-cloud-netflix-concurrency-limits</p><h4 id="archaius-1" tabindex="-1"><a class="header-anchor" href="#archaius-1"><span>Archaius 1</span></a></h4><p>有些人对它可能比较陌生，也是 Netflix 公司开源项目，基于 Java 的配置管理类库（apache common configuration 类库的扩展），主要用于多配置存储的动态获取。它主要的特性：</p><ul><li>动态类型化属性</li><li>高效和线程安全的配置操作</li><li>配置改变时的回调机制</li><li>轮询框架</li><li>JMX，通过Jconsole检查和调用操作属性</li><li>组合配置</li></ul><h4 id="resilience4j" tabindex="-1"><a class="header-anchor" href="#resilience4j"><span>Resilience4j</span></a></h4><p>目前还中孵化中，Spring 可能是要抽象一个断路器的统一规范，让不同的断路器（Hystrix、Resilience4j、<strong>Sentinel（阿里开源）</strong>）选择使用</p><h4 id="micrometer" tabindex="-1"><a class="header-anchor" href="#micrometer"><span>Micrometer</span></a></h4><p>Spring Boot 2 中的 Spring Boot Actuator 底层用的就是 Micrometer，它是 <strong>Pivotal</strong> 公司（也就是 Spring 所在的公司）开源的监控门面，类似于监控世界的 Slf4j。<strong>Resilience4j 自带整合了 Micrometer</strong>；目前还无法判断是否比 Hystrix Dashboard /Turbine 的更强大，更好用。</p><h4 id="spring-cloud-loadbalancer" tabindex="-1"><a class="header-anchor" href="#spring-cloud-loadbalancer"><span>Spring Cloud Loadbalancer</span></a></h4><p>目前还中孵化中，使用上和 Ribbon 区别不大</p><h4 id="spring-cloud-gateway" tabindex="-1"><a class="header-anchor" href="#spring-cloud-gateway"><span>Spring Cloud Gateway</span></a></h4><p>Zuul 持续跳票 1 年多，1.x 是一个基于阻塞 IO 的 API Gateway 以及 Servlet；直到 2018 年 5 月，Zuul 2.x（基于 Netty，也是非阻塞的，支持长连接）才发布，但 Spring Cloud 暂时还没有整合计划。Spring Cloud Gateway 比 Zuul 1.x 系列的性能和功能整体要好。</p><h4 id="spring-boot-external-config-spring-cloud-config" tabindex="-1"><a class="header-anchor" href="#spring-boot-external-config-spring-cloud-config"><span>Spring Boot external config + Spring Cloud Config</span></a></h4><p>Netflix 开源的组件（Archaius 1/Ribbon/Hystrix）都没有使用 Spring Boot 的规范（spring-boot-configuration-processor），根本没有 metadata.json 文件，于是这部分配置 IDE 无法给你提示</p>',28))])}const g=t(a,[["render",d],["__file","spring-cloud-netflix.html.vue"]]),u=JSON.parse('{"path":"/notebook/springcloud/spring-cloud-netflix.html","title":"SpringCloud Netflix","lang":"zh-CN","frontmatter":{"title":"SpringCloud Netflix","icon":"gem","order":1,"category":["SpirngNetflix"],"tag":["SpirngCloud"],"description":"概述 目前市场上主流的 第一套微服务架构解决方案：Spring Boot + Spring Cloud Netflix Spring Cloud 为开发人员提供了快速构建分布式系统中一些常见模式的工具（例如配置管理，服务发现，断路器，智能路由，微代理，控制总线）。分布式系统的协调导致了样板模式, 使用 Spring Cloud 开发人员可以快速地支持实...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/notebook/springcloud/spring-cloud-netflix.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"SpringCloud Netflix"}],["meta",{"property":"og:description","content":"概述 目前市场上主流的 第一套微服务架构解决方案：Spring Boot + Spring Cloud Netflix Spring Cloud 为开发人员提供了快速构建分布式系统中一些常见模式的工具（例如配置管理，服务发现，断路器，智能路由，微代理，控制总线）。分布式系统的协调导致了样板模式, 使用 Spring Cloud 开发人员可以快速地支持实..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:04:29.000Z"}],["meta",{"property":"article:tag","content":"SpirngCloud"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:04:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloud Netflix\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:04:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"项目已经进入维护模式","slug":"项目已经进入维护模式","link":"#项目已经进入维护模式","children":[{"level":3,"title":"维护模式","slug":"维护模式","link":"#维护模式","children":[]},{"level":3,"title":"替代品","slug":"替代品","link":"#替代品","children":[]},{"level":3,"title":"其它补充","slug":"其它补充","link":"#其它补充","children":[]}]}],"git":{"createdTime":1731863069000,"updatedTime":1731863069000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":3.22,"words":966},"filePathRelative":"notebook/springcloud/spring-cloud-netflix.md","localizedDate":"2024年11月17日","autoDesc":true}');export{g as comp,u as data};
