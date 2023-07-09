import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App'

const dom = document.getElementById('root')
const root = createRoot(dom)
root.render(<App />)
