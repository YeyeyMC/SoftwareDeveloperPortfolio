import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './layouts/Header.tsx'
import './App.css'
import Footer from "./layouts/Footer.tsx";
import Main from "./layouts/Main.tsx";

function App() {

  return (
    <div className="app-container">
      <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
  )
}

export default App
