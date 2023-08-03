import remove from "../../img/remove-item.svg";

import styles from "./CartItem.module.scss";

import { removeItem } from "../../store/slices/cartSlice";
import { useAppDispatch } from "../../store/store";

type CartItemProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({ id, title, price, imageUrl }) => {
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
          onClick={() => dispatch(removeItem({ id }))}
        />
      </button>
    </div>
  );
};

export default CartItem;
