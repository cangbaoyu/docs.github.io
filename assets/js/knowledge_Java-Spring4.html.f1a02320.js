"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[851],{105:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}},3467:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>i,data:()=>o});var a=n(6904);const r=[(0,a.Fv)('<h1 id="什么是spring-aop" tabindex="-1"><a class="header-anchor" href="#什么是spring-aop"><span>什么是Spring AOP</span></a></h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p>面向切面编程，在我们的应用中，经常需要做一些事情，但是这些事情与核心业务无关，比如，要记录所有 update 方法的执行时间时间，操作人等等信息，记录到日志， 通过 Spring 的 AOP 技术，就可以在不修改 update 的代码的情况下完成该需求。</p><h2 id="spring-aop-实现原理" tabindex="-1"><a class="header-anchor" href="#spring-aop-实现原理"><span>Spring AOP 实现原理</span></a></h2><p>Spring AOP 中的动态代理主要有两种方式，<strong>JDK 动态代理</strong> 和 <strong>CGLIB 动态代理</strong>。JDK 动态代理通过反射来接收被代理的类，并且要求被代理的类必须实现一个接口。JDK 动态代理的核心是 <code>InvocationHandler</code> 接口和 <code>Proxy</code> 类。</p><p>如果目标类没有实现接口，那么 Spring AOP 会选择使用 CGLIB 来动态代理目标类。CGLIB（Code Generation Library），是一个代码生成的类库，可以在运行时动态的生成某个类的子类，注意，CGLIB 是通过继承的方式做的动态代理，因此如果某个类被标记为 final，那么它是无法使用 CGLIB 做动态代理的。</p><h2 id="动态代理-cglib-与-jdk" tabindex="-1"><a class="header-anchor" href="#动态代理-cglib-与-jdk"><span>动态代理（CGLIB 与 JDK）</span></a></h2><p>JDK 动态代理类和委托类需要都实现同一个接口。也就是说只有实现了某个接口的类可以使用 Java 动态代理机制。但是，事实上使用中并不是遇到的所有类都会给你实现一个接口。因此，对于没有实现接口的类，就不能使用该机制。而 CGLIB 则可以实现对类的动态代理。</p>',8)],p={},i=(0,n(105).A)(p,[["render",function(e,t){return(0,a.uX)(),(0,a.CE)("div",null,r)}]]),o=JSON.parse('{"path":"/knowledge/Java-Spring4.html","title":"什么是Spring AOP","lang":"zh-CN","frontmatter":{"description":"什么是Spring AOP 概念 面向切面编程，在我们的应用中，经常需要做一些事情，但是这些事情与核心业务无关，比如，要记录所有 update 方法的执行时间时间，操作人等等信息，记录到日志， 通过 Spring 的 AOP 技术，就可以在不修改 update 的代码的情况下完成该需求。 Spring AOP 实现原理 Spring AOP 中的动态代...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/knowledge/Java-Spring4.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"什么是Spring AOP"}],["meta",{"property":"og:description","content":"什么是Spring AOP 概念 面向切面编程，在我们的应用中，经常需要做一些事情，但是这些事情与核心业务无关，比如，要记录所有 update 方法的执行时间时间，操作人等等信息，记录到日志， 通过 Spring 的 AOP 技术，就可以在不修改 update 的代码的情况下完成该需求。 Spring AOP 实现原理 Spring AOP 中的动态代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T09:01:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-29T09:01:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是Spring AOP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T09:01:42.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"Spring AOP 实现原理","slug":"spring-aop-实现原理","link":"#spring-aop-实现原理","children":[]},{"level":2,"title":"动态代理（CGLIB 与 JDK）","slug":"动态代理-cglib-与-jdk","link":"#动态代理-cglib-与-jdk","children":[]}],"git":{"createdTime":1724922102000,"updatedTime":1724922102000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.32,"words":397},"filePathRelative":"knowledge/Java-Spring4.md","localizedDate":"2024年8月29日","autoDesc":true}')}}]);