import{_ as t,c as n,e as p,o as s}from"./app-B0Ppf8HT.js";const d={};function r(h,a){return s(),n("div",null,a[0]||(a[0]=[p('<h1 id="计算机网络" tabindex="-1"><a class="header-anchor" href="#计算机网络"><span>计算机网络</span></a></h1><h2 id="网络功能和分类" tabindex="-1"><a class="header-anchor" href="#网络功能和分类"><span>网络功能和分类</span></a></h2><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h3><ol><li>总线型：利用率低，干扰大，价格低；</li><li>星形：交换机形成的局域网、中央单元负荷大；</li><li>环形：流动方向固定、效率低难扩充；</li><li>树形：总线型的扩充、分级结构；</li><li>分布式：任意节点连接、管理难、成本高；</li></ol><h3 id="通信技术" tabindex="-1"><a class="header-anchor" href="#通信技术"><span>通信技术</span></a></h3><p>计算机网络是利用通信技术将数据从一个结点传送到另一结点的过程。</p><p>通信技术是计算机网络的基础。信道可分为物理信道和逻辑信道。物理信道由传输介质和设备组成，根据传输介质的不同，分为无线信道和有线信道。逻辑信道是指在数据发送端和接收端之间存在的一条虛拟线路，可以是有连接的或无连接的。逻辑信道以物理信道为载体。</p><p>发信机进行的信号处理包括信源编码、 信道编码、交织、脉冲成形和调制。相反地，收信机进行的信号处理包括解调、采样判决、去交织、信道译码和信源译码。</p><p>如果同时传递多路数据就需要复用技术和多址技术。复用技术是指在一条信道上同时传输多路数据的技术，如 TDM 时分复用、FDM 频分复用和 CDM 码分复用等。多址技术是指在一条线上同时传输多个用户数据的技术，在接收端把多个用户的数据分离( TDMA 时分多址、FDNA 频分多址和 CDMA 码分多址）。</p><p>作为新一代的移动通信技术，5G 特征体现在以下方面。</p><ol><li>基于 OFDM 优化的波形和多址接入</li><li>实现可扩展的 0FDM 间隔参数配直</li><li>OFDM 加窗提高多路传输效率</li><li>灵活框架设计</li><li>大规模 MIMO：最多 256 根天线</li><li>毫米波：场率大王 24CHz 以上的频段</li><li>频谱共享</li><li>牛讲的信道编码设计</li></ol><h2 id="osi-七层模型" tabindex="-1"><a class="header-anchor" href="#osi-七层模型"><span>OSI 七层模型</span></a></h2><table><thead><tr><th>分层</th><th>功能</th><th>单位</th><th>协议</th><th>设备</th></tr></thead><tbody><tr><td>应用层</td><td>对用户不透明的提供各种服务，如 Email、Http</td><td>数据</td><td></td><td>网关</td></tr><tr><td>表示层</td><td>实现数据转换（包括格式转换、压缩、加密等），提供标淮的应用接口、公用的通信服务、公共数据表示方法。</td><td></td><td></td><td>网关</td></tr><tr><td>会话层</td><td>建立通信进程的逻辑名字与物理名字之间的联系，提供进程之问建立、管理和终止会话的方法，处理同步与恢复问题。</td><td></td><td></td><td>网关</td></tr><tr><td>传输层</td><td>提供端到端间可靠的、透明的数据传输，保证报文顺序的正确性、数据的完整性。</td><td>报文段</td><td>TCP、UDP</td><td>网关</td></tr><tr><td>网络层</td><td>在源节点-目的节点之问进行路由选择、拥塞控制、顺序控制、传送包，保证报文的正确性。网络层控制着通信子网的运行，因市它又称为通信子网层。</td><td>IP 分组</td><td>IP、ICMP、IGMP、ARP、RARP</td><td>路由器</td></tr><tr><td>数据链路层</td><td>把不可靠的信道变为可靠的信道。为此将比特组成帧，在链路上提供点到点的帧传输，并进行差错控制、流量控制等。</td><td>帧</td><td>SDLG、 HDLG、 LAPB、 PPP、STP、帧中继等、 IEEE802、ATM</td><td>交换器、网桥</td></tr><tr><td>物理层</td><td>在链路上透明地传输位。需要完成的工作包括线路配置、确定数据传输模式、确定信号形式、对信号进行编码、连接传输介质。为此定义了建立、维护和拆除物理链路所具备的机械特性、电气特性、功能特性以及规程特性。</td><td>比特</td><td>EIA/TIA RS-232, RS-449,V. 35, RJ-45, FDDI</td><td>中继器、集线器</td></tr></tbody></table><h2 id="局域网和广域网协议" tabindex="-1"><a class="header-anchor" href="#局域网和广域网协议"><span>局域网和广域网协议</span></a></h2><p>以太网是一种计算机局域网组网技术。</p><p>以太网规范 <strong>IEEE 802.3</strong> 是重要的局域网协议。</p><p>以太帧结构：</p><p><img src="https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/rUOb4I.png" alt="rUOb4I"></p><p>无线局域网 WLAN 标准技术：<strong>IEEE 802.11</strong></p><p>广域网技术：</p><p>同步光网络（SONET，利用光纤进行数宇化信急通信）、数字数据网 （DON； 利用数字信道提供半永久性连接电路以传输数据）、帧中继（FR，数据包交换技术）、异步传输技术（ATM，以信元为基础的面向连接的一种分组交换和复用技术）</p><h2 id="tcp-ip-协议" tabindex="-1"><a class="header-anchor" href="#tcp-ip-协议"><span>TCP/IP 协议</span></a></h2><p>网络协议三要素：语法、语义、时序。</p><p>语法部分规定数据传输的格式；语义部分规定所要完成的功能；时序部分规定执行各种操作的条件、顺序关系等。</p><p><img src="https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/8WbJUN.png" alt="8WbJUN"></p><h3 id="网络层协议" tabindex="-1"><a class="header-anchor" href="#网络层协议"><span>网络层协议</span></a></h3><h4 id="ip-协议" tabindex="-1"><a class="header-anchor" href="#ip-协议"><span>IP 协议</span></a></h4><p>网络层最重要的协议，在源地址和目标地址之间传输数据报，<strong>无连接、不可靠</strong>。</p><h4 id="icmp-协议" tabindex="-1"><a class="header-anchor" href="#icmp-协议"><span>ICMP 协议</span></a></h4><p>因特网控制报文协议。用于 IP 主机和路由器之间传递控制消息。控制消息是指网络是否可通、主机是否可达、路由是否可用等网络本身的消息。</p><h4 id="arp-和-rarp-协议" tabindex="-1"><a class="header-anchor" href="#arp-和-rarp-协议"><span>ARP 和 RARP 协议</span></a></h4><p>地址解析协议。ARP 是将 IP 地址转换为物理地址，RARP 是将物理地址转换为 IP 地址。</p><h4 id="igmp-协议" tabindex="-1"><a class="header-anchor" href="#igmp-协议"><span>IGMP 协议</span></a></h4><p>网络组管理协议。允许因特网中的计算机参加多播，是计算机用作向相邻多目路由器报告多目组成员的协议，支持组播。</p><h3 id="传输层协议" tabindex="-1"><a class="header-anchor" href="#传输层协议"><span>传输层协议</span></a></h3><h4 id="tcp-协议" tabindex="-1"><a class="header-anchor" href="#tcp-协议"><span>TCP 协议</span></a></h4><p>整个 TCP/IP 协议族中最重要的协议之一，在 IP 协议提供的不可靠数据基础上，采用了重发技术，为应用程序提供了一个可靠的、面向连接的、全双工的数据传输服务。一般用于传输数据量比较少且对可靠性要求高的场景。</p><h4 id="udp-协议" tabindex="-1"><a class="header-anchor" href="#udp-协议"><span>UDP 协议</span></a></h4><p>UDP 协议是一种不可靠、无连接的协议，有助于提高传输速率，一般用于传输数据量大，对可靠性要求不高但要求速度快的场景。</p><h3 id="应用层协议" tabindex="-1"><a class="header-anchor" href="#应用层协议"><span>应用层协议</span></a></h3><h4 id="ftp-和-sftp" tabindex="-1"><a class="header-anchor" href="#ftp-和-sftp"><span>FTP 和 SFTP</span></a></h4><p>文件传输协议。一般占用端口为 20 和 21。</p><h4 id="http-和-https" tabindex="-1"><a class="header-anchor" href="#http-和-https"><span>HTTP 和 HTTPS</span></a></h4><p>超文本传输协议。一般占用端口为 80 和 443。</p><h4 id="smtp-和-pop3" tabindex="-1"><a class="header-anchor" href="#smtp-和-pop3"><span>SMTP 和 POP3</span></a></h4><p>简单邮件传输协议，SMTP 用于发送邮件、POP3 用于接收邮件。POP3 占用端口为 110，SMTP 占用端口为 25。</p><h4 id="telnet" tabindex="-1"><a class="header-anchor" href="#telnet"><span>Telnet</span></a></h4><p>远程连接协议。一般占用端口为 23。</p><h4 id="snmp" tabindex="-1"><a class="header-anchor" href="#snmp"><span>SNMP</span></a></h4><p>简单网络管理协议</p><h4 id="dhcp" tabindex="-1"><a class="header-anchor" href="#dhcp"><span>DHCP</span></a></h4><p>动态主机配置协议。一般占用端口为 67（服务端）和 68（客户端）。</p><h4 id="dns" tabindex="-1"><a class="header-anchor" href="#dns"><span>DNS</span></a></h4><p>域名解析协议。一般占用端口为 53。</p><h2 id="交换技术" tabindex="-1"><a class="header-anchor" href="#交换技术"><span>交换技术</span></a></h2><p>数据在网络中转发通常离不开交换机。人们日常使用的计算机通常就是通过交换机接入网络的。</p><p>交换机功能包括：</p><ol><li>集线功能。提供大量可供线缆连接的端口达到部署星状拓扑网络的目的。</li><li>中继功能。在转发帧时重新产生不失真的电信号。</li><li>桥接功能。在内置的端口上使用相同的转发和过滤逻辑。</li><li>隔离冲突域功能。将部署好的局域网分为多个冲突域，而每个冲突域都有自己独立的带宽，以提高交换机整体宽带利用效率。</li></ol><p>交换机需要实现的功能如下所述：</p><ol><li>转发路径学习。根据收到数据帧中的源 MAC 地址建立该地址同交换机端口的映射，写入 MAC 地址表中。</li><li>数据转发。如果交换机根据数据帧中的目的 MAC 地址在建立好的 MAC 地址表中查询到了， 就向对应端口进行转发。</li><li>数据泛洪。如果数据帧中的目的 MAC 地址不在 MAC 地址表中，则向所有端口转发，也就是 泛洪。广播帧和组播帧向所有端口（不包括源端口）进行转发。</li><li>链路地址更新。MAC 地址表会每隔一定时间（如 300s）更新一次。</li></ol><h2 id="路由技术" tabindex="-1"><a class="header-anchor" href="#路由技术"><span>路由技术</span></a></h2><p>路由功能由路由器来提供，具体包括：</p><ol><li>异种网络互连，比如具有异种子网协议的网络互连：</li><li>子网协议转换，不同子网间包括局域网和广域网之间的协议转换：</li><li>数据路曲，即将数据从一个网络依据路由规则转发到另一个网络：</li><li>速率适配，利用缓存和流控协议进行适配：</li><li>隔离网络，防止广播风暴，实现防火墙；</li><li>报文分片和重组，超过接口的MTU 报文被分片，到达目的地之后的报文被重组：</li><li>备份、流量控制，如主备线路的切换和复杂流量控制等。</li></ol><p>路由器工作在 OSI 七层协议中的第3 层，即网络层。其主要任务是接收来源于一个网络接口的数据包，通常根据此数据包的目地址决定待转发的下一个地址（即下一跳地址）。路由器中维持着数据转发所需的路由表，所有数据包的发送或转发都通过查找路由表来实现。这个路由表可以静态配置，也可以通过动态路由协议自动生成。</p><p>一般来说，路由协议可分为内部网关协议（IGP） 和外部网关协议（EGP）两类。</p><p>网络建设工程可分为<strong>网络规划、网络设计和网络实施</strong>三个环节。</p><h2 id="传输介质" tabindex="-1"><a class="header-anchor" href="#传输介质"><span>传输介质</span></a></h2><h3 id="双绞线" tabindex="-1"><a class="header-anchor" href="#双绞线"><span>双绞线</span></a></h3><p>将多根铜线按规则缠绕在一起，能够减少干扰；分为无屏蔽双绞线 UTP 和屏蔽双绞线 STP，都是由一对铜线簇组成，也就是俗称的网线；双绞线传输距离在 100M 以内。</p><p>双绞线传输电信号。</p><h3 id="光纤" tabindex="-1"><a class="header-anchor" href="#光纤"><span>光纤</span></a></h3><p>由纤芯和包层组成，传输的光信号在纤芯中传输。</p><p>多模光纤 MMF：纤芯半径较大，因此可以传输多种不同的信号，光信号在光纤中以全反射的形式传输，采用发光二极管 LED 作为光源，成本低，但是传输的效率和可靠性都较低，适合短距离传输，传输距离与传输速率相关，速率为 100Mbps 时为 2km，速率为 1000Mbps 时为 550m。</p><p>单模光纤 SMF：纤芯半径很小，一般只能传输一种信号，采用激光二极管 LD 作为光源，并且只支持激光信号传播，同样是全反射形式传播，只不过反射角很大，所以看起来像是一条直线。成本高，但是传输距离远，可靠性高。传输距离可达 5km。</p><h3 id="无线信道" tabindex="-1"><a class="header-anchor" href="#无线信道"><span>无线信道</span></a></h3><ul><li>无线电波 <ul><li>长波</li><li>中波</li><li>短波</li><li>超短波</li><li>微波 <ul><li>地面微波</li><li>卫星微波</li></ul></li></ul></li><li>红外光波 <ul><li>近红外线</li><li>中红外线</li><li>远红外线</li></ul></li></ul><h2 id="交换方式" tabindex="-1"><a class="header-anchor" href="#交换方式"><span>交换方式</span></a></h2><h4 id="电路交换" tabindex="-1"><a class="header-anchor" href="#电路交换"><span>电路交换</span></a></h4><p>通信的两方建立专用电路，特点是面向连接、实时性高、链路利用率低，一般用于语音视频通信。</p><h4 id="报文交换" tabindex="-1"><a class="header-anchor" href="#报文交换"><span>报文交换</span></a></h4><p>以报文为单位，存储转发模式。接收到数据后先存储，进行差错校验，没有错误则转发，有错误则丢弃，因此会有延时，但可靠性高，是面向无连接的。</p><h4 id="分组交换" tabindex="-1"><a class="header-anchor" href="#分组交换"><span>分组交换</span></a></h4><h5 id="数据报" tabindex="-1"><a class="header-anchor" href="#数据报"><span>数据报</span></a></h5><p>现在主流的交换方式，各个分组携带地址信息，自由的原则不同的路由路径传送到接收方，接收方接收到所有数据后再重新组装成原数据，是面向无连接的，不可靠的。</p><h5 id="虚电路" tabindex="-1"><a class="header-anchor" href="#虚电路"><span>虚电路</span></a></h5><p>发送方发送一个分组，接收方收到后二者之间就建立了一个虚拟的通信线路，二者之间的分组数据交互都通过这条线路传送，在空闲的时候这条线路也可以传输其他数据，是面向连接的，可靠的。</p><h5 id="信元交换" tabindex="-1"><a class="header-anchor" href="#信元交换"><span>信元交换</span></a></h5><p>异步传输模式 ATM 采用的交换方式，本质是按照虚电路方式进行转发，只不过信元是固定长度的分组，共 53B，其中 5B 为头部，48B 为数据域，也是面向连接的，可靠的。</p><h2 id="ip-地址" tabindex="-1"><a class="header-anchor" href="#ip-地址"><span>IP 地址</span></a></h2><p>ip 地址是 32 位的二进制代码，每隔 8 位插入一个空格，可提高可读性，为了方便理解和设置，一般会采用<strong>点分十进制</strong>方法表示。32 位分为 4 段，每一段占 8 位，每一段可以表示的范围是 0-255。</p><h3 id="分类-ip-地址" tabindex="-1"><a class="header-anchor" href="#分类-ip-地址"><span>分类 IP 地址</span></a></h3><p>IP 地址分为网络号和主机号</p><table><thead><tr><th>类别</th><th>点分十进制</th><th>二进制</th><th>网络号范围</th><th>特点</th></tr></thead><tbody><tr><td>A 类单播</td><td><strong>0</strong>.0.0.0<br>---<br><strong>127</strong>.255.255.255</td><td><u><strong>0</strong>0000000</u> 00000000 00000000 00000000<br>---<br><u><strong>0</strong>1111111</u> 11111111 11111111 11111111</td><td>0-127</td><td>网络号占 8 位，首位是 0，最大可以表示 2^24-2</td></tr><tr><td>B 类单播</td><td><strong>128</strong>.0.0.0<br>---<br><strong>191</strong>.255.255.255</td><td><u><strong>10</strong>000000 00000000</u> 00000000 00000000<br>---<br><u><strong>10</strong>111111 11111111</u> 11111111 11111111</td><td>128-191</td><td>网络号占 16 位，首位是 10，最大可以表示 2^16-2</td></tr><tr><td>C 类单播</td><td><strong>192</strong>.0.0.0<br>---<br><strong>223</strong>.255.255.255</td><td><u><strong>110</strong>00000 00000000 00000000</u> 00000000<br>---<br><u><strong>110</strong>11111 11111111 11111111</u> 11111111</td><td>192-223</td><td>网络号占 24 位，首位是 10，最大可以表示 2^8-2</td></tr><tr><td>D 类组播</td><td><strong>224</strong>.0.0.0<br>---<br><strong>239</strong>.255.255.255</td><td><strong>1110</strong>0000 00000000 00000000 00000000<br>---<br><strong>1110</strong>1111 11111111 11111111 11111111</td><td>224-239</td><td></td></tr><tr><td>E 类保留</td><td>240.0.0.0<br>---<br>255.255.255.255</td><td><strong>1111</strong>0000 00000000 00000000 00000000<br>---<br><strong>1111</strong>1111 11111111 11111111 11111111</td><td>240-255</td><td></td></tr></tbody></table><h3 id="无分类编址" tabindex="-1"><a class="header-anchor" href="#无分类编址"><span>无分类编址</span></a></h3><p>不按 ABC 类规则划分，自动规定网络号。无分类编址格式为 <strong>IP 地址/网络号</strong>，如：</p><p><strong>128.168.0.11/20</strong>表示的 IP 地址为<strong>128.168.0.11</strong>，其中网络号占 20 位，那么主机号占用 32-20=12 位。</p><h3 id="特殊-ip-地址" tabindex="-1"><a class="header-anchor" href="#特殊-ip-地址"><span>特殊 IP 地址</span></a></h3><p>共有地址：通过它直接访问因特网，是全网唯一的 IP 地址。</p><p>私有地址：属于非注册地址，专门为组织机构内部使用，不能直接访问因特网。一下是我有地址范围：</p><table><thead><tr><th style="text-align:center;">类别</th><th>IP 地址范围</th><th>网络号</th><th>网络数</th></tr></thead><tbody><tr><td style="text-align:center;">A</td><td>10.0.0.0 - 10.255.255.255</td><td>10</td><td>1</td></tr><tr><td style="text-align:center;">B</td><td>172.16.0.0 - 172.31.255.255</td><td>172.16 - 172.31</td><td>16</td></tr><tr><td style="text-align:center;">C</td><td>192.168.0.0 - 192.168.255.255</td><td>192.168.0 - 192.168.255</td><td>256</td></tr></tbody></table><h3 id="子网划分" tabindex="-1"><a class="header-anchor" href="#子网划分"><span>子网划分</span></a></h3><p>通过子网划分的方法划分网络，即自定义网络号位数，能自定义主机号位数，就能根据主机个数来划分出最合适的方案，不会造成资源浪费。</p><p>一般 IP 地址按标准划分为 ABC 类后，可以进行再一步的划分，将主机号拿出几位作为子网号，就可以划分出多个子网，此时 IP 地址组成为<strong>网络号+子网号+主机号</strong>。</p><p>网络号和子网号都为 1，主机号都为 0，这样的地址是<strong>子网掩码</strong>。</p><p>子网号可以全 0 或者全 1，主机号不能为全 0 或全 1，因此，主机数需要 -2，而子网数不用。</p><h3 id="ipv6" tabindex="-1"><a class="header-anchor" href="#ipv6"><span>IPv6</span></a></h3><p>主要是为了解决 IPv4 地址数不够用的情况而提出的设计方案，IPv6 具有以下特性：</p><ul><li>IPv6地址长度为 128 位，地址空问增大了 2^96 倍；</li><li>灵活的 IP 报文头部格式，使用一系列固定格式的扩展头部取代了 IPv4 中可变长度的选项字段。IPv6 中选项部分的出现方式也有所变化，使路由器可以简单撸过选项而不做任何处理，加快了报文处理速度；</li><li>IPv6 简化了报文头部格式，加快报文转发，提高了吞吐量；</li><li>提高安全性，身份认证和隐私权是1Pv6的关键特性；</li><li>支持更多的服务类型；</li><li>允许协议继续演变，增加新的功能，使之适应未来技术的发展。</li></ul><p>IPv4 和 IPv6 过渡期间采用的技术：</p><ol><li>双协议栈；主机同时运行两套协议栈。</li><li>隧道技术；在 IPv4 网络上建立一条能够传输 IPv6 数据报的隧道。</li><li>翻译技术；利用一台专门的翻译设备，在纯 IPv4 和 IPv6 网络之间转换 IP 报头的地址，同时根据协议不同对分组做响应的语义翻译。</li></ol><h2 id="网络规划与设计" tabindex="-1"><a class="header-anchor" href="#网络规划与设计"><span>网络规划与设计</span></a></h2><p>三层模型将网络划分为<strong>核心层</strong>、<strong>汇聚层</strong>和<strong>接入层</strong>，每一层都有着特定的作用。</p><p>核心层提供不同区域之问的最佳路由和高速数据传送；</p><p>汇聚层将网络业务连接到接入层，井且实施与安全、流量、负载和路由相关的策略；</p><p>接入层为用户提供了 在本地网段访问应用系统的能力，还要解决相邻用户之问的互访需要，接入层要负责一些用户信息（例如用户1P地址、MAC地址和访问 日志等）的收集工作和用户管理功能（包括认证和计费等）。</p><h3 id="建筑物综合布线系统-pds" tabindex="-1"><a class="header-anchor" href="#建筑物综合布线系统-pds"><span>建筑物综合布线系统 PDS</span></a></h3><ol><li>工作区子系统：实现工作区终端设备到水平子系统的信息插座之间的互联；</li><li>水平布线子系统：实现信息插座和管理子系统之间的连接；</li><li>设备间子系统：实现中央主配线架与各种不同设备之间的连接；</li><li>垂直干线子系统：实现各楼层设备间子系统之间的互联；</li><li>管理子系统：连接各楼层水平布线子系统和垂直干缆线，负责连接控制其他子系统为连接其他子系统提供连接手段；</li><li>建筑群子系统：各个建筑物通信系统之间的互联；</li></ol><h2 id="磁盘冗余阵列-raid" tabindex="-1"><a class="header-anchor" href="#磁盘冗余阵列-raid"><span>磁盘冗余阵列 RAID</span></a></h2><p>RAID 即磁盘冗余阵列技术，将数据分散存储在不同磁盘中，可并行读取，可冗余存储，提高磁盘访问速度，保障数据安全性。</p><p>RAID0 将数据分散存储在不同磁盘中，磁盘利用率 100%，访问速度最快，但是没有提供冗余和错误修复技术；</p><p>RAID1 在成对的独立磁盘上产生互为备份的数据，增加存储可靠性，可以纠错，但磁盘利用率只有 50%；</p><p>RAID5 在所有磁盘交叉的存储数据及奇偶校验信息，所有的校验信息存储总量为一个磁盘容量，但是分布存储在不同的磁盘上，读写指针可同时操作，磁盘利用率是 <code>(N-1)/N</code>；</p><h2 id="网络存储技术" tabindex="-1"><a class="header-anchor" href="#网络存储技术"><span>网络存储技术</span></a></h2><ol><li><p>直接附加存储 <strong>DAS</strong>：是指将存储设备通过 SCS1 接口直接连接到一台服务器上使用，其本身是硬 件的堆叠，存储操作依赖于服务器，不带有任何存储操作系统。</p><p>存在问题：在传递距离、连接数量、传输速率等方面都受到限制。容量难以扩展升级；数据处理和传输能力降低；服务器异常会波及存储器。</p></li><li><p>网络附加存储 <strong>NAS</strong>：通过网络接口与网络直接相连，由用户通过网络访问，有独立的存储系统。NAS 存储设备类似于一个专用的文件服务器，去掉了通用服务器大多数计算功能，而仅仅提供文件系统功能。以数据为中心，将存储设备与服务器分离，其存储设备在功能上完全独立于网络中的主服务器。客户机与存储设备之间的数据访问不再需要文件服务器的千预，同时它允许客户机与存储设备之间进行直接的数据访问，所以不仅响应速度快，而且数据传输速率也很高。</p><p>NAS 的性能特点是进行小文件级的共享存取；支持即插即用；可以很经济的解决存储容量不足的问题，但难以获得满意的性能。</p></li><li><p>存储区域网 <strong>SAN</strong>：SAN 是通过 专用交换机将磁盘阵列与服务器连接起来的高速专用子网。它没有采用文件共享存取方式，而是采用块（block）级别存储。SAN 是通过专用高速网将一个或多个网络存储设备和服务器连接起来的专用存储系统，其最大特点是将存储设备从传统的以太网中分离了出来，成为独立的存储区域网络 SAN 的系统结构。根据数据传输过程采用的协议，其技术划分为 FCSAN（光纤通道）、IP SAN （IP网络）和1B SAN（无线带宽）技术。</p></li></ol><h2 id="其他知识点" tabindex="-1"><a class="header-anchor" href="#其他知识点"><span>其他知识点</span></a></h2><h3 id="网络地址翻译-nat" tabindex="-1"><a class="header-anchor" href="#网络地址翻译-nat"><span>网络地址翻译 NAT</span></a></h3><p>公司内有很多电脑，在公司局域网内可以互联通信，但是要访问外部因特网时，只提供固定的少量 IP 地址能够访问因特网，将公司所有电脑这个大的地址集合映射到能够访问因特网的少量 IP 地址集合的过程就称为 NAT。很明显，使用了 NAT 后，一个公司只有少量固定 IP 地址可以上网，大大减少了IP地址的使用量。</p><h3 id="默认网关" tabindex="-1"><a class="header-anchor" href="#默认网关"><span>默认网关</span></a></h3><p>一台主机可以有多个网关。默认网关的意思是一台主机如果找不到可用的网关，就把数据包发给默认指定的网关，由这个网关来处理数据包。现在主机使用的网关，一般指的是默认网关。默认网关的 IP 地址必须与本机 IP 地址在同一个网段内，即同网络号。</p><h3 id="虛拟局域网-vlan" tabindex="-1"><a class="header-anchor" href="#虛拟局域网-vlan"><span>虛拟局域网 VLAN</span></a></h3><p>是一组逻辑上的设备和用户，这些设备和用户并不受物理位置的限制，可以根据功能、部门及应用等因素将它们组织起来，相互之间的通信就好像它们在同一个网段中一样。</p><p>VLAN 工作在 OSI 参考模型的第 2 层和第 3 层，一个 VLAN 就是一个广播域，VAN 之间的通信是通过第 3 层的路由器来完成的。</p><p>今与传统的局域网技术相比较，VLAN 技术更加灵活，它具有以下优点：网络设备的移动、添加和修改的管理开销减少；可以控制广播活动；可提高网络的安全性。</p><h3 id="虚拟专用网-vpn" tabindex="-1"><a class="header-anchor" href="#虚拟专用网-vpn"><span>虚拟专用网 VPN</span></a></h3><p>是在公用网络上建立专用网络的技术。其之所以称为虚拟网，主要是因为整个 VPN 网络的任意两个节点之问的连接井没有传统专网所需的端到端的物理链路，而是架构在公用网络服务商所提供的网络平台，如nternet、ATM （异步传输模式）、Frame Relay （帧中继）等之上的逻辑网络，用户数据在逻辑链路中传输。</p><h3 id="ppp" tabindex="-1"><a class="header-anchor" href="#ppp"><span>PPP</span></a></h3><p>安全认证介绍：PPP 的 NCP 可以承载多种协议的三层数据包。PPP使用LCP控制多种链路的参数（建立、认证、压缩、回拨）。</p><p>PPP 的认证类型：pap 认证是通过二次握手建立认证（明文不加密），chap 挑战握手认证协议，通过三次握手建立认证（密文采用 MD5 加密）。PPP 的双向验证，采用的是chap的主验证风格。PPP 的加固验证，采用的是两种 (pap, chap）验证同时使用</p><h3 id="冲突域和广播域" tabindex="-1"><a class="header-anchor" href="#冲突域和广播域"><span>冲突域和广播域</span></a></h3><p>路由器可以阻断广播域和冲突域，交换机只能阻断冲突域，因此一个路由器下可以划分多个广播域和多个冲突域；一个交换机下整体是一个广搔域，但可以划分多个冲突域；而物理层设备集线器下整体作为一个冲突域和一个广播域。</p>',140)]))}const i=t(d,[["render",r],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/note/system-architecture/network/","title":"计算机网络","lang":"en-US","frontmatter":{"title":"计算机网络","createTime":"2022-06-02T18:53:20.000Z","permalink":"/note/system-architecture/network/"},"headers":[],"readingTime":{"minutes":19.87,"words":5961},"git":{"updatedTime":1732511545000,"contributors":[{"name":"qiqiang","email":"qiqiang@pingpongx.com","commits":3,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"},{"name":"Quince","email":"qiqiangvae@foxmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/Quince?v=4","url":"https://github.com/Quince"}]},"filePathRelative":"notes/note/系统架构师/5.计算机网络.md","bulletin":false}');export{i as comp,l as data};
