import { Link } from "react-router";
import styles from "./NotFound.module.scss";

import CartEmptyImg from "/img/empty-cart.png";

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartEmpty}>
        <div className={styles.title}>
          <h2>Корзина пустая 😕</h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы
            заказать пиццу, перейди на главную страницу.
          </p>
        </div>
        <img src={CartEmptyImg} alt="" />
        <Link to="/">
          <button className="button button_black button_text-white">
            Вернуться назад
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
