import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import Featured from './Components/Featured/Featured'
import Recent from './Components/Recent/Recent'
import Awards from './Components/Awards/Awards'
import Location from './Components/Location/Location'
import Team from './Components/Team/Team'
import Price from './Components/Price/Price'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Recent/>
      <Awards/>
      <Location/>
      <Team/>
      <Price/>
      <Footer/>
    </div>
  )
}

export default App
