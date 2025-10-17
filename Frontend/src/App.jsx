import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StockSpanAnalyzer from './StockSpanAnalyzer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <StockSpanAnalyzer />
   </div>
  )
}

export default App
