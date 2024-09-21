import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as l,b as e,o as n}from"./app-D_Fb6juQ.js";const t={};function h(k,i){return n(),a("div",null,[i[0]||(i[0]=l(`<h1 id="mysql数据库安装" tabindex="-1"><a class="header-anchor" href="#mysql数据库安装"><span>MySQL数据库安装</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><blockquote><p>MySQL是一种开放源代码的关系型数据库管理系（RDBMS），使用最常用的数据库管理语言--结构化查询语言（SQL）进行数据库管理，于1998年一月发行第一个版本。</p></blockquote><p>PS: <a href="http://www.mysql.com" target="_blank" rel="noopener noreferrer">MySQL官网</a>下载相对应的软件包。</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2><blockquote><p>安装方式有：</p><ul><li>二进制安装:</li><li>yum安装:</li><li>docker安装:</li></ul></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 列出所有版本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# yum repolist all | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安装 yum 配置工具</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# yum -y install yum-utils</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 禁用 8.0 版本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# yum-config-manager --disable mysql80-community</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启用 5.7 版本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# yum-config-manager --enable mysql57-community</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 检查启用版本 注意：进行安装时请确保只有一个版本启用，否则会显示版本冲突</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# yum repolist enabled | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正式安装-mysql" tabindex="-1"><a class="header-anchor" href="#正式安装-mysql"><span>正式安装 MySQL</span></a></h2><ul><li>需要安装MySQL Server, MySQL Client 已经包括在 <code>server</code> 套件内</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# yum -y install mysql-community-server mysql                  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安装服务端，客户端</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# systemctl start mysqld                                       </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动 mysql 服务</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# systemctl enable mysqld                                      </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 设置 mysql 服务开机启动</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# ls /var/lib/mysql                                            </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看 mysql 安装</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# grep </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;tqfeduorary password&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /var/log/mysqld.log              </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 获取首次登录密码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# mysql -uroot -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;XXX&gt;!xxxxxxxx&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                               # 登录 mysql 数据库</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">alter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;root&#39;@&#39;localhost&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Dev$123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;                 </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 修改 mysql 数据库密码（密码必须符合复杂性要求，包含字母大小写，数字，特赦符号，长度不少于8位）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# mysql -uroot -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Dev$123456&#39;</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">                                  # 用新密码登录数据库</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启/停止 MySQL</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# systemctl stop mysqld</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# systemctl restart mysqld</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql用户管理" tabindex="-1"><a class="header-anchor" href="#mysql用户管理"><span>MySQL用户管理</span></a></h2><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3><ul><li><code>create user</code>语句创建：<code>create user &#39;用户名&#39;@&#39;IP地址&#39; identified by &#39;密码&#39;</code>;</li><li><code>grant</code> 语句创建： <ul><li>分配所有的权限: <code>grant 权限 on 数据库.数据表 to &#39;用户&#39; @ &#39;主机名&#39;</code></li><li>精准的控制用户的权限: <code>grant 权限 on 数据库.数据表 to &#39;用户&#39; @ &#39;主机名&#39;</code>;</li></ul></li></ul><p>创建实例</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># create user 用户名 identified by &#39;密码&#39;; 新创建的用户，默认情况下是没有任何权限的。</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 用户名部分为“test”，主机名默认为“%”（即对所有主机开放权限） 如果指定用户登录不需要密码，则可以省略identified BY部分</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;@&#39;localhost&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;@&#39;192.168.1.101&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;@&#39;192.168.1.%&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;@&#39;%&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># grant 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grant</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test3&#39;@’localhost’</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;123456&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户"><span>删除用户</span></a></h3><ul><li><code>DROP USER</code>删除：<code>DROP USER &#39;用户名&#39;@&#39;IP地址&#39;</code>;</li><li><code>DELETE</code> 语句删除：<code>DELETE FROM mysql.user WHERE user=&#39;用户名&#39; AND host=&#39;IP地址&#39;</code>;</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># drop 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DROP</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;user1&#39;@’localhost’</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># delete 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">DELETE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql.user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> WHERE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user=’user2’</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> AND</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> host=’localhost’</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改用户" tabindex="-1"><a class="header-anchor" href="#修改用户"><span>修改用户</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 语法</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RENAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;旧用户名&#39;@&#39;IP地址&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;新用户名&#39;@&#39;IP地址&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 示例</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RENAME</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> USER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;old_user&#39;@‘localhost’</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> TO</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;new_user&#39;@&#39;localhost&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改密码" tabindex="-1"><a class="header-anchor" href="#修改密码"><span>修改密码</span></a></h3><p>PS：修改完密码必须刷新权限</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FLUSH</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> PRIVILEGES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><code>root用户修改自己密码</code>： <ul><li>方法一：<code>mysqladmin -uroot -p123 password &#39;new_password&#39; # 123为旧密码;</code></li><li>方法二：<code>alter user &#39;root&#39;@&#39;localhost&#39; identified by &#39;new_pssword&#39;;</code></li><li>方法三：<code>SET PASSWORD = password(&#39;new_password&#39;);</code></li></ul></li><li><code>root 修改其他用户密码</code>: <ul><li>方法一：<code>alter user &#39;qfedu&#39;@&#39;localhost&#39; identified by &#39;Qfedu.1234com&#39;;</code></li><li>方法二：<code>GRANT SELECT ON *.* TO 用户名@&#39;ip地址&#39; IDENTIFIED BY &#39;yuan&#39;;</code></li></ul></li><li>普通用户修改自己密码：<code>SET password = password(&#39;new_password&#39;);</code>;</li></ul><h3 id="找回-root-密码" tabindex="-1"><a class="header-anchor" href="#找回-root-密码"><span>找回 root 密码</span></a></h3><ul><li>1.修改MySQL配置文件: 在[mysqld]下面加上 skip-grant-tables</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# vim /etc/my.cnf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[mysqld]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">···</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#设置免密登录</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">skip-grant-tables</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>2.重启 MySQL: <code>systemctl restart mysqld</code></p></li><li><p>3.修改密码:</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 终端输入 mysql 直接登录 MySQL数据库</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# mysql</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 切换到 MySQL 系统库 mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 设置密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">update</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> authentication_string=password</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&#39;密码&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">where</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> user=&#39;root&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>4.注释掉免密登录</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# vim /etc/my.cnf</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[mysqld]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">···</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#设置免密登录</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">#skip-grant-tables</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>5.重启 MySQL 然后登录</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# systemctl restart mysqld</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# mysql -uroot -p</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql用户授权" tabindex="-1"><a class="header-anchor" href="#mysql用户授权"><span>MySQL用户授权</span></a></h2><h3 id="用户授权" tabindex="-1"><a class="header-anchor" href="#用户授权"><span>用户授权</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[root@i-xrjnk70d ~]# mysql -u root -p</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> password:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">grant</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> all</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> privileges</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;@&#39;%&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test$123456&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grant</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> option</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>all privileges</code>：表示将所有权限授予给用户。也可指定具体的权限，如：SELECT、CREATE、DROP等。</li><li><code>on</code>：表示这些权限对哪些数据库和表生效，格式：数据库名.表名，这里写“*”表示所有数据库，所有表。如果我要指定将权限应用到test库的user表中，可以这么写：test.user</li><li><code>to</code>：将权限授予哪个用户。格式：”用户名”@”登录IP或域名”。%表示没有限制，在任何主机都可以登录。比如：”test”@”192.168.0.%”，表示test这个用户只能在192.168.0IP段登录</li><li><code>identified by</code>：指定用户的登录密码</li><li><code>with grant option</code>：表示允许用户将自己的权限授权给其它用户</li></ul><blockquote><p>用户详情的权限列表请参考<a href="http://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html" target="_blank" rel="noopener noreferrer">MySQL官网说明</a></p></blockquote><h3 id="刷新权限" tabindex="-1"><a class="header-anchor" href="#刷新权限"><span>刷新权限</span></a></h3><p>对用户做了权限变更之后，记得重新加载一下权限，将权限信息从内存中写入数据库。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> privileges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="查看用户权限" tabindex="-1"><a class="header-anchor" href="#查看用户权限"><span>查看用户权限</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">grant</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> select,create,drop,update,alter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;@&#39;localhost&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> identified</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> by</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test$123456&#39;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grant</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> option</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> grants</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test&#39;@&#39;localhost&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回收权限" tabindex="-1"><a class="header-anchor" href="#回收权限"><span>回收权限</span></a></h3><p>语法：<code>revoke 权限1，权限2..on 数据库名.* from username@ip;</code></p><p>删除test这个用户的create权限，该用户将不能创建数据库和表。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">revoke</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;test@localhost&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mysql</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">flush</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> privileges</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="额外补充" tabindex="-1"><a class="header-anchor" href="#额外补充"><span>额外补充</span></a></h2>`,50)),e(" - [基于Docker部署MySQL](../../tools/basicservice/中间件搭建.md) ")])}const p=s(t,[["render",h],["__file","MySQL数据库安装.html.vue"]]),c=JSON.parse('{"path":"/notebook/mysql/MySQL%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.html","title":"MySQL数据库安装","lang":"zh-CN","frontmatter":{"description":"MySQL数据库安装 概述 MySQL是一种开放源代码的关系型数据库管理系（RDBMS），使用最常用的数据库管理语言--结构化查询语言（SQL）进行数据库管理，于1998年一月发行第一个版本。 PS: MySQL官网下载相对应的软件包。 准备工作 安装方式有： 二进制安装: yum安装: docker安装: 正式安装 MySQL 需要安装MySQL S...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/notebook/mysql/MySQL%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"MySQL数据库安装"}],["meta",{"property":"og:description","content":"MySQL数据库安装 概述 MySQL是一种开放源代码的关系型数据库管理系（RDBMS），使用最常用的数据库管理语言--结构化查询语言（SQL）进行数据库管理，于1998年一月发行第一个版本。 PS: MySQL官网下载相对应的软件包。 准备工作 安装方式有： 二进制安装: yum安装: docker安装: 正式安装 MySQL 需要安装MySQL S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-21T02:38:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-21T02:38:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL数据库安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-21T02:38:00.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"正式安装 MySQL","slug":"正式安装-mysql","link":"#正式安装-mysql","children":[]},{"level":2,"title":"MySQL用户管理","slug":"mysql用户管理","link":"#mysql用户管理","children":[{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"删除用户","slug":"删除用户","link":"#删除用户","children":[]},{"level":3,"title":"修改用户","slug":"修改用户","link":"#修改用户","children":[]},{"level":3,"title":"修改密码","slug":"修改密码","link":"#修改密码","children":[]},{"level":3,"title":"找回 root 密码","slug":"找回-root-密码","link":"#找回-root-密码","children":[]}]},{"level":2,"title":"MySQL用户授权","slug":"mysql用户授权","link":"#mysql用户授权","children":[{"level":3,"title":"用户授权","slug":"用户授权","link":"#用户授权","children":[]},{"level":3,"title":"刷新权限","slug":"刷新权限","link":"#刷新权限","children":[]},{"level":3,"title":"查看用户权限","slug":"查看用户权限","link":"#查看用户权限","children":[]},{"level":3,"title":"回收权限","slug":"回收权限","link":"#回收权限","children":[]}]},{"level":2,"title":"额外补充","slug":"额外补充","link":"#额外补充","children":[]}],"git":{"createdTime":1726886280000,"updatedTime":1726886280000,"contributors":[{"name":"him","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":4.39,"words":1316},"filePathRelative":"notebook/mysql/MySQL数据库安装.md","localizedDate":"2024年9月21日","autoDesc":true}');export{p as comp,c as data};
