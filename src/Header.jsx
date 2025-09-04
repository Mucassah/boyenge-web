import { useState } from 'react';
import './Header.css';
import Logo from './assets/Logo.png';
import { FaBars } from "react-icons/fa";
import { Link , useLocation } from 'react-router-dom';

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu=()=>{
        setIsOpen (!isOpen);
    };


    return(
        <>
        <nav>
        <Link className='logo' to="/"> <img src={Logo} width="70px" height="70px" alt="Logo" ></img></Link>
            <ol className= {isOpen ? 'links logo' : 'links'} >
                <CustomLink to="/esto">REAL ESTATE</CustomLink>
                <CustomLink to="/agribusiness">AGRIBUSINESS</CustomLink>
                <CustomLink to="/security">SECURITY</CustomLink>
                <CustomLink to="/golf">GOLF</CustomLink>
                <Link className='picha' to="/"> <img src={Logo} width="100px" height="100px" alt="Logo"/></Link>
                <CustomLink to="/insurance">INSURANCE</CustomLink>
                <CustomLink to="/logistics">LOGISTICS</CustomLink>
                <CustomLink to="/consulting">CONSULTING</CustomLink>
                <CustomLink to="/entertainment">ENTERTAINMENT</CustomLink>

            </ol>
            <div className="bar" onClick={toggleMenu} >
                <FaBars />
            </div>
        </nav>
            <h1>BOYENGE HOLDINGS GROUP</h1>
        </>
    )
};
function CustomLink ({to, children, ...props}){
    const location = useLocation();
    const isActive = location.pathname ===to;


    return(
        <li className={isActive? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Header;