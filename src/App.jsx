import Header from "./Header";
import Services from "./Services";
import Footer from "./Footer";
import { Route, Routes, } from "react-router-dom";
import './App.css';
import Esto from "./Esto";
import Golf from "./Golf";
import Security from "./Security";
import Security1 from "./Security1";
import Security2 from "./Security2";
import Agribusiness from "./Agribusiness";
import Logistics from "./Logistics";
import Consulting from "./Consulting";
import Insurance from "./Insurance";
import Entertainment from "./Entertainment";
import Estateservice1 from "./Estateservice1";
import Estateservice2 from "./Estateservice2";
import Estateservice3 from "./Estateservice3";
import Estateservice4 from "./Estateservice4";
import Insure1 from "./Insure1";
import Insure2 from "./Insure2";
import Insure3 from "./Insure3";
import Insure4 from "./Insure4";
import Music from "./Music";
import Football from "./Football";
import Television from "./Television";



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
            <Route path="/security1" element={<Security1/>} />
            <Route path="/security2" element={<Security2/>} />
            <Route path="/agribusiness" element={<Agribusiness/>} />
            <Route path="/logistics" element={<Logistics/>} />
            <Route path="/consulting" element={<Consulting/>} />
            <Route path="/insurance" element={<Insurance/>} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/estateservice1" element={<Estateservice1 />} />
            <Route path="/estateservice2" element={<Estateservice2 />} />
            <Route path="/estateservice3" element={<Estateservice3 />} />
            <Route path="/estateservice4" element={<Estateservice4 />} />
            <Route path="/insure1" element={<Insure1 />} />
            <Route path="/insure2" element={<Insure2 />} />
            <Route path="/insure3" element={<Insure3 />} />
            <Route path="/insure4" element={<Insure4 />} />
            <Route path="/music" element={<Music />} />
            <Route path="/football" element={<Football />} />
            <Route path="/television" element={<Television />} />
            



            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      
    </>
  )
}
export default App;