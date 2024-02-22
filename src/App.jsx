import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Resturant from "./components/Resturant";


function App() {
  return (
    <>
     <Header/>
     

<Routes>

<Route path="/" element={<Resturant/>} />
<Route path="/gallery" element={<Gallery/>} />




</Routes>

     <Footer/>


    </>
  );
}

export default App;
