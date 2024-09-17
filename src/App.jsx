import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './context/Components/Header'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <ThemeContextProvider>
      <Header />
    </ThemeContextProvider>
  )

}

export default App
