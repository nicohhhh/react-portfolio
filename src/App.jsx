// src/App.jsx (最终交互版本)
import Education from './Education.jsx'
// !! 1. 导入 { useState }
import React, { useState } from 'react'

// (我们的“数据库”保持不变)
const allProjects = [
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
        description: '负责客户接待与业务引导，协助办理基础银业务并推广数字化金融产品。',
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


function App() {

  // !! 2. 创建一个“状态”来“记住”当前选中的分类
  // 它的“初始值”是 '全部项目'
  const [selectedCategory, setSelectedCategory] = useState('全部项目');

  // !! 3. 根据“状态”动态计算出要显示的卡片列表
  // (这就是我们第 8 课的“过滤”逻辑)
  const filteredProjects = selectedCategory === '全部项目'
    ? allProjects // 如果是“全部项目”，就显示所有
    : allProjects.filter(project => project.category === selectedCategory); // 否则，就过滤


  return (
    <>
      <h1>陈浩的简历</h1>
      <Education />
      <h2 className="section-title">项目经验</h2>
      <div className="filter-buttons">
        
        {/* !! 4. 按钮们现在“活”了 !! */}
        
        {/*
          * onClick: 当被点击时，调用 "状态更新函数" 来改变状态
          * className: 用 JS "动态计算" class。
          * 如果 `selectedCategory` 等于 '全部项目'，就添加 'active'
        */}
        <button 
          onClick={() => setSelectedCategory('全部项目')}
          className={`filter-btn ${selectedCategory === '全部项目' ? 'active' : ''}`}
        >
          全部项目
        </button>

        <button 
          onClick={() => setSelectedCategory('运营管理')}
          className={`filter-btn ${selectedCategory === '运营管理' ? 'active' : ''}`}
        >
          运营管理
        </button>
        
        <button 
          onClick={() => setSelectedCategory('技术研究')}
          className={`filter-btn ${selectedCategory === '技术研究' ? 'active' : ''}`}
        >
          技术研究
        </button>
        
        <button 
          onClick={() => setSelectedCategory('金融服务')}
          className={`filter-btn ${selectedCategory === '金融服务' ? 'active' : ''}`}
        >
          金融服务
        </button>
      </div>

      {/* !! 5. 这个渲染列表现在是“动态”的 !! */}
      <div className="card-container">
        
        {/* * 我们不再 .map(allProjects)，而是 .map(filteredProjects)
          * 当 "selectedCategory" 状态改变时，"filteredProjects" 
          * 会被重新计算，React 会自动重绘这个列表！
        */}
        {filteredProjects.map((project) => (
          
          <div key={project.title} className="card">
            <h3>{project.title}</h3>
            <p className="subtitle">{project.subtitle}</p>
            <p className="description">{project.description}</p>
            
            <div className="tags-container">
              {project.tags.map((tag) => (
                <span key={tag.name} className={`tag ${tag.class}`}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App