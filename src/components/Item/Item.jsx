import Button from "../../shared/Button/Button";
import css from "./item.module.scss";
// import "../../assets/img/logo.png";

const isFollowed = false;

const Item = () => {
  return (
    <div className={css.card}>
      <img
        src="./img/logo.png"
        alt="logo"
        className={css.logo}
        width="76"
        height="22"
      />

      <img
        src="./img/background-picture.png"
        alt="logo"
        className={css.card_background}
        width="308"
      />

      <img
        src="./img/logo.png"
        alt="logo"
        className={css.logo}
        width={76}
        height={22}
      />

      <img
        src="./img/logo.png"
        alt="logo"
        className={css.logo}
        width={76}
        height={22}
      />

      <Button>{!isFollowed ? "FOLLOW" : "FOLLOWING"}</Button>
    </div>
  );
};

export default Item;
