import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return <div>
    App
  </div>
}

const dom = document.getElementById('root')
const root = createRoot(dom)

root.render(<App />)