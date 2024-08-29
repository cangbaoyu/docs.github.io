"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9664],{105:(e,n)=>{n.A=(e,n)=>{const o=e.__vccOpts||e;for(const[e,t]of n)o[e]=t;return o}},3124:(e,n,o)=>{o.r(n),o.d(n,{comp:()=>i,data:()=>r});var t=o(6904);const a=[(0,t.Fv)('<h1 id="存储引擎的-innodb-与-myisam" tabindex="-1"><a class="header-anchor" href="#存储引擎的-innodb-与-myisam"><span>存储引擎的 InnoDB 与 MyiSAM</span></a></h1><ul><li>InnoDB 不支持 <code>FULLTEXT</code> 类型的索引。</li><li>InnoDB 中不保存表的具体行数，也就是说，执行 <code>select count() from table</code> 时，InnoDB 要扫描一遍整个表来计算有多少行，但是 MyISAM 只要简单的读出保存好的行数即可。注意的是，当 <code>count()</code> 语句包含 <code>where</code> 条件时，两种表的操作是一样的。</li><li>对于 <code>AUTO_INCREMENT</code> 类型的字段，InnoDB 中必须包含只有该字段的索引，但是在 MyISAM 表中，可以和其他字段一起建立联合索引。</li><li><code>DELETE FROM table</code> 时，InnoDB 不会重新建立表，而是一行一行的删除。</li><li><code>LOAD TABLE FROM MASTER</code> 操作对 InnoDB 是不起作用的，解决方法是首先把 InnoDB 表改成 MyISAM 表，导入数据后再改成 InnoDB 表，但是对于使用的额外的 InnoDB 特性(例如外键)的表不适用。</li></ul><p>另外，InnoDB 表的行锁也不是绝对的，假如在执行一个 SQL 语句时 MySQL 不能确定要扫描的范围，InnoDB 表同样会锁全表，例如 <code>update table set num=1 where name like “%aaa%”</code></p>',3)],c={},i=(0,o(105).A)(c,[["render",function(e,n){return(0,t.uX)(),(0,t.CE)("div",null,a)}]]),r=JSON.parse('{"path":"/knowledge/Java-Mysql8.html","title":"存储引擎的 InnoDB 与 MyiSAM","lang":"zh-CN","frontmatter":{"description":"存储引擎的 InnoDB 与 MyiSAM InnoDB 不支持 FULLTEXT 类型的索引。 InnoDB 中不保存表的具体行数，也就是说，执行 select count() from table 时，InnoDB 要扫描一遍整个表来计算有多少行，但是 MyISAM 只要简单的读出保存好的行数即可。注意的是，当 count() 语句包含 where...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/knowledge/Java-Mysql8.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"存储引擎的 InnoDB 与 MyiSAM"}],["meta",{"property":"og:description","content":"存储引擎的 InnoDB 与 MyiSAM InnoDB 不支持 FULLTEXT 类型的索引。 InnoDB 中不保存表的具体行数，也就是说，执行 select count() from table 时，InnoDB 要扫描一遍整个表来计算有多少行，但是 MyISAM 只要简单的读出保存好的行数即可。注意的是，当 count() 语句包含 where..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T09:01:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-29T09:01:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"存储引擎的 InnoDB 与 MyiSAM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T09:01:42.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1724922102000,"updatedTime":1724922102000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.92,"words":276},"filePathRelative":"knowledge/Java-Mysql8.md","localizedDate":"2024年8月29日","autoDesc":true}')}}]);