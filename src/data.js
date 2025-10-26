// src/data.js
// 这就是我们全站的“单一数据源”！

// -----------------------------------------------------------------
// 1. 教育背景 (已加入华威大学课程)
// -----------------------------------------------------------------
export const educationData = [
 // ⬇️ (在 src/data.js 的 educationData 数组里)
    // ⬇️ 用这个新版本 替换掉 旧的 ntu 对象 ⬇️
    {
      id: 'ntu',
      school: '南洋理工大学',
      degree: '理学硕士',
      major: '项目管理',
      dates: '2025.08 - 目前',
      logoUrl: '/ntu.png',
      // !! 课程列表已根据你给的清单更新 !!
      courses: [
        { code: "MA6081", title: "Fundamentals of Project Management" },
        { code: "MA6082", title: "Management of Project Plan, Schedule and Resources" },
        { code: "MA6083", title: "Project Budget and Cost Management" },
        { code: "MA6084", title: "Procurement and Contract Management in Projects" },
        { code: "MA6085", title: "Organization Culture and Leadership in Projects" },
        { code: "MA6086", title: "Systems Engineering Fundamentals" },
        { code: "MA6087", title: "Project Strategy, Risk and Quality Management" },
        { code: "MA6088", title: "Research Project Management" },
        { code: "MA6089", title: "International Project Management" },
        { code: "PE6002", title: "Economic Analysis of Engineering Projects" },
        // (你可以自行增删上面的选修课，只保留你最终上过的)
      ]
    },
  {
    id: 'warwick',
    school: '华威大学',
    degree: '理学学士 (荣誉)', // [cite: 49]
    major: '计算机科学与商业研究', // [cite: 49]
    dates: '2022.09 - 2025.06', // [cite: 116, 117]
    logoUrl: '/warwick.png',
    // !! 我已根据你的 PDF 帮你提取了所有课程 !!
    courses: [
      { code: "CS118-15", title: "Programming for Computer Scientists", mark: "47" }, // [cite: 115]
      { code: "CS126-15", title: "Design of Information Structures", mark: "54" }, // [cite: 115]
      { code: "CS130-15", title: "Mathematics for Computer Scientists 1", mark: "42" }, // [cite: 115]
      { code: "CS131-15", title: "Mathematics for Computer Scientists 2", mark: "40" }, // [cite: 115]
      { code: "CS132-15", title: "Computer Organisation & Architecture", mark: "47" }, // [cite: 115]
      { code: "CS133-15", title: "Professional Skills", mark: "56" }, // [cite: 115]
      { code: "CS241-15", title: "Operating Systems and Computer Networks", mark: "42" }, // [cite: 121]
      { code: "CS258-15", title: "Database Systems", mark: "49" }, // [cite: 121]
      { code: "CS259-15", title: "Formal Languages", mark: "57" }, // [cite: 121]
      { code: "CS260-15", title: "Algorithms", mark: "40" }, // [cite: 121]
      { code: "CS261-15", title: "Software Engineering", mark: "50" }, // [cite: 121]
      { code: "CS262-15", title: "Logic and Verification", mark: "65" }, // [cite: 121]
      { code: "IB2B4-15", title: "Digital Business", mark: "67" }, // [cite: 121]
      { code: "IB2C4-15", title: "Managing Human Resources", mark: "51" }, // [cite: 121]
      { code: "IB2D3-15", title: "Accounting in Practice", mark: "75" }, // [cite: 123]
      { code: "IB395-15", title: "Finance in New Ventures", mark: "64" }, // [cite: 123]
      { code: "IB396-15", title: "Financial Statement Analysis and Security Valuation", mark: "58" }, // [cite: 126]
      { code: "IB3D8-15", title: "Corporate Strategy", mark: "65" }, // [cite: 126]
      { code: "IB3H5-15", title: "Images of Creativity", mark: "69" }, // [cite: 126]
      { code: "IB3K7-15", title: "Financial Markets: Organisations and Technology", mark: "71" }, // [cite: 126]
      { code: "IB3M8-15", title: "Accounting for Sustainability, People, Planet", mark: "67" }, // [cite: 126]
      { code: "IB3N9-15", title: "Managing People in a Complex World", mark: "66" }, // [cite: 126]
    ]
  }
];

// -----------------------------------------------------------------
// 2. 个人能力 (从你的简历提取)
// -----------------------------------------------------------------
export const skillsData = [
  { name: '办公软件', description: '熟练使用 Microsoft Word / Excel / PowerPoint' },
  { name: '后端技术', description: '熟练使用 Java 与 MySQL，具备面向对象编程与数据库设计能力' },
  { name: '前端技术', description: '熟悉基础网页开发 (HTML/CSS) 与版本管理工具 Git' },
  { name: '语言能力', description: '英语流利，具备较强的英文阅读与写作能力' },
  { name: '个人特长', description: '萨克斯八级水平' },
  { name: '其他', description: '机动车驾驶证' },
];

// -----------------------------------------------------------------
// 3. 项目经验 (从你的简历提取)
// -----------------------------------------------------------------
export const allProjects = [
    {
        title: '运营管理部经理助理',
        subtitle: '安徽省中奥重工机械有限公司',
        description: '协助公司从B2B模式向线上线下融合转型，参与官网与1688平台建设、品牌推广及数据化运营。',
        tags: [
            { name: 'B2B转型', class: 'tag-blue' },
            { name: '官网建设', class: 'tag-green' },
            { name: '数据化运营', class: 'tag-purple' }
        ],
        category: '运营管理' 
    },
    {
        title: '项目助理',
        subtitle: '中国农业银行江宁支行',
        description: '负责客户接待与业务引导，协助办理基础银行业务并推广数字化金融产品。',
        tags: [
            { name: '客户接待', class: 'tag-green' },
            { name: '数字化金融', class: 'tag-orange' }
        ],
        category: '金融服务'
    },
    {
        title: '四旋翼无人机研究项目',
        subtitle: '上海无人机研究项目',
        description: '组装并测试可正常运行的无人机，协助排查性能，并负责视频剪辑与项目展示。',
        tags: [
            { name: '硬件组装', class: 'tag-purple' },
            { name: '性能测试', class: 'tag-blue' },
            { name: '视频剪辑', class: 'tag-green' }
        ],
        category: '技术研究'
    }
];