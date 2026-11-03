// ======================================================================
//  홈페이지 내용과 설정은 이 파일 하나만 고치면 됩니다. (메모장으로 열기)
//  - 따옴표 " " 안의 글자만 바꾸고, 쉼표 , 와 괄호 { } [ ] 는 그대로 두세요.
//  - 언어별 칸: ko 한국어, en 영어, ja 일본어, zhHans 중국어(간체), zhHant 중국어(번체)
//    비워 두면("") 영어 → 한국어 순서로 대신 보여 줍니다.
//  - 목록 항목을 늘리려면 { ... }, 한 덩어리를 통째로 복사해 바로 아래에 붙이세요.
//  - 고칠 파일은 두 개뿐입니다: 이 파일(소개·이력·논문·칼럼·메뉴·색), posts.js(Others 글).
//    사진은 photo.jpg, CV는 cv.pdf 파일을 같은 이름으로 바꿔 넣으면 됩니다.
//  - 고친 뒤 index.html 을 더블클릭하면 바로 확인할 수 있습니다. 화면이 하얗게 나오면 방금 고친 줄의
//    따옴표나 쉼표가 빠진 것입니다.
// ======================================================================
var SITE = {

  // ---------- 색 설정 (소속이 바뀌면 여기만 바꾸면 됩니다) ----------
  // 예) 예일 파랑 "#00356b", 고려대 크림슨 "#8b0029", 검정 "#222222"
  colors: {
    link:     "#00356b",   // 링크 색
    menuBg:   "#222222",   // 왼쪽 메뉴 바탕색
    menuText: "#bbbbbb",   // 메뉴 글자색
    menuActive: "#ffffff"  // 지금 보고 있는 메뉴 글자색
  },

  // ---------- 이름·사진·연락처 ----------
  name:   { ko: "임인영", en: "In Young Lim", ja: "イム・インヨン", zhHans: "In Young Lim", zhHant: "In Young Lim" },  // 한자 이름이 있으면 ja·zh 칸에 넣으세요
  nameEn: "In Young Lim",
  hanja:  "",              // 한자 이름을 넣으면 한국어 화면 이름 옆에 (한자)로 나옵니다
  photo:  "photo.jpg",     // 같은 폴더의 사진 파일 이름
  // 이름 아래 링크 한 줄 (순서대로 " · "로 이어서 나옵니다. 지우거나 추가하면 그대로 반영됩니다)
  //  CV는 같은 폴더에 cv.pdf 파일을 넣으면 됩니다. 이메일을 다시 넣고 싶으면 예: { label: "Email", url: "mailto:주소" }
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/inyounglim/" },
    { label: "CV",       url: "cv.pdf" }
  ],

  // 이름 아래 직함 (한 줄에 하나)
  roles: {
    ko: ["변호사, 법무법인(유한) 율촌", "고려대학교 대학원 법학과 박사과정(노동법)", "Yale School of Public Health"],
    en: ["Attorney, Yulchon LLC", "Ph.D. Candidate in Labor Law, Korea University", "Yale School of Public Health"],
    ja: ["弁護士、法務法人(有限)律村", "高麗大学大学院 法学科 博士課程(労働法)", "Yale School of Public Health"],
    zhHans: ["律师，法务法人（有限）律村", "高丽大学研究生院法学系博士生（劳动法）", "Yale School of Public Health"],
    zhHant: ["律師，法務法人（有限）律村", "高麗大學研究所法學系博士生（勞動法）", "Yale School of Public Health"]
  },

  // ---------- 언어 메뉴 (메뉴 맨 아래에 나옵니다. 지우면 그 언어가 사라집니다) ----------
  //  sub: 괄호 안에 함께 나오는 하위 선택 → 中文(简体 · 繁體). 하위 항목을 지우면 그 글자만 사라집니다.
  languages: [
    { code: "ko",     label: "한국어" },
    { code: "en",     label: "English" },
    { code: "ja",     label: "日本語" },
    { label: "中文", sub: [
        { code: "zhHans", label: "简体" },
        { code: "zhHant", label: "繁體" }
    ] }
  ],

  // ---------- 메뉴 (자유롭게 추가·삭제·순서 변경) ----------
  //  id: 주소에 쓰이는 영문 이름 (index.html?p=id). 첫 번째 메뉴가 첫 화면입니다.
  //  type: "home"(첫 화면) / "list"(목록) / "posts"(블로그형 글, 글은 posts.js 에 씁니다) / "text"(글)
  menu: [
    { id: "home",    type: "home", label: { ko: "Home", en: "Home", ja: "ホーム", zhHans: "首页", zhHant: "首頁" } },
    { id: "papers",  type: "list", label: { ko: "Publications", en: "Publications", ja: "論文", zhHans: "论文", zhHant: "論文" } },
    { id: "columns", type: "list", label: { ko: "Columns", en: "Columns", ja: "コラム", zhHans: "专栏", zhHant: "專欄" } },
    { id: "others",  type: "posts", label: { ko: "Others", en: "Others", ja: "その他", zhHans: "其他", zhHant: "其他" } }
  ],

  // ---------- 첫 화면 소개 ----------
  intro: {
    ko: "노동 사건을 주로 다루는 변호사입니다. 법무법인(유한) 율촌 노동팀에서 일하고 있으며, 고려대학교 대학원에서 노동법 박사과정을 밟고 Yale School of Public Health에서 공부하고 있습니다.",
    en: "I am a labor lawyer at Yulchon LLC in Seoul. I am also a Ph.D. candidate in labor law at Korea University and a student at the Yale School of Public Health.",
    ja: "主に労働事件を扱う弁護士です。法務法人(有限)律村の労働チームに所属し、高麗大学大学院で労働法の博士課程に在籍するとともに、Yale School of Public Healthで学んでいます。",
    zhHans: "主要从事劳动案件的律师。现就职于法务法人（有限）律村劳动团队，同时在高丽大学研究生院攻读劳动法博士，并在耶鲁大学公共卫生学院学习。",
    zhHant: "主要從事勞動案件的律師。現任職於法務法人（有限）律村勞動團隊，同時在高麗大學研究所攻讀勞動法博士，並在耶魯大學公共衛生學院學習。"
  },

  // 첫 화면 소개 아래 이력. { heading: ... } 줄은 소제목입니다. 비워 두면 안 나옵니다.
  history: {
    title: "",   // 위에 큰 제목을 따로 두려면 예: { ko: "이력", en: "Background" }
    items: [
      { heading: { ko: "경력", en: "Experience", ja: "職歴", zhHans: "工作经历", zhHant: "工作經歷" } },
      { ko: "2024–현재 법무법인(유한) 율촌 변호사", en: "2024–present Attorney, Yulchon LLC", ja: "2024–現在 弁護士、法務法人(有限)律村", zhHans: "2024–至今 律师，法务法人（有限）律村", zhHant: "2024–至今 律師，法務法人（有限）律村" },
      { ko: "2026–현재 한양사이버대학교 법ㆍ공무행정학과 겸임교수(노동법)", en: "2026–present Adjunct Professor of Labor Law, Hanyang Cyber University", ja: "2026–現在 漢陽サイバー大学 法・公務行政学科 兼任教授(労働法)", zhHans: "2026–至今 汉阳网络大学法律·公务行政系兼职教授（劳动法）", zhHant: "2026–至今 漢陽網路大學法律·公務行政系兼任教授（勞動法）" },
      { ko: "2024–현재 인사혁신처 정책자문위원회(재해보상분과) 위원", en: "2024–present Member, Policy Advisory Committee (Accident Compensation Subcommittee), Ministry of Personnel Management", ja: "2024–現在 人事革新処 政策諮問委員会(災害補償分科)委員", zhHans: "2024–至今 人事革新处政策咨询委员会（灾害补偿分会）委员", zhHant: "2024–至今 人事革新處政策諮詢委員會（災害補償分會）委員" },
      { ko: "2024–2025 보건복지부 2030 자문단", en: "2024–2025 2030 Advisory Committee, Ministry of Health and Welfare", ja: "2024–2025 保健福祉部 2030諮問団", zhHans: "2024–2025 保健福利部2030咨询团", zhHant: "2024–2025 保健福利部2030諮詢團" },
      { ko: "2022–2024 고용노동부 2030 자문단", en: "2022–2024 2030 Advisory Committee, Ministry of Employment and Labor", ja: "2022–2024 雇用労働部 2030諮問団", zhHans: "2022–2024 雇佣劳动部2030咨询团", zhHant: "2022–2024 僱傭勞動部2030諮詢團" },
      { ko: "2021–2024 법무법인(유한) 지평 변호사", en: "2021–2024 Attorney, Jipyong LLC", ja: "2021–2024 弁護士、法務法人(有限)地平", zhHans: "2021–2024 律师，法务法人（有限）地平", zhHant: "2021–2024 律師，法務法人（有限）地平" },
      { ko: "2020–2021 법무법인 케이씨엘 변호사", en: "2020–2021 Attorney, Kim, Choi & Lim", ja: "2020–2021 弁護士、法務法人KCL", zhHans: "2020–2021 律师，法务法人KCL", zhHant: "2020–2021 律師，法務法人KCL" },
      { heading: { ko: "학력", en: "Education", ja: "学歴", zhHans: "教育背景", zhHant: "教育背景" } },
      { ko: "2026–현재 Yale School of Public Health(Occupational and Environmental Medicine)", en: "2026–present Yale School of Public Health (Occupational and Environmental Medicine)", ja: "2026–現在 Yale School of Public Health(Occupational and Environmental Medicine)", zhHans: "2026–至今 Yale School of Public Health（Occupational and Environmental Medicine）", zhHant: "2026–至今 Yale School of Public Health（Occupational and Environmental Medicine）" },
      { ko: "2021–현재 고려대학교 일반대학원 법학과 박사과정(노동법)", en: "2021–present Ph.D. Program in Labor Law, Korea University", ja: "2021–現在 高麗大学 一般大学院 法学科 博士課程(労働法)", zhHans: "2021–至今 高丽大学研究生院法学系博士课程（劳动法）", zhHant: "2021–至今 高麗大學研究所法學系博士班（勞動法）" },
      { ko: "2025 고려사이버대학교 소방안전학부ㆍ보건의료학부 졸업", en: "2025 B.E. Fire Protection and Safety Engineering & B.S. Health Care Science, Korea Cyber University", ja: "2025 高麗サイバー大学 消防安全学部・保健医療学部 卒業", zhHans: "2025 高丽网络大学消防安全学部·保健医疗学部毕业", zhHant: "2025 高麗網路大學消防安全學部·保健醫療學部畢業" },
      { ko: "2020 고려대학교 법학전문대학원 법학전문석사", en: "2020 J.D., Korea University School of Law", ja: "2020 高麗大学 法学専門大学院 法学専門修士(J.D.)", zhHans: "2020 高丽大学法学专门研究生院 法学专门硕士（J.D.）", zhHant: "2020 高麗大學法學專門研究所 法學專門碩士（J.D.）" },
      { ko: "2016 서울대학교 사회과학대학 경제학부 학사", en: "2016 B.A. in Economics, Seoul National University", ja: "2016 ソウル大学 社会科学大学 経済学部 学士", zhHans: "2016 首尔大学社会科学学院经济学系 学士", zhHant: "2016 首爾大學社會科學學院經濟學系 學士" },
      { heading: { ko: "자격", en: "Licenses", ja: "資格", zhHans: "资格", zhHant: "資格" } },
      { ko: "2020 변호사", en: "2020 Attorney at Law, Korea", ja: "2020 弁護士(韓国)", zhHans: "2020 律师（韩国）", zhHant: "2020 律師（韓國）" },
      { ko: "2017 공인노무사", en: "2017 Certified Public Labor Attorney, Korea", ja: "2017 公認労務士(韓国)", zhHans: "2017 公认劳务师（韩国）", zhHant: "2017 公認勞務師（韓國）" },
      { heading: { ko: "수상", en: "Awards", ja: "受賞", zhHans: "获奖", zhHant: "獲獎" } },
      { ko: "2025 법무법인(유한) 율촌 공익기여상", en: "2025 Yulchon Public Interest Contribution Award", ja: "2025 法務法人(有限)律村 公益貢献賞", zhHans: "2025 法务法人（有限）律村 公益贡献奖", zhHant: "2025 法務法人（有限）律村 公益貢獻獎" },
      { ko: "2018 제4회 노동법 모의법정 경연대회 우승(국회의장상)", en: "2018 First Place, Labor Law Moot Court Competition (National Assembly Speaker’s Award)", ja: "2018 第4回 労働法模擬法廷コンテスト 優勝(国会議長賞)", zhHans: "2018 第4届劳动法模拟法庭竞赛 冠军（国会议长奖）", zhHant: "2018 第4屆勞動法模擬法庭競賽 冠軍（國會議長獎）" }
    ]
  },

  // ---------- 목록 페이지 내용 (menu의 id와 같은 이름) ----------
  //  date: 날짜, title: 제목, url: 링크(없으면 ""), note: 뒤에 붙는 설명
  //  title·note 는 언어마다 칸이 있습니다(ko, en, ja, zhHans, zhHant). 비운 언어는 영어 → 한국어로 대신 나옵니다.
  //  { heading: {...} } 한 줄을 넣으면 그 자리에 소제목이 생깁니다.
  lists: {
    papers: [
      { heading: { ko: "논문", en: "Articles", ja: "論文", zhHans: "论文", zhHant: "論文" } },
      { date: "2025. 5.",
        title: { ko: "노동조합법 개정안이 정치파업의 정당성에 미치는 영향: 소위 ‘노란봉투법’을 중심으로", en: "Legitimacy of Political Strikes under the Proposed Amendment to the Trade Union and Labor Relations Adjustment Act: A Focus on the ‘Yellow Envelope Bill’", ja: "労働組合法改正案が政治ストライキの正当性に及ぼす影響：いわゆる「黄色い封筒法」を中心に", zhHans: "工会法修正案对政治罢工正当性的影响——以所谓“黄色信封法”为中心", zhHant: "工會法修正案對政治罷工正當性的影響——以所謂「黃色信封法」為中心" },
        url: "https://doi.org/10.33982/clr.2025.5.31.2.255",
        note: { ko: "조현우·임인영, 『법학연구』(충남대학교 법학연구소) 제36권 제2호, 255–296면", en: "Cho, H. & Lim, I.Y., Chungnam Law Review, Vol. 36, No. 2, pp. 255–296", ja: "チョ・ヒョンウ、イム・インヨン、『法学研究』(忠南大学校法学研究所) 第36巻第2号、255–296頁", zhHans: "Cho, H.、Lim, I.Y.，《法学研究》（忠南大学法学研究所）第36卷第2期，第255–296页", zhHant: "Cho, H.、Lim, I.Y.，《法學研究》（忠南大學法學研究所）第36卷第2期，第255–296頁" } },
      { date: "2025. 3.",
        title: { ko: "죄형법정주의와 해석의 한계: 근로기준법 제95조 감급제재 제한 규정의 목적론적 해석 허용 여부", en: "The Limits of Interpretation under the Principle of Nulla Poena Sine Lege: On the Permissibility of Teleological Interpretation of Article 95 of the Labor Standards Act Regarding Punitive Wage Cuts", ja: "罪刑法定主義と解釈の限界：勤労基準法第95条の減給制裁制限規定に対する目的論的解釈の許容性", zhHans: "罪刑法定主义与解释的界限：《劳动基准法》第95条减薪制裁限制规定的目的论解释是否允许", zhHant: "罪刑法定主義與解釋的界限：《勞動基準法》第95條減薪制裁限制規定的目的論解釋是否允許" },
        url: "https://doi.org/10.22397/wlri.2024.41.1.65",
        note: { ko: "김은열·임인영, 『원광법학』(원광대학교 법학연구소) 제41권 제1호, 65–86면", en: "Kim, E. & Lim, I.Y., Wonkwang Law Review, Vol. 41, No. 1, pp. 65–86", ja: "キム・ウンヨル、イム・インヨン、『圓光法学』(圓光大学校法学研究所) 第41巻第1号、65–86頁", zhHans: "Kim, E.、Lim, I.Y.，《圆光法学》（圆光大学法学研究所）第41卷第1期，第65–86页", zhHant: "Kim, E.、Lim, I.Y.，《圓光法學》（圓光大學法學研究所）第41卷第1期，第65–86頁" } },
      { date: "2022. 1.",
        title: { ko: "업무상과실치사상죄의 ‘업무상주의의무’ 판단 경향의 검토: 산업재해 영역에서 산업안전보건법과의 관계를 중심으로", en: "A Review of the Evaluation Criteria for Occupational Due Diligence in Death and Injury by Occupational Negligence", ja: "業務上過失致死傷罪における「業務上注意義務」の判断傾向の検討：産業災害領域における産業安全保健法との関係を中心に", zhHans: "业务上过失致死伤罪中“业务上注意义务”判断倾向之检讨——以工伤领域与《产业安全保健法》的关系为中心", zhHant: "業務上過失致死傷罪中「業務上注意義務」判斷傾向之檢討——以職災領域與《產業安全保健法》的關係為中心" },
        url: "https://kiss.kstudy.com/Detail/Ar?key=4144084",
        note: { ko: "김은열·임인영, 『변호사』(서울지방변호사회) 제54집, 179면 이하", en: "Kim, E. & Lim, I.Y., The Lawyers (Seoul Bar Association), Vol. 54, p. 179", ja: "キム・ウンヨル、イム・インヨン、『弁護士』(ソウル地方弁護士会) 第54輯、179頁以下", zhHans: "Kim, E.、Lim, I.Y.，《律师》（首尔地方律师协会）第54辑，第179页起", zhHant: "Kim, E.、Lim, I.Y.，《律師》（首爾地方律師協會）第54輯，第179頁起" } },

      { heading: { ko: "공저서", en: "Books (co-authored)", ja: "共著", zhHans: "合著", zhHant: "合著" } },
      { date: "2026. 3.",
        title: { ko: "율촌 노동팀이 해설하는 2025년 주요 노동판례", en: "Major Labor Cases of 2025, Explained by Yulchon’s Labor Team", ja: "律村労働チームが解説する2025年主要労働判例", zhHans: "律村劳动团队解读2025年主要劳动判例", zhHant: "律村勞動團隊解讀2025年主要勞動判例" },
        url: "https://product.kyobobook.co.kr/detail/S000219498041",
        note: { ko: "법무법인(유한) 율촌 노동팀, 법률신문사", en: "Yulchon Labor Team, Law Times", ja: "法務法人(有限)律村 労働チーム、法律新聞社", zhHans: "法务法人（有限）律村劳动团队，法律新闻社", zhHant: "法務法人（有限）律村勞動團隊，法律新聞社" } },
      { date: "2025. 2.",
        title: { ko: "율촌 노동팀이 해설하는 2024년 주요 노동판례", en: "Major Labor Cases of 2024, Explained by Yulchon’s Labor Team", ja: "律村労働チームが解説する2024年主要労働判例", zhHans: "律村劳动团队解读2024年主要劳动判例", zhHant: "律村勞動團隊解讀2024年主要勞動判例" },
        url: "https://product.kyobobook.co.kr/detail/S000215964613",
        note: { ko: "법무법인(유한) 율촌 노동팀, 법률신문사", en: "Yulchon Labor Team, Law Times", ja: "法務法人(有限)律村 労働チーム、法律新聞社", zhHans: "法务法人（有限）律村劳动团队，法律新闻社", zhHant: "法務法人（有限）律村勞動團隊，法律新聞社" } },
      { date: "2025. 4.",
        title: { ko: "중대재해처벌법: 전문가들이 풀어내는 법과 안전이야기", en: "The Serious Accidents Punishment Act: Law and Safety Stories from Experts", ja: "重大災害処罰法：専門家が語る法と安全の話", zhHans: "重大灾害处罚法：专家讲述的法律与安全故事", zhHant: "重大災害處罰法：專家講述的法律與安全故事" },
        url: "https://www.safetynews.co.kr/news/articleView.html?idxno=237891",
        note: { ko: "법무법인(유한) 율촌 중대재해센터, 안전신문사", en: "Yulchon Serious Accidents Center, Safety News", ja: "法務法人(有限)律村 重大災害センター、安全新聞社", zhHans: "法务法人（有限）律村重大灾害中心，安全新闻社", zhHant: "法務法人（有限）律村重大災害中心，安全新聞社" } },
      { date: "2024. 7.",
        title: { ko: "중대재해법 한 권으로 끝내기", en: "The Serious Accidents Act in One Book", ja: "重大災害法を一冊で", zhHans: "一本书读懂重大灾害法", zhHant: "一本書讀懂重大災害法" },
        url: "https://product.kyobobook.co.kr/detail/S000213745594",
        note: { ko: "법무법인 율촌 중대재해센터, 매일경제신문사", en: "Yulchon Serious Accidents Center, Maeil Business", ja: "法務法人律村 重大災害センター、毎日経済新聞社", zhHans: "法务法人律村重大灾害中心，每日经济新闻社", zhHant: "法務法人律村重大災害中心，每日經濟新聞社" } }
    ],

    // 칼럼: 제목을 누르면 처음 실린 매체로 연결됩니다.
    //  note 에 "etoday"·"safety"·"worklaw" 처럼 이름표를 쓰면 맨 아래 OUT 칸의 게재처 이름이 언어별로 나옵니다.
    columns: [
      { date: "2026. 5.", title: { ko: "일하는 사람 기본법 입법안 안전보건 관련 조항 비교", en: "Comparing the Safety and Health Provisions in the Bills for a Basic Act on Working People", ja: "「働く人基本法」立法案における安全衛生関連条項の比較", zhHans: "《工作者基本法》立法草案中安全卫生相关条款比较", zhHant: "《工作者基本法》立法草案中安全衛生相關條款比較" }, url: "https://www.safetynews.co.kr/news/articleView.html?idxno=248567", note: "safety" },
      { date: "2026. 5.", title: { ko: "“비정규직은 다르다” 인식 바꿀 때 됐다", en: "Time to Drop the Idea That “Non-Regular Workers Are Different”", ja: "「非正規職は違う」という認識を改める時だ", zhHans: "是时候改变“非正式员工不一样”的观念了", zhHant: "是時候改變「非正式員工不一樣」的觀念了" }, url: "https://www.etoday.co.kr/news/view/2582517", note: "etoday" },
      { date: "2026. 5.", title: { ko: "근로자 추정제로 바뀔 근로자성 분쟁의 구조와 대응 방안", en: "How the Presumption of Employee Status Will Reshape Worker-Status Disputes, and How to Respond", ja: "労働者推定制度によって変わる労働者性紛争の構造と対応策", zhHans: "劳动者推定制度将如何改变劳动者身份纠纷的结构及应对方案", zhHant: "勞動者推定制度將如何改變勞動者身分糾紛的結構及應對方案" }, url: "https://www.worklaw.co.kr/main2022/view/view.asp?bi_pidx=39123", note: "worklaw" },
      { date: "2026. 4.", title: { ko: "‘근로자추정제’ 증명 책임자가 바뀐다", en: "The Presumption of Employee Status Shifts the Burden of Proof", ja: "「労働者推定制」で証明責任を負う者が変わる", zhHans: "“劳动者推定制”改变举证责任主体", zhHant: "「勞動者推定制」改變舉證責任主體" }, url: "https://www.etoday.co.kr/news/view/2572304", note: "etoday" },
      { date: "2026. 3.", title: { ko: "성과급이 ‘근로의 대가’ 아닌 이유", en: "Why Performance Bonuses Are Not “Remuneration for Work”", ja: "成果給が「労働の対価」ではない理由", zhHans: "绩效奖金为何不是“劳动对价”", zhHant: "績效獎金為何不是「勞動對價」" }, url: "https://www.etoday.co.kr/news/view/2562408", note: "etoday" },
      { date: "2026. 1.", title: { ko: "노조 시선 ‘로봇이 들어온 뒤’에 두길", en: "Unions Should Look to “After the Robots Arrive”", ja: "労組は「ロボット導入後」に目を向けよ", zhHans: "工会应把目光放在“机器人进入之后”", zhHant: "工會應把目光放在「機器人進入之後」" }, url: "https://www.etoday.co.kr/news/view/2551096", note: "etoday" },
      { date: "2025. 12.", title: { ko: "근로시간 기록 의무화, 피할 수 없다", en: "Mandatory Working-Hours Records Are Unavoidable", ja: "労働時間記録の義務化は避けられない", zhHans: "工时记录义务化不可避免", zhHant: "工時記錄義務化不可避免" }, url: "https://www.etoday.co.kr/news/view/2539733", note: "etoday" },
      { date: "2025. 12.", title: { ko: "연구실 안전관리, 관행을 넘어 법적 책임의 영역으로", en: "Laboratory Safety: From Custom to Legal Liability", ja: "研究室の安全管理、慣行から法的責任の領域へ", zhHans: "实验室安全管理：从惯例走向法律责任", zhHant: "實驗室安全管理：從慣例走向法律責任" }, url: "https://www.safetynews.co.kr/news/articleView.html?idxno=244713", note: "safety" },
      { date: "2025. 11.", title: { ko: "‘교섭창구 단일화’ 흔드는 노란봉투법", en: "The Yellow Envelope Act Shakes the Single Bargaining Channel System", ja: "「交渉窓口単一化」を揺るがす黄色い封筒法", zhHans: "动摇“交涉窗口单一化”的黄色信封法", zhHant: "動搖「交涉窗口單一化」的黃色信封法" }, url: "https://www.etoday.co.kr/news/view/2530445", note: "etoday" },
      { date: "2025. 10.", title: { ko: "낙장불입(落張不入), 낙직불입(落職不入)", en: "No Taking Back a Played Card, No Taking Back a Resignation", ja: "落張不入、落職不入", zhHans: "落张不入，落职不入", zhHant: "落張不入，落職不入" }, url: "https://www.etoday.co.kr/news/view/2520511", note: "etoday" },
      { date: "2025. 9.", title: { ko: "계약서 위의 사장, 매장 안의 근로자", en: "A Boss on Paper, a Worker in the Store", ja: "契約書の上では社長、店舗の中では労働者", zhHans: "合同上的老板，店里的劳动者", zhHant: "合約上的老闆，店裡的勞動者" }, url: "https://www.etoday.co.kr/news/view/2509990", note: "etoday" },
      { date: "2025. 9.", title: { ko: "농촌 외국인 근로자 산업재해의 법적 공백", en: "The Legal Gap in Industrial Accident Protection for Migrant Farmworkers", ja: "農村の外国人労働者の労働災害をめぐる法の空白", zhHans: "农村外籍劳动者工伤的法律空白", zhHant: "農村外籍勞動者職災的法律空白" }, url: "https://www.safetynews.co.kr/news/articleView.html?idxno=242112", note: "safety" },
      { date: "2025. 8.", title: { ko: "노란봉투법이 불러온 ‘해석의 전쟁터’", en: "The “Battlefield of Interpretation” Created by the Yellow Envelope Act", ja: "黄色い封筒法がもたらした「解釈の戦場」", zhHans: "黄色信封法带来的“解释战场”", zhHant: "黃色信封法帶來的「解釋戰場」" }, url: "https://www.etoday.co.kr/news/view/2497975", note: "etoday" },
      { date: "2025. 6.", title: { ko: "노란봉투법, ‘결정’이란 단어 하나의 무게", en: "The Yellow Envelope Act and the Weight of One Word: “Determination”", ja: "黄色い封筒法、「決定」という一語の重み", zhHans: "黄色信封法：“决定”一词的分量", zhHant: "黃色信封法：「決定」一詞的分量" }, url: "https://www.etoday.co.kr/news/view/2481397", note: "etoday" },
      { date: "2025. 4.", title: { ko: "정년연장, 서둘기 전에 물어야 할 것들", en: "Questions to Ask Before Rushing to Extend the Retirement Age", ja: "定年延長、急ぐ前に問うべきこと", zhHans: "延长退休年龄之前应先追问的问题", zhHant: "延長退休年齡之前應先追問的問題" }, url: "https://www.etoday.co.kr/news/view/2463645", note: "etoday" },
      { date: "2025. 2.", title: { ko: "안전보건관리체계 구축 및 이행의무, 어떻게 해석할 것인가", en: "How to Interpret the Duty to Establish and Implement a Safety and Health Management System", ja: "安全衛生管理体系の構築・履行義務をどう解釈するか", zhHans: "如何解释安全卫生管理体系的建立及履行义务", zhHant: "如何解釋安全衛生管理體系的建立及履行義務" }, url: "https://www.safetynews.co.kr/news/articleView.html?idxno=235565", note: "safety" },
      { date: "2025. 2.", title: { ko: "복지포인트의 역설 ‘임금 vs 근로소득’", en: "The Paradox of Welfare Points: Wages vs. Earned Income", ja: "福利ポイントの逆説「賃金 vs 勤労所得」", zhHans: "福利积分的悖论：“工资 vs 劳动所得”", zhHant: "福利點數的悖論：「工資 vs 勞動所得」" }, url: "https://www.etoday.co.kr/news/view/2443594", note: "etoday" },
      { date: "2024. 9.", title: { ko: "중대재해처벌법, 글로벌 흐름과 엇박자?", en: "Is the Serious Accidents Punishment Act Out of Step with Global Trends?", ja: "重大災害処罰法は世界の流れと食い違うのか", zhHans: "《重大灾害处罚法》与全球趋势背道而驰？", zhHant: "《重大災害處罰法》與全球趨勢背道而馳？" }, url: "https://www.safetynews.co.kr/news/articleView.html?idxno=232390", note: "safety" },
      { date: "2024. 8.", title: { ko: "노란봉투법의 핵심, ‘실질적 지배력’의 현재와 미래", en: "The Core of the Yellow Envelope Act: “Substantial Control,” Present and Future", ja: "黄色い封筒法の核心、「実質的支配力」の現在と未来", zhHans: "黄色信封法的核心：“实质支配力”的现在与未来", zhHant: "黃色信封法的核心：「實質支配力」的現在與未來" }, url: "https://www.worklaw.co.kr/main2022/view/view.asp?bi_pidx=36972", note: "worklaw" },
      { date: "2024. 6.", title: { ko: "관리감독자 제도의 현재와 제언", en: "The Supervisor System under the OSH Act: Where It Stands and What to Do", ja: "管理監督者制度の現状と提言", zhHans: "管理监督者制度的现状与建议", zhHant: "管理監督者制度的現狀與建議" }, url: "https://www.safetynews.co.kr/news/articleView.html?idxno=230544", note: "safety" },
      { date: "2023. 5.", title: { ko: "경영책임자의 안전 및 보건 확보의무 위반과 중대산업재해 사이의 인과관계 문제", en: "Causation Between a Responsible Managing Officer’s Breach of Safety and Health Duties and a Serious Industrial Accident", ja: "経営責任者の安全・衛生確保義務違反と重大産業災害との因果関係の問題", zhHans: "经营责任人违反安全卫生保障义务与重大产业灾害之间的因果关系问题", zhHant: "經營責任人違反安全衛生保障義務與重大產業災害之間的因果關係問題" }, url: "https://www.lawtimes.co.kr/news/articleView.html?idxno=187955", note: { ko: "법률신문(이정훈 공저)", en: "Law Times (with Jeong Hoon Lee)", ja: "法律新聞(Jeong Hoon Leeとの共著)", zhHans: "法律新闻（与Jeong Hoon Lee合著）", zhHant: "法律新聞（與Jeong Hoon Lee合著）" } },
      { date: "2023. 4.", title: "Recent Health and Safety Regulatory Updates from South Korea: Across the Divide of Punishment and Prevention", url: "https://www.lexology.com/library/detail.aspx?g=ea947502-f35e-41f8-af17-1748ed13d3f5", note: { ko: "Lexology(민창욱·정현찬 공저)", en: "Lexology (with Chang Wook Min & Hyun Chan Jung)", ja: "Lexology(Chang Wook Min、Hyun Chan Jungとの共著)", zhHans: "Lexology（与Chang Wook Min、Hyun Chan Jung合著）", zhHant: "Lexology（與Chang Wook Min、Hyun Chan Jung合著）" } }
    ],
    others: []
  },

  // 칼럼 게재처 이름표 (칼럼 note 에 이름표를 쓰면 여기 이름이 언어별로 나옵니다)
  OUT: {
    etoday:  { ko: "이투데이", en: "Etoday", ja: "Etoday", zhHans: "Etoday", zhHant: "Etoday" },
    safety:  { ko: "안전신문", en: "Safety News", ja: "安全新聞", zhHans: "安全新闻", zhHant: "安全新聞" },
    worklaw: { ko: "월간 노동법률", en: "Monthly Labor Law", ja: "月刊労働法律", zhHans: "月刊劳动法律", zhHant: "月刊勞動法律" }
  },

  // Others 글 화면의 '목록으로' 글자
  backLabel: { ko: "목록으로", en: "All posts", ja: "一覧へ", zhHans: "返回列表", zhHant: "返回列表" }
};
