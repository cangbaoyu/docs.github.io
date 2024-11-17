import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as s,e as t}from"./app-Bu8N3Y5k.js";const n={};function p(c,a){return i(),s("div",null,a[0]||(a[0]=[t(`<h1 id="怎么考虑数据一致性问题" tabindex="-1"><a class="header-anchor" href="#怎么考虑数据一致性问题"><span>怎么考虑数据一致性问题</span></a></h1><h2 id="单体应用的数据一致性" tabindex="-1"><a class="header-anchor" href="#单体应用的数据一致性"><span>单体应用的数据一致性</span></a></h2><p>想象一下如果我们经营着一家大型企业，下属有航空公司、租车公司、和连锁酒店。我们为客户提供一站式的旅游行程规划服务，这样客户只需要提供出行目的地，我们帮助客户预订机票、租车、以及预订酒店。从业务的角度，我们必须保证上述三个服务的预订都完成才能满足一个成功的旅游行程，否则不能成行。</p><p>我们的单体应用要满足这个需求非常简单，只需将这个三个服务请求放到同一个数据库事务中，数据库会帮我们保证全部成功或者全部回滚。</p><figure><img src="https://pic.sansei.top/images/service/service_66ecd4cb674eb4b55f786b7f8517ea07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当这个功能上线以后，公司非常满意，客户也非常高兴。</p><h2 id="微服务场景下的数据一致性" tabindex="-1"><a class="header-anchor" href="#微服务场景下的数据一致性"><span>微服务场景下的数据一致性</span></a></h2><p>这几年中，我们的行程规划服务非常成功，企业蒸蒸日上，用户量也翻了数十倍。企业的下属航空公司、租车公司、和连锁酒店也相继推出了更多服务以满足客户需求，我们的应用和开发团队也因此日渐庞大。如今我们的单体应用已变得如此复杂，以至于没人了解整个应用是怎么运作的。更糟的是新功能的上线现在需要所有研发团队合作，日夜奋战数周才能完成。看着市场占有率每况愈下，公司高层对研发部门越来越不满意。</p><p>经过数轮讨论，我们最终决定将庞大的单体应用一分为四：机票预订服务、租车服务、酒店预订服务、和支付服务。服务各自使用自己的数据库，并通过 HTTP 协议通信。负责各服务的团队根据市场需求按照自己的开发节奏发版上线。如今我们面临新的挑战：如何保证最初三个服务的预订都完成才能满足一个成功的旅游行程， 否则不能成行的业务规则？现在服务有各自的边界，而且数据库选型也不尽相同，通过数据库保证数据一致性的方案已不可行。</p><figure><img src="https://pic.sansei.top/images/service/service_f1a152a2a4a84d135fafb08525f0f9ce.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="sagas" tabindex="-1"><a class="header-anchor" href="#sagas"><span>Sagas</span></a></h2><p>幸运的是我们在互联网找到一篇精彩的论文，文中提出的数据一致性解决方案 Saga 恰好满足我们的业务要求。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Saga 是一个长活事务，可被分解成可以交错运行的子事务集合。其中每个子事务都是一个保持数据库一致性的真实事务。</p></div><p>在我们的业务场景下，一个行程规划的事务就是一个 Saga，其中包含四个子事务：机票预订、租车、酒店预订、和支付。</p><figure><img src="https://pic.sansei.top/images/service/service_fc69ade8b2ec344c0d6f53fbec302a37.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Chris Richardson 在他的文章 Pattern: Saga 中对 Saga 有所描述。 Caitie McCaffrey 也在她的演讲中提到如何在微软的 光晕4 游戏中如何应用 saga 解决数据一致性问题。</p><h3 id="saga-的运行原理" tabindex="-1"><a class="header-anchor" href="#saga-的运行原理"><span>Saga 的运行原理</span></a></h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Saga 中的事务相互关联，应作为（非原子）单位执行。任何未完全执行的 Saga 是不满足要求的，如果发生，必须得到补偿。要修正未完全执行的部分，每个 saga 子交易 T1 应提供对应补偿事务 C1</p></div><p>我们根据上述规则定义以下事务及其相应的事务补偿：</p><table><thead><tr><th>服务</th><th>事务</th><th>补偿</th></tr></thead><tbody><tr><td>机票预订</td><td>预订机票</td><td>取消预订</td></tr><tr><td>租车</td><td>租车</td><td>取消预订</td></tr><tr><td>酒店预订</td><td>预订房间</td><td>取消预订</td></tr><tr><td>支付</td><td>支付</td><td>退款</td></tr></tbody></table><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>当每个 saga 子事务 T1, T2, …, Tn 都有对应的补偿定义 C1, C2, …, Cn-1, 那么 saga 系统可以保证</span></span>
<span class="line"><span></span></span>
<span class="line"><span>子事务序列 T1, T2, …, Tn 得以完成 (最佳情况)</span></span>
<span class="line"><span>或者序列 T1, T2, …, Tj, Cj, …, C2, C1, 0 &lt; j &lt; n, 得以完成</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>换句话说，通过上述定义的事务/补偿，saga 保证满足以下业务规则：</p><p>所有的预订都被执行成功，如果任何一个失败，都会被取消 如果最后一步付款失败，所有预订也将被取消</p><h3 id="saga-的恢复方式" tabindex="-1"><a class="header-anchor" href="#saga-的恢复方式"><span>Saga 的恢复方式</span></a></h3><p>原论文中描述了两种类型的 Saga 恢复方式：</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>向后恢复 补偿所有已完成的事务，如果任一子事务失败 向前恢复 重试失败的事务，假设每个子事务最终都会成功</p></div><p>显然，向前恢复没有必要提供补偿事务，如果你的业务中，子事务（最终）总会成功，或补偿事务难以定义或不可能，向前恢复更符合你的需求。</p><p>理论上补偿事务永不失败，然而，在分布式世界中，服务器可能会宕机，网络可能会失败，甚至数据中心也可能会停电。在这种情况下我们能做些什么？最后的手段是提供回退措施，比如人工干预。</p><h3 id="使用-saga-的条件" tabindex="-1"><a class="header-anchor" href="#使用-saga-的条件"><span>使用 Saga 的条件</span></a></h3><p>Saga 看起来很有希望满足我们的需求。所有长活事务都可以这样做吗？这里有一些限制：</p><ul><li>Saga 只允许两个层次的嵌套，顶级的 Saga 和简单子事务</li><li>在外层，全原子性不能得到满足。也就是说，sagas 可能会看到其他 sagas 的部分结果</li><li>每个子事务应该是独立的原子行为</li><li>在我们的业务场景下，航班预订、租车、酒店预订和付款是自然独立的行为，而且每个事务都可以用对应服务的数据库保证原子操作。</li></ul><p>我们在行程规划事务层面也不需要原子性。一个用户可以预订最后一张机票，而后由于信用卡余额不足而被取消。同时另一个用户可能开始会看到已无余票，接着由于前者预订被取消，最后一张机票被释放，而抢到最后一个座位并完成行程规划。</p><p>补偿也有需考虑的事项：</p><ul><li>补偿事务从语义角度撤消了事务 Ti 的行为，但未必能将数据库返回到执行 Ti 时的状态。（例如，如果事务触发导弹发射，则可能无法撤消此操作）</li></ul><p>但这对我们的业务来说不是问题。其实难以撤消的行为也有可能被补偿。例如，发送电邮的事务可以通过发送解释问题的另一封电邮来补偿。</p><p>现在我们有了通过 Saga 来解决数据一致性问题的方案。它允许我们成功地执行所有事务，或在任何事务失败的情况下，补偿已成功的事务。虽然 Saga 不提供 ACID 保证，但仍适用于许多数据最终一致性的场景。那我们如何设计一个 Saga 系统？</p><h3 id="saga-log" tabindex="-1"><a class="header-anchor" href="#saga-log"><span>Saga Log</span></a></h3><p>Saga 保证所有的子事务都得以完成或补偿，但 Saga 系统本身也可能会崩溃。Saga 崩溃时可能处于以下几个状态：</p><ul><li>Saga 收到事务请求，但尚未开始。因子事务对应的微服务状态未被 Saga 修改，我们什么也不需要做。</li><li>一些子事务已经完成。重启后，Saga 必须接着上次完成的事务恢复。</li><li>子事务已开始，但尚未完成。由于远程服务可能已完成事务，也可能事务失败，甚至服务请求超时，saga 只能重新发起之前未确认完成的子事务。这意味着子事务必须幂等。</li><li>子事务失败，其补偿事务尚未开始。Saga 必须在重启后执行对应补偿事务。</li><li>补偿事务已开始但尚未完成。解决方案与上一个相同。这意味着补偿事务也必须是幂等的。</li><li>所有子事务或补偿事务均已完成，与第一种情况相同。</li></ul><p>为了恢复到上述状态，我们必须追踪子事务及补偿事务的每一步。我们决定通过事件的方式达到以上要求，并将以下事件保存在名为 saga log 的持久存储中：</p><ul><li>Saga started event 保存整个 saga 请求，其中包括多个事务/补偿请求</li><li>Transaction started event 保存对应事务请求</li><li>Transaction ended event 保存对应事务请求及其回复</li><li>Transaction aborted event 保存对应事务请求和失败的原因</li><li>Transaction compensated event 保存对应补偿请求及其回复</li><li>Saga ended event 标志着 saga 事务请求的结束，不需要保存任何内容</li></ul><figure><img src="https://pic.sansei.top/images/service/service_66ae7b320e502c13f4a21a08baa61ead.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>通过将这些事件持久化在 saga log 中，我们可以将 saga 恢复到上述任何状态。</p><p>由于 Saga 只需要做事件的持久化，而事件内容以 JSON 的形式存储，Saga log 的实现非常灵活，数据库（SQL 或 NoSQL），持久消息队列，甚至普通文件可以用作事件存储，当然有些能更快得帮 saga 恢复状态。</p><h3 id="saga-请求的数据结构" tabindex="-1"><a class="header-anchor" href="#saga-请求的数据结构"><span>Saga 请求的数据结构</span></a></h3><p>在我们的业务场景下，航班预订、租车、和酒店预订没有依赖关系，可以并行处理，但对于我们的客户来说，只在所有预订成功后一次付费更加友好。那么这四个服务的事务关系可以用下图表示：</p><figure><img src="https://pic.sansei.top/images/service/service_918b4d0d912c6cdb8ee0690acf303950.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将行程规划请求的数据结构实现为有向非循环图恰好合适。图的根是 saga 启动任务，叶是 saga 结束任务。</p><figure><img src="https://pic.sansei.top/images/service/service_c62a633865fd31b25688523cb5f4093f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="parallel-saga" tabindex="-1"><a class="header-anchor" href="#parallel-saga"><span>Parallel Saga</span></a></h3><p>如上所述，航班预订，租车和酒店预订可以并行处理。但是这样做会造成另一个问题：如果航班预订失败，而租车正在处理怎么办？我们不能一直等待租车服务回应，因为不知道需要等多久。</p><p>最好的办法是再次发送租车请求，获得回应，以便我们能够继续补偿操作。但如果租车服务永不回应，我们可能需要采取回退措施，比如手动干预。</p><p>超时的预订请求可能最后仍被租车服务收到，这时服务已经处理了相同的预订和取消请求。</p><figure><img src="https://pic.sansei.top/images/service/service_b683af658000f43b34c7d99d6be060ca.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因此，服务的实现必须保证补偿请求执行以后，再次收到的对应事务请求无效。 Caitie McCaffrey 在她的演讲 Distributed Sagas: A Protocol for Coordinating MicroServices 中把这个称为可交换的补偿请求 (commutative compensating request)。</p><h3 id="acid-and-saga" tabindex="-1"><a class="header-anchor" href="#acid-and-saga"><span>ACID and Saga</span></a></h3><p>ACID 是具有以下属性的一致性模型：</p><ul><li>原子性（Atomicity）</li><li>一致性（Consistency）</li><li>隔离性（Isolation）</li><li>持久性（Durability） Saga 不提供 ACID 保证，因为原子性和隔离性不能得到满足。原论文描述如下：</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>full atomicity is not provided. That is, sagas may view the partial results of other sagas</p></div><p>通过 saga log，saga 可以保证一致性和持久性。</p><h3 id="saga-架构" tabindex="-1"><a class="header-anchor" href="#saga-架构"><span>Saga 架构</span></a></h3><p>最后，我们的 Saga 架构如下：</p><figure><img src="https://pic.sansei.top/images/service/service_44bd3121a8b6d720704e2d8b363ea2ce.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Saga Execution Component 解析请求 JSON 并构建请求图</li><li>TaskRunner 用任务队列确保请求的执行顺序</li><li>TaskConsumer 处理 Saga 任务，将事件写入 saga log，并将请求发送到远程服务 在上文中，我谈到了 ServiceComb 下的 Saga 是怎么设计的。 然而，业界还有其他数据一致性解决方案，如 <strong>两阶段提交（2PC） 和 Try-Confirm / Cancel（TCC）</strong>。那 saga 相比之下有什么特别？</li></ul><h2 id="两阶段提交-two-phase-commit-2pc" tabindex="-1"><a class="header-anchor" href="#两阶段提交-two-phase-commit-2pc"><span>两阶段提交 Two-Phase Commit (2PC)</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>两阶段提交协议是一种分布式算法，用于协调参与分布式原子事务的所有进程，以保证他们均完成提交或中止（回滚）事务。</p></div><p>2PC 包含两个阶段：</p><ul><li>投票阶段 协调器向所有服务发起投票请求，服务回答 yes 或 no。如果有任何服务回复 no 以拒绝或超时，协调器则在下一阶段发送中止消息。</li></ul><figure><img src="https://pic.sansei.top/images/service/service_b8624ace7c31f49016bde30abf444af0.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>决定阶段 如果所有服务都回复 yes，协调器则向服务发送 commit 消息，接着服务告知事务完成或失败。如果任何服务提交失败， 协调器将启动额外的步骤以中止该事务。</li></ul><figure><img src="https://pic.sansei.top/images/service/service_f29111544bc473085109d3d04788be44.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在投票阶段结束之后与决策阶段结束之前，服务处于不确定状态，因为他们不确定交易是否继续进行。当服务处于不确定状态并与协调器失去连接时，它只能选择等待协调器的恢复，或者咨询其他在确定状态下的服务来得知协调器的决定。在最坏的情况下，n 个处于不确定状态的服务向其他 n-1 个服务咨询将产生 O(n2) 个消息。</p><p>另外，2PC 是一个阻塞协议。服务在投票后需要等待协调器的决定，此时服务会阻塞并锁定资源。由于其阻塞机制和最差时间复杂度高，2PC 不能适应随着事务涉及的服务数量增加而扩展的需要。</p><h2 id="try-confirm-cancel-tcc" tabindex="-1"><a class="header-anchor" href="#try-confirm-cancel-tcc"><span>Try-Confirm/Cancel (TCC)</span></a></h2><p>TCC 也是补偿型事务模式，支持两阶段的商业模型。</p><ul><li>尝试阶段 将服务置于待处理状态。例如，收到尝试请求时，航班预订服务将为客户预留一个座位，并在数据库插入客户预订记录，将记录设为预留状态。如果任何服务失败或超时，协调器将在下一阶段发送取消请求。</li></ul><figure><img src="https://pic.sansei.top/images/service/service_b09bbf2e8d332c163934ce165eab883e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>确认阶段 将服务设为确认状态。确认请求将确认客户预订的座位，这时服务已可向客户收取机票费用。数据库中的客户预订记录也会被更新为确认状态。如果任何服务无法确认或超时，协调器将重试确认请求直到成功，或在重试了一定次数后采取回退措施，比如人工干预。</li></ul><figure><img src="https://pic.sansei.top/images/service/service_1e14e4ad4804835734389a7a427ba9c3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>与 saga 相比，TCC 的优势在于，尝试阶段将服务转为待处理状态而不是最终状态，这使得设计相应的取消操作轻而易举。</p><p>例如，电邮服务的尝试请求可将邮件标记为准备发送，并且仅在确认后发送邮件，其相应的取消请求只需将邮件标记为已废弃。但如果使用 saga，事务将发送电子邮件，及其相应的补偿事务可能需要发送另一封电子邮件作出解释。</p><p>TCC 的缺点是其两阶段协议需要设计额外的服务待处理状态，以及额外的接口来处理尝试请求。另外，TCC 处理事务请求所花费的时间可能是 saga 的两倍，因为 TCC 需要与每个服务进行两次通信，并且其确认阶段只能在收到所有服务对尝试请求的响应后开始。</p><h2 id="事件驱动的架构" tabindex="-1"><a class="header-anchor" href="#事件驱动的架构"><span>事件驱动的架构</span></a></h2><p>和 TCC 一样，在事件驱动的架构中，长活事务涉及的每个服务都需要支持额外的待处理状态。接收到事务请求的服务会在其数据库中插入一条新的记录，将该记录状态设为待处理并发送一个新的事件给事务序列中的下一个服务。</p><p>因为在插入记录后服务可能崩溃，我们无法确定是否新事件已发送，所以每个服务还需要额外的事件表来跟踪当前长活事务处于哪一步。</p><figure><img src="https://pic.sansei.top/images/service/service_a94dc9b0b1b2195f9cff27ea3056fd5d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>一旦长活事务中的最后一个服务完成其子事务，它将通知它在事务中的前一个服务。接收到完成事件的服务将其在数据库中的记录状态设为完成。</p><figure><img src="https://pic.sansei.top/images/service/service_204d8d1b2939d66cfb9752219ad70920.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果仔细比较，事件驱动的架构就像非集中式的基于事件的 TCC 实现。如果去掉待处理状态而直接把服务记录设为最终状态，这个架构就像非集中式的基于事件的 saga 实现。去中心化能达到服务自治，但也造成了服务之间更紧密的的耦合。假设新的业务需求在服务 B 和 C 之间的增加了新的流程 D。在事件驱动架构下，服务 B 和 C 必须改动代码以适应新的流程 D。</p><figure><img src="https://pic.sansei.top/images/service/service_3f46ba9b45f867c33993cdb81871bfc9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Saga 则正好相反，所有这些耦合都在 saga 系统中，当在长活事务中添加新流程时，现有服务不需要任何改动。</p><h2 id="集中式与非集中式实现" tabindex="-1"><a class="header-anchor" href="#集中式与非集中式实现"><span>集中式与非集中式实现</span></a></h2><p>这个 Saga 系列的文章讨论的都是集中式的 saga 设计。但 saga 也可用非集中式的方案来实现。那么非集中式的版本有什么不同？</p><p>非集中式 saga 没有专职的协调器。启动下一个服务调用的服务就是当前的协调器。例如：</p><ul><li>服务 A 收到要求服务 A，B 和 C 之间的数据一致性的事务请求。</li><li>A 完成其子事务，并将请求传递给事务中的下一个服务，服务 B.</li><li>B 完成其子事务，并将请求传递给 C，依此类推。</li><li>如果 C 处理请求失败，B 有责任启动补偿事务，并要求 A 回滚。</li></ul><figure><img src="https://pic.sansei.top/images/service/service_1a7a9de881f2665697337a03fb1a5c6f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>与集中式相比，非集中式的实现具有服务自治的优势。但每个服务都需要包含数据一致性协议，并提供其所需的额外持久化设施。</p><p>我们更倾向于自治的业务服务，但服务还关联很多应用的复杂性，如数据一致性，服务监控和消息传递，将这些棘手问题集中处理，能将业务服务从应用的复杂性中释放，专注于处理复杂的业务，因此我们采用了集中式的 saga 设计。</p><p>另外，随着长活事务中涉及的服务数量增长，服务之间的关系变得越来越难理解。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>本文将 saga 与其他数据一致性解决方案进行了比较。Saga 比两阶段提交更易扩展。在事务可补偿的情况下，相比 TCC，saga 对业务逻辑几乎没有改动的需要，而且性能更高。集中式的 saga 设计解耦了服务与数据一致性逻辑及其持久化设施，并使排查事务中的问题更容易。</p>`,101)]))}const r=e(n,[["render",p],["__file","Java-Service8.html.vue"]]),d=JSON.parse('{"path":"/audition/microservices/Java-Service8.html","title":"怎么考虑数据一致性问题","lang":"zh-CN","frontmatter":{"description":"怎么考虑数据一致性问题 单体应用的数据一致性 想象一下如果我们经营着一家大型企业，下属有航空公司、租车公司、和连锁酒店。我们为客户提供一站式的旅游行程规划服务，这样客户只需要提供出行目的地，我们帮助客户预订机票、租车、以及预订酒店。从业务的角度，我们必须保证上述三个服务的预订都完成才能满足一个成功的旅游行程，否则不能成行。 我们的单体应用要满足这个需求...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/microservices/Java-Service8.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"怎么考虑数据一致性问题"}],["meta",{"property":"og:description","content":"怎么考虑数据一致性问题 单体应用的数据一致性 想象一下如果我们经营着一家大型企业，下属有航空公司、租车公司、和连锁酒店。我们为客户提供一站式的旅游行程规划服务，这样客户只需要提供出行目的地，我们帮助客户预订机票、租车、以及预订酒店。从业务的角度，我们必须保证上述三个服务的预订都完成才能满足一个成功的旅游行程，否则不能成行。 我们的单体应用要满足这个需求..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic.sansei.top/images/service/service_66ecd4cb674eb4b55f786b7f8517ea07.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:19:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:19:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"怎么考虑数据一致性问题\\",\\"image\\":[\\"https://pic.sansei.top/images/service/service_66ecd4cb674eb4b55f786b7f8517ea07.png\\",\\"https://pic.sansei.top/images/service/service_f1a152a2a4a84d135fafb08525f0f9ce.png\\",\\"https://pic.sansei.top/images/service/service_fc69ade8b2ec344c0d6f53fbec302a37.png\\",\\"https://pic.sansei.top/images/service/service_66ae7b320e502c13f4a21a08baa61ead.png\\",\\"https://pic.sansei.top/images/service/service_918b4d0d912c6cdb8ee0690acf303950.png\\",\\"https://pic.sansei.top/images/service/service_c62a633865fd31b25688523cb5f4093f.png\\",\\"https://pic.sansei.top/images/service/service_b683af658000f43b34c7d99d6be060ca.png\\",\\"https://pic.sansei.top/images/service/service_44bd3121a8b6d720704e2d8b363ea2ce.png\\",\\"https://pic.sansei.top/images/service/service_b8624ace7c31f49016bde30abf444af0.png\\",\\"https://pic.sansei.top/images/service/service_f29111544bc473085109d3d04788be44.png\\",\\"https://pic.sansei.top/images/service/service_b09bbf2e8d332c163934ce165eab883e.png\\",\\"https://pic.sansei.top/images/service/service_1e14e4ad4804835734389a7a427ba9c3.png\\",\\"https://pic.sansei.top/images/service/service_a94dc9b0b1b2195f9cff27ea3056fd5d.png\\",\\"https://pic.sansei.top/images/service/service_204d8d1b2939d66cfb9752219ad70920.png\\",\\"https://pic.sansei.top/images/service/service_3f46ba9b45f867c33993cdb81871bfc9.png\\",\\"https://pic.sansei.top/images/service/service_1a7a9de881f2665697337a03fb1a5c6f.png\\"],\\"dateModified\\":\\"2024-11-17T16:19:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"单体应用的数据一致性","slug":"单体应用的数据一致性","link":"#单体应用的数据一致性","children":[]},{"level":2,"title":"微服务场景下的数据一致性","slug":"微服务场景下的数据一致性","link":"#微服务场景下的数据一致性","children":[]},{"level":2,"title":"Sagas","slug":"sagas","link":"#sagas","children":[{"level":3,"title":"Saga 的运行原理","slug":"saga-的运行原理","link":"#saga-的运行原理","children":[]},{"level":3,"title":"Saga 的恢复方式","slug":"saga-的恢复方式","link":"#saga-的恢复方式","children":[]},{"level":3,"title":"使用 Saga 的条件","slug":"使用-saga-的条件","link":"#使用-saga-的条件","children":[]},{"level":3,"title":"Saga Log","slug":"saga-log","link":"#saga-log","children":[]},{"level":3,"title":"Saga 请求的数据结构","slug":"saga-请求的数据结构","link":"#saga-请求的数据结构","children":[]},{"level":3,"title":"Parallel Saga","slug":"parallel-saga","link":"#parallel-saga","children":[]},{"level":3,"title":"ACID and Saga","slug":"acid-and-saga","link":"#acid-and-saga","children":[]},{"level":3,"title":"Saga 架构","slug":"saga-架构","link":"#saga-架构","children":[]}]},{"level":2,"title":"两阶段提交 Two-Phase Commit (2PC)","slug":"两阶段提交-two-phase-commit-2pc","link":"#两阶段提交-two-phase-commit-2pc","children":[]},{"level":2,"title":"Try-Confirm/Cancel (TCC)","slug":"try-confirm-cancel-tcc","link":"#try-confirm-cancel-tcc","children":[]},{"level":2,"title":"事件驱动的架构","slug":"事件驱动的架构","link":"#事件驱动的架构","children":[]},{"level":2,"title":"集中式与非集中式实现","slug":"集中式与非集中式实现","link":"#集中式与非集中式实现","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1731860389000,"updatedTime":1731860389000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":15.57,"words":4671},"filePathRelative":"audition/microservices/Java-Service8.md","localizedDate":"2024年11月17日","autoDesc":true}');export{r as comp,d as data};
