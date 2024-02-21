import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
     <Header/>
     

<Routes>

<Route path="/" element={<Home/>} />




</Routes>

     <Footer/>


    </>
  );
}

export default App;
