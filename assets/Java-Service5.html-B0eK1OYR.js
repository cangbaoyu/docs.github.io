import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e as i}from"./app-D23J47JW.js";const l={};function d(t,s){return n(),a("div",null,s[0]||(s[0]=[i(`<h1 id="如何设计一个良好的-api" tabindex="-1"><a class="header-anchor" href="#如何设计一个良好的-api"><span>如何设计一个良好的 API</span></a></h1><h2 id="版本号" tabindex="-1"><a class="header-anchor" href="#版本号"><span>版本号</span></a></h2><p>在 RESTful API 中，API 接口应该尽量兼容之前的版本。但是，在实际业务开发场景中，可能随着业务需求的不断迭代，现有的 API 接口无法支持旧版本的适配，此时如果强制升级服务端的 API 接口将导致客户端旧有功能出现故障。实际上，Web 端是部署在服务器，因此它可以很容易为了适配服务端的新的 API 接口进行版本升级，然而像 Android 端、IOS 端、PC 端等其他客户端是运行在用户的机器上，因此当前产品很难做到适配新的服务端的 API 接口，从而出现功能故障，这种情况下，用户必须升级产品到最新的版本才能正常使用。</p><p>为了解决这个版本不兼容问题，在设计 RESTful API 的一种实用的做法是使用版本号。一般情况下，我们会在 url 中保留版本号，并同时兼容多个版本。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】  /v1/users/{user_id}  // 版本 v1 的查询用户列表的 API 接口</span></span>
<span class="line"><span>【GET】  /v2/users/{user_id}  // 版本 v2 的查询用户列表的 API 接口</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以不改变版本 v1 的查询用户列表的 API 接口的情况下，新增版本 v2 的查询用户列表的 API 接口以满足新的业务需求，此时，客户端的产品的新功能将请求新的服务端的 API 接口地址。虽然服务端会同时兼容多个版本，但是同时维护太多版本对于服务端而言是个不小的负担，因为服务端要维护多套代码。这种情况下，常见的做法不是维护所有的兼容版本，而是只维护最新的几个兼容版本，例如维护最新的三个兼容版本。在一段时间后，当绝大多数用户升级到较新的版本后，废弃一些使用量较少的服务端的老版本API 接口版本，并要求使用产品的非常旧的版本的用户强制升级。</p><p>注意的是，“不改变版本 v1 的查询用户列表的 API 接口”主要指的是对于客户端的调用者而言它看起来是没有改变。而实际上，如果业务变化太大，服务端的开发人员需要对旧版本的 API 接口使用适配器模式将请求适配到新的API 接口上。</p><h2 id="资源路径" tabindex="-1"><a class="header-anchor" href="#资源路径"><span>资源路径</span></a></h2><p>RESTful API 的设计以资源为核心，每一个 URI 代表一种资源。因此，URI 不能包含动词，只能是名词。注意的是，形容词也是可以使用的，但是尽量少用。一般来说，不论资源是单个还是多个，API 的名词要以复数进行命名。此外，命名名词的时候，要使用小写、数字及下划线来区分多个单词。这样的设计是为了与 json 对象及属性的命名方案保持一致。例如，一个查询系统标签的接口可以进行如下设计。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】  /v1/tags/{tag_id}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>同时，资源的路径应该从根到子依次如下</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/{resources}/{resource_id}/{sub_resources}/{sub_resource_id}/{sub_resource_property}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们来看一个“添加用户的角色”的设计，其中“用户”是主资源，“角色”是子资源。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【POST】  /v1/users/{user_id}/roles/{role_id} // 添加用户的角色</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>有的时候，当一个资源变化难以使用标准的 RESTful API 来命名，可以考虑使用一些特殊的 actions 命名。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/{resources}/{resource_id}/actions/{action}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>举个例子，“密码修改”这个接口的命名很难完全使用名词来构建路径，此时可以引入 action 命名。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【PUT】  /v1/users/{user_id}/password/actions/modify // 密码修改</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="请求方式" tabindex="-1"><a class="header-anchor" href="#请求方式"><span>请求方式</span></a></h2><p>可以通过 GET、 POST、 PUT、 PATCH、 DELETE 等方式对服务端的资源进行操作。其中：</p><ul><li>GET：用于查询资源</li><li>POST：用于创建资源</li><li>PUT：用于更新服务端的资源的全部信息</li><li>PATCH：用于更新服务端的资源的部分信息</li><li>DELETE：用于删除服务端的资源。 这里，使用“用户”的案例进行回顾通过 GET、 POST、 PUT、 PATCH、 DELETE 等方式对服务端的资源进行操作。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】          /users                # 查询用户信息列表</span></span>
<span class="line"><span>【GET】          /users/1001           # 查看某个用户信息</span></span>
<span class="line"><span>【POST】         /users                # 新建用户信息</span></span>
<span class="line"><span>【PUT】          /users/1001           # 更新用户信息(全部字段)</span></span>
<span class="line"><span>【PATCH】        /users/1001           # 更新用户信息(部分字段)</span></span>
<span class="line"><span>【DELETE】       /users/1001           # 删除用户信息</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询参数" tabindex="-1"><a class="header-anchor" href="#查询参数"><span>查询参数</span></a></h2><p>RESTful API 接口应该提供参数，过滤返回结果。其中，offset 指定返回记录的开始位置。一般情况下，它会结合 limit 来做分页的查询，这里 limit 指定返回记录的数量。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】  /{version}/{resources}/{resource_id}?offset=0&amp;limit=20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>同时，orderby 可以用来排序，但仅支持单个字符的排序，如果存在多个字段排序，需要业务中扩展其他参数进行支持。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】  /{version}/{resources}/{resource_id}?orderby={field} [asc|desc]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>为了更好地选择是否支持查询总数，我们可以使用 count 字段，count 表示返回数据是否包含总条数，它的默认值为 false。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】  /{version}/{resources}/{resource_id}?count=[true|false]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面介绍的 offset、 limit、 orderby 是一些公共参数。此外，业务场景中还存在许多个性化的参数。我们来看一个例子。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】  /v1/categorys/{category_id}/apps/{app_id}?enable=[1|0]&amp;os_type={field}&amp;device_ids={field,field,…}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意的是，不要过度设计，只返回用户需要的查询参数。此外，需要考虑是否对查询参数创建数据库索引以提高查询性能。</p><h2 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码"><span>状态码</span></a></h2><p>使用适合的状态码很重要，而不应该全部都返回状态码 200，或者随便乱使用。这里，列举在实际开发过程中常用的一些状态码，以供参考。</p><table><thead><tr><th>状态码</th><th>描述</th></tr></thead><tbody><tr><td>200</td><td>请求成功</td></tr><tr><td>201</td><td>创建成功</td></tr><tr><td>400</td><td>错误的请求</td></tr><tr><td>401</td><td>未验证</td></tr><tr><td>403</td><td>被拒绝</td></tr><tr><td>404</td><td>无法找到</td></tr><tr><td>409</td><td>资源冲突</td></tr><tr><td>500</td><td>服务器内部错误</td></tr></tbody></table><h2 id="异常响应" tabindex="-1"><a class="header-anchor" href="#异常响应"><span>异常响应</span></a></h2><p>当 RESTful API 接口出现非 2xx 的 HTTP 错误码响应时，采用全局的异常结构响应信息。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 400 Bad Request</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: &quot;INVALID_ARGUMENT&quot;,</span></span>
<span class="line"><span>    &quot;message&quot;: &quot;{error message}&quot;,</span></span>
<span class="line"><span>    &quot;cause&quot;: &quot;{cause message}&quot;,</span></span>
<span class="line"><span>    &quot;request_id&quot;: &quot;01234567-89ab-cdef-0123-456789abcdef&quot;,</span></span>
<span class="line"><span>    &quot;host_id&quot;: &quot;{server identity}&quot;,</span></span>
<span class="line"><span>    &quot;server_time&quot;: &quot;2014-01-01T12:00:00Z&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数"><span>请求参数</span></a></h2><p>在设计服务端的 RESTful API 的时候，我们还需要对请求参数进行限制说明。例如一个支持批量查询的接口，我们要考虑最大支持查询的数量。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】     /v1/users/batch?user_ids=1001,1002      // 批量查询用户信息</span></span>
<span class="line"><span>参数说明</span></span>
<span class="line"><span>- user_ids: 用户ID串，最多允许 20 个。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，在设计新增或修改接口时，我们还需要在文档中明确告诉调用者哪些参数是必填项，哪些是选填项，以及它们的边界值的限制。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【POST】     /v1/users                             // 创建用户信息</span></span>
<span class="line"><span>请求内容</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;username&quot;: &quot;lusifer&quot;,                 // 必填, 用户名称, max 10</span></span>
<span class="line"><span>    &quot;realname&quot;: &quot;鲁斯菲尔&quot;,               // 必填, 用户名称, max 10</span></span>
<span class="line"><span>    &quot;password&quot;: &quot;123456&quot;,              // 必填, 用户密码, max 32</span></span>
<span class="line"><span>    &quot;email&quot;: &quot;topsale@vip.qq.com&quot;,     // 选填, 电子邮箱, max 32</span></span>
<span class="line"><span>    &quot;weixin&quot;: &quot;Lusifer&quot;,            // 选填，微信账号, max 32</span></span>
<span class="line"><span>    &quot;sex&quot;: 1                           // 必填, 用户性别[1-男 2-女 99-未知]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="响应参数" tabindex="-1"><a class="header-anchor" href="#响应参数"><span>响应参数</span></a></h2><p>针对不同操作，服务端向用户返回的结果应该符合以下规范。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】     /{version}/{resources}/{resource_id}      // 返回单个资源对象</span></span>
<span class="line"><span>【GET】     /{version}/{resources}                    // 返回资源对象的列表</span></span>
<span class="line"><span>【POST】    /{version}/{resources}                    // 返回新生成的资源对象</span></span>
<span class="line"><span>【PUT】     /{version}/{resources}/{resource_id}      // 返回完整的资源对象</span></span>
<span class="line"><span>【PATCH】   /{version}/{resources}/{resource_id}      // 返回完整的资源对象</span></span>
<span class="line"><span>【DELETE】  /{version}/{resources}/{resource_id}      // 状态码 200，返回完整的资源对象。</span></span>
<span class="line"><span>                                                      // 状态码 204，返回一个空文档</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是单条数据，则返回一个对象的 JSON 字符串。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;id&quot; : &quot;01234567-89ab-cdef-0123-456789abcdef&quot;,</span></span>
<span class="line"><span>    &quot;name&quot; : &quot;example&quot;,</span></span>
<span class="line"><span>    &quot;created_time&quot;: 1496676420000,</span></span>
<span class="line"><span>    &quot;updated_time&quot;: 1496676420000,</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是列表数据，则返回一个封装的结构体。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;count&quot;:100,</span></span>
<span class="line"><span>    &quot;items&quot;:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot; : &quot;01234567-89ab-cdef-0123-456789abcdef&quot;,</span></span>
<span class="line"><span>            &quot;name&quot; : &quot;example&quot;,</span></span>
<span class="line"><span>            &quot;created_time&quot;: 1496676420000,</span></span>
<span class="line"><span>            &quot;updated_time&quot;: 1496676420000,</span></span>
<span class="line"><span>            ...</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一个完整的案例" tabindex="-1"><a class="header-anchor" href="#一个完整的案例"><span>一个完整的案例</span></a></h2><p>最后，我们使用一个完整的案例将前面介绍的知识整合起来。这里，使用“获取用户列表”的案例。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>【GET】     /v1/users?[&amp;keyword=xxx][&amp;enable=1][&amp;offset=0][&amp;limit=20] 获取用户列表</span></span>
<span class="line"><span>功能说明：获取用户列表</span></span>
<span class="line"><span>请求方式：GET</span></span>
<span class="line"><span>参数说明</span></span>
<span class="line"><span>- keyword: 模糊查找的关键字。[选填]</span></span>
<span class="line"><span>- enable: 启用状态[1-启用 2-禁用]。[选填]</span></span>
<span class="line"><span>- offset: 获取位置偏移，从 0 开始。[选填]</span></span>
<span class="line"><span>- limit: 每次获取返回的条数，缺省为 20 条，最大不超过 100。 [选填]</span></span>
<span class="line"><span>响应内容</span></span>
<span class="line"><span>HTTP/1.1 200 OK</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;count&quot;:100,</span></span>
<span class="line"><span>    &quot;items&quot;:[</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;id&quot; : &quot;01234567-89ab-cdef-0123-456789abcdef&quot;,</span></span>
<span class="line"><span>            &quot;name&quot; : &quot;example&quot;,</span></span>
<span class="line"><span>            &quot;created_time&quot;: 1496676420000,</span></span>
<span class="line"><span>            &quot;updated_time&quot;: 1496676420000,</span></span>
<span class="line"><span>            ...</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>失败响应</span></span>
<span class="line"><span>HTTP/1.1 403 UC/AUTH_DENIED</span></span>
<span class="line"><span>Content-Type: application/json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;code&quot;: &quot;INVALID_ARGUMENT&quot;,</span></span>
<span class="line"><span>    &quot;message&quot;: &quot;{error message}&quot;,</span></span>
<span class="line"><span>    &quot;cause&quot;: &quot;{cause message}&quot;,</span></span>
<span class="line"><span>    &quot;request_id&quot;: &quot;01234567-89ab-cdef-0123-456789abcdef&quot;,</span></span>
<span class="line"><span>    &quot;host_id&quot;: &quot;{server identity}&quot;,</span></span>
<span class="line"><span>    &quot;server_time&quot;: &quot;2014-01-01T12:00:00Z&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>错误代码</span></span>
<span class="line"><span>- 403 UC/AUTH_DENIED    授权受限</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53)]))}const c=e(l,[["render",d],["__file","Java-Service5.html.vue"]]),u=JSON.parse('{"path":"/audition/microservices/Java-Service5.html","title":"如何设计一个良好的 API","lang":"zh-CN","frontmatter":{"description":"如何设计一个良好的 API 版本号 在 RESTful API 中，API 接口应该尽量兼容之前的版本。但是，在实际业务开发场景中，可能随着业务需求的不断迭代，现有的 API 接口无法支持旧版本的适配，此时如果强制升级服务端的 API 接口将导致客户端旧有功能出现故障。实际上，Web 端是部署在服务器，因此它可以很容易为了适配服务端的新的 API 接口...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/microservices/Java-Service5.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"如何设计一个良好的 API"}],["meta",{"property":"og:description","content":"如何设计一个良好的 API 版本号 在 RESTful API 中，API 接口应该尽量兼容之前的版本。但是，在实际业务开发场景中，可能随着业务需求的不断迭代，现有的 API 接口无法支持旧版本的适配，此时如果强制升级服务端的 API 接口将导致客户端旧有功能出现故障。实际上，Web 端是部署在服务器，因此它可以很容易为了适配服务端的新的 API 接口..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T17:04:29.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T17:04:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何设计一个良好的 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T17:04:29.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"版本号","slug":"版本号","link":"#版本号","children":[]},{"level":2,"title":"资源路径","slug":"资源路径","link":"#资源路径","children":[]},{"level":2,"title":"请求方式","slug":"请求方式","link":"#请求方式","children":[]},{"level":2,"title":"查询参数","slug":"查询参数","link":"#查询参数","children":[]},{"level":2,"title":"状态码","slug":"状态码","link":"#状态码","children":[]},{"level":2,"title":"异常响应","slug":"异常响应","link":"#异常响应","children":[]},{"level":2,"title":"请求参数","slug":"请求参数","link":"#请求参数","children":[]},{"level":2,"title":"响应参数","slug":"响应参数","link":"#响应参数","children":[]},{"level":2,"title":"一个完整的案例","slug":"一个完整的案例","link":"#一个完整的案例","children":[]}],"git":{"createdTime":1731863069000,"updatedTime":1731863069000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":7.52,"words":2257},"filePathRelative":"audition/microservices/Java-Service5.md","localizedDate":"2024年11月17日","autoDesc":true}');export{c as comp,u as data};
