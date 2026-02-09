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
                <CustomLink to="/esto"  onClick={() => setIsOpen(false)}>REAL ESTATE</CustomLink>
                <CustomLink to="/agribusiness" onClick={() => setIsOpen(false)}>AGRIBUSINESS</CustomLink>
                <CustomLink to="/security" onClick={() => setIsOpen(false)}>SECURITY</CustomLink>
                <CustomLink to="/golf" onClick={() => setIsOpen(false)}>GOLF</CustomLink>
                <Link className='picha' to="/"> <img src={Logo} width="100px" height="100px" alt="Logo"/></Link>
                <CustomLink to="/insurance" onClick={() => setIsOpen(false)}>INSURANCE</CustomLink>
                <CustomLink to="/logistics" onClick={() => setIsOpen(false)}>LOGISTICS</CustomLink>
                <CustomLink to="/consulting" onClick={() => setIsOpen(false)}>CONSULTING</CustomLink>
                <CustomLink to="/entertainment" onClick={() => setIsOpen(false)}>ENTERTAINMENT</CustomLink>

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