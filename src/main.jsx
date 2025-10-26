import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'     // 1. 导入你的 App.jsx
import './index.css'         // 2. 导入你的 (现在是空的) index.css

// 3. 找到网页上的 <div id="root"></div>，然后把 <App /> "塞" 进去
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)