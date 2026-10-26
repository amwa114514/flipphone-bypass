import{U as N,j as c,s as W,Z as E}from"./index-BsGTho4G.js";import{u as H}from"./weibo-BtFVDgUt.js";const I=t=>{const i=t.getFullYear(),u=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${i}-${u}-${n}`},J=async(t,i,u={})=>{const n=N(t,null,"",{appName:"系统后台决策"});n?.sections&&(n.sections=n.sections.filter(e=>e.key!=="core_dialogue_guidelines"));const d=n?.sections?.find(e=>e.key==="current_state");if(d){const s=d.content.indexOf("「你的APP活动记录」");s>=0?d.content=d.content.slice(s):n.sections=n.sections.filter(f=>f.key!=="current_state")}const T=Array.isArray(t?.storylines)?t.storylines.find(e=>e.id===t.activeStorylineId)||t.storylines[0]:null,w=Array.isArray(c.masks)&&c.masks.find(e=>e.id===t?.activeMaskId)||null,r=w?.name||w?.nickname||c.currentMask?.name||c.currentMask?.nickname||"用户",C=H(),M=await C.getCharacterSocialContexts({character:t,storyline:T,maskName:r});n?.addSection&&n.addSection("personal_social_records",`「你的个人社交记录」
`+C.formatCharacterChatContexts(M,r),"recent_activity");const j=n?n.build():"",h=new Date(W.calendar.currentDate),x=I(h),P=u.phoneUsageStatus||"自由（当前无进行中行程）",A=u.currentScheduleText||"当前无进行中行程。",a=[];let l="用户";const U=i.map(e=>`- "${e.id}"：${e.activities.map(s=>`"${s}"`).join(" / ")}`).join(`
`),S=i.find(e=>e.id==="wechat");if(S){const e=[];S.activities.includes("sendMessage")&&e.push(`- "sendMessage"：主动联系${r}、继续一段值得接续的聊天，或此刻有话自然想和对方说。`),S.activities.includes("moments")&&e.push('- "moments"：浏览朋友圈，或根据实际情况发布、点赞、评论、回复朋友圈内容。动态发布频率应符合正常社交习惯，不为了活跃而频繁发动态。'),a.push(`【Wechat】

${e.join(`
`)}`)}const g=i.find(e=>e.id==="weibo");if(g){const e=[];g.activities.includes("browseTrending")&&e.push('- "browseTrending"：浏览微博推荐、今日热点、他人动态或视频。'),g.activities.includes("postWeibo")&&e.push('- "postWeibo"：发布或者管理自己的微博。仅在当前确实有表达、分享、记录或参与讨论的欲望时选择，不为了保持活跃而发布。'),a.push(`【Weibo】

${e.join(`
`)}`)}const p=i.find(e=>e.id==="calendar");if(p){if(t.activeMaskId){const o=c.masks.find(m=>m.id===t.activeMaskId);o&&(l=o.name||o.nickname||l)}else c.profile?.nickname&&(l=c.profile.nickname);const e=E.getCharSchedules(t.id);let s=`你(角色)的近期日程：
`,f=!1;for(let o=0;o<7;o++){const m=new Date(h);m.setDate(h.getDate()+o);const D=I(m),y=e[D];!Array.isArray(y)||!y.length||(f=!0,y.forEach(b=>{const _=b.isCompleted?"[已完成]":"[未完成]";s+=`- [${D}] ${b.time} ${b.title} ${_}
`}))}f||(s+="近期无具体安排。");const k=[];(p.activities.includes("viewUserSchedule")||p.activities.includes("checkSchedule"))&&k.push(`- "viewUserSchedule"：查看${l}近期日程，也可以根据实际关系和内容留下行程留言。`),p.activities.includes("addEvent")&&k.push('- "addEvent"：处理自己的日程，包括新增安排、调整时间、推迟事项或处理当前未完成的安排。'),a.push(`【Calendar】

当前日期：${x}

${s}

当前行程手机使用状态：
${P}

${k.join(`
`)}`)}const v=i.find(e=>e.id==="shopping");if(v){const e=[];v.activities.includes("browseItems")&&e.push(`- "browseItems"：逛逛购物APP。可以随意浏览平台推荐给自己的商品，也能给自己或${r}点外卖或者网购。看到喜欢但暂时不合适的也可先收藏。`),v.activities.includes("viewUserCart")&&e.push(`- "viewUserCart"：你可以查看${r}的购物车。了解对方最近想要买什么东西，可以为对方清空或购买其中几种，也可以只是看看。`),a.push(`【Shopping】

${e.join(`
`)}`)}const $=i.find(e=>e.id==="couple_space");if($){const e=[];$.activities.includes("coupleTask")&&e.push('- "coupleTask"：查看当前情侣任务；仅在任务值得关注时形成可供之后自然提起的想法，不等于立即发消息。'),$.activities.includes("homePetInteraction")&&e.push('- "homePetInteraction"：回情侣小家查看、互动或照顾已领养宠物；可什么都不做，不等于必须消费。'),a.push(`【Couple Space】

${e.join(`
`)}`)}return`
${j}

<当前任务：自主行为决策>

根据你当前的时间、状态、生活安排、近期活动和各应用中的实际情况，决定接下来是否有想做或需要做的手机活动。

你使用自己的手机是自由的。此刻可以做真正想做、需要处理或自然会顺手做的事情，也可以什么都不做。

不需要为了使用功能而刻意安排活动；如果某件事刚做过、目前没有需要、正在忙其他事情，或此刻单纯不想碰手机，都可以不再安排。

当前行程：${A}
当前行程手机使用状态：${P}

「可用应用」

${a.join(`

`)}

「决策」

结合当前实际情况决定接下来最自然的 0–3 个活动，并按先后顺序排列。

- 优先考虑此刻真正想做、需要处理或自然会顺手做的事情。
- 参考近期已经发生的手机活动，避免短时间内无理由重复相同行为。
- 当前存在正在进行或尚未处理的现实事务、日程时，应考虑它们对手机使用的影响。
- 手机使用状态为“偶尔”或“受限”时，根据实际情境减少不必要活动；没有自然理由时可以不安排任务。
- 不要求覆盖不同 APP，也不要求凑满任务数量。
- 后续任务应自然连续，不要为了增加数量拼接互不相关的操作。

「内部ID」

${U}

app 与 activity 必须严格使用以上内部 ID，不得翻译或改写。

「输出格式」

仅输出合法 JSON：

{
  "tasks": [
    {
      "app": "weibo",
      "activity": "browseTrending"
    }
  ]
}

没有自然活动时：

{
  "tasks": []
}

tasks 数量为 0–3。

</当前任务：自主行为决策>`.trim()};export{J as getDecisionPrompt};
