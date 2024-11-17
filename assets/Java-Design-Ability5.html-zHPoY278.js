import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,e}from"./app-Bu8N3Y5k.js";const n={};function l(h,s){return a(),t("div",null,s[0]||(s[0]=[e(`<h1 id="你如何划分领域边界" tabindex="-1"><a class="header-anchor" href="#你如何划分领域边界"><span>你如何划分领域边界</span></a></h1><h2 id="【领域驱动设计】浅谈聚合的划分与设计" tabindex="-1"><a class="header-anchor" href="#【领域驱动设计】浅谈聚合的划分与设计"><span>【领域驱动设计】浅谈聚合的划分与设计</span></a></h2><p>聚合以及聚合根是领域驱动设计中的重要概念，根据定义，聚合是针对数据变化可以考虑成一个单元的一组相关的对象。聚合使用边界将内部和外部的对象划分开来。每个聚合有一个根。这个根是一个实体，并且它是外部可以访问的唯一的对象。根可以保持对任意聚合对象的引用，并且其他的对象可以持有任意其他的对象，但一个外部对象只能持有根对象的引用。如果边界内有其他的实体，那些实体的标识符是本地化的，只在聚合内有意义（参见《领域驱动设计-精简版》第42页）。从定义上看，貌似针对特定上下文的领域模型来讲，聚合的划分与设计并不那么困难，但事实却并非如此。在本文中，我将大致总结一下自己的经验，同时也欢迎关注领域驱动设计的朋友能够提出自己的见解。</p><h2 id="聚合划分与设计其实与并发和事务性并不矛盾" tabindex="-1"><a class="header-anchor" href="#聚合划分与设计其实与并发和事务性并不矛盾"><span>聚合划分与设计其实与并发和事务性并不矛盾</span></a></h2><p>首先需要了解的是，合理地划分和设计聚合，并不会产生任何并发和事务性问题。我们所讨论的文章中之所以第一个设计方案会出现并发和事务性问题，就是因为它的聚合设计本身就不合理。这其实在本文一开始就明确了这个问题：聚合是针对数据变化可以考虑成一个单元的一组相关的对象。因此，必须承认对于一个聚合，其中包含的所有对象必须“同生死，共存亡”，基于聚合的数据操作应该就是原子操作，基础结构机制需要保证以聚合为单位的数据一致性。换句话说，聚合在数据一致性方面的表现，应该与基础结构机制所保证的并发和事务的正确性是等价的。数据访问时出现的事务失效现象，其实是源于聚合的不合理划分。比如，在《Effective Aggregate Design》一文中的例子里，事实上 Product 并不一定要依赖于 Release 才能存在，因此，在 Product 的聚合中，就不应该包含对 Release 的引用，然而相反，Release 是没法脱离 Product 而单独存在的，因为如果是这样的话，Release 也就失去了本身的含义，所以，Release 可以定义成一个聚合，而 Product 则是这个聚合中的一个实体。</p><p>至此，我们可以得知，聚合的划分和设计必须依赖对通用语言、领域概念和模型的正确把握。接下来再让我们看两个我们经常遇到的例子：销售订单和论坛主题。</p><h2 id="两个例子-销售订单-sales-order-订单明细-sales-line-vs-论坛主题-post-回复-reply" tabindex="-1"><a class="header-anchor" href="#两个例子-销售订单-sales-order-订单明细-sales-line-vs-论坛主题-post-回复-reply"><span>两个例子：销售订单（Sales Order）/订单明细（Sales Line） vs. 论坛主题（Post）/回复（Reply）</span></a></h2><p>很多网友会在这两个领域的建模上感到纠结，如果我们从数据库设计上考虑（以数据库驱动的开发方式进行思考），两者非常相似，都是主从表结构，都是1对多（1:N）的关系：一个销售订单对应多条订单明细，一个论坛主题对应多条回复。但如果我们用领域驱动的思想来考虑这个问题，我们会发现，这是两个截然不同的例子！两个例子中实体之间的关系完全不同。</p><p>首先分析销售订单（Sales Order）/订单明细（Sales Line）：对于一张销售订单来说，订单明细是不可缺少的，否则就不成其为销售订单。试想，一张订单没有包含任何购买的货品信息，这意味着什么？因此，销售订单和订单明细之间的关系是一种固定的不可变（invariant）的关系，就像《领域驱动设计》一书中所讲的汽车与车轮之间的关系那样，汽车少了轮子就不成其为汽车了。反过来看，订单明细也离不开销售订单，这很简单，因为很明细订单明细是描述销售订单的一个不可或缺的部分。于是，在这个例子中，我们有一个聚合根为销售订单，其中包含一条或多条订单明细的聚合，聚合及其实体间的关系可以用下图表示：</p><figure><img src="https://pic.sansei.top/images/design/201112241000166739.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于论坛主题（Post）/回复（Reply）之间的关系，情况却完全不同。论坛的主题是可以脱离回复单独存在的（一个主题可以没有任何人对其进行回复），而回复却不能脱离主题（没有主题的回复是没有意义的）。鉴于这样的事实，实际上在主题与回复这部分模型中，存在两个聚合：第一个聚合是以主题（Post）为聚合根，且仅包含其本身一个对象的聚合；另一个聚合是以回复（Reply）为聚合根，其中包含了对主题（Post）的引用的聚合。其关系可以如下表示：</p><figure><img src="https://pic.sansei.top/images/design/201112241000175966.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样的设计，会让有些朋友感到不适应，原因是我们无法直接从Post实体获得其下所有的Reply实体，那么对于“通过给定的Post，获得与它相关的所有Reply信息”这样的用例，在实现上就不那么直接。此时，我们需要在应用层，通过Reply的仓储来获得，比如：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> IEnumerable</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">ReplyDataObject</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> GetRepliesForPost</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Guid</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> postId)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    using</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">IRepositoryContext</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> context </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> IoCFactory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">GetService</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">IRepositoryContext</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">    {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        ISpecification</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Reply</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> spec </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Specification</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Reply</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Eval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(r </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> r</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Post</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">Id</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> postId);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        IRepository</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Reply</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> replyRepository </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> context</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">GetRepository</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Reply</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        IEnumerable</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Reply</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> replies </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> replyRepository</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FindAll</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(spec);</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        List</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ReplyDataObject</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> result </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> List</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ReplyDataObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (replies </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">                replies</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ToList</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ForEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(r </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=&gt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">DataObjectMapper</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MapToDataObject</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(r));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> result;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这部分内容牵涉到了应用层，或许你会觉得，这样做是不是把业务逻辑迁移到了应用层，导致领域模型失血。其实不然，在这里，应用层并没有参与任何业务逻辑，从仓储读取领域对象以及将领域对象转换成数据传输对象（DTO），这些并不属于业务逻辑的范畴：因为从领域模型和业务逻辑的角度看，它们并不能知道什么是仓储、什么是规约、什么是数据传输对象。应用层在这里起到了任务协调、数据转换等作用。不仅如此，应用层甚至还可以包含业务规则引擎以及工作流的实现（workflow）。</p>`,15)]))}const r=i(n,[["render",l],["__file","Java-Design-Ability5.html.vue"]]),d=JSON.parse('{"path":"/audition/design/Java-Design-Ability5.html","title":"你如何划分领域边界","lang":"zh-CN","frontmatter":{"description":"你如何划分领域边界 【领域驱动设计】浅谈聚合的划分与设计 聚合以及聚合根是领域驱动设计中的重要概念，根据定义，聚合是针对数据变化可以考虑成一个单元的一组相关的对象。聚合使用边界将内部和外部的对象划分开来。每个聚合有一个根。这个根是一个实体，并且它是外部可以访问的唯一的对象。根可以保持对任意聚合对象的引用，并且其他的对象可以持有任意其他的对象，但一个外部...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/design/Java-Design-Ability5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"你如何划分领域边界"}],["meta",{"property":"og:description","content":"你如何划分领域边界 【领域驱动设计】浅谈聚合的划分与设计 聚合以及聚合根是领域驱动设计中的重要概念，根据定义，聚合是针对数据变化可以考虑成一个单元的一组相关的对象。聚合使用边界将内部和外部的对象划分开来。每个聚合有一个根。这个根是一个实体，并且它是外部可以访问的唯一的对象。根可以保持对任意聚合对象的引用，并且其他的对象可以持有任意其他的对象，但一个外部..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/design/201112241000166739.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:19:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"你如何划分领域边界\\",\\"image\\":[\\"https://pic.sansei.top/images/design/201112241000166739.png\\",\\"https://pic.sansei.top/images/design/201112241000175966.png\\"],\\"dateModified\\":\\"2024-11-17T16:19:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"【领域驱动设计】浅谈聚合的划分与设计","slug":"【领域驱动设计】浅谈聚合的划分与设计","link":"#【领域驱动设计】浅谈聚合的划分与设计","children":[]},{"level":2,"title":"聚合划分与设计其实与并发和事务性并不矛盾","slug":"聚合划分与设计其实与并发和事务性并不矛盾","link":"#聚合划分与设计其实与并发和事务性并不矛盾","children":[]},{"level":2,"title":"两个例子：销售订单（Sales Order）/订单明细（Sales Line） vs. 论坛主题（Post）/回复（Reply）","slug":"两个例子-销售订单-sales-order-订单明细-sales-line-vs-论坛主题-post-回复-reply","link":"#两个例子-销售订单-sales-order-订单明细-sales-line-vs-论坛主题-post-回复-reply","children":[]}],"git":{"createdTime":1731860389000,"updatedTime":1731860389000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":5.66,"words":1699},"filePathRelative":"audition/design/Java-Design-Ability5.md","localizedDate":"2024年11月17日","autoDesc":true}');export{r as comp,d as data};
