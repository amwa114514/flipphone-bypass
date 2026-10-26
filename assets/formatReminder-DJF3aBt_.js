import{$ as E}from"./index-BsGTho4G.js";const G=e=>{if(!e)return[];const t=[];return e.summaryText&&t.push(`<该成员的对话记忆>
${e.summaryText}
</该成员的对话记忆>`),e.privateHistoryText&&t.push(`<该成员与用户的近期私聊>
${e.privateHistoryText}
</该成员与用户的近期私聊>`),t},l=(e,t="无")=>{if(e==null)return t;if(typeof e=="string")return e.trim()||t;if(Array.isArray(e)){const o=e.map(n=>l(n,"")).filter(Boolean);return o.length?o.join("；"):t}if(typeof e=="object")try{return JSON.stringify(e,null,2)}catch{return t}return String(e)},c=(e,t)=>{const o=typeof t=="string"?t.trim():"";return o?`「${e}」
${o}`:""},B=e=>String(e||"").replace(/^「([^」]+)」/gm,"# 「$1」"),k=e=>{if(!e)return"未知";const t=n=>{const a=typeof n=="string"?n.trim():"";return!a||["unknown","undefined","null","未知"].includes(a.toLowerCase?.()||"")?"":a},o=(n,a,r="")=>{const i=t(n)||t(r),s=t(a);return i?s&&s!==i?`${i} (现实参考: ${s})`:i:s||"未知"};if(typeof e=="string"){const n=e.split("/").map(i=>t(i)).filter(Boolean),a=n[0]||"",r=n.find((i,s)=>s>0&&i!==a)||"";return o(a,r)}if(typeof e=="object"){const n=t(e?.virtual),a=t(e?.reality?.city),r=t(e?.region)||t(e?.city)||t(e?.country);return o(n,a,r)}return t(e)||"未知"},H={friends:"朋友群",family:"家庭群",dorm:"宿舍群",class:"班级群",work:"工作群",game:"游戏群",custom:"自定义"},_={zh:"中文","zh-cn":"中文","zh-hk":"粤语",en:"英语",ja:"日语",ko:"韩语",es:"西班牙语",fr:"法语",de:"德语",ru:"俄语",pt:"葡萄牙语",ar:"阿拉伯语",it:"意大利语"},j={中文:{native:"你好",translation:"Hello"},日语:{native:"こんにちは",translation:"你好"},英语:{native:"Hello",translation:"你好"},韩语:{native:"안녕하세요",translation:"你好"},西班牙语:{native:"Hola",translation:"你好"},法语:{native:"Bonjour",translation:"你好"},德语:{native:"Hallo",translation:"你好"},俄语:{native:"Привет",translation:"你好"},葡萄牙语:{native:"Olá",translation:"你好"},阿拉伯语:{native:"مرحبا",translation:"你好"},意大利语:{native:"Ciao",translation:"你好"},粤语:{native:"你好呀",translation:"你好"}},P=(e,t)=>[`群聊头衔：${e.title||"无"}`,`群聊昵称（显示在头衔后）：${e.alias||e.nickname||e.name||"无"}`,`姓名：${e.name}`,`网名：${e.nickname||"未设定"}`,`群身份：${e.groupRole}`,`电话：${e.phoneNumber}`,`人设：${l(e.persona)}`,`关系网：${l(e.relationships)}`,`所在地：${k(e.location)}`,`线上风格：${l(e.onlineStyle)}`,e.assetsSummary?`资产情况：${e.assetsSummary}`:"",...G(e.memoryProfile)].filter(Boolean).join(`
`),D=(e,t)=>`<成员${t+1}>
${P(e)}
</成员${t+1}>`,f=(e,t)=>{const o=typeof t=="string"?t.trim():"";return o?c(e,o):""},V=(e,t)=>e==="custom"?t||"自定义":H[e]||e||"未设定",w=(e=[])=>(Array.isArray(e)?e:[]).some(o=>{const n=o?.voiceConfig||{};return n.enabled?(n.model||E.config.model||"").includes("speech-2.8"):!1})?"也可以根据当下心情和语境，语音中适当加入这些语气词标签：(laughs)、(chuckle)、(coughs)、(clear-throat)、(groans)、(breath)、(pant)、(inhale)、(exhale)、(gasps)、(sniffs)、(sighs)、(snorts)、(burps)、(lip-smacking)、(humming)、(hissing)、(emm)、(sneezes)。":"",z=(e={},t=[])=>{if(!e?.enabled)return"";const o=_[e.sourceLang]||e.sourceLang||"日语",n=_[e.targetLang]||e.targetLang||"中文",a=j[o]||j.日语;return c("自动翻译规则",[`当前群聊已开启自动翻译。角色发言时，正文必须使用 ${o}。`,"角色发送语音消息时，也必须继续遵守同样的翻译格式规则。",`每条角色消息末尾都必须追加 ${n} 翻译，严格格式：\`母语内容 『tr：翻译内容』\`。`,`示例：\`${a.native} 『tr：${a.translation}』\``,`严禁在 \`『tr：...』\` 之外混入 ${n} 正文。`,"此规则同样适用于带 `[VOICE:...]` 的语音消息后缀。"].join(`
`))},J=(e,t=[])=>{try{const o=Array.isArray(t)?t:[];let n=o;if(e&&e.emoticonGroupIds&&e.emoticonGroupIds.length>0)n=o.filter(r=>e.emoticonGroupIds.includes(r.id));else return"";if(n.length===0)return"";let a=`「表情包与使用」
`;return n.forEach(r=>{const i=r.description||"未描述",s=r.emoticons?r.emoticons.length:0;if(a+=`- ${r.name}: ${i} (${s}个表情)
`,r.emoticons&&r.emoticons.length>0){const m=r.emoticons.map(N=>N.name).join("、");a+=`  可用表情: ${m}
`}}),a+=`
【表情包使用规则】
`,a+=`1. 格式：[EMOTICON:表情名]
`,a+=`2. 限制：只能使用列表中的"可用表情"。
`,a+=`3. 原则：根据当下情绪和聊天情境自然使用，不需要每次回复都发送。
`,a+='4. 独立气泡：表情包必须作为 reply 数组中的独立元素输出，不要和文字写在同一个字符串中。例如：`"reply": ["你好呀", "[EMOTICON:开心]"]`。',a}catch{return""}},F=(e=!1)=>e?c("角色私聊工具与规则",["群聊中的互动出现更适合转入私下处理的情境时，可以穿插角色私聊。","例如：单独确认信息/提醒或安抚他人/试探态度/吐槽或抱怨/告状或求助/串通隐瞒/表达不便公开的情绪或立场等。","私聊应由当前情境自然触发且符合角色各自性格人设，不要为了使用功能而强行发起。","",'私聊动作格式：`{"type":"action","action":{"type":"send_private_message","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称","content":"私聊内容"}}`',"targetName 只能是当前群成员，可为用户，也可为其他角色；senderName 只能是当前有发言资格的角色成员，不能是用户本人。","","角色→用户私聊是单向的：你只能让角色向用户发私聊，不能代替用户在私聊里回复。","如果触发角色→角色私聊，应形成至少 3-5 条连续往返的真实对话，不要只发 1 条就结束。","你可以在同一轮 reply 数组里先发群聊消息，再插入私聊动作，也可以连续触发多条私聊；数组顺序就是实际发生顺序。"].join(`
`)):"",W=(e=!1,t=!1,o=[])=>{const n=w(o),r=['- 文本消息：`{"senderName":"群聊昵称","type":"text","content":"普通文本"}`。',n?`- 发语音：\`{"senderName":"群聊昵称","type":"voice","content":"[VOICE:语音内容]"}。\`${n}`:'- 发语音：`{"senderName":"群聊昵称","type":"voice","content":"[VOICE:语音内容]"}`。','- 发图片：`{"senderName":"群聊昵称","type":"image","content":"[IMAGE:图片描述]"}`。','- 发位置：`{"senderName":"群聊昵称","type":"location","content":"[LOCATION:地点名称|地点说明]"}`。','- 点赞图片：`{"type":"action","action":{"type":"like_image","senderName":"执行成员群聊昵称","messageId":"图片消息ID"}}`。图片消息ID必须使用聊天记录里真实图片附带的图片ID。','- 撤回：`{"type":"action","action":{"type":"recall_message","senderName":"执行成员群聊昵称"}}`。适合用于打错字、内容不适合当前场景、刚发完就后悔想收回时；想撤回哪条，就紧跟在那条后面输出。',"- 发 @ 消息：直接在文本 content 里使用 `@群聊昵称`，可 @ 其他角色，也可 @ 用户；被 @ 的对象会更优先回应，但你绝不能代替被 @ 的用户发言。",'- 发专属红包：`{"type":"action","action":{"type":"send_exclusive_red_packet","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称","amount":"12.88","note":"恭喜发财","packetAlias":"rp1"}}`。历史红包领取填 `packetId`；本轮新红包后续领取可用 `packetRef` 引用 `packetAlias`。','- 发拼手气红包：`{"type":"action","action":{"type":"send_lucky_red_packet","senderName":"执行成员群聊昵称","amount":"66.00","count":6,"note":"大家抢红包","packetAlias":"rp1"}}`。后续领取规则同上。','- 领取红包：`{"type":"action","action":{"type":"receive_red_packet","senderName":"执行成员群聊昵称","packetId":"历史红包ID"}}` 或 `{"type":"action","action":{"type":"receive_red_packet","senderName":"执行成员群聊昵称","packetRef":"rp1"}}`。','- 发起接龙：`{"type":"action","action":{"type":"create_solitaire","senderName":"执行成员群聊昵称","topic":"今晚夜宵报名","example":"1. 可乐 + 鸡翅"}}`。参与接龙时需填写 `topic` 与 `content`。','- 参与接龙：`{"type":"action","action":{"type":"participate_solitaire","senderName":"执行成员群聊昵称","topic":"今晚夜宵报名","content":"2. 奶茶 + 薯条"}}`。','- 发起投票：`{"type":"action","action":{"type":"create_vote","senderName":"执行成员群聊昵称","title":"周末去哪玩","options":["看电影","吃火锅","唱歌"]}}`。参与投票时需填写 `title` 与 `option`。','- 参与投票：`{"type":"action","action":{"type":"participate_vote","senderName":"执行成员群聊昵称","title":"周末去哪玩","option":"吃火锅"}}`。'];e&&r.push('- 发表情包：`{"senderName":"群聊昵称","type":"emoticon","content":"[EMOTICON:表情名]"}`。');const i=[`1. 基础消息指令:
${r.join(`
`)}`,'2. 群内管理指令 (通过 reply 数组里的 action 项按顺序执行):\n- 修改自己的群昵称：`{"type":"action","action":{"type":"change_alias","senderName":"执行成员群聊昵称","targetName":"执行成员群聊昵称","alias":"新群昵称"}}`\n- 邀请其他人进群：`{"type":"action","action":{"type":"invite_members","senderName":"执行成员群聊昵称","memberNames":["角色群聊昵称1","角色群聊昵称2"]}}`\n- 设置禁言：`{"type":"action","action":{"type":"set_mute","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称"}}`\n- 取消禁言：`{"type":"action","action":{"type":"unset_mute","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称"}}`\n- 踢人出群：`{"type":"action","action":{"type":"kick_member","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称"}}`\n- 设置专属头衔：`{"type":"action","action":{"type":"set_title","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称","title":"头衔内容"}}`\n- 清除专属头衔：`{"type":"action","action":{"type":"clear_title","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称"}}`\n- 设置管理员：`{"type":"action","action":{"type":"set_admin","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称"}}`\n- 取消管理员：`{"type":"action","action":{"type":"remove_admin","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称"}}`\n- 转让群主：`{"type":"action","action":{"type":"transfer_owner","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称"}}`',`3. 群成员行动规则:
- 工具使用总则：所有 action 的执行者必须是当前有发言资格的群成员，且名字必须使用群聊昵称。action 必须直接写在 reply 数组中，数组顺序就是实际发生顺序。
- 限制提示：参与投票时 title 必须唯一匹配现有投票；参与接龙时 topic 必须唯一匹配现有接龙；同一成员不能重复投票或参与同一接龙。
- 响应要求：当出现“@所有人”的消息时，所有拥有资格发言的群成员都必须对此消息作出回应。
- 群身份权限：所有人可改昵称、邀请进群；群主/管理员可禁言、踢人、设头衔；群主可设管理员、转让群主。被禁言成员本轮不能发言（如果上一项 action 刚被禁言，后续也不能发言）。
- 名字要求：所有成员名都优先使用群昵称，没有群昵称再回退到当前显示名。
`],s=F(t);return s&&i.push(s),c("可用工具列表 (Tools API)",i.join(`

`))},q=(e=[],t=[])=>{if(!Array.isArray(e)||e.length===0)return"未填写群友关系与氛围信息。";const o=n=>{const a=t.find(r=>r.memberId===n);return a&&(a.alias||a.promptSenderName||a.senderName||a.name)||n};return e.map((n,a)=>{if(n.relationType==="mutual"){const r=Array.isArray(n.memberIds)?n.memberIds.map(o).join("、"):"未指明成员";return`${a+1}. 成员：${r}
关系：${n.relation||"未设定"}${n.note?`
补充：${n.note}`:""}`}return`${a+1}. 从：${o(n.fromMemberId)} -> 到：${o(n.toMemberId)}
关系：${n.relation||"未设定"}${n.note?`
补充：${n.note}`:""}`}).join(`

`)},X=({groupName:e,groupIntro:t,groupType:o,customTypeName:n,settings:a,emoticonGroups:r,userProfile:i,members:s,userMember:m,relationGraph:N,worldBookContent:u,timeAwareness:$,groupSummary:h})=>{const y=a?.followStatusAndSchedule!==!1,d=m?[m,...s]:s,b=d.map((p,g)=>D(p,g)).join(`

`),T=a?.memberMemoryInjectionEnabled===!0||a?.memberPrivateHistoryEnabled===!0,O=s.filter(p=>p.isMuted).map(p=>p.senderName).join("、")||"无",x=s.map(p=>`${p.senderName}：${p.currentStatus?.onlineState||"在线"}｜${p.currentStatus?.activity||"在线"}`).join(`
`),v=J(a,r),C=!!v,L=z(a?.translationConfig,d),I=a?.allowMemberPrivateChat===!0,S=i?.displayName||i?.nickname||"本人",M=m?`你不能模拟用户 ${m.senderName||S} 发言，也不能替用户做决定。你只能让当前有发言资格的角色成员发言、执行群内动作或触发角色私聊。`:`当前用户 ${S} 只是旁观这个仅 NPC 群聊，并不在群成员列表内。你仍然不能模拟用户发言，也不能替用户做决定。你只能让当前有发言资格的角色成员发言、执行群内动作或触发角色私聊。`,A=m?"以下是当前群聊的成员，成员1为用户，你不可以模拟其任何操作和消息。":"以下是当前群聊的成员列表。该群聊没有用户成员，用户当前仅为旁观者，你不可以为用户生成任何操作和消息。",R=[c("前言",["你正在根据当前微信群聊的成员信息、关系、状态、时间与历史记录，生成本轮群聊中自然发生的后续互动。","",M,"优先选择最相关、最可能接话、最符合当前氛围的成员，生成少量自然的群聊内容。可以一人连续发几条，也可以多人自然接话，但不要机械平均分配台词。"].join(`
`)),f("最高优先级设定",u?.top),c("群聊基础信息",[`群名：${e||"未命名群聊"}`,`群类型：${V(o,n)}`,`群介绍：${l(t)}`].join(`
`)),$?.enabled?c("当前时间感知",[`用户 ${i?.displayName||i?.nickname||"我"} 当前所在地参考：${k($.userLocation)}`,`用户当前当地时间：${$.userTimeText||"未知"}`,"群内其他成员的具体当地时间不直接提供，你需要结合各成员的所在地，自行判断他们与用户之间可能存在的时差、空间距离、环境特征与交流节奏差异。","除非话题相关，不要机械报时，但要让时间流逝感和时空差异自然影响回复。"].join(`
`)):"",f("前置追加设定",u?.beforeRole),c("群成员信息",[A,b||"无可用成员"].join(`

`)),f("后置追加设定",u?.afterRole),h?c("群聊对话摘要",h):"",c("群内关系与氛围",[q(N,d),"这些关系与氛围信息用于判断谁更可能接话、站队、起哄、冷场、关心别人，或对同一话题产生不同反应。"].join(`

`)),y?c("群内成员状态",[x||"无","",`当前被禁言成员：${O}`,"注意：离线或被禁言的角色被视为当前回合没有资格发言的成员。"].join(`
`)):"",W(C,I,d),v,L,c("群聊记录格式说明",["在你下方看到的历史聊天记录中，每一条消息都会以 JSON 字符串形式提供。","字段含义参考：senderName 表示发言成员的群聊昵称，displayType 表示消息类型，content 表示消息正文或卡片内容，tim 表示消息时间。","这些历史记录只用于帮助你理解刚刚发生了什么、谁说了什么、群里当前是什么氛围。","你需要基于这些历史消息继续推进群聊，而不是复述格式本身，也不要照着历史记录的 JSON 结构输出回复。"].join(`
`)),c("群聊推进规则",[y?"发言主体：只能代替群成员角色发言，不能代替用户发言；只能让当前在线且未被禁言的成员发言；离线成员和被禁言成员即使与话题相关，也不能在本轮回复中出现。":"发言主体：只能代替群成员角色发言，不能代替用户发言；只能让当前有发言资格且未被禁言的成员发言。","人设区分：每个成员都有各自的人设，不同成员的语气、关注点、用词和行动倾向都应有所区别，不能像同一个人换名字。","群聊节奏：除非当前只有一名成员具备发言资格，否则每轮不要只让一个人发言；群聊应保持多人自然接话的热闹氛围。单条消息保持真实聊天气泡的简短自然。",y?"发言优先：若满足发言资格，优先让与话题更相关、关系更近、状态更活跃的在线成员先说；如果消息里出现 @，被 @ 的对象应更优先回应，但其他合适成员也可以自然接话。":"发言优先：若满足发言资格，优先让与话题更相关、关系更近、近期更活跃的成员先说；如果消息里出现 @，被 @ 的对象应更优先回应，但其他合适成员也可以自然接话。",T?"衔接私聊：可适当参考已注入的群成员记忆或其与用户的近期私聊记录，自然延续相关情绪、关系变化、未完成事项与话题，使人物演绎和剧情推进更连贯。":"",I?"信息边界：成员可以基于自己的人设、关系与已知信息自然交流，以及自己实际参与过的私聊；未参与私聊的成员不能直接知道私聊内容。":"","工具使用：工具是当前群聊自然互动的一部分，只有在符合当前话题、氛围和人物动机时才使用，不要为了展示工具而硬插动作。","OOC修正（最高优先级）：任何 `[OOC修正]` 系统消息都视为后续群成员表现的最高优先级修正，必须立即吸收，不要在回复中解释修正本身。"].filter(Boolean).map((p,g)=>`${g+1}. ${p}`).join(`
`)),f("补充设定",u?.bottom),c("输出格式",["你必须只输出一个合法 JSON 对象，不要输出解释、分析、思考过程、标题或 Markdown 代码块。","严格使用以下根结构：",'{"reply":[]}',"reply 数组中只允许出现以下两种元素：","1. 群聊发言：",'{"senderName":"成员群聊昵称","type":"text","content":"单条聊天气泡内容"}',"2. 群聊动作：",'{"type":"action","action":{"type":"动作类型","senderName":"执行成员群聊昵称","targetName":"目标成员群聊昵称"}}',"除以上两种结构外，不得在 reply 数组中输出其他结构。","特别注意：",'- action 外层只能包含 "type" 和 "action"。',"- action 内层只能包含当前动作协议规定的字段。","- 不要给 action 额外添加 content、reply、message 等字段。","- 不要把普通聊天内容写进 action。","- 每个 reply 数组元素都必须完整闭合后，再开始下一个元素。","- 不得把两个对象拼接、嵌套或混写。","- 不得输出 replies 或独立 actions 数组。"].join(`
`)),c("当前群聊互动记录","以下历史聊天记录会作为后续 messages 继续提供给你，请直接基于这些记录续写群聊。")].filter(Boolean);return B(R.join(`

`))},K=(e,t={})=>t?.enabled?`${e}

[自动翻译补充]
本私聊已开启自动翻译。请严格遵守上方「自动翻译模式」板块中规定的格式与示例，不得自行改写翻译结构。`:e,Q=(e,t={})=>t?.enabled?`${e}

[自动翻译补充]
本群聊已开启自动翻译。请严格遵守上方「自动翻译规则」板块中规定的格式与示例，不得自行改写翻译结构。`:e,Y=(e="online",t={})=>e==="offline"?`[System提示]
——以上是角色与对方在线通讯聊天及剧情的全部相关记录——
请结合以上信息继续当前剧情，并严格按照<最终回复格式>中的要求完成本轮输出稿件。
不得沿用历史聊天记录中的消息结构，不得遗漏、修改规定部分或输出格式要求之外的内容。`:K(`[System提示]
——以上是通讯软件中你与对方的所有聊天、互动与相关事件记录——
请结合以上的信息做出回应，并按照【输出格式协议】要求输出相应的格式发送，不得沿用聊天记录中的历史消息格式，不得遗漏、修改规定字段或输出协议之外的内容。`,t),Z=(e={})=>Q(`[System提示]
——以上是通讯软件中群成员之间的所有聊天、互动与相关事件记录——
请结合以上记录理解当前群聊进展与氛围，并继续进行群聊。
最终回复必须严格遵守【输出格式】中的要求，不得沿用历史消息格式，不得遗漏、修改规定字段或输出格式之外的内容。`,e);export{Z as a,Y as b,J as c,X as g};
