import{_ as a,c as i,e as n,o as e}from"./app-B0Ppf8HT.js";const l={};function t(p,s){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="本地使用ollama搭建大模型" tabindex="-1"><a class="header-anchor" href="#本地使用ollama搭建大模型"><span>本地使用OLLAMA搭建大模型</span></a></h1><h2 id="什么是大模型" tabindex="-1"><a class="header-anchor" href="#什么是大模型"><span>什么是大模型</span></a></h2><p>大模型（Large Model）通常指的是由大量参数组成的机器学习模型，特别是在自然语言处理（NLP）领域，通常指的是基于深度学习的神经网络模型，如GPT（Generative Pre-trained Transformer）系列。以下是大模型的一些关键特点和内容：</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h3><ol><li><p><strong>大量参数</strong>：大模型通常包含数亿到数千亿个参数。这些参数通过大规模的数据集训练，使模型能够捕捉和生成复杂的语言模式和结构。</p></li><li><p><strong>强大的语言理解和生成能力</strong>：大模型在处理各种语言任务时表现出色，如文本生成、翻译、摘要、问答等。</p></li><li><p><strong>预训练和微调</strong>：大模型一般先通过海量文本数据进行预训练，学习广泛的语言知识和模式，然后通过微调（fine-tuning）在特定任务或领域数据上进一步优化。</p></li><li><p><strong>多功能性</strong>：大模型可以用于多种任务，不需要为每个任务单独训练一个新模型，只需通过调整提示词或微调即可适应新任务。</p></li></ol><h3 id="发展历程" tabindex="-1"><a class="header-anchor" href="#发展历程"><span>发展历程</span></a></h3><ol><li><p><strong>早期模型</strong>：早期的语言模型，如Word2Vec和GloVe，主要关注词向量的表示。</p></li><li><p><strong>Transformer架构</strong>：Transformer模型的引入是一个重大突破。它利用自注意力机制，能够更好地捕捉文本中的长距离依赖关系。</p></li><li><p><strong>GPT系列</strong>：</p><ul><li>GPT-1：OpenAI发布的第一个GPT模型，展示了通过预训练和微调进行文本生成的潜力。</li><li>GPT-2：扩展了模型的规模和训练数据量，显著提升了生成文本的质量。</li><li>GPT-3：包含1750亿个参数，大幅提升了模型的生成能力和多功能性。</li><li>GPT-4：进一步扩展了参数规模和训练数据，增强了模型在多任务处理中的表现。</li></ul></li></ol><h3 id="应用领域" tabindex="-1"><a class="header-anchor" href="#应用领域"><span>应用领域</span></a></h3><ol><li><p><strong>自然语言处理</strong>：文本生成、翻译、摘要、情感分析等。</p></li><li><p><strong>对话系统</strong>：聊天机器人、虚拟助手、客户服务等。</p></li><li><p><strong>创意写作</strong>：文章、故事、剧本生成等。</p></li><li><p><strong>教育和研究</strong>：提供知识问答、辅助写作、语言学习等。</p></li><li><p><strong>商业和营销</strong>：文案撰写、个性化推荐、数据分析等。</p></li></ol><h3 id="挑战和问题" tabindex="-1"><a class="header-anchor" href="#挑战和问题"><span>挑战和问题</span></a></h3><ol><li><p><strong>计算资源需求</strong>：大模型的训练和推理需要大量的计算资源和时间。</p></li><li><p><strong>数据隐私和安全</strong>：使用大规模数据进行训练可能涉及隐私和数据安全问题。</p></li><li><p><strong>模型偏见</strong>：训练数据中的偏见可能导致模型输出结果中存在偏见。</p></li><li><p><strong>可解释性</strong>：大模型的决策过程复杂，难以解释其生成的具体原因和逻辑。</p></li></ol><h3 id="未来发展" tabindex="-1"><a class="header-anchor" href="#未来发展"><span>未来发展</span></a></h3><ol><li><p><strong>模型压缩和优化</strong>：研究如何在保持性能的前提下降低模型规模和计算需求。</p></li><li><p><strong>更好的训练数据和方法</strong>：提高数据质量，改进训练方法，减少偏见和提高模型的鲁棒性。</p></li><li><p><strong>多模态模型</strong>：结合文本、图像、音频等多种数据类型，提升模型的综合理解和生成能力。</p></li></ol><p>通过了解大模型的特点、应用和挑战，可以更好地利用这些先进的技术，实现各种实际应用中的创新和改进。</p><h2 id="使用-ollama-搭建大模型" tabindex="-1"><a class="header-anchor" href="#使用-ollama-搭建大模型"><span>使用 OLLAMA 搭建大模型</span></a></h2><h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h3><ol><li>有一台性能不差的电脑，OLLAMA 推荐配置如下，至少需要 8G 的 RAM： <img src="https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/ZMyLFo.png" alt="ZMyLFo"></li><li>准备 docker 环境，可参考教程 <a href="/cloudNative/d3cfc6">docker基本使用</a>；</li></ol><h3 id="搭建-ollama" tabindex="-1"><a class="header-anchor" href="#搭建-ollama"><span>搭建 OLLAMA</span></a></h3><p><a href="https://ollama.com/" target="_blank" rel="noopener noreferrer">ollama 官方网站</a></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>https://ollama.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="https://hub.docker.com/r/ollama/ollama" target="_blank" rel="noopener noreferrer">ollama docker 网站</a></p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>https://hub.docker.com/r/ollama/ollama</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用 docker 安装 OLLAMA</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.ollama:/root/.ollama</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 11434:11434</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama/ollama</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Unable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> find</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> image</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ollama/ollama:latest</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> locally</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">latest:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Pulling</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> from</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama/ollama</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">a8b1c5f80c2d:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> complete</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">7110e83425ad:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> complete</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">d73d7155397d:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Pull</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> complete</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Digest:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sha256:6363c5da064b02b5a1d15dbd1205c652e01c0e57accbfd831115e35a3efe0572</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Status:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Downloaded</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> newer</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> image</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> for</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ollama/ollama:latest</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">8eb905b0e7b0bba918095d2c5eed669bda3b9d67ac947c77eef18ceae475ed0f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为基础模型镜像比较大，所以建议使用挂载卷的方式将 OLLAMA 下载的模型挂载到宿主机的<code>~/.ollama</code>目录下，这样后面多次折腾下载数据会快一些。</p><p>启动完成之后，可以在浏览器打开<code>http://127.0.0.1:11434</code>，或者在终端输入</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> http://127.0.0.1:11434</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Ollama</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> running</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 OLLAMA 启动成功了。</p><p>也可以查看本机的局域网 IP 是多少，方便后面部署 Open-WebUI 使用。</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">ifconfig</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">grep</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 192</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	inet</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 192.168.1.3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> netmask</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0xffffff00</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> broadcast</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 192.168.1.255</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	inet</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 192.168.31.62</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> netmask</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0xffffff00</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> broadcast</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 192.168.31.255</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	inet</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 192.168.64.1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> netmask</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0xffffff00</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> broadcast</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 192.168.64.255</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">curl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> http://192.168.1.3:11434</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Ollama</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> is</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> running</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行大模型" tabindex="-1"><a class="header-anchor" href="#运行大模型"><span>运行大模型</span></a></h3><p>进入 Docker 容器内部</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>docker exec -it ollama bash</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开 <a href="https://ollama.com/search?q=&amp;p=1&amp;sort=popular" target="_blank" rel="noopener noreferrer">ollama 网站</a>搜索需要运行的大模型，我们已 llama3 为例，进行下载。</p><p><img src="https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/vqDuIr.png" alt="vqDuIr"></p><p>复制命令<code>ollama run llama3</code>，也可以根据配置下载不同参数的大模型。</p><p>下载过程需要一些时间，毕竟文件还是挺大的，大模型参数越大，镜像越大。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>ollama run llama3</span></span>
<span class="line"><span>pulling manifest</span></span>
<span class="line"><span>pulling 6a0746a1ec1a... 100% ▕██████████████████████████████████████████████████████████▏ 4.7 GB</span></span>
<span class="line"><span>pulling 4fa551d4f938... 100% ▕██████████████████████████████████████████████████████████▏  12 KB</span></span>
<span class="line"><span>pulling 8ab4849b038c... 100% ▕██████████████████████████████████████████████████████████▏  254 B</span></span>
<span class="line"><span>pulling 577073ffcc6c... 100% ▕██████████████████████████████████████████████████████████▏  110 B</span></span>
<span class="line"><span>pulling 3f8eb4da87fa... 100% ▕██████████████████████████████████████████████████████████▏  485 B</span></span>
<span class="line"><span>verifying sha256 digest</span></span>
<span class="line"><span>writing manifest</span></span>
<span class="line"><span>removing any unused layers</span></span>
<span class="line"><span>success</span></span>
<span class="line"><span>&gt;&gt;&gt; Send a message (/? for help)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时就可以和 llama3 聊天了。</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>&gt;&gt;&gt; 你是谁</span></span>
<span class="line"><span>I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational</span></span>
<span class="line"><span>manner. I&#39;m not a human, but a computer program designed to simulate conversation and answer questions to the best</span></span>
<span class="line"><span>of my ability based on my training data. I can generate human-like text responses to your questions or prompts, and</span></span>
<span class="line"><span>engage in natural-sounding conversations. My primary function is to assist users with information and tasks, and to</span></span>
<span class="line"><span>provide helpful and accurate responses. I&#39;m constantly learning and improving, so please bear with me if I make any</span></span>
<span class="line"><span>mistakes or don&#39;t fully understand what you&#39;re asking. 😊</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt;&gt;&gt; 可以用中文和我聊天吗</span></span>
<span class="line"><span>😊</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以！我也能使用中文与你聊天。请随时提出你的问题或想法，我将尽力回答和讨论。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>（Note: Although I&#39;m capable of understanding and responding in Chinese, my proficiency may vary depending on the</span></span>
<span class="line"><span>complexity and nuance of the topic. If you&#39;re unsure about something or want me to clarify a point, please don&#39;t</span></span>
<span class="line"><span>hesitate to ask!）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，llama3 对中文并不是很熟悉，有兴趣的同学可以使用阿里巴巴开源的千问2大模型（qwen2）。</p><h3 id="搭建-open-webui" tabindex="-1"><a class="header-anchor" href="#搭建-open-webui"><span>搭建 Open-WebUI</span></a></h3><p><a href="https://openwebui.com/" target="_blank" rel="noopener noreferrer">Open-WebUI 官方网站</a></p><p><a href="https://github.com/open-webui/open-webui#troubleshooting" target="_blank" rel="noopener noreferrer">Open-WebUI Github</a></p><p>在终端执行命令</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 3000:8080</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.open-webui:/app/backend/data</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> open-webui</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> always</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ghcr.io/open-webui/open-webui:main</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">128ae8d335f61476d51f40d1f3bc88e9ae2b136cfd7a5fae0e42412e254f7f3c</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器打开<code>http://localhost:3000</code>，会进入登录界面，此时需要注册一个账号，第一个注册的账号是管理员账号。</p><p>看下提问面板</p><p><img src="https://qiqiang.oss-cn-hangzhou.aliyuncs.com/muan/LLnH8i.png" alt="LLnH8i"></p><h3 id="搭建-maxkb" tabindex="-1"><a class="header-anchor" href="#搭建-maxkb"><span>搭建 MaxKB</span></a></h3><p>MaxKB 是一款基于 LLM 大语言模型的知识库问答系统。MaxKB = Max Knowledge Base，旨在成为企业的最强大脑。</p><p>开箱即用：支持直接上传文档、自动爬取在线文档，支持文本自动拆分、向量化、RAG（检索增强生成），智能问答交互体验好； 无缝嵌入：支持零编码快速嵌入到第三方业务系统； 多模型支持：支持对接主流的大模型，包括 Ollama 本地私有大模型（如 Meta Llama 3、qwen 等）、通义千问、OpenAI、Azure OpenAI、Kimi、智谱 AI、讯飞星火和百度千帆大模型等。</p><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --name=maxkb</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 8081:8080</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ~/.maxkb:/var/lib/postgresql/data</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 1panel/maxkb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,54)]))}const r=a(l,[["render",t],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/llm/start/","title":"本地使用OLLAMA搭建大模型","lang":"en-US","frontmatter":{"title":"本地使用OLLAMA搭建大模型","createTime":"2024-06-09T10:08:33.000Z","permalink":"/llm/start/"},"headers":[],"readingTime":{"minutes":6.18,"words":1854},"git":{"updatedTime":1732511545000,"contributors":[{"name":"qiqiang","email":"qiqiang@pingpongx.com","commits":3,"avatar":"https://avatars.githubusercontent.com/qiqiang?v=4","url":"https://github.com/qiqiang"},{"name":"Quince","email":"qiqiangvae@foxmail.com","commits":3,"avatar":"https://avatars.githubusercontent.com/Quince?v=4","url":"https://github.com/Quince"}]},"filePathRelative":"notes/大模型/ 10.本地使用OLLAMA搭建大模型.md","bulletin":false}');export{r as comp,h as data};
