import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

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
                    href="https://www.linkedin.com/in/nkumu-s-boyenge-a9378383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://x.com/elumbe_s?s=21&t=9OiwbdlYrwFfmnX1OjAXcA"
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
