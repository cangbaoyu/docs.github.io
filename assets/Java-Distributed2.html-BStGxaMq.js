import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,d as i,o as n}from"./app-D_Fb6juQ.js";const t={};function a(r,e){return n(),o("div",null,e[0]||(e[0]=[i('<h1 id="session-分布式方案" tabindex="-1"><a class="header-anchor" href="#session-分布式方案"><span>Session 分布式方案</span></a></h1><h2 id="基于-nfs-net-filesystem-的-session-共享" tabindex="-1"><a class="header-anchor" href="#基于-nfs-net-filesystem-的-session-共享"><span>基于 nfs(net filesystem) 的 Session 共享</span></a></h2><p>将共享服务器目录 mount 各服务器的本地 session 目录，session 读写受共享服务器 io 限制，<strong>不能满足高并发</strong>。</p><h2 id="基于关系数据库的-session-共享" tabindex="-1"><a class="header-anchor" href="#基于关系数据库的-session-共享"><span>基于关系数据库的 Session 共享</span></a></h2><p>这种方案普遍使用。使用关系数据库存储 session 数据，对于 mysql 数据库，建议使用 heap 引擎。这种方案性能取决于数据库的性能，在高并发下容易造成表锁（虽然可以采用行锁的存储引擎，性能会下降），并且需要自己实现 session 过期淘汰机制。</p><h2 id="基于-cookie-的-session-共享" tabindex="-1"><a class="header-anchor" href="#基于-cookie-的-session-共享"><span>基于 Cookie 的 Session 共享</span></a></h2><p>这种方案也在大型互联网中普遍使用，将用户的 session 加密序列化后以 cookie 的方式保存在网站根域名下（比如 taobao.com），当用户访问所有二级域名站点式，浏览器会传递所有匹配的根域名的 cookie 信息，这样实现了用户 cookie 化 session 的多服务共享。此方案能够节省大量服务器资源，缺点是存储的信息长度受到 http 协议限制；cookie 的信息还需要做加密解密；请求任何资源时都会将 cookie 附加到 http 头上传到服务器，占用了一定带宽。</p><h2 id="基于-web-容器的-session-机制" tabindex="-1"><a class="header-anchor" href="#基于-web-容器的-session-机制"><span>基于 Web 容器的 Session 机制</span></a></h2><p>利用容器机制，通过配置即可实现。</p><h2 id="基于-zookeeper-的分布式-session-存储" tabindex="-1"><a class="header-anchor" href="#基于-zookeeper-的分布式-session-存储"><span>基于 Zookeeper 的分布式 Session 存储</span></a></h2><h2 id="基于-redis-memcached-的-session-共享存储" tabindex="-1"><a class="header-anchor" href="#基于-redis-memcached-的-session-共享存储"><span>基于 Redis/Memcached 的 Session 共享存储</span></a></h2><p>这些 key/value 非关系存储有较高的性能，轻松达到 2000 左右的 qps，内置的过期机制正好满足 session 的自动实效特性。</p>',12)]))}const p=s(t,[["render",a],["__file","Java-Distributed2.html.vue"]]),d=JSON.parse('{"path":"/exambook/other/Java-Distributed2.html","title":"Session 分布式方案","lang":"zh-CN","frontmatter":{"description":"Session 分布式方案 基于 nfs(net filesystem) 的 Session 共享 将共享服务器目录 mount 各服务器的本地 session 目录，session 读写受共享服务器 io 限制，不能满足高并发。 基于关系数据库的 Session 共享 这种方案普遍使用。使用关系数据库存储 session 数据，对于 mysql 数据...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/exambook/other/Java-Distributed2.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"Session 分布式方案"}],["meta",{"property":"og:description","content":"Session 分布式方案 基于 nfs(net filesystem) 的 Session 共享 将共享服务器目录 mount 各服务器的本地 session 目录，session 读写受共享服务器 io 限制，不能满足高并发。 基于关系数据库的 Session 共享 这种方案普遍使用。使用关系数据库存储 session 数据，对于 mysql 数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:38:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:38:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Session 分布式方案\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T02:38:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基于 nfs(net filesystem) 的 Session 共享","slug":"基于-nfs-net-filesystem-的-session-共享","link":"#基于-nfs-net-filesystem-的-session-共享","children":[]},{"level":2,"title":"基于关系数据库的 Session 共享","slug":"基于关系数据库的-session-共享","link":"#基于关系数据库的-session-共享","children":[]},{"level":2,"title":"基于 Cookie 的 Session 共享","slug":"基于-cookie-的-session-共享","link":"#基于-cookie-的-session-共享","children":[]},{"level":2,"title":"基于 Web 容器的 Session 机制","slug":"基于-web-容器的-session-机制","link":"#基于-web-容器的-session-机制","children":[]},{"level":2,"title":"基于 Zookeeper 的分布式 Session 存储","slug":"基于-zookeeper-的分布式-session-存储","link":"#基于-zookeeper-的分布式-session-存储","children":[]},{"level":2,"title":"基于 Redis/Memcached 的 Session 共享存储","slug":"基于-redis-memcached-的-session-共享存储","link":"#基于-redis-memcached-的-session-共享存储","children":[]}],"git":{"createdTime":1726886280000,"updatedTime":1726886280000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.37,"words":411},"filePathRelative":"exambook/other/Java-Distributed2.md","localizedDate":"2024年9月21日","autoDesc":true}');export{p as comp,d as data};
