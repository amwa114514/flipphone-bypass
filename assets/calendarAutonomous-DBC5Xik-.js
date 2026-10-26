const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./calendarCompletion-BQwwumfb.js","./index-BsGTho4G.js","./index-ChLjAKfE.css","./calendarSettings-CHkRevLl.js","./calendar-DoJP3TDK.js"])))=>i.map(i=>d[i]);
import{U as Y,_ as I,j as r,C as S,Z as R,H as _,I as A,J as H,s as E,F as O,G as F,D as j,E as L}from"./index-BsGTho4G.js";import{g as N}from"./calendar-DoJP3TDK.js";import{calendarSettingsStore as U}from"./calendarSettings-CHkRevLl.js";S.extend(j);S.extend(L);const z=()=>!!O.getSceneBoundProviderId(F),G=e=>z()?`,
      "imagePrompt": "image的英文生图提示词"${v(e)?`,
      "faceReferences": []`:""}`:"",J=e=>z()?`- 开启行程快照生图字段时，已结束行程填写 image 中文描述，并填写 imagePrompt 为 image 对应的英文生图提示词。${v(e)?`
${v(e)}`:""}`:"- 已结束行程只填写 image 中文描述。",v=e=>_(A({characters:H.characters,masks:r.masks,character:e})),M=(e={})=>{const t=e.isCompleted?"已完成":e.isModified?"已修改":e.isPostponed?"已推迟":e.isAbandoned?"已放弃":"未完成",o=[`${e.endTime?`${e.time}-${e.endTime}`:e.time} ${e.title||"未命名行程"} (${e.tag||"日常"}，状态:${t})`];return e.location&&o.push(`地点:${e.location}`),e.description&&o.push(`描述:${e.description}`),e.purpose&&o.push(`目的:${e.purpose}`),e.processRecord&&o.push(`过程:${e.processRecord}`),`- ${o.join("；")}`},B=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,V=(e,t)=>{const n=new Date(`${t}T00:00:00`),o=R.getCharSchedules(e.id)||{},i=e.activeMaskId?r.masks.find(c=>c.id===e.activeMaskId):null,d=i?.name||i?.nickname||r.profile?.nickname||r.profile?.name||"用户",h=(R.schedules?.[t]||[]).map(M).join(`
`)||"无特殊安排",f=(o[t]||[]).map(M).join(`
`)||"暂无记录",$=[];for(let c=1;c<=7;c+=1){const g=new Date(n);g.setDate(n.getDate()-c);const a=B(g),s=o[a]||[];s.length&&$.push(`【${a}】
${s.map(M).join(`
`)}`)}return{maskName:d,userScheduleContext:h,existingSchedulesContext:f,pastSchedulesContext:$.join(`
`)||"近期暂无记录"}},W=(e,t)=>{const n=new Date,o=new Date(E.calendar.currentDate),i=["日","一","二","三","四","五","六"],d=o.getFullYear(),h=o.getMonth()+1,f=o.getDate();`${n.getHours()}${n.getMinutes().toString().padStart(2,"0")}`,`${i[o.getDay()]}`;let $=r.profile?.location||{};if(e&&e.activeMaskId){const l=r.masks.find(C=>C.id===e.activeMaskId);l&&l.location&&($=l.location)}const c=$.reality?.timezone||"Asia/Shanghai";let g="Asia/Shanghai";e&&e.location&&e.location.reality&&e.location.reality.timezone&&(g=e.location.reality.timezone);const a=S.tz(`${d}-${h}-${f} ${n.getHours()}:${n.getMinutes()}:${n.getSeconds()}`,"YYYY-M-D H:m:s",c),s=a.tz(g),m=`${a.year()}/${a.month()+1}/${a.date()} ${a.hour()}:${a.minute().toString().padStart(2,"0")} 星期${i[a.day()]}`,k=`${s.year()}/${s.month()+1}/${s.date()} ${s.hour()}:${s.minute().toString().padStart(2,"0")} 星期${i[s.day()]}`;let p="";if(e&&(e.location||e.region)&&r.profile.location){const l=e.location||{},C=l.virtual||e.region||"未知",D=l.reality?.city||"",u=r.profile.location||{},y=u.virtual||"未知",T=u.reality?.city||"";p=`
「双方所在地」
- 你所在的位置：${C}${D?`（现实参考：${D}）`:""}
- 喵喵所在的位置：${y}${T?`（现实参考：${T}）`:""}`;const b=u.reality?.timezone||"Asia/Shanghai",w=l.reality?.timezone||"Asia/Shanghai";try{const P=S().tz(b).utcOffset(),x=(S().tz(w).utcOffset()-P)/60;Math.abs(x)>.1&&(p+=`
- 你们之间存在约 ${Math.round(Math.abs(x))}小时时差。`)}catch{}p+=`

你自然理解双方各自所处的现实环境、时间与距离。但只有当前话题、行为或场景实际涉及地点、天气、出行、时差等因素时，才自然纳入判断；不要为了体现地域差异而主动提及。`}return`
「当前日历时间感知」
- 用户当地时间（设备时间）：${m}
- 你的当地时间：${k}
**重要指令**：在管理行程或评价行程时，时间必须明确标明基于用户的设备时间（用户当地时间），但你（角色）自己制定或判断行程时，必须严格按照【你的当地时间】来进行。例如，若你在国外，你在这个时间点做的事情与用户所在时区是不一样的。${p}
`.trim()},X=(e,t,n)=>{const o=Y(e,null,"",{appName:"浏览用户日历",promptProfile:"calendar-schedule",worldBookScope:"character-entry-only"}),i=o?o.build():"",d=W(e);return`
${i}

<CalendarTask>
<Context>
${d}
</Context>

【浏览日历APP】
你现在正在主动查看 ${t} 的日历行程。

<CurrentSchedules>
${n}
</CurrentSchedules>

【行动要求】
请根据你的人设、对 ${t} 的关心程度和你们的关系：
1. **留言功能**：你可以选择1-2个今天的行程，给 ${t} ，留言内容要完全符合你的人设语气。
2. **提取情报**：总结一下你从 ${t} 的行程中得知了什么重要信息（比如：${t}今天下午要开会、${t}明天要去医院等）。这些情报将作为你的短期记忆，稍后你在和 ${t} 聊天时可以主动提及。

【严格的最终输出格式】
你必须且只能输出一个纯净的 JSON 对象，不要包含任何 Markdown 标记（如 \`\`\`json）或多余的解释文字。

{
  "messages": [
    { 
      "date": "行程日期",
      "scheduleId": "行程的唯一ID", 
      "text": "你的留言内容" 
    }
  ],
  "learnedInfo": "你得知的重要信息总结（用第一人称描述，如'得知${t}今天下午要开会'）。如果没有得知特别的信息，请填空字符串。"
}

示例：
{
  "messages": [{"date": "2026-03-20", "scheduleId": "123456789", "text": "记得带伞笨蛋！"}],
  "learnedInfo": "得知${t}明天要出差去上海"
}
</CalendarTask>
`.trim()},ee=async(e,t,n)=>{const o=Y(e,null,"",{appName:"管理自己日历",promptProfile:"calendar-schedule",worldBookScope:"character-entry-only"}),i=o?o.build():"",d=G(e),h=J(e),f=U.getSettings(),{buildRelatedChatContext:$,getWeatherContextForDate:c}=await I(async()=>{const{buildRelatedChatContext:u,getWeatherContextForDate:y}=await import("./calendarCompletion-BQwwumfb.js").then(T=>T.h);return{buildRelatedChatContext:u,getWeatherContextForDate:y}},__vite__mapDeps([0,1,2,3,4]),import.meta.url),[g,a]=await Promise.all([$(e,t,f),c(e,t)]),s=N(f.calendarGuidanceText||""),m=V(e,t);let k=r.profile?.location||{};if(e.activeMaskId){const u=r.masks.find(y=>y.id===e.activeMaskId);u?.location&&(k=u.location)}const p=k.reality?.timezone||"Asia/Shanghai",l=e.location?.reality?.timezone||e.timezone||"Asia/Shanghai",C=`${S().tz(p).format("YYYY/M/D HH:mm")} ${p}`,D=`<system_directive type="manage_autonomous_calendar_schedule">
【系统指令：管理你的日历行程】

你是 **${e.name}**。
你现在正在管理自己 ${t} 及未来 6 天的日历行程。这不是聊天回复，也不是写给 ${m.maskName} 看的独白。

「时间参考与时差换算规则」
当前设备参考时间：${C}
${m.maskName} 展示时区：${p}
你的所在时区：${l}

【极其重要：时间换算协议】
1. 输出 JSON 中的 time / endTime 必须使用 ${m.maskName} 展示时区。
2. 判断实际作息与行程是否已结束时，必须基于你的当地时间，并在内部完成时区换算。
3. 今天已经结束的行程可以填写完整结果；未到开始时间或尚未结束的行程必须保持计划态。

「参考信息」
1. ${m.maskName} 当天行程：
${m.userScheduleContext}
说明：只在明确与你有关时参考。

2. 你近 7 天的行程事实摘要：
${m.pastSchedulesContext}
说明：请从中判断长期事务、未完成事项、职业线索、关系变化、身体状态、习惯安排是否会延续。

3. 你当天已有固定行程：
${m.existingSchedulesContext}
说明：必须避开已有时间段，不要重复或冲突；可以围绕固定行程生成前后合理延续。

4. 相关聊天记录：
${g}
说明：这些近期聊天仅作为近 3 天的社交环境参考，用于判断关系动向、约定往来与当天安排的潜在线索。只有当聊天内容能够真实支撑行程动机或安排依据时才吸收，不要逐条复述，也不要把普通闲聊机械改写成行程。

5. 天气环境参考：
${a}
说明：天气是外部环境，只影响合理性，不需要每条行程都提天气。下雨、高温、降雪、空气差、紫外线强等会影响出行方式、户外活动、地点选择和临时调整。

6. 日期属性：这是今天。只能给已经结束的行程写真实完成结果；未到时间或仍在进行的行程必须保持计划态。

${s}

「待管理行程」
${n}

【行动要求】
请根据你的人设、职业以及当前状态，按以下优先级管理行程：

第一优先级：补全已结束行程
- 先逐项检查「待管理行程」中所有仍为“未完成”、且结束时间已经早于【你的当地时间】的行程。
- 这些行程代表你已经度过但尚未记录的生活；只要根据行程内容、你的人设与当前上下文可合理推断其已发生，就必须优先在 modifyEvents 中将其标记为“完成”。
- 若同时存在多项待补全行程，优先补全时间更早的行程；可以在同一次输出中补全多项。
- 每一项完成记录都必须补全具体 processRecord、impact、mood、moodStatus；有配图时同时补全 image、imagePrompt${v(e)?" 与 faceReferences":""}，不能只改完成状态。
- 在所有应补全的已结束行程都处理前，不要新增未来行程，也不要仅修改或推迟无关行程。

第二优先级：安排后续生活
- 仅当没有需要补全的已结束行程后，才可按需添加一个新的、有现实事件价值的行程，或修改、推迟已有的未结束行程。
- 行程必须以你自己的生活为中心；不要添加等待用户消息、等待用户上线、单纯想用户、刷手机、发呆等碎片事件。
- 未结束或未来行程只能写计划信息，不要提前写真实完成过程、实际心情、实际影响或图片描述，图片字段必须留空。
- 独处行程的 participants 必须为空数组；不要把自己写进 participants。
- phoneUsageStatus 只能填写：high / medium / low / none。
- 未结束或未来行程的 impact 必须使用空数组：{"mood":[],"energy":[],"relationships":[]}。
- image 只能是中文虚拟图片描述，不能输出 URL、base64 或第三方图片接口。
- 严格按最终输出格式中给出的字段示例输出，不要擅自增删字段或改字段含义。
${h}

【严格的最终输出格式】
你必须且只能输出一个纯净的 JSON 对象，不要包含任何 Markdown 标记。
时间必须是 HH:mm 格式，24小时制。

{
  "newEvents": [
    {
      "date": "YYYY-MM-DD",
      "time": "HH:mm",
      "endTime": "HH:mm",
      "title": "行程名字",
      "tag": "日常/工作/社交/娱乐",
      "location": "具体地点",
      "participants": ["参与对象"],
      "purpose": "事件目的",
      "description": "具体背景、发生原因、涉及事项",
      "processRecord": "仅已结束行程填写，计划态留空",
      "impact": {
        "mood": [{"label": "情绪变化", "level": 1, "reason": "原因"}],
        "energy": [{"label": "精力变化", "level": -1, "reason": "原因"}],
        "relationships": [{"person": "人物", "level": 1, "reason": "原因"}]
      },
      "phoneUsageStatus": "high/medium/low/none",
      "mood": "仅已结束行程填写，计划态留空",
      "moodStatus": "开心/平静/无聊/烦躁/生气",
      "status": "完成/未完成",
      "action": "无/推迟/修改/放弃",
      "statusReason": "无则留空",
      "image": "仅已结束行程可填写的中文虚拟图片文字描述"${d}
    }
  ],
  "modifyEvents": [
    {
      "date": "YYYY-MM-DD",
      "scheduleId": "行程的唯一ID",
      "action": "完成|推迟|修改|放弃",
      "postponedToDate": "YYYY-MM-DD (仅推迟时填)",
      "postponedToTime": "HH:mm (仅推迟时填)",
      "time": "新开始时间(可选)",
      "endTime": "新结束时间(可选)",
      "modifiedTitle": "新名字 (仅修改时填)",
      "modifiedTag": "新标签 (仅修改时填)",
      "location": "新地点(可选)",
      "participants": ["新参与对象(可选)"],
      "purpose": "新目的(可选)",
      "description": "新描述(可选)",
      "phoneUsageStatus": "high/medium/low/none(可选)",
      "status": "完成/未完成(可选)",
      "reason": "操作原因",
      "processRecord": "已完成行程的具体经过，未完成留空",
      "impact": {
        "mood": [{"label": "情绪变化", "level": 1, "reason": "原因"}],
        "energy": [{"label": "精力变化", "level": -1, "reason": "原因"}],
        "relationships": [{"person": "人物", "level": 1, "reason": "原因"}]
      },
      "mood": "已完成行程的当下感受，未完成留空",
      "moodStatus": "开心/平静/无聊/烦躁/生气",
      "image": "仅已完成行程可填写的中文虚拟图片文字描述"${d}
    }
  ]
}
</system_directive>`;return[{role:"system",content:i},{role:"user",content:D}]};export{ee as getAutonomousCalendarAddEventPrompt,X as getAutonomousCalendarCheckPrompt};
