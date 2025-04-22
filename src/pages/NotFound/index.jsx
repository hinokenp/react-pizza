import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.main}>
      <div>😕</div>
      <p className={styles.title}>Ничего не найдено</p>
      <p className={styles.description}>
        К сожалению данная страница отстутствует в нашем интернет-магазине
      </p>
    </div>
  );
}

export default NotFound;
