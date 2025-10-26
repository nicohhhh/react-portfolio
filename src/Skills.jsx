// src/Skills.jsx
import { skillsData } from './data.js'
import React from 'react'
import './Skills.css' // 导入这个组件专属的 CSS 样式



// 2. 这就是我们的“技能积木”组件
function Skills() {
  return (
    <section className="skills-section">
      
      {/* 3. 这个组件自己的标题 */}
      <h2 className="section-title">个人能力</h2>

      <div className="skills-container">
        {/* 4. 再次使用 .map() 逻辑！ */}
        {skillsData.map((skill) => (
          <div key={skill.name} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// 5. 导出！(这次我们不会忘了！)
export default Skills