import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import MemberShip from "./components/MemberShip/MemberShip"
import MembershipType from "./components/MembershipType/MembershipType"
import Navbar from "./components/Navbar/Navbar"
import Partner from "./components/Partner/Partner"
import Vision from "./components/Vision/Vision"
import WhySaarep from "./components/WhySaarep/WhySaarep"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { Toaster } from "react-hot-toast"
function App() {
  // console.log(import.meta.env.VITE_PAYPAL_CLIENT_ID)
  return (
    <div>
      <PayPalScriptProvider options={{ "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID }}>
        <div className="mx-6 md:mx-12">
          <Navbar></Navbar>
          <Banner></Banner>
          <Vision></Vision>
          <About></About>
          <WhySaarep></WhySaarep>
          <MembershipType></MembershipType>
          <MemberShip></MemberShip>
          {/* <Partner></Partner> */}
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </PayPalScriptProvider>
        <Toaster></Toaster>
    </div>

  )
}

export default App
