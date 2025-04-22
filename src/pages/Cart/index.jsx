import { Link } from "react-router";
import styles from "./Cart.module.scss";

import CartIcon from "../../components/icons/CartIcon";
import TrashIcon from "../../components/icons/TrashIcon";
import CartItem from "../../components/CartItem";

function Cart() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <CartIcon />
          <h1>Корзина</h1>
        </div>
        <button className={styles.headerDelete}>
          <TrashIcon />
          <span>Очистить корзину</span>
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.contentList}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.contentTotal}>
          <p>
            Всего пицц: <span className={styles.totalAmount}>3 шт.</span>
          </p>
          <p>
            Сумма заказа: <span className={styles.totalPrice}>900 ₽</span>
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <Link to="/">
          <button className="button button_outline button_gray">
            Вернуться назад
          </button>
        </Link>
        <button className="button button_text-white">Оплатить сейчас</button>
      </div>
    </div>
  );
}

export default Cart;
