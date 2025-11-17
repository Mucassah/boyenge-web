import Header from "./Header";
import Services from "./Services";
import Footer from "./Footer";
import { Route, Routes, } from "react-router-dom";
import './App.css';
import Esto from "./Esto";
import Golf from "./Golf";
import Security from "./Security";
import Agribusiness from "./Agribusiness";
import Logistics from "./Logistics";
import Consulting from "./Consulting";
import Insurance from "./Insurance";


function App() {
  
  return(
    <>
       <Header />
        <main>
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/esto" element={<Esto />} />
            <Route path="/golf" element={<Golf/>} />
            <Route path="/security" element={<Security/>} />
            <Route path="/agribusiness" element={<Agribusiness/>} />
            <Route path="/logistics" element={<Logistics/>} />
            <Route path="/consulting" element={<Consulting/>} />
            <Route path="/insurance" element={<Insurance/>} />


            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      
    </>
  )
}
export default App;