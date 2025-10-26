// src/main.jsx (全新路由版本)
import SchoolDetailPage from './SchoolDetailPage.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, // 导入“创建路由器”的工具
  RouterProvider,     // 导入“路由器提供者”组件
} from "react-router-dom"; // 从我们刚安装的库里导入

// 导入你的“页面”
import App from './App.jsx' // 这就是你的“主页”
// (我们稍后会在这里导入你的“学校详情页”)

import './index.css' // 你的全局 CSS

// !! 1. 定义你的“路由地图” !!
const router = createBrowserRouter([
  {
    path: "/", // 当 URL 是“/”(根目录)时...
    element: <App />, // ...就显示 <App /> 组件
  },
// !! 2. 新增的“动态”路由 !!
  //    :schoolId 是一个“占位符”，它可以匹配 /school/ntu, /school/warwick 等等
  {
    path: "/school/:schoolId", // <-- 冒号 : 是“动态”的意思
    element: <SchoolDetailPage />,
  }
]);

// !! 2. 启动应用，但这次是“启动路由器” !!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      我们不再直接渲染 <App />，
      而是渲染 <RouterProvider />，并把我们的“路由地图”交给它
    */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)