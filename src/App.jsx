import Header from "./Header";
import Services from "./Services";
import Footer from "./Footer";
import { Route, Routes, } from "react-router-dom";
import './App.css';
import Esto from "./Esto";


function App() {
  
  return(
    <>
       <Header />
        <main>
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/esto" element={<Esto />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      
    </>
  )
}
export default App;