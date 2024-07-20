import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import './App.css'
import Companies from "./Components/Comapnies/Companies"
import Residency from "./Components/Residency/Residency"
import Value from "./Components/Value/Value"
import Conatct from "./Components/Contact/Conatct"
import GetStarted from "./Components/GetStarted/GetStarted"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div className=" App">
      <div>
        <div className="white-gradient"></div>
        <Header/> 
        <Hero/>
        
      </div>
      <Companies/>
      <Residency/>
      <Value/>
      <Conatct/>
      <GetStarted/>
      <Footer/>
    </div>
  )
}

export default App

