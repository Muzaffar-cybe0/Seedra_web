import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import All_Products from "./pages/All_products/All_Products"
import About_Seedra from "./pages/About_Seedra/About_Seedra"
import OurBlog from "./pages/Our_blog/OurBlog"
import Contact from "./pages/Contacts/Contact"

function App() {
  return (
  <div className="app">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/all_products" element={<All_Products/>}/>
    <Route path="/about_seedra" element={<About_Seedra/>}/>
    <Route path="/our_blog" element={<OurBlog/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
  </div>
  )
}

export default App
