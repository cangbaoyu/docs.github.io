import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as i}from"./app-CSRNZOmr.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="分布式锁的场景与实现" tabindex="-1"><a class="header-anchor" href="#分布式锁的场景与实现"><span>分布式锁的场景与实现</span></a></h1><h2 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h2><p>首先，我们看这样一个场景：客户下单的时候，我们调用库存中心进行减库存，那我们一般的操作都是：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>update store set num = $num where id = $id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这种通过设置库存的修改方式，我们知道在并发量高的时候会存在数据库的丢失更新，比如 a, b 当前两个事务，查询出来的库存都是 5，a 买了 3 个单子要把库存设置为 2，而 b 买了 1 个单子要把库存设置为 4，那这个时候就会出现 a 会覆盖 b 的更新，所以我们更多的都是会加个条件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>update store set num = $num where id = $id and num = $query_num</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>即乐观锁的方式来处理，当然也可以通过版本号来处理乐观锁，都是一样的，但是这是更新一个表，如果我们牵扯到多个表呢，我们希望和这个单子关联的所有的表同一时间只能被一个线程来处理更新，多个线程按照不同的顺序去更新同一个单子关联的不同数据，出现死锁的概率比较大。对于非敏感的数据，我们也没有必要去都加乐观锁处理，我们的服务都是多机器部署的，要保证多进程多线程同时只能有一个进程的一个线程去处理，这个时候我们就需要用到分布式锁。分布式锁的实现方式有很多，我们今天分别通过数据库，Zookeeper, Redis 以及 Tair 的实现逻辑。</p><h2 id="数据库实现" tabindex="-1"><a class="header-anchor" href="#数据库实现"><span>数据库实现</span></a></h2><h3 id="加-xx-锁" tabindex="-1"><a class="header-anchor" href="#加-xx-锁"><span>加 xx 锁</span></a></h3><p>更新一个单子关联的所有的数据，先查询出这个单子，并加上排他锁，在进行一系列的更新操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>begin transaction；</span></span>
<span class="line"><span>select ...for update；</span></span>
<span class="line"><span>doSomething()；</span></span>
<span class="line"><span>commit();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种处理主要依靠排他锁来阻塞其他线程，不过这个需要注意几点：</p><ol><li>查询的数据一定要在数据库里存在，如果不存在的话，数据库会加 gap 锁，而 gap 锁之间是兼容的，这种如果两个线程都加了gap 锁，另一个再更新的话会出现死锁。不过一般能更新的数据都是存在的</li><li>后续的处理流程需要尽可能的时间短，即在更新的时候提前准备好数据，保证事务处理的时间足够的短，流程足够的短，因为开启事务是一直占着连接的，如果流程比较长会消耗过多的数据库连接的</li></ol><h3 id="唯一键" tabindex="-1"><a class="header-anchor" href="#唯一键"><span>唯一键</span></a></h3><p>通过在一张表里创建唯一键来获取锁，比如执行 saveStore 这个方法</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>insert table lock_store (&#39;method_name&#39;) values($method_name)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中 <code>method_name</code> 是个唯一键，通过这种方式也可以做到，解锁的时候直接删除改行记录就行。不过这种方式，锁就不会是阻塞式的，因为插入数据是立马可以得到返回结果的。</p><p>那针对以上数据库实现的两种分布式锁，存在什么样的优缺点呢？</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span>优点</span></a></h3><p>简单，方便，快速实现</p><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h3><ul><li>基于数据库，开销比较大，性能可能会存在影响</li><li>基于数据库的当前读来实现，数据库会在底层做优化，可能用到索引，可能不用到索引，这个依赖于查询计划的分析</li></ul><h2 id="zookeeper-实现" tabindex="-1"><a class="header-anchor" href="#zookeeper-实现"><span>Zookeeper 实现</span></a></h2><h3 id="获取锁" tabindex="-1"><a class="header-anchor" href="#获取锁"><span>获取锁</span></a></h3><p>先有一个锁跟节点，<code>lockRootNode</code>，这可以是一个永久的节点 客户端获取锁，先在 <code>lockRootNode</code> 下创建一个顺序的瞬时节点，保证客户端断开连接，节点也自动删除 调用 <code>lockRootNode</code> 父节点的 <code>getChildren()</code> 方法，获取所有的节点，并从小到大排序，如果创建的最小的节点是当前节点，则返回 true,获取锁成功，否则，关注比自己序号小的节点的释放动作(exist watch)，这样可以保证每一个客户端只需要关注一个节点，不需要关注所有的节点，避免羊群效应。 如果有节点释放操作，重复步骤 3</p><h3 id="释放锁" tabindex="-1"><a class="header-anchor" href="#释放锁"><span>释放锁</span></a></h3><p>只需要删除步骤 2 中创建的节点即可</p><p>使用 Zookeeper 的分布式锁存在什么样的优缺点呢？</p><h3 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1"><span>优点</span></a></h3><ul><li>客户端如果出现宕机故障的话，锁可以马上释放</li><li>可以实现阻塞式锁，通过 watcher 监听，实现起来也比较简单</li><li>集群模式，稳定性比较高</li></ul><h3 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1"><span>缺点</span></a></h3><ul><li>一旦网络有任何的抖动，Zookeeper 就会认为客户端已经宕机，就会断掉连接，其他客户端就可以获取到锁。当然 Zookeeper 有重试机制，这个就比较依赖于其重试机制的策略了</li><li>性能上不如缓存</li></ul><h2 id="redis-实现" tabindex="-1"><a class="header-anchor" href="#redis-实现"><span>Redis 实现</span></a></h2><p>我们先举个例子，比如现在我要更新产品的信息，产品的唯一键就是 productId</p><h3 id="简单实现-1" tabindex="-1"><a class="header-anchor" href="#简单实现-1"><span>简单实现 1</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public boolean lock(String key, V v, int expireTime){</span></span>
<span class="line"><span>        int retry = 0;</span></span>
<span class="line"><span>        //获取锁失败最多尝试10次</span></span>
<span class="line"><span>        while (retry &lt; failRetryTimes){</span></span>
<span class="line"><span>            //获取锁</span></span>
<span class="line"><span>            Boolean result = redis.setNx(key, v, expireTime);</span></span>
<span class="line"><span>            if (result){</span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                //获取锁失败间隔一段时间重试</span></span>
<span class="line"><span>                TimeUnit.MILLISECONDS.sleep(sleepInterval);</span></span>
<span class="line"><span>            } catch (InterruptedException e) {</span></span>
<span class="line"><span>                Thread.currentThread().interrupt();</span></span>
<span class="line"><span>                return false;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public boolean unlock(String key){</span></span>
<span class="line"><span>        return redis.delete(key);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        Integer productId = 324324;</span></span>
<span class="line"><span>        RedisLock&lt;Integer&gt; redisLock = new RedisLock&lt;Integer&gt;();</span></span>
<span class="line"><span>        redisLock.lock(productId+&quot;&quot;, productId, 1000);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个简单的实现，存在的问题：</p><ol><li><p>可能会导致当前线程的锁误被其他线程释放，比如 a 线程获取到了锁正在执行，但是由于内部流程处理超时或者 gc 导致锁过期，这个时候b线程获取到了锁，a 和 b 线程处理的是同一个 productId，b还在处理的过程中，这个时候 a 处理完了，a 去释放锁，可能就会导致 a 把 b 获取的锁释放了。</p></li><li><p>不能实现可重入</p></li><li><p>客户端如果第一次已经设置成功，但是由于超时返回失败，此后客户端尝试会一直失败 针对以上问题我们改进下：</p></li><li><p>v 传 requestId，然后我们在释放锁的时候判断一下，如果是当前 requestId，那就可以释放，否则不允许释放</p></li><li><p>加入 count 的锁计数，在获取锁的时候查询一次，如果是当前线程已经持有的锁，那锁技术加 1，直接返回 true</p></li></ol><h3 id="简单实现-2" tabindex="-1"><a class="header-anchor" href="#简单实现-2"><span>简单实现 2</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>private static volatile int count = 0;</span></span>
<span class="line"><span>public boolean lock(String key, V v, int expireTime){</span></span>
<span class="line"><span>    int retry = 0;</span></span>
<span class="line"><span>    //获取锁失败最多尝试10次</span></span>
<span class="line"><span>    while (retry &lt; failRetryTimes){</span></span>
<span class="line"><span>        //1.先获取锁,如果是当前线程已经持有，则直接返回</span></span>
<span class="line"><span>        //2.防止后面设置锁超时，其实是设置成功，而网络超时导致客户端返回失败，所以获取锁之前需要查询一下</span></span>
<span class="line"><span>        V value = redis.get(key);</span></span>
<span class="line"><span>        //如果当前锁存在，并且属于当前线程持有，则锁计数+1，直接返回</span></span>
<span class="line"><span>        if (null != value &amp;&amp; value.equals(v)){</span></span>
<span class="line"><span>            count ++;</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //如果锁已经被持有了，那需要等待锁的释放</span></span>
<span class="line"><span>        if (value == null || count &lt;= 0){</span></span>
<span class="line"><span>            //获取锁</span></span>
<span class="line"><span>            Boolean result = redis.setNx(key, v, expireTime);</span></span>
<span class="line"><span>            if (result){</span></span>
<span class="line"><span>                count = 1;</span></span>
<span class="line"><span>                return true;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //获取锁失败间隔一段时间重试</span></span>
<span class="line"><span>            TimeUnit.MILLISECONDS.sleep(sleepInterval);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            Thread.currentThread().interrupt();</span></span>
<span class="line"><span>            return false;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public boolean unlock(String key, String requestId){</span></span>
<span class="line"><span>    String value = redis.get(key);</span></span>
<span class="line"><span>    if (Strings.isNullOrEmpty(value)){</span></span>
<span class="line"><span>        count = 0;</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //判断当前锁的持有者是否是当前线程，如果是的话释放锁，不是的话返回false</span></span>
<span class="line"><span>    if (value.equals(requestId)){</span></span>
<span class="line"><span>        if (count &gt; 1){</span></span>
<span class="line"><span>            count -- ;</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        boolean delete = redis.delete(key);</span></span>
<span class="line"><span>        if (delete){</span></span>
<span class="line"><span>            count = 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return delete;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>public static void main(String[] args) {</span></span>
<span class="line"><span>    Integer productId = 324324;</span></span>
<span class="line"><span>    RedisLock&lt;String&gt; redisLock = new RedisLock&lt;String&gt;();</span></span>
<span class="line"><span>    String requestId = UUID.randomUUID().toString();</span></span>
<span class="line"><span>    redisLock.lock(productId+&quot;&quot;, requestId, 1000);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种实现基本解决了误释放和可重入的问题，这里说明几点：</p><ol><li>引入 count 实现重入的话，看业务需要，并且在释放锁的时候，其实也可以直接就把锁删除了，一次释放搞定，不需要在通过 count 数量释放多次，看业务需要吧</li><li>关于要考虑设置锁超时，所以需要在设置锁的时候查询一次，可能会有性能的考量，看具体业务吧</li><li>目前获取锁失败的等待时间是在代码里面设置的，可以提出来，修改下等待的逻辑即可</li></ol><h2 id="错误实现" tabindex="-1"><a class="header-anchor" href="#错误实现"><span>错误实现</span></a></h2><p>获取到锁之后要检查下锁的过期时间，如果锁过期了要重新设置下时间,大致代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public boolean tryLock2(String key, int expireTime){</span></span>
<span class="line"><span>    long expires = System.currentTimeMillis() + expireTime;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取锁</span></span>
<span class="line"><span>    Boolean result = redis.setNx(key, expires, expireTime);</span></span>
<span class="line"><span>    if (result){</span></span>
<span class="line"><span>        return true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    V value = redis.get(key);</span></span>
<span class="line"><span>    if (value != null &amp;&amp; (Long)value &lt; System.currentTimeMillis()){</span></span>
<span class="line"><span>        // 锁已经过期</span></span>
<span class="line"><span>        String oldValue = redis.getSet(key, expireTime);</span></span>
<span class="line"><span>        if (oldValue != null &amp;&amp; oldValue.equals(value)){</span></span>
<span class="line"><span>            return true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return false;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种实现存在的问题，过度依赖当前服务器的时间了，如果在大量的并发请求下，都判断出了锁过期，而这个时候再去设置锁的时候，最终是会只有一个线程，但是可能会导致不同服务器根据自身不同的时间覆盖掉最终获取锁的那个线程设置的时间。</p><h2 id="tair-实现" tabindex="-1"><a class="header-anchor" href="#tair-实现"><span>Tair 实现</span></a></h2><p>通过 Tair 来实现分布式锁和 Redis 的实现核心差不多，不过 Tair 有个很方便的 api，感觉是实现分布式锁的最佳配置，就是 Put api 调用的时候需要传入一个 version，就和数据库的乐观锁一样，修改数据之后，版本会自动累加，如果传入的版本和当前数据版本不一致，就不允许修改。</p>`,48)]))}const t=n(l,[["render",p]]),v=JSON.parse('{"path":"/audition/other/Java-Distributed3.html","title":"分布式锁的场景与实现","lang":"zh-CN","frontmatter":{"description":"分布式锁的场景与实现 使用场景 首先，我们看这样一个场景：客户下单的时候，我们调用库存中心进行减库存，那我们一般的操作都是： 这种通过设置库存的修改方式，我们知道在并发量高的时候会存在数据库的丢失更新，比如 a, b 当前两个事务，查询出来的库存都是 5，a 买了 3 个单子要把库存设置为 2，而 b 买了 1 个单子要把库存设置为 4，那这个时候就会...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/other/Java-Distributed3.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"分布式锁的场景与实现"}],["meta",{"property":"og:description","content":"分布式锁的场景与实现 使用场景 首先，我们看这样一个场景：客户下单的时候，我们调用库存中心进行减库存，那我们一般的操作都是： 这种通过设置库存的修改方式，我们知道在并发量高的时候会存在数据库的丢失更新，比如 a, b 当前两个事务，查询出来的库存都是 5，a 买了 3 个单子要把库存设置为 2，而 b 买了 1 个单子要把库存设置为 4，那这个时候就会..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-06-11T09:54:05.000Z"}],["meta",{"property":"article:modified_time","content":"2025-06-11T09:54:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式锁的场景与实现\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-06-11T09:54:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"数据库实现","slug":"数据库实现","link":"#数据库实现","children":[{"level":3,"title":"加 xx 锁","slug":"加-xx-锁","link":"#加-xx-锁","children":[]},{"level":3,"title":"唯一键","slug":"唯一键","link":"#唯一键","children":[]},{"level":3,"title":"优点","slug":"优点","link":"#优点","children":[]},{"level":3,"title":"缺点","slug":"缺点","link":"#缺点","children":[]}]},{"level":2,"title":"Zookeeper 实现","slug":"zookeeper-实现","link":"#zookeeper-实现","children":[{"level":3,"title":"获取锁","slug":"获取锁","link":"#获取锁","children":[]},{"level":3,"title":"释放锁","slug":"释放锁","link":"#释放锁","children":[]},{"level":3,"title":"优点","slug":"优点-1","link":"#优点-1","children":[]},{"level":3,"title":"缺点","slug":"缺点-1","link":"#缺点-1","children":[]}]},{"level":2,"title":"Redis 实现","slug":"redis-实现","link":"#redis-实现","children":[{"level":3,"title":"简单实现 1","slug":"简单实现-1","link":"#简单实现-1","children":[]},{"level":3,"title":"简单实现 2","slug":"简单实现-2","link":"#简单实现-2","children":[]}]},{"level":2,"title":"错误实现","slug":"错误实现","link":"#错误实现","children":[]},{"level":2,"title":"Tair 实现","slug":"tair-实现","link":"#tair-实现","children":[]}],"git":{"createdTime":1749635645000,"updatedTime":1749635645000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":7.98,"words":2394},"filePathRelative":"audition/other/Java-Distributed3.md","localizedDate":"2025年6月11日","autoDesc":true}');export{t as comp,v as data};
