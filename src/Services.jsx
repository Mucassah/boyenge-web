import './Services.css';
import { Link } from "react-router-dom";

function Services(){

    return(
            <div className='Services'>
                <Link className='Estate' to='/Esto'>
                    <div className='Estate'>
                        <h2>REAL ESTATE</h2>
                        
                    </div>
                </Link>
                <Link className='Farming' to='/Agribusiness'>
                    <div className='Farming'>
                        <h2>FARMING AND AGRIBUSINESS</h2>
                        
                    </div>
                </Link>
                <Link className='Security' to='/Security'>
                    <div className='Security'>
                        <h2>SECURITY</h2>
                        
                    </div>
                </Link>
                <Link className='Insurance' to='/Insurance'>
                    <div className='Insurance'>
                        <h2>INSURANCE</h2>
                        
                    </div>
                </Link>
                <Link className='Trade' to='/Logistics'>
                    <div className='Trade'>
                        <h2>LOGISTICS</h2>
                        
                    </div>
                </Link>
                <Link className='Consulting' to='/Consulting'>
                    <div className='Consulting'>
                        <h2>CONSULTING</h2>
                        
                    </div>
                </Link>
                <Link className='Golf' to='/Golf'>
                    <div className='Golf'>
                        <h2>GOLF</h2>
                        
                    </div>
                </Link>
                <Link className='Tv' to='Entertainment'>
                    <div className='Tv'>
                        <h2>ENTERTAINMENT</h2>
                        
                    </div>
                </Link>
                

                
            </div>
            
    )
}
export default Services;