import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from "./components/Home";
import Gallery from "./components/Gallery";

import Login from "./components/Login";
import Contact from "./components/Contact";
import Membership from "./components/Membership";
import MainHome from "./components/MainHome";



function App() {
  return (
    <>
     <Header/>
   
     

<Routes>

<Route path="/" element={<MainHome/>} />
<Route path="/gallery" element={<Gallery/>} />
<Route path="/login" element={<Login/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/membership" element={<Membership/>} />





</Routes>

     <Footer/>


    </>
  );
}

export default App;
