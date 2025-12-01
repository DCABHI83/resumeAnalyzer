import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Home from './pages/Home'
const App = () => {
  return (
   <>
   <HashRouter>
    
   <Header/>
    <Routes>

<Route path='/' element={<Home/>}/>



    </Routes>
<Footer/>


   </HashRouter>
   
   </>
  )
}

export default App
