import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e as l}from"./app-D23J47JW.js";const e={};function t(h,s){return a(),n("div",null,s[0]||(s[0]=[l(`<h2 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab"><span>GitLab</span></a></h2><p><strong>英文版</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    web</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;gitlab/gitlab-ce:11.1.0-ce.0&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;112.74.57.93&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        GITLAB_OMNIBUS_CONFIG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          external_url &#39;http://112.74.57.93:8080&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2222</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          unicorn[&#39;port&#39;] = 8888</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          nginx[&#39;listen_port&#39;] = 8080</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;8080:8080&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;8443:443&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;2222:22&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./config:/etc/gitlab</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./data:/var/opt/gitlab</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./logs:/var/log/gitlab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>中文版</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;3&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    web</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;twang2218/gitlab-ce-zh&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;112.74.57.93&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        GITLAB_OMNIBUS_CONFIG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          external_url &#39;http://112.74.57.93:8080&#39;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          gitlab_rails[&#39;gitlab_shell_ssh_port&#39;] = 2222</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          unicorn[&#39;port&#39;] = 8888</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          nginx[&#39;listen_port&#39;] = 8080</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;8080:8080&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;8443:443&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;2222:22&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./config:/etc/gitlab</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./data:/var/opt/gitlab</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./logs:/var/log/gitlab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nexus" tabindex="-1"><a class="header-anchor" href="#nexus"><span>Nexus</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;3.1&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  nexus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sonatype/nexus3</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">nexus</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">8081:8081</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">data:/nexus-data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PS：注意目录权限问题及默认最低配置</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 目录权限</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 777</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 查看初始密码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /data/admin.password</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   # d7ea2096-4513-47a1-9bb2-506239096422</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="harbour" tabindex="-1"><a class="header-anchor" href="#harbour"><span>Harbour</span></a></h2><table><thead><tr><th>工具</th><th>下载地址</th></tr></thead><tbody><tr><td><strong>Harbour官方 GitHub 上下载最新离线安装版</strong></td><td><a href="https://github.com/goharbor/harbor" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr></tbody></table><ul><li>账号： <code>admin</code></li><li>密码： <code>Harbor12345</code></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 解压</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">tar -zxvf harbor-offline-installer-v1.8.0.tgz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 修改</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">cd harbor</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">vi harbor.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">hostname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">192.168.88.202</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./install.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="禅道" tabindex="-1"><a class="header-anchor" href="#禅道"><span>禅道</span></a></h2><table><thead><tr><th>工具</th><th>下载地址</th></tr></thead><tbody><tr><td><strong>禅道开源版</strong></td><td><a href="http://dl.cnezsoft.com/zentao/docker/docker_zentao.zip" target="_blank" rel="noopener noreferrer">点我获取</a></td></tr></tbody></table><ul><li>下载并解压后将目录名修改为 build，需要修改 <code>Dockerfile</code> 为阿里镜像源，否则下载很慢</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ubuntu:16.04</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MAINTAINER</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yidong</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">yidong@cnezsoft.co</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">m&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 更新数据源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WORKDIR</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /etc/apt</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sources.list</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sources.list</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sources.list</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;deb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt;&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sources.list</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> apache2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mariadb-server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-gd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-ldap</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-mbstring</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-mcrypt</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-mysql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-xml</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-zip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-cli</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> php-json</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> libapache2-mod-php</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> locales</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">省略......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进行<code>docker-compose build</code> 构建镜像 ,显示如下</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE</span></span>
<span class="line"><span>zentao_zendao       latest              764185595650        38 minutes ago      592MB</span></span>
<span class="line"><span>ubuntu              16.04               5e13f8dd4c1a        3 weeks ago         120MB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>再通过 <code>docker-compose</code> 构建</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;3.1&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  zendao</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">build</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">zendao</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      MYSQL_ROOT_PASSWORD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">123456</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">80:80</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./app:/app/zentaopms</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./data:/var/lib/mysql</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21)]))}const d=i(e,[["render",t],["__file","私服搭建.html.vue"]]),r=JSON.parse('{"path":"/devops/basic/linux/%E7%A7%81%E6%9C%8D%E6%90%AD%E5%BB%BA.html","title":"私服搭建","lang":"zh-CN","frontmatter":{"title":"私服搭建","icon":"wand-magic-sparkles","order":5,"category":["Ubuntu"],"tag":["Ubuntu"],"description":"GitLab 英文版 中文版 Nexus PS：注意目录权限问题及默认最低配置 Harbour 账号： admin 密码： Harbor12345 禅道 下载并解压后将目录名修改为 build，需要修改 Dockerfile 为阿里镜像源，否则下载很慢 进行docker-compose build 构建镜像 ,显示如下 再通过 docker-compo...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/devops/basic/linux/%E7%A7%81%E6%9C%8D%E6%90%AD%E5%BB%BA.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"私服搭建"}],["meta",{"property":"og:description","content":"GitLab 英文版 中文版 Nexus PS：注意目录权限问题及默认最低配置 Harbour 账号： admin 密码： Harbor12345 禅道 下载并解压后将目录名修改为 build，需要修改 Dockerfile 为阿里镜像源，否则下载很慢 进行docker-compose build 构建镜像 ,显示如下 再通过 docker-compo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:04:29.000Z"}],["meta",{"property":"article:tag","content":"Ubuntu"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:04:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"私服搭建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:04:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"GitLab","slug":"gitlab","link":"#gitlab","children":[]},{"level":2,"title":"Nexus","slug":"nexus","link":"#nexus","children":[]},{"level":2,"title":"Harbour","slug":"harbour","link":"#harbour","children":[]},{"level":2,"title":"禅道","slug":"禅道","link":"#禅道","children":[]}],"git":{"createdTime":1731863069000,"updatedTime":1731863069000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":1.47,"words":441},"filePathRelative":"devops/basic/linux/私服搭建.md","localizedDate":"2024年11月17日","autoDesc":true}');export{d as comp,r as data};
