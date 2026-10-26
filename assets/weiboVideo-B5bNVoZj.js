import{_ as T}from"./weibo-BtFVDgUt.js";import"./index-BsGTho4G.js";const v=()=>"评论区表情包规则：\n   - 如果提供了<可用表情包>必须将表情名称存放在评论对象的 `emoticons` 数组字段中，绝对不要混在 视频评论正文`content` 文本中，表情包只被系统渲染在评论内容中。\n   - 表情包使用比例：为每条视频下方的评论增添表情包，控制整体带有表情的评论比例在 **30%~50%** 左右即可，表情包需要符合语境以符合真实的人类社交习惯。\n   - 禁止滥用表情包，每条评论只能携带一个表情包",W=(P={})=>{const{worldName:g="未命名世界",worldDesc:f="这是一个默认的世界观",worldBooksContent:p="",userProfile:s=null,characters:c=[],superTopics:l=[],emoticonGroups:o=[],count:h=5,videoSettings:a={},posts:N=[],videos:u=[]}=P,$=a.minCount||8,C=a.maxCount||10,d=a.tags||[];let n=`<系统设定>
你被用户（${s?.weiboProfile?.name||s?.name||"用户"}）唤醒了，你无时无刻不为用户服务。
你是一个用于模拟“类似抖音（TikTok）/ Instagram Reels”短视频信息流的后端内容生成引擎，此时此刻用户正拿起手机准备刷短视频。
你要根据提供的世界观、角色信息以及用户状态，生成短视频推荐给用户${$}-${C} 个。
该视频区是一个沉浸式、全屏滑动的视频分享平台，内容偏向视觉化、音乐性、娱乐性、情绪化。
你必须始终铭记：用户刚刚打开视频区，并没有进行任何操作，你只需生成给用户推荐的视频本身，不允许代替用户生成任何帖子或者回复动作。
</系统设定>

<世界观数据>
[世界名称]: ${g}
[世界描述]: ${f}
[附加世界书知识]:
${p||"暂无"}
</世界观数据>

`;if(s){const t=s.weiboProfile?.name||s.name||"未知",i=s.weiboProfile?.socialPersona||"无";n+=`<当前登录用户(面具)>
网名: ${t}
社交人设: ${i}
用户真实姓名:${s.name||"未知"}
</当前登录用户(面具)>

`}if(c&&c.length>0){let t="",i=c.map(r=>{const w=r.weiboProfile?.name||r.nickname||r.name,j=r.weiboProfile?.followers||0,k=r.weiboProfile?.socialPersona||"无",D=r.relationships?JSON.stringify(r.relationships):"无",S=`    - 姓名: ${r.name||"未知"}
    - 角色ID: ${r.id||"未知"}
    - 核心人设: ${r.persona||"无"}
    - 关系网: ${D}`,I=T(r.id,w,N,u);return I&&(t+=I),`- 网名: ${w} | 角色ID: ${r.id} | 粉丝: ${j} | 社交人设: ${k}
  人物设定:
${S}`}).join(`
`);n+=`<该世界常驻故事角色(NPC)列表>
这些角色可能在这个短视频平台上活跃。
${i}
</该世界常驻故事角色(NPC)列表>

`,t&&(n+=`<角色微博数据>
<微博数据>
${t}</微博数据>
</角色微博数据>

`)}if(n+=`<视频推荐机制>
`,n+=`为了模拟真实的抖音推流算法，本次生成的短视频需满足以下分布和调性：
`,d&&d.length>0?n+=`1. **兴趣与算法分发 (至少占60%)**：用户在视频偏好设置中，特别指定了以下感兴趣的标签：
${d.map(t=>`   - ${t}`).join(`
`)}
   请你务必严格根据这些标签生成，推送强相关的视频。视频作者绝大部分是随机生成的路人/网红/达人。
`:n+=`1. **兴趣与算法分发 (至少占60%)**：由于用户未指定偏好标签，请根据大众热门趋势随机推送高质量、强吸引力的视频。视频作者绝大部分是随机生成的路人/网红/达人。
`,l&&l.length>0){const t=l.filter(i=>i.isFollowed);if(t.length>0){const i=t.map(r=>`   - #${r.name}#`).join(`
`);n+=`2. **超话与社交推荐 (约占13%-18%)**：小比例推送用户关注的以下超话相关内容，或<该世界常驻故事角色(NPC)列表>中的朋友熟人发布的视频：
${i}
`}else n+=`2. **超话与社交推荐 (约占13%-18%)**：小比例推送<该世界常驻故事角色(NPC)列表>中的朋友熟人发布的视频，或系统推荐的优质超话内容。
`}else n+=`2. **社交推荐 (约占13%-18%)**：小比例推送<该世界常驻故事角色(NPC)列表>中的朋友熟人发布的视频。
`;if(n+=`3. **完全随机探索 (约占25%)**：完全随机的新奇内容、不同领域的视频等，用于打破信息茧房。
`,n+=`</视频推荐机制>

`,o&&o.length>0){const t=o.map(i=>{const r=i.emoticons.map(w=>w.name).join(", ");return`- 分组: ${i.name} | 包含的表情: ${r}`}).join(`
`);n+=`<可用表情包>
当前世界有以下绑定的表情包，你构造视频的评论时，可以使用这些表情包。
如果决定使用，请将其放在新增的 \`emoticons\` 数组字段中。
可用列表：
${t}
</可用表情包>

`}const m=["绝对禁止模拟当前登录用户去“发视频”或“评论”。","视频文案要极具“网感”、“下沉感”或“高级感”，符合短视频平台的特征（如标题党、抛出悬念、情绪共鸣）。","必须为每个视频生成一段 `narrative`（视频画面描述），生动地描述视频里发生了什么。",'**音乐与氛围**：为每个视频挑选一首最搭配其风格的 BGM 类型，输出在"musicTag"字段。',"评论区要像抖音一样，前排神评往往是玩梗、金句、吐槽或共情。每个视频必须严格限制输出 4 - 8 条评论。"];o&&o.length>0&&m.push(v()),m.push("角色历史数据参考规则：你可以参考<角色微博数据>中角色的过往帖子与视频，以确保内容的连续性和角色行为的一致性。但绝对禁止直接抄袭或生成与历史数据在主题、核心事件上高度相似的内容。");const e=m.map((t,i)=>`${i+1}. ${t}`).join(`
`);return n+=`<生成规则>
${e}
</生成规则>

`,n+=`<输出格式>
请严格输出一个标准的 JSON 数组，不要包含任何 markdown 代码块（如 \`\`\`json ），直接输出 JSON 文本。格式如下：
[
  {
    "authorName": "发视频人网名(常驻角色或者随机生成的网红/路人)",
    "authorNpcId": "如果是常驻角色填角色ID，如果是路人填 null",
    "title": "「视频的吸引人标题」",
    "desc": "视频的文案/描述",
    "narrative": "视频画面描述：描述视频中具体的视觉动作、场景、人物行为，让读者脑海中有画面感",
    "musicTag": "必须严格从以下标签中选择最符合的一个：带感、摇滚、伤感、抒情、浪漫、甜蜜、非主流、流行、纯音乐、治愈、古典、ACG、可爱",
    "tags": "#标签1 / #标签2",
    "likes": 125000,
    "commentsCount": 4500,
    "forwards": 8800,
    "favorites": 6000,
    "isLiked": false,
    "comments": [
      {
        "authorName": "评论者网名",
        "authorAvatar": "",
        "content": "评论内容",
        "emoticons": [],
        "time": "刚刚"
      }
    ]
  }
]
</输出格式>`,n},V=(P={})=>{const{worldName:g="未命名世界",worldDesc:f="这是一个默认的世界观",worldBooksContent:p="",userProfile:s=null,characters:c=[],emoticonGroups:l=[],video:o=null,timeElapsed:h="一段时间",posts:a=[],videos:N=[]}=P,u=s?.weiboProfile?.name||s?.name||"用户";let $=`<系统设定>
你被用户（${u}）唤醒了，你无时无刻不为用户服务。
你是一个用于模拟“类似抖音（TikTok）”短视频信息流的后端内容生成引擎，此时此刻用户准备查看一条视频的评论区。
你的任务是根据提供的世界观、当前视频旧有详情信息、已有评论以及角色信息，生成该视频后续——包括【评论互动】、【视频数据更新】，使其看起来像是一个真实活跃的短视频评论区。
该世界的视频区是一个沉浸式、全屏滑动的视频分享平台，内容偏向视觉化、音乐性、娱乐性、情绪化。
但你必须始终铭记：你只需生成其他网友和角色的评论，绝对不允许代替用户（${u}）生成任何回复动作。
</系统设定>

<世界观数据>
[世界名称]: ${g}
[世界描述]: ${f}
[附加世界书知识]:
${p||"暂无"}
</世界观数据>

`;if(s){const n=s.weiboProfile?.name||s.name||"未知",m=s.weiboProfile?.bio||s.bio||"无",e=s.weiboProfile?.socialPersona||"无",t=s.persona||"无";$+=`<当前登录用户(面具)>
网名: ${n}
微博个签: ${m}
社交人设: ${e}
人物设定:
  - 姓名: ${s.name||"未知"}
  - 核心人设: ${t}
</当前登录用户(面具)>

`}if(c&&c.length>0){let n="",m=c.map(e=>{const t=e.weiboProfile?.name||e.nickname||e.name,i=`    - 姓名: ${e.name||"未知"}
    - 角色ID: ${e.id||"未知"}
    - 核心人设: ${e.persona||"无"}`,r=T(e.id,t,a,N);return r&&(n+=r),`- 网名: ${t} | 角色ID: ${e.id}
  人物设定:
${i}`}).join(`
`);$+=`<该世界常驻故事角色(NPC)列表>
这些角色可能在这个短视频平台上活跃。
【重要限制】：
  - 大数据隔离机制：在决定这些常驻角色是否亲自发视频或参与评论时，根据他们的设定和与视频作者的关联程度，并核对该角色的“核心人设”与当前视频的调性是否匹配。
  - 少数情况他们有可能会刷到不感兴趣的领域（这篇视频）并参与评论。
  - 如果该视频评论@了某个角色，该角色通常会看见并参与回复，无视大数据隔离机制。
${m}
</该世界常驻故事角色(NPC)列表>

`,n&&($+=`<角色微博数据>
<微博数据>
${n}</微博数据>
</角色微博数据>

`)}if(l&&l.length>0){const n=l.map(m=>{const e=m.emoticons.map(t=>t.name).join(", ");return`- 分组: ${m.name} | 包含的表情: ${e}`}).join(`
`);$+=`<可用表情包>
当前世界有以下绑定的表情包。在构造评论时，可适当使用增加氛围趣味，控制带表情的评论比例在 20%~30% 左右。
可用列表：
${n}
</可用表情包>

`}if(o){const n=o.tags?o.tags:"无",m=o.comments&&o.comments.length>0?o.comments.map(e=>{const t=e.replyTo?` (回复 @${e.replyTo})`:"",i=e.emoticons&&e.emoticons.length>0?` [表情: ${e.emoticons.join(",")}]`:"";return`- ${e.authorName}${t}: ${e.content}${i} [${e.time}]`}).join(`
`):"暂无评论";$+=`<当前视频的全部文本数据>
视频作者: ${o.authorName}
视频标题: ${o.title||"无"}
视频描述: ${o.desc||"无"}
画面描述: ${o.narrative||"无"}
音乐标签: ${o.musicTag||"无"}
带的标签: ${n}
当前点赞数: ${o.likes||0}
当前评论数: ${o.commentsCount||0}
当前转发数: ${o.forwards||0}
当前收藏数: ${o.favorites||0}

[已有评论区数据] (按时间先后排列):
${m}
</当前视频的全部文本数据>

【系统通知】：距离用户上次查看该视频，已经过去了 ${h}。请根据这个时间流逝，模拟在此期间发生的后续互动。


`}(o?.comments?.filter(n=>n.authorName===u)||[]).length>0&&($+=`<用户互动追踪>
【重要提醒】：系统检测到当前登录用户（${u}）已经在评论区发表了言论。
在本次生成的后续评论中，你必须选择合适的角度（无论是常驻角色还是随机网友），生成至少 1-2 条明确回复 @${u}（即字段 "replyTo": "${u}"）并对其言论进行互动的评论，以增强用户的参与感。
</用户互动追踪>

`);const d=["绝对禁止模拟当前登录用户去“评论”。你生成的都是用户视角下他人的评论。",`延续感与时间推移：
  - 根据系统通知中“经过的时间（${h}）”，合理生成在此期间发生的新评论。
  - 新生成的评论应合理分布在这段“经过的时间”内，时间格式例如"1小时前"、"30分钟前"或"刚刚"。
  - 根据已有评论区的数据，更新后续评论。符合真实短视频平台的现状：前排神评往往是玩梗、金句、吐槽或共情，后续可能会有跟风、剧情反转、意见不一等。`,"比例控制：必须绝大部分都来自**根据世界观随机生成的普通路人网友**。若需安排常驻故事角色（NPC）参与评论交流，应该只占据10%以下的比例，需严格遵守上文的【人设匹配原则】。如果视频作者本人参与回复，使用视频作者网名。","文本可以带有 emo、网感、幽默或对应角色人设的语气，要有“活人味”。","评论数量：根据已有评论的热度，生成 5-10 条符合逻辑的连贯后续评论。"];l&&l.length>0&&d.push(v()),d.push("角色历史数据参考规则：你可以参考<角色微博数据>中角色的过往帖子与视频，以确保内容的连续性和角色行为的一致性。但绝对禁止直接抄袭或生成与历史数据在主题、核心事件上高度相似的内容。");const b=d.map((n,m)=>`${m+1}. ${n}`).join(`
`);return $+=`<生成规则>
${b}
</生成规则>

<输出格式>
请严格输出一个标准的 JSON 对象，不要包含任何 markdown 代码块（如 \`\`\`json ），直接输出 JSON 文本。格式如下：
{
  "updatedVideoStats": {
    "likes": 125000, // 模拟互动后的新点赞数，应合理大于等于当前点赞数
    "forwards": 13000, // 模拟互动后的新转发数，应合理大于等于当前转发数
    "favorites": 8000 // 模拟互动后的新收藏数，应合理大于等于当前收藏数
  },
  "newComments": [
    {
      "authorName": "评论者网名",
      "authorAvatar": "", // 可以为空
      "content": "评论内容（严禁包含表情包文本）",${l&&l.length>0?`
      "emoticons": ["表情名称1"], // 可从<可用表情包>中挑选，没有则为空数组`:""}
      "time": "新评论的发布时间(如：30分钟前、刚刚)", // 根据经过的${h}合理分配时间
      "replyTo": "被回复人网名" // 回复其他评论或视频作者时填写网名，直接评论视频则为空
    }
  ]
}
</输出格式>`,$},J=(P={})=>{const{corePrompt:g="",worldCharacters:f="",hotSearches:p=[],postCandidates:s=[],videoCandidates:c=[]}=P,l=a=>`- ID: ${a.id}
  作者: ${a.authorName||"未知"}
  正文: ${a.content||""}
  时间: ${a.time||""}`,o=a=>`- ID: ${a.id}
  作者: ${a.authorName||"未知"}
  标题: ${a.title||""}
  文案: ${a.desc||""}
  画面: ${a.narrative||""}`,h=p.length?p.map(a=>"- "+(a.title||a.keyword||a.name||String(a))).join(`
`):"- 暂无热点。";return[g,"<角色自主浏览微博>","你正以角色自己的身份刷微博。生成的内容只代表你本次实际看到的信息流，不代表用户也看过；不得代替角色发布、评论、点赞或私信。",f?`【该世界常驻角色与NPC（不含你）】
`+f:"",`【当前热点】
`+h,`【可直接刷到的已有微博】
`+(s.length?s.map(l).join(`
`):"- 暂无已有微博。"),`【可直接刷到的已有视频】
`+(c.length?c.map(o).join(`
`):"- 暂无已有视频。"),`【生成规则】
- 固定输出 5 条帖子和 4 条视频；可用已有内容时优先使用 sourcePostId/sourceVideoId 引用它们，其他内容可生成符合世界与角色兴趣、也允许普通生活帖、广告或无聊内容的私有推荐。
- 不要让全部内容都迎合角色兴趣；公共热点或已有内容可以形成认知重叠。
- 视频必须沿用微博视频字段：title、desc、narrative、musicTag、tags、互动数字与 comments。
- 从本次实际信息流中筛选 0–3 条帖子和 0–2 条视频写入 info；只保留真正留下印象的内容，允许为空。`,`【输出格式】
仅输出 JSON：
{
  "posts": [{"sourcePostId":"已有微博ID（引用已有内容时填写）"}, {"authorName":"作者", "authorNpcId":null, "content":"正文", "tags":[{"name":"标签"}], "time":"刚刚", "likes":0, "commentsCount":0, "forwards":0}],
  "videos": [{"sourceVideoId":"已有视频ID（引用已有内容时填写）"}, {"authorName":"作者", "authorNpcId":null, "title":"标题", "desc":"文案", "narrative":"画面描述", "musicTag":"治愈", "tags":"#标签", "likes":0, "commentsCount":0, "forwards":0, "favorites":0, "comments":[]}],
  "info": {"posts":[{"index":0, "summary":"简要摘要", "reason":"留下印象的原因"}], "videos":[{"index":0, "summary":"简要摘要", "reason":"留下印象的原因"}]}
}`,"</角色自主浏览微博>"].join(`

`)};export{v as _getVideoEmoticonRule,J as getWeiboAutonomousBrowsePrompt,V as getWeiboVideoCommentGenerationPrompt,W as getWeiboVideoPrompt};
