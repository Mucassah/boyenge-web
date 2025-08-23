import Email from './assets/Email.png';
import Phone from './assets/Phone.png'
import './Contact.css';

function Contact(){
    return(
        <div className='contact'>
            <h3>CONTACTS</h3>
            <div className='cont'>
                <p>
                    <img src={Email}></img> info@boyenge.com
                </p>
                <p>
                    <img src={Phone}></img> +243 854 534 130
                </p>

            </div>
            
        </div>

    )
}
export default Contact;