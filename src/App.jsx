
import React from "react"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./pages/Host/Components/HostLayout"
import HostDetails from "./pages/Host/HostDetails"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans/>}/>
            <Route path="/vans/:id" element={<VanDetail/>}/>

            <Route element={<HostLayout />}>
              <Route path="/host" element={<HostDetails/>}/>
              <Route path="/host/income" element={<Income />}/>
              <Route path="/host/reviews" element={<Reviews />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
