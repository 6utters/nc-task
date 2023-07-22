import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '@/app/providers/store'
import { DBProvider } from '@/app/providers/db'
import './app/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreProvider>
      <DBProvider>
        <App />
      </DBProvider>
    </StoreProvider>
  </BrowserRouter>
)
