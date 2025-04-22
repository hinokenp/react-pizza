import { Link } from "react-router";

import PizzaLogo from "/logo.svg";
import CartIcon from "./icons/CartIcon";
import Search from "./Search";

function Header({ searchValue, setSearchValue }) {
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
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="header__cart">
          <Link to="/cart" className="button">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>3</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
