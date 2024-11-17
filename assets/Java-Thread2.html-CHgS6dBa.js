import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as d,c as t,e as i}from"./app-CByLrYFG.js";const c={};function a(n,e){return d(),t("div",null,e[0]||(e[0]=[i('<h1 id="sleep-、join-、yield-有什么区别" tabindex="-1"><a class="header-anchor" href="#sleep-、join-、yield-有什么区别"><span>sleep()、join（）、yield（）有什么区别</span></a></h1><h2 id="sleep" tabindex="-1"><a class="header-anchor" href="#sleep"><span>sleep()</span></a></h2><p><code>sleep()</code> 方法需要指定等待的时间，它可以让当前正在执行的线程在指定的时间内暂停执行，进入阻塞状态，该方法既可以让其他同优先级或者高优先级的线程得到执行的机会，也可以让低优先级的线程得到执行机会。但是 <code>sleep()</code> 方法不会释放“锁标志”，也就是说如果有 <code>synchronized</code> 同步块，其他线程仍然不能访问共享数据。</p><h2 id="wait" tabindex="-1"><a class="header-anchor" href="#wait"><span>wait()</span></a></h2><p><code>wait()</code> 方法需要和 <code>notify()</code> 及 <code>notifyAll()</code> 两个方法一起介绍，这三个方法用于协调多个线程对共享数据的存取，所以必须在 <code>synchronized</code> 语句块内使用，也就是说，调用 <code>wait()</code>，<code>notify()</code> 和 <code>notifyAll()</code> 的任务在调用这些方法前必须拥有对象的锁。注意，它们都是 <code>Object</code> 类的方法，而不是 <code>Thread</code> 类的方法。</p><p><code>wait()</code> 方法与 <code>sleep()</code> 方法的不同之处在于，<code>wait()</code> 方法会释放对象的“锁标志”。当调用某一对象的 <code>wait()</code> 方法后，会使当前线程暂停执行，并将当前线程放入对象等待池中，直到调用了 <code>notify()</code> 方法后，将从对象等待池中移出任意一个线程并放入锁标志等待池中，只有锁标志等待池中的线程可以获取锁标志，它们随时准备争夺锁的拥有权。当调用了某个对象的 <code>notifyAll()</code> 方法，会将对象等待池中的所有线程都移动到该对象的锁标志等待池。</p><p>除了使用 <code>notify()</code> 和 <code>notifyAll()</code> 方法，还可以使用带毫秒参数的 <code>wait(long timeout)</code> 方法，效果是在延迟 <code>timeout</code> 毫秒后，被暂停的线程将被恢复到锁标志等待池。</p><p>此外，<code>wait()，notify()</code> 及 <code>notifyAll() </code>只能在 <code>synchronized</code> 语句中使用，但是如果使用的是 <code>ReenTrantLock</code> 实现同步，该如何达到这三个方法的效果呢？解决方法是使用 <code>ReenTrantLock.newCondition()</code> 获取一个 <code>Condition</code> 类对象，然后 <code>Condition</code> 的 <code>await()</code>，<code>signal()</code> 以及 <code>signalAll()</code> 分别对应上面的三个方法。</p><h2 id="yield" tabindex="-1"><a class="header-anchor" href="#yield"><span>yield()</span></a></h2><p><code>yield()</code> 方法和 <code>sleep()</code> 方法类似，也不会释放“锁标志”，区别在于，它没有参数，即 <code>yield()</code> 方法只是使当前线程重新回到可执行状态，所以执行 <code>yield()</code> 的线程有可能在进入到可执行状态后马上又被执行，另外 <code>yield()</code> 方法只能使同优先级或者高优先级的线程得到执行机会，这也和 <code>sleep()</code> 方法不同。</p><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>join()</span></a></h2><p><code>join()</code> 方法会使当前线程等待调用 <code>join()</code> 方法的线程结束后才能继续执行</p>',12)]))}const s=o(c,[["render",a],["__file","Java-Thread2.html.vue"]]),r=JSON.parse('{"path":"/audition/threads/Java-Thread2.html","title":"sleep()、join（）、yield（）有什么区别","lang":"zh-CN","frontmatter":{"description":"sleep()、join（）、yield（）有什么区别 sleep() sleep() 方法需要指定等待的时间，它可以让当前正在执行的线程在指定的时间内暂停执行，进入阻塞状态，该方法既可以让其他同优先级或者高优先级的线程得到执行的机会，也可以让低优先级的线程得到执行机会。但是 sleep() 方法不会释放“锁标志”，也就是说如果有 synchroniz...","head":[["meta",{"property":"og:url","content":"https://www.sansei.top/audition/threads/Java-Thread2.html"}],["meta",{"property":"og:site_name","content":"川上富江"}],["meta",{"property":"og:title","content":"sleep()、join（）、yield（）有什么区别"}],["meta",{"property":"og:description","content":"sleep()、join（）、yield（）有什么区别 sleep() sleep() 方法需要指定等待的时间，它可以让当前正在执行的线程在指定的时间内暂停执行，进入阻塞状态，该方法既可以让其他同优先级或者高优先级的线程得到执行的机会，也可以让低优先级的线程得到执行机会。但是 sleep() 方法不会释放“锁标志”，也就是说如果有 synchroniz..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-17T16:42:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T16:42:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sleep()、join（）、yield（）有什么区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-17T16:42:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"sleep()","slug":"sleep","link":"#sleep","children":[]},{"level":2,"title":"wait()","slug":"wait","link":"#wait","children":[]},{"level":2,"title":"yield()","slug":"yield","link":"#yield","children":[]},{"level":2,"title":"join()","slug":"join","link":"#join","children":[]}],"git":{"createdTime":1731861734000,"updatedTime":1731861734000,"contributors":[{"name":"cangbao","email":"yph0228@163.com","commits":1}]},"readingTime":{"minutes":2.23,"words":669},"filePathRelative":"audition/threads/Java-Thread2.md","localizedDate":"2024年11月17日","autoDesc":true}');export{s as comp,r as data};
