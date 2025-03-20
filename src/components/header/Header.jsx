import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import flag from "../../assets/images/flag.png";
function Header() {
  return (
    <div className="container ">
      <div className="header">
        <img src={logo} alt="" />
        <div className="head-top">
          <div>
            <img src={flag} alt="" />
            <p>+998 (90)-606-66-66</p>
          </div>
          <button className="header-btn">оставить заявку</button>
        </div>
      </div>
      <nav>
          <ul>
             <li><Link to="/" >о бренде</Link></li>
             <li><Link to="/brands">продукциИ</Link></li>
             <li><Link to="/comfort">преимущества</Link></li>
             <li><Link to="/club">открыть клуб</Link></li>
             <li><Link to="/contacts">контакты</Link></li>
             
          </ul>
      </nav>
    </div>
  );
}

export default Header;
