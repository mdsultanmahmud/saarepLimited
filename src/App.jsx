import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import MemberShip from "./components/MemberShip/MemberShip"
import Navbar from "./components/Navbar/Navbar"
import Partner from "./components/Partner/Partner"
import WhySaarep from "./components/WhySaarep/WhySaarep"

function App() {
  return (
    <div className="mx-12">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <WhySaarep></WhySaarep>
      <Contact></Contact>
      {/* 
      <MemberShip></MemberShip>
      
      <Partner></Partner>
       */}
       <Footer></Footer>
    </div>
  )
}

export default App
