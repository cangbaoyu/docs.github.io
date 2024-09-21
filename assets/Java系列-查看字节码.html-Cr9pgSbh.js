import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as t,o as e}from"./app-D_Fb6juQ.js";const l={};function n(p,i){return e(),s("div",null,i[0]||(i[0]=[t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p><strong>前提条件：要看字节码，首先得知道字节码对应的class文件，这个class文件是由java文件经过编译而来的，至于怎么编译，可以通过javac，或者IDE等工具生成。</strong></p><h2 id="查看字节码的几种方式" tabindex="-1"><a class="header-anchor" href="#查看字节码的几种方式"><span>查看字节码的几种方式</span></a></h2><p>测试例子：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> com.plus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * 查看字节码</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * &lt;p&gt;Title: Tests&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@author</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> cangbao</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * @date 2019-11-11 23:50</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * @package com.plus</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Tests</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">        String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;i++){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;world&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制台" tabindex="-1"><a class="header-anchor" href="#控制台"><span>控制台</span></a></h3><p>打开<code>cmd</code>，然后使用<code>javap</code>命令来查看：</p><figure><img src="https://pic.sansei.top/images/java/javap_20191111234651.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://pic.sansei.top/images/java/javap_20191111234809.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="idea-使用java自带命令javap" tabindex="-1"><a class="header-anchor" href="#idea-使用java自带命令javap"><span>IDEA 使用java自带命令javap</span></a></h3><ul><li>打开<code>Settings</code>-&gt;<code>Tools</code>-&gt;<code>External Tools</code> -&gt; <code>+</code></li><li>输入命令名称： 选择JDK的javap.exe命令 输入 -verbose ,选择$FileClass$ $OutputPath$变量，这两个变量可从右边选取。保存</li></ul><figure><img src="https://pic.sansei.top/images/java/javap_20191111235312.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>右键选取执行命令，输出字节码文件</li></ul><figure><img src="https://pic.sansei.top/images/java/javap_20191111235518.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="idea-安装插件-jclasslib-bytecode-viewer" tabindex="-1"><a class="header-anchor" href="#idea-安装插件-jclasslib-bytecode-viewer"><span>IDEA 安装插件 jclasslib Bytecode viewer</span></a></h3><ul><li>打开<code>Setting</code>-&gt;<code>Plugins</code>, 输入<code>jclasslib Bytecode viewer</code>, 点击<code>Install</code>, 安装成功后重启</li></ul><figure><img src="https://pic.sansei.top/images/java/javap_20191111235800.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>在 <code>View</code> 中执行 下列 这两个命令之一</li></ul><figure><img src="https://pic.sansei.top/images/java/javap_20191111235643.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>输出内容如下图 <img src="https://pic.sansei.top/images/java/javap_20191111235940.png" alt="" loading="lazy"></li></ul>`,20)]))}const c=a(l,[["render",n],["__file","Java系列-查看字节码.html.vue"]]),r=JSON.parse('{"path":"/notebook/java/Java%E7%B3%BB%E5%88%97-%E6%9F%A5%E7%9C%8B%E5%AD%97%E8%8A%82%E7%A0%81.html","title":"Java系列-查看字节码","lang":"zh-CN","frontmatter":{"title":"Java系列-查看字节码","order":1,"category":["Java系列"],"tag":["笔记"],"description":"概述 前提条件：要看字节码，首先得知道字节码对应的class文件，这个class文件是由java文件经过编译而来的，至于怎么编译，可以通过javac，或者IDE等工具生成。 查看字节码的几种方式 测试例子： 控制台 打开cmd，然后使用javap命令来查看： IDEA 使用java自带命令javap 打开Settings->Tools->Externa...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/notebook/java/Java%E7%B3%BB%E5%88%97-%E6%9F%A5%E7%9C%8B%E5%AD%97%E8%8A%82%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"Java系列-查看字节码"}],["meta",{"property":"og:description","content":"概述 前提条件：要看字节码，首先得知道字节码对应的class文件，这个class文件是由java文件经过编译而来的，至于怎么编译，可以通过javac，或者IDE等工具生成。 查看字节码的几种方式 测试例子： 控制台 打开cmd，然后使用javap命令来查看： IDEA 使用java自带命令javap 打开Settings->Tools->Externa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/java/javap_20191111234651.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:38:00.000Z"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:38:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java系列-查看字节码\\",\\"image\\":[\\"https://pic.sansei.top/images/java/javap_20191111234651.png\\",\\"https://pic.sansei.top/images/java/javap_20191111234809.png\\",\\"https://pic.sansei.top/images/java/javap_20191111235312.png\\",\\"https://pic.sansei.top/images/java/javap_20191111235518.png\\",\\"https://pic.sansei.top/images/java/javap_20191111235800.png\\",\\"https://pic.sansei.top/images/java/javap_20191111235643.png\\",\\"https://pic.sansei.top/images/java/javap_20191111235940.png\\"],\\"dateModified\\":\\"2024-09-21T02:38:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"查看字节码的几种方式","slug":"查看字节码的几种方式","link":"#查看字节码的几种方式","children":[{"level":3,"title":"控制台","slug":"控制台","link":"#控制台","children":[]},{"level":3,"title":"IDEA 使用java自带命令javap","slug":"idea-使用java自带命令javap","link":"#idea-使用java自带命令javap","children":[]},{"level":3,"title":"IDEA 安装插件 jclasslib Bytecode viewer","slug":"idea-安装插件-jclasslib-bytecode-viewer","link":"#idea-安装插件-jclasslib-bytecode-viewer","children":[]}]}],"git":{"createdTime":1726886280000,"updatedTime":1726886280000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.95,"words":286},"filePathRelative":"notebook/java/Java系列-查看字节码.md","localizedDate":"2024年9月21日","autoDesc":true}');export{c as comp,r as data};
