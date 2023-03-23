import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./Emperor.module.css";

const Emperor = () => {
  const state = useSelector((state) => state.emperors);
  const { name } = useParams();
  const emperorDetails = state.emperorsArray.records.filter((data) => data.fields.name === name);

  return (
    <div className={style.emperorContainer}>
      <h2 className={style.h2}>Emperor {emperorDetails[0].fields.name}</h2>
      <img src={emperorDetails[0].fields.image} alt={name} className={style.img} />
      <ul className={style.ul}>
        <li className={style.li}>
          <p className={style.p1}>Full Name</p>
          <p className={style.p2}>{emperorDetails[0].fields.name_full}</p>
        </li>
        <li className={style.li}>
          <p className={style.p1}>Reign Start</p>
          <p className={style.p2}>{emperorDetails[0].fields.reign_start}</p>
        </li>
        <li className={style.li}>
          <p className={style.p1}>Reign End</p>
          <p className={style.p2}>{emperorDetails[0].fields.reign_end}</p>
        </li>
        <li className={style.li}>
          <p className={style.p1}>Birth City</p>
          <p className={style.p2}>{emperorDetails[0].fields.birth_cty}</p>
        </li>
        <li className={style.li}>
          <p className={style.p1}>Birth Province</p>
          <p className={style.p2}>{emperorDetails[0].fields.birth_prv}</p>
        </li>
        <li className={style.li}>
          <p className={style.p1}>Era</p>
          <p className={style.p2}>{emperorDetails[0].fields.era}</p>
        </li>
        <li className={style.li}>
          <p className={style.p1}>Date of Dead</p>
          <p className={style.p2}>{emperorDetails[0].fields.death}</p>
        </li>
        <li className={style.li}>
          <p className={style.p1}>Killer</p>
          <p className={style.p2}>{emperorDetails[0].fields.killer}</p>
        </li>
        <li className={style.li}>
          <p className={style.p1}>Cause of Dead</p>
          <p className={style.p2}>{emperorDetails[0].fields.cause}</p>
        </li>
      </ul>
    </div>
  );
};

export default Emperor;
