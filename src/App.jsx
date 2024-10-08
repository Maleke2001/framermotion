import About from "./components/About"
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import Services from "./components/Services"
import Testimonies from "./components/Testimonies"


function App() {
  

  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar/>
    <Hero/>
    <Cards/>
    <About/>
    <Services/>
    <Price/>
    <Testimonies/>
    </div>
    
   

    </>
  )
}

export default App
