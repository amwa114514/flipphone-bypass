import{dI as w,cu as A,cz as x,cC as l,bt as d,dz as I,bw as r,d0 as f,bv as c,b9 as u,cM as C,dB as U,dl as v,bD as B,cl as m,ew as G,L as W,K as g}from"./index-BsGTho4G.js";const T=[{version:"2026-10-24",date:"2026年10月24日",items:[{title:"【查岗V1.5】",content:`
          where：原有选择角色查岗的前置界面 → 第一栏「我的主页」<br><br>
          <strong>功能说明</strong><br>
          角色也可以基于用户的个人查岗主页反查岗。<br><br>
          <strong>一、个人查岗主页</strong><br>
          <strong>1. 登录</strong><br>
          可以切换不同的<span style="font-weight: 500; color: #ff8ba0;">面具</span>账号，不同账号的查岗数据和修改过的活动记录隔离保存。<br>
          <strong>2. 活动记录</strong><br>
          - 系统自动记录用户在开盖 Phone 上的使用情况，长按任一活动可以进入<span style="font-weight: 500; color: #ff8ba0;">编辑状态</span>。<br>
          - 编辑状态支持新增活动记录、隐藏活动、删除（仅支持删除手动添加的活动）。<br>
          - 隐藏活动记录后，对方无法查看被隐藏的活动内容。<br>
          <strong>3. 编辑个人状态 / 更新状态</strong><br>
          - 点击<span style="font-weight: 500; color: #ff8ba0;">编辑按钮</span>可以对当前面具的个人查岗信息进行填写，包含当下位置、在做什么、现在的心情、电量、网络、最近做了什么、最近常用 APP、手机活跃时间、个人活动记录。<br>
          - 可以点击“<span style="font-weight: 500; color: #ff8ba0;">让 AI 帮忙补全</span>”，该功能调用<span style="font-weight: 500; color: #ff8ba0;">副 API</span>。<br>
          - 此信息会在角色查岗 user 时提供给角色。<br>
          <strong>4. 让 TA 查我</strong><br>
          - 选择角色让对方查看你个人当前的状态，并对关注的板块进行评价。<br>
          - 查看后对方可能会选择继续查看开盖 Phone、给你在<span style="font-weight: 500; color: #ff8ba0;">微信主动发消息</span>。<br>
          - 使用查岗看到的内容会计入对方的<span style="font-weight: 500; color: #ff8ba0;">临时认知</span>，在 WeChat 和对方聊天时可能提及相关话题。<br>
          - 让角色查岗当前消耗 <span style="font-weight: 500; color: #ff8ba0;">1～2 次 API</span>，如果对方结束后不打算在 WeChat 找你聊天，不会触发第二次；目前继续查看开盖 Phone 暂未接入。<br>
        `},{title:"【修复优化】",content:`
          - [修复] 社交信息中组件的粉丝数删掉后无法再点击修改<br>
          - [修复] 被删除的角色仍然遵循自主活动发消息<br>
          - [优化] 新建角色关联的角色世界书在开启聊天后自动关联的稳定性<br>
          - [优化] WeChat 聊天链接功能识别<br>
          - [优化] epub 导入晋江 APP 的章节划分问题<br>
          - [修复] 设置微博昵称的用户刷新微博帖子后，会因 40 条上限被删除的问题<br>
          - [优化] 部分用户语音条偶发播放失败的问题<br>
          - [修复] 角色自主活动已知漏洞<br>
        `}],footerText:"此处为精简内容，更多操作内容详见具体APP，感谢大家的陪伴。若有问题请积极反馈～"},{version:"2026-10-14",date:"2026年10月14日",items:[{title:"【修复优化‼️本次需更新云端部署】",content:`
          - [优化] <span style="font-weight: 500; color: #ff8ba0;">心声</span> prompt 和CSS 自定义，在历史心声界面的高级设置处可以调整<br>
          - [优化] 公众号中心保留上次选中的面具，解决内置公众号关注丢失<br>
          - [优化] Debug 模式新增<span style="font-weight: 500; color: #ff8ba0;">角色储存体检</span>。可查看聊天记录、图片等数据的储存占用情况，辅助排查角色数据过大导致的卡顿问题<br>
          - [适配] WeChat 聊天界面 iOS 键盘弹出后遮住最新消息的问题<br>
          - [适配] 群聊聊天界面滑动底栏时禁用向左滑动进入聊天设置<br>
          - [修复] 离线自由活动角色发带图微博 / 日历行程快照 / 动态时<span style="font-weight: 500; color: #ff8ba0;">生图链路断掉</span>，以及动态图片容易爆英文 prompt 的问题<br>
          - [优化] 小红书链接识别逻辑<br>
          - [优化] 角色数据过多导致的<span style="font-weight: 500; color: #ff8ba0;">卡顿</span>情况<br>
          - [修复] 开启<span style="font-weight: 500; color: #ff8ba0;">回复托管</span>后 WeChat 聊天时会丢失角色执行的跨 APP 操作的问题<br>
          - [优化] 调整自主活动管理行程活动的提示词，日历 APP 自定义的<span style="font-weight: 500; color: #ff8ba0;">行程指导</span>也能在角色自主活动中读到，已结束行程可自主补全<br>
          - [优化] 补全调整部分的教程文本<br>
        `}],footerText:"此处为精简内容，更多操作内容详见具体APP，感谢大家的陪伴。若有问题请积极反馈～"},{version:"2026-10-11",date:"2026年10月11日",items:[{title:"【WeChat-公众号功能】",content:`
          where：WeChat APP → 公众号中心<br><br>
          <strong>功能说明</strong><br>
          可以刷新生成不同类型的公众号并进行订阅，也可以查看、收藏公众号文章，或将文章分享给角色。<br>
          可以<span style="font-weight: 500; color: #ff8ba0;">接入生图</span>，见 设置APP → 图像生成 → 适用场景 → 公众号头像/配图。<br><br>
          <strong>1. 公众号中心</strong><br>
          内置 5 个公众号，也可以点击<span style="font-weight: 500; color: #ff8ba0;">「换一批」</span>生成新的公众号及文章推荐。<br>
          - 搜索框：搜索公众号或文章<br>
          - 基于…：选择一个<span style="font-weight: 500; color: #ff8ba0;">面具账号</span>，让 AI 根据该面具的身份与偏好推荐更合适的公众号及文章<br>
          - 右上角「+」：自定义创建公众号<br>
          - 可以查看自己创建的公众号，也可以关注感兴趣的公众号<br>
          <strong>2. 创建公众号</strong><br>
          输入公众号名称后即可创建，也可以继续补充公众号相关设置。<br>
          - 公众号归属：可选择无归属，或绑定某个角色 / 面具，用于设定该公众号由谁运营<br>
          - 绑定世界书：为公众号绑定相关背景知识，生成文章时会参考对应内容<br>
          <strong>3. 公众号主页</strong><br>
          可以查看公众号已有文章，并对公众号进行关注、编辑和管理。<br>
          点击「生成文章」，可以为当前公众号生成一篇新的文章内容。<br>
          <strong>4. 文章详情</strong><br>
          可以查看完整文章，并进行删除、收藏或分享。<br>
          - 收藏后的文章可在「我的 → 收藏」中查看<br>
          - 分享可以将文章发送到相应的角色聊天窗口<br>
<br>        `},{title:"【修复优化】",content:`
          - [优化] 生图提示词拼装逻辑 + 测试生图可以选单独角色测试生图<br>
          - [修复] 离线自由活动不读用户消息的问题<br>
          - [优化] 角色在线、忙碌状态显示与开启拟真回复后的叫醒逻辑判断<br>
          - [修复] 查岗 APP 刷新状态后选择界面的距离显示<br>
          - [优化] 角色个人动态也按故事线进行隔离<br>
          - [修复] 图标名字刷新后恢复初始状态<br>
          - [修复] 部分用户无法导入备份的问题<br>
          - [迁移] 聊天界面两处壁纸储存位置，避免直接嵌入角色内部占据大量内存<br>
          - [修复] 上传面具头像遇到用户资源储存失败提醒<br>
          - [优化] 当聊天界面表情包 URL 失效后跳过加载表情包直接正常进入聊天界面<br>
        `}],footerText:"此处为精简内容，更多操作内容详见具体APP，感谢大家的陪伴。若有问题请积极反馈～"},{version:"2026-10-04",date:"2026年10月4日",items:[{title:"【WeChat-线上线下模式衔接】",content:`
          where：线下模式 → 线下设定弹窗<br>
          <strong>功能描述</strong><br>
          优化关于线上线下切换的流程，主要是降低用户的理解、操作成本。<br><br>
          <strong>1. 线上线下切换</strong><br>
          - 切换模式后新增 system 提示，提醒模型剧情、聊天已结束，按照当前模式要求的形式输出文本。<br>
          - 切换模式时增加弹出<span style="font-weight: 500; color: #ff8ba0;">记忆总结提醒弹窗</span>，用户可以选择直接切换或者总结记忆后切换。（若当前未总结消息条数过多，建议前往聊天设置处进行手动的分段总结）<br><br>
          <strong>2. 增加线下专属消息条数控制</strong><br>
          从先前的由聊天设置全局控制的注入消息条数，改成线上/线下可以独立设置。但无论哪个模式，AI 依旧同时读取设定范围内的线上 + 线下聊天记录。<br>
          <span style="font-weight: 500; color: #ff8ba0;">🔽<br> 线上-聊天设置-消息注入条数 <br> 线下-线下设定弹窗-消息注入条数</span><br><br>
          <strong>3. 优化剧情摘要</strong><br>
          改成默认启用。剧情摘要只读线下模式角色发送的消息，不会有多余轮数再占位。<br>
        `},{title:"【修复优化】",content:`
          - [优化] 自定义预设：WeChat APP 和气泡（聊天界面）的 CSS 默认模版调整得更详细<br>
          - [修复] 桌面情头中尺寸组件删掉数字后输入入口丢失<br>
          - [修复] 微博头像不一致的问题<br>
          - [优化] 副 API 兜底逻辑改成用户可控制的开关<br>
          - [适配] OPPO FindX9 Pro 雨见 微博私信界面输入框内按钮位移<br>
          - [适配] iPhone 15 Pro Safari 表情包选择器容器内部变形问题<br>
          - [适配] 查岗 APP 查看手机状态界面文字、APP 超出板块的问题<br>
          - [优化] 教程 APP 教程正文<br>
        `}],footerText:"此处为精简内容，更多操作内容详见具体APP，感谢大家的陪伴。若有问题请及时反馈～"},{version:"2026-10-01",date:"2026年10月1日",items:[{title:"【WeChat-新增生图锁脸功能】",content:`
          where：通讯录 → 角色名片 → 角色编辑页面 / 我的 → 面具管理 → 面具编辑弹窗<br><br>
          <strong>功能描述</strong><br>
          现在可为角色和面具设置<span style="font-weight: 500; color: #ff8ba0;">固定外貌参考</span>，让生图中的人物更容易保持身份一致。<br>
         <br>
          <strong>1. 外貌资料设置</strong><br>
          可选填写<span style="font-weight: 500; color: #ff8ba0;">外貌提示词</span>，并上传<span style="font-weight: 500; color: #ff8ba0;">最多 3 张人物参考图</span>；支持仅文字、仅图片或两者同时使用。<br>

          <strong>2. 自动传入生图</strong><br>
          当角色发出带有人物的图片时，系统会自动把对应<span style="font-weight: 500; color: #ff8ba0;">外貌描述与参考图</span>传入生图服务；背影、手部、风景等不会使用。<br>
          若画面中包含已设置相应外貌资料的关系网 NPC，也可同时提供其他 NPC 的外貌描述/参考图；单张图片最多使用 <span style="font-weight: 500; color: #ff8ba0;">5 位</span>人物参考。<br>

          <strong>3. 已接入场景</strong><br>
          微信聊天、朋友圈、微博、日历行程快照、查岗、情侣空间、线下小剧场等支持生图的场景均已接入。<br>
          <br>
          💡<strong>兼容说明</strong><br>
          有参考图片时，OpenAI 会尝试以<span style="font-weight: 500; color: #ff8ba0;">图片参考模式</span>生成；若服务商、模型或图片上传不支持，会自动降级为普通生图，外貌文字仍会保留，不影响生成成功。
        <br><br>`},{title:"【修复优化】",content:`
          - [适配] 华为P60 edge 教程APP移动可能有残留的问题<br>
          - [优化] 离线推送订阅失败后开关关不掉的问题<br>
          - [优化] 聊天设置美化标签里的线上线下隔离调整成全局，所有角色同步开启/关闭<br>
          - [优化] 实现设置-媒体资源管理 点击资源图片进入媒体预览可以下载生成的图片、语音等<br>
          - [优化] 自由活动-管理自己的行程，角色可以在活动中自己补全已结束的行程<br>
          - [适配] OPPO FindX9 Pro 雨见 视频通话输入框的发送按钮位移<br>
          - [修复] 微博个人帖子丢失的问题，迁移微博帖子储存位置至 IndexedDB<br>
          - [优化] 更新部分教程正文<br>
          - [修复] 情侣空间领养宠物若 API 失败有相应报错提示，而不是直接关闭弹窗<br>
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见具体APP</span><br><br>以上，大家可以查看相关BUG是否解决、新功能使用是否正常。如有问题及时反馈到BUG收集处！能优化的部分我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家对开盖的陪伴'},{version:"2026-09-27",date:"2026年9月27日",items:[{title:"【新增 - 教程APP】",content:`
          <strong>功能描述</strong><br>
          用于查看开盖完整使用教程与常见问题排查，教程按章节分类，支持关键词搜索，可以快速找到对应功能、操作方法或相关问题。<br><br>

          <strong>1. 相关教程与快捷跳转</strong><br>
          不同教程内容之间会根据当前章节提供相关教程与快捷跳转入口，方便继续查看关联功能。<br><br>

          <strong>2. 内置 AI 使用助手</strong><br>
          内置 AI 使用助手，可结合教程知识库与自身知识回答开盖相关问题，支持上传截图直接询问；回答时也会根据问题附带相关教程入口。
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见具体APP</span><br><br>以上，大家可以查看相关BUG是否解决、新功能使用是否正常。如有问题及时反馈到BUG收集处！能优化的部分我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家对开盖的陪伴'},{version:"2026-09-18",date:"2026年9月18日",items:[{title:"【修复优化】",content:`
          - [x] 补齐情侣空间装修弹窗，并调整基金获取收益，完成任务后也能有基金<br>
          - [x] 修复不同角色情侣空间传讯记录可能错乱的问题<br>
          - [x] 修复信笺丢失后找回失败的问题<br>
          - [x] 微信用户头像渲染<br>
          - [x] 修复部分微信聊天界面不显示记录的问题<br>
          - [x] 部分弹窗遮罩适配<br>
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-09-16",date:"2026年9月16日",items:[{title:"【修复优化】",content:`
          - [x] 媒体资源管理压缩图片功能优化<br>
          - [x] 恢复误删的日历行程感知<br>
          - [x] 线下模式时若有关键词会误触发查看天气的问题<br>
          - [x] 部分弹窗遮罩适配<br>
          - [x] 适配部分设备保活策略<br>
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-09-15",date:"2026年9月15日",items:[{title:"【WeChat】",content:`
          <strong>1. 新增"跨APP操作自定义"</strong><br>
          where：私聊-聊天设置-角色生活版块<br>
          类似于世界书条目的触发机制。<br>
          - 常驻：一直提供相应的操作指令<br>
          - 关键词：可自由修改调整触发关键词，触发了就给角色提供相应的操作指令<br>
          - 指令留存回合：关键词触发后，留存在提示词中的的回合<br>
        `},{title:"【修复优化】",content:`
          - [x] 加强记忆提示词要求 避免学习线上聊天记录格式<br>
          - [x] 加强WeChat线上格式解析和格式强调<br>
          - [x] 修复旁观群聊中发起接龙导致上下文token异常<br>
          - [x] 优化本地备份恢复<br>
          - [x] 优化数据统计页面 避免浏览器配额给用户带来储存空间感知误导<br>
          - [x] IOS 26版本 Safari 浏览器弹窗遮罩适配<br>
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-09-13",date:"2026年9月13日",items:[{title:"【WeChat-线上聊天】",content:`
          <strong>1. 拉黑功能</strong><br>
          where：聊天设置<br>
          可选择<span style="font-weight: 500; color: #ff8ba0;">立即发现</span>、<span style="font-weight: 500; color: #ff8ba0;">指定时间发现</span>、<span style="font-weight: 500; color: #ff8ba0;">自然发现</span><br>
          立即发现可以让对方当下对你的拉黑做出回应，自然发现则是让角色根据自己的活动时间发现（什么时候打开手机）<br>
          你也可以点击<span style="font-weight: 500; color: #ff8ba0;">信封</span>让对方主动知晓当前被拉黑的情况，并发送消息。<br>
          角色可以继续在你的聊天框发送消息，也可以给你发送好友申请。拒绝和同意都会调用一次API模拟回应。<br><br>

          <strong>2. 格式提醒</strong> <span style="color: #999;">— 仅防掉格式使用</span><br>
          where：私聊/群聊 - 聊天设置 - 自动翻译上方<br>
          任意群聊/私聊开启，所有窗口都自动复用此开关。<br>
          掉格式用，不掉一般不用开。
        `},{title:"【修复优化】",content:`
          - [x] 进入聊天界面时定位可能不准的问题<br>
          - [x] 优化好友、动态消息通知提醒<br>
          - [x] 群聊输出格式提示词优化<br>
          - [x] 聊天界面有图片信息时 发送消息界面会自动滚动定位的问题<br>
          - [x] 角色自由活动定时扫描可能卡死的问题
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-09-12",date:"2026年9月12日",items:[{title:"【WeChat-线上聊天】",content:`
          <strong>『新增单击回车功能』</strong><br>
          where：私聊/群聊-聊天设置-美化<br>
          未开启则默认<span style="font-weight: 500; color: #ff8ba0;">全局普通换行，双击发送</span>。<br>
          开启后则全局使用<span style="font-weight: 500; color: #ff8ba0;">单击发送</span>。<br><br>

          <strong>『新增人设偏移功能』</strong> <span style="color: #999;">— 仅角色可用</span><br>
          where：私聊-聊天底栏-更多功能卡片<br><br>
          针对当前对话、历史修偏记录、用户可以控制的提示词资料，分析当前问题所在，并给出相应的修改意见。<br>
          针对当前的情况可以帮助你：<br>
          - 关闭冲突世界书条目<br>
          - 世界书及条目顺序调整<br>
          - 调整世界书条目内容<br>
          - 调整人设<br>
          - 修正记忆片段<br>
          - 给ooc修正意见<br><br>
          若输出相应意见后，点击<span style="font-weight: 500; color: #ff8ba0;">应用</span>即可同步修改建议。<br>
          包括但不限于此，若需求明确他还能够帮你分析角色聊天中其他相关问题，例如<span style="color: #999;">“XX世界书注入位置是否合适”</span>，AI将给出可以复制的建议。
        `},{title:"【修复优化】",content:`
          - [x] 部分设备心声弹窗、导入角色弹窗遮罩偏移<br>
          - [x] 部分设备无法登陆<br>
          - [x] 悬浮球位置重置<br>
          - [x] 锁屏界面位移 iPhone 17 Safari<br>
          - [x] 优化IOS键盘确认栏有时遮挡输入框的问题<br>
          - [x] OPPO，Reno13 chrome世界书无法向左滑动<br>
          - [x] 修复查手机-音乐APP每个歌单歌曲一样的问题<br>
          - [x] 生成人设AI不规范格式匹配优化<br>
          - [x] 行程留言按钮文字修正<br>
          - [x] 情侣空间恋爱相簿滑动相关适配
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-09-09",date:"2026年9月9日",items:[{title:"【WeChat】",content:`
          <strong>1. 顶栏-加号菜单新增导入角色</strong><br>
          实现WeChat可以直接<span style="font-weight: 500; color: #ff8ba0;">批量导入角色卡</span>，支持格式：<br>
          - docx / md / txt 文本格式<br>
          - 开盖专属json格式<br><br>

          <strong>2. 编辑角色页面新增导出</strong><br>
          可以将角色的人设资料以及绑定的世界书条目导出为开盖专属json格式的角色卡
        `},{title:"【修复优化】",content:`
          - [x] 修复创建角色页面部分设备关系网处排版溢出的问题<br>
          - [x] 修复部分设备开启全局缩放后某些APP、弹窗界面不适配的问题<br>
          - [x] 修复情侣空间家园左右滑动容易导致底栏被拖拽晃动的问题<br>
          - [x] 修复夜间模式下屏幕黑边<br>
          - [x] 聊天设置去除空的默认资料卡，引导用户创建面具<br>
          - [x] 查手机快照从localStorage储存迁移至IndexedDB<br>
          - [x] 查手机微信APP 非NPC/角色/用户联系人同步窗口聊天记录后可能消失或者乱入其他聊天的问题<br>
          - [x] 优化IOS闪退问题 降低内存峰值<br>
          - [x] 优化登陆网页前的加载，尽可能避免白屏<br>
          - [x] 设置APP点击子页面有时卡住的问题<br>
          - [x] 优化边缘滑动手势 从左侧向右滑动不适配<br>
          - [x] 修复从云端恢复备份失败的问题，已经部署过的人记得点击更新部署<br>
          - [x] 字体APP UI优化
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-09-06",date:"2026年9月6日",items:[{title:"【设置APP-云端部署】",content:`
          <strong>1. Supabase接入</strong><br>
          只需输入有效的<span style="font-weight: 500; color: #ff8ba0;">项目地址和密钥</span>，云端连接后，点击<span style="font-weight: 500; color: #ff8ba0;">一键部署</span>初始化/更新部署即可，无需跑SQL。<br>
          Supabase部署安装完，支持：<br>
          - 将当前设备数据上传至云端，从云端恢复备份数据<br>
          - 让角色回复交由云端代理，关闭网页、闪退、拟真回复触发二次消息也正常进行<br>
          - 角色自主活动在网页关闭的情况下也能在云端继续运行<br>
          - 在网页关闭期间通过设备的系统通知提醒你收到了新消息<br><br>

          <strong>2. 云端备份</strong><br>
          - 自由选择不同备份模式：<span style="font-weight: 500; color: #ff8ba0;">智能保护、完整备份、轻量备份</span><br>
          - 自动保存备份可以自由设置<span style="font-weight: 500; color: #ff8ba0;">保存频率</span>、<span style="font-weight: 500; color: #ff8ba0;">恢复版本保存个数</span><br><br>

          <strong>3. 云端恢复</strong><br>
          - 可以查看云端所有已有的备份版本，在恢复备份前也会<span style="font-weight: 500; color: #ff8ba0;">自动创建本机保护点</span><br>
          - 支持从某个版本恢复 或 删除某个版本<br><br>

          <strong>4. 回复托管</strong><br>
          开启后云端将代理API运行，<span style="font-weight: 500; color: #ff8ba0;">微信聊天、角色自主活动</span>都将可以在无后台的情况下执行。<br><br>

          <strong>5. 离线推送</strong> <span style="color: #999;">（在后台通知页面）</span><br>
          需要先开启<span style="font-weight: 500; color: #ff8ba0;">允许浏览器通知</span>开关才可使用，开启后角色自由活动、微信聊天产生的通知都会从云端传递过来
        `},{title:"【修复优化】",content:`
          - [x] 优化进入网页速度 尽量减短<span style="font-weight: 500; color: #ff8ba0;">白屏加载时间</span><br>
          - [x] 优化IOS闪退问题<br>
          - [x] 修复本地备份纯文本会丢失<span style="font-weight: 500; color: #ff8ba0;">面具数据</span>的问题<br>
          - [x] 完善角色独立活动的通知提醒
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-08-30",date:"2026年8月30日",items:[{title:"【WeChat】",content:`
          <strong>一、聊天优化</strong><br><br>
          <strong>1. 新增拟真回复</strong><br>
          角色根据<span style="font-weight: 500; color: #ff8ba0;">当前生活状态</span>主动查看并回应。<br>
          结合了角色个人行程影响以及角色的<span style="font-weight: 500; color: #ff8ba0;">个人微信习惯</span>。<br><br>
          例如，日常回复频率为高：<br>
          - 无行程时，无需点击✉️也能较频繁触发对方回复<br>
          - 有轻松行程可玩手机，也能较频繁触发<br>
          - 有行程但不常玩手机，会降低触发频率<br>
          繁忙时有概率触发"对方好像不在哦，请稍后再联系"<br><br>

          <strong>2. 模拟真实作息</strong><br>
          从每日发送第一句话修改作息为<span style="font-weight: 500; color: #ff8ba0;">自适应调整作息</span>。且不会再在其他APP触发修改作息的临时任务。<br><br>

          <strong>3. 自动回复</strong><br>
          <strong>角色：</strong>开启后可自由调整、修改、增加自动回复问候语。<br><br>
          <strong>我的自动回复：</strong>当你不在当前界面，且角色处于后台自由活动给你发消息，系统会抽取预设库里的话代替你进行自动回复。<br>
          <span style="font-size: 12px; color: #999;">（已增设自由活动设备锁，若触发了拟真回复只允许一次，避免循环调用API造成浪费。）</span><br><br>

          <strong>4. 调整线上提示词</strong><br>
          减弱<span style="font-weight: 500; color: #ff8ba0;">异地时间地理位置</span>对当前对话的辐射，以及部分顺序调整。
        `},{title:"【设置APP】",content:`
          <strong>一、角色独立活动新增权限</strong><br><br>
          <strong>1. 微博</strong><br>
          - 浏览微博：看完之后会留下印象，后续和用户聊天可能会作为谈资。<br>
          - 管理/发布微博：可以主动发布、删除微博。<br><br>

          <strong>2. 购物</strong><br>
          - 浏览购物：逛逛购物APP，遇到有需要的会收藏或者购买。购买可以给自己也可以给用户买东西<br>
          - 查看用户购物车：可以只是看看也可以替你购买其中几样或者直接清空。<br><br>

          <strong>3. 情侣空间</strong><br>
          - 查看情侣任务：看看今日的任务，后续在聊天中可能作为谈资。<br>
          - 小家与宠物互动：角色可以喂养、和宠物聊天；充值情侣基金、购置小家中的物品。<br><br>

          <span style="color: #ff6b81; font-weight: 500;">注意‼️</span>：角色的如果处在不使用手机的行程期间将不会触发任何角色独立活动。
        `},{title:"【微博APP】",content:`
          <strong>1. 侧边栏-我的收藏</strong><br>
          可以放置收藏喜欢的帖子和视频，避免被刷新新帖子/视频的时候清理掉<br><br>

          <strong>2. 角色主页</strong><br>
          可以点击右上角刷新角色近期的主页内容
        `},{title:"【购物APP】",content:`
          <strong>1. 新增清空购物车提醒</strong><br>
          提示你谁为你购置了购物车里的物品。<br><br>

          <strong>2. 新增黄点通知提醒</strong><br>
          新增订单、快递外卖送达、好友购物或收藏物品动态、其他面具账号新消息等。
        `},{title:"【修复优化】",content:`
          - [修复] 角色主数据防覆盖<br>
          - [优化] 无user群聊主动推动指令，兼容更多API<br>
          - [修复] API报错空回导致角色被锁定在活动状态的问题<br>
          - [优化] 发送位置页面的Ui<br>
          - [修复] 情侣基金用具手动充值后丢失的问题
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-08-24",date:"2026年8月24日",items:[{title:"【查岗APP】",content:`
          <strong>一、查岗首页</strong><br>
          查手机入口目前已实现<span style="font-weight: 500; color: #ff8ba0;">9个APP数据</span>可供刷新。<br>
          <span style="font-size: 12px; color: #999;">注意：一次性生成太多APP有可能导致AI偷懒或生成失败，大家可以根据自己的API合理规划。</span><br><br>
          <strong>二、查手机</strong><br><br>
          <strong>『查岗抓包』</strong><br>
          进入查岗前会有前置确认，提醒你本次查看被抓包的大致概率。查看对方手机越久被发现的风险越大。<br>
          被抓包后，对方也会对此做出反应。<br><br>
          <strong>『设备密码』</strong><br>
          锁屏/备忘录默认密码均为<span style="font-weight: 500; color: #ff8ba0;">6个1</span>。<br>
          生成符合人设的手机密码方式：<br>
          1. WeChat直接让对方修改密码<br>
          2. 创建角色页面处生成人设会同步生成密码（无法直接看到，可以直接问角色）<br><br>
          <strong>『本次新增APP』</strong><br>
          <strong>1. 设置</strong> — 更换角色手机锁屏、壁纸、图标。此处更换的壁纸可以同步到查岗APP手机状态页面。<br><br>
          <strong>2. Deep AI</strong> — 查看角色和AI的沟通记录。<br><br>
          <strong>3. 时钟</strong> — 查看角色的当地时间、使用过其他地方的世界时钟；每天的闹钟；使用过的计时器。
        `},{title:"【设置APP】",content:`
          <strong>一、悬浮球</strong><br>
          用于快捷切换、返回各个页面。<br>
          <strong>1. 外观：</strong><br>
          三种默认外观 + 自定义外观（支持png），可以调整透明度。<br>
          <strong>2. 内置菜单：</strong><br>
          切换API、世界书管理、主屏幕、图像生成等。<br>
          <strong>3. 自定义快捷：</strong><br>
          - 可以利用悬浮球手动记录某个APP用于快捷切换<br>
          - 在悬浮球设置页手动添加角色聊天页<br>
          <span style="font-size: 12px; color: #999;">为了平衡性能，悬浮球内连续跳转多个APP最多缓存3个上级界面。</span><br><br>
          <strong>二、API设置</strong><br>
          支持主、次API分开储存预设。顺便调整UI界面。<br><br>
          <strong>三、后台通知</strong><br>
          改成支持暂停而非仅单向播放。
        `},{title:"【修复优化】",content:`
          - [修复] 线下模式退后台快速点击回到往网站可能导致消息丢失问题<br>
          - [优化] 微信列表粉色提醒逻辑优化<br>
          - [修复] 清空聊天记录按钮没有清除缓存区消息的问题<br>
          - [优化] 手动总结和私聊总结自定义提示词丢失问题<br>
          - [优化] 世界书管理使用流程，实现选中分类后导入/创建世界书可以直接归属该分类<br>
          - [迁移] 世界书、晋江部分大型数据储存迁移<br>
          - [优化] 微信聊天性能优化<br>
          - [修复] 生成人设NPC ID重复导致个别NPC丢失的问题<br>
          - [修复] 新聊天窗口没有超过显示消息条数就开始被隐藏的问题<br>
          - [修复] 查岗生图不存入相册的问题<br>
          - [修复] 查岗手机设备页面信息溢出破坏UI的问题<br>
          - [修复] 群聊编辑消息新增丢失问题<br>
          - [优化] 微信动态实现可以多选分组可见<br>
          - [优化] 钱包界面生成超大金额容易导致排版溢出<br>
          - [修复] Pollinations生图路径报错
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-08-15",date:"2026年8月15日",items:[{title:"【查岗APP】",content:`
          查手机入口目前已实现<span style="font-weight: 500; color: #ff8ba0;">7个APP数据</span>可供刷新。可以在查手机主屏幕点击右上角刷新多个APP，也在每个APP界面单独刷新。<br>
          <span style="font-size: 12px; color: #999;">注意：一次性生成太多APP有可能导致AI偷懒或生成失败，大家可以根据自己的API合理规划。</span><br><br>

          <strong>1. 微信</strong> <span style="color: #999;">『提供上一轮的数据进行刷新』</span><br>
          查看角色近期的聊天社交状况，若角色人设合适，有概率看到角色<span style="font-weight: 500; color: #ff8ba0;">拉黑、屏蔽</span>的会话。<br><br>
          聊天界面右上角三点可以对虚拟消息快照进行如下操作：<br>
          - 进入选择模式，选中删除<br>
          - 同步该聊天快照到角色聊天记录<br>
          - 同步所有窗口快照到角色聊天记录<br>
          - 清空该聊天的虚拟快照<br><br>

          <strong>2. 地图</strong><br>
          查看角色近期搜索地点记录、收藏地点及其详情页、最近导航及其详情页。<br><br>

          <strong>3. 音乐</strong><br>
          查看角色的音乐APP状况，其收藏歌曲、歌单、总播放的数量。<br>
          最近播放的全部歌曲及时间，最近收藏的全部歌曲及理由，收藏/创建歌单里的歌曲及理由，常听歌曲排行。<br><br>

          <strong>4. 浏览器</strong><br>
          书签（近期收藏的浏览器）及其详情页，历史搜索记录及其详情页。<br><br>

          <strong>5. 信息</strong> <span style="color: #999;">『若选中该APP会提供上一轮的数据进行刷新』</span><br>
          角色近期收到的短信和信息交流。<br><br>

          <strong>6. 备忘录</strong><br>
          角色最近的备忘记录文本，有锁定和未锁定两种。<br>
          目前锁定备忘录的默认密码是<span style="font-weight: 500; color: #ff8ba0;">111111</span><br><br>

          <strong>7. 钱包</strong> <span style="color: #999;">『若选中该APP会提供上一轮的数据进行刷新』</span><br>
          生成角色这一周在正常购买商品、转账记录外产生的流水。资产通常按照正常推移，除非当前资产不符合人设经济条件和消费习惯才会进行调整。<br><span style="font-size: 12px; color: #999;">（如角色当前为默认资产时候会进行调整，不过通常建议优先在生成人设处先为其生成资产）</span>
        `},{title:"【修复优化】",content:`
          - [修复] 当在其他APP点击通知横幅回到Wechat聊天界面时部分消息丢失的问题<br>
          - [优化] 优化<span style="font-weight: 500; color: #ff8ba0;">Debug模式</span> 增加查看local Storage空间内容并复制诊断信息<br>
          - [优化] 角色默认资产<span style="font-weight: 500; color: #ff8ba0;">88888</span>，编辑角色资料页面的生成人设增加可以生成资产<br>
          - [优化] 加强IOS音频保活 优化后台通知逻辑<br>
          - [修复] 面具保存失败问题<br>
          - [修复] 导出备份导致世界书APP分类的丢失问题<br>
          - [修复] 打开世界书选择弹窗有概率导致覆盖本地内存数据问题<br>
          - [修复] 导出备份Min Max Key丢失问题<br>
          - [优化] Debug管理模式优化 新增<span style="font-weight: 500; color: #ff8ba0;">localStorage空间计算诊断</span><br>
          - [修复] 切换故事线可能导致另一个故事线最后一轮消息误入当前故事线的问题<br>
          - [修复] 线下模式界面长按线下消息卡片想要唤起消息选择器有可能导致卡住的问题</span><br>
          - [修复] 日历APP刷新行程无法覆盖的问题<br>
          - [修复] 线下线上隔离开启失忆的问题<br>
          - [优化] 世界书分类书籍逻辑优化<br>
          - [修复] 世界书部分设备、浏览器无法长按进入选择的问题<br>
          - [修复] 导出角色聊天记录再导入另一个新角色会导致数据错乱的问题
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-08-02",date:"2026年8月2日",items:[{title:"【角色聊天设置】",content:`
          <strong>一、导出 / 导入聊天记录</strong><br>
          单独导出角色的聊天记录，支持以下选项：<br>
          - 可导出<span style="font-weight: 500; color: #ff8ba0;">纯文本 / 携带媒体资源</span><br>
          - 可仅导出<span style="font-weight: 500; color: #ff8ba0;">当前故事线</span>，也可导出<span style="font-weight: 500; color: #ff8ba0;">全部故事线</span>
        `},{title:"【设置APP】",content:`
          <strong>一、API设置</strong><br>
          高级设置处新增<span style="font-weight: 500; color: #ff8ba0;">流式输出</span>，系统在后台持续接收输出，内容完整后再返回前端<br><br>

          <strong>二、数据统计页面</strong><br>
          新增<span style="font-weight: 500; color: #ff8ba0;">媒体资源管理</span>：<br>
          查看处理本地资源内的媒体大文件占据内存，查看具体媒体文件所在位置及其引用位置<br>
          - 文件按类型、APP / 图片引用位置分类<br>
          - 可以进行<span style="font-weight: 500; color: #ff8ba0;">清理图片 / 语音 / 音乐内容</span>、<span style="font-weight: 500; color: #ff8ba0;">压缩图片</span>操作<br>
          - <span style="font-weight: 500; color: #ff8ba0;">智能提醒</span>：快速勾选未引用文件、重复副本进行清理<br><br>

          <strong>三、备份与恢复</strong><br>
          新增备份方式选择——<span style="font-weight: 500; color: #ff8ba0;">完整 / 纯文本 / 自定义</span><br>
          - 纯文本：只保留文本相关数据<br>
          - 自定义备份：选择想打包的媒体数据<br><br>

          <strong>四、管理员Debug模式</strong><br>
          保留<span style="font-weight: 500; color: #ff8ba0;">最近30条错误警告日志</span>，遇到bug或闪退问题可以问一下AI或者复制给我
        `},{title:"【日历APP】",content:`
          <strong>一、查看日历弹窗新增高级设置</strong><br>
          - 新增<span style="font-weight: 500; color: #ff8ba0;">定时自动补全</span><br>
          - 注入相关聊天<br>
          - 行程提示词补充<br><br>

          <strong>补全行程：</strong><br>
          当行程尚未超过制定时间前，只有行程部分数据，更多数据需要等待角色经历行程后才可以进行补全。<br>
          - <span style="font-weight: 500; color: #ff8ba0;">手动</span>：在日历行政区域最下方点击"补全行程"进行补全，或进入APP提醒弹窗选择角色进行补全<br>
          - <span style="font-weight: 500; color: #ff8ba0;">自动</span>：开启高级设置处定时补全，或角色自由活动开启日历相关权限<br><br>

          <strong>二、拓展行程数据</strong><br>
          新增了<span style="font-weight: 500; color: #ff8ba0;">地点、目的、参与人、行程详情、途中见闻、影响</span><span style="color: #999;">（情绪/精力/关系）</span><br><br>

          <strong>三、行程接入生图</strong><br>
          行程瞬间的虚拟图片支持<span style="font-weight: 500; color: #ff8ba0;">刷新 / 补全生成图片</span>，只需要在 设置APP-图像生成 开启相应的场景开关即可<br><br>

          <strong>四、支持选择角色留言</strong><br>
          用户自己的行程，由"自动获取最近聊天角色进行留言"改成<span style="font-weight: 500; color: #ff8ba0;">用户自己选择相应的角色获取相应留言</span><br><br>

          <strong>五、优化提示词</strong><br>
          调整了日历行程提示词，角色部分目前只读取当前人设、故事线记忆、角色创建页面绑定的<span style="font-weight: 500; color: #ff8ba0;">角色相关世界书</span><br>
          若角色开启模拟作息，行程也会跟随作息节奏
        `},{title:"【查岗APP】",content:`
          从查手机定位更为<span style="font-weight: 500; color: #ff8ba0;">查岗</span>，可以查看角色当前的状态<br>
          <span style="font-size: 12px; color: #999;">注意：目前查手机按钮入口暂未真实实现。</span><br><br>

          点击刷新即可查看以下数据<span style="color: #999;">（耗费1次API）</span>：<br><br>

          <strong>1. 查看角色的轨迹 - TA在这里</strong><br>
          - 地图上显示今日行动路径<br>
          - 今日步数、移动距离、外出时长<br>
          - 停留点相关安排<br>
          - 近三天轨迹概览：最常停留点、最高步数日、生活规律<br><br>

          <strong>2. 查看角色生理状态</strong><br>
          - 睡眠时长：深睡、浅睡、REM、梦境记录<br>
          - 心率、精力、情绪、压力<br>
          - 今日摄入、消耗<br>
          - 近三天趋势：睡眠、情绪、压力<br>
          - HRV、血氧、呼吸频率、体温、静息心率、水分摄入<br><br>

          <strong>3. 当前事件</strong><br>
          - 当前事件的具体内容：title、时间、位置、详情记录<br>
          - 当前瞬间的图片快照<br>
          - 事件相关记录<br>
          - 事件影响和心声<br><br>

          <strong>4. 手机状态</strong><br>
          - 电量、Wi-Fi、手机状态<br>
          - 使用时长、常用APP、APP使用分布<br>
          - 活跃时长、电量变化<br><br>

          <strong>5. 活动记录</strong><br>
          手机使用轨迹 + 日常活动，可查看当天和近三天的<br>
          <span style="font-size: 12px; color: #999;">该板块和日历行程密切相关，建议开启角色的行程感知并在获取数据前刷新当日行程安排（如果不提供则根据聊天记录和角色设定进行推演）</span>
        `},{title:"【修复优化】",content:`
          -  修复全局缩放优化导致的微博视频界面滑动整个界面也跟着滑动的问题<br>
          -  优化Wechat聊天时闪退问题<br>
          -  修复Wechat编辑消息新增消息失败的问题<br>
          -  修复部分设备晋江闪退、无法左右平移翻页问题<br>
          -  优化<span style="font-weight: 500; color: #ff8ba0;">角色自由活动 / 主动发消息</span>相关逻辑<br>
          -  优化图像生成，增加两个新生图场景：<span style="font-weight: 500; color: #ff8ba0;">查岗、日历</span>
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-07-21",date:"2026年7月21日",items:[{title:"【生图功能】",content:`
          <strong>一、设置APP-图像生成</strong><br>
          1. <span style="font-weight: 500; color: #ff8ba0;">支持Pollinations/Open AI服务</span><br>
          - 适用场景：如WeChat聊天，线下小剧场配图，支持不同服务生成不同的场景以节省token<br>
          - 高级设置：对应不同服务商的图片高级选项<br><br>
          2. <span style="font-weight: 500; color: #ff8ba0;">全局设置</span><br>
          - 自定义生成图片的画幅<br>
          - 正向提示词<br>
          - 负向提示词<br><br>
          3. <span style="font-weight: 500; color: #ff8ba0;">测试生图</span><br>
          可以在此处验证当前服务商的生图APi可用性。可以查看生图请求路径、发送给服务商的最终提示词。
        `},{title:"【WeChat 聊天】",content:`
          <strong>一、角色聊天功能</strong><br>
          1. <span style="font-weight: 500; color: #ff8ba0;">撤回消息</span><br>
          - 用户撤回消息改成对方百分之50几率可见<br>
          - 角色可以聊天中主动撤回消息<br><br>
          2. <span style="font-weight: 500; color: #ff8ba0;">点赞图片</span><br>
          完善相关点赞逻辑 角色可能会点赞你发送的真实图片<br><br>

          <strong>二、角色聊天设置</strong><br>
          1. <span style="font-weight: 500; color: #ff8ba0;">图片配置</span><br>
          - <span style="font-weight: 500; color: #ff8ba0;">允许使用相册</span>：从默认板块改成动态开关。开启时角色可以看到自己图库里有哪些图片 会插入关于相册使用管理的提示词 轻微增加token增强聊天体验 不需要的可以关掉<br>
          - <span style="font-weight: 500; color: #ff8ba0;">允许更换头像</span>：允许角色使用相册图片或者保存你新发的图片设为头像<br>
          - <span style="font-weight: 500; color: #ff8ba0;">允许生图</span>：开启后WeChat场景下该角色可调用生图服务。聊天、动态的虚拟图片将在图片生成后填入虚拟图片占位。生图失败则退回虚拟图片文字描述<br>
          - <span style="font-weight: 500; color: #ff8ba0;">生图自动存入相册</span>：开启后在其他场景生成的图会保存至角色的相册图库<br><br>

          <strong>三、动态</strong><br>
          <span style="font-weight: 500; color: #ff8ba0;">朋友圈动态手动刷新互动数据</span><br>
          点击三点菜单 - 获取评论 生成该动态的评论和点赞：<br>
          - 允许指定角色/NPC对动态进行评论点赞<br>
          - 可以随机抽取3-5人查看该动态 进行点赞、评论<br>
          可以获取动态的初次数据，同时也可以延续动态评论区的讨论
        `},{title:"【修复优化】",content:`
          - [x] 部分设备/浏览器<span style="font-weight: 500; color: #ff8ba0;">全局缩放不兼容</span> 导致部分APP不适配出现界面偏移的情况<br>
          - [x] 优化自定义预设新增<span style="font-weight: 500; color: #ff8ba0;">左右滑动手势开关</span> 可以左右滑动退出 并优化手势 避免聊天过程中容易划出聊天界面的问题<br>
          - [x] API设置拉取模型localStorage报错的问题<br>
          - [x] 修复主屏幕移动dock栏的APP在刷新后会重新恢复的问题<br>
          - [x] 修复朋友圈角色无法查看真实图片的问题<br>
          - [x] 晋江APP切换到平移无法正常翻页相关BUG
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-07-11",date:"2026年7月11日",items:[{title:"【WeChat聊天】",content:`
          <strong>一、思维链控制-私聊聊天设置页</strong><br>
          给固定的thinking拆出来做<span style="font-weight: 500; color: #ff8ba0;">动态开关</span>了。思维链相关的提示词也可以进行替换自己缝。<br>
          - <span style="font-weight: 500; color: #ff8ba0;">对话思考</span>：开启后线上对话进行思考再回复。默认状态开启。<br>
          - <span style="font-weight: 500; color: #ff8ba0;">显示思维链条</span>：开启后聊天界面可以查看角色的思维链<br>
          - <span style="font-weight: 500; color: #ff8ba0;">思考提示词</span>：支持自定义编辑/保存预设/删除预设/应用全局<br>
          - <span style="font-weight: 500; color: #ff8ba0;">TA的近期思考</span>：展示最新10条思考记录<br><br>

          <strong>二、发送图片</strong><br>
          1. 发送图片弹窗<span style="color: #999;">[真实图片]</span><br>
          新增<span style="font-weight: 500; color: #ff8ba0;">长期保留图片理解</span>，开启后可以让这张图的图片编码在后续每次回复依旧提供给AI<br>
          不开启则自动清理图片base64避免占用大量上下文<br><br>
          2. 手动删除编码方式<br>
          - 点击聊天界面该图片进入查看图片器时，点击垃圾桶可以删除图片编码<br>
          - 长按消息手动删除该条图片消息<br>
          - 聊天设置清空图片和其他消息<span style="color: #999;">（慎用）</span><br><br>

          <strong>三、视频通话<span style="color: #999;">（同语音通话逻辑）</span></strong><br>
          1. 拨打/挂断<br>
          - 拨打电话过去会调用一次API，角色可以选择<span style="font-weight: 500; color: #ff8ba0;">接通or挂断</span><br>
          - 角色可以<span style="font-weight: 500; color: #ff8ba0;">主动发起视频通话</span><br><br>
          2. 通话画面<br>
          - 可以在聊天设置视频与通话板块上传角色铃声/视频画面、用户视频画面。支持上传视频或动图<br>
          - 支持让角色看到真实视频画面：点击自己的小屏幕可以设置开启<span style="font-weight: 500; color: #ff8ba0;">前置/后置摄像头</span><span style="color: #999;">（触发API那一刻截取视频帧）</span>，也可以关闭摄像头<br>
          - 用户的小屏画面可以<span style="font-weight: 500; color: #ff8ba0;">拖拽</span> 自由放置在不会遮挡卡面的位置<br><br>
          3. 通话功能<br>
          - <span style="font-weight: 500; color: #ff8ba0;">开启话筒</span>：支持语音转文字 停顿3秒自动发送触发API<br>
          - <span style="font-weight: 500; color: #ff8ba0;">通话总结</span>：如果打电话很长可以总结一下，避免通话记录在聊天界面正常聊天时候占用太多token<br>
          - <span style="font-weight: 500; color: #ff8ba0;">背景音</span>：通话环境声，点击向下展开，可以设置环境音量和人声音量<br>
          - <span style="font-weight: 500; color: #ff8ba0;">重回</span>：点击重回可以删去上一轮角色发出的内容并重新触发API进行回复<br><br>
          <span style="color: #999;">☎️结束后，点击展示通话时长的气泡可以展示通话记录，以及当时生成的语音可以点击重新回放</span><br><br>
          <span style="color: #ff6b81; font-weight: 500;">[注意‼️]</span><br>
          1. 通话过程中不会触发该角色自由活动<br>
          2. 开启摄像头前请注意：<br>
          本功能仅在浏览器内调用你的摄像头权限，我们不会获取你的摄像头画面、视频内容或本地设备数据，但在使用过程中相关内容可能会被发送至对应的第三方服务方处理。<br>
          注意尽量不要在摄像头画面暴露个人隐私或敏感内容！！！<br>
          如果你使用的是非官方 API 站点或第三方中转服务，请自行确认其隐私政策、日志保存规则、数据用途和安全性。小手机无法保证第三方服务不会记录、保存、分析或转发你的请求内容。
        `},{title:"【修复优化】",content:`
          - [优化] 私聊/群聊<span style="font-weight: 500; color: #ff8ba0;">token正确预估</span><br>
          - [修复] 完全自定义组件有底部白色背景的问题<br>
          - [优化] 新增<span style="font-weight: 500; color: #ff8ba0;">世界书排序功能</span><br>
          - [修复] WeChat聊天上传图片过大导致加载出错的问题<span style="color: #999;">（先压缩再传base64）</span><br>
          - [修复] 重回导致真实图片base64丢失的问题<br>
          - [优化] 私聊聊天设置短期总结只弹400报错<span style="color: #999;">（上下文超出上限）</span> 新增改成<span style="font-weight: 500; color: #ff8ba0;">全量/分段总结</span>弹窗<br>
          - [修复] 聊天界面数字/英文长消息会超出屏幕的问题<br>
          - [优化] 设置通知音效增加重置，修复上传来铃声丢失问题<br>
          - <span style="color: #999;">（tr：）</span>翻译格式改成<span style="font-weight: 500; color: #ff8ba0;">『tr：』</span> 避免和Min Max2.8模型的语气词冲突
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-07-04",date:"2026年7月4日",items:[{title:"【WeChat群聊功能】",content:`
          <strong>一、创建群聊</strong><br>
          - 可以创建包含自己/<span style="font-weight: 500; color: #ff8ba0;">仅NPC群聊</span><br>
          - 群昵称为必需字段，群类型/群介绍/群关系网皆为可选<span style="color: #999;">（如果是包含用户的时候因为此时没有在群聊设置中面具所以会展示默认的身份，不影响绑定关系）</span><br>
          - 支持自定义群头像<span style="color: #999;">（可上传图片或使用成员头像拼接）</span><br><br>

          <strong>二、通讯录查看群聊</strong><br>
          1. <strong>群通知页面</strong><br>
          展示已有群聊，点击单个群聊即可进入群聊聊天页面<br>
          2. <strong>群管理页面</strong><br>
          可以<span style="font-weight: 500; color: #ff8ba0;">向左滑动</span>对群聊进行编辑、解散的操作<br><br>

          <strong>三、群聊聊天页面</strong><br>
          生活运行逻辑： 根据角色是否在线<span style="color: #999;">（角色私聊设置的状态作息）</span>让角色参与群聊<br>
          1. <strong>群聊功能</strong><br>
          - 文本/表情包/语音/图片/OOC修正/位置<br>
          - <span style="font-weight: 500; color: #ff8ba0;">转账</span>：支持转账给群成员<br>
          - <span style="font-weight: 500; color: #ff8ba0;">红包</span>：专属红包/拼手气红包<span style="color: #999;">（24小时内有效）</span><br>
          - <span style="font-weight: 500; color: #ff8ba0;">投票</span>：可发起投票并设置多个选项<br>
          - <span style="font-weight: 500; color: #ff8ba0;">接龙</span>：可发起接龙并回复参与<br>
          - <span style="font-weight: 500; color: #ff8ba0;">@成员</span>：全体、个别<br><br>

          2. <strong><span style="font-weight: 500; color: #ff8ba0;">围观群聊</span></strong><br>
          仅NPC所在群聊用户不可使用完整群聊功能，此时功能如下：<br>
          - OOC修正：也是和私聊群聊一样重回人设<br>
          - <span style="font-weight: 500; color: #ff8ba0;">推动</span>：点击直接触发API自动推动剧情<br>
          - <span style="font-weight: 500; color: #ff8ba0;">意见</span>：输出下轮聊天想要的剧情<br><br>

          3. <strong>群聊设置页面</strong><br>
          <u>设定</u>:<br>
          - 成员管理：添加/移除成员、管理权限、设置头衔/禁言、查看状态与名片<br>
          - 记忆与设定：关联世界书、<span style="font-weight: 500; color: #ff8ba0;">记忆注入与同步</span>、<span style="font-weight: 500; color: #ff8ba0;">自动/手动对话总结</span><br>
          - 聊天偏好：跟随作息、<span style="font-weight: 500; color: #ff8ba0;">允许角色私聊</span>、时间感知、自动翻译、绑定表情包<br>
          - 数据管理：身份切换、消息搜索、清空记录与缓存、Token预估<br>
          <u>美化</u>:<br>
          - 聊天背景、字体大小、气泡样式、自定义头像与挂件、时间戳样式<br><br>

          <strong>四、群聊内角色可执行操作</strong><br>
           1. <strong>基础功能</strong><br>
          普通群聊用户可以执行的，角色都可以执行。<span style="color: #999;">（详见上方板块）</span><br><br>
          2. <strong>社交互动</strong><br>
          需群设置开启"<span style="font-weight: 500; color: #ff8ba0;">允许角色私聊</span>"<br>
          - 支持<span style="font-weight: 500; color: #ff8ba0;">私聊其他成员</span>：多轮对话<br>
          - 支持<span style="font-weight: 500; color: #ff8ba0;">私聊用户</span>：不会代替用户发言 只模拟该角色说的话<br><br>
          3. <strong>群管理<span style="color: #999;">（限群主/管理员角色）</span></strong><br>
          - 修改群昵称：角色可修改自己在群内的昵称<br>
          - 邀请成员：群主/管理员可邀请新角色入群<br>
          - 管理成员：群主可管理所有成员，管理员可管理普通成员<br>
          - 禁言成员：群主/管理员可对成员进行禁言/解禁<br>
          - 设置管理员：群主可设置/取消管理员<br>
          - 转让群主：群主可将群主身份转让给其他成员<br>
        `},{title:"【修复优化】",content:`
          - [优化] Wechat聊天回复逻辑调整：✉️按钮改成无需用户主动发消息也可以<span style="font-weight: 500; color: #ff8ba0;">点击获得AI回复</span><br>
          - [修复] 适配iMeesage短信输入框在部分设备/浏览器超出屏幕范围的问题 <br>
          - [修复] 适配部分设备/浏览器无法长按唤起<span style="font-weight: 500; color: #ff8ba0;">编辑模式</span>的问题<span style="color: #999;">（还有不行的和我说）</span><br>
          - [修复] 添加组件弹窗自定义组件占据格数判断错误 还有文字显示应该都为Miao Widget<br>
          - [修复] 恢复信息APP详情页号码展示iMwssage 从按角色开启改成<span style="font-weight: 500; color: #ff8ba0;">按窗口开启上下文互通</span>避免获取信息产生的不需要的消息被错误认知<br>
          - [优化] <span style="font-weight: 500; color: #ff8ba0;">优化Wechat线上提示词</span> 顺便加强自动翻译<br>
          - [修复] 微博或者iMessage开启上下文互通后系统消息、表情包等等消息类型被转为普通文本或过滤的问题<br>
          - [修复] dock栏图标上传后不会自动更新的问题<br>
          - [修复] 表情包如果上传本地图片可能发送失败的问题，以及token预估本地表情包识别会错误识别成base64转换成token估算的问题<br>
          - [修复] 生成面具处如果格式不对丢失提醒默认退回内置面具的问题<br>
          - [修复] 自定义组件的css影响小手机中其他页面的UI样式的问题<br>
          - [优化] <span style="font-weight: 500; color: #ff8ba0;">优化异步加载逻辑</span> 避免资源竞争,减少兼容性不佳情况下容易白屏延迟的情况<br>
          - [修复] 晋江APP导入书籍后卡死问题
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-06-22",date:"2026年6月22日",items:[{title:"【新增APP：iMessage】",content:`
          <strong>一、iMessage首页</strong><br>
          <strong>1.</strong>点击顶栏信息title切换登陆面具账号<br>
          切换面具后展示的消息也不一样 不同面具有不同的消息列表储存位置<br><br>
          <strong>2.</strong>消息列表<br>
          - 陌生信息展示号码 角色信息展示头像昵称<span style="color: #999;">（获取生成的信息需合并）</span><br>
          - 关键词/号码/名字 搜索信息<br><br>
          <strong>3.</strong>发给联系人<br>
          点击顶栏的编辑按钮>发给联系人<br>
          输入角色的电话号码即可给对方发送消息<br>
          ☎️找角色要<span style="color: #999;">（WeChat、微博私信都支持）</span><br><br>
          <strong>4.</strong>获取信息<br>
          点击顶栏的编辑按钮>获取信息<br>
          可模拟获取到当前面具近期收到的短信<br>
          可能会收到骚扰/垃圾短信。<br><br>
          <strong>特殊情况（购物APP送达短信）</strong>：<br>
          用户 - 购买时候使用的面具账号会收到购买商品的对应物流/外卖短信<br>
          如果角色给你当前面具准备惊喜也会收到送达短信<br>
          角色 - 之前有写购物东西到了自动触发收到礼物主动发消息，这里先不做优化后期可能拓展至查手机<br><br>
          <span style="color: #999;">注意：<br>购物地址名字/号码填写的 当前购物APP登陆的 面具账号的名字/号码，会匹配给自己买的短信提醒；<br>
          否则匹配为给其他人买的购物短信提醒。</span><br><br>
          <strong>二、信息私聊界面</strong><br>
          <strong>1.</strong>聊天设置-消息互通开关<br>
          - 只有角色聊天有该选项，开启后互通聊天上下文<span style="color: #999;">（和微博、Wechat可共享聊天记录，需要注意的点是微博也要设置开启才可共享微博的聊天记录）</span><br>
          - 记忆和APP使用记录始终是互通的 尽管不知道聊了什么也能知道用了什么APP<br>
          - 时间感知/行程认知都是由WeChat聊天设置共同设置 WeChat开启此处也知晓<span style="color: #999;">（同微博）</span><br><br>
          <strong>2.</strong>底部输入<br>
          - 语音按钮为触发API回复键<br>
          - 加号按钮为重回键<br><br>
          <strong>三、跨APP操作</strong><br>
          支持角色在WeChat APP给你发送iMessage信息<br>
          指令触发关键词：<br>
          ['短信', 'imessage', 'iMessage', '手机号码', '手机号', '电话号码', '发信息', '发个信息','发条消息', '发短信', '给我号码', '通知我']<br>
        `},{title:"【修复优化】",content:`
          - [修复] 安卓端底栏偏下，夜间模式下部分设备屏幕出现白边<span style="color: #999;">（现在变成黑边了，不过大部分设备本身好像都是有黑边的不会特别影响体验T T）</span><br>
          - [修复] Edge浏览器主屏幕翻页卡顿掉帧问题<br>
          - [修复] 主屏幕编辑模式图标移动跑到网格外的问题<br>
          - [修复] 某些浏览器长按会唤起图片提取器导致主屏幕无法进入编辑模式<br>
          - [优化] 考虑到适用性，调整并新增组件<span style="color: #999;">（极简图文组件可以修改颜色）</span><br>
          - [修复] 顶栏通知无法正确获取APP图标的问题<br>
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-06-16",date:"2026年6月16日",items:[{title:"一、【情侣空间APP-空间小家互动区】",content:`
          <strong>1. 与宠物对话</strong><br>
          - 点击宠物后点击顶部弹出的气泡框可以与宠物进行对话<br>
          - 对话记录会同步进群聊中<br><br>
          <strong>2. 家园群聊功能</strong><br>
          - 可以和宠物、伴侣三个人一起聊天。<br>
          - 群聊设置：可设置 上下文条数/表情包分组/聊天背景/群聊名称<br>
          - 角色能够查看到的信息：情侣任务/清单完成进度/聊天记录/基金金额/宠物实时数值状态<br>
          - 角色在群聊中可以进行的操作：购买商品/充值情侣基金/使用背包物品/创建购物清单<br>
        `},{title:"二、【设置APP- 自定义与预设】",content:`
          ⚠️桌面自定义化，长按桌面可以进入编辑模式<br><br>
          <strong>1. 管理</strong><br>
          - 全局界面缩放：适用于不同尺寸的手机调整到最佳阅读比例，作用全局<br>
          - 主屏幕管理：增加页数 删除页数 恢复默认布局<br>
          - 桌面预设管理：储存桌面预设，随时切换桌面装扮<br><br>
          <strong>2. 组件（桌面编辑模式添加也可查看）</strong><br>
          - 查看已有的小/中/大尺寸组件，并添加至主屏幕<br>
          - 允许自定义组件并储存预设（可导入/导出）<br><br>
          <strong>3. 外观</strong><br>
          - WeChat主题美化：可在此编辑WeChat APP的外部主题美化，支持导入/导出css，支持储存预设 切换应用预设<br>
          - 聊天气泡美化：可在此编辑WeChat 聊天界面的美化，支持导入/导出css，支持储存预设 切换应用预设<br>
        `},{title:"三、修复优化",content:`
          - [修复] 语音通话残留铃声ID导致通话无法接通的问题<br>
          - [优化] 线下模式认知 应该不会再出现线下模式输出线上聊天消息的问题了<br>
          - [修复] 上传方式弹窗的选择图片链接后复制链接交互冲突导致的粘贴不进去的问题<br>
          - [优化] 聊天设置动态频率增加“从不”。选中后聊天过程中不会再被动触发查看任何朋友圈动态内容（除非用户提及动态相关关键词 后我会补充至食用教程）<br>
          - [优化] 优化系统通知动态“角色查看了你的主页”归属认知<br>
          - [优化] 聊天设置生活版块增加日历行程认知，把日历类的提示词从固定默认插入改为可动态控制<br>
          - [修复] Redmi Note 14 Pro+，Edge 字体APP切换过后还是手机系统设置的字体问题<br>
          - [修复] 修复读取手机系统时间会默认当下时间为北京时间的问题 增添令时感知<br>
          - [修复] 修复部分设备地理位置弹窗输入框超出弹窗范围问题<br>
          - [新增] API设置主API新增排除附加参数<br>
          - [优化] 晋江阅读界面水平翻页保存进度优化，避免文字截断。添加书签优化跳转到添加书签的对应章节页数<br>
          - [修复] 修复通讯录管理弹窗角色名字过长会导致布局页面混乱<br>
          - [修复] 夜间模式下部分设备屏幕出现白边
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-06-03",date:"2026年6月3日",items:[{title:"修复优化",content:`
          - [修复] 自主活动聊天消息丢失问题。<br>
          - [修复] 地理位置相关，优化AI认知地点。如解决了天气APP修改天气后天气恢复原始版本。<br>
          - [修复] 微博首页刷新到帖子错误归类到超话的精华栏目下的问题。<br>
          - [修复] AI只发一句话的问题。<br>
          - [优化] 线上提示词输出格式部分和外国char翻译适配。<br>
          - [修复] 自由活动会遗漏心声的问题。<br>
          - [修复] 外国char自由活动没有翻译的问题。<br>
          - [优化] 移除拉取API双重验证，并新增对话验证板块。<br>
          - [修复] char收款消息看成退款消息的问题。<br>
          - [修复] 让char加你开场白掉格式问题。
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-05-29",date:"2026年5月29日",items:[{title:"一、【📖晋江APP】",content:`
          此APP当前功能更贴近于本地阅读器。<br>
          <span style="font-size: 12px; color: #999;">注意：写文优先调用『副API』</span><br><br>
          <strong>1. 书架页面</strong><br>
          - 展示所有导入及创作的书籍，支持txt/docx/epub导入。<br>
          - 可创建分类、搜索书籍、长按批量操作。<br><br>
          <strong>2. 侧边栏</strong><br>
          -   外观设置：自定义背景、书籍封面、字体。<br>
          -   阅读统计：记录阅读历史和目标。<br>
          -   写小说：<span style="font-weight: 500; color: #ff8ba0;">输入书名、作者</span>即可创建小说，其余为可选项。<br>
          -   发现作者：创作作品前需先创建作者。<br><br>
          <strong>3. 阅读界面</strong><br>
              底栏——『目录/笔记/夜间/设置/进度条｜伴读📖』<br>
          -   伴读模式：与角色共同阅读，Chat展开聊天面板，<span style="font-weight: 500; color: #ff8ba0;">点击头像触发API</span>。实现记忆互通，退出后在WeChat生成记录卡片。<br><br>
              顶栏——『收藏章节、重写、调整AI输出、查看脉络、修改书籍信息』<br>
          -   章节脉络：可以快速搜索查看往期章节剧情总结，支持编辑、删除，并且可以控制注入条数。<br><br>
           -  文本操作：长按进行复制、划线、笔记。<br><br>
        `},{title:"二、【情侣空间APP-空间小家互动区】",content:`
          <strong>1. 情侣任务</strong><br>
          -   每日任务：每日刷新，手动勾选完成，连续7天可获金币。<br><br>
          <strong>2. 商城与背包</strong><br>
          - 商城：使用<span style="font-weight: 500; color: #ff8ba0;">恋爱基金</span>购买物品，支持多选购买物品，角色可在WeChat跨APP购买商品。<br>
          - 背包：可查看已有物品和购物清单，若购买相应物品划线显示。角色可在WeChat跨APP使用商品。<br><br>
          <strong>3. 领养功能</strong><br>
          - 自定义宠物：支持自由宠物设定（外观支持URL/图片上传），可生成常用语句和个性资料。<br>
          - 宠物互动：查看已领养宠物状态、数值，宠物可在房间内特定锚点互动。<br><br>
          <strong>4. 我的-恋爱基金页面</strong><br>
          - 资金管理：每周可充值520，任务/清单是其他金币来源，角色可跨APP充值。<br><br>
        `},{title:"三、修复优化",content:`
          - [修复] 线下模式关联世界书弹窗被遮挡。<br>
          - [新增] 世界书支持导入/导出（txt/docx/开盖格式json）。<br>
          - [修复] 聊天设置处绑定表情包后会导致表情包选择器标签拦无法选择全部表情包的问题<br>
          - [修复] WeChat动态无法评论表情包。<br>
          - [优化] 切换线下模式卡顿问题。<br>
          - [优化] 线下模式小剧场CSS污染及尺寸控制。<br>
          - [修复] WeChat聊天输入框单击换行清空文字。<br>
          - [优化] 新增备份功能板块。<br>
          - [修复] Base64图标切换预设可能导致丢失。<br>
          - [修复] Netify真实链接功能无法解析网页链接。<br>
          - [修复] 情侣空间选择字体消失的问题。
        `}],footerText:'<span style="color: #ff8ba0;">此处为精简内容，更多操作内容详见群内！</span><br><br>以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长'},{version:"2026-05-19",date:"2026年5月19日",items:[{title:"一、🧣微博APP 上线",content:`
          这是一个非经典论坛，配置了社交平台的刷视频功能。所有的NPC和角色都可以参与其中。<span style="font-size: 12px; color: #999;">（生成帖子数据优先调用副API，主动发微博逻辑待开发）</span><br>
          <br>
          <strong>1. 侧边栏菜单</strong>
          - <span style="font-weight: 500; color: #ff8ba0;">Word世界</span>：创建存在不同角色的平行世界，帖子数据隔离。可配置简介和世界观，左滑管理。<br>
          - <span style="font-weight: 500; color: #ff8ba0;">超话广场</span>：全局通用。创建/关注感兴趣的圈子，大数据优先推荐。支持详情页单独生成帖子。<br>
          - <span style="font-weight: 500; color: #ff8ba0;">NPC管理</span>：支持绑定数据供其他世界共用。可绑定微信表情包，支持URL/相册批量导入头像库。<br>
          - <span style="font-weight: 500; color: #ff8ba0;">我的音乐库</span>：创建歌单，支持文件/URL导入，用于视频界面刷视频的BGM。<br>
          - <span style="font-weight: 500; color: #ff8ba0;">视频偏好</span>：支持限定每次生成视频条数（建议8-10条），自定义偏好标签。<br>
          <br>
          <strong>2. 我的界面</strong>
          <strong>- 账号与资料</strong>：点击头像/名字切换面具账号，编辑资料为AI提供你的社交平台数据。<br>
          <strong>- 发布动态</strong>：右上角➕可发布带1-9张图的微博动态，或唤起系统相机发布日常瞬间。<br>
          <strong>- 切换栏</strong>：分类展示你发布的全部动态、视频、日常瞬间。<br>
          <br>
          <strong>3. 首页与发现</strong>
          <strong>- 顶部区域</strong>：点击头像快速发布动态，查看新通知，快速跳转角色主页。<br>
          <strong>- 生成帖子</strong>：右上角🔍模拟推荐机制一次性生成6-10条带有AI配图的图文帖子（含评论数据）。<br>
          <strong>- 正文互动</strong>：支持超话跳转，支持匿名/当前账号评论、@角色、发送表情包。支持点击触发自动推时生成新互动。<br>
          <strong>- 发现页</strong>：生成当前世界的热搜榜单，点击单条热搜查看详情页帖子。<br>
          <br>
          <strong>4. 消息与视频</strong>
          <strong>- 消息私聊</strong>：聊天记录按世界、面具隔离，不互相污染。可触发角色主动发消息，支持跨APP上下文互通。<br>
          <strong>- 视频刷流</strong>：模拟推流比例机制，根据标签随机抽取音乐库BGM。评论区支持匿名/回复/发表情，自动推时生成新互动。<br>
          <span style="font-size: 12px; color: #999;">机制注：刷新帖子后旧帖时间向后挪动，为省空间首页最多容纳40条。建议登录面具后绑定抽象表情包哦！</span>
        `},{title:"二、修复优化",content:`
          - [修复] 世界书APP左滑删除被遮挡、保存后分类归属丢失的问题。<br>
          - [修复] 情侣空间广场在只有一个角色时出现两个头像的问题。<br>
          - [优化] 微信聊天界面线下模式的卡顿问题。<br>
          - [修复] 表情包管理长按操作被部分浏览器原生功能截断的问题。<br>
          - [修复] 某些设备上，线下模式弹窗内容被截断的问题。<br>
          - [修复] 先行版角色相册的保存与发送功能。<br>
          - [修复] 角色动态中，通过URL上传的图片加载失败的问题。
        `}],footerText:"以上，大家检查是否还有这些BUG以及使用新功能是否正常！如有问题及时反馈到BUG收集清单！无论是有点卡顿延迟什么问题都可以上传！能优化的我后面都会找时间优化<br><br>顺便求一个功能反馈^ω^ 感谢大家陪开盖小手机一起成长"}],S={class:"update-log-body"},_={class:"log-content"},M={class:"log-date"},k={class:"log-detail-list"},L=["innerHTML"],O=["innerHTML"],N={class:"log-actions"},z={class:"checkbox-label"},D=["disabled"],R={__name:"UpdateLogModal",setup(V){const e=g(!1),a=g(!1),t=g(5);let s=null;const n=W(()=>T[0]),p=n.value.version;A(()=>{localStorage.getItem("hideUpdateLogVersion")!==p&&(e.value=!0,P())}),x(()=>{s&&clearInterval(s)});const P=()=>{s=setInterval(()=>{t.value>0?t.value--:clearInterval(s)},1e3)},i=()=>{t.value>0||(a.value&&localStorage.setItem("hideUpdateLogVersion",p),e.value=!1)};return(h,o)=>(l(),d(G,{visible:e.value,title:"FlipPhone更新日志",contentClass:"update-log-modal-content",showMask:!0,onClose:i},{default:I(()=>[r("div",S,[r("div",_,[r("p",M,f(n.value.date),1),r("div",k,[(l(!0),c(u,null,C(n.value.items,(b,y)=>(l(),c("div",{key:y,class:"log-item"},[r("strong",null,f(b.title),1),r("p",{innerHTML:b.content},null,8,L)]))),128))]),r("p",{class:"log-footer-text",innerHTML:n.value.footerText},null,8,O)]),r("div",N,[r("label",z,[U(r("input",{type:"checkbox","onUpdate:modelValue":o[0]||(o[0]=b=>a.value=b)},null,512),[[v,a.value]]),o[1]||(o[1]=r("span",{class:"checkmark"},null,-1)),o[2]||(o[2]=B(" 不再弹出 ",-1))]),r("button",{class:m(["confirm-btn",{"is-disabled":t.value>0}]),disabled:t.value>0,onClick:i}," 我已了解 "+f(t.value>0?`(${t.value}s)`:""),11,D)])])]),_:1},8,["visible"]))}},F=w(R,[["__scopeId","data-v-f1c80bc2"]]);export{F as default};
