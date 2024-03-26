import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <h2>NEON GEN</h2>
        Introducing NEON GEN, where neon fashion takes center stage. Dive into
        our collection of bold and dynamic apparel and accessories, designed to
        make you stand out. Shop now and bring a burst of color to your
        wardrobe!
        <div className="social-media-icons">
          <img className="twitter-icon" src="images/twitter.png" alt="" />
          <img className="facebook-icon" src="images/facebook.png" alt="" />
          <img className="instagram-icon" src="images/instagram.png" alt="" />
          <img className="youtube-icon" src="images/youtube.png" alt="" />
        </div>
      </div>
      <div className="footer-middle">
        <h4>LINKS</h4>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Customer Service</Link>
      </div>
      <div className="footer-right">
        <h4>CONTACT</h4>
        <div className="address">
          <LocationOnIcon />
          <p>Sajik-ro-300-gil Yeongdeungpo-gu, Seoul 30174, South Korea</p>
        </div>
        <div className="phone">
          <PhoneIcon />
          <p>+82 10 6799 XX</p>
        </div>
        <div className="email">
          <EmailIcon />
          <p>neon-gen@mark.com</p>
        </div>
        <div className="payment-icons">
          <img
            className="kakaopay-icon"
            src="images/kakaopay.png"
            alt="Kakaopay Icon"
          />
        </div>
      </div>
    </footer>
  );
}
