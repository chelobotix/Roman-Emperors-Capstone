import back from "../../assets/images/back.png";
import settings from "../../assets/images/settings.png";
import mic from "../../assets/images/mic.png";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className={style.header}>
    <div className={style.headerContainer}>
      <Link to="/">
        <img className={style.img} src={back} alt="" />
      </Link>
      <h1 className={style.h1}>Roman Emperors</h1>
      <div>
        <img className={style.img} src={settings} alt="" />
        <img className={style.img} src={mic} alt="" />
      </div>
    </div>
  </header>
);

export default Header;
