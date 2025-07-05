import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import { ThemeProvider } from "@/components/theme-provider"
import Services from './pages/Services'
import Product from './pages/Product'

function App() {

  return  (
    <div className='font-poppins'>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Product />
      <Footer />
    </>
  </ThemeProvider>
  </div>
  )
}

export default App
