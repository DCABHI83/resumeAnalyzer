import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Home from './pages/Home'
import Playground from './components/Playground'
import Login from './pages/Login'
import Pricing from './pages/Pricing'
const App = () => {
  return (
   <>
   <HashRouter>
    
   <Header/>
    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/playground' element={<Playground/>} />
<Route path='/login' element={<Login/>} />
<Route path='/pricing' element={<Pricing/>} />




    </Routes>
<Footer/>


   </HashRouter>
   
   </>
  )
}

export default App
