import styles from "./CartItem.module.scss";
import Plus from "../icons/Plus";

function CartItem() {
  return (
    <div className={styles.main}>
      <div className={styles.mainInfo}>
        <img width={80} src="/img/pizzas/1.avif" alt="" />
        <div>
          <p className={styles.title}>Сырный цыпленок</p>
          <p className={styles.description}>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.amount}>
          <button className={styles.button}>-</button>
          <span>2</span>
          <button className={styles.button}>+</button>
        </div>
        <div className={styles.price}>770 ₽</div>
        <button className={styles.delete}>x</button>
      </div>
    </div>
  );
}

export default CartItem;
