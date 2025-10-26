// src/SchoolDetailPage.jsx (无分数版本)

import React from 'react'
import { useParams, Link } from 'react-router-dom'

// 1. 我们仍然从“单一数据源”读取 (数据本身没变)
import { educationData } from './data.js' 
import './SchoolDetailPage.css' 

function SchoolDetailPage() {
  const { schoolId } = useParams(); 
  
  const school = educationData.find(edu => edu.id === schoolId);

  if (!school) {
    return (
      <div className="school-detail-container">
        <h2>学校未找到</h2>
        <Link to="/">返回主页</Link>
      </div>
    )
  }

  // 这就是你想要的新功能
  return (
    <div className="school-detail-container">
      
      <Link to="/" className="back-link">
        &larr; 返回主页
      </Link>
      
      <div className="school-header">
        <img src={school.logoUrl} alt={`${school.school} 校徽`} className="school-logo-large" />
        <div className="school-header-info">
          <h1>{school.school}</h1>
          <h3>{school.degree} - {school.major}</h3>
          <p>{school.dates}</p>
        </div>
      </div>
      
      <div className="school-courses">
        <h2>所修课程</h2>
        
        {school.courses.length > 0 ? (
          <table className="courses-table">
            <thead>
              <tr>
                <th>课程代码</th>
                <th>课程名称</th>
                {/* !! 2. 我已经帮你删除了“分数”的表头 !! */}
              </tr>
            </thead>
            <tbody>
              {school.courses.map((course) => (
                <tr key={course.code}>
                  <td>{course.code}</td>
                  <td>{course.title}</td>
                  {/* !! 3. 我已经帮你删除了“分数”的单元格 !! */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>课程列表待更新...</p>
        )}
      </div>
    </div>
  )
}

export default SchoolDetailPage