"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9855],{105:(e,t)=>{t.A=(e,t)=>{const r=e.__vccOpts||e;for(const[e,o]of t)r[e]=o;return r}},3541:(e,t,r)=>{r.r(t),r.d(t,{comp:()=>a,data:()=>p});var o=r(6904);const i=[(0,o.Fv)('<h1 id="spring-mvc-运行流程" tabindex="-1"><a class="header-anchor" href="#spring-mvc-运行流程"><span>Spring MVC 运行流程</span></a></h1><ul><li>Spring MVC 将所有的请求都提交给 <code>DispatcherServlet</code>，它会委托应用系统的其他模块负责对请求进行真正的处理工作。</li><li><code>DispatcherServlet</code> 查询一个或多个 <code>HandlerMapping</code>，找到处理请求的 Controller.</li><li><code>DispatcherServlet</code> 请求提交到目标 Controller</li><li>Controller 进行业务逻辑处理后，会返回一个 <code>ModelAndView</code></li><li>Dispatcher 查询一个或多个 <code>ViewResolver</code> 视图解析器,找到 <code>ModelAndView</code> 对象指定的视图对象</li><li>视图对象负责渲染返回给客户端。</li></ul>',2)],n={},a=(0,r(105).A)(n,[["render",function(e,t){return(0,o.uX)(),(0,o.CE)("div",null,i)}]]),p=JSON.parse('{"path":"/knowledge/Java-Spring8.html","title":"Spring MVC 运行流程","lang":"zh-CN","frontmatter":{"description":"Spring MVC 运行流程 Spring MVC 将所有的请求都提交给 DispatcherServlet，它会委托应用系统的其他模块负责对请求进行真正的处理工作。 DispatcherServlet 查询一个或多个 HandlerMapping，找到处理请求的 Controller. DispatcherServlet 请求提交到目标 Contr...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/knowledge/Java-Spring8.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"Spring MVC 运行流程"}],["meta",{"property":"og:description","content":"Spring MVC 运行流程 Spring MVC 将所有的请求都提交给 DispatcherServlet，它会委托应用系统的其他模块负责对请求进行真正的处理工作。 DispatcherServlet 查询一个或多个 HandlerMapping，找到处理请求的 Controller. DispatcherServlet 请求提交到目标 Contr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T09:01:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-29T09:01:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring MVC 运行流程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T09:01:42.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1724922102000,"updatedTime":1724922102000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"knowledge/Java-Spring8.md","localizedDate":"2024年8月29日","autoDesc":true}')}}]);