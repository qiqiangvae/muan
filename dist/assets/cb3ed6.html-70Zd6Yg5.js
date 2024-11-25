import{_ as k,c as d,b as n,d as r,e as l,r as p,o as A,a as i,f as s}from"./app-BZRVOKAf.js";const o={};function g(y,t){const h=p("CodeTabs");return A(),d("div",null,[t[4]||(t[4]=n('<p>最近在读丁奇老师的《Mysql 实战 45 讲》，收获颇多，在此把一些以前不懂的知识点记录下来，方便以后复习。</p><div class="hint-container tip"><p class="hint-container-title">《Mysql 实战 45 讲》链接</p><p>地址在极客时间，链接奉上。<a href="https://time.geekbang.org/column/intro/100020801" target="_blank" rel="noopener noreferrer">MySQL实战45讲_MySQL_数据库-极客时间</a>。</p></div><h2 id="加锁规则总结" tabindex="-1"><a class="header-anchor" href="#加锁规则总结"><span>加锁规则总结</span></a></h2><div class="hint-container tip"><p class="hint-container-title">不同版本结论不一样</p><p>丁奇老师的总结（丁奇老师的版本是 5.x 系列 &lt;=5.7.24，8.0 系列 &lt;=8.0.13）：包含了两个“原则”、两个“优化”和一个“bug”。</p><ol><li>原则 1：加锁的基本单位是 next-key lock。希望你还记得，next-key lock 是前开后闭区间。</li><li>原则 2：查找过程中访问到的对象才会加锁。</li><li>优化 1：索引上的等值查询，给唯一索引加锁的时候，next-key lock 退化为行锁。</li><li>优化 2：索引上的等值查询，向右遍历时且最后一个值不满足等值条件的时候，next-key lock 退化为间隙锁。</li><li>一个 bug：唯一索引上的范围查询会访问到不满足条件的第一个值为止。</li></ol><p>因为间隙锁只有在可重复读下才有效，所以以下分析都是在可重复度级别下，且笔者的 <strong>Mysql 版本是 8.0.27</strong>。</p></div><p>加锁规则包括 <strong>两个原则</strong>、<strong>两个优化</strong>：</p><ol><li><p>原则 1：加锁的基本单位是 <strong>next-key lock</strong>， 是<strong>前开后闭</strong>区间。</p></li><li><p>原则 2：查找过程中<strong>访问到的对象才会加锁</strong>。</p></li><li><p>优化 1：索引上的等值查询，给<strong>唯一索引</strong>加锁的时候，<strong>next-key lock</strong> 退化为行锁。</p></li><li><p>优化 2：索引上的等值查询，向右遍历时不满足条件的时候，<strong>next-key lock 退化为间隙锁、也可能缩小间隙锁的范围</strong>。</p></li></ol><h2 id="场景实战" tabindex="-1"><a class="header-anchor" href="#场景实战"><span>场景实战</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>以下案例来源于《Mysql 实战 45 讲》第 21 讲<a href="https://time.geekbang.org/column/article/75659" target="_blank" rel="noopener noreferrer">《为什么我只改一行的语句，锁这么多》</a>。 丁奇老师的版本是 5.x 系列 &lt;=5.7.24，8.0 系列 &lt;=8.0.13，我的版本是 8.0.27，我的版本以下场景测试的结果跟丁奇老师的有些出入，即丁奇老师总结的这个 bug 被修复了。</p></div><p>第一步初始化表结构和数据。</p>',9)),r(h,{id:"82",data:[{id:"建表语句"},{id:"造数据"}],"tab-id":"sql"},{title0:l(({value:e,isActive:a})=>t[0]||(t[0]=[i("span",null,"建表语句",-1)])),title1:l(({value:e,isActive:a})=>t[1]||(t[1]=[i("span",null,"造数据",-1)])),tab0:l(({value:e,isActive:a})=>t[2]||(t[2]=[i("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[i("button",{class:"copy",title:"Copy code","data-copied":"Copied"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"CREATE"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," TABLE"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," `"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"t"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"`")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"    `"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"id"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," int"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"11"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},") "),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"NOT NULL"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"    `"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"c"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  int"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"11"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},") "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"DEFAULT"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," NULL"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"    `"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"d"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"  int"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"11"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},") "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"DEFAULT"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," NULL"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    PRIMARY KEY"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ("),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"id"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"    KEY"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"  `"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"c"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ("),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"c"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"`"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},") ENGINE "),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"="),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," InnoDB;")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:l(({value:e,isActive:a})=>t[3]||(t[3]=[i("div",{class:"language-sql line-numbers-mode","data-ext":"sql","data-title":"sql"},[i("button",{class:"copy",title:"Copy code","data-copied":"Copied"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"insert into"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," t")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"values"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"       ("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"5"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"5"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"5"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"       ("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"10"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"10"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"10"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"       ("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"15"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"15"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"15"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"       ("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"20"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"20"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"20"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"       ("),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"25"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"25"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},", "),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"25"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},");")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),t[5]||(t[5]=n('<p>下面开始实战场景分析。</p><h3 id="等值查询间隙锁" tabindex="-1"><a class="header-anchor" href="#等值查询间隙锁"><span>等值查询间隙锁</span></a></h3><table><thead><tr><th>session A</th><th>session B</th><th>session C</th></tr></thead><tbody><tr><td>begin ;</td><td></td><td></td></tr><tr><td>update t set d = d+1 where id = 7;</td><td></td><td></td></tr><tr><td></td><td>insert into t value (8,8,8);(阻塞)</td><td></td></tr><tr><td></td><td></td><td>update t set d = d+1 where id = 10;（成功）</td></tr></tbody></table><p>场景说明：</p><ol><li>session A 开启一个事务，更新 id = 7 的数据（该数据不存在）。</li><li>session B 插入一条 id = 8 的数据，此时阻塞。</li><li>session C 更新 id = 10 的数据，更新成功。</li></ol><p>分析：</p><ol><li>session A 更新一条不存在的数据 id = 7，根据<strong>原则一和原则二</strong>，从左到右查找数据，找到<strong>间隙锁id(5,10)</strong>，再加上<strong>行锁 10</strong> 组成 <strong>id(5,10] 前开后闭的 next-key lock</strong> 。</li><li>根据优化2，因为 session A 的更新条件是等值查询，next-key lock 最后一个值是 10，不满足 id = 7，所以 session A 加锁退化为间隙锁，即 session A 最终的加锁范围是 id(5,10)。</li><li>由此分析 session B 插入数据会阻塞，而 session C 成功。</li></ol><h3 id="非唯一索引等值锁" tabindex="-1"><a class="header-anchor" href="#非唯一索引等值锁"><span>非唯一索引等值锁</span></a></h3><table><thead><tr><th>session A</th><th>session B</th><th>session C</th><th>session D</th></tr></thead><tbody><tr><td>begin ;</td><td></td><td></td><td></td></tr><tr><td>select id from t where c=5 lock in share mode ;</td><td></td><td></td><td></td></tr><tr><td></td><td>update t set d = d+1 where id = 5;(成功)</td><td></td><td></td></tr><tr><td></td><td></td><td>insert into t value (7,7,7);(阻塞)</td><td></td></tr><tr><td></td><td></td><td></td><td>update t set d = d+1 where c = 5;(阻塞)</td></tr></tbody></table><p>场景说明：</p><ol><li>session A 开启一个事务，且查询覆盖索引 c=5加上了读锁。</li><li>session B 成功更新 id =5 的数据。</li><li>session C 插入 id = 7 阻塞。</li><li>sessoin D 更新 c=5 的数据。</li></ol><p>分析：</p><ol><li>session A 从左往右查询，第一个间隙锁是 c(0,5)，加上行锁 5 组成 c(0,5) 的 next-key lock。</li><li>因为 c 是普通索引，所以此时还要继续往右找，找到下一个间隙 (5,10)，因为加锁的基本但是是 next-key lock，所以 id =10 的行锁也会被加上，即 c(5,10] 也会被加上锁。根据优化2，最后一条数据 c=10 不满足 c=5 的条件，所以此时会退化成 c(5,10) 的间隙锁。</li><li>根据原则2，只有访问到的对象才会被加锁，因为查询结果是id，走的是覆盖索引不需要回表，主键 id=5 并不会被加锁，所以 session B 才能更新成功。</li><li>session C 需要插入 id=7 的数据，此时会被间隙锁 c(5,10) 锁住。</li><li>session D 更新 c=5 的数据，会被 next-key lock c(0,5] 锁住。</li></ol><h3 id="主键索引范围锁" tabindex="-1"><a class="header-anchor" href="#主键索引范围锁"><span>主键索引范围锁</span></a></h3><p>这个案例我测试话来跟丁奇老师的结果不一样，这是跟 mysql 的版本有关系的。</p><h3 id="非唯一索引范围锁" tabindex="-1"><a class="header-anchor" href="#非唯一索引范围锁"><span>非唯一索引范围锁</span></a></h3>',16))])}const D=k(o,[["render",g],["__file","cb3ed6.html.vue"]]),C=JSON.parse('{"path":"/middleware/mysql/cb3ed6","title":"Mysql next-key lock加锁规则","lang":"en-US","frontmatter":{"title":"Mysql next-key lock加锁规则","createTime":"2022-06-07T13:10:19.000Z","permalink":"/middleware/mysql/cb3ed6"},"headers":[],"readingTime":{"minutes":4.33,"words":1300},"git":{"updatedTime":1732499705000,"contributors":[{"name":"qiqiang","email":"qiqiang@pingpongx.com","commits":2,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"},{"name":"qiqiang","email":"qiqiang","commits":6,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"}]},"filePathRelative":"notes/middleware/mysql/10.Mysql-next-key-lock加锁规则.md","bulletin":false}');export{D as comp,C as data};
