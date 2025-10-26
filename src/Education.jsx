// src/Education.jsx
import { Link } from 'react-router-dom'
import React from 'react'
import './Education.css' // 导入这个组件专属的 CSS 样式

// 1. 我们把教育背景的数据，也做成一个数组
const educationData = [
  {
    id: 'ntu', // <-- !! 新增 !!
    school: '南洋理工大学',
    degree: '理学硕士',
    major: '项目管理',
    dates: '2025.08 - 目前',
    logoUrl: '/ntu.png'
  },
  {
    id: 'warwick', // <-- !! 新增 !!
    school: '华威大学',
    degree: '理学学士',
    major: '计算机科学与商业研究',
    dates: '2022.09 - 2025.06',
    logoUrl: '/warwick.png'
  }
];

// 2. 这就是我们的“教育积木”组件
function Education() {
  return (
    // 我们用 <section> 标签来语义化地包裹这个版块
    <section className="education-section">
      
      {/* 3. 这个组件自己的标题 */}
      <h2 className="section-title">教育背景</h2>

      <div className="education-container">
        {/* 4. 和项目卡片一模一样的 .map() 逻辑！ */}
        {educationData.map((edu) => (
         <Link key={edu.school} to={`/school/${edu.id}`} className="edu-card">
            
            {/* 5. !! 关键：显示校徽 !! */}
            <img 
              src={edu.logoUrl} 
              alt={`${edu.school} 校徽`} 
              className="edu-logo"
            />
            
            <div className="edu-info">
              <h3>{edu.school}</h3>
              <p>{edu.degree} - {edu.major}</p>
              <p className="edu-dates">{edu.dates}</p>
            </div>
         </Link>
        ))}
      </div>
    </section>
  )
}

// 6. 导出这个组件，这样 App.jsx 才能“导入”它
export default Education