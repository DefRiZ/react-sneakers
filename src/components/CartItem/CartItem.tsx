import remove from "../../img/remove-item.svg";

import styles from "./CartItem.module.scss";

import { CartItemProps, removeItem } from "../../store/slices/cartSlice";
import { useAppDispatch } from "../../store/store";

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  price,
  imageUrl,
  favorited,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.root}>
      <img alt="shoes" className={styles.image} src={imageUrl} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>{price} грн.</span>
      </div>
      <button className={styles.btn}>
        <img
          alt="delete"
          src={remove}
          onClick={() =>
            dispatch(removeItem({ id, title, price, imageUrl, favorited }))
          }
        />
      </button>
    </div>
  );
};

export default CartItem;
