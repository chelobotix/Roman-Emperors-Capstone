import { Link } from "react-router-dom";
import style from "./DynastyCard.module.css";
import enter from "../../assets/images/enter.png";

const DynastyCard = (props) => {
  const { name, count, img } = props;

  return (
    <>
      <Link to={`/dynasty/${name}`} className={style.link}>
        <img src={enter} alt="enter" className={style.enter} />
      </Link>
      <img src={img} alt="Dynasty" className={style.img} />
      <h3 className={style.h3}>{name}</h3>
      <p className={style.p}>{count}</p>
    </>
  );
};

export default DynastyCard;
