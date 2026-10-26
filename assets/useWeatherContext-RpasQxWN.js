const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BsGTho4G.js","./index-ChLjAKfE.css"])))=>i.map(i=>d[i]);
import{c as S,e as A,f as E,h as I,_ as N,j as i}from"./index-BsGTho4G.js";const R=t=>{let n="北京",e="北京";if(t&&i.masks){const o=i.masks.find(s=>s.id===t);o&&o.location?.reality?.city&&(n=o.location.reality.city),o&&o.location?.virtual&&(e=o.location.virtual)}else i.profile?.location?.reality?.city&&(n=i.profile.location.reality.city,i.profile.location?.virtual&&(e=i.profile.location.virtual));return{userCity:n,userVirtualCity:e}},q=t=>{if(t&&i.masks){const n=i.masks.find(e=>e.id===t);if(n?.name)return n.name}return i.profile?.nickname||"用户"},C=t=>{if(!t||!t.current)return"暂无数据";let n=`  即时温度：${t.current.temp}° ${t.current.condition}
`;return t.aqi&&(n+=`  空气质量：${t.aqi}
`),t.current.humidity&&(n+=`  空气湿度：${t.current.humidity}%
`),t.current.uvIndex&&(n+=`  紫外线指数：${t.current.uvIndex}
`),t.hourly&&t.hourly.length>0&&(n+=`  24小时预报：
`,t.hourly.slice(0,5).forEach(e=>{const o=new Date(e.time).getHours()+"时";n+=`    ${o} ${e.temp}°C ${e.condition}
`})),t.daily&&t.daily.length>0&&(n+=`  7日天气预报：
`,t.daily.slice(0,7).forEach(e=>{n+=`    ${e.date} ${e.tempMin}°C~${e.tempMax}°C ${e.condition}
`})),n},j=()=>({getWeatherContext:async(n,e,o,s=[])=>{const u=n.map(r=>typeof r=="string"?r:r.text).filter(r=>r&&!r.startsWith("[SYSTEM:")).join(`
`),y=S(e).weather;if(!A(e,"weather"))return[];const $=E(s,e,"weather",u),c=[...s].reverse().find(r=>r.sender&&r.sender!=="me"),g=typeof c?.content=="string"?c.content:JSON.stringify(c?.content||""),v=y.keywords.some(r=>g.toLowerCase().includes(r.toLowerCase()));if(!(y.mode==="always"||I(e,"weather",u,$)||v))return[];try{const r=e.activeMaskId,{userCity:W,userVirtualCity:x}=R(r),k=q(r),f=e.location?.reality?.city||"北京",P=e.location?.virtual||f,{weatherStore:d}=await N(async()=>{const{weatherStore:a}=await import("./index-BsGTho4G.js").then(p=>p.hc);return{weatherStore:a}},__vite__mapDeps([0,1]),import.meta.url),m=async a=>{try{return await d.getWeather(a,!0)}catch{const h=d.cache.get(a);return h?h.data:null}},[T,_]=await Promise.all([m(W),m(f)]);let l="";return l+=`- ${k}当地最新天气预报(${x})：
${C(T)}

`,l+=`- ${e.name}当地最新天气预报(${P})：
${C(_)}`,[{role:"system",content:JSON.stringify({displayType:"来自天气APP",content:l})}]}catch(r){return console.error("获取天气信息注入失败:",r),[]}}});export{j as useWeatherContext};
