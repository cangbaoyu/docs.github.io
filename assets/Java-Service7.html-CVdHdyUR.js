import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,e as n}from"./app-Bu8N3Y5k.js";const l={};function s(c,e){return t(),i("div",null,e[0]||(e[0]=[n('<h1 id="cap-定理、-base-理论" tabindex="-1"><a class="header-anchor" href="#cap-定理、-base-理论"><span>CAP 定理、 BASE 理论</span></a></h1><h2 id="cap-定理" tabindex="-1"><a class="header-anchor" href="#cap-定理"><span>CAP 定理</span></a></h2><p>2000 年 7 月，加州大学伯克利分校的 Eric Brewer 教授在 ACM PODC 会议上提出 CAP 猜想。2年后，麻省理工学院的 Seth Gilbert 和 Nancy Lynch 从理论上证明了 CAP。之后，CAP 理论正式成为分布式计算领域的公认定理。</p><p>CAP 理论为：一个分布式系统最多只能同时满足一致性（Consistency）、可用性（Availability）和分区容错性（Partition tolerance）这三项中的两项。</p><h3 id="一致性-consistency" tabindex="-1"><a class="header-anchor" href="#一致性-consistency"><span>一致性（Consistency）</span></a></h3><p>一致性指 “all nodes see the same data at the same time”，即更新操作成功并返回客户端完成后，所有节点在同一时间的数据完全一致。</p><h3 id="可用性-availability" tabindex="-1"><a class="header-anchor" href="#可用性-availability"><span>可用性（Availability）</span></a></h3><p>可用性指“Reads and writes always succeed”，即服务一直可用，而且是正常响应时间。</p><h3 id="分区容错性-partition-tolerance" tabindex="-1"><a class="header-anchor" href="#分区容错性-partition-tolerance"><span>分区容错性（Partition tolerance）</span></a></h3><p>分区容错性指“the system continues to operate despite arbitrary message loss or failure of part of the system”，即分布式系统在遇到某节点或网络分区故障的时候，仍然能够对外提供满足一致性和可用性的服务。</p><h2 id="cap-权衡" tabindex="-1"><a class="header-anchor" href="#cap-权衡"><span>CAP 权衡</span></a></h2><p>通过 CAP 理论，我们知道无法同时满足一致性、可用性和分区容错性这三个特性，那要舍弃哪个呢？</p><p>对于多数大型互联网应用的场景，主机众多、部署分散，而且现在的集群规模越来越大，所以节点故障、网络故障是常态，而且要保证服务可用性达到 N 个 9，即保证 P 和 A，舍弃C（退而求其次保证最终一致性）。虽然某些地方会影响客户体验，但没达到造成用户流程的严重程度。</p><p>对于涉及到钱财这样不能有一丝让步的场景，C 必须保证。网络发生故障宁可停止服务，这是保证 CA，舍弃 P。貌似这几年国内银行业发生了不下 10 起事故，但影响面不大，报到也不多，广大群众知道的少。还有一种是保证 CP，舍弃 A。例如网络故障是只读不写。</p><p>孰优孰略，没有定论，只能根据场景定夺，适合的才是最好的。</p><h2 id="base-理论" tabindex="-1"><a class="header-anchor" href="#base-理论"><span>BASE 理论</span></a></h2><p>eBay 的架构师 Dan Pritchett 源于对大规模分布式系统的实践总结，在 ACM 上发表文章提出 BASE 理论，BASE 理论是对 CAP 理论的延伸，核心思想是即使无法做到强一致性（Strong Consistency，CAP 的一致性就是强一致性），但应用可以采用适合的方式达到最终一致性（Eventual Consitency）。</p><h3 id="基本可用-basically-available" tabindex="-1"><a class="header-anchor" href="#基本可用-basically-available"><span>基本可用（Basically Available）</span></a></h3><p>基本可用是指分布式系统在出现故障的时候，允许损失部分可用性，即保证核心可用。</p><p>电商大促时，为了应对访问量激增，部分用户可能会被引导到降级页面，服务层也可能只提供降级服务。这就是损失部分可用性的体现。</p><h3 id="软状态-soft-state" tabindex="-1"><a class="header-anchor" href="#软状态-soft-state"><span>软状态（Soft State）</span></a></h3><p>软状态是指允许系统存在中间状态，而该中间状态不会影响系统整体可用性。分布式存储中一般一份数据至少会有三个副本，允许不同节点间副本同步的延时就是软状态的体现。mysql replication 的异步复制也是一种体现。</p><h3 id="最终一致性-eventual-consistency" tabindex="-1"><a class="header-anchor" href="#最终一致性-eventual-consistency"><span>最终一致性（Eventual Consistency）</span></a></h3><p>最终一致性是指系统中的所有数据副本经过一定时间后，最终能够达到一致的状态。弱一致性和强一致性相反，最终一致性是弱一致性的一种特殊情况。</p><h2 id="acid-和-base-的区别与联系" tabindex="-1"><a class="header-anchor" href="#acid-和-base-的区别与联系"><span>ACID 和 BASE 的区别与联系</span></a></h2><p>ACID 是传统数据库常用的设计理念，追求强一致性模型。BASE 支持的是大型分布式系统，提出通过牺牲强一致性获得高可用性。</p><p>ACID 和 BASE 代表了两种截然相反的设计哲学，在分布式系统设计的场景中，系统组件对一致性要求是不同的，因此 ACID 和 BASE 又会结合使用。</p>',27)]))}const p=a(l,[["render",s],["__file","Java-Service7.html.vue"]]),h=JSON.parse('{"path":"/audition/microservices/Java-Service7.html","title":"CAP 定理、 BASE 理论","lang":"zh-CN","frontmatter":{"description":"CAP 定理、 BASE 理论 CAP 定理 2000 年 7 月，加州大学伯克利分校的 Eric Brewer 教授在 ACM PODC 会议上提出 CAP 猜想。2年后，麻省理工学院的 Seth Gilbert 和 Nancy Lynch 从理论上证明了 CAP。之后，CAP 理论正式成为分布式计算领域的公认定理。 CAP 理论为：一个分布式系统最...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/microservices/Java-Service7.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"CAP 定理、 BASE 理论"}],["meta",{"property":"og:description","content":"CAP 定理、 BASE 理论 CAP 定理 2000 年 7 月，加州大学伯克利分校的 Eric Brewer 教授在 ACM PODC 会议上提出 CAP 猜想。2年后，麻省理工学院的 Seth Gilbert 和 Nancy Lynch 从理论上证明了 CAP。之后，CAP 理论正式成为分布式计算领域的公认定理。 CAP 理论为：一个分布式系统最..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:19:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CAP 定理、 BASE 理论\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T16:19:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CAP 定理","slug":"cap-定理","link":"#cap-定理","children":[{"level":3,"title":"一致性（Consistency）","slug":"一致性-consistency","link":"#一致性-consistency","children":[]},{"level":3,"title":"可用性（Availability）","slug":"可用性-availability","link":"#可用性-availability","children":[]},{"level":3,"title":"分区容错性（Partition tolerance）","slug":"分区容错性-partition-tolerance","link":"#分区容错性-partition-tolerance","children":[]}]},{"level":2,"title":"CAP 权衡","slug":"cap-权衡","link":"#cap-权衡","children":[]},{"level":2,"title":"BASE 理论","slug":"base-理论","link":"#base-理论","children":[{"level":3,"title":"基本可用（Basically Available）","slug":"基本可用-basically-available","link":"#基本可用-basically-available","children":[]},{"level":3,"title":"软状态（Soft State）","slug":"软状态-soft-state","link":"#软状态-soft-state","children":[]},{"level":3,"title":"最终一致性（Eventual Consistency）","slug":"最终一致性-eventual-consistency","link":"#最终一致性-eventual-consistency","children":[]}]},{"level":2,"title":"ACID 和 BASE 的区别与联系","slug":"acid-和-base-的区别与联系","link":"#acid-和-base-的区别与联系","children":[]}],"git":{"createdTime":1731860389000,"updatedTime":1731860389000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":3.42,"words":1025},"filePathRelative":"audition/microservices/Java-Service7.md","localizedDate":"2024年11月17日","autoDesc":true}');export{p as comp,h as data};
