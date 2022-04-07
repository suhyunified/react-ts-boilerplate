import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)

reportWebVitals()
