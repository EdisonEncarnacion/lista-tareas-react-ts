import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { TodoApp } from './camponents/TodoApp'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <TodoApp></TodoApp>
  </React.StrictMode>,
)
