import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,e,o as i}from"./app-CSRNZOmr.js";const l={};function p(d,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="双亲委派模型" tabindex="-1"><a class="header-anchor" href="#双亲委派模型"><span>双亲委派模型</span></a></h1><h2 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h2><h3 id="加载类的开放性" tabindex="-1"><a class="header-anchor" href="#加载类的开放性"><span>加载类的开放性</span></a></h3><p>类加载器（ClassLoader）是 Java 语言的一项创新，也是 Java 流行的一个重要原因。在类加载的第一阶段“加载”过程中，需要通过一个类的全限定名来获取定义此类的二进制字节流，完成这个动作的代码块就是 类加载器。这一动作是放在 Java 虚拟机外部去实现的，以便让应用程序自己决定如何获取所需的类。</p><p>虚拟机规范并没有指明二进制字节流要从一个 Class 文件获取，或者说根本没有指明从哪里获取、怎样获取。这种开放使得 Java 在很多领域得到充分运用，例如：</p><ul><li>从 ZIP 包中读取，这很常见，成为 JAR，EAR，WAR 格式的基础</li><li>从网络中获取，最典型的应用就是 Applet</li><li>运行时计算生成，最典型的是动态代理技术，在 <code>java.lang.reflect.Proxy</code> 中，就是用了 <code>ProxyGenerator.generateProxyClass</code> 来为特定接口生成形式为“*$Proxy”的代理类的二进制字节流</li><li>有其他文件生成，最典型的 JSP 应用，由 JSP 文件生成对应的 Class 类</li></ul><h3 id="类加载器与类的唯一性" tabindex="-1"><a class="header-anchor" href="#类加载器与类的唯一性"><span>类加载器与类的唯一性</span></a></h3><p>类加载器虽然只用于实现类的加载动作，但是对于任意一个类，都需要由加载它的类加载器和这个类本身共同确立其在 Java 虚拟机中的 唯一性。通俗的说，JVM 中两个类是否“相等”，首先就必须是同一个类加载器加载的，否则，即使这两个类来源于同一个 Class 文件，被同一个虚拟机加载，只要类加载器不同，那么这两个类必定是不相等的。</p><p>这里的“相等”，包括代表类的 Class 对象的 <code>equals()</code> 方法、<code>isAssignableFrom()</code> 方法、<code>isInstance()</code> 方法的返回结果，也包括使用 <code>instanceof</code> 关键字做对象所属关系判定等情况。</p><p>下代码说明了不同的类加载器对 <code>instanceof</code> 关键字运算的结果的影响。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.jvm.classloading;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.io.IOException;</span></span>
<span class="line"><span>import java.io.InputStream;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 类加载器在类相等判断中的影响</span></span>
<span class="line"><span> * </span></span>
<span class="line"><span> * instanceof关键字</span></span>
<span class="line"><span> * </span></span>
<span class="line"><span> */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class ClassLoaderTest {</span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>        // 自定义类加载器</span></span>
<span class="line"><span>        ClassLoader myLoader = new ClassLoader() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public Class&lt;?&gt; loadClass(String name) throws ClassNotFoundException {</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                    String fileName = name.substring(name.lastIndexOf(&quot;.&quot;) + 1) + &quot;.class&quot;;</span></span>
<span class="line"><span>                    InputStream is = getClass().getResourceAsStream(fileName);</span></span>
<span class="line"><span>                    if (is == null) {</span></span>
<span class="line"><span>                        return super.loadClass(fileName);</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                    byte[] b = new byte[is.available()];</span></span>
<span class="line"><span>                    is.read(b);</span></span>
<span class="line"><span>                    return defineClass(name, b, 0, b.length);   </span></span>
<span class="line"><span>                } catch (IOException e) {</span></span>
<span class="line"><span>                    throw new ClassNotFoundException();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用 ClassLoaderTest 的类加载器加载本类</span></span>
<span class="line"><span>        Object obj1 = ClassLoaderTest.class.getClassLoader().loadClass(&quot;com.jvm.classloading.ClassLoaderTest&quot;).newInstance();</span></span>
<span class="line"><span>        System.out.println(obj1.getClass());</span></span>
<span class="line"><span>        System.out.println(obj1 instanceof com.jvm.classloading.ClassLoaderTest);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 使用自定义类加载器加载本类</span></span>
<span class="line"><span>        Object obj2 = myLoader.loadClass(&quot;com.jvm.classloading.ClassLoaderTest&quot;).newInstance();</span></span>
<span class="line"><span>        System.out.println(obj2.getClass());</span></span>
<span class="line"><span>        System.out.println(obj2 instanceof com.jvm.classloading.ClassLoaderTest);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class com.jvm.classloading.ClassLoaderTest</span></span>
<span class="line"><span>true</span></span>
<span class="line"><span>class com.jvm.classloading.ClassLoaderTest</span></span>
<span class="line"><span>false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const r=a(l,[["render",p]]),o=JSON.parse('{"path":"/audition/other/knowledge1.html","title":"双亲委派模型","lang":"zh-CN","frontmatter":{"description":"双亲委派模型 类加载器 加载类的开放性 类加载器（ClassLoader）是 Java 语言的一项创新，也是 Java 流行的一个重要原因。在类加载的第一阶段“加载”过程中，需要通过一个类的全限定名来获取定义此类的二进制字节流，完成这个动作的代码块就是 类加载器。这一动作是放在 Java 虚拟机外部去实现的，以便让应用程序自己决定如何获取所需的类。 虚...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/other/knowledge1.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"双亲委派模型"}],["meta",{"property":"og:description","content":"双亲委派模型 类加载器 加载类的开放性 类加载器（ClassLoader）是 Java 语言的一项创新，也是 Java 流行的一个重要原因。在类加载的第一阶段“加载”过程中，需要通过一个类的全限定名来获取定义此类的二进制字节流，完成这个动作的代码块就是 类加载器。这一动作是放在 Java 虚拟机外部去实现的，以便让应用程序自己决定如何获取所需的类。 虚..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-11T09:54:05.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-11T09:54:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双亲委派模型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-11T09:54:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[{"level":3,"title":"加载类的开放性","slug":"加载类的开放性","link":"#加载类的开放性","children":[]},{"level":3,"title":"类加载器与类的唯一性","slug":"类加载器与类的唯一性","link":"#类加载器与类的唯一性","children":[]}]}],"git":{"createdTime":1749635645000,"updatedTime":1749635645000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":2.28,"words":683},"filePathRelative":"audition/other/knowledge1.md","localizedDate":"2025年6月11日","autoDesc":true}');export{r as comp,o as data};
