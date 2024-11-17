import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c,e as d}from"./app-D23J47JW.js";const o={};function a(t,e){return i(),c("div",null,e[0]||(e[0]=[d('<h1 id="_58-到家-mysql-军规升级版" tabindex="-1"><a class="header-anchor" href="#_58-到家-mysql-军规升级版"><span>58 到家 MySQL 军规升级版</span></a></h1><h2 id="基础规范" tabindex="-1"><a class="header-anchor" href="#基础规范"><span>基础规范</span></a></h2><ul><li>表存储引擎必须使用 <code>InnoDB</code></li><li>表字符集默认使用 <code>utf8</code>，必要时候使用 <code>utf8mb4</code><ul><li>通用，无乱码风险，汉字 3 字节，英文 1 字节</li><li><code>utf8mb4</code> 是 <code>utf8</code> 的超集，有存储 4 字节例如表情符号时，使用它</li></ul></li><li>禁止使用存储过程，视图，触发器，Event <ul><li>对数据库性能影响较大，互联网业务，能让站点层和服务层干的事情，不要交到数据库层</li><li>调试，排错，迁移都比较困难，扩展性较差</li></ul></li><li>禁止在数据库中存储大文件，例如照片，可以将大文件存储在对象存储系统，数据库中存储路径</li><li>禁止在线上环境做数据库压力测试</li><li>测试，开发，线上数据库环境必须隔离</li></ul><h2 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范"><span>命名规范</span></a></h2><ul><li>库名，表名，列名必须用小写，采用下划线分隔 <ul><li>abc，Abc，ABC 都是给自己埋坑</li></ul></li><li>库名，表名，列名必须见名知义，长度不要超过 32 字符 <ul><li>tmp，wushan 谁 TM 知道这些库是干嘛的</li></ul></li><li>库备份必须以 bak 为前缀，以日期为后缀</li><li>从库必须以 <code>-s</code> 为后缀</li><li>备库必须以 <code>-ss</code> 为后缀</li></ul><h2 id="表设计规范" tabindex="-1"><a class="header-anchor" href="#表设计规范"><span>表设计规范</span></a></h2><ul><li>单实例表个数必须控制在 <code>2000</code> 个以内</li><li>单表分表个数必须控制在 <code>1024</code> 个以内</li><li>表必须有主键，推荐使用 <code>UNSIGNED</code> 整数为主键 <ul><li>删除无主键的表，如果是 <code>row</code> 模式的主从架构，从库会挂住</li></ul></li><li>禁止使用外键，如果要保证完整性，应由应用程式实现 <ul><li>外键使得表之间相互耦合，影响 <code>update/delete</code> 等 SQL 性能，有可能造成死锁，高并发情况下容易成为数据库瓶颈</li></ul></li><li>建议将大字段，访问频度低的字段拆分到单独的表中存储，分离冷热数据（具体参考：<a href="https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&amp;mid=2651959773&amp;idx=1&amp;sn=7e4ad0dcd050f6662dfaf39d9de36f2c&amp;chksm=bd2d04018a5a8d17b92098b4840aac23982e32d179cdd957e4c55011f6a08f6bd31f9ba5cfee&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">《如何实施数据库垂直拆分》</a>）</li></ul><h2 id="列设计规范" tabindex="-1"><a class="header-anchor" href="#列设计规范"><span>列设计规范</span></a></h2><ul><li>根据业务区分使用 <code>tinyint/int/bigint</code>，分别会占用 <code>1/4/8</code> 字节</li><li>根据业务区分使用 <code>char/varchar</code><ul><li>字段长度固定，或者长度近似的业务场景，适合使用 <code>char</code>，能够减少碎片，查询性能高</li><li>字段长度相差较大，或者更新较少的业务场景，适合使用 <code>varchar</code>，能够减少空间</li></ul></li><li>根据业务区分使用 <code>datetime/timestamp</code><ul><li>前者占用 5 个字节，后者占用 4 个字节，存储年使用 YEAR，存储日期使用 <code>DATE</code>，存储时间使用 <code>datetime</code></li></ul></li><li>必须把字段定义为 <code>NOT NULL</code> 并设默认值 <ul><li>NULL 的列使用索引，索引统计，值都更加复杂，MySQL 更难优化</li><li>NULL 需要更多的存储空间</li><li>NULL 只能采用 <code>IS NULL</code> 或者 <code>IS NOT NULL</code> ，而在 <code>=/!=/in/not in</code> 时有大坑</li></ul></li><li>使用 <code>INT UNSIGNED</code> 存储 <code>IPv4</code> ，不要用 <code>char(15)</code></li><li>使用 <code>varchar(20)</code> 存储手机号，不要使用整数 <ul><li>牵扯到国家代号，可能出现 <code>+/-/()</code> 等字符，例如 <code>+86</code></li><li>手机号不会用来做数学运算</li><li><code>varchar</code> 可以模糊查询，例如 <code>like‘138%’</code></li></ul></li><li>使用 <code>TINYINT</code> 来代替 <code>ENUM</code><ul><li><code>ENUM</code> 增加新值要进行 <code>DDL</code> 操作</li></ul></li></ul><h2 id="索引规范" tabindex="-1"><a class="header-anchor" href="#索引规范"><span>索引规范</span></a></h2><ul><li>唯一索引使用 <code>uniq_[字段名]</code> 来命名</li><li>非唯一索引使用 <code>idx_[字段名]</code> 来命名</li><li>单张表索引数量建议控制在 5 个以内 <ul><li>互联网高并发业务，太多索引会影响写性能</li><li>生成执行计划时，如果索引太多，会降低性能，并可能导致 MySQL 选择不到最优索引</li><li>异常复杂的查询需求，可以选择 ES 等更为适合的方式存储</li></ul></li><li>组合索引字段数不建议超过 5 个 <ul><li>如果 5 个字段还不能极大缩小 row 范围，八成是设计有问题</li></ul></li><li>不建议在频繁更新的字段上建立索引</li><li>非必要不要进行 <code>JOIN</code> 查询，如果要进行 <code>JOIN</code> 查询，被 <code>JOIN</code> 的字段必须类型相同，并建立索引 <ul><li>踩过因为 <code>JOIN</code> 字段类型不一致，而导致全表扫描的坑么？</li></ul></li><li>理解组合索引最左前缀原则，避免重复建设索引，如果建立了(a,b,c)，相当于建立了(a), (a,b), (a,b,c)</li></ul><h2 id="sql-规范" tabindex="-1"><a class="header-anchor" href="#sql-规范"><span>SQL 规范</span></a></h2><ul><li>禁止使用 <code>select *</code>，只获取必要字段 <ul><li><code>select *</code> 会增加 <code>cpu/io/内存/带宽</code> 的消耗</li><li>指定字段能有效利用索引覆盖</li><li>指定字段查询，在表结构变更时，能保证对应用程序无影响</li></ul></li><li><code>insert</code> 必须指定字段，禁止使用 <code>insert into T values()</code><ul><li>指定字段插入，在表结构变更时，能保证对应用程序无影响</li></ul></li><li>隐式类型转换会使索引失效，导致全表扫描</li><li>禁止在 <code>where</code> 条件列使用函数或者表达式 <ul><li>导致不能命中索引，全表扫描</li></ul></li><li>禁止负向查询以及 <code>%</code> 开头的模糊查询 <ul><li>导致不能命中索引，全表扫描</li></ul></li><li>禁止大表 <code>JOIN</code> 和子查询</li><li>同一个字段上的 <code>OR</code> 必须改写问 <code>IN</code>，<code>IN</code> 的值必须少于 50 个</li><li>应用程序必须捕获 SQL 异常 <ul><li>方便定位线上问题</li></ul></li></ul><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><p>适用于并发量大，数据量大的典型互联网业务。</p>',15)]))}const s=l(o,[["render",a],["__file","Java-Mysql1.html.vue"]]),u=JSON.parse('{"path":"/audition/database/Java-Mysql1.html","title":"58 到家 MySQL 军规升级版","lang":"zh-CN","frontmatter":{"description":"58 到家 MySQL 军规升级版 基础规范 表存储引擎必须使用 InnoDB 表字符集默认使用 utf8，必要时候使用 utf8mb4 通用，无乱码风险，汉字 3 字节，英文 1 字节 utf8mb4 是 utf8 的超集，有存储 4 字节例如表情符号时，使用它 禁止使用存储过程，视图，触发器，Event 对数据库性能影响较大，互联网业务，能让站点层...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/database/Java-Mysql1.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"58 到家 MySQL 军规升级版"}],["meta",{"property":"og:description","content":"58 到家 MySQL 军规升级版 基础规范 表存储引擎必须使用 InnoDB 表字符集默认使用 utf8，必要时候使用 utf8mb4 通用，无乱码风险，汉字 3 字节，英文 1 字节 utf8mb4 是 utf8 的超集，有存储 4 字节例如表情符号时，使用它 禁止使用存储过程，视图，触发器，Event 对数据库性能影响较大，互联网业务，能让站点层..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:04:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:04:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"58 到家 MySQL 军规升级版\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:04:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基础规范","slug":"基础规范","link":"#基础规范","children":[]},{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[]},{"level":2,"title":"表设计规范","slug":"表设计规范","link":"#表设计规范","children":[]},{"level":2,"title":"列设计规范","slug":"列设计规范","link":"#列设计规范","children":[]},{"level":2,"title":"索引规范","slug":"索引规范","link":"#索引规范","children":[]},{"level":2,"title":"SQL 规范","slug":"sql-规范","link":"#sql-规范","children":[]},{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]}],"git":{"createdTime":1731863069000,"updatedTime":1731863069000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":4.41,"words":1323},"filePathRelative":"audition/database/Java-Mysql1.md","localizedDate":"2024年11月17日","autoDesc":true}');export{s as comp,u as data};
