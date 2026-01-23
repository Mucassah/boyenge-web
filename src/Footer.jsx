import './Footer.css';
import {
    FaInstagram,
    FaLinkedinIn,
    FaXTwitter,
    FaFacebookF
} from 'react-icons/fa6';

function Footer() {
    return (
        <>
            <div className="Footer">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Connect</a>
                <a href="#">&copy; Boyengeholdinggroup</a>
            </div>

            {/* Social Media Icons */}
            <div className="FooterSocials">
                <a
                    href="https://www.instagram.com/boyengeholding_group?igsh=cjRmdm1uNDhqNG1j"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://www.facebook.com/share/17vCM8NaMQ/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://www.linkedin.com/company/boyenge-holding-s-group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://x.com/bhgroupofficiel?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                >
                    <FaXTwitter />
                </a>
            </div>
        </>
    );
}

export default Footer;
