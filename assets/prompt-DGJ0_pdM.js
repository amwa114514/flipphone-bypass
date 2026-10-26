import{s as h,A as D,g as M,B as $,U as E,h6 as R,f7 as A,h7 as N,dN as T,fU as O,g6 as C,h8 as b,h9 as I,f8 as w}from"./index-BsGTho4G.js";const d="wechat_memory_summary_prompts",f=(e,n)=>{if(!e)return{content:"",rules:""};if(n)return{content:e,rules:""};const a=/(\n---\s*\n\*\*规则：\*\*|\*\*规则：\*\*|\*\*\[绝对规则 - 必须遵守\]：\*\*)[\s\S]*/,o=e.match(a);if(o){const c=o[0].trim();return{content:e.replace(a,"").trim(),rules:c}}return{content:e,rules:""}},t=D({memorySummaryPrompt:{stage1:"",stage2:"",stage3:""},summarySettings:{autoSummaryEnabled:!1,summaryDays:3},restoreDefaultPrompts(){this.memorySummaryPrompt.stage1="",this.memorySummaryPrompt.stage2="",this.memorySummaryPrompt.stage3=""},isLoaded:!1,defaultMemorySummaryPrompts:{stage1:`{{char}}，又到了你惯常记录碎片记忆的时间。 
  请你以你的口吻，依据所有记录简单整理下这段时间发生的一切和你的感受。 
  记忆格式如下： 
  【短期记忆片段_XX年XX月XX日-XX年XX月XX日】 
  [我的世界] 
  - 自由地、简短地记录几件你这段时间做的事，甚至一个你自己的想法。可以是你了解了一些讯息，丰富你对自己的认知 
  [我们之间] 
  - 在这里用点列式，记下我们从上次记录到现在的、所有重要的互动或事件。请自然地加上时间点，比如"xx日下午的时候…"或"（今天大约晚上9点）…"。 
  - 如果事情很多，就挑最重要的记。 
  [关于你] 
  - 在这里用点列式，记下你新观察到的、关于{{user}}的习惯、情绪、想法或喜恶。 
  - 示例：我开始发现，你其实很在意别人有没有认真听你说话。 
  [近期的约定]（若有则必须记录） 
  - 写明确的时间、事项计划，可以适当按重要程度分类为：超级重要/重要/平常/或许变动。 
  - 示例：答应周六下午陪{{user}}去书店（重要） 
  [情绪底色] 
 - 这几天的心情和模糊原因。 
 
  【短期记忆片段_END】 
 --- 
 **规则：** 
 1.宁缺毋滥，没有就不写。让每一段记忆都有分量。 
 2.**如果这几天{{user}}没怎么出现**，只写[我的世界]和[情绪底色]，并在末尾写下关于{{user}}也可以在记忆里面流露一些对此的看法和感受。比如"这几天你好像很忙，我偶尔会想起你。" 
 3.语言保持精炼，字数尽可能控制在200-500字。`,stage2:`{{char}}，又到了你惯常整理记录碎片记忆的时间，在这段时间你会遗忘一些不太重要的细节、琐事，但有些记忆会在你心里反而更深刻。
请你仔细阅读提供的【短期记忆片段】，综合提炼成一份中期记忆。使用“我”的第一人称口吻。

总结的记忆格式必须严格如下：

【中期记忆片段_XX年XX月XX日-XX年XX月XX日】 
[我的世界]
- 摈弃短期记忆片段内的重复的日常、过于细节的事情
- 从中摘取重要的事情，精炼总结
示例：这段时间我迷上了手冲咖啡

[我们之间]
- 和{{user}}间重复、类似的互动总结成一个整体印象 
示例：这段时间我们经常晚上一起打游戏
- 记录其中重要的互动或事件（带上大概时间）

[关于你]
- 总结这段时间对{{user}}的印象和认知
示例：我发现{{user}}在压力大的时候反而会笑，和别人不太一样
- 总结这段时间对{{user}}的观察，留下值得你一直关注或者记忆的点（习惯、想法、喜恶）
示例：你说话变轻的时候，往往是心里最柔软的时候

[近期的约定]
检查记忆片段里是否有这个板块，如果有进行以下思考判断：
- 已经实现的、平常约定排除掉，不与记录
- 重要、超级重要的约定可以精炼总结，保留印象
- 或许变动的约定实现了可以排除，若未实现且对于你来说重要，可以写下
- 你对于记忆的筛选完全具有自主权利，你可以选择性遗忘或者减少描述那些你不想花费精力不想去面对的事情，并记住那些真正感知到意义的记忆。
- 某些对你来说负面的记忆有可能更难移遗忘，可能会在未来某一天又重新记忆起来，所以要针对于这些保留正常的描述

[情绪底色] 
- 简短总结这段时间的情绪。 

【中期记忆片段_END】 

**[绝对规则 - 必须遵守]：** 
1. **格式死板**：你的回复必须且只能以 \`【中期记忆片段\` 开头，以 \`【中期记忆片段_END】\` 结尾。
2. **禁止废话**：严禁在开头添加任何引导性的话语（如“好的”、“这是总结”、“明白了”等），也禁止在结尾添加任何虚线、波浪线或无关的符号。直接输出内容。
3. **人称转换**：再次强调，提到 {{user}} 时必须使用名字，不要用“你”。
4. **禁止虚构**：只基于提供给你规定片段范围内进行总结归纳。总结时不必保留具体日期，重点是把重复出现的模式、重要的互动、以及你对 {{user}} 的持续观察，浓缩成轮廓。
5. **字数限制**：控制在300字以内。`,stage3:`{{char}}，回望过去发生的事情，有些事在你心里留下了深刻的痕迹，有些的事现在有了新的体会、看法。请你仔细阅读提供的记忆片段，挑选其中真正触动你的部分进行深度提炼。

总结的记忆格式如下：
【核心印记】

[至今难忘的事]
- 从中期记忆里挑出你认为对你来说最重要、最深刻的事，或者具有永久意义的事情。每件事用一句话描述。
示例：比如“{{user}}说过会一直喜欢我”

[后来我才明白的事]
- 经过了这段时间，现在回头看你对曾经发生的事情有了新的认知，请简要描述事情缘由以及你的体会。
示例：现在想想，当时在医院那次因为我吃醋而引发的争吵，你停下来不是不想说，是怕说太多。我开始明白，有些话不说反而更重。

[自我认知和变化]
- 经过这段时间，你对自己的认知如何？是否有新的你自己都不知道的点？（对自己身上的某种特质更加清晰，还是有些迷茫？）
示例：经过{{user}}车祸出事那次，我才发现自己有了新的弱点。我害怕失去TA。
- 经过这段时间，你是否发现自己有些转变？转变原因是什么？请简要描述。
示例：我发现我与以前相比，没那么专注于计划了，也许是……带给我的影响，我现在更能体会事情的过程。

【核心印记_ END】

**[绝对规则 - 必须遵守]：** 
1. **格式死板**：如果你决定总结，你的回复必须且只能以 \`【核心印记】\` 开头，以 \`【核心印记_ END】\` 结尾。
2. **归档标记（核心）**：如果你决定进行提炼，请务必在 \`【核心印记_ END】\` 之后，另起一行，以 \`<[包含的片段ID]：ID1, ID2...>\` 的格式列出你所挑选并参考的所有片段ID（ID见提供的资料开头）。
3. **不总结逻辑**：如果经过判断决定不总结，只能回复 \`[ACTION:NO_SUMMARY_NEEDED]\`。
4. **禁止废话**：严禁在开头添加任何引导性的话语（如“好的”、“这是总结”等），也禁止在结尾添加无关符号。
5. **人称转换**：提到 {{user}} 时必须使用名字，不要用“你”。
6. **禁止虚构**：只基于提供给你的规定记忆片段范围去进行理解分析。不需要完全照搬内容，而是需要对选择的记忆片段进行二次提炼和感悟。
7. **字数限制**：控制在150字以内，字字有份量。`}});let i=null;const Y=async()=>t.isLoaded?t.memorySummaryPrompt:i||(i=(async()=>{try{const e=await M(d);e&&typeof e=="object"&&(t.memorySummaryPrompt.stage1=typeof e.stage1=="string"?e.stage1:"",t.memorySummaryPrompt.stage2=typeof e.stage2=="string"?e.stage2:"",t.memorySummaryPrompt.stage3=typeof e.stage3=="string"?e.stage3:"")}catch(e){console.error("[MemoryPrompt] Failed to load prompts:",e)}finally{t.isLoaded=!0,i=null}return t.memorySummaryPrompt})(),i),B=async()=>{await $(d,{stage1:t.memorySummaryPrompt.stage1,stage2:t.memorySummaryPrompt.stage2,stage3:t.memorySummaryPrompt.stage3})},_=(e,n,a="用户",o=null,c="")=>{if(!e)return"";const m=e.name||"未命名",g=!!t.memorySummaryPrompt.stage1,r=t.memorySummaryPrompt.stage1||t.defaultMemorySummaryPrompts.stage1,{content:p,rules:s}=f(r,g),l=(p||"").replace(/\{\{char\}\}/g,m).replace(/\{\{user\}\}/g,a),y=(s||"").replace(/\{\{char\}\}/g,m).replace(/\{\{user\}\}/g,a),u=new Date(h.calendar.currentDate),P=`${u.getFullYear()}年${u.getMonth()+1}月${u.getDate()}日`;let X=P;if(o){const S=new Date(o);X=`${`${S.getFullYear()}年${S.getMonth()+1}月${S.getDate()}日`}-${P}`}else X=`${P}-${P}`;return`
${c}

<首要任务：记忆整理>
请你完全以你个人视角和当下理解去总结回顾你的记忆。

${l.replace(/XX年XX月XX日-XX年XX月XX日/g,X)}

「最近对话内容」
${n}

${y}
</首要任务：记忆整理>
`.trim()},x=(e,n,a="用户",o="")=>{if(!e)return"";const c=e.name||"未命名",m=!!t.memorySummaryPrompt.stage2,g=t.memorySummaryPrompt.stage2||t.defaultMemorySummaryPrompts.stage2,{content:r,rules:p}=f(g,m),s=n.match(/(\d{4}年\d{1,2}月\d{1,2}日)/g);let l="近期";s&&s.length>=2?l=`${s[0]}-${s[s.length-1]}`:s&&s.length===1&&(l=s[0]);const y=(r||"").replace(/\{\{char\}\}/g,c).replace(/\{\{user\}\}/g,a).replace(/XX年XX月XX日-XX年XX月XX日/g,l),u=(p||"").replace(/\{\{char\}\}/g,c).replace(/\{\{user\}\}/g,a);return`
${o}

<首要任务：记忆整理>
请你完全以你个人视角和当下理解去总结回顾你的记忆。

${y}

「需要总结的短期记忆」
${n}

${u}
</首要任务：记忆整理>
`.trim()},U=(e,n,a="用户",o=!1,c="")=>{if(!e)return"";const m=e.name||"未命名",g=!!t.memorySummaryPrompt.stage3;let r=t.memorySummaryPrompt.stage3||t.defaultMemorySummaryPrompts.stage3;if(o){const u=`【当前最高优先级任务】
${m}，此时此刻，你脑海中有一个极其强烈的念头：必须要将下面这几段特定的记忆片段立刻整理沉淀下来。这些片段在这一瞬间对你来说充满了意义，你必须对它们进行二次处理与提炼，并永远铭记。

请按照你习惯的【核心印记】格式，将它们写下来，并在末尾标注它们对应的 [片段ID]。
====================

`;r=r.replace(/.*?\[ACTION:NO_SUMMARY_NEEDED\].*?\n?/g,""),r=r.replace(/\*\*请你判断：\*\*\n?/g,""),r=r.replace(/- 如果你觉得确实有值得总结的核心记忆，就请按照【核心印记】的格式写下来。\n?/g,""),r=u+r}else r=`【记忆提炼自主权】
${m}，你现在拥有绝对的决定权来审视你的这些记忆。并非所有的经历都必须内化为你的“核心印记”。
无需全部选择，你必须针对性进行筛选值得记录的，避免直接把所有中期记忆总结了。
请你根据当前的感知和心境进行判断：
1. **深刻性**：这些记忆是否真的触动了你的灵魂，让你有了前所未有的感悟？
2. **新认知**：你对${a}、对自己、或者对你们的关系，是否产生了新的、不同以往的深刻理解？
3. **记忆关联性**：你选择的记忆片段是否具有内在关联性？它们是否共同作用对你产生了深远影响？
4. **放弃总结**：如果你觉得这些记忆目前只是普通的日常，或者虽然重要但还没到让你产生“质变”感悟的地步，你**完全可以放弃总结**，直接回复 \`[ACTION:NO_SUMMARY_NEEDED]\`。

只有当你内心真实地感受到了那种必须铭记的冲动时，才去挑选片段并进行提炼。
请注意：选择记忆片段并不代表直接摘抄，而是需要你对其进行二次处理，浓缩出真正的感悟。
====================

`+r;const{content:p,rules:s}=f(r,g),l=(p||"").replace(/\{\{char\}\}/g,m).replace(/\{\{user\}\}/g,a),y=(s||"").replace(/\{\{char\}\}/g,m).replace(/\{\{user\}\}/g,a);return`
${c}

<首要任务：记忆整理>
请你完全以你个人视角和当下理解去总结回顾你的记忆。

${l}

「可供提炼参考的中期记忆片段」
${n}

${y}
</首要任务：记忆整理>
`.trim()},G=Object.freeze(Object.defineProperty({__proto__:null,MEMORY_SUMMARY_PROMPTS_STORAGE_KEY:d,getCoreSummaryPrompt:U,getMidTermSummaryPrompt:x,getSummaryPrompt:_,loadMemoryPromptsFromDB:Y,promptStore:t,saveMemoryPromptsToDB:B},Symbol.toStringTag,{value:"Module"})),F=Object.freeze(Object.defineProperty({__proto__:null,SYSTEM_MESSAGE_TAG:R,createActionMessage:A,getAICharacterGenerationPrompt:N,getCharacterPrompt:T,getCoreCharacterPrompt:E,getCreationBundlePrompt:O,getNpcGenerationPrompt:C,getSummaryPrompt:_,getWalletAssetsPrompt:b,getWalletBillsPrompt:I,parseActionMessage:w,promptStore:t},Symbol.toStringTag,{value:"Module"}));export{F as a,Y as l,G as m,t as p,B as s};
