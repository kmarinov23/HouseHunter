import logo from "../../logo.png"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="Company Logo" />
                    </div>
                    <div className="footer-info">
                        <h3>Contact Information</h3>
                        <p>123 Main Street</p>
                        <p>City, State ZIP</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/properties">Properties</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;