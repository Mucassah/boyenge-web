import { useState } from 'react';
import './Header.css';
import Logo from './assets/Logo.png';
import { FaBars } from "react-icons/fa";


function Header(){
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu=()=>{
        setIsOpen (!isOpen);
    };


    return(
        <>
        <nav>
        <a  className='logo' href="#"> <img src={Logo} width="70px" height="70px" alt="Logo" ></img></a>
            <ol className= {isOpen ? 'links logo' : 'links'} >
                <li> <a href="#">REAL ESTATE</a></li>
                <li><a href="#">AGRIBUSINESS</a></li>
                <li><a href="#">SECURITY</a></li>
                <li ><a href="#"> <img src={Logo} width="100px" height="100px" alt="Logo" ></img></a> </li>
                <li><a href="#">INSURANCE</a></li>
                <li><a href="#">LOGISTICS</a></li>
                <li><a href="#">CONSULTING</a></li>
            </ol>
            <div className="bar" onClick={toggleMenu} >
                <FaBars />
            </div>
        </nav>
            <h1>BOYENGE HOLDINGS GROUP</h1>
        </>
    )
};

export default Header;