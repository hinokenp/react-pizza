import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cart/cartSlice";
import styles from "./Cart.module.scss";

import CartIcon from "../../components/icons/CartIcon";
import CartItem from "../../components/CartItem";
import TrashIcon from "../../components/icons/TrashIcon";
import NotFound from "../../components/NotFound";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);
  console.log(items);

  if (!totalCount) {
    return <NotFound />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <CartIcon />
          <h1>Корзина</h1>
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className={styles.headerDelete}
        >
          <TrashIcon />
          <span>Очистить корзину</span>
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.contentList}>
          {items.map((item) => {
            return (
              <CartItem
                key={`${item.id}-${item.size}-${item.type}`}
                {...item}
              />
            );
          })}
        </div>
        <div className={styles.contentTotal}>
          <p>
            Всего пицц:{" "}
            <span className={styles.totalAmount}>{totalCount} шт.</span>
          </p>
          <p>
            Сумма заказа:{" "}
            <span className={styles.totalPrice}>{totalPrice} ₽</span>
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
