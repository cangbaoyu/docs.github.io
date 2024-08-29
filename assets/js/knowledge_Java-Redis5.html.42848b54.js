"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6040],{105:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}},6381:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>r,data:()=>o});var i=a(6904);const d=[(0,i.Fv)('<h1 id="redis-持久化机制" tabindex="-1"><a class="header-anchor" href="#redis-持久化机制"><span>Redis 持久化机制</span></a></h1><p>Redis 有两种持久化机制：</p><h2 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb"><span>RDB</span></a></h2><p>RDB 持久化方式会在一个特定的间隔保存那个时间点的一个数据快照</p><h2 id="aof" tabindex="-1"><a class="header-anchor" href="#aof"><span>AOF</span></a></h2><p>AOF 持久化方式则会记录每一个服务器收到的写操作。在服务启动时，这些记录的操作会逐条执行从而重建出原来的数据。写操作命令记录的格式跟 Redis 协议一致，以追加的方式进行保存</p><p>Redis 的持久化是可以禁用的，就是说你可以让数据的生命周期只存在于服务器的运行时间里。两种方式的持久化是可以同时存在的，但是当 Redis 重启时，AOF 文件会被优先用于重建数据。</p>',7)],s={},r=(0,a(105).A)(s,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,d)}]]),o=JSON.parse('{"path":"/knowledge/Java-Redis5.html","title":"Redis 持久化机制","lang":"zh-CN","frontmatter":{"description":"Redis 持久化机制 Redis 有两种持久化机制： RDB RDB 持久化方式会在一个特定的间隔保存那个时间点的一个数据快照 AOF AOF 持久化方式则会记录每一个服务器收到的写操作。在服务启动时，这些记录的操作会逐条执行从而重建出原来的数据。写操作命令记录的格式跟 Redis 协议一致，以追加的方式进行保存 Redis 的持久化是可以禁用的，就...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/knowledge/Java-Redis5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"Redis 持久化机制"}],["meta",{"property":"og:description","content":"Redis 持久化机制 Redis 有两种持久化机制： RDB RDB 持久化方式会在一个特定的间隔保存那个时间点的一个数据快照 AOF AOF 持久化方式则会记录每一个服务器收到的写操作。在服务启动时，这些记录的操作会逐条执行从而重建出原来的数据。写操作命令记录的格式跟 Redis 协议一致，以追加的方式进行保存 Redis 的持久化是可以禁用的，就..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T09:01:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-29T09:01:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis 持久化机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T09:01:42.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"RDB","slug":"rdb","link":"#rdb","children":[]},{"level":2,"title":"AOF","slug":"aof","link":"#aof","children":[]}],"git":{"createdTime":1724922102000,"updatedTime":1724922102000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"knowledge/Java-Redis5.md","localizedDate":"2024年8月29日","autoDesc":true}')}}]);