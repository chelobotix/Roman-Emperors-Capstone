import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import enter from '../../assets/images/enter.png';
import style from './Dynasty.module.css';

const Dynasty = () => {
  const state = useSelector((state) => state.emperors);
  const { name } = useParams();
  const filterArray = state.emperorsArray.records.filter((data) => data.fields.dynasty === name);
  let toggleColor = true;

  return (
    <div className={style.dynastyContainer}>
      <h2 className={style.h2}>{`Dynasty ${name}`}</h2>
      <ul className={style.ul}>
        {filterArray.map((emperor, index) => {
          if (index % 2 === 0) {
            toggleColor = !toggleColor;
          } else {
            toggleColor = !toggleColor;
          }
          return (
            <li key={uuidv4()} className={toggleColor ? `${style.li} ${style.liOne}` : `${style.li} ${style.liTwo}`}>
              <img src={emperor.fields.image} alt={emperor.fields.name} className={style.img} />
              <h3 className={style.h3}>{emperor.fields.name}</h3>
              <Link to={`/emperor/${emperor.fields.name}`} className={style.link}>
                <img src={enter} alt="enter" className={style.enter} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dynasty;
