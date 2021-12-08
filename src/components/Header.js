import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="menuLeft">
        <p> TRENDY BAGS</p>
        <div className="img1">
          <img src="https://img.icons8.com/pastel-glyph/30/000000/ball-point-pen--v4.png" />
        </div>
      </div>
      <nav className="menuRight">
        <ul>
          <li className="collection">Collection</li>
          <li className="products">Products</li>
          <li className="philosophy">Philosophy</li>
          <li>
            <img
              className="imgPanier"
              src="https://img.icons8.com/ios/30/000000/shopping-cart-loaded--v2.png"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
