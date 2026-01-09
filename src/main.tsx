import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n' // Must be imported before React components
import './index.css'
import App from './App.tsx'
import { TaskProvider } from './contexts/TaskContext'
import { UIProvider } from './contexts/UIContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskProvider>
      <UIProvider>
        <App />
      </UIProvider>
    </TaskProvider>
  </StrictMode>,
)
