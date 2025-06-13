import { Link, useLocation } from "react-router";
import { useSelector } from "react-redux";

import PizzaLogo from "/logo.svg";
import CartIcon from "./icons/CartIcon";
import Search from "./Search";

function Header() {
  const { pathname } = useLocation();
  const { totalCount, totalPrice } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={PizzaLogo} alt="logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        {pathname !== "/cart" ? <Search /> : ""}
        <div className="header__cart">
          <Link to="/cart" className="button">
            <span>{totalPrice} ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
