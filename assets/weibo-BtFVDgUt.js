const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./weiboVideo-B5bNVoZj.js","./index-BsGTho4G.js","./index-ChLjAKfE.css","./useCrossAppChatHistory-DV_t8BMI.js","./format-x_G9mPrv.js"])))=>i.map(i=>d[i]);
import{C as Je,fI as tn,f0 as on,ap as nn,F as Ne,I as sn,J as re,j as E,H as rn,D as an,E as ln,a as cn,K as Q,du as un,L as ye,B as Tt,g as mn,s as Be,fJ as dn,k as Se,aS as $e,dT as Ce,_ as fe,o as be,fo as We,dY as Et,dZ as fn,aX as Rt,aY as hn,aZ as pn,a_ as gn,b0 as wn,U as Bt,P as vn,fK as yn,V as bn,eJ as Pn}from"./index-BsGTho4G.js";Je.extend(an);Je.extend(ln);const Ot=($=[])=>Ne.getSceneBoundProviderId("weiboImage")?rn($):"",it=($=[],P=null)=>on({characters:$,masks:P?[P]:[]}),Sn=$=>sn({characters:re.characters,masks:E.masks,character:$}),je=($=[])=>{const P=nn("weiboImage",Ne.config),k=Ot($),I=k.replace(/^-\s*/,"   - ");return k?`${P}
${I}`:P},Fe=($=[])=>{if(!!Ne.getSceneBoundProviderId("weiboImage")){const I=Ot($)?',"faceReferences":[]':"";return`"images": [{"prompt":"soft rain on neon street, empty crosswalk, reflected city lights, cinematic night mood","description":"雨刚下过的夜街泛着潮湿的光，霓虹倒映在路面上，像一张安静又有点寂寞的城市夜景照。"${I}},{"prompt":"late summer convenience store fridge glow, two canned drinks in hand, candid phone snapshot vibe","description":"夏夜便利店冰柜前的冷白灯打下来，手里拿着两罐刚买的饮料，像顺路记录下来的普通快乐。"${I}}], // 可支持1-9张配图，可为空数组，非必须项`}return'"images": [{"description":"雨刚下过的夜街泛着潮湿的光，霓虹倒映在路面上，像一张安静又有点寂寞的城市夜景照。"},{"description":"夏夜便利店冰柜前的冷白灯打下来，手里拿着两罐刚买的饮料，像顺路记录下来的普通快乐。"}], // 可支持1-9张配图，可为空数组，非必须项'},_e=()=>"评论区表情包规则：\n   - 如果提供了<可用表情包>必须将表情名称存放在评论对象的 `emoticons` 数组字段中，绝对不要混在 帖子正文`content` 文本中，表情包只被系统渲染在评论内容中。\n   - 表情包使用比例：为每条帖子下方的评论增添表情包，控制整体带有表情的评论比例在 **30%~50%** 左右即可，表情包需要符合语境以符合真实的人类社交习惯。\n   - 禁止滥用表情包，每条评论只能携带一个表情包",xe=($,P,k=[],I=[])=>{if(!$)return"";const i=(T,V)=>{if(!T||T.length===0)return"";const J=T.map(R=>{if(typeof R=="string"&&R.includes("pollinations.ai/prompt/"))try{const x=new URL(R).pathname.split("/");return`[画面描述: ${decodeURIComponent(x[x.length-1])}]`}catch{return"[图片]"}return"[图片]"}).join(" ");return`
${V}[图片]: ${J}`},r=k.find(T=>T.authorNpcId===$&&T.isPinned),_=k.filter(T=>T.authorNpcId===$&&(!r||T.id!==r.id)).sort((T,V)=>new Date(V.timestamp||0)-new Date(T.timestamp||0)).slice(0,5),M=I.filter(T=>T.authorNpcId===$).sort((T,V)=>new Date(V.timestamp||0)-new Date(T.timestamp||0)).slice(0,3);if(!r&&_.length===0&&M.length===0)return"";let G=`【${P}的微博】
`;if(r){const T=i(r.images,"    ");G+=`  <置顶微博>
    [时间]: ${r.time||"未知"}
    [内容]: ${r.content}${T}
  </置顶微博>
`}return _.length>0&&(G+=`  <最新微博列表>
`,_.forEach((T,V)=>{const J=i(T.images,"      ");G+=`    <微博${V+1}>
      [时间]: ${T.time||"未知"}
      [内容]: ${T.content}${J}
    </微博${V+1}>
`}),G+=`  </最新微博列表>
`),M.length>0&&(G+=`  <最新视频列表>
`,M.forEach((T,V)=>{G+=`    <视频${V+1}>
      [标题]: ${T.title||"无"}
      [配文]: ${T.desc||"无"}
      [视频画面]: ${T.narrative||"无"}
    </视频${V+1}>
`}),G+=`  </最新视频列表>
`),G+`
`},jt=($={})=>{const{worldName:P="未命名世界",worldDesc:k="这是一个默认的世界观",worldBooksContent:I="",userProfile:i=null,characters:r=[],superTopics:_=[],emoticonGroups:M=[],posts:G=[],videos:T=[]}=$,V=i?.weiboProfile?.name||i?.name||"用户",J=it(r,i),R=je(J);let L=`<系统设定>
你被用户（${V}）唤醒了，你无时无刻不为用户服务。
你是一个用于模拟“微博”信息流的后端内容生成引擎，此时此刻用户正拿起手机准备刷今天的微博。
你要根据提供的世界观、角色信息以及用户状态，决定生成 6-8 条符合这个世界逻辑的微博帖子推荐给用户。
该世界的微博是一个类似真实微博的公共社交论坛，所有人都可以在这里畅所欲言，用户可以在上面分享日常、参与话题讨论、或者与其他角色/NPC产生轻度的信息流互动。
但你必须始终铭记：用户刚刚打开微博，并没有进行任何操作，你只需生成给用户推荐的帖子本身，不允许代替用户生成任何帖子或者回复动作
</系统设定>

<世界观数据>
[世界名称]: ${P}
[世界描述]: ${k}
[附加世界书知识]:
${I||"暂无"}
</世界观数据>

`;if(i){const C=i.weiboProfile?.name||i.name||"未知",y=i.weiboProfile?.certifications||i.certifications,w=y&&y.length>0?y.join(", "):"无",p=i.weiboProfile?.following||i.following||0,F=i.weiboProfile?.followers||i.followers||0,Z=i.weiboProfile?.likes||i.likes||0,ae=i.weiboProfile?.socialPersona||"无";i.persona,L+=`<当前登录用户(面具)>
网名: ${C}
认证信息: ${w}
关注数: ${p}
粉丝数: ${F}
获赞数: ${Z}
社交人设: ${ae}
用户真实姓名:${i.name||"未知"}
</当前登录用户(面具)>

`}if(r&&r.length>0){let C="",y=r.map(w=>{const p=w.weiboProfile?.name||w.nickname||w.name,F=w.weiboProfile?.certifications&&w.weiboProfile.certifications.length>0?w.weiboProfile.certifications.join(", "):"无",Z=w.weiboProfile?.followers||0,ae=w.weiboProfile?.likes||0,te=w.weiboProfile?.socialPersona||"无",U=w.location?`${w.location.virtual||""} ${w.location.reality?.city||""}`.trim():"未知",q=w.relationships?JSON.stringify(w.relationships):"无",Y=w.chatStyle||"未知",oe=`    - 姓名: ${w.name||"未知"}
    - 角色ID: ${w.id||"未知"}
    - 核心人设: ${w.persona||"无"}
    - 关系网: ${q}
    - 所在地: ${U}
    - 线上风格: ${Y}`,le=xe(w.id,p,G,T);return le&&(C+=le),`- 网名: ${p} | 角色ID: ${w.id} | 认证: ${F} | 粉丝: ${Z} | 获赞: ${ae} | 社交人设: ${te}
  人物设定:
${oe}`}).join(`
`);L+=`<该世界常驻故事角色(NPC)列表>
这些角色活跃在微博上。生成内容时，应根据他们的粉丝数和认证级别控制他们出现的频率。粉丝越多、认证级别越高的角色，其相关的讨论（或本人发帖、评论）频率可以适当增加。
${y}
</该世界常驻故事角色(NPC)列表>

`,C&&(L+=`<角色微博数据>
<微博数据>
${C}</微博数据>
</角色微博数据>

`)}if(_&&_.length>0){const C=_.filter(y=>y.isFollowed);if(C.length>0){const y=C.map(w=>`- #${w.name}#: 讨论度/帖子数 ${w.postsCount||0} | 简介: ${w.desc||"无"}`).join(`
`);L+=`<推荐机制：用户关注>
你需要按照系统自然流推送的热门或随机话题（占据百分之40-60%）+用户已关注的超话标签均匀分布。
以下是用户关注的超话标签：
${y}

注：你可以生成没有标签的普通日常分享，并不是所有帖子都需要带TAG，例如普通人吐槽分享生活或者自言自语通常不会加标签。
</推荐机制：用户关注>

`}}if(M&&M.length>0){const C=M.map(y=>{const w=y.emoticons.map(p=>p.name).join(", ");return`- 分组: ${y.name} | 包含的表情: ${w}`}).join(`
`);L+=`<可用表情包>
当前世界有以下绑定的表情包，你构造帖子的评论时，可以使用这些表情包增加评论区的氛围趣味。
如果你决定让评论者在评论中使用表情包，请不要将表情名称写在 \`content\` 里，而是将其放在新增的 \`emoticons\` 数组字段中（例如 \`["大笑", "吃瓜"]\`）。
可用列表：
${C}
</可用表情包>

`}const x=["绝对禁止模拟当前登录用户去“发帖”、“评论”或“点赞”。你生成的都是用户视角下他人的帖子。","【核心要求：路人与常驻角色比例】为了保证微博推送机制信息流的真实感，你生成的帖子**绝大部分（约占70%-80%）必须是来自根据世界观随机生成的普通路人网友**。常驻故事角色（NPC）的帖子应只占少数。请务必减少常驻角色的发帖频率，增加路人帖子的多样性和真实感！","帖子内容必须符合设定的世界观逻辑。","文本可以带有 emo、网感、幽默或对应角色人设的语气，要有“活人味”。","每条帖子必须包含以下 JSON 字段，最终输出一个 JSON 数组。",R,'当生成【匿名发帖】需将 JSON 中的 "isAnonymous" 设置为 true。"authorName" 必须固定填写为 "匿名用户"。'];M&&M.length>0&&x.push(_e()),x.push('标签格式规则：\n   - 生成帖子的 `tags` 字段时，`name` 属性的值【严禁】包含任何 `#` 号等特殊符号。\n   - sample：正确的写法是 `"name": "日常"`，前端系统会自动处理标签的外观显示。\n   - 【严禁操作】：绝对禁止在正文 `content` 中手写任何带有 # 号的标签文本！请将所有标签纯文本放入 `tags` 数组，系统会自动完成UI渲染。',"角色历史数据参考规则：你可以参考<角色微博数据>中角色的过往帖子与视频，以确保内容的连续性和角色行为的一致性。但绝对禁止直接抄袭或生成与历史数据在主题、核心事件上高度相似的内容。");const S=x.map((C,y)=>`${y+1}. ${C}`).join(`
`);return L+=`<生成规则>
${S}
</生成规则>

<输出格式>
请严格输出一个标准的 JSON 数组，不要包含任何 markdown 代码块（如 \`\`\`json ），直接输出 JSON 文本。格式如下：
[
  {
    "authorName": "发帖人网名(必须是NPC列表中的人，或者符合世界观的路人，若匿名则为'匿名用户')",
    "authorNpcId": "如果发帖人是NPC列表中的人，请严格填写其角色ID；如果是随机生成的路人或匿名发帖，必须填写 null",
    "certifications": ["enterprise"], // 权威/大V用户请在此数组中填入以下【一个】指定关键词: "enterprise"(蓝V), "media"(红V), "personal"(金V), "school"(绿V)。普通用户则为空数组[]。
    "isAnonymous": false, // 是否匿名，10%-20%概率为true
    "content": "帖子的正文内容",
    "tags": [{"name": "纯文字标签名1"}, {"name": "纯文字标签名2"}], // 可以为空数组。注意不用包含任何 # 号！
    ${Fe(J)}
    "time": "几分钟前 / 几小时前",
    "likes": 123, // 随机生成合理点赞数
    "commentsCount": 45, // 随机生成合理评论数
    "forwards": 12, // 随机生成合理转发数
    "comments": [ // 必须为每条帖子生成 3-6 条代表性的热门评论
      {
        "authorName": "评论者网名",
        "authorAvatar": "", // 可以为空
        "content": "评论内容（风格应多样化：玩梗、幽默、认同、吃瓜或质疑等，体现热评氛围。严禁在content中包含表情包文本）",${M&&M.length>0?`
        "emoticons": ["表情名称1"], // 可从<可用表情包>中挑选名称填入，没有适合的或不想用则为空数组`:""}
        "time": "刚刚",
        "replyTo": "被回复人网名" // 如果是直接回复帖子，此项可省略或为空。如果是回复其他评论，填写被回复人的网名
      }
    ]
  }
]
</输出格式>`,L},$n=($={})=>{const{worldName:P="未命名世界",worldDesc:k="这是一个默认的世界观",worldBooksContent:I="",userProfile:i=null,characters:r=[],superTopics:_=[],emoticonGroups:M=[],posts:G=[],videos:T=[],existingHotSearches:V=[]}=$,J=i?.weiboProfile?.name||i?.name||"用户",R=it(r,i),L=je(R);let x=`<系统设定>
你被用户（${J}）唤醒了，你无时无刻不为用户服务。
你是一个用于模拟“微博”信息流的后端内容生成引擎，此时此刻用户进入了微博的“发现”页面，并点击了刷新热搜。
你要根据提供的世界观、角色信息以及用户状态，生成 5-10 个符合这个世界逻辑的【热搜话题】，并为每个热搜生成 3-5 条相关联的【代表性帖子】。
这些热搜需要符合真实微博的热搜特点：
- 国民舆论、泛娱乐与商业化
- 动态平衡（算法保障公共价值）
- 用户高参与（情绪驱动）
- 媒体信源（权威的媒体报道，严肃内容）
必须始终铭记：用户只是在刷新热搜列表，你只需生成给用户推荐的热搜及对应帖子，不允许代替用户生成任何操作。
</系统设定>

<世界观数据>
[世界名称]: ${P}
[世界描述]: ${k}
[附加世界书知识]:
${I||"暂无"}
</世界观数据>

`;if(i){const y=i.weiboProfile?.name||i.name||"未知",w=i.weiboProfile?.socialPersona||"无";x+=`<当前登录用户(面具)>
网名: ${y}
社交人设: ${w}
</当前登录用户(面具)>

`}if(r&&r.length>0){let y="",w=r.map(p=>{const F=p.weiboProfile?.name||p.nickname||p.name,Z=p.weiboProfile?.certifications&&p.weiboProfile.certifications.length>0?p.weiboProfile.certifications.join(", "):"无",ae=p.weiboProfile?.followers||0,te=p.weiboProfile?.socialPersona||"无",U=p.location?`${p.location.virtual||""} ${p.location.reality?.city||""}`.trim():"未知",q=`    - 姓名: ${p.name||"未知"}
    - 角色ID: ${p.id||"未知"}
    - 核心人设: ${p.persona||"无"}
    - 所在地: ${U}`,Y=xe(p.id,F,G,T);return Y&&(y+=Y),`- 网名: ${F} | 角色ID: ${p.id} | 认证: ${Z} | 粉丝: ${ae} | 社交人设: ${te}
  人物设定:
${q}`}).join(`
`);x+=`<该世界常驻故事角色(NPC)列表>
这些角色活跃在微博上。他们可能会作为某些热搜话题的当事人被讨论，或者参与到话题的讨论中。
${w}
</该世界常驻故事角色(NPC)列表>

`,y&&(x+=`<角色微博数据>
<微博数据>
${y}</微博数据>
</角色微博数据>

`)}if(V&&V.length>0){const y=V.map(w=>w.title).join("、");x+=`<已有热搜话题记录>
以下是当前已经存在的热搜话题，【绝对禁止】生成与这些话题相同、相似或前后逻辑混乱的热搜：
${y}
</已有热搜话题记录>

`}if(_&&_.length>0){const y=_.filter(w=>w.isFollowed);if(y.length>0){const w=y.map(p=>`- #${p.name}#: 讨论度 ${p.postsCount||0} | 简介: ${p.desc||"无"}`).join(`
`);x+=`<推荐机制：用户关注>
你可以选择极少用户感兴趣且讨论度高的超话相关内容作为热搜，但热搜占比不能超过百分之15%（1-2条）。
以下是用户关注的超话标签：
${w}
</推荐机制：用户关注>

`}}if(M&&M.length>0){const y=M.map(w=>{const p=w.emoticons.map(F=>F.name).join(", ");return`- 分组: ${w.name} | 包含的表情: ${p}`}).join(`
`);x+=`<可用表情包>
如果要在评论中使用表情包，请将其放在新增的 \`emoticons\` 数组字段中。
可用列表：
${y}
</可用表情包>

`}const S=["*强制数量要求*：生成 **5-10个热搜话题**。为每个热搜话题生成 **3-5条相关帖子**。每条帖子的评论区生成 **2-5条代表性评论**。","*强制去重逻辑*：生成的热搜话题绝不能与<已有热搜话题记录>中的话题重复，必须确保话题全新且在时间线逻辑上合理（不要自相矛盾）。","角色历史数据参考规则：若要生成角色相关热搜，你可以参考<角色微博数据>中角色的过往帖子与视频，以确保内容的连续性和角色行为的一致性。但绝对禁止直接抄袭或生成与历史数据在主题、核心事件上高度相似的内容。","绝对禁止模拟当前登录用户去“发帖”或“评论”。","帖子绝大部分必须是来自**根据世界观随机生成的普通路人/媒体账号/营销号**。常驻故事角色（NPC）作为发帖人应占少数。","帖子内容必须符合设定的世界观逻辑。",L,"热搜类型要多样化：社会新闻、娱乐吃瓜、搞笑日常、世界观内的特殊事件等。"];M&&M.length>0&&S.push(_e()),S.push('标签格式规则：\n   - 生成帖子的 `tags` 字段时，`name` 属性的值【严禁】包含任何 `#` 号等特殊符号。\n   - sample：正确的写法是 `"name": "日常"`，前端系统会自动处理标签的外观显示。\n   - 【严禁操作】：绝对禁止在正文 `content` 中手写任何带有 # 号的标签文本！请将所有标签纯文本放入 `tags` 数组，系统会自动完成UI渲染。');const C=S.map((y,w)=>`${w+1}. ${y}`).join(`
`);return x+=`<生成规则>
${C}
</生成规则>

`,x+=`<输出格式>
请严格输出一个标准的 JSON 数组，不要包含任何 markdown 代码块（如 \`\`\`json ），直接输出 JSON 文本。格式如下：
[
  {
    "id": "1", // 热搜排名或唯一标识
    "title": "热搜话题名称(不要带#号)",
    "score": "345.6万", // 热度值，合理生成
    "tag": "爆", // 标签，如 "爆", "热", "新"，或者 "" (空字符串)
    "tagType": "boom", // 对应样式类名，如 "boom"(红), "hot"(红), "new"(黄)，或者 ""
    "posts": [
      {
        "authorName": "发帖人网名(媒体/路人/NPC)",
        "authorNpcId": "如果是NPC填角色ID，否则为 null",
        "certifications": ["enterprise"], // 权威/大V用户请在此数组中填入以下【一个】指定关键词: "enterprise"(蓝V), "media"(红V), "personal"(金V), "school"(绿V)。普通用户则为空数组[]。
        "isAnonymous": false,
        "content": "帖子的正文内容",
        "tags": [{"name": "纯文字标签名"}], // 必须包含该热搜话题本身作为一个标签
        ${Fe(R)}
        "time": "几分钟前 / 几小时前",
        "likes": 5432,
        "commentsCount": 123,
        "forwards": 456,
        "comments": [
          {
            "authorName": "评论者网名",
            "authorAvatar": "",
            "content": "评论内容",${M&&M.length>0?`
            "emoticons": ["表情名称1"], // 可从<可用表情包>中挑选名称填入，没有适合的或不想用则为空数组`:""}
            "time": "刚刚",
            "replyTo": ""
          }
        ]
      }
    ]
  }
]
</输出格式>`,x},Cn=($={})=>{const{worldName:P="未命名世界",worldDesc:k="这是一个默认的世界观",worldBooksContent:I="",userProfile:i=null,characters:r=[],topic:_=null,emoticonGroups:M=[],count:G=8,posts:T=[],videos:V=[]}=$,J=i?.weiboProfile?.name||i?.name||"用户",R=it(r,i),L=je(R);let x=`<系统设定>
你被用户（${J}）唤醒了，你无时无刻不为用户服务。
你是一个用于模拟“微博”信息流的后端内容生成引擎，此时此刻用户进入了「${_?.name||"未知"}」超话板块。
你要根据提供的世界观、角色信息、用户状态以及该超话的设定，生成 ${G} 条符合这个板块逻辑的微博帖子推荐给用户。
该世界的微博是一个类似真实微博的公共社交论坛，用户可以在上面分享日常、参与话题讨论。
但你必须始终铭记：用户只是在刷新超话列表，并没有进行任何操作，你只需生成给用户推荐的帖子本身，不允许代替用户生成任何帖子或者回复动作。
</系统设定>

<当前世界设定>
[世界名称]: ${P}
[世界描述]: ${k}
[附加世界书知识]:
${I||"暂无"}
</当前世界设定>

<超话详细设定>
超话名称: ${_?.name||"未知"}
讨论度/帖子数: ${_?.postsCount||0}
粉丝数: ${_?.fansCount||0}
简介: ${_?.desc||"无"}
活跃度: ${_?.activityLevel||"普通"}
交流规则: ${_?.rules||"本超话属于正常交流区域，氛围比较随意。"}
</超话详细设定>

`;if(i){const y=i.weiboProfile?.name||i.name||"未知",w=i.weiboProfile?.certifications||i.certifications,p=w&&w.length>0?w.join(", "):"无",F=i.weiboProfile?.following||i.following||0,Z=i.weiboProfile?.followers||i.followers||0,ae=i.weiboProfile?.likes||i.likes||0,te=i.weiboProfile?.socialPersona||"无";i.persona,x+=`<用户信息>
网名: ${y}
认证信息: ${p}
关注数: ${F}
粉丝数: ${Z}
获赞数: ${ae}
社交人设: ${te}
用户真实姓名:${i.name||"未知"}
</用户信息>

`}if(r&&r.length>0){let y="",w=r.map(p=>{const F=p.weiboProfile?.name||p.nickname||p.name,Z=p.weiboProfile?.certifications&&p.weiboProfile.certifications.length>0?p.weiboProfile.certifications.join(", "):"无",ae=p.weiboProfile?.followers||0,te=p.weiboProfile?.likes||0,U=p.weiboProfile?.socialPersona||"无",q=p.location?`${p.location.virtual||""} ${p.location.reality?.city||""}`.trim():"未知",Y=p.relationships?JSON.stringify(p.relationships):"无",oe=p.chatStyle||"未知",le=`    - 姓名: ${p.name||"未知"}
    - 角色ID: ${p.id||"未知"}
    - 核心人设: ${p.persona||"无"}
    - 关系网: ${Y}
    - 所在地: ${q}
    - 线上风格: ${oe}`,pe=xe(p.id,F,T,V);return pe&&(y+=pe),`- 网名: ${F} | 角色ID: ${p.id} | 认证: ${Z} | 粉丝: ${ae} | 获赞: ${te} | 社交人设: ${U}
  人物设定:
${le}`}).join(`
`);x+=`<该世界常驻故事角色(NPC)列表>
这些角色活跃在微博上。
【重要限制】：在决定这些常驻角色是否亲自发帖或参与评论时，你必须先核对该角色的“核心人设”与当前“超话板块（${_?.name||"未知"}）”的调性是否匹配！只有当角色对该板块感兴趣时（例如：活泼的人参与日常吐槽，但高冷的人绝对不会参与八卦讨论），才允许他们亲自参与讨论。否则，绝对不能让他们亲自发帖或评论。
${w}
</该世界常驻故事角色(NPC)列表>

`,y&&(x+=`<角色微博数据>
<微博数据>
${y}</微博数据>
</角色微博数据>

`)}if(M&&M.length>0){const y=M.map(w=>{const p=w.emoticons.map(F=>F.name).join(", ");return`- 分组: ${w.name} | 包含的表情: ${p}`}).join(`
`);x+=`<可用表情包>
当前世界有以下绑定的表情包，你构造帖子的评论时，可以使用这些表情包增加评论区的氛围趣味。
如果你决定让评论者在评论中使用表情包，请不要将表情名称写在 \`content\` 里，而是将其放在新增的 \`emoticons\` 数组字段中（例如 \`["大笑", "吃瓜"]\`）。
可用列表：
${y}
</可用表情包>

`}const S=["绝对禁止模拟当前登录用户去“发帖”、“评论”或“点赞”。你生成的都是用户视角下他人的帖子。","【核心要求：路人与常驻角色比例】为了保证微博推送机制信息流的真实感，你生成的帖子参与者（发帖、评论）必须绝大部分都来自**根据世界观随机生成的普通路人网友**。若需安排常驻故事角色（NPC）参与发帖/评论交流，应该只占据10%以下的比例，需严格遵守上文的【人设匹配原则】！","【超话规则遵循机制】 通常超话专区的帖子会遵循<超话详细设定>中的交流规则。为了真实性，偶尔可以允许极少数的帖子/评论存在违犯该超话交流规则的情况，如：不了解规则、轻微违规或打擦边球的情况，例如新人不懂规矩的提问、或者一些模糊地带的讨论。需要在该帖子的评论中安排路人提醒。","帖子内容必须符合设定的世界观逻辑。","文本可以带有 emo、网感、幽默或对应角色人设的语气，要有“活人味”。",`【分类生成要求 - 极度重要】你必须一次性混合生成不同分类的帖子。在 JSON 数组的每一个帖子对象中，**绝对必须**包含一个名为 \`topicTabType\` 的顶级字段，它的值**只能且必须是** "最新"、"热门" 或 "精华" 之一！
   - 分类比例：必须生成多条 "最新" 和 "热门" 帖子；"精华" 帖子可选（0-1条）。
   - 分类风格差异：
     * "最新"：偏向实时动态，日常吐槽，生动有活人味，时间必须为刚发布（如“刚刚”、“X分钟前”），点赞数通常较低。
     * "热门"：极高的话题度，容易引起吃瓜和激烈讨论，点赞和评论数较高。
     * "精华"：长篇干货、极高水准配图或深度情感长文，点赞数在几千到数万级别。`,"每条帖子必须严格包含下面要求的所有 JSON 字段，缺一不可。",L,'当生成【匿名发帖】需将 JSON 中的 "isAnonymous" 设置为 true。"authorName" 必须固定填写为 "匿名用户"。'];M&&M.length>0&&S.push(_e()),S.push(`标签格式规则：
   - 生成帖子的 \`tags\` 字段时，\`name\` 属性的值【严禁】包含任何 \`#\` 号等特殊符号。
   - sample：正确的写法是 \`"name": "日常"\`，前端系统会自动处理标签的外观显示。
   - 【严禁操作】：绝对禁止在正文 \`content\` 中手写任何带有 # 号的标签文本！请将所有标签纯文本放入 \`tags\` 数组，系统会自动完成UI渲染。
   - 必须确保必定包含当前超话的名称 "${_?.name||"未知"}"。`,"角色历史数据参考规则：你可以参考<角色微博数据>中角色的过往帖子与视频，以确保内容的连续性和角色行为的一致性。但绝对禁止直接抄袭或生成与历史数据在主题、核心事件上高度相似的内容。");const C=S.map((y,w)=>`${w+1}. ${y}`).join(`
`);return x+=`<生成规则>
${C}
</生成规则>

<输出格式>
请严格输出一个标准的 JSON 数组，不要包含任何 markdown 代码块（如 \`\`\`json ），直接输出 JSON 文本。格式如下：
[
  {
    "authorName": "发帖人网名(必须是NPC列表中的人，或者符合世界观的路人，若匿名则为'匿名用户')",
    "authorNpcId": "如果发帖人是NPC列表中的人，请严格填写其角色ID；如果是随机生成的路人或匿名发帖，必须填写 null",
    "certifications": ["enterprise"], // 权威/大V用户请在此数组中填入以下【一个】指定关键词: "enterprise"(蓝V), "media"(红V), "personal"(金V), "school"(绿V)。普通用户则为空数组[]。
    "isAnonymous": false, // 是否匿名，10%-20%概率为true
    "content": "帖子的正文内容",
    "topicTabType": "最新", // 【极其重要】这必须是 "最新"、"热门" 或 "精华" 之一，绝不可遗漏！
    "tags": [{"name": "纯文字标签名1"}, {"name": "纯文字标签名2"}], // 注意不用包含任何 # 号！
    ${Fe(R)}
    "time": "几分钟前 / 几小时前",
    "likes": 123, // 随机生成合理点赞数
    "commentsCount": 45, // 随机生成合理评论数
    "forwards": 12, // 随机生成合理转发数
    "comments": [ // 必须为每条帖子生成 3-6 条代表性的热门评论
      {
        "authorName": "评论者网名",
        "authorAvatar": "", // 可以为空
        "content": "评论内容（风格应多样化：玩梗、幽默、认同、吃瓜或质疑等，体现热评氛围。严禁在content中包含表情包文本）",${M&&M.length>0?`
        "emoticons": ["表情名称1"], // 可从<可用表情包>中挑选名称填入，没有适合的或不想用则为空数组`:""}
        "time": "刚刚",
        "replyTo": "被回复人网名" // 如果是直接回复帖子，此项可省略或为空。如果是回复其他评论，填写被回复人的网名
      }
    ]
  }
]
</输出格式>`,x},xt=($={})=>{const{worldName:P="未命名世界",worldDesc:k="这是一个默认的世界观",worldBooksContent:I="",userProfile:i=null,characters:r=[],emoticonGroups:_=[],post:M=null,timeElapsed:G="一段时间",posts:T=[],videos:V=[]}=$,J=i?.weiboProfile?.name||i?.name||"用户";let R=`<系统设定>
你被用户（${J}）唤醒了，你无时无刻不为用户服务。
你是一个用于模拟“微博”信息流的后端内容生成引擎，此时此刻用户准备查看一条帖子的评论区。
你的任务是根据提供的世界观、当前帖子旧有详情信息、已有评论以及角色信息，生成该帖子后续——包括【评论互动】、【帖子数据更新】，使其看起来像是一个真实活跃的评论区。
该世界的微博是一个类似真实微博的公共社交论坛，用户可以在上面分享日常、参与话题讨论。
但你必须始终铭记：你只需生成其他网友和角色的评论，绝对不允许代替用户（${J}）生成任何回复动作。
</系统设定>

<世界观数据>
[世界名称]: ${P}
[世界描述]: ${k}
[附加世界书知识]:
${I||"暂无"}
</世界观数据>

`;if(i){const C=i.weiboProfile?.name||i.name||"未知",y=i.weiboProfile?.certifications||i.certifications,w=y&&y.length>0?y.join(", "):"无",p=i.weiboProfile?.following||i.following||0,F=i.weiboProfile?.followers||i.followers||0,Z=i.weiboProfile?.likes||i.likes||0,ae=i.weiboProfile?.bio||i.bio||"无",te=i.weiboProfile?.socialPersona||"无",U=i.persona||"无";R+=`<当前登录用户(面具)>
网名: ${C}
认证信息: ${w}
关注数: ${p}
粉丝数: ${F}
获赞数: ${Z}
微博个签: ${ae}
社交人设: ${te}
人物设定:
  - 姓名: ${i.name||"未知"}
  - 核心人设: ${U}
</当前登录用户(面具)>

`}if(r&&r.length>0){let C="",y=r.map(w=>{const p=w.weiboProfile?.name||w.nickname||w.name,F=`    - 姓名: ${w.name||"未知"}
    - 角色ID: ${w.id||"未知"}
    - 核心人设: ${w.persona||"无"}`,Z=xe(w.id,p,T,V);return Z&&(C+=Z),`- 网名: ${p} | 角色ID: ${w.id}
  人物设定:
${F}`}).join(`
`);R+=`<该世界常驻故事角色(NPC)列表>
这些角色活跃在微博上。
【重要限制】：
  - 大数据隔离机制：在决定这些常驻角色是否亲自发帖或参与评论时，根据他们的设定和与帖主的关联程度，并核对该角色的“核心人设”与当前帖子的调性是否匹配（如：喜欢赛车的角色通常不会刷到美妆类型帖子）。
  - 少数情况他们有可能会刷到不感兴趣的领域（这篇帖子）并参与评论。
  - 如果该帖子评论@了某个角色，该角色通常会看见并参与回复，无视大数据隔离机制。
${y}
</该世界常驻故事角色(NPC)列表>

`,C&&(R+=`<角色微博数据>
<微博数据>
${C}</微博数据>
</角色微博数据>

`)}if(_&&_.length>0){const C=_.map(y=>{const w=y.emoticons.map(p=>p.name).join(", ");return`- 分组: ${y.name} | 包含的表情: ${w}`}).join(`
`);R+=`<可用表情包>
当前世界有以下绑定的表情包。在构造评论时，可适当使用增加氛围趣味，控制带表情的评论比例在 20%~30% 左右。
可用列表：
${C}
</可用表情包>

`}if(M){const C=M.tags&&M.tags.length>0?M.tags.join(", "):"无";let y="无";M.images&&M.images.length>0&&(y=M.images.map(p=>{if(typeof p=="string"&&p.startsWith("http")&&p.includes("KEYWORD="))try{const Z=new URL(p).pathname.split("/");return`[AI生成图片]: 画面要素是 ${decodeURIComponent(Z[Z.length-1])} (URL: ${p})`}catch{return`[图片]: URL: ${p}`}else return typeof p=="string"&&p.startsWith("weibo_post_img_")?"[用户上传的本地图片]: 该图片可能包含有关日常、风景或具体的物品细节。":p.base64?`[用户上传的图片Base64数据]: ${p.base64.substring(0,100)}...`:`[图片]: ${p}`}).join(`
  `));const w=M.comments&&M.comments.length>0?M.comments.map(p=>{const F=p.replyTo?` (回复 @${p.replyTo})`:"",Z=p.emoticons&&p.emoticons.length>0?` [表情: ${p.emoticons.join(",")}]`:"";return`- ${p.authorName}${F}: ${p.content}${Z} [${p.time}]`}).join(`
`):"暂无评论";R+=`<当前帖子的全部文本数据>
发帖人: ${M.authorName}
正文: ${M.content}
带的标签: ${C}
发帖时间: ${M.time}
当前点赞数: ${M.likes||0}
当前评论数: ${M.commentsCount||0}
当前转发数: ${M.forwards||0}
附带图片信息:
  ${y}

[已有评论区数据] (按时间先后排列):
${w}
</当前帖子的全部文本数据>

【系统通知】：距离用户上次查看该帖子，已经过去了 ${G}。请根据这个时间流逝，模拟在此期间发生的后续互动。


`}(M?.comments?.filter(C=>C.authorName===J)||[]).length>0&&(R+=`<用户互动追踪>
【重要提醒】：系统检测到当前登录用户（${J}）已经在评论区发表了言论。
在本次生成的后续评论中，你必须选择合适的角度（无论是常驻角色还是随机网友），生成至少 1-2 条明确回复 @${J}（即字段 "replyTo": "${J}"）并对其言论进行互动的评论，以增强用户的参与感。
</用户互动追踪>

`);const x=["绝对禁止模拟当前登录用户去“评论”。你生成的都是用户视角下他人的评论。",`延续感与时间推移：
  - 根据系统通知中“经过的时间（${G}）”，合理生成在此期间发生的新评论。
  - 新生成的评论应合理分布在这段“经过的时间”内，时间格式例如"1小时前"、"30分钟前"或"刚刚"。
  - 根据已有评论区的数据，更新后续评论。符合真实社交论坛的现状：可能从原本主题跑偏、剧情反转、意见不一互怼、NPC被艾特加入讨论、打广告等。`,"比例控制：必须绝大部分都来自**根据世界观随机生成的普通路人网友**。若需安排常驻故事角色（NPC）参与发帖/评论交流，应该只占据10%以下的比例，需严格遵守上文的【人设匹配原则】。如果帖主本人参与回复，使用帖主网名。","文本可以带有 emo、网感、幽默或对应角色人设的语气，要有“活人味”。","评论数量：根据已有评论的热度，生成 4-8 条符合逻辑的连贯后续评论。"];_&&_.length>0&&x.push(_e()),x.push("角色历史数据参考规则：你可以参考<角色微博数据>中角色的过往帖子与视频，以确保内容的连续性和角色行为的一致性。但绝对禁止直接抄袭或生成与历史数据在主题、核心事件上高度相似的内容。");const S=x.map((C,y)=>`${y+1}. ${C}`).join(`
`);return R+=`<生成规则>
${S}
</生成规则>

<输出格式>
请严格输出一个标准的 JSON 对象，不要包含任何 markdown 代码块（如 \`\`\`json ），直接输出 JSON 文本。格式如下：
{
  "updatedPostStats": {
    "likes": 125, // 模拟互动后的新点赞数，应合理大于等于当前点赞数
    "forwards": 13 // 模拟互动后的新转发数，应合理大于等于当前转发数
  },
  "newComments": [
    {
      "authorName": "评论者网名",
      "authorAvatar": "", // 可以为空
      "content": "评论内容（严禁包含表情包文本）",${_&&_.length>0?`
      "emoticons": ["表情名称1"], // 可从<可用表情包>中挑选，没有则为空数组`:""}
      "time": "新评论的发布时间(如：30分钟前、刚刚)", // 根据经过的${G}合理分配时间
      "replyTo": "被回复人网名" // 回复其他评论或帖主时填写网名，直接评论原帖则为空
    }
  ]
}
</输出格式>`,R},kn=($={})=>{const{worldName:P="未命名世界",worldDesc:k="这是一个默认的世界观",worldBooksContent:I="",userProfile:i=null,character:r=null,userPosts:_=[],charPosts:M=[],emoticonGroups:G=[],memoryText:T=""}=$;let J=`「当前所在APP场景」
你正在微博APP内的私信聊天场景，和${i?.name||i?.weiboProfile?.name||"用户"}聊天。

`;const R=r?.location,L=R&&R.virtual||"",x=R?.reality?.city||"",S=i?.location,C=S&&S.virtual||"",y=S?.reality?.city||"";let w="";const p=R?.reality?.timezone||"Asia/Shanghai",F=S?.reality?.timezone||"Asia/Shanghai";try{const U=Je().tz(F).utcOffset(),Y=(Je().tz(p).utcOffset()-U)/60;Math.abs(Y)>.1&&(w=`
- 你们之间存在约 ${Math.round(Math.abs(Y))}小时时差。`)}catch{}if(J+=`「双方所在地」
- 你所在的位置：${L}${x?`（现实参考：${x}）`:""}
- 喵喵所在的位置：${C}${y?`（现实参考：${y}）`:""}${w}

你自然理解双方各自所处的现实环境、时间与距离。但只有当前话题、行为或场景实际涉及地点、天气、出行、时差等因素时，才自然纳入判断；不要为了体现地域差异而主动提及。
`,J+=`「${P}的世界观」
[世界名称]: ${P}
[世界描述]: ${k}
[附加世界书知识]:
${I||"暂无"}

`,r){const U=r.weiboProfile?.name||r.nickname||r.name,q=r.weiboProfile?.certifications||r.certifications,Y=q&&q.length>0?q.join(", "):"无",oe=r.weiboProfile?.following||r.following||0,le=r.weiboProfile?.followers||r.followers||0,pe=r.weiboProfile?.likes||r.likes||0,Te=r.weiboProfile?.bio||r.bio||"无",ke=r.weiboProfile?.socialPersona||"无";J+=`${tn(r)}
<微博社交身份>
网名: ${U}
认证信息: ${Y}
关注数: ${oe}
粉丝数: ${le}
获赞数: ${pe}
微博个签: ${Te}
社交人设: ${ke}
</微博社交身份>

`}if(i){const U=i.weiboProfile?.name||i.name||"未知",q=i.weiboProfile?.certifications||i.certifications,Y=q&&q.length>0?q.join(", "):"无",oe=i.weiboProfile?.following||i.following||0,le=i.weiboProfile?.followers||i.followers||0,pe=i.weiboProfile?.likes||i.likes||0,Te=i.weiboProfile?.bio||i.bio||"无",ke=i.weiboProfile?.socialPersona||"无",Ue=i.persona||"无";J+=`「你的对话对象信息」
<微博社交身份>
网名: ${U}
认证信息: ${Y}
关注数: ${oe}
粉丝数: ${le}
获赞数: ${pe}
微博个签: ${Te}
社交人设: ${ke}
</微博社交身份>
<人物设定>
姓名: ${i.name||"未知"}
核心人设: ${Ue}
</人物设定>
「鲜活的近期记忆」
${T||"暂无近期记忆"}

`}const Z=$.activityLogText||"（暂无具体操作记录）";J+=`「你的APP活动记录」
${Z}

`;const ae=U=>{const q=U.comments&&U.comments.length>0?U.comments.map(Y=>`  - ${Y.authorName}: ${Y.content}`).join(`
`):"  暂无评论";return`[时间: ${U.time}] 内容: ${U.content}
评论区:
${q}`};J+=`「微博动态社交环境」
`,_.length>0?J+=`【对方近期的微博动态】:
${_.map(ae).join(`

`)}

`:J+=`【对方近期的微博动态】: 暂无

`,M.length>0?J+=`【你近期的微博动态】:
${M.map(ae).join(`

`)}

`:J+=`【你近期的微博动态】: 暂无

`;let te="";return G&&G.length>0&&(te=`「表情包与使用」
${G.map(q=>{const Y=q.emoticons.map(oe=>oe.name).join(", ");return`- 分组: ${q.name} | 包含的表情: ${Y}`}).join(`
`)}

【表情包使用规则】
1. 格式：[EMOTICON:表情名]
2. 限制：只能使用上述列表中的表情名称。
3. 原则：根据当下情绪和聊天情境自然使用，不需要每次回复都发送。
4. 独立气泡：表情包必须作为 reply 数组中的独立元素输出，不要和文字写在同一个字符串中。例如：\`"reply": ["你好呀", "[EMOTICON:开心]"]\`。`),J+=`${te?te+`

`:""}「核心对话准则 (Core Dialogue Guidelines)」
1. **角色沉浸核心**: 你就是【${r?.name||"当前角色"}】。你的所有回复都完全基于你的性格、记忆和当前处境，使用自然、生活化的口语。
2. 保持人设一致性，绝不脱离你的人物设定和世界观。
3. 结合对方的动态和地理位置进行交流。
4. 回复口吻应符合真实网民私聊风格，不需要旁白或动作描写。
5. **有节奏的回复**: 不要总是把所有话塞进一条长消息里。像真人一样，有节奏地、一条一条地发送消息（可以通过返回多条回复实现）。
6. **消息分隔**: reply 中的每个元素代表一条独立发送的消息气泡。规定输出在 reply 中的内联工具指令（如 [IMAGE:...]、[VOICE:...]、[TRANSFER:...]）也应作为独立元素。

「聊天记录格式说明」
你接收到的历史消息和最新消息均为 JSON 格式：
- \`displayType\`：消息的展示方式或卡片类型（如：文本消息、表情包、图片、位置、来自 晋江、来自：购物APP）。若末尾额外带有 \`[微信]\`、\`[微博]\`、\`[iMessage]\`，仅代表此条记录当时显示在哪个聊天界面。
- \`content\`：表示消息的具体内容。
- \`tim\`：表示消息发送的模拟时间（如果有）。

[注意]：这些记录只用于帮助你理解上下文，你回复时不要模仿输出相同结构。

「行动规划」
根据聊天记录，思考对话意图并规划你的下一步回复。回复前，先在"thinking"字段完成内心思考，再输出正式回复。

「最终输出规则」
你的最终输出**必须**且**只能**是一个标准的 JSON 对象，不要包含任何 Markdown 代码块标记（如 \`\`\`json）。所有字符串内容（包括 reply 内联工具指令及当前协议中的字符串字段）都必须正确转义，确保最终回复始终是可直接解析的合法 JSON；需要换行时使用 \`\\n\`，不得在字符串内部直接回车换行。
JSON 格式如下：
{
  "thinking": "你的思考过程。分析对方意图，联系上下文和你的设定草拟回复...",
  "reply": [
    "第一条消息内容",
    "第二条消息内容（如果需要分多条发送，像真人一样有节奏）"
  ]${G&&G.length>0?`,
  "emoticons": ["表情名称1"] // 可选，如果没有或不想用则为空数组或省略`:""}
}

「当前互动记录说明」
接下来的数组消息是当前通讯软件中已经显示过的交流、互动与相关事件。请结合前文信息理解当前进展，再回应最新消息。
这些记录只用于理解上下文，回复时仍需遵守最终输出规则。
`,J},he=($,P="暂无")=>String($??"").replace(/\s*\r?\n\s*/g," ").replace(/[ \t]{2,}/g," ").trim()||P,Gt=($=[],{includeId:P=!1}={})=>$.length?$.map((k,I)=>{const i=Array.isArray(k.tags)?k.tags.map(_=>he(_?.name||_,"")).filter(Boolean).join("、"):"",r=Array.isArray(k.comments)?k.comments.slice(0,3).map(_=>he(_.authorName||"网友")+"："+he(_.content||"")).join("；"):"";return[P?"- ID: "+(k.id||"暂无"):"- 第 "+(I+1)+" 条","  发布时间: "+he(k.time),"  正文: "+he(k.content),"  标签: "+(i||"无"),"  互动: 点赞 "+(k.likes||0)+"｜评论 "+(k.commentsCount||0)+"｜转发 "+(k.forwards||0),"  评论摘要: "+(r||"暂无")].join(`
`)}).join(`

`):"- 暂无已有帖子。",An=($=[])=>$.length?$.map((P,k)=>{const I=Array.isArray(P.tags)?P.tags.map(r=>he(r?.name||r,"")).filter(Boolean).join("、"):he(String(P.tags||"").replace(/#/g," "),""),i=Array.isArray(P.comments)?P.comments.slice(0,3).map(r=>he(r.authorName||"网友")+"："+he(r.content||"")).join("；"):"";return["- 第 "+(k+1)+" 条","  发布时间: "+he(P.time||P.createTime),"  标题: "+he(P.title),"  文案: "+he(P.desc),"  画面: "+he(P.narrative),"  标签: "+(I||"无"),"  互动: 点赞 "+(P.likes||0)+"｜评论 "+(P.commentsCount||0)+"｜转发 "+(P.forwards||0),"  评论摘要: "+(i||"暂无")].join(`
`)}).join(`

`):"- 暂无已有视频。",In=($=[])=>$.length?$.map((P,k)=>["- 第 "+(k+1)+" 位","  网名: "+(P?.weiboProfile?.name||P?.nickname||P?.name||"未知"),"  真实姓名: "+(P?.name||"未知"),"  角色ID: "+(P?.id||"暂无"),"  社交人设: "+(P?.weiboProfile?.socialPersona||"无"),"  核心人设: "+(P?.persona||"无")].join(`
`)).join(`
`):"- 暂无常驻故事角色。",Dt=($={})=>{const{corePrompt:P="",userProfile:k=null,targetCharacter:I=null,characters:i=[],emoticonGroups:r=[],posts:_=[],videos:M=[]}=$,G=I?.weiboProfile?.name||I?.nickname||I?.name||"我",T=I?.id||"",V=Sn(I);V.map(C=>({id:C.id,name:C.name,hasAppearanceNote:!!C.identityReference?.appearanceNote,imageCount:C.identityReference?.images?.length||0}));const J=_.filter(C=>C.authorNpcId===T||C.authorName===G).slice(0,12),R=M.filter(C=>C.authorNpcId===T||C.authorName===G).slice(0,8),L=k?.weiboProfile||{},x=L.name||k?.nickname||k?.name||"用户",S=r.map(C=>"- 分组："+C.name+"｜表情："+(C.emoticons||[]).map(y=>y.name).join("、")).join(`
`);return[P,"<展示微博动态任务>","所以你接下来需要以自己的身份，更新补充近期的微博动态。","你的视频、帖子需要贴合自己的个人设定和微博身份，以你个人的口吻自然发布；不得暴露、暗示或借此知晓对方正在私下查看你的主页与动态。","【你当前微博身份】","真实姓名: "+(I?.name||"未知"),"微博网名: "+G,"粉丝数: "+(I?.weiboProfile?.followers||0),"关注数: "+(I?.weiboProfile?.following||0),"获赞数: "+(I?.weiboProfile?.likes||0),"个人简介: "+(I?.weiboProfile?.bio||"无"),"社交人设: "+(I?.weiboProfile?.socialPersona||"无"),"【用户信息】","网名: "+x,"粉丝数: "+(L.followers||0),"关注数: "+(L.following||0),"获赞数: "+(L.likes||0),"个人简介: "+(L.bio||"无"),"社交人设: "+(L.socialPersona||"无"),"真实姓名: "+(k?.name||"未知"),`【该世界常驻故事角色(NPC)列表】
`+In(i.filter(C=>C?.id!==T)),"【你的微博动态】","1. 你的已有帖子（仅展示近期 "+J.length+` 条）
`+Gt(J),"2. 你的已有视频（仅展示近期 "+R.length+` 条）
`+An(R),S?`【可用表情包】
`+S:"",`【生成规则】
- 根据你的日常习惯、近期心情、个人设定与微博身份，自由安排这次更新：生成 3–5 条微博帖子和 1–4 条视频；内容与发布时间要有自然变化，不要像同一时刻批量发布。
- 帖子与视频都应体现你自己的生活、兴趣、工作或社交状态；已有动态只作连续性参考，不复用相同主题、事件或核心措辞，也不复述私密聊天内容。
- 每一条帖子和每一个视频都必须附带 4–6 条评论；评论符合平台氛围，以路人评论为主，必要时再安排与内容、人设相符的常驻角色互动。
- 新内容按从新到旧排列。帖子 time 使用“刚刚 / 几分钟前 / 几小时前”等自然时间；系统会按本次最新内容自动后推旧帖时间。
- tags 使用纯文字标签名，正文不要手写 #标签#。帖子配图遵循下方图片规则；视频必须填写 narrative、musicTag 与完整评论。
- `+je(V)+(S?`
- `+_e():""),`【输出格式】
最终只能输出一个标准 JSON 对象，不要 Markdown、解释、thinking、reply 或 actions。
{
  "posts": [{"authorName": "`+G+'", "authorNpcId": "'+T+'", "content": "微博正文", "tags": [{"name": "纯文字标签"}], '+Fe(V)+`"time": "刚刚", "likes": 123, "commentsCount": 45, "forwards": 12, "comments": [{"authorName": "随机路人网名1", "authorAvatar": "", "content": "符合语境的评论内容", "time": "刚刚", "replyTo": ""}, {"authorName": "随机路人网名2", "authorAvatar": "", "content": "符合语境的评论内容", "time": "刚刚", "replyTo": ""}, {"authorName": "随机路人网名3", "authorAvatar": "", "content": "符合语境的评论内容", "time": "刚刚", "replyTo": ""}, {"authorName": "随机路人网名4", "authorAvatar": "", "content": "符合语境的评论内容", "time": "刚刚", "replyTo": ""}]}],
  "videos": [{"authorName": "`+G+'", "authorNpcId": "'+T+`", "title": "视频标题", "desc": "视频文案", "narrative": "具体视频画面描述", "musicTag": "治愈", "tags": "#标签1 / #标签2", "likes": 125000, "commentsCount": 4500, "forwards": 8800, "favorites": 6000, "comments": [{"authorName": "随机路人网名1", "authorAvatar": "", "content": "符合语境的评论内容", "time": "刚刚"}, {"authorName": "随机路人网名2", "authorAvatar": "", "content": "符合语境的评论内容", "time": "刚刚"}, {"authorName": "随机路人网名3", "authorAvatar": "", "content": "符合语境的评论内容", "time": "刚刚"}, {"authorName": "随机路人网名4", "authorAvatar": "", "content": "符合语境的评论内容", "time": "刚刚"}]}]
}`,"</展示微博动态任务>"].filter(Boolean).join(`

`)},Lt=($={})=>{const{corePrompt:P="",targetCharacter:k=null,posts:I=[],worldCharacters:i=""}=$,r=k?.id||"",_=k?.weiboProfile?.name||k?.nickname||k?.name||"我",M=I.filter(G=>G.authorNpcId===r).slice(0,3);return[P,"<角色自主发布微博>","你正在以自己的微博身份使用微博。你可以发布一条新微博、清理一条自己的旧微博，或同时完成两者；不需要向用户汇报，也不得暴露任何私密聊天内容。",`【你的微博身份】
网名: `+_+`
角色ID: `+r+`
社交人设: `+(k?.weiboProfile?.socialPersona||"无"),i?`【该世界常驻角色与NPC（不含你）】
`+i:"",`【你的近期微博】
`+Gt(M,{includeId:!0}),`【规则】
- 本次必须完成至少一项：新增 1 条微博，或删除 1 条上方近期微博中列出的 ID；两项都为空是不允许的。
- 新增时 post 输出一条自然、具体且符合当下状态的微博，且不得与近期微博在主题、核心事件或措辞上高度重复；不新增时 post 输出 null。
- 删除时仅可删除上方列出的 1 条自己的旧微博 ID，必须有合理理由；不删除时 deletePostId 输出 null。
- 不发视频、不评论、不私信、不@任何人。
- 新增的帖子需有 4–6 条自然评论；标签使用纯文本，正文不要手写 #标签#。
- `+je(),`【输出格式】
仅输出一个标准 JSON 对象，不要 Markdown 或解释。
发布时必须使用以下完整结构（post.content 必填，不得为空）：
{
  "post": {
    "content": "微博正文",
    "tags": [{"name": "纯文字标签"}],
    "images": [],
    "likes": 0,
    "commentsCount": 0,
    "forwards": 0,
    "comments": [{"authorName": "路人网名", "authorAvatar": "", "content": "自然评论", "time": "刚刚", "replyTo": ""}]
  },
  "deletePostId": null
}
仅删除时：{ "post": null, "deletePostId": "上方列出的自己的旧微博ID" }。
同时发布并删除时，在完整 post 对象外填写上方列出的 deletePostId。`,"</角色自主发布微博>"].filter(Boolean).join(`

`)},at=Object.freeze(Object.defineProperty({__proto__:null,_buildCharacterWeiboData:xe,_getEmoticonRule:_e,getSuperTopicRefreshPrompt:Cn,getWeiboAutonomousPostPrompt:Lt,getWeiboCharacterProfilePrompt:Dt,getWeiboCommentGenerationPrompt:xt,getWeiboDirectMessagePrompt:kn,getWeiboHotSearchPrompt:$n,getWeiboRefreshPrompt:jt},Symbol.toStringTag,{value:"Module"}));function ie($){if(!$||typeof $!="string")return 0;if($==="刚刚")return 1;if($==="昨天")return 1440;if($==="前天")return 2880;let P=0;const k=$.match(/(\d+)\s*天/);k&&(P+=parseInt(k[1],10)*24*60);const I=$.match(/(\d+)\s*个?小时/);I&&(P+=parseInt(I[1],10)*60);const i=$.match(/(\d+)\s*分钟/);return i&&(P+=parseInt(i[1],10)),P||1}function me($){if($<1)return"刚刚";if($<60)return`${Math.floor($)}分钟前`;const P=Math.floor($/60);if(P<24)return`${P}小时前`;const k=Math.floor(P/24),I=P%24;return I===0?`${k}天前`:`${k}天${I}小时前`}const Me=$=>$?.weiboProfile?.avatar||$?.avatar||"",Mn=($,{characterId:P,authorName:k}={})=>{if(!$)return null;if(P){const I=$.get(P);if(I)return I}if(!k)return null;for(const I of $.values())if(I.weiboProfile?.name===k||I.name===k||I.nickname===k)return I;return null},Rn=({characters:$,currentMask:P,characterId:k,authorName:I,fallbackAvatar:i=""}={})=>{const r=P?.weiboProfile?.name||P?.name;if(I==="当前用户"||r&&I===r)return Me(P);const _=Mn($,{characterId:k,authorName:I});return _?Me(_):i},Oe="weibo_worlds_data",Wt=$=>JSON.parse(JSON.stringify($)),Nn=cn("weibo",()=>{const $=Q(!1);let P=null,k=Promise.resolve(),I=!1;const i=Q([]),r=Q(null),_=Q(!1),G=Q((()=>{try{const e=localStorage.getItem("weibo_hot_searches_by_world");return e?JSON.parse(e):{}}catch{return{}}})()),T=ye(()=>r.value?G.value[r.value]||[]:[]),V=Q([]),J=ye(()=>{if(!r.value)return[];const e=i.value.find(t=>t.id===r.value);return!e||!e.characterIds?[]:V.value.filter(t=>e.characterIds.includes(t))}),R=Q([]),L=Q([]),x=Q([{name:"娱乐八卦",postsCount:154e5,fansCount:35e6,signInCount:12e4,interestRank:1,desc:"娱乐圈最新八卦新鲜事，吃瓜前线。",color:"#ff9a9e"},{name:"问答求助",postsCount:34e4,fansCount:89e4,signInCount:15e3,interestRank:45,desc:"互帮互助，有问题来这里提问。",color:"#a1c4fd"},{name:"校园墙",postsCount:85e3,fansCount:21e4,signInCount:5e3,interestRank:120,desc:"青春校园日常，吐槽、表白、寻物。",color:"#8fd3f4"},{name:"情感树洞",postsCount:56e4,fansCount:12e5,signInCount:23e3,interestRank:23,desc:"倾听心声，分享情感故事，温暖的树洞。",color:"#f6d365"},{name:"灵异怪谈",postsCount:45e3,fansCount:15e4,signInCount:3e3,interestRank:180,desc:"奇闻异事，都市传说探讨。",color:"#ff9a9e"},{name:"游戏电竞",postsCount:23e5,fansCount:85e5,signInCount:85e3,interestRank:5,desc:"开黑组队，赛事讨论，游戏攻略。",color:"#a1c4fd"},{name:"二次元",postsCount:12e5,fansCount:45e5,signInCount:45e3,interestRank:12,desc:"ACG同好交流基地，追番补款必备。",color:"#8fd3f4"},{name:"日常吐槽",postsCount:89e4,fansCount:23e5,signInCount:34e3,interestRank:18,desc:"生活点滴吐槽，释放压力的好地方。",color:"#f6d365"}]),S=Q({}),C=Q({}),y=Q({}),w=Q({}),p=Q([]),F=Q([]),Z=Q(!1),ae=Q(!1),te=Q({minCount:8,maxCount:10,tags:[],customTags:[]}),U=Q({}),q=Q([]),Y=Q({}),oe=Q({}),le=Q({}),pe=Q({}),Te=()=>Wt({worlds:i.value,activeWorldId:r.value,following:V.value,superTopics:R.value,followedRecommendedTopics:L.value,postsByWorld:S.value,videosByWorld:C.value,characterVideosByWorld:y.value,collectionsByWorld:w.value,videoSettings:te.value,profilePinnedPostIds:p.value,unreadPostIds:F.value,stories:q.value,passerbyAvatarMap:U.value}),ke=()=>{if(!$.value||I)return k;const e=Te();return k=k.catch(()=>{}).then(()=>Tt(Oe,e)).catch(t=>{console.error("保存微博主数据到 IndexedDB 失败:",t)}),k},Ue=(e={})=>{i.value=Array.isArray(e.worlds)?e.worlds:[],r.value=e.activeWorldId||null,V.value=Array.isArray(e.following)?e.following:[],R.value=Array.isArray(e.superTopics)?e.superTopics:[],L.value=Array.isArray(e.followedRecommendedTopics)?e.followedRecommendedTopics:[],S.value=e.postsByWorld&&typeof e.postsByWorld=="object"?e.postsByWorld:{},C.value=e.videosByWorld&&typeof e.videosByWorld=="object"?e.videosByWorld:{},y.value=e.characterVideosByWorld&&typeof e.characterVideosByWorld=="object"?e.characterVideosByWorld:{},w.value=e.collectionsByWorld&&typeof e.collectionsByWorld=="object"?e.collectionsByWorld:{},te.value={...te.value,...e.videoSettings||{}},p.value=Array.isArray(e.profilePinnedPostIds)?e.profilePinnedPostIds:[],F.value=Array.isArray(e.unreadPostIds)?e.unreadPostIds:[],q.value=Array.isArray(e.stories)?e.stories:[],U.value=e.passerbyAvatarMap&&typeof e.passerbyAvatarMap=="object"?e.passerbyAvatarMap:{}},Vt=async()=>{if(!$.value)return P||(P=(async()=>{let e=await mn(Oe);if(!e||typeof e!="object"){const t=localStorage.getItem(Oe);if(t){const o=JSON.parse(t);await Tt(Oe,Wt(o)),localStorage.removeItem(Oe),e=o}}I=!0,Ue(e),I=!1,$.value=!0})().catch(e=>{throw I=!1,console.error("加载微博主数据失败:",e),e}).finally(()=>{P=null}),P)};un([i,r,V,R,L,S,C,y,w,te,p,F,q,U],ke,{deep:!0});const Ge=()=>{try{return Be.calendar.currentDate.getTime()}catch(e){return console.warn("[Weibo DM] 读取剧情时间失败，回退到真实时间:",e),Date.now()}},lt=e=>{if(pe.value[e]===void 0){const t=localStorage.getItem(`weibo_dm_history_limit_${e}`);pe.value[e]=t?parseInt(t,10):30}return pe.value[e]},Jt=(e,t)=>{let o=parseInt(t,10);(isNaN(o)||o<1)&&(o=1),o>500&&(o=500),pe.value[e]=o,localStorage.setItem(`weibo_dm_history_limit_${e}`,o.toString())},Ft=e=>{le.value[e]=!le.value[e],localStorage.setItem(`weibo_dm_context_shared_${e}`,le.value[e])},ct=e=>{if(le.value[e]===void 0){const t=localStorage.getItem(`weibo_dm_context_shared_${e}`);le.value[e]=t==="true"}return le.value[e]},ut=(e,t)=>{const n=`weibo_dm_${r.value||"default_world"}_${t||"default_mask"}_${e}`,c=localStorage.getItem(n);if(c)try{oe.value[e]=JSON.parse(c)}catch{oe.value[e]=[]}else oe.value[e]=[];return oe.value[e]},mt=(e,t,o,s=!1)=>{const d=`weibo_dm_${r.value||"default_world"}_${t||"default_mask"}_${e}`;oe.value[e]||ut(e,t);const b=Be.currentViewingChat===`weibo_${e}`,m=s&&!b;oe.value[e].push(o),localStorage.setItem(d,JSON.stringify(oe.value[e])),ze(e,t,o,m)},dt=async(e,t)=>{const o=oe.value[e]||[],s=await St(o,e,t);if(!s)return;let n=null,c=s;try{const a=s.match(/\{[\s\S]*\}/);a&&(n=JSON.parse(a[0]))}catch(a){console.warn("Failed to parse AI reply as JSON, attempting regex fallback",a);try{const h=s.match(/"reply"\s*:\s*(\[.*?\])/s);if(h&&h[1]){n={reply:JSON.parse(h[1])};const u=s.match(/"emoticons"\s*:\s*(\[.*?\])/s);if(u&&u[1])try{n.emoticons=JSON.parse(u[1])}catch{}}}catch(h){console.warn("Regex fallback failed",h)}!n&&(s.includes('"thinking"')||s.includes('thinking"'))&&(c="...")}const d=re.characters.get(e)||{},b=d.weiboProfile?.name||d.nickname||d.name||"聊天对象";Me(d);const m=a=>{mt(e,t,a,!0),Be.currentViewingChat===`weibo_${e}`||Be.showNotification({title:b,message:a.text||"[表情包]",icon:null,source:"微博",remark:"",action:{type:"navigate",target:"weibo",view:"direct_message",params:{id:e}}})};if(n&&n.reply){const a=Array.isArray(n.reply)?n.reply:[n.reply],h=n.emoticons||[];for(let g=0;g<a.length;g++){const u=a[g];g>0&&await new Promise(A=>setTimeout(A,1500+Math.random()*1e3));const l=Ge()+g,f={id:l,type:"received",text:u,time:new Date(l).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"}),worldTime:l};m(f)}if(h&&h.length>0){await new Promise(l=>setTimeout(l,1e3+Math.random()*500));const g=Ge()+a.length,u={id:g,type:"received",text:"",emoticons:h,time:new Date(g).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"}),worldTime:g};m(u)}}else{const a=Ge(),h={id:a,type:"received",text:c,time:new Date(a).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"}),worldTime:a};m(h)}},Ut=e=>{const t=r.value||"default_world",o=e||"default_mask",s=`weibo_dm_${t}_${o}_`,n={};for(let c=0;c<localStorage.length;c++){const d=localStorage.key(c);if(d&&d.startsWith(s)){const b=d.substring(s.length);try{const m=JSON.parse(localStorage.getItem(d));if(Array.isArray(m)&&m.length>0){const a=m[m.length-1],h=localStorage.getItem(`weibo_dm_unread_${t}_${o}_${b}`),g=h?parseInt(h,10):0;let u=a.text||"";!u&&a.emoticons&&a.emoticons.length>0&&(u="[表情包]"),n[b]={lastMessage:u,lastMessageTime:a.time,unreadCount:g,timestamp:a.id}}}catch{}}}Y.value=n},ze=(e,t,o,s=!1)=>{const n=r.value||"default_world",c=t||"default_mask";let d=o.text||"";!d&&o.emoticons&&o.emoticons.length>0&&(d="[表情包]");const b=Y.value[e]?.unreadCount||0,m=s?b+1:b;Y.value={...Y.value,[e]:{lastMessage:d,lastMessageTime:o.time,unreadCount:m,timestamp:o.id}},localStorage.setItem(`weibo_dm_unread_${n}_${c}_${e}`,m.toString())},zt=(e,t)=>{const o=r.value||"default_world",s=t||"default_mask";Y.value[e]&&(Y.value[e].unreadCount=0),localStorage.removeItem(`weibo_dm_unread_${o}_${s}_${e}`)},Ht=async(e,t)=>{const o=oe.value[e]||[];if(o.length===0)return;let s=-1;for(let a=o.length-1;a>=0;a--)if(o[a].type==="sent"){s=a;break}if(s===-1||s===o.length-1)return;const n=o.slice(0,s+1);oe.value[e]=n;const b=`weibo_dm_${r.value||"default_world"}_${t||"default_mask"}_${e}`;localStorage.setItem(b,JSON.stringify(n));const m=n[n.length-1]||{text:"",time:new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})};ze(e,t,m,!1),await dt(e,t)},Kt=e=>{let t=0,o=0,s=0,n=0;e.activityLevel==="热门"?(t=Math.floor(Math.random()*198e5)+2e5,o=t+Math.floor(Math.random()*2e7)+5e5,s=Math.floor(Math.random()*1e5)+5e4,n=Math.floor(Math.random()*50)+1):e.activityLevel==="大众"?(t=Math.floor(Math.random()*8e5)+2e5,o=t+Math.floor(Math.random()*1e6)+1e5,s=Math.floor(Math.random()*5e4)+1e4,n=Math.floor(Math.random()*200)+51):e.activityLevel==="小众"?(t=Math.floor(Math.random()*900)+100,o=t+Math.floor(Math.random()*2e3)+100,s=Math.floor(Math.random()*200)+10,n=Math.floor(Math.random()*1e3)+1e3):(t=Math.floor(Math.random()*9e3)+1e3,o=t+Math.floor(Math.random()*2e4)+1e3,s=Math.floor(Math.random()*1e3)+200,n=Math.floor(Math.random()*750)+251);const c={id:Date.now().toString(),createdAt:Date.now(),fansCount:o,postsCount:t,signInCount:s,interestRank:n,...e};return R.value.unshift(c),c},Xt=e=>{const t=V.value.indexOf(e),o=t!==-1;if(o?V.value.splice(t,1):V.value.push(e),E.currentMask){E.currentMask.weiboProfile||(E.currentMask.weiboProfile={following:0,followers:0});let n=Number(E.currentMask.weiboProfile.following)||0;n=o?Math.max(0,n-1):n+1,E.currentMask.weiboProfile.following=n,E.saveUserData&&E.saveUserData()}const s=re.characters.get(e);if(s){s.weiboProfile||(s.weiboProfile={following:0,followers:0});let n=Number(s.weiboProfile.followers)||0;n=o?Math.max(0,n-1):n+1,s.weiboProfile.followers=n,re.saveCharacters&&re.saveCharacters()}return!o},qt=async e=>{const t=R.value.find(o=>o.id===e);if(t){if(t.avatarId)try{await dn(t.avatarId)}catch(o){console.error("删除超话头像失败:",o)}R.value=R.value.filter(o=>o.id!==e)}},Yt=e=>{e.worldBookEntryIds!==void 0&&(e.worldBookIds=[...e.worldBookEntryIds],delete e.worldBookEntryIds);const t={id:Date.now().toString(),createdAt:Date.now(),...e};i.value.push(t),i.value.length===1&&(r.value=t.id)},Zt=e=>{const t=e.authorName===(E.currentMask?.weiboProfile?.name||E.currentMask?.name),o={id:`story_${Date.now()}`,authorName:e.authorName,authorAvatar:t?"":e.authorAvatar,createTime:Date.now(),type:e.type,content:e.content,image:e.image||null,imageId:e.imageId||null,maskId:e.maskId,isRead:!1};q.value.unshift(o),e.maskId&&JSON.parse(localStorage.getItem("user_data")||"{}")},Qt=e=>{q.value.forEach(t=>{t.authorName===e&&!t.isRead&&(t.isRead=!0)})},He=()=>{const e=Ne.getSceneBoundProviderId("weiboImage");return e?Ne.isSceneEnabledForProvider(e,"weiboImage"):!1},Pe=(e=r.value)=>{if(!e)return{posts:[],videos:[],postSnapshots:{},videoSnapshots:{}};const t=w.value[e];return t?(Array.isArray(t.posts)||(t.posts=[]),Array.isArray(t.videos)||(t.videos=[]),(!t.postSnapshots||typeof t.postSnapshots!="object")&&(t.postSnapshots={}),(!t.videoSnapshots||typeof t.videoSnapshots!="object")&&(t.videoSnapshots={}),t):(w.value[e]={posts:[],videos:[],postSnapshots:{},videoSnapshots:{}},w.value[e])},eo=e=>{if(!e||typeof e!="object")return null;try{return JSON.parse(JSON.stringify(e))}catch{return{...e}}},ft=(e,t,o=r.value)=>!o||!t?null:e==="video"?[...C.value[o]||[],...y.value[o]||[]].find(s=>s.id===t)||null:(S.value[o]||[]).find(s=>s.id===t)||null,ht=(e,t,o=null,s=r.value)=>{const n=eo(o||ft(e,t,s));if(!n||!t)return;const c=Pe(s),d=e==="video"?"videoSnapshots":"postSnapshots";c[d][t]=n},pt=(e,t=r.value)=>{if(!t)return;const o=Pe(t);(e==="video"?o.videos:o.posts).forEach(n=>ht(e,n,null,t)),w.value={...w.value}},to=(e,t)=>{const o=e==="video"?"videos":"posts";return Pe()[o].includes(t)},oo=(e,t)=>{if(!t||!r.value)return!1;const o=Pe(),s=e==="video"?"videos":"posts",n=e==="video"?"videoSnapshots":"postSnapshots",c=o[s],d=c.indexOf(t);return d===-1?(c.push(t),ht(e,t)):(c.splice(d,1),delete o[n][t]),w.value={...w.value},d===-1},gt=e=>{if(!r.value)return[];const t=Pe(),o=e==="video"?t.videos:t.posts,s=e==="video"?t.videoSnapshots:t.postSnapshots;return o.map(n=>ft(e,n)||s[n]).filter(Boolean)},no=ye(()=>gt("post")),so=ye(()=>gt("video")),De=()=>{const e=E.currentMask;return new Set([e?.weiboProfile?.name,e?.name].map(t=>String(t||"").trim()).filter(Boolean))},ro=(e,t=r.value)=>{if(!e)return!1;const o=w.value[t]?.posts||[];return!!e.authorNpcId||!!e.authorMaskId||o.includes(e.id)||!e.authorMaskId&&De().has(e.authorName)},Ke=e=>{if(!e||typeof e!="object"||Array.isArray(e))return{prompt:"",description:"",faceReferences:[]};const t=String(e.prompt||"").trim(),o=String(e.description||e.prompt||"").trim();return{prompt:t,description:o||t,faceReferences:Array.isArray(e.faceReferences)?e.faceReferences:[]}},ao=async({authorNpcId:e,imageBlob:t,description:o})=>{if(!e||!t)return;const s=re.characters.get(e);if(!s||(s.imageConfig||{}).autoSaveGeneratedToAlbum!==!0)return;await Pn().saveGeneratedCharacterImage(e,{imageBlob:t,description:o,albumName:"微博生图",albumDescription:"在微博平台分享过的图片动态",fallbackDescription:"微博生图"})},Ae=(e,t="virtual")=>({isSimulated:!0,generationStatus:t,description:String(e||"").trim()||"图片"}),Le=(e=[])=>(Array.isArray(e)?e:[]).reduce((t,o)=>{const s=Array.isArray(o?.images)?o.images:[];return t+s.filter(n=>!n||typeof n!="object"||Array.isArray(n)?!1:!!Ke(n).prompt&&He()).length},0),we=e=>{const t=Array.isArray(e?.images)?e.images:[];return t.length===0?[]:t.map(o=>{if(typeof o=="string")return o;const s=Ke(o);return!s.prompt||!He()?Ae(s.description||"图片"):Ae(s.description||"图片生成中","pending")})},io=async(e,t=0,o=null,s=null,n=0)=>{const c=Array.isArray(e?.images)?e.images:[];if(c.length===0)return{...e,images:[]};const d=await Promise.all(c.map(async(b,m)=>{if(typeof b=="string")return b;if(!b||typeof b!="object")return Ae("图片","failed");const a=Ke(b),h=a.prompt,g=a.description||"图片";if(!h||!He())return Ae(g);try{const u=await Ne.generateImageBlobForScene({sceneId:"weiboImage",prompt:h,faceReferences:a.faceReferences,onStatusChange:f=>{typeof o=="function"&&o(m,f,g),f==="retrying"&&s?.reportRetry(n+m,`微博第 ${n+m+1} 张图片生成失败，正在重试`)}});if(!u?.imageBlob)throw new Error("生图结果缺少图片数据");const l=`weibo_post_img_${Date.now()}_${t}_${m}_${Math.random().toString(36).slice(2,7)}`;return await yn(l,u.imageBlob),await ao({authorNpcId:e?.authorNpcId||null,imageBlob:u.imageBlob,description:g}),s?.markSuccess(n+m),l}catch(u){return s?.markFailure(n+m,"微博生图失败，已退回虚拟描述"),console.error("[微博生图] 单张配图生成失败，已降级为虚拟占位图:",{error:u?.message||u,prompt:h,imageIndex:m}),Ae(g,"failed")}}));return{...e,images:d}},wt=(e,t,o=r.value)=>{if(!o||!S.value[o])return!1;const s=S.value[o],n=s.find(c=>c.id===e);return n?(n.images=t,S.value[o]=[...s],!0):!1},vt=e=>{r.value&&(G.value={...G.value,[r.value]:e},localStorage.setItem("weibo_hot_searches_by_world",JSON.stringify(G.value)))},Ee=async(e,t,o=0,s=null,n=0,c=r.value)=>{const d=we(t);if(d.length===0)return;const b=await io(t,o,(m,a,h)=>{if(a!=="retrying")return;const g=c&&S.value[c]?S.value[c].find(l=>l.id===e):null;if(!g||!Array.isArray(g.images))return;const u=[...g.images];u[m]=Ae(h,"retrying"),wt(e,u,c)},s,n);wt(e,b.images.length>0?b.images:d.map(m=>({...m,generationStatus:"failed"})),c)},Ie=(e,t=0,o=r.value)=>{if(!o)return null;S.value[o]||(S.value[o]=[]);const s=S.value[o],n=e.tags?e.tags.map(l=>l.name):[];let c=e.content;if(n.length>0){const l=n.map(f=>`#${f}#`).join(" ");c=c?`${c}

${l}`:l}const b=E.currentMask?.id||null,m=De(),a=e.authorMaskId?e.authorMaskId===b:m.has(e.authorName);let h="";if(e.isAnonymous)h="";else if(a)h=Me(E.currentMask);else if(e.authorNpcId)h="";else if(U.value[e.authorName])h=U.value[e.authorName];else{const l=Ze.value;l.length>0&&(h=l[Math.floor(Math.random()*l.length)].imageId||"",U.value[e.authorName]=h)}let g=e.topicTabType;g||((e.likes||0)>=5?g="热门":g="最新");const u={id:`post_${Date.now()}_${t}_${Math.random().toString(36).substr(2,9)}`,authorName:e.isAnonymous?"匿名用户":e.authorName||"当前用户",authorNpcId:e.isAnonymous?null:e.authorNpcId||null,authorMaskId:e.isAnonymous?null:e.authorMaskId||(a?b:null),authorAvatar:h,createTime:Date.now(),time:e.time||"刚刚",content:c,topicTabType:g,images:e.images||[],tags:n,certifications:e.certifications||[],likes:e.likes!==void 0?e.likes:0,commentsCount:e.commentsCount!==void 0?e.commentsCount:0,forwards:e.forwards!==void 0?e.forwards:0,isSaved:!1,isLiked:!1,isPinned:!1,comments:e.comments||[]};if(s.unshift(u),pt("post",o),s.length>40)for(let l=s.length-1;l>=40;l--){const f=s[l];ro(f,o)||s.splice(l,1)}return u.authorName!=="匿名用户"&&F.value.push(u.id),S.value[o]=[...s],u},lo=e=>{const t=F.value.indexOf(e);t!==-1&&F.value.splice(t,1)},co=e=>{const t=p.value.indexOf(e);return t!==-1?(p.value.splice(t,1),{success:!0}):p.value.length>=3?{success:!1,message:"最多只能置顶3条微博"}:(p.value.push(e),{success:!0})},uo=e=>{e&&(te.value={...te.value,...e})},mo=()=>{Z.value=!0},fo=()=>{Z.value=!1},Xe=(e,t=0)=>{if(!r.value)return;y.value[r.value]||(y.value[r.value]=[]);const o=y.value[r.value],n=E.currentMask?.id||null,c=De(),d=e.authorMaskId?e.authorMaskId===n:c.has(e.authorName),b={id:`char_video_${Date.now()}_${t}_${Math.random().toString(36).substr(2,9)}`,createTime:Date.now(),authorName:e.authorName||"当前用户",authorNpcId:e.authorNpcId||null,authorMaskId:e.authorMaskId||(d?n:null),title:e.title||"",desc:e.desc||"",tags:e.tags||[],likes:e.likes||0,commentsCount:e.commentsCount||0,forwards:e.forwards||0,favorites:e.favorites||0,isLiked:!1,comments:e.comments||[],...e};if(o.unshift(b),o.length>50){const m=new Set(Pe(r.value).videos);for(let a=o.length-1;a>=50;a--){const h=o[a];!!h.authorNpcId||!!h.authorMaskId||m.has(h.id)||!h.authorMaskId&&c.has(h.authorName)||o.splice(a,1)}}y.value[r.value]=[...o]},yt=(e,t=r.value)=>{if(!t)return;const o=S.value[t];if(!o)return;const s=o.findIndex(n=>n.id===e);s!==-1&&(o.splice(s,1),S.value={...S.value})},ho=({postIds:e=[],videoIds:t=[]}={})=>{if(!r.value)return{postCount:0,videoCount:0,collectionCount:0};const o=new Set(e.filter(Boolean)),s=new Set(t.filter(Boolean)),n=r.value,c=S.value[n]||[],d=y.value[n]||[],b=c.filter(u=>o.has(u.id)).length,m=d.filter(u=>s.has(u.id)).length;b&&(S.value[n]=c.filter(u=>!o.has(u.id)),S.value={...S.value}),m&&(y.value[n]=d.filter(u=>!s.has(u.id)),y.value={...y.value});const a=Pe(),h=a.posts.filter(u=>o.has(u)),g=a.videos.filter(u=>s.has(u));return a.posts=a.posts.filter(u=>!o.has(u)),a.videos=a.videos.filter(u=>!s.has(u)),h.forEach(u=>delete a.postSnapshots[u]),g.forEach(u=>delete a.videoSnapshots[u]),w.value={...w.value},{postCount:b,videoCount:m,collectionCount:h.length+g.length}},po=(e,t)=>{if(!r.value||!S.value[r.value])return;const o=S.value[r.value],s=o.findIndex(n=>n.id===e);if(s!==-1){const n=o[s];let c=n.createTime;n.comments&&n.comments.length>0&&n.comments.forEach(m=>{m.createTime&&m.createTime>c&&(c=m.createTime)});const d=Math.max(1,Math.round((Date.now()-c)/(60*1e3)));if(n.time&&n.time!=="刚刚"){const m=ie(n.time);n.time=me(m+d)}else n.time==="刚刚"&&(n.time=me(d));n.createTime&&(n.createTime-=d*60*1e3),n.comments&&n.comments.length>0&&n.comments.forEach(m=>{if(m.time&&m.time!=="刚刚"){const a=ie(m.time);m.time=me(a+d)}else m.time==="刚刚"&&(m.time=me(d));m.createTime&&(m.createTime-=d*60*1e3)}),n.comments||(n.comments=[]);const b={id:`comment_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,authorName:t.isAnonymous?"匿名用户":E.currentMask?.weiboProfile?.name||E.currentMask?.name||"当前用户",authorAvatar:"",content:t.text,emoticons:t.emoticons||[],createTime:Date.now(),time:"刚刚",replyTo:t.replyTo||null};n.comments.push(b),n.commentsCount=(n.commentsCount||0)+1,S.value=JSON.parse(JSON.stringify(S.value))}},go=(e,t)=>{if(!r.value||!C.value[r.value])return;const o=C.value[r.value],s=o.findIndex(n=>n.id===e);if(s!==-1){const n=o[s];n.comments||(n.comments=[]);const c={id:`comment_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,authorName:t.isAnonymous?"匿名用户":E.currentMask?.weiboProfile?.name||E.currentMask?.name||"当前用户",authorAvatar:"",content:t.text,emoticons:t.emoticons||[],createTime:Date.now(),time:"刚刚",replyTo:t.replyTo||null};n.comments.push(c),n.commentsCount=(n.commentsCount||0)+1,C.value=JSON.parse(JSON.stringify(C.value))}},wo=e=>{if(!r.value)return{success:!1,message:"未找到当前世界"};S.value[r.value]||(S.value[r.value]=[]);const t=S.value[r.value],o=t.findIndex(s=>s.id===e);if(o!==-1){const s=t[o].isPinned;if(!s){const n=t[o].authorName;if(t.filter(d=>d.authorName===n&&d.isPinned).length>=3)return{success:!1,message:"最多只能置顶3条微博"}}return t[o]={...t[o],isPinned:!s},S.value={...S.value},{success:!0}}return{success:!1,message:"未找到帖子"}},vo=e=>{e.worldBookEntryIds!==void 0&&(e.worldBookIds=[...e.worldBookEntryIds],delete e.worldBookEntryIds);const t=i.value.findIndex(o=>o.id===e.id);t!==-1&&(i.value[t]={...i.value[t],...e})},yo=e=>{i.value=i.value.filter(t=>t.id!==e),r.value===e&&(r.value=i.value.length>0?i.value[0].id:null)},bo=e=>{r.value=e},Po=e=>{L.value.find(t=>t.name===e.name)||L.value.push({...e,isFollowed:!0})},So=e=>{L.value=L.value.filter(t=>t.name!==e)},$o=async e=>{`${e}`;const t=Se();if(t.refreshStatus.visible||!r.value)return;let o=null,s=!1;const n=S.value[r.value];if(n){const c=n.findIndex(d=>d.id===e);c!==-1&&(o=n[c])}if(!o){const c=C.value[r.value];if(c){const d=c.findIndex(b=>b.id===e);d!==-1&&(o=c[d],s=!0)}}if(o){t.showRefreshLoading("正在为您生成更多评论...");try{const c=i.value.find(W=>W.id===r.value);if(!c)throw new Error("找不到当前选中的世界观");const d=c.characterIds?c.characterIds.map(W=>re.characters.get(W)).filter(Boolean):[],b=$e();let m="";if(c.worldBookIds&&c.worldBookIds.length>0){const W={worldBookEntryIds:c.worldBookIds},O=Ce(W,b.worldBooks,"",{includeGlobal:!0});m=[O.top,O.beforeRole,O.afterRole,O.bottom].filter(Boolean).join(`

`)}let a=new Map;c.boundEmoticonGroups&&c.boundEmoticonGroups.forEach(W=>a.set(W.id,W)),i.value.forEach(W=>{W.id!==c.id&&W.emoticonIsPublic&&W.boundEmoticonGroups&&W.boundEmoticonGroups.forEach(O=>a.set(O.id,O))});const h=Array.from(a.values()),g=Math.floor(Math.random()*290)+10,u=me(g).replace("前","");let l="";if(s){const{getWeiboVideoCommentGenerationPrompt:W}=await fe(async()=>{const{getWeiboVideoCommentGenerationPrompt:O}=await import("./weiboVideo-B5bNVoZj.js");return{getWeiboVideoCommentGenerationPrompt:O}},__vite__mapDeps([0,1,2]),import.meta.url);l=W({worldName:c.name,worldDesc:c.description,worldBooksContent:m,userProfile:E.currentMask,characters:d,emoticonGroups:h,video:o,timeElapsed:u,posts:S.value[r.value]||[],videos:y.value[r.value]||[]})}else l=xt({worldName:c.name,worldDesc:c.description,worldBooksContent:m,userProfile:E.currentMask,characters:d,emoticonGroups:h,post:o,timeElapsed:u,posts:S.value[r.value]||[],videos:y.value[r.value]||[]});const f=await be.callApiWithFailover(l,{temperature:.8}),A=typeof f=="string"?f:f.content,z=A.match(/\{[\s\S]*\}/);if(z)try{const W=JSON.parse(z[0]),O=W.newComments||[],j=W.updatedPostStats;if(j&&(o.likes=j.likes!==void 0?j.likes:o.likes,o.forwards=j.forwards!==void 0?j.forwards:o.forwards),Array.isArray(O)&&O.length>0){if(g>0){if(o.time&&o.time!=="刚刚"){const v=ie(o.time);o.time=me(v+g)}else o.time==="刚刚"&&(o.time=me(g));o.createTime?o.createTime=o.createTime-g*60*1e3:o.createTime=Date.now()-ie(o.time)*60*1e3,o.comments&&o.comments.length>0&&o.comments.forEach(v=>{if(v.time&&v.time!=="刚刚"){const D=ie(v.time);v.time=me(D+g)}else v.time==="刚刚"&&(v.time=me(g));v.createTime?v.createTime=v.createTime-g*60*1e3:v.createTime=Date.now()-ie(v.time)*60*1e3})}o.comments||(o.comments=[]),O.forEach(v=>{const D=ie(v.time||"刚刚"),B={id:`comment_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,authorName:v.authorName||"匿名网友",authorAvatar:v.authorAvatar||"",content:v.content||"",emoticons:v.emoticons||[],createTime:Date.now()-D*60*1e3,time:v.time||"刚刚",replyTo:v.replyTo||null};o.comments.push(B)}),o.commentsCount=(o.commentsCount||0)+O.length,s?C.value=JSON.parse(JSON.stringify(C.value)):S.value=JSON.parse(JSON.stringify(S.value)),`${O.length}`,t.showRefreshSuccess("评论已更新")}else t.showRefreshError("未生成新评论")}catch(W){console.error("JSON解析失败:",W,A),t.showRefreshError("生成失败，请稍后重试")}else console.warn("AI 返回的格式未能匹配 JSON 对象:",A),t.showRefreshError("生成失败，请稍后重试")}catch(c){console.error("生成评论失败",c),t.showRefreshError("生成失败，请稍后重试")}}},Co=()=>{_.value=!0},ko=()=>{_.value=!1},Ao=async()=>{const e=Se();if(!(e.refreshStatus.visible||!r.value)){e.showRefreshLoading("正在为您加载推荐帖子...");try{const t=i.value.find(u=>u.id===r.value);if(!t)throw new Error("找不到当前选中的世界观");const o=t.characterIds?t.characterIds.map(u=>re.characters.get(u)).filter(Boolean):[],s=$e();let n="";if(t.worldBookIds&&t.worldBookIds.length>0){const u={worldBookEntryIds:t.worldBookIds},l=Ce(u,s.worldBooks,"",{includeGlobal:!0});n=[l.top,l.beforeRole,l.afterRole,l.bottom].filter(Boolean).join(`

`)}const c=[...R.value.map(u=>({...u,isFollowed:!0})),...x.value.map(u=>({...u,isFollowed:!!L.value.find(l=>l.name===u.name)}))].filter(u=>u.isFollowed);let d=new Map;t.boundEmoticonGroups&&t.boundEmoticonGroups.forEach(u=>d.set(u.id,u)),i.value.forEach(u=>{u.id!==t.id&&u.emoticonIsPublic&&u.boundEmoticonGroups&&u.boundEmoticonGroups.forEach(l=>d.set(l.id,l))});const b=Array.from(d.values()),m=jt({worldName:t.name,worldDesc:t.description,worldBooksContent:n,userProfile:E.currentMask,characters:o,superTopics:c,emoticonGroups:b,posts:S.value[r.value]||[],videos:y.value[r.value]||[]}),a=await be.callApiWithFailover(m,{temperature:.8}),h=typeof a=="string"?a:a.content,g=h.match(/\[\s*\{[\s\S]*\}\s*\]/);if(g){const u=JSON.parse(g[0]);if(Array.isArray(u)){let l=0;if(u.forEach(j=>{if(j.time){const v=ie(j.time);v>l&&(l=v)}}),r.value&&S.value[r.value]){const j=S.value[r.value];j.length>0&&l>0&&j.forEach(v=>{if(v.time&&v.time!=="刚刚"){const D=ie(v.time);v.time=me(D+l)}else v.time==="刚刚"&&(v.time=me(l))})}const f=u.reverse(),A=[],z=Le(f),W=z>0?We({batchName:"微博配图",total:z,successMessage:"微博图片已全部生成完成",failureMessage:"微博生图失败，已退回虚拟描述",source:"微博"}):null;let O=0;for(let j=0;j<f.length;j++){const v=f[j],D={...v,images:we(v)},B=Ie(D,j);if(B){const ce=we(v).filter(de=>de?.generationStatus==="pending").length;A.push(Ee(B.id,v,j,W,O)),O+=ce}}`${u.length}`,e.showRefreshSuccess("刷新成功"),Promise.allSettled(A).catch(j=>{console.error("[微博生图] 推荐帖后台配图任务失败:",j)}).finally(()=>{W?.finalize()})}else e.showRefreshError("刷新失败，请稍后重试")}else console.warn("AI 返回的格式未能匹配 JSON 数组:",h),e.showRefreshError("刷新失败，请稍后重试")}catch(t){console.error("刷新帖子失败",t),e.showRefreshError("刷新失败，请稍后重试")}}},Io=(e={})=>{const t=e.type||"text";if(t==="image")return e.description||e.imageDescription||"[图片]";if(t==="voice")return e.text||e.transcript||e.content||"[语音]";if(t==="emoticon")return e.name||e.content||"[表情]";if(["transfer","转账接收","转账退还"].includes(t)){const o=e.amount?"￥"+e.amount:"",s=e.note||e.content?"备注："+(e.note||e.content):"";return[t==="转账接收"||e.status==="received"?"已收款":t==="转账退还"||e.status==="returned"?"已退还":"发起转账（待收款）",o,s].filter(Boolean).join(" ")}return t==="location"?e.name||e.address||e.content||"[位置]":t==="call"?e.summary||e.content||"[通话记录]":String(e.content||e.text||e.message||"").replace(/\[TIM:[^\]]+\]/g,"").trim()},Mo=e=>e?.remark||e?.nickname||e?.name||e?.weiboProfile?.name||"未知角色",bt=e=>{const t=String(e||"");return t==="user"||t.startsWith("mask:")},No=(e={},{characterId:t="",characterName:o=""}={})=>{const s=String(e.senderId||""),n=String(e.senderName||e.sender||e.role||""),c=e.type||"text",d=c==="system"||n==="system",b=bt(s)||n==="me",m=s===String(t)||n===o;return{sender:d?"system":b?"me":m?o:n||o||"未知角色",time:e.worldTime||e.timestamp||e.createdAt||e.time||"",type:c,content:Io(e).slice(0,180)}},qe=async({character:e,storyline:t,maskName:o})=>{const s=String(e?.id||""),n=Mo(e),c=String(t?.id||e?.activeStorylineId||""),d=(a=[])=>a.slice(-20).map(h=>No(h,{characterId:s,characterName:n})).filter(h=>h.content),b=[],m=d(Array.isArray(t?.chatLogs)?t.chatLogs:Array.isArray(e?.chatLogs)?e.chatLogs:[]);return m.length&&b.push({title:"【与"+o+"的近期聊天记录】",messages:m}),Et.isLoaded||await fn(),Et.conversations.forEach(a=>{if(!(Array.isArray(a?.participantIds)?a.participantIds.map(l=>String(l)):[]).includes(s)||String(a?.storylineId||"")!==c)return;const g=(a.participants||[]).find(l=>String(l?.memberId||"")!==s&&!bt(l?.memberId));if(!g?.memberId)return;const u=d(Array.isArray(a.messages)?a.messages:[]);u.length&&b.push({title:"【与"+(g.name||"其他角色")+"的近期聊天记录】",messages:u})}),Rt.isLoaded||await hn(),pn.isLoaded||await gn(),Rt.groups.forEach(a=>{if(!(Array.isArray(a?.members)&&a.members.some(u=>String(u?.memberId||"")===s)))return;const g=d(wn(a.id));g.length&&b.push({title:"【群聊："+(a.name||"未命名群聊")+"的近期聊天记录】",messages:g})}),b},Ye=(e,t)=>{const o=["【聊天记录说明】","- sender 为 me：用户（"+t+"）","- sender 为 system：系统消息","- sender 为其他名字：对应角色或NPC发言","- time：消息发送时间；type：消息类型；content：消息内容"].join(`
`),s=e.map(n=>n.title+`
`+JSON.stringify(n.messages,null,2));return[o,...s].join(`

`)},_o=async e=>{const t=Se();if(!(t.refreshStatus.visible||!r.value||!e)){t.showRefreshLoading("正在加载该角色的主页帖子与视频...");try{const o=i.value.find(N=>N.id===r.value),s=re.characters.get(e);if(!o)throw new Error("找不到当前选中的世界观");if(!s)throw new Error("找不到目标角色");const n=(o.characterIds||[]).map(N=>re.characters.get(N)).filter(Boolean),c=Array.isArray(s.storylines)?s.storylines.find(N=>N.id===s.activeStorylineId)||s.storylines[0]:null,d=Array.isArray(E.masks)&&E.masks.find(N=>N.id===s.activeMaskId)||null,b=d?.name||d?.nickname||E.currentMask?.name||E.currentMask?.nickname||"用户",m=await qe({character:s,storyline:c,maskName:b}),a=Bt(s,c,"",{appName:"微博",worldBookScope:"character-entry-only",excludeChatSessionWorldBook:!0});if(a?.priorityMap&&Array.isArray(a.sections)&&typeof a?.addSection=="function"){a.priorityMap.worldbook_top=93,a.priorityMap.weibo_world=94;const N=a.sections.find(ue=>ue.key==="time_scene");N&&(N.content=`「当前所在APP场景」
`+b+"正在使用微博查看你的主页。");const ee=a.sections.find(ue=>ue.key==="user_info");ee&&(ee.content=ee.content.replace("「你的对话对象信息」","「用户信息」"));const ve=a.sections.find(ue=>ue.key==="current_state");if(ve){const ue=ve.content.indexOf("「你的APP活动记录」");ue>=0?ve.content=ve.content.slice(ue):a.sections=a.sections.filter(K=>K.key!=="current_state")}a.sections=a.sections.filter(ue=>!["life_schedule","core_dialogue_guidelines"].includes(ue.key)),a.addSection("weibo_world",`「微博世界观」
[世界名称]：`+(o.name||"未命名世界")+`
[世界描述]：`+(o.description||"暂无"),"weibo_world"),a.addSection("personal_social_records",`「你的个人社交记录」
`+Ye(m,b),"recent_activity")}const h=typeof a?.build=="function"?a.build():"",g=Dt({worldName:o.name,worldDesc:o.description,corePrompt:h,userProfile:d,targetCharacter:s,characters:n,superTopics:[...R.value.map(N=>({...N,isFollowed:!0})),...x.value.filter(N=>L.value.some(ee=>ee.name===N.name))],emoticonGroups:o.boundEmoticonGroups||[],posts:S.value[r.value]||[],videos:y.value[r.value]||[]}),u=await be.callApiWithFailover(g,{temperature:.8}),f=(typeof u=="string"?u:u.content)?.match(/\{[\s\S]*\}/);if(!f)throw new Error("AI 返回格式未匹配角色动态对象");const A=JSON.parse(f[0]),z=Array.isArray(A?.posts)?A.posts.slice(0,5):[],W=Array.isArray(A?.videos)?A.videos.slice(0,4):[];if(z.length<3||W.length<1)throw new Error("AI 未返回规定数量的角色帖子或视频");if([...z,...W].some(N=>{const ee=Array.isArray(N?.comments)?N.comments:[];return ee.length<4||ee.length>6}))throw new Error("AI 返回的帖子或视频评论数量不符合 4–6 条要求");const j=z.reduce((N,ee)=>Math.max(N,ie(ee?.time||"刚刚")),0);j>0&&(S.value[r.value]||[]).forEach(N=>{N.time=N.time==="刚刚"?me(j):N.time?me(ie(N.time)+j):N.time});const v=s.weiboProfile?.name||s.nickname||s.name,D=Me(s),B=z.reverse(),ce=[],de=Le(B),se=de>0?We({batchName:"微博配图",total:de,successMessage:"微博图片已全部生成完成",failureMessage:"微博生图失败，已退回虚拟描述",source:"微博"}):null;let H=0;B.forEach((N,ee)=>{const ve={...N,authorName:v,authorNpcId:s.id,images:we(N)},ue=Ie(ve,ee);if(!ue)return;const K=we(N).filter(ne=>ne?.generationStatus==="pending").length;ce.push(Ee(ue.id,N,ee,se,H)),H+=K}),W.reverse().forEach((N,ee)=>Xe({...N,authorName:v,authorNpcId:s.id,authorAvatar:D},ee)),t.showRefreshSuccess("动态加载成功"),Promise.allSettled(ce).catch(N=>console.error("[微博生图] 角色动态后台配图任务失败:",N)).finally(()=>se?.finalize())}catch(o){console.error("生成角色微博动态失败:",o),t.showRefreshError("动态加载失败，请稍后重试")}}},To=async e=>{const t=Se();if(!(t.refreshStatus.visible||!r.value)){t.showRefreshLoading(`正在为您生成${e}超话帖子...`);try{const o=i.value.find(f=>f.id===r.value);if(!o)throw new Error("找不到当前选中的世界观");const s=o.characterIds?o.characterIds.map(f=>re.characters.get(f)).filter(Boolean):[],n=$e();let c="";if(o.worldBookIds&&o.worldBookIds.length>0){const f={worldBookEntryIds:o.worldBookIds},A=Ce(f,n.worldBooks,"",{includeGlobal:!0});c=[A.top,A.beforeRole,A.afterRole,A.bottom].filter(Boolean).join(`

`)}const d=R.value.find(f=>f.name===e)||x.value.find(f=>f.name===e);let b=new Map;o.boundEmoticonGroups&&o.boundEmoticonGroups.forEach(f=>b.set(f.id,f)),i.value.forEach(f=>{f.id!==o.id&&f.emoticonIsPublic&&f.boundEmoticonGroups&&f.boundEmoticonGroups.forEach(A=>b.set(A.id,A))});const m=Array.from(b.values()),{getSuperTopicRefreshPrompt:a}=await fe(async()=>{const{getSuperTopicRefreshPrompt:f}=await Promise.resolve().then(()=>at);return{getSuperTopicRefreshPrompt:f}},void 0,import.meta.url),h=a({worldName:o.name,worldDesc:o.description,worldBooksContent:c,userProfile:E.currentMask,characters:s,topic:d,emoticonGroups:m,count:8,posts:S.value[r.value]||[],videos:y.value[r.value]||[]}),g=await be.callApiWithFailover(h,{temperature:.8}),u=typeof g=="string"?g:g.content,l=u.match(/\[\s*\{[\s\S]*\}\s*\]/);if(l){const f=JSON.parse(l[0]);if(Array.isArray(f)){let A=0;if(f.forEach(D=>{if(D.time){const B=ie(D.time);B>A&&(A=B)}D.tags||(D.tags=[]),D.tags.find(B=>B.name===e)||D.tags.push({name:e})}),r.value&&S.value[r.value]){const D=S.value[r.value];D.length>0&&A>0&&D.forEach(B=>{if(B.time&&B.time!=="刚刚"){const ce=ie(B.time);B.time=me(ce+A)}else B.time==="刚刚"&&(B.time=me(A))})}const z=f.reverse(),W=[],O=Le(z),j=O>0?We({batchName:"微博超话配图",total:O,successMessage:"超话图片已全部生成完成",failureMessage:"超话生图失败，已退回虚拟描述",source:"微博"}):null;let v=0;for(let D=0;D<z.length;D++){const B=z[D];if(!B.topicTabType){const se=B.likes||0;se>50?B.topicTabType="精华":se>=5&&se<=50?B.topicTabType="热门":B.topicTabType="最新"}const ce={...B,images:we(B)},de=Ie(ce,D);if(de){const se=we(B).filter(H=>H?.generationStatus==="pending").length;W.push(Ee(de.id,B,D,j,v)),v+=se}}t.showRefreshSuccess("生成成功"),Promise.allSettled(W).catch(D=>{console.error("[微博生图] 超话帖后台配图任务失败:",D)}).finally(()=>{j?.finalize()})}else t.showRefreshError("生成失败，请稍后重试")}else t.showRefreshError("生成失败，请稍后重试")}catch(o){console.error("超话帖子生成失败",o),t.showRefreshError("生成失败，请稍后重试")}}},Eo=async()=>{const e=Se();if(!(e.refreshStatus.visible||!r.value)){e.showRefreshLoading("正在为您生成微博热搜...");try{const t=i.value.find(l=>l.id===r.value);if(!t)throw new Error("找不到当前选中的世界观");const o=t.characterIds?t.characterIds.map(l=>re.characters.get(l)).filter(Boolean):[],s=$e();let n="";if(t.worldBookIds&&t.worldBookIds.length>0){const l={worldBookEntryIds:t.worldBookIds},f=Ce(l,s.worldBooks,"",{includeGlobal:!0});n=[f.top,f.beforeRole,f.afterRole,f.bottom].filter(Boolean).join(`

`)}const c=[...R.value.map(l=>({...l,isFollowed:!0})),...x.value.map(l=>({...l,isFollowed:!!L.value.find(f=>f.name===l.name)}))].filter(l=>l.isFollowed);let d=new Map;t.boundEmoticonGroups&&t.boundEmoticonGroups.forEach(l=>d.set(l.id,l)),i.value.forEach(l=>{l.id!==t.id&&l.emoticonIsPublic&&l.boundEmoticonGroups&&l.boundEmoticonGroups.forEach(f=>d.set(f.id,f))});const b=Array.from(d.values()),{getWeiboHotSearchPrompt:m}=await fe(async()=>{const{getWeiboHotSearchPrompt:l}=await Promise.resolve().then(()=>at);return{getWeiboHotSearchPrompt:l}},void 0,import.meta.url),a=m({worldName:t.name,worldDesc:t.description,worldBooksContent:n,userProfile:E.currentMask,characters:o,superTopics:c,emoticonGroups:b,posts:S.value[r.value]||[],videos:y.value[r.value]||[],existingHotSearches:T.value||[]}),h=await be.callApiWithFailover(a,{temperature:.8}),g=typeof h=="string"?h:h.content,u=g.match(/\[\s*\{[\s\S]*\}\s*\]/);if(u){const l=JSON.parse(u[0]);if(Array.isArray(l)){const f=[],A=l.reduce((O,j)=>O+Le(j?.posts||[]),0),z=A>0?We({batchName:"微博热搜配图",total:A,successMessage:"热搜图片已全部生成完成",failureMessage:"热搜生图失败，已退回虚拟描述",source:"微博"}):null;let W=0;for(const O of l)if(O.posts&&Array.isArray(O.posts)){O.posts.reverse();for(let j=0;j<O.posts.length;j++){const v=O.posts[j];v.tags||(v.tags=[]),v.tags.find(ce=>ce.name===O.title)||v.tags.push({name:O.title}),v.topicTabType="热门";const D={...v,images:we(v)};O.posts[j]=D;const B=Ie(D,j);if(B){const ce=we(v).filter(de=>de?.generationStatus==="pending").length;f.push((async()=>{await Ee(B.id,v,j,z,W);const se=(S.value[r.value]||[]).find(H=>H.id===B.id);se&&(O.posts[j]={...se},vt(l))})()),W+=ce}}}vt(l),e.showRefreshSuccess("热搜更新成功"),Promise.allSettled(f).catch(O=>{console.error("[微博生图] 热搜帖后台配图任务失败:",O)}).finally(()=>{z?.finalize()})}else e.showRefreshError("生成失败，请稍后重试")}else e.showRefreshError("生成失败，请稍后重试")}catch(t){console.error("热搜生成失败",t),e.showRefreshError("生成失败，请稍后重试")}}},Ro=async()=>{const e=Se();if(!(e.refreshStatus.visible||!r.value)){e.showRefreshLoading("正在为您刷新推荐视频...");try{const t=i.value.find(l=>l.id===r.value);if(!t)throw new Error("找不到当前选中的世界观");const o=t.characterIds?t.characterIds.map(l=>re.characters.get(l)).filter(Boolean):[],s=$e();let n="";if(t.worldBookIds&&t.worldBookIds.length>0){const l={worldBookEntryIds:t.worldBookIds},f=Ce(l,s.worldBooks,"",{includeGlobal:!0});n=[f.top,f.beforeRole,f.afterRole,f.bottom].filter(Boolean).join(`

`)}const c=[...R.value.map(l=>({...l,isFollowed:!0})),...x.value.map(l=>({...l,isFollowed:!!L.value.find(f=>f.name===l.name)}))].filter(l=>l.isFollowed);let d=new Map;t.boundEmoticonGroups&&t.boundEmoticonGroups.forEach(l=>d.set(l.id,l)),i.value.forEach(l=>{l.id!==t.id&&l.emoticonIsPublic&&l.boundEmoticonGroups&&l.boundEmoticonGroups.forEach(f=>d.set(f.id,f))});const b=Array.from(d.values()),{getWeiboVideoPrompt:m}=await fe(async()=>{const{getWeiboVideoPrompt:l}=await import("./weiboVideo-B5bNVoZj.js");return{getWeiboVideoPrompt:l}},__vite__mapDeps([0,1,2]),import.meta.url),a=m({worldName:t.name,worldDesc:t.description,worldBooksContent:n,userProfile:E.currentMask,characters:o,superTopics:c,emoticonGroups:b,count:5,videoSettings:te.value,posts:S.value[r.value]||[],videos:y.value[r.value]||[]}),h=await be.callApiWithFailover(a,{temperature:.8}),g=typeof h=="string"?h:h.content,u=g.match(/\[\s*\{[\s\S]*\}\s*\]/);if(u){const l=JSON.parse(u[0]);if(Array.isArray(l)){const{musicStore:f}=await fe(async()=>{const{musicStore:v}=await import("./index-BsGTho4G.js").then(D=>D.hu);return{musicStore:v}},__vite__mapDeps([1,2]),import.meta.url);(!f.playlists||f.playlists.length<=1&&f.playlists[0].songs.length===0)&&await f.loadData();const A=new Set;l.forEach((v,D)=>{v.id=`video_${Date.now()}_${D}`;let B=[];if(f.playlists.forEach(H=>{try{if(H.desc&&H.desc.trim().startsWith("{")){const N=JSON.parse(H.desc);N&&Array.isArray(N.tags)&&N.tags.includes(v.musicTag)&&B.push(...H.songs)}}catch{}}),B.length===0&&(B=f.getAllSongs()),B.length>0){let H=B.filter(ee=>!A.has(ee.id));H.length===0&&(A.clear(),H=B);const N=H[Math.floor(Math.random()*H.length)];A.add(N.id),v.bgm=N,`${v.title}${N.title||N.name||"未知"}`}else v.bgm=null,console.warn(`[视频匹配BGM] 未找到可用音乐，视频 '${v.title}' 将无声播放`);v.comments&&Array.isArray(v.comments)?v.comments.forEach(H=>{H.id=`comment_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}):v.comments=[];const ce=o.map(H=>H.weiboProfile?.name||H.name||H.nickname),de=E.currentMask?.weiboProfile?.name||E.currentMask?.name,se=[...ce,de].filter(Boolean);if(!se.includes(v.authorName)&&!v.authorNpcId&&v.authorName){let H=U.value[v.authorName];if(!H){const N=Ze.value,ee=N[Math.floor(Math.random()*N.length)];H=ee?.imageId||ee?.url||"",H&&(U.value[v.authorName]=H)}v.authorAvatar=H||v.authorAvatar||""}(se.includes(v.authorName)||v.authorNpcId)&&Xe(v,D)});const z=C.value[r.value]||[];pt("video");const W=new Set(Pe().videos),O=new Set(l.map(v=>v.id)),j=z.filter(v=>W.has(v.id)&&!O.has(v.id));C.value[r.value]=[...l,...j],e.showRefreshSuccess("视频刷新成功")}else e.showRefreshError("生成失败，请稍后重试")}else e.showRefreshError("生成失败，请稍后重试")}catch(t){console.error("视频刷新失败",t),e.showRefreshError("生成失败，请稍后重试")}}},Pt=ye(()=>{if(!r.value)return[];let e=S.value[r.value]||[];return!e||e.length===0?[]:[...e].sort((o,s)=>{if(o.isPinned&&!s.isPinned)return-1;if(!o.isPinned&&s.isPinned)return 1;const n=ie(o.time),c=ie(s.time);return n-c}).map(o=>o.time&&o.time!=="刚刚"?{...o,createTime:null}:o)}),Bo=ye(()=>{if(!r.value)return[];let e=S.value[r.value]||[];return!e||e.length===0?[]:[...e].sort((s,n)=>{if(s.isPinned&&!n.isPinned)return-1;if(!s.isPinned&&n.isPinned)return 1;const c=ie(s.time),d=ie(n.time);return c-d}).slice(0,40).map(s=>s.time&&s.time!=="刚刚"?{...s,createTime:null}:s)}),Wo=ye(()=>{if(!r.value)return[];const e=Pt.value,t=E.currentMask?.id||null,o=De();return!t&&o.size===0?[]:e.filter(s=>s.authorMaskId?s.authorMaskId===t:o.has(s.authorName))}),Oo=ye(()=>r.value?C.value[r.value]||[]:[]),Ze=ye(()=>{let e=[];const t=i.value.find(o=>o.id===r.value);return t&&(t.npcAvatars&&t.npcAvatars.length>0&&e.push(...t.npcAvatars),i.value.forEach(o=>{o.id!==t.id&&o.avatarIsPublic&&o.npcAvatars&&o.npcAvatars.length>0&&e.push(...o.npcAvatars)})),e}),St=async(e,t,o)=>{Se();try{if(!r.value)throw new Error("未选择世界观");const s=i.value.find(K=>K.id===r.value);if(!s)throw new Error("未找到当前世界观");const n=re.characters.get(t);if(!n)throw new Error("未找到聊天对象");const c=$e();let d="";if(s.worldBookIds&&s.worldBookIds.length>0){const K={worldBookEntryIds:s.worldBookIds},ne=Ce(K,c.worldBooks,"",{includeGlobal:!0});d=[ne.top,ne.beforeRole,ne.afterRole,ne.bottom].filter(Boolean).join(`

`)}const b=S.value[r.value]||[],m=E.currentMask?.weiboProfile?.name||E.currentMask?.name||"当前用户",a=n.weiboProfile?.name||n.name||n.nickname||"未知",h=b.filter(K=>K.authorName===m||K.authorName===E.currentMask?.name).slice(0,5),g=b.filter(K=>K.authorNpcId===t||K.authorName===a).slice(0,5);let u=new Map;if(n.emoticonGroupIds&&n.emoticonGroupIds.length>0){const{emoticonStore:K}=await fe(async()=>{const{emoticonStore:X}=await import("./index-BsGTho4G.js").then(ge=>ge.hk);return{emoticonStore:X}},__vite__mapDeps([1,2]),import.meta.url);(K.emoticonGroups||[]).filter(X=>n.emoticonGroupIds.includes(X.id)).forEach(X=>u.set(X.id,X))}const l=Array.from(u.values()),{useLifeEventStore:f}=await fe(async()=>{const{useLifeEventStore:K}=await import("./index-BsGTho4G.js").then(ne=>ne.hh);return{useLifeEventStore:K}},__vite__mapDeps([1,2]),import.meta.url),A=f(),z=n.activeStorylineId||n.storylines&&n.storylines[0]?.id||"",W=A.getRecentEvents(n.id,z);let O="（暂无具体操作记录）";if(W&&W.length>0){const ne=X=>{const ge=X.startTime||X.timestamp,kt=Date.now(),At=kt-ge,Ve=Math.floor(At/6e4),rt=Math.floor(At/36e5),Ko=kt-(X.endTime||X.timestamp),It=X.isFinalized||X.mergeKey&&Ko>108e5;if(It&&X.mergeKey&&X.startTime){if(!n?.isTimeAware)return"";const Nt=new Date(X.startTime),_t=new Date(X.endTime||X.timestamp),Yo=String(Nt.getHours()).padStart(2,"0"),Zo=String(Nt.getMinutes()).padStart(2,"0"),Qo=String(_t.getHours()).padStart(2,"0"),en=String(_t.getMinutes()).padStart(2,"0");return`[${Yo}:${Zo}-${Qo}:${en}]：`}if(It||!X.mergeKey)return n?.isTimeAware?Ve<1?"[刚才]：":Ve<60?`[${Ve}分钟前]：`:rt<24?`[${rt}小时前]：`:`[${Math.floor(rt/24)}天前]：`:"";if(!n?.isTimeAware)return"";if(Ve<2)return"[刚才]：";const Mt=new Date(ge),Xo=String(Mt.getHours()).padStart(2,"0"),qo=String(Mt.getMinutes()).padStart(2,"0");return`[${Xo}:${qo}至今]：`};O=`这是你的手机活动日志，记录了你在当前对话前已经在各个APP中发生的活动。回顾这里可以帮你衔接记忆，避免重复已经做过的事。
${W.map(X=>`- ${ne(X)}${X.description||X.title}${X.microLocation?"（"+X.microLocation+"）":""}`).join(`
`)}`}let j="";const v=n.storylines?.find(K=>K.id===n.activeStorylineId)||n.storylines?.[0]||{};if(v.summaries&&v.summaries.length>0){const K=v.summaries.filter(ne=>ne.type!=="core"&&ne.type!=="mid-term");K.length>0&&(j=[...K].sort((ne,Re)=>(ne.timestamp||0)-(Re.timestamp||0)).map(ne=>ne.content).join(`

`))}const{useCrossAppChatHistory:D}=await fe(async()=>{const{useCrossAppChatHistory:K}=await import("./useCrossAppChatHistory-DV_t8BMI.js");return{useCrossAppChatHistory:K}},__vite__mapDeps([3,1,2,4]),import.meta.url),{getCombinedChatHistory:B}=D(),ce=ct(t),de={userName:E.currentMask?.name||"用户",charName:n.nickname||n.name||"对方",characterName:n.name||n.nickname||"角色",isTimeAware:n.isTimeAware,injectHeartbeatContext:n.injectHeartbeatContext!==!1,strategyMode:n.strategyMode??!1,chatMode:n.chatMode||"online",activeMaskId:o||E.currentMask?.id||null,userStore:E},se=B(t,{wechatLimit:30,weiboLimit:lt(t),isContextShared:ce,targetChar:n,activeApp:"weibo",historyFormatOptions:de});if(n.isTimeAware&&se.length>0){const{useTimeAndState:K}=await fe(async()=>{const{useTimeAndState:ge}=await import("./useTimeAndState-Dt3WQhtF.js");return{useTimeAndState:ge}},[],import.meta.url),{getTimeAwarenessContext:ne}=K(),Re=e.map(ge=>({timestamp:ge.worldTime||ge.id})),X=ne({isTimeAware:n.isTimeAware,sourceChatLogs:Re,extraStagedCount:1,getSimulatedTimestamp:()=>Ge()});X&&X.length>0&&se.push(...X.map(ge=>({role:"system",content:JSON.stringify({displayType:"时间提示",content:ge.content})})))}const{getWeiboDirectMessagePrompt:H}=await fe(async()=>{const{getWeiboDirectMessagePrompt:K}=await Promise.resolve().then(()=>at);return{getWeiboDirectMessagePrompt:K}},void 0,import.meta.url),N=H({worldName:s.name,worldDesc:s.description,worldBooksContent:d,userProfile:E.currentMask,character:n,userPosts:h,charPosts:g,emoticonGroups:l,memoryText:j,activityLogText:O}),ee=[{role:"system",content:N},...se];JSON.parse(JSON.stringify(ee));const ve=await be.getChatReply(ee,{temperature:.7}),ue=typeof ve=="string"?ve:ve.content;return ue.trim()}catch(s){return console.error("私信生成失败:",s),null}},Qe=e=>i.value.filter(t=>Array.isArray(t?.characterIds)&&t.characterIds.includes(e)),jo=e=>Qe(e).length>0,xo=e=>{const t=Qe(e);return t.length?t.find(s=>s.id===r.value)||t[Math.floor(Math.random()*t.length)]:null},Go=e=>e.map(t=>{const o=t?.weiboProfile?.name||t?.nickname||t?.name||"未命名",s=t?.isNPC?"NPC":"角色",n=t?.weiboProfile?.socialPersona||t?.persona||t?.description||"";return`- ${s}：${o}${n?`｜${n}`:""}`}).join(`
`),$t=async e=>{const t=xo(e),o=re.characters.get(e);if(!t||!o)return null;const s=(t.characterIds||[]).map(g=>re.characters.get(g)).filter(Boolean),n=Array.isArray(o.storylines)?o.storylines.find(g=>g.id===o.activeStorylineId)||o.storylines[0]:null,c=Array.isArray(E.masks)&&E.masks.find(g=>g.id===o.activeMaskId)||null,d=c?.name||c?.nickname||E.currentMask?.name||E.currentMask?.nickname||"用户",b=await qe({character:o,storyline:n,maskName:d}),m=Bt(o,n,"",{appName:"微博",worldBookScope:"character-entry-only",excludeChatSessionWorldBook:!0});let a="";if(t.worldBookIds?.length){const g=$e(),u=Ce({worldBookEntryIds:t.worldBookIds},g.worldBooks,"",{includeGlobal:!0});a=[u.top,u.beforeRole,u.afterRole,u.bottom].filter(Boolean).join(`

`)}const h=Go(s.filter(g=>g?.id!==e));if(m?.priorityMap&&Array.isArray(m.sections)&&typeof m?.addSection=="function"){m.priorityMap.worldbook_top=93,m.priorityMap.weibo_world=94;const g=m.sections.find(f=>f.key==="time_scene");g&&(g.content=g.content.replace(/^「当前所在APP场景」\n[^\n]*/,`「当前所在APP场景」
你正在使用微博。`));const u=m.sections.find(f=>f.key==="user_info");u&&(u.content=u.content.replace("「你的对话对象信息」","「用户信息」"));const l=m.sections.find(f=>f.key==="current_state");if(l){const f=l.content.indexOf("「你的APP活动记录」");f>=0?l.content=l.content.slice(f):m.sections=m.sections.filter(A=>A.key!=="current_state")}m.sections=m.sections.filter(f=>!["life_schedule","core_dialogue_guidelines"].includes(f.key)),m.addSection("weibo_world",`「微博世界观」
[世界名称]：`+(t.name||"未命名世界")+`
[世界描述]：`+(t.description||"暂无")+(a?`

[世界资料]：
`+a:""),"weibo_world"),m.addSection("personal_social_records",`「你的个人社交记录」
`+Ye(b,d),"recent_activity")}return{worldId:t.id,currentWorld:t,targetCharacter:o,activeChars:s,boundUserProfile:c,worldCharacters:h,corePrompt:typeof m?.build=="function"?m.build():"",posts:S.value[t.id]||[],videos:y.value[t.id]||[],hotSearches:G.value[t.id]||[]}},et=e=>[...e].sort((t,o)=>Number(o.createTime||o.timestamp||0)-Number(t.createTime||t.timestamp||0)),Do=(e,t)=>{const o=e.targetCharacter.weiboProfile?.name||e.targetCharacter.nickname||e.targetCharacter.name,s=e.boundUserProfile?.weiboProfile?.name||e.boundUserProfile?.name||E.currentMask?.weiboProfile?.name||E.currentMask?.name,n=a=>a?.authorNpcId===t||!a?.authorNpcId&&o&&a?.authorName===o,c=[],d=new Set,b=(a,h)=>{et(a).slice(0,h).forEach(g=>{g?.id&&!d.has(g.id)&&(d.add(g.id),c.push(g))})};e.activeChars.forEach(a=>{a?.id!==t&&b(e.posts.filter(h=>h.authorNpcId===a.id),2)}),b(e.posts.filter(a=>a.authorName===s&&!n(a)),3);const m=et(e.videos).filter(a=>a?.id&&!n(a)).slice(0,8);return{posts:c,videos:m}},Ct=(e,t,o,s,n)=>{if(!Array.isArray(e)||e.length!==n)throw new Error("微博浏览信息流数量不符合要求");const c=new Map(t.map(a=>[String(a.id),a])),d=[],b=new Set;e.forEach(a=>{const h=c.get(String(a?.[o]||""));h&&!b.has(h.id)&&(b.add(h.id),d.push(h))}),t.forEach(a=>{d.length<Math.min(s,t.length)&&!b.has(a.id)&&(b.add(a.id),d.push(a))});const m=e.filter(a=>!c.has(String(a?.[o]||""))).map(a=>{const h={...a};return delete h[o],h});return[...d,...m].slice(0,n)},tt=async(e,t,o,s,n={})=>{try{const{useLifeEventStore:c}=await fe(async()=>{const{useLifeEventStore:m}=await import("./index-BsGTho4G.js").then(a=>a.hh);return{useLifeEventStore:m}},__vite__mapDeps([1,2]),import.meta.url),{LifeEventSource:d,LifeEventType:b}=await fe(async()=>{const{LifeEventSource:m,LifeEventType:a}=await import("./index-BsGTho4G.js").then(h=>h.hg);return{LifeEventSource:m,LifeEventType:a}},__vite__mapDeps([1,2]),import.meta.url);c().addEvent(e,{storylineId:t?.activeStorylineId,app:"weibo",activity:o,source:d.AUTONOMOUS,type:b.SOCIAL,title:o==="browseTrending"?"浏览微博":o==="postWeibo"?"发布微博":o==="manageWeibo"?"管理微博":"微博操作",description:s,statusTag:"刷微博",injectToPrompt:!0,timestamp:Number(n.activityOccurredAt)||Date.now()})}catch(c){console.warn("[LifeEvent] 记录微博自主活动失败",c)}},ot="【微博APP近期认知】",nt="【微博浏览信息】",Lo=3,Vo=8,st=e=>String(e||"").split(`
`).map(t=>t.trim()).filter(t=>/^- (帖子|视频)：/.test(t)),Jo=e=>{if(typeof e!="string")return[];if(e.startsWith(ot))return e.replace(/^【微博APP近期认知】\n你此前刷微博时留下了这些印象：\n\n?/,"").split(`

[注意]
`)[0].split(`
--
`).map(st).filter(o=>o.length);if(e.startsWith(nt)){const t=e.slice(nt.length).replace(/^你此前刷微博时留下了这些印象：\n?/,"").split(`
这些只是你的背景认知；`)[0],o=st(t);return o.length?[o]:[]}return[]},Fo=e=>[ot,"你此前刷微博时留下了这些印象：","",e.map(t=>t.join(`
`)).join(`
--
`),"","[注意]","以上内容可能只留在自己的认知中，也可以成为聊天中的自然谈资；是否提及、提多少、对谁提，应结合当前话题、双方关系、聊天氛围、自身性格与当下的分享欲自然判断。","避免：","- 把所有内容都说出来","- 只因话题相关就强行提及","- 为了体现这些信息而生硬转折、主动汇报或重复提及"].join(`
`),Uo=(e,t)=>{const o=re.characters.get(e),s=st(t);if(!o||!s.length)return;const n=Array.isArray(o.ephemeralContexts)?o.ephemeralContexts:[],c=n.filter(a=>{const h=String(a?.content||"");return h.startsWith(ot)||h.startsWith(nt)}),d=[];[...c].reverse().forEach(a=>d.push(...Jo(a.content)));let b=Vo;const m=[];[s,...d].forEach(a=>{if(m.length>=Lo||b<=0)return;const h=a.slice(0,b);h.length&&(m.push(h),b-=h.length)}),o.ephemeralContexts=n.filter(a=>!c.includes(a)),re.characters.set(e,{...o}),bn(e,Fo(m),7)},zo=async(e,t={})=>{const o=await $t(e);if(!o)return!1;const s=Do(o,e),{getWeiboAutonomousBrowsePrompt:n}=await fe(async()=>{const{getWeiboAutonomousBrowsePrompt:A}=await import("./weiboVideo-B5bNVoZj.js");return{getWeiboAutonomousBrowsePrompt:A}},__vite__mapDeps([0,1,2]),import.meta.url),c=n({corePrompt:o.corePrompt,worldCharacters:o.worldCharacters,hotSearches:o.hotSearches,postCandidates:s.posts,videoCandidates:s.videos});if(`${o.targetCharacter.nickname||o.targetCharacter.name||e}${o.currentWorld.name||o.worldId}`,t.prepareCloudTaskSnapshot)return{appId:"weibo",actionId:t.cloudActionId,messages:[{role:"user",content:c}]};const d=t.rawReply===void 0?await be.callApiWithFailover(c,{temperature:.8}):t.rawReply,m=(typeof d=="string"?d:d?.content)?.match(/\{[\s\S]*\}/);if(!m)throw new Error("微博浏览返回格式错误");const a=JSON.parse(m[0]),h=Ct(a.posts,s.posts,"sourcePostId",3,5),g=Ct(a.videos,s.videos,"sourceVideoId",2,4),u=Array.isArray(a.info?.posts)?a.info.posts.slice(0,3):[],l=Array.isArray(a.info?.videos)?a.info.videos.slice(0,2):[],f=[...u.map(A=>({type:"帖子",source:h[A?.index],summary:String(A?.summary||"").trim(),reason:String(A?.reason||"").trim()})),...l.map(A=>({type:"视频",source:g[A?.index],summary:String(A?.summary||"").trim(),reason:String(A?.reason||"").trim()}))].filter(A=>A.source&&A.summary&&A.reason);if(f.length){const A=f.map(z=>`- ${z.type}：${z.summary}（你在意它，因为${z.reason}）`).join(`
`);Uo(e,A)}return await tt(e,o.targetCharacter,"browseTrending","在浏览微博的时候，对一些内容留下了印象。",t),{posts:h,videos:g,impressions:f}},Ho=async(e,t={})=>{const o=await $t(e);if(!o)return!1;const s=et(o.posts.filter(f=>f.authorNpcId===e)),n=Lt({corePrompt:o.corePrompt,targetCharacter:o.targetCharacter,posts:o.posts,worldCharacters:o.worldCharacters});if(`${o.targetCharacter.nickname||o.targetCharacter.name||e}${o.currentWorld.name||o.worldId}`,t.prepareCloudTaskSnapshot)return{appId:"weibo",actionId:t.cloudActionId,messages:[{role:"user",content:n}]};const c=t.rawReply===void 0?await be.callApiWithFailover(n,{temperature:.8}):t.rawReply,b=(typeof c=="string"?c:c?.content)?.match(/\{[\s\S]*\}/);if(!b)throw new Error("微博发布返回格式错误");const m=JSON.parse(b[0]),a=m?.post&&typeof m.post=="object"?m.post:null,h=!!String(a?.content||"").trim(),g=String(m?.deletePostId||""),u=!!(g&&s.some(f=>String(f.id)===g));if(a&&!h&&console.warn("[微博自主发布] 返回的 post 缺少正文，已忽略发布字段",{postKeys:Object.keys(a),hasDeletePostId:!!g,canDelete:u}),!h&&!u)throw new Error("微博发布返回缺少正文或有效的旧微博删除 ID");let l=null;if(h){const f={...a,authorName:o.targetCharacter.weiboProfile?.name||o.targetCharacter.nickname||o.targetCharacter.name,authorNpcId:e,time:"刚刚",images:we(a)};if(l=Ie(f,0,o.worldId),!l)throw new Error("微博发布写入失败");const A=we(a).filter(z=>z?.generationStatus==="pending").length;if(A){const z=We({batchName:"角色微博配图",total:A,successMessage:"角色微博图片已生成完成",failureMessage:"角色微博生图失败，已保留虚拟描述",source:"微博"});Ee(l.id,a,0,z,0,o.worldId).catch(W=>console.error("[微博生图] 自主发布补图失败",W)).finally(()=>z.finalize())}await tt(e,o.targetCharacter,"postWeibo","在微博发布了一条新的动态。",t),t.cloudInboxId||Be.showNotification({title:"微博",message:(o.targetCharacter.nickname||o.targetCharacter.name||"角色")+"发布了一条新微博。",icon:Me(o.targetCharacter),source:"微博",type:"weibo_post"})}return u&&(yt(g,o.worldId),await tt(e,o.targetCharacter,"manageWeibo","在微博删除了一条曾经的动态。",t)),l||{deletedPostId:g}};return{isDataLoaded:$,loadWeiboData:Vt,saveWeiboData:ke,worlds:i,activeWorldId:r,hotSearches:T,postsByWorld:S,superTopics:R,followedRecommendedTopics:L,predefinedTopics:x,videosByWorld:C,characterVideosByWorld:y,collectionsByWorld:w,collectedPosts:no,collectedVideos:so,isCollected:to,toggleCollection:oo,activeWorldPosts:Bo,fullActiveWorldPosts:Pt,postsByCurrentUser:Wo,worldFollowedContactIds:J,activeWorldVideos:Oo,availableNpcAvatars:Ze,passerbyAvatarMap:U,addSuperTopic:Kt,deleteSuperTopic:qt,followTopic:Po,unfollowTopic:So,addWorld:Yt,updateWorld:vo,deleteWorld:yo,setActiveWorld:bo,videoSettings:te,showVideoPreferenceModal:ae,updateVideoSettings:uo,following:V,toggleFollow:Xt,isEditingProfile:_,showEditProfile:Co,hideEditProfile:ko,unreadPostIds:F,markPostAsRead:lo,togglePinPost:wo,toggleProfilePinPost:co,profilePinnedPostIds:p,addPost:Ie,addCharacterVideo:Xe,addComment:po,addVideoComment:go,deletePost:yt,deleteCharacterContents:ho,stories:q,addStory:Zt,markStoriesAsRead:Qt,fetchPosts:Ao,generateCharacterPosts:_o,fetchSuperTopicPosts:To,fetchHotSearches:Eo,refreshVideos:Ro,executeAutonomousActivity:(e,t,o={})=>vn(async()=>{if(t==="browseTrending")return zo(e,{...o,cloudActionId:"browseTrending"});if(t==="postWeibo")return Ho(e,{...o,cloudActionId:"postWeibo"});throw new Error("不支持的微博自主活动: "+t)},`微博自主活动: ${t}`),hasAutonomousWeiboWorld:jo,getAutonomousWeiboWorlds:Qe,getCharacterSocialContexts:qe,formatCharacterChatContexts:Ye,addCharactersToActiveWorld:e=>{const t=i.value.find(o=>o.id===r.value);return!t||!Array.isArray(e)||!e.length?!1:(t.characterIds=[...new Set([...t.characterIds||[],...e])],i.value=[...i.value],!0)},generateMoreComments:$o,postModalRequestFromProfile:Z,requestPostModalFromProfile:mo,resetPostModalRequest:fo,sendDirectMessageToAI:St,triggerAIDMReply:dt,dmConversations:Y,dmMessages:oe,dmContextSharedMap:le,dmHistoryLimitMap:pe,toggleDMContextShared:Ft,getDMContextShared:ct,getDMHistoryLimit:lt,setDMHistoryLimit:Jt,loadDMMessages:ut,addDMMessage:mt,loadDMConversations:Ut,updateDMConversation:ze,clearDMUnread:zt,rewindDMConversation:Ht}}),Bn=Object.freeze(Object.defineProperty({__proto__:null,useWeiboStore:Nn},Symbol.toStringTag,{value:"Module"}));export{xe as _,me as f,Me as g,ie as p,Rn as r,Nn as u,Bn as w};
