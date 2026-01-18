import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>

      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span> | </span>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
    </footer>
  );
};

export default Footer;
