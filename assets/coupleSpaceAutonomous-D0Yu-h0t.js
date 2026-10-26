import{P as T,J as _,e as C,o as I,j as g,s as N,et as E,U as F,eu as R,W as M,X as j,Y as B,T as L,V as O}from"./index-BsGTho4G.js";import{u as W}from"./weibo-BtFVDgUt.js";const H=["食物：草莓蛋糕 20、豪华便当 50、棒棒糖 10、奶茶 30、能量饮料 35、果蔬沙拉 40","家具：云朵沙发 800、星星地毯 300、月亮挂灯 100、梦幻公主床 1200、音乐八音盒 200、星空投影仪 600、柔软抱枕 80","玩具：绒毛小熊 150、游戏机 500、小风车 50；学习：绘画入门课 400、家庭作业 100、乐器练习册 300、体能训练课 250"].join(`
`),D=({corePrompt:e="",task:n=null}={})=>[e,"<情侣任务>","【今日情侣任务】",n?`日期：${n.date}
状态：未完成

任务：
${n.description||"未填写"}`:"当前没有仍有效的情侣任务。",`【任务认知】
今天这个情侣任务还没有完成。

结合当前时间、今天已经发生的事、双方关系、近期互动和聊天状态，想一想接下来怎么完成更自然：

- 准备什么时候完成
- 是自己主动完成，还是提醒对方一起
- 是否需要稍微提醒或催一下对方
- 如果当前不合适，也可以暂时不推进

在 info 中简短保留“是什么任务”以及当前对它的打算，保证这条认知脱离本次任务提示后仍然能够被理解。

只记录对之后有用的近期想法，不需要展开分析，也不代表现在必须立即执行。`,`【输出格式】

仅输出 JSON：

{
  "info": ""
}`,"</情侣任务>"].filter(Boolean).join(`

`),U=({corePrompt:e="",homeItemsText:n="",homeRecordsText:t="",fundText:o="",petText:a="",petAffinityText:r="",hasPet:s=!1}={})=>[e,"<小家与宠物互动>","这是你们在情侣空间里的共同小家。你可以根据当前实际情况照顾宠物、和它互动、使用或添置物品，也可以处理情侣基金。",`【当前小家物品】
`+(n||"暂无已拥有物品。"),`【最近小家与互动记录】
`+(t||"暂无最近记录。"),`【情侣基金】
`+o,`【家园商城参考】
`+H+`

以上仅作参考，也可以生成符合当前小家需求、价格合理的新物品。`,s?`【宠物设定与当前状态】
`+a+`

`+r:"",s?`【互动规则】
- 【最近小家与互动记录】中的聊天和操作都已经真实发生，只用于理解现状、衔接关系和避免重复；不得复述、续写、改写或再次写入其中已有的对话，也不得机械重演已完成的操作。
- 留意宠物的心情、饱食度、精力和健康；任一状态低于 60 时，优先根据实际需求及时照顾。
- 结合宠物性格、喜恶、近期互动、已有物品和它与你们双方的亲密关系决定怎么互动。
- 已有合适且未使用的物品时，可以优先使用，不必重复购买同类物品。
- 可以戳一戳宠物、使用物品、和宠物聊天，也可以购买合适的小家物品或给情侣基金充值。
- 和宠物聊天时，可以聊当下、宠物状态、小家里的事，也可以自然提到对方和与对方有关的事情；不需要每次都提。
- 宠物聊天应形成自然完整的互动，不要只用一句问候或一问一答草草结束。
- 使用合适的物品、照顾和互动可能增加宠物与你之间的亲密度，具体变化由系统处理。
- 购买前参考已有物品、近期记录和基金余额，避免无理由重复购买；充值也不要机械发生。
- 一次只做当前自然需要的少量行为，没有需要时 actions 可以为空。
- pet_chat 中 sender 只能是 character 或 pet；用户不在场时绝不能生成 user 消息；info 不复制完整聊天，只保留后续值得记住的结果或想法。`:`【互动规则】
当前没有已领养宠物，只能查看小家、购买合适物品或给情侣基金充值；不得生成宠物数据、宠物行为或宠物聊天。一次只做当前自然需要的少量行为，没有需要时 actions 可以为空。`,`【输出格式】

仅输出 JSON：

{
  "actions": [
    { "type": "recharge", "amount": 100 },
    { "type": "buy_item", "name": "物品名称", "price": 80, "effect": "可为空" },
    { "type": "use_pet_item", "itemName": "当前已有的物品名称" },
    { "type": "pet_poke" },
    {
      "type": "pet_chat",
      "dialogue": [
        { "sender": "character", "content": "一句真实发言" },
        { "sender": "pet", "content": "一句真实回复" }
      ]
    }
  ],
  "info": "可为空的简短近期认知"
}`,"</小家与宠物互动>"].filter(Boolean).join(`

`),J="【情侣任务近期认知】",x="【情侣空间小家近期认知】",l=e=>String(e??"").trim(),X=e=>e?.storylines?.find(n=>n.id===e.activeStorylineId)||{},S=(e,n)=>`couple_daily_task_info_${e}_${n}`,A=e=>{const n=new Date().toLocaleDateString("zh-CN",{month:"long",day:"numeric"});try{const t=JSON.parse(localStorage.getItem(`couple_daily_task_${e}`)||"null");return!t||t.date!==n||t.completed||!t.task?.description?null:{date:t.date,completed:!1,description:l(t.task.description)}}catch(t){return console.warn("[CoupleSpaceAutonomous] 读取情侣任务失败",t),null}},ie=e=>!!A(e),b=e=>{const t=(typeof e=="string"?e:e?.content)?.match(/\{[\s\S]*\}/);if(!t)throw new Error("情侣空间自主活动返回格式错误");return JSON.parse(t[0])},P=async e=>{const n=_.characters.get(e);if(!n)return null;const t=E();if(!t.isCharacterUnlocked(e))return null;const o=t.relationships[e]||{},{mId:a,sId:r}=t.ensureDataStructure(e,n.activeMaskId||o.originMask||"default_mask",n.activeStorylineId||o.originWorldBook||"default_storyline"),s=t.data[e]?.masks?.[a]?.storylines?.[r],i=X(n),p=Array.isArray(g.masks)&&g.masks.find(m=>m.id===n.activeMaskId)||null,f=p?.name||p?.nickname||g.currentMask?.name||g.currentMask?.nickname||"用户",u=W(),h=await u.getCharacterSocialContexts({character:n,storyline:i,maskName:f}),d=F(n,i,"",{appName:"情侣空间",worldBookScope:"character-entry-only",excludeChatSessionWorldBook:!0});if(d?.sections){d.sections=d.sections.filter(c=>!["core_dialogue_guidelines","life_schedule"].includes(c.key));const m=d.sections.find(c=>c.key==="current_state");if(m){const $=m.content.indexOf("「你的APP活动记录」");$>=0?m.content=m.content.slice($):d.sections=d.sections.filter(k=>k.key!=="current_state")}}return d?.addSection&&d.addSection("personal_social_records",`「你的个人社交记录」
`+u.formatCharacterChatContexts(h,f),"recent_activity"),s?{character:n,coupleStore:t,mId:a,sId:r,data:s,corePrompt:d?.build?.()||""}:null},q=e=>(e||[]).slice(0,20).map(n=>`- [itemName:${n.name}] [itemId:${n.itemId||"未知"}] ${n.name||"未命名物品"}｜${n.price||0}基金｜${n.isUsed?"已使用":"未使用"}${n.effect?`｜${n.effect}`:""}`).join(`
`),y=e=>Number(e)||0,v=(e,n)=>{const t=l(e);return t==="伴侣"||t==="伴侣充值"?n:t||"系统"},V=(e,n,t)=>{const o=e.getLoveFundWeeklyRemaining(n),a=e.getLoveFundRecords(n).slice(0,8).map(r=>`- ${r.type==="recharge"?"充值":"支出"} ${r.amount}｜${v(r.operator,t)}｜${r.desc||""}`).join(`
`)||"- 暂无账目";return`当前基金余额：${e.getLoveFund(n)}
本周角色已充值：${Math.max(0,520-o)}
本周剩余可充值额度：${o}
近期基金分配/账目：
${a}`},Y=(e,n,t,o)=>{const a=[];(e?.messages||[]).forEach(s=>{const i=s.sender==="character"?o:s.sender==="pet"?e?.pet?.name||"宠物":s.sender==="user"?"用户":"系统",p=l(s.content);p&&a.push({timestamp:y(s.timestamp),text:`${i}：${p}`})}),n.getLoveFundRecords(t).forEach(s=>{const i=s.type==="recharge"?"向情侣基金充值":"从情侣基金支出";a.push({timestamp:y(s.timestamp),text:`系统账目：${v(s.operator,o)}${i} ${s.amount}${s.desc?`（${l(s.desc)}）`:""}`})}),(e?.shopItems||[]).forEach(s=>{y(s.buyTime)&&a.push({timestamp:y(s.buyTime),text:`系统记录：购入小家物品「${l(s.name)||"未命名物品"}」${s.price?`，花费 ${s.price} 基金`:""}`})});const r=e?.pet;return r?.adopted&&l(r.bubbleMessage)&&a.push({timestamp:y(r.bubbleTimestamp),text:`${r.name||"宠物"}的近期动态：${l(r.bubbleMessage)}`}),a.sort((s,i)=>i.timestamp-s.timestamp).slice(0,30).map(s=>`- ${s.text}`).join(`
`)},z=e=>{const n=Array.isArray(e.likes_and_dislikes?.likes)?e.likes_and_dislikes.likes.filter(Boolean).join("、"):"",t=Array.isArray(e.likes_and_dislikes?.dislikes)?e.likes_and_dislikes.dislikes.filter(Boolean).join("、"):"",o=[e.reactions?.onPoke?.length?`戳一戳：${e.reactions.onPoke.slice(0,3).join("、")}`:"",e.reactions?.hungry?.length?`饿了：${e.reactions.hungry.slice(0,2).join("、")}`:"",e.reactions?.mood?.good?.length?`开心时：${e.reactions.mood.good.slice(0,2).join("、")}`:""].filter(Boolean).join("；");return[`基本设定：名字 ${e.name||"宝宝"}｜物种 ${e.species||"未设定"}｜生日 ${e.birthday||"未设定"}｜描述 ${e.description||"未设定"}`,`性格与天赋：${(e.personality||[]).join("、")||"未设定"}｜天赋技能 ${e.innateTalent||"未设定"}｜口头禅 ${e.catchphrase||"无"}`,`喜欢：${n||"未设定"}
讨厌：${t||"未设定"}`,`能力：智力 ${e.intelligence??50}｜体能 ${e.stamina??50}｜自信 ${e.confidence??50}｜毅力 ${e.perseverance??50}｜才艺 ${e.talentValue??30}`,`当前状态：${e.petStatus||"adopted"}
心情 ${e.mood??100}｜饱食度 ${e.satiety??100}｜精力 ${e.energy??100}｜健康 ${e.health??100}｜当前外观 ${e.currentAppearance||"idle"}`,`行为反应：${o||"暂无专属反应"}`,`当前动态：${e.bubbleMessage||"暂无气泡动态"}`].join(`
`)},G=(e,n)=>{const t=Number(e?.affinity),o=Number.isFinite(t)?Math.min(100,Math.max(0,t)):50;return`宠物对你的亲密度：${o}%
宠物对对方（${n}）的亲密度：${100-o}%`},w=(e,n,t,o={})=>M().addEvent(e.id,{storylineId:e.activeStorylineId,app:"coupleSpace",activity:n,source:B.AUTONOMOUS,type:j.DAILY,title:"情侣空间自主活动",description:t,statusTag:"情侣空间",injectToPrompt:!0,timestamp:Number(o.activityOccurredAt)||Date.now()}),K=(e,n,t)=>{const o=l(t);if(!o||!n)return!1;const a=new Date;return a.setHours(23,59,59,999),R({taskId:S(e,n.date),characterId:e,triggerCondition:"角色查看到当日未完成情侣任务",promptContent:`${J}
你此前查看今日情侣任务时留下了这条想法：

- 任务：${n.description}
- 想法：${o}`,expiresAt:a.getTime(),remainingCycles:Number.MAX_SAFE_INTEGER}),!0},Q=(e,n)=>{const t=l(n);return t?(O(e,`${x}
你此前在情侣小家留下了这条近期认知：

- ${t}`,7),!0):!1},Z=async(e,n={})=>{const t=await P(e),o=A(e);if(!t||!o)return!1;const a=D({corePrompt:t.corePrompt,task:o});if(n.prepareCloudTaskSnapshot)return{appId:"couple_space",actionId:"coupleTask",messages:[{role:"user",content:a}]};const r=n.rawReply===void 0?await I.callApiWithFailover(a,{temperature:.65}):n.rawReply,s=b(r),i=K(e,o,s?.info);return w(t.character,"coupleTask",i?"查看了今日情侣任务，并留下了之后可自然提起的想法。":"查看了今日情侣任务，但当前没有适合推进的想法。",n),{task:o,hasInfo:i}},ee=(e,n)=>{const t=l(n).toLocaleLowerCase();return(e||[]).some(o=>{const a=l(o?.name).toLocaleLowerCase();return a&&t&&(a===t||a.includes(t)||t.includes(a))})},te=(e,n,t="")=>{const o=Math.round(Number(n)),a=e.character.id,r=e.character.activeStorylineId||e.sId,s=L(),i=e.coupleStore.getLoveFund(a),p=e.coupleStore.getLoveFundWeeklyRemaining(a),f=s.getRoleWalletAssets(a,r).balance,u=(m,c="")=>(s.getRoleWalletAssets(a,r).balance,e.coupleStore.getLoveFund(a),m);if(!Number.isFinite(o)||o<=0)return u(!1,"金额无效");if(o>p)return u(!1,"超过本周剩余充值额度");const h=s.recordRoleExpenseWithFallback({charId:a,storylineId:r,amount:o,title:"情侣空间充值",subtitle:"给恋爱基金充值",tag:"情侣空间",source:"couple_space_autonomous_recharge",sourceEventId:t||`couple_space_autonomous_recharge_${a}_${Date.now()}`});if(!h?.success)return u(!1,h?.reason||"角色钱包扣款失败");const d=e.coupleStore.rechargeLoveFund(a,o,e.character.nickname||e.character.name||"伴侣充值");return u(!!d,d?"":"情侣基金入账失败")},ne=(e,n)=>{const t=l(n?.name),o=Math.round(Number(n?.price));return!t||!Number.isFinite(o)||o<=0||o>e.coupleStore.getLoveFund(e.character.id)||ee(e.data.shopItems,t)?!1:e.coupleStore.buyItemToBackpack(e.character.id,e.mId,e.sId,t,o,l(n?.effect),"ta")},oe=(e,n)=>{if(!e.data.pet?.adopted)return!1;const t=(e.data.shopItems||[]).find(o=>o.name===l(n)&&!o.isUsed&&/^(f\d+|t\d+|l\d+)$/.test(String(o.itemId||"")));return t?(e.coupleStore.updateShopItem(e.character.id,e.mId,e.sId,t.uniqueId,{isUsed:!0}),e.coupleStore.useItemOnPet(e.character.id,e.mId,e.sId,t,e.character.nickname||e.character.name||"伴侣"),!0):!1},ae=(e,n)=>{if(!e.data.pet?.adopted||!Array.isArray(n))return 0;const t=n.map(a=>({sender:a?.sender,content:l(a?.content)})).filter(a=>(a.sender==="character"||a.sender==="pet")&&a.content).slice(0,12);if(t.length<2)return 0;const o=Date.now();return t.forEach((a,r)=>e.coupleStore.addMessage(e.character.id,e.mId,e.sId,{id:`${o}_${r}`,groupId:`${o}_autonomous_pet`,type:"pet_chat",sender:a.sender,content:a.content,timestamp:o+r*10,isPetDialogue:!0})),t.length},se=async(e,n={})=>{const t=await P(e);if(!t)return!1;const o=t.data.pet,a=t.character.nickname||t.character.name||"角色",r=g.masks?.find(m=>m.id===t.mId)||{},s=r.nickname||r.name||g.profile?.nickname||g.profile?.name||"对方",i=U({corePrompt:t.corePrompt,homeItemsText:q(t.data.shopItems),homeRecordsText:Y(t.data,t.coupleStore,e,a),fundText:V(t.coupleStore,e,a),hasPet:!!o?.adopted,petText:o?.adopted?z(o):"",petAffinityText:o?.adopted?G(o,s):""});if(n.prepareCloudTaskSnapshot)return{appId:"couple_space",actionId:"homePetInteraction",messages:[{role:"user",content:i}]};const p=n.rawReply===void 0?await I.callApiWithFailover(i,{temperature:.7}):n.rawReply,f=b(p),u=[];let h=!1;for(const[m,c]of(Array.isArray(f?.actions)?f.actions.slice(0,6):[]).entries()){const $=n.sourceEventId?`${n.sourceEventId}:${String(c?.type||"action")}:${m}`:"";if(c?.type==="recharge"&&te(t,c.amount,$)&&u.push("给情侣基金充值"),c?.type==="buy_item"&&ne(t,c)&&u.push(`购买了${l(c.name)}`),c?.type==="use_pet_item"&&oe(t,c.itemName)&&(u.push(`用${l(c.itemName)}照顾了宠物`),h=!0),c?.type==="pet_poke"&&o?.adopted&&(t.coupleStore.triggerPetPoke(t.character.id,t.mId,t.sId),u.push("和宠物互动")),c?.type==="pet_chat"){const k=ae(t,c.dialogue);k&&(u.push(`和宠物聊了${k}句`),h=!0)}}const d=Q(e,f?.info);return!n.cloudInboxId&&h&&N.showNotification({title:"情侣空间",message:(t.character.nickname||t.character.name||"角色")+"在“我们的小窝”发了新消息。",icon:t.character.avatar||"",source:"情侣空间",type:"couple_home_message"}),w(t.character,"homePetInteraction",u.length?`回到情侣小家，${u.join("；")}。`:"回到情侣小家查看了一会儿，但没有进行额外操作。",n),{outcomes:u,hasInfo:d}},le=(e,n,t={})=>T(async()=>{const o=_.characters.get(e);if(!o||!C(o,"coupleSpace"))return!1;if(n==="coupleTask")return Z(e,t);if(n==="homePetInteraction")return se(e,t);throw new Error("不支持的情侣空间自主活动: "+n)},`情侣空间自主活动: ${n}`),ue=S;export{le as executeAutonomousCoupleSpaceActivity,ue as getCoupleTaskAutonomousInfoId,ie as hasPendingCoupleTask};
