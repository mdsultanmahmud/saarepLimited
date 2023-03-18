import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import MemberShip from "./components/MemberShip/MemberShip"
import Navbar from "./components/Navbar/Navbar"
import Partner from "./components/Partner/Partner"
import WhySaarep from "./components/WhySaarep/WhySaarep"

function App() {
  return (
    <div className="mx-4">
      <Navbar></Navbar>
      <Banner></Banner>
      {/* <About></About>
      <MemberShip></MemberShip>
      <WhySaarep></WhySaarep>
      <Partner></Partner>
      <Contact></Contact> */}
    </div>
  )
}

export default App
