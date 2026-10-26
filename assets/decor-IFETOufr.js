import{dI as ne,cC as b,bv as w,bw as o,b9 as te,cM as ve,d0 as N,bu as $,L,bC as Me,cl as oe,K as A,dB as U,dr as He,gb as Ee,j as V,gc as ze,dT as de,f4 as Ge,dV as xe,dN as qe,aQ as Pe,aS as Je,du as J,bt as Y,bE as Ae,dz as Ye,d9 as x,dl as ie,dq as Z,dp as Ke,ew as Xe,be as Qe,cz as Ze,cn as le,dE as P,e1 as et,bD as tt,aU as ee,cj as ot,r as K,fN as nt,J as Se,aB as Ie,A as st,gd as at,ge as rt,gf as it,gg as lt,p as ct}from"./index-BsGTho4G.js";import{get_encoding as dt}from"./tiktoken-CRbRdrpI.js";import{b as $e,c as ut,g as ft,a as mt}from"./formatReminder-DJF3aBt_.js";import{g as pt,a as gt}from"./offlineTheaterDebug-CST7rFon.js";import{b as _e}from"./imageContext-D_REhh8y.js";import yt from"./WorldBookSelectionModal-DpdP51ku.js";let he=null;const Le=e=>{if(!e)return 0;try{return he||(he=dt("cl100k_base")),he.encode(e).length}catch(n){return console.warn("[Utils] Token counting failed, falling back to length:",n),e.length}},bt={class:"story-status-bar"},ht={class:"status-content"},vt={class:"status-items"},kt={class:"status-item"},xt={class:"item-label"},wt={class:"item-value"},Tt={key:0,class:"item-divider"},Bt={__name:"OfflineStoryStatusBar",props:{metadata:{type:Object,default:()=>({})}},setup(e){const n=e,t=L(()=>Object.keys(n.metadata||{}).filter(d=>n.metadata[d]!=null&&n.metadata[d]!=="")),a={time:"TIME",location:"LOC",expression:"ACT",affinity:"LOVE",date:"DATE"},i=d=>a[d]||d;return(d,l)=>(b(),w("div",bt,[o("div",ht,[l[0]||(l[0]=o("div",{class:"status-header"},[o("span",{class:"memo-icon"},"📝"),o("span",{class:"memo-title"},"Story Note")],-1)),o("div",vt,[(b(!0),w(te,null,ve(t.value,(u,h)=>(b(),w(te,{key:u},[o("div",kt,[o("span",xt,N(i(u)),1),o("span",wt,N(e.metadata[u]),1)]),h<t.value.length-1?(b(),w("div",Tt)):$("",!0)],64))),128))])])]))}},St=ne(Bt,[["__scopeId","data-v-682f4517"]]),It={key:0,class:"thinking-content"},Ct={class:"content-inner"},Mt={__name:"ThinkingExpansion",props:{content:{type:String,default:""}},setup(e){const n=A(!1),t=()=>{n.value=!n.value};return(a,i)=>(b(),w("div",{class:oe(["thinking-expansion",{expanded:n.value}])},[o("div",{class:"thinking-header",onClick:t},[...i[0]||(i[0]=[Me('<div class="header-left" data-v-2a58034c><span class="thinking-icon" data-v-2a58034c>💭</span><span class="thinking-title" data-v-2a58034c>소양은 열심히 원고를 쓰는 중...</span></div><div class="header-right" data-v-2a58034c><svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2a58034c><polyline points="6 9 12 15 18 9" data-v-2a58034c></polyline></svg></div>',2)])]),n.value?(b(),w("div",It,[o("div",Ct,N(e.content),1)])):$("",!0)],2))}},Et=ne(Mt,[["__scopeId","data-v-2a58034c"]]),Pt={key:0,class:"summary-card"},At={class:"header-right"},$t={class:"summary-content"},_t={class:"summary-text"},Lt={__name:"SummaryCard",props:{content:{type:String,default:""},initiallyExpanded:{type:Boolean,default:!1}},setup(e){const t=A(e.initiallyExpanded),a=()=>{t.value=!t.value};return(i,d)=>e.content?(b(),w("div",Pt,[o("div",{class:"summary-header",onClick:a},[d[1]||(d[1]=Me('<div class="header-left" data-v-62585938><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="summary-icon" data-v-62585938><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-62585938></path><polyline points="14 2 14 8 20 8" data-v-62585938></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-62585938></line><line x1="16" y1="17" x2="8" y2="17" data-v-62585938></line><polyline points="10 9 9 9 8 9" data-v-62585938></polyline></svg><span class="summary-title" data-v-62585938>줄거리 요약</span></div>',1)),o("div",At,[(b(),w("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:oe(["toggle-icon",{"is-expanded":t.value}])},[...d[0]||(d[0]=[o("polyline",{points:"6 9 12 15 18 9"},null,-1)])],2))])]),U(o("div",$t,[o("div",_t,N(e.content),1)],512),[[He,t.value]])])):$("",!0)}},Nt=ne(Lt,[["__scopeId","data-v-62585938"]]),Ot=`【往期剧情聊天记录】
--- ⬇️ 以下是你们刚刚在微信(WeChat)中的聊天记录(已转为JSON格式)，供你参考上下文 ⬇️ ---`,Rt="--- ⬆️ 微信聊天记录结束。请将注意力转回当前 APP ⬆️ ---",y=e=>ze(Ee(e)),T=e=>Le(Ee(e)),jt=2,Ne=e=>{if(!e)return"";const n=new Date(e),t=n.getFullYear(),a=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0"),d=String(n.getHours()).padStart(2,"0"),l=String(n.getMinutes()).padStart(2,"0");return`${t}.${a}.${i} ${d}:${l}`},Oe=e=>Array.isArray(e)?e.reduce((n,t)=>t?.type==="text"?n+T(t.text||""):t?.type==="image_url"?n+T(t?.image_url?.url||""):n,0):T(e),Ut=(e=[])=>{for(let n=e.length-1;n>=0;n-=1){const t=e[n];if(t?.sender!=="me"&&t?.type!=="system")return n}return-1},Ft=(e=[])=>{const n=Ut(e),t=n>=0?e.slice(n+1):e;return new Set(t.filter(a=>a?.sender==="me"&&a?.type==="image"&&!a?.isSimulated).slice(0,jt).map(a=>Number(a.timestamp)).filter(a=>Number.isFinite(a)))},Vt=async(e,n)=>{const t=Number(e?.timestamp);return Number.isFinite(t)?_e({imageId:t,description:JSON.stringify({displayType:"图片",content:e?.description||"无附言"}),getChatImage:xe,isTimeAware:n?.isTimeAware??!1,worldTime:e?.worldTime||e?.timestamp,formatTimTimestamp:Ne}):null},Wt=async(e,n,t={})=>{const a=Number(e?.timestamp);return Number.isFinite(a)?_e({imageId:a,description:JSON.stringify({displayType:"图片",content:e?.description||"[图片]"}),getChatImage:xe,extraTextPayload:{senderName:n},isTimeAware:t?.isTimeAware??!1,worldTime:e?.worldTime||e?.timestamp,formatTimTimestamp:Ne}):null},Dt=e=>e?Array.isArray(e.storylines)&&e.storylines.length>0?e.storylines:[{id:"root",name:"未命名",openingLine:e.openingLine||"",chatLogs:Array.isArray(e.chatLogs)?e.chatLogs:[],summaries:Array.isArray(e.summaries)?e.summaries:[]}]:[],Ht=e=>{const n=Dt(e);return n.length===0?null:n.find(t=>t.id===e?.activeStorylineId)||n[0]},zt=(e=[],n=20)=>e.slice(-n).map(t=>t.type==="image"?y(t.description):t.type==="voice"?y(t.text):t.type==="location"?`${y(t.name)} ${y(t.address)}`.trim():t.type==="emoticon"?y(t.name):y(t.content)).filter(Boolean).join(`
`),Gt=(e,n)=>{const t=n||Ht(e),a=t?[{...t}]:[];return{...e,storylines:a,activeStorylineId:t?.id||null}},qt=(e,n,t=[],a=20)=>{const i=Array.isArray(n?.chatLogs)?n.chatLogs:[],d=zt(i,a),l=n?.id,u={worldBookBindings:e?.worldBookBindings||[],worldBookIds:e?.worldBookIds||[],worldBookEntryIds:l&&e?.storylineWorldBookBindings?.[l]?e.storylineWorldBookBindings[l]:n?.worldBookEntryIds||e?.worldBookEntryIds||[]},h=de(u,t,d),k=h.usedEntryIds||[];let v={top:"",beforeRole:"",afterRole:"",bottom:""};if(Array.isArray(e?.chatSessionWorldBookEntryIds)){const B=e.chatSessionWorldBookEntryIds.filter(C=>!k.includes(C));v=de({chatSessionWorldBookEntryIds:B},t,d,{includeGlobal:!1})}return[[h.top,v.top].filter(Boolean).join(`

`),[h.beforeRole,v.beforeRole].filter(Boolean).join(`

`),[h.afterRole,v.afterRole].filter(Boolean).join(`

`),[h.bottom,v.bottom].filter(Boolean).join(`

`)].filter(Boolean).join(`

`)},Jt=(e,n="")=>{const t=Array.isArray(e?.summaries)?e.summaries.map(a=>y(a?.content)).filter(Boolean).join(`
`):"";return[n,t].filter(Boolean).join(`
`)},Yt=(e,n,t)=>{let a="文本消息",i="";if(e.type==="emoticon")a="表情包",i=e.name||"表情包";else if(["transfer","转账接收","转账退还"].includes(e.type))a="转账",i={from:e.sender==="me"?"me":"character",to:e.sender==="me"?"character":"me",amount:parseFloat(e.amount||0).toFixed(2),status:e.status,note:e.note||"无"};else if(e.type==="image")a="图片",i=e.description||"无附言";else if(e.type==="lover_apply"||e.type==="couple_invite")a="来自其他APP：情侣空间",i=e.content||"情侣空间邀请卡片";else if(e.type==="product_share")a="来自：购物APP",i=y(e.content);else if(e.type==="pay_for_me")a="来自：购物APP",i=e.content?.desc||"分享了代付链接";else if(e.type==="business-card")a="分享名片",i=e.content||"分享了名片";else if(e.type==="voice")a="语音",i=e.text||"语音内容加载中...";else if(e.type==="location")a="位置",i={name:e.name||"未知位置",address:e.address||""};else if(e.type==="forwarded_record"){a="聊天记录";const l=n?.nickname||n?.name||"对方";i=(e.records||[]).map(u=>({sender:u.sender==="me"?t:l,type:u.type||"text",content:u.content||u.description||u.text||u.name||""}))}else if(e.type==="diary")a="分享日记",i=`分享了${n?.nickname||n?.name||"角色"}的日记：
${e.content||""}`;else if(e.type==="voice_call")if(a="通话记录",e.ai_content)i=e.ai_content;else if(e.summary)i=e.summary;else if(Array.isArray(e.history)&&e.history.length>0){const l=n?.nickname||n?.name||"对方";i=e.history.map(u=>`${u.sender==="me"?t:u.isNarration?"旁白":l}: ${u.content}`).join(`
`)}else e.status==="connected"?i=`通话已接通，时长${e.durationStr||"未知"}`:e.status==="rejected"?i="通话已拒绝":e.status==="failed"?i="通话失败":i="通话记录";else if(e.type==="system")a="系统消息",i=e.content||"";else if(i=y(e.content),!i)return null;const d={displayType:a,content:i};if(n?.isTimeAware&&(e.worldTime||e.timestamp))try{const l=new Date(e.worldTime||e.timestamp),u=l.getFullYear(),h=String(l.getMonth()+1).padStart(2,"0"),k=String(l.getDate()).padStart(2,"0"),v=String(l.getHours()).padStart(2,"0"),B=String(l.getMinutes()).padStart(2,"0");d.tim=`${u}.${h}.${k} ${v}:${B}`}catch{}return{tokenText:JSON.stringify(d),category:e.type==="image"?"image":["voice","location","voice_call","transfer","转账接收","转账退还"].includes(e.type)?"specialMsg":"history"}},Re=async(e,n,t)=>{const a=Array.isArray(e)?e.slice(-t):[],i=Ge(n),d={history:T(Ot)+T(Rt),specialMsg:0,image:0};for(const l of a){const u=Yt(l,n,i);if(!u?.tokenText)continue;if(l?.type==="image"&&l?.sender==="me"&&!l?.isSimulated&&l?.imageContextMode==="persistent"){const v=await Vt(l,n);d.image+=Oe(v?.content||u.tokenText);continue}const h=T(u.tokenText);d[u.category]+=h}return d},Kt=(e,n=[])=>{const t=Array.isArray(e?.emoticonGroupIds)?e.emoticonGroupIds:[];if(t.length===0)return"";const a=n.filter(d=>t.includes(d.id));if(a.length===0)return"";let i=`「表情包分组」
你拥有以下表情包分组（不同IP/主题）：
`;return a.forEach(d=>{const l=d.description||"未描述",u=Array.isArray(d.emoticons)?d.emoticons.length:0;i+=`- ${d.name}: ${l} (${u}个表情)
`,u>0&&(i+=`  可用表情: ${d.emoticons.map(h=>h.name).join("、")}
`)}),i+=`
「表情包使用规则」
`,i+=`1. 格式严格：必须且只能使用 [EMOTICON:表情名] 格式，例如 [EMOTICON:开心]。
`,i+=`2. 范围限制：严禁编造不存在的表情名，只能从上述"可用表情"列表中选择。
`,i+=`3. 选择原则：根据对话情景和情绪选择合适的表情名（表情名代表含义）。
`,i+=`4. 自然性要求：像人类一样，偶尔使用1-2个常用表情，避免每句话都加表情。
`,i+=`5. 分组切换：可以在不同分组间切换，使用不同IP的表情包增加趣味性。
`,i+='6. 独立气泡：如果要在发送文本的同时发送表情包，请将其作为 `reply` 数组中的独立元素发送。例如：`"reply": ["你好呀", "[EMOTICON:开心]"]`。\n',i},on=async({character:e,storyline:n,historyLimit:t=20,memoryPromptStage1:a="",allWorldBooks:i=[],emoticonGroups:d=[]})=>{if(!e||!n)return{total:0,system:0,summary:0,history:0,worldBook:0,emoticon:0,specialMsg:0,image:0};const l=Gt(e,n),u=qe(l,"","",{},{scenario:"wechatChat"}),h=qt(e,n,i,t),k=Kt(e,d),v=Jt(n,a),B=await Re(n.chatLogs||[],e,t),C=T(h),S=T(k),M=T(v),c=V.profile?.wechatFormatReminderEnabled===!0?$e(e.chatMode||"online",e.translationConfig):"",m=T(c),_=T(u),O=Math.max(0,_-C-S)+m;return{total:O+M+B.history+B.specialMsg+B.image+C+S,system:O,summary:M,history:B.history,worldBook:C,emoticon:S,specialMsg:B.specialMsg,image:B.image}},Xt=(e,n,t=[])=>{const i=(Array.isArray(n?.chatLogs)?n.chatLogs:[]).slice(-15).filter(u=>u?.sender==="me"||u?.role==="user"||u?.type==="system").map(u=>typeof u?.content=="string"?u.content:"").filter(Boolean).join(`
`),d={...e,worldBookBindings:[],worldBookIds:[],worldBookEntryIds:[],chatSessionWorldBookEntryIds:e?.offlineNarrativeWorldBookEntryIds||[]},l=de(d,t,i);return[l.top,l.beforeRole,l.afterRole,l.bottom].filter(Boolean).join(`

`)},Qt=async({settings:e,character:n,storyline:t,historyLimit:a=20,allWorldBooks:i=[]})=>{if(!n||!t)return{total:0,system:0,summary:0,history:0,worldBook:0,emoticon:0,specialMsg:0,image:0};const d=Array.isArray(t.chatLogs)?t.chatLogs:[],l=Array.isArray(t.summaries)?t.summaries:[],u=l.length>0?y(l[l.length-1]?.content):"",h=Xt(n,t,i),k=await Re(d,n,a),v=pt(e,n,u,""),B=T(h),C=T(u),S=V.profile?.wechatFormatReminderEnabled===!0?$e("offline",n.translationConfig):"",M=T(S),c=T(v),m=Math.max(0,c-B-C)+M;return{total:m+C+k.history+k.specialMsg+k.image+B,system:m,summary:C,history:k.history,worldBook:B,emoticon:0,specialMsg:k.specialMsg,image:k.image}},Zt=e=>e.type==="image"?"图片":e.type==="voice"?"语音":e.type==="location"?"位置":e.type==="emoticon"?"表情包":e.type==="red_packet"?"红包":e.type==="group_vote"?"投票":e.type==="group_solitaire"?"接龙":e.type==="private_chat_notice"?"私聊记录":e.type==="system"?"系统消息":"文本消息",eo=(e,n)=>{const t={senderName:n,displayType:Zt(e),content:"",tim:y(e.tim||"")};if(e.type==="image")t.content=e.description||"[图片]";else if(e.type==="voice")t.content=e.text||"[语音]";else if(e.type==="location")t.content=`${e.name||"位置"} ${e.address||""}`.trim();else if(e.type==="emoticon")t.content=e.name||"[表情包]";else if(e.type==="private_chat_notice"){const a=e.privateChatData||{};t.content={summary:y(e.content)||"刚刚有人偷偷私聊了",participants:Array.isArray(a.participants)?a.participants.map(i=>i.name).filter(Boolean):[],messages:Array.isArray(a.messages)?a.messages.map(i=>({senderName:y(i?.senderName),content:y(i?.content),tim:y(i?.tim)})):[]}}else if(e.type==="group_solitaire"){const a=e.content||{},i=Array.isArray(a.responses)?a.responses:[],d=Array.isArray(a.participants)?a.participants:[];t.content={topic:y(a.topic)||"未命名接龙",example:y(a.example)||"",replyCount:i.length||d.length}}else t.content=y(e.content)||`[${e.type||"消息"}]`;return typeof t.content=="string"&&e?.quote?.sender&&e?.quote?.content&&(t.content+=`
引用：${y(e.quote.sender)}：${y(e.quote.content)}`),{tokenText:JSON.stringify(t),category:e.type==="image"?"image":["voice","location"].includes(e.type)?"specialMsg":"history"}},nn=async({group:e,settings:n,messages:t=[],members:a=[],userProfile:i={},emoticonGroups:d=[],allWorldBooks:l=[]})=>{if(!e)return{total:0,system:0,summary:0,history:0,worldBook:0,emoticon:0,specialMsg:0,image:0};const u=n?.chatHistoryLimit||20,h=Array.isArray(t)?t.slice(-u):[],k=new Map(a.map(g=>[g.memberId,g])),v={history:0,specialMsg:0,image:0},B=Ft(t);for(const g of h){const q=g.sender==="me"?i?.nickname||i?.displayName||"我":k.get(g.senderId)?.promptSenderName||g.senderName||"群成员",D=eo(g,q);if(g?.type==="image"){const ge=Number(g?.timestamp);if(g?.sender==="me"&&!g?.isSimulated&&(B.has(ge)||g?.imageContextMode==="persistent")){const ye=await Wt(g,q,n);v.image+=Oe(ye?.content||D.tokenText);continue}}const pe=T(D.tokenText);v[D.category]+=pe}const C=h.map(g=>g.type==="image"?y(g.description):g.type==="voice"?y(g.text):g.type==="location"?`${y(g.name)} ${y(g.address)}`.trim():y(g.content)).filter(Boolean).join(`
`),S=de({worldBookEntryIds:n?.worldBookEntryIds||[]},l,C,{includeGlobal:!0}),M=[S.top,S.beforeRole,S.afterRole,S.bottom].filter(Boolean).join(`

`),c=T(M),m=ut(n||{},d)||"",_=T(m),O=Array.isArray(e.summaries)?e.summaries.map(g=>y(g?.content)).filter(Boolean).join(`

`):"",G=T(O),se=n?.activeMaskId?(V.masks||[]).find(g=>g.id===n.activeMaskId):null,fe={displayName:y(se?.name)||y(i?.displayName)||"我",nickname:y(i?.nickname)||y(i?.displayName)||"我",persona:se?.persona||V.profile?.persona||""},me=ft({groupName:e.name,groupIntro:e.announcement,groupType:e.groupType,customTypeName:e.customTypeName,settings:n||{},emoticonGroups:d,userProfile:fe,members:a,userMember:a.find(g=>g.memberId==="user")||null,relationGraph:e.relationGraph||[],worldBookContent:S,timeAwareness:{enabled:n?.isTimeAware??!1,userLocation:"",userTimeText:""},groupSummary:O}),j=V.profile?.wechatFormatReminderEnabled===!0?mt(n?.translationConfig):"",ae=T(j),X=T(me),F=Math.max(0,X-c-_-G)+ae;return{total:F+G+v.history+v.specialMsg+v.image+c+_,system:F,summary:G,history:v.history,worldBook:c,emoticon:_,specialMsg:v.specialMsg,image:v.image}},to={class:"settings-content"},oo={class:"setting-list"},no={class:"setting-item",style:{"align-items":"flex-start"}},so={class:"setting-control",style:{"margin-top":"2px"}},ao={class:"token-count"},ro={class:"number"},io={class:"setting-item"},lo={class:"setting-control"},co={class:"switch-btn"},uo={class:"setting-item column-layout"},fo={class:"setting-header"},mo={class:"setting-control"},po={class:"switch-btn"},go={key:0,class:"setting-body"},yo={class:"setting-item column-layout"},bo={class:"setting-body"},ho={class:"setting-item"},vo={class:"setting-control"},ko={class:"setting-item column-layout"},xo={class:"setting-body"},wo={class:"setting-item column-layout"},To={class:"setting-header"},Bo={class:"setting-control"},So={class:"switch-btn"},Io={key:0,class:"setting-body"},Co={class:"setting-item"},Mo={class:"setting-control"},Eo={class:"switch-btn"},Po={class:"setting-item column-layout"},Ao={class:"setting-body"},$o={__name:"OfflineSettingsModal",props:{visible:{type:Boolean,default:!1},showMask:{type:Boolean,default:!0},character:{type:Object,default:()=>({})}},emits:["update:visible","open-worldbook"],setup(e,{emit:n}){const t=/iP(?:hone|ad|od)/.test(navigator.userAgent)?"#wechat-modal-root":"body",a=e,i=n,l=Pe().offlineSettings,u=Je(),h={total:0,system:0,summary:0,history:0,worldBook:0,emoticon:0,specialMsg:0,image:0},k=A({...h}),v=()=>a.character?.storylines?.length?a.character.storylines.find(M=>M.id===a.character.activeStorylineId)||a.character.storylines[0]:null,B=async()=>{if(!a.character?.id){k.value={...h};return}const M=v();if(!M){k.value={...h};return}const c=await Qt({settings:l,character:a.character,storyline:M,historyLimit:Math.max(1,Math.min(500,Number(l.offlineHistoryLimit)||15)),allWorldBooks:u.worldBooks||[]});k.value=c},C=L(()=>{const M=v();return[a.character?.id,a.character?.activeStorylineId,a.character?.chatHistoryLimit,(a.character?.chatLogs||[]).length,(M?.chatLogs||[]).length,(a.character?.offlineNarrativeWorldBookEntryIds||[]).join(","),l.offlineHistoryLimit,l.enableSummary,l.summaryRounds,V.profile?.wechatFormatReminderEnabled===!0,(u.worldBooks||[]).length].join("|")});J(C,()=>{B()},{immediate:!0});const S=()=>{i("open-worldbook")};return(M,c)=>(b(),Y(Qe,{to:x(t)},[Ae(Xe,{visible:e.visible,"onUpdate:visible":c[10]||(c[10]=m=>i("update:visible",m)),title:"线下设定",showMask:e.showMask,"content-class":"offline-settings-modal"},{default:Ye(()=>[o("div",to,[o("div",oo,[o("div",no,[c[12]||(c[12]=o("div",{class:"setting-label"},[o("span",{class:"label-text"},"提示词预估词符数"),o("span",{class:"label-desc"},"当前提示词Token总计")],-1)),o("div",so,[o("span",ao,[o("span",ro,N(k.value.total||0),1),c[11]||(c[11]=o("span",{class:"label"},"Tokens",-1))])])]),o("div",io,[c[14]||(c[14]=o("div",{class:"setting-label"},[o("span",{class:"label-text"},"标题"),o("span",{class:"label-desc"},"显示聊天卡片顶部标题")],-1)),o("div",lo,[o("label",co,[U(o("input",{type:"checkbox","onUpdate:modelValue":c[0]||(c[0]=m=>x(l).showTitle=m)},null,512),[[ie,x(l).showTitle]]),c[13]||(c[13]=o("span",{class:"slider"},null,-1))])])]),o("div",uo,[o("div",fo,[c[16]||(c[16]=o("div",{class:"setting-label"},[o("span",{class:"label-text"},"状态栏"),o("span",{class:"label-desc"},"顶部状态栏显示及格式")],-1)),o("div",mo,[o("label",po,[U(o("input",{type:"checkbox","onUpdate:modelValue":c[1]||(c[1]=m=>x(l).showStatusBar=m)},null,512),[[ie,x(l).showStatusBar]]),c[15]||(c[15]=o("span",{class:"slider"},null,-1))])])]),x(l).showStatusBar?(b(),w("div",go,[U(o("input",{type:"text",class:"k-input","onUpdate:modelValue":c[2]||(c[2]=m=>x(l).statusBarFormat=m),placeholder:"请输入状态栏格式范本..."},null,512),[[Z,x(l).statusBarFormat]])])):$("",!0)]),o("div",yo,[c[17]||(c[17]=o("div",{class:"setting-header"},[o("div",{class:"setting-label"},[o("span",{class:"label-text"},"期望回复字数")])],-1)),o("div",bo,[U(o("input",{type:"number",class:"k-input","onUpdate:modelValue":c[3]||(c[3]=m=>x(l).replyLength=m),placeholder:"例如: 100"},null,512),[[Z,x(l).replyLength]])])]),o("div",ho,[c[19]||(c[19]=o("div",{class:"setting-label"},[o("span",{class:"label-text"},"叙事视角")],-1)),o("div",vo,[U(o("select",{class:"k-select","onUpdate:modelValue":c[4]||(c[4]=m=>x(l).narrativePerson=m)},[...c[18]||(c[18]=[o("option",{value:"第三人称"},"第三人称",-1),o("option",{value:"用户第一人称"},"用户第一人称",-1),o("option",{value:"角色第一人称"},"角色第一人称",-1),o("option",{value:"用户第二人称"},"用户第二人称",-1)])],512),[[Ke,x(l).narrativePerson]])])]),o("div",{class:"setting-item"},[c[20]||(c[20]=o("div",{class:"setting-label"},[o("span",{class:"label-text"},"线下世界书"),o("span",{class:"label-desc"},"绑定线下专属的世界书，如:文风")],-1)),o("div",{class:"setting-control"},[o("button",{class:"k-btn outline",onClick:S},"关联条目")])]),o("div",ko,[c[21]||(c[21]=o("div",{class:"setting-header"},[o("div",{class:"setting-label"},[o("span",{class:"label-text"},"消息注入条数"),o("span",{class:"label-desc"},"注入包括线上聊天在内的所有消息记录，控制承接当前场景和叙事风格")])],-1)),o("div",xo,[U(o("input",{"onUpdate:modelValue":c[5]||(c[5]=m=>x(l).offlineHistoryLimit=m),type:"number",class:"k-input",min:"1",max:"500",placeholder:"15"},null,512),[[Z,x(l).offlineHistoryLimit,void 0,{number:!0}]])])]),o("div",wo,[o("div",To,[c[23]||(c[23]=o("div",{class:"setting-label"},[o("span",{class:"label-text"},"剧情摘要"),o("span",{class:"label-desc"},"概括每轮剧情要素，控制AI读取的摘要条数")],-1)),o("div",Bo,[o("label",So,[U(o("input",{type:"checkbox","onUpdate:modelValue":c[6]||(c[6]=m=>x(l).enableSummary=m)},null,512),[[ie,x(l).enableSummary]]),c[22]||(c[22]=o("span",{class:"slider"},null,-1))])])]),x(l).enableSummary?(b(),w("div",Io,[U(o("input",{type:"number",class:"k-input","onUpdate:modelValue":c[7]||(c[7]=m=>x(l).summaryRounds=m),placeholder:"默认: 30",min:"1"},null,512),[[Z,x(l).summaryRounds]])])):$("",!0)]),o("div",Co,[c[25]||(c[25]=o("div",{class:"setting-label"},[o("span",{class:"label-text"},"小剧场"),o("span",{class:"label-desc"},"输出特殊的番外HTML")],-1)),o("div",Mo,[o("label",Eo,[U(o("input",{type:"checkbox","onUpdate:modelValue":c[8]||(c[8]=m=>x(l).littleTheater=m)},null,512),[[ie,x(l).littleTheater]]),c[24]||(c[24]=o("span",{class:"slider"},null,-1))])])]),o("div",Po,[c[26]||(c[26]=o("div",{class:"setting-header"},[o("div",{class:"setting-label"},[o("span",{class:"label-text"},"去掉邪恶八股"),o("span",{class:"label-desc"},"输入不想看到的词语，用英文逗号分隔")])],-1)),o("div",Ao,[U(o("textarea",{class:"k-textarea","onUpdate:modelValue":c[9]||(c[9]=m=>x(l).avoidWords=m),placeholder:"例如：眼眸微暗, 嘴角勾起一抹..."},null,512),[[Z,x(l).avoidWords]])])])])])]),_:1},8,["visible","showMask"])],8,["to"]))}},_o=ne($o,[["__scopeId","data-v-a7bd0455"]]),Lo={class:"offline-message-card"},No={key:0,class:"overlay"},Oo={class:"avatar-wrapper"},Ro={class:"meta-row"},jo={class:"floor-tag"},Uo={class:"tokens-tag"},Fo={class:"time-tag"},Vo={class:"card-body"},Wo={key:0,class:"story-title"},Do={class:"story-body"},Ho=["onClick"],zo=["srcdoc"],Go={class:"tooltip-content"},qo={class:"tooltip-text"},Jo={__name:"OfflineMessageCard",props:{message:{type:Object,required:!0},character:{type:Object,required:!0},index:{type:Number,default:0},customBubbleCss:{type:String,default:""},statusData:{type:Object,default:null}},emits:["request-ooc-fix"],setup(e,{emit:n}){const t=e,a=n,i=L(()=>t.message.sender==="me"),d=L(()=>{if(i.value){const r=t.character.activeMaskId;if(r){const s=V.masks.find(f=>f.id===r);if(s)return s.name||s.nickname}return V.profile?.nickname||"我"}else return t.character.nickname||t.character.name||"角色"}),l=A(""),u=A("");J(()=>t.character.avatar,async r=>{l.value=r?await K(r)||r:""},{immediate:!0}),J(()=>t.character.offlineCardBackground,async r=>{u.value=r?await K(r)||r:""},{immediate:!0});const h=L(()=>{let r="";if(i.value){const s=t.character.activeMaskId;if(s){const f=V.masks.find(I=>I.id===s);f&&f.avatar&&(r=f.avatar)}r||(r=V.profile?.avatar)}else r=l.value;return{backgroundImage:r?`url(${r})`:"none",backgroundColor:"#ddd"}}),k=A(null);J(()=>t.character.avatarFrame,async r=>{k.value=r?await K(r)||r:null},{immediate:!0});const v=L(()=>u.value?{backgroundImage:`url(${u.value})`,backgroundSize:"cover",backgroundPosition:"center"}:{backgroundColor:"#fffbfc"}),B=L(()=>ee.offlineCardColorMode==="black"?"force-black":ee.offlineCardColorMode==="white"?"force-white":""),C=A(!1),S=A(!1),M=A(null),c=A(null),m=A({});let _=null;const O=({level:r="info",stage:s="unknown",message:f="",detail:I=null}={})=>{gt({level:r,stage:s,message:f,detail:I})},G=async()=>{const r=t.message.theaterContent||"",s=[...new Set(Array.from(r.matchAll(/data-local-chat-image-id=(["'])(.*?)\1/g)).map(I=>I[2]).filter(Boolean))];if(s.length===0){m.value={};return}O({stage:"iframe_hydrate_start",message:"开始为小剧场 iframe 读取本地图片",detail:{messageTimestamp:t.message.timestamp,imageCount:s.length}});const f={...m.value};for(const I of s)if(!f[I])try{const p=await xe(I);p?(f[I]=URL.createObjectURL(p),O({stage:"iframe_hydrate_success",message:"小剧场 iframe 已成功读取本地图片",detail:{messageTimestamp:t.message.timestamp,imageId:I,blobType:p.type||"",blobSize:p.size||0}})):O({level:"warning",stage:"iframe_hydrate_missing_blob",message:"ChatImageDB 中未找到小剧场图片 Blob",detail:{messageTimestamp:t.message.timestamp,imageId:I}})}catch(p){console.warn("[Theater] 加载本地小剧场图片失败:",p),O({level:"error",stage:"iframe_hydrate_failed",message:"小剧场 iframe 读取本地图片失败",detail:{messageTimestamp:t.message.timestamp,imageId:I,error:p?.message||String(p||"")}})}m.value=f},se=L(()=>String(t.message.theaterContent||"").replace(/<img\b([^>]*?)data-local-chat-image-id=(["'])(.*?)\2([^>]*)>/gi,(r,s,f,I,p)=>{const E=m.value[I];if(!E)return r;const R=`<img${s}data-local-chat-image-id=${f}${I}${f}${p}>`;return/\ssrc=(["'])[\s\S]*?\1/i.test(R)?R.replace(/\ssrc=(["'])[\s\S]*?\1/i,` src="${E}"`):R.replace(/<img\b/i,`<img src="${E}"`)})),fe=L(()=>t.message.theaterContent?`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            overflow: hidden; /* 防止 iframe 内部出现滚动条，由外部控制高度 */
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'StoryFont';
            /* 继承一些基础的视觉表现，避免过于生硬 */
            -webkit-font-smoothing: antialiased;
          }
          * { box-sizing: border-box; }
          button, input, select, textarea { cursor: pointer; font-family: inherit; }
        </style>
      </head>
      <body>
        ${se.value}
      </body>
    </html>
  `:""),me=()=>{const r=c.value;if(r)try{const s=r.contentWindow.document,f=s.body;O({stage:"iframe_loaded",message:"小剧场 iframe 已加载完成",detail:{messageTimestamp:t.message.timestamp,scrollHeight:f?.scrollHeight||0}}),r.style.height=f.scrollHeight+"px",window.ResizeObserver&&(_&&_.disconnect(),_=new ResizeObserver(()=>{c.value&&(c.value.style.height=f.scrollHeight+"px")}),_.observe(f)),s.addEventListener("click",()=>{window.dispatchEvent(new Event("click"))})}catch(s){console.warn("[Theater] 无法访问 iframe 内部文档以设置高度，可能是受到安全限制:",s),O({level:"error",stage:"iframe_load_failed",message:"小剧场 iframe 加载后无法访问内容",detail:{messageTimestamp:t.message.timestamp,error:s?.message||String(s||"")}})}},j=A(!1),ae=A(""),X=A({x:0,y:0}),F=A(null),we=(r,s)=>{if(j.value&&F.value===r.target){j.value=!1,F.value=null;return}ae.value=s,F.value=r.target,j.value=!0,ot(()=>{g()})},g=()=>{if(!j.value||!F.value)return;const r=F.value.getBoundingClientRect();X.value={x:r.left+r.width/2,y:r.top-10}},q=()=>{j.value&&g()},D=r=>{if(!j.value)return;const s=r.target;s!==F.value&&!M.value?.contains(s)&&(j.value=!1,F.value=null)};J(j,r=>{r?(window.addEventListener("click",D,!0),window.addEventListener("scroll",q,!0)):(window.removeEventListener("click",D,!0),window.removeEventListener("scroll",q,!0))}),J(()=>t.message.theaterContent,G,{immediate:!0}),Ze(()=>{window.removeEventListener("click",D,!0),window.removeEventListener("scroll",q,!0),_&&_.disconnect(),Object.values(m.value).forEach(r=>{r&&URL.revokeObjectURL(r)})}),Pe();const pe=L(()=>t.character.offlineNarrativeWorldBookEntryIds!==null&&t.character.offlineNarrativeWorldBookEntryIds!==void 0?t.character.offlineNarrativeWorldBookEntryIds:t.character.worldBookEntryIds||[]),ge=r=>{if(t.character){const s={...t.character,offlineNarrativeWorldBookEntryIds:r};Se.characters.set(t.character.id,s),Ie()}S.value=!1},Te=()=>{const r=!!t.character.offlineCardBackground,f=(ee.offlineCardColorMode==="auto"?r?"white":"black":ee.offlineCardColorMode)==="white"?"black":"white";ee.toggleOfflineCardColorMode(f)},ye=()=>{C.value=!0},Ue=()=>{a("request-ooc-fix")},Fe=r=>{const s=new Date(r),f=s.getMonth()+1,I=s.getDate(),p=s.getHours().toString().padStart(2,"0"),E=s.getMinutes().toString().padStart(2,"0");return`${f}/${I} ${p}:${E}`},H=L(()=>{let r=t.message.content||"";if(typeof r!="string"){let p="[应用消息]";r&&typeof r=="object"&&(p=r.title||r.reason||r.desc||r.message||p),r=p}if(!r)return{title:t.message.title||"",contentBlocks:[]};let s=t.message.title||"",f=[];if(!s){const p=r.match(/(?:【标题】|\[标题\])\s*(.*?)(?:\n|$)/);if(p)s=p[1].trim(),r=r.replace(p[0],"");else{const R=r.split(`
`)[0].trim();/^【(.*?)】$/.test(R)&&!R.includes("时间")&&!R.includes("场景")&&(s=R.replace(/^【|】$/g,""),r=r.substring(R.length).trim())}}return r=r.replace(/<\/?main_text>/gi,"").trim(),r=r.replace(/\\n/g,`
`),r.split(`
`).map(p=>p.trim()).filter(p=>p).forEach(p=>{const E=[];nt(p).forEach(z=>{if(z.type==="correction")E.push(z);else if(z.type==="text"){let Q=0;const We=/\*([^*]+)\*/g;let re;for(;(re=We.exec(z.content))!==null;){const be=re.index,De=re[1];be>Q&&E.push({type:"text",content:z.content.substring(Q,be)}),E.push({type:"thought",content:De}),Q=be+re[0].length}Q<z.content.length&&E.push({type:"text",content:z.content.substring(Q)})}}),E.length===0&&E.push({type:"text",content:p}),f.push({type:"paragraph",children:E})}),{title:s,contentBlocks:f}}),Ve=L(()=>{let r="";return H.value.title&&(r+=H.value.title+`
`),H.value.contentBlocks&&H.value.contentBlocks.forEach(s=>{s.children&&s.children.forEach(f=>{(f.type==="text"&&f.content||f.type==="correction"&&f.content)&&(r+=f.content)}),r+=`
`}),Le(r.trim())}),Be=L({get(){return i.value?t.character.userOfflineSignature||"我們的世界可以只有彼此嗎":t.character.offlineSignature||"我們的世界可以只有彼此嗎"},set(r){const s=Se.characters.get(t.character.id);s&&(i.value?s.userOfflineSignature=r:s.offlineSignature=r,Ie())}});return(r,s)=>(b(),w("div",Lo,[o("div",{class:oe(["card-header",{"has-background":!!e.character.offlineCardBackground}])},[o("div",{class:"blur-bg",style:le(v.value)},null,4),e.character.offlineCardBackground?(b(),w("div",No)):$("",!0),o("div",{class:oe(["header-text-content",B.value])},[o("div",{class:"card-header-icons"},[o("div",{class:"icon-left",onClick:Te},[...s[19]||(s[19]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),o("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),o("line",{x1:"3",y1:"18",x2:"21",y2:"18"})],-1)])]),o("div",{class:"icon-right-group"},[o("div",{class:"icon-right",onClick:ye},[...s[20]||(s[20]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("circle",{cx:"11",cy:"11",r:"8"}),o("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})],-1)])]),o("div",{class:"icon-right",onClick:Ue},[...s[21]||(s[21]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("circle",{cx:"12",cy:"12",r:"1"}),o("circle",{cx:"12",cy:"5",r:"1"}),o("circle",{cx:"12",cy:"19",r:"1"})],-1)])])])]),o("div",{class:"header-content",onClick:s[13]||(s[13]=P(()=>{},["stop"])),onTouchend:s[14]||(s[14]=P(()=>{},["stop"])),onTouchstart:s[15]||(s[15]=P(()=>{},["stop"])),"data-no-long-press":""},[o("div",Oo,[o("div",{class:"avatar",style:le(h.value),onClick:s[0]||(s[0]=P(()=>{},["stop"])),onTouchend:s[1]||(s[1]=P(()=>{},["stop"])),onTouchstart:s[2]||(s[2]=P(()=>{},["stop"]))},null,36),k.value?(b(),w("div",{key:0,class:"avatar-frame",style:le({backgroundImage:`url(${k.value})`})},null,4)):$("",!0)]),o("div",{class:"meta-info",onClick:s[10]||(s[10]=P(()=>{},["stop"])),onTouchend:s[11]||(s[11]=P(()=>{},["stop"])),onTouchstart:s[12]||(s[12]=P(()=>{},["stop"]))},[o("div",{class:"nickname",onClick:s[3]||(s[3]=P(()=>{},["stop"])),onTouchend:s[4]||(s[4]=P(()=>{},["stop"])),onTouchstart:s[5]||(s[5]=P(()=>{},["stop"]))},N(d.value),33),o("div",{class:"signature-container",onClick:s[7]||(s[7]=P(()=>{},["stop"])),onTouchend:s[8]||(s[8]=P(()=>{},["stop"])),onTouchstart:s[9]||(s[9]=P(()=>{},["stop"]))},[Ae(et,{modelValue:Be.value,"onUpdate:modelValue":s[6]||(s[6]=f=>Be.value=f),editable:!0,class:"offline-signature"},null,8,["modelValue"])],32),o("div",Ro,[o("span",jo,N(e.index+1)+" 关注",1),o("span",Uo,N(Ve.value)+" 粉丝",1),o("span",Fo,N(Fe(e.message.timestamp)),1)])],32)],32)],2)],2),o("div",Vo,[H.value.title?(b(),w("div",Wo,N(H.value.title),1)):$("",!0),e.statusData?(b(),Y(St,{key:1,metadata:e.statusData},null,8,["metadata"])):$("",!0),e.message.thinkingContent?(b(),Y(Et,{key:2,content:e.message.thinkingContent},null,8,["content"])):$("",!0),o("div",Do,[(b(!0),w(te,null,ve(H.value.contentBlocks,(f,I)=>(b(),w("div",{key:I,class:"story-paragraph"},[(b(!0),w(te,null,ve(f.children,(p,E)=>(b(),w("span",{key:E,class:oe({"inner-thought":p.type==="thought","correction-text":p.type==="correction"})},[p.type==="correction"?(b(),w("span",{key:0,class:"corrected-text",onClick:R=>we(R,p.original)},N(p.content),9,Ho)):(b(),w(te,{key:1},[tt(N(p.content),1)],64))],2))),128))]))),128))]),e.message.summaryContent?(b(),Y(Nt,{key:3,content:e.message.summaryContent,"initially-expanded":!0},null,8,["content"])):$("",!0),e.message.theaterContent?(b(),w("iframe",{key:4,ref_key:"theaterIframe",ref:c,class:"theater-iframe",srcdoc:fe.value,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",frameborder:"0",scrolling:"no",onLoad:me},null,40,zo)):$("",!0)]),j.value?(b(),w("div",{key:0,ref_key:"tooltipRef",ref:M,class:"correction-tooltip",style:le({top:X.value.y+"px",left:X.value.x+"px"})},[o("div",Go,[s[22]||(s[22]=o("span",{class:"tooltip-label"},"更改前：",-1)),o("span",qo,N(ae.value),1)]),s[23]||(s[23]=o("div",{class:"tooltip-arrow"},null,-1))],4)):$("",!0),C.value?(b(),Y(_o,{key:1,visible:C.value,"onUpdate:visible":s[16]||(s[16]=f=>C.value=f),onOpenWorldbook:s[17]||(s[17]=f=>S.value=!0),showMask:!S.value,character:e.character},null,8,["visible","showMask","character"])):$("",!0),S.value?(b(),Y(yt,{key:2,visible:S.value,"onUpdate:visible":s[18]||(s[18]=f=>S.value=f),"initial-selected-ids":pe.value,onSave:ge},null,8,["visible","initial-selected-ids"])):$("",!0)]))}},sn=ne(Jo,[["__scopeId","data-v-f7d8597f"]]),je="decor_store_data",ue=`/* 聊天界面美化模板：取消属性注释后才会生效 */

/* 顶部导航栏 */
.chat-header {
  /* background-color: #ffffff; */ /* 顶栏背景 */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); */ /* 顶栏底部阴影 */
}

.chat-header .header-left,
.chat-header .header-right {
  /* color: #333333; */ /* 返回与右侧图标颜色 */
}

.chat-header .char-name {
  /* color: #333333; */ /* 联系人或群名称 */
  /* font-size: 16.5px; */ /* 名称字号 */
}

.chat-header .char-status-inline {
  /* color: #888888; */ /* 在线状态文字 */
}

.chat-header .star-icon {
  /* fill: #555555; */ /* 右侧星形图标填充色 */
  /* stroke: #555555; */ /* 右侧星形图标描边色 */
}

/* 聊天内容与通用消息 */
.chat-content {
  /* background-color: #f2f2f2; */ /* 聊天背景 */
  /* padding: 16px; */ /* 聊天内容内边距 */
}

.message-row {
  /* margin-bottom: 16px; */ /* 单条消息之间的间距 */
}

.message-row .avatar {
  /* width: 40px !important; */ /* 头像宽度 */
  /* height: 40px !important; */ /* 头像高度 */
  /* border-radius: 6px !important; */ /* 头像圆角，50% 为圆形 */
}

.message-row.theirs .avatar-wrapper {
  /* margin-right: 10px; */ /* 对方头像与内容间距 */
}

.message-row.mine .avatar-wrapper {
  /* margin-left: 10px; */ /* 我的头像与内容间距 */
}

.message-time,
.avatar-timestamp {
  /* color: #999999; */ /* 时间文字颜色 */
  /* font-size: 10px; */ /* 时间文字字号 */
}

/* 对方气泡：文本与语音 */
.message-row.theirs .message-bubble,
.message-row.theirs .voice-bubble {
  /* background-color: #ffffff; */ /* 对方气泡背景 */
  /* color: #333333; */ /* 对方文字颜色 */
}

/* 我的气泡：文本与语音 */
.message-row.mine .message-bubble,
.message-row.mine .voice-bubble {
  /* background-color: #fffbfc; */ /* 我的气泡背景 */
  /* color: #333333; */ /* 我的文字颜色 */
}

.message-bubble {
  /* padding: 10px 14px; */ /* 气泡内边距 */
  /* border-radius: 6px; */ /* 气泡圆角 */
  /* font-size: 15px !important; */ /* 气泡字号 */
  /* line-height: 1.4; */ /* 文字行高 */
}

.bubble-and-translation {
  /* max-width: 70%; */ /* 文本气泡最大宽度 */
}

/* 语音、图片、HTML 与系统提示 */
.voice-bubble {
  /* border-radius: 8px; */ /* 语音气泡圆角 */
}

.voice-bubble .bar {
  /* background-color: #ff69b4; */ /* 语音动态柱颜色 */
}

.image-content {
  /* max-width: 60%; */ /* 图片消息最大宽度 */
}

.real-image {
  /* border-radius: 10px; */ /* 图片圆角 */
}

.html-message-wrapper {
  /* max-width: 85%; */ /* HTML 消息外层最大宽度 */
  /* font-size: 15px; */ /* HTML 消息基础字号 */
}

.system-text {
  /* background-color: rgba(0, 0, 0, 0.05); */ /* 系统提示背景 */
  /* color: #888888; */ /* 系统提示文字 */
  /* font-size: 12px; */ /* 系统提示字号 */
  /* padding: 4px 10px; */ /* 系统提示内边距 */
  /* border-radius: 4px; */ /* 系统提示圆角 */
  /* max-width: 80%; */ /* 系统提示最大宽度 */
}

/* 输入区域 */
.chat-footer {
  /* background-color: #f7f7f7; */ /* 输入栏背景 */
  /* border-top-color: #e5e5e5; */ /* 输入栏上边框 */
}

.chat-input {
  /* background-color: #ffffff; */ /* 输入框背景 */
  /* color: #333333; */ /* 输入文字颜色 */
  /* border-radius: 6px; */ /* 输入框圆角 */
}

.send-icon-btn {
  /* color: #07c160; */ /* 发送按钮颜色 */
}

.function-row .icon-btn {
  /* color: #333333; */ /* 表情、语音、图片等功能图标 */
}

.function-panel {
  /* background-color: #ffffff; */ /* 更多功能面板背景 */
}

/* 特殊消息卡片 */
.red-packet-card {
  /* background-color: #fa9d3b; */ /* 红包卡片背景 */
  /* border-radius: 10px; */ /* 红包卡片圆角 */
}

.red-packet-card .card-title {
  /* color: #ffffff; */ /* 红包标题 */
}

.transfer-card {
  /* background-color: #f6b54b; */ /* 转账卡片背景 */
  /* border-radius: 10px; */ /* 转账卡片圆角 */
}

.transfer-card .transfer-amount {
  /* color: #ffffff; */ /* 转账金额 */
}

.voice-call-bubble {
  /* background-color: #ffffff; */ /* 通话气泡背景 */
  /* color: #333333; */ /* 通话文字与图标颜色 */
  /* border-radius: 8px; */ /* 通话气泡圆角 */
}

.business-card-bubble {
  /* background-color: #ffffff; */ /* 名片卡片背景 */
  /* border-radius: 10px; */ /* 名片卡片圆角 */
}

.business-card-bubble .card-name {
  /* color: #333333; */ /* 名片名称 */
}

.link-card-v2 {
  /* background-color: #ffffff; */ /* 链接卡片背景 */
  /* border-radius: 10px; */ /* 链接卡片圆角 */
}

.location-card,
.record-card,
.file-share-card,
.product-share-card,
.gift-order-card,
.jinjiang-share-card,
.couple-invite-card,
.diary-card,
.vote-card,
.solitaire-card,
.private-chat-card {
  /* background-color: #ffffff; */ /* 卡片背景 */
  /* border-radius: 10px; */ /* 卡片圆角 */
}

.emoticon-content {
  /* max-width: 140px; */ /* 表情包最大宽度 */
}

/* 线下故事卡片：上半信息区与下半正文区可分别调整 */
.offline-message-card {
  /* border-radius: 25px; */ /* 卡片整体圆角 */
  /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.06); */ /* 卡片整体阴影 */
}

.offline-message-card .blur-bg {
  /* background-color: #faf7f2 !important; */ /* 上半部分背景色 */
  /* background-image: none !important; */ /* 需要纯色时移除原背景图 */
}

.offline-message-card .overlay {
  /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)); */ /* 上半部分背景图遮罩 */
}

.offline-message-card .header-text-content {
  /* color: #333333 !important; */ /* 上半部分图标、昵称与标签文字 */
}

.offline-message-card .floor-tag,
.offline-message-card .tokens-tag,
.offline-message-card .time-tag {
  /* background-color: rgba(0, 0, 0, 0.06); */ /* 上半部分信息标签背景 */
}

.offline-message-card .card-body {
  /* background-color: #ffffff; */ /* 下半部分正文背景 */
  /* border-top-left-radius: 20px; */ /* 正文左上圆角 */
  /* border-top-right-radius: 20px; */ /* 正文右上圆角 */
}

.offline-message-card .story-title {
  /* color: #333333; */ /* 故事标题颜色 */
  /* font-size: 24px; */ /* 故事标题字号 */
}

.offline-message-card .story-body {
  /* color: #333333; */ /* 故事正文颜色 */
  /* font-size: 15px; */ /* 故事正文字号 */
  /* line-height: 1.8; */ /* 故事正文行高 */
}

.offline-message-card .nickname {
  /* color: #7a6a53; */ /* 昵称文字颜色，未设置上半统一文字色时使用 */
}

/* 线下思维链卡片 */
.offline-message-card .thinking-expansion {
  /* background-color: #ffffff; */ /* 思维链卡片背景 */
  /* border-color: rgba(0, 0, 0, 0.08); */ /* 思维链卡片边框 */
  /* border-radius: 12px; */ /* 思维链卡片圆角 */
}

.offline-message-card .thinking-header {
  /* background-color: #ffffff; */ /* 思维链标题栏背景 */
}

.offline-message-card .thinking-title,
.offline-message-card .thinking-icon {
  /* color: #666666; */ /* 思维链标题与图标颜色 */
}

.offline-message-card .thinking-content {
  /* background-color: #ffffff; */ /* 展开后的思维链内容背景 */
}

.offline-message-card .content-inner {
  /* color: #555555; */ /* 思维链正文颜色 */
  /* font-size: 12px; */ /* 思维链正文字号 */
  /* line-height: 1.8; */ /* 思维链正文行高 */
}

/* 线下剧情摘要卡片 */
.offline-message-card .summary-card {
  /* border-color: rgba(0, 0, 0, 0.08); */ /* 摘要卡片边框 */
  /* border-radius: 12px; */ /* 摘要卡片圆角 */
}

.offline-message-card .summary-header {
  /* background-color: #fffbfc; */ /* 摘要标题栏背景 */
}

.offline-message-card .summary-title,
.offline-message-card .summary-icon {
  /* color: #333333; */ /* 摘要标题与图标颜色 */
}

.offline-message-card .summary-content {
  /* background-color: #ffffff; */ /* 展开后的摘要内容背景 */
}

.offline-message-card .summary-text {
  /* color: #666666; */ /* 摘要正文颜色 */
  /* font-size: 13px; */ /* 摘要正文字号 */
  /* line-height: 1.7; */ /* 摘要正文行高 */
}

/* 线下迷你音乐播放器 */
.offline-player {
  /* background-color: rgba(255, 255, 255, 0.85); */ /* 播放器背景 */
  /* border-color: rgba(255, 255, 255, 0.6); */ /* 播放器边框 */
  /* border-radius: 20px; */ /* 播放器圆角 */
}

.offline-player .vinyl-wrapper {
  /* border-color: #ffffff !important; */ /* 唱片封面白边 */
}

.offline-player .vinyl-disc {
  /* background-color: #dddddd; */ /* 未加载封面时的唱片底色 */
}

.offline-player .track-title {
  /* color: #333333; */ /* 歌名颜色 */
  /* font-size: 13px; */ /* 歌名字号 */
}

.offline-player .track-artist {
  /* color: #888888; */ /* 歌手颜色 */
  /* font-size: 11px; */ /* 歌手字号 */
}

.offline-player .player-btn {
  /* color: #666666; */ /* 播放与返回线上按钮颜色 */
}
`;let W={pendants:[],globalBubblePresetId:null,bubblePresets:[{id:"default_1",name:"默认示例",css:ue}]};try{const e=localStorage.getItem(je);if(e){const n=JSON.parse(e);n.pendants&&(W.pendants=n.pendants),n.bubblePresets&&(W.bubblePresets=n.bubblePresets),n.globalBubblePresetId!==void 0&&(W.globalBubblePresetId=n.globalBubblePresetId)}}catch(e){console.error("Failed to load decor data",e)}const ke="default_template_v2",Ce="默认模板";let ce=W.bubblePresets.find(e=>e.id===ke||e.name==="默认示例"||e.name==="默认模板");ce?(ce.id=ke,ce.name=Ce,ce.css=ue):W.bubblePresets.unshift({id:ke,name:Ce,css:ue});const Yo=st({pendants:[],globalBubblePresetId:W.globalBubblePresetId,bubblePresets:W.bubblePresets,async hydratePendants(){const e=Array.isArray(W.pendants)?W.pendants:[],n=[];let t=!1;for(const a of e){const i=await ct(a,"decor-pendant",{scene:"avatar-pendant"}),d=await K(i);n.push({ref:i,url:d||i}),i!==a&&(t=!0)}this.pendants=n.filter((a,i,d)=>a.ref&&d.findIndex(l=>l.ref===a.ref)===i),t&&await this.save()},getPendantEntry(e){return this.pendants.find(n=>n.ref===e||n.url===e)||null},async resolvePendantDisplay(e){if(!e)return"";const n=this.getPendantEntry(e);return n?.url?n.url:K(e)},async addPendant(e){const n=await lt(e,"decor-pendant",{scene:"avatar-pendant"});if(!n)return"";if(this.pendants.some(a=>a.ref===n))return n;const t=await K(n);return this.pendants.push({ref:n,url:t||n}),await this.save(),n},async deletePendants(e){const n=e.map(t=>this.getPendantEntry(t)?.ref||t).filter(Boolean);this.pendants=this.pendants.filter(t=>!n.includes(t.ref)),await Promise.all(n.filter(rt).map(t=>it(t).catch(a=>{console.error("Failed to delete pendant asset",a)}))),await this.save()},async exportPendants(e){const n=e.map(t=>this.getPendantEntry(t)?.ref||t).filter(Boolean);return Promise.all(n.map(t=>at(t)))},addBubblePreset(e){e.id||(e.id=Date.now().toString()),this.bubblePresets.push(e),this.save()},updateBubblePreset(e,n){const t=this.bubblePresets.findIndex(a=>a.id===e);t!==-1&&(this.bubblePresets[t]={...this.bubblePresets[t],...n},this.save())},deleteBubblePreset(e){this.bubblePresets=this.bubblePresets.filter(n=>n.id!==e),this.save()},setGlobalBubblePreset(e){this.globalBubblePresetId=e,this.save()},getGlobalCss(){if(!this.globalBubblePresetId)return"";const e=this.bubblePresets.find(n=>n.id===this.globalBubblePresetId);return e?e.css:""},getDefaultCss(){return ue},async save(){try{localStorage.setItem(je,JSON.stringify({pendants:this.pendants.map(e=>e.ref),bubblePresets:this.bubblePresets,globalBubblePresetId:this.globalBubblePresetId}))}catch(e){console.error("Failed to save decor data",e)}}});Yo.hydratePendants();export{sn as O,St as a,on as b,T as c,Yo as d,nn as e,Dt as g};
