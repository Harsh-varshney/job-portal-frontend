import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Left Section: Logo & Subheading */}
        <div className="footer-brand">
          <div className="logo-placeholder"></div>
          <p className="subheading">Subheading three words</p>
        </div>

        {/* Middle Section: Links */}
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#sitemap">Sitemap</a>
        </div>

        {/* Right Section: Social Icons */}
        <div className="footer-socials">
          <div className="social-circle"></div>
          <div className="social-circle"></div>
          <div className="social-circle"></div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;