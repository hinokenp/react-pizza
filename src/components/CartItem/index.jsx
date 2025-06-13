import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  minusItem,
} from "../../redux/cart/cartSlice";

function CartItem({ id, title, type, size, price, count, imageUrl }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <div className={styles.mainInfo}>
        <img width={80} src={imageUrl} alt="" />
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>
            {type} тесто, {size} см.
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.amount}>
          <button
            onClick={() => dispatch(minusItem({ id, type, size }))}
            className={styles.button}
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => dispatch(addProduct({ id, type, size }))}
            className={styles.button}
          >
            +
          </button>
        </div>
        <div className={styles.price}>{price * count} ₽</div>
        <button
          onClick={() => dispatch(removeProduct({ id, type, size }))}
          className={styles.delete}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default CartItem;
