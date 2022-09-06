import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <Link to="/about">About</Link>
      </p>
    </footer>
  );
};

export default Footer;
