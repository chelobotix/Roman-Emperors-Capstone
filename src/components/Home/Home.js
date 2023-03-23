import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import DynastyCard from '../DynastyCard/DynastyCard';
import Heading from '../Heading/Heading';
import style from './Home.module.css';
import romanHelmet from '../../assets/images/romanHelmet.png';
import romanHelmet2 from '../../assets/images/romanHelmet2.png';
import romanHelmet3 from '../../assets/images/romanHelmet3.png';
import romanHelmet4 from '../../assets/images/romanHelmet4.png';

const Home = () => {
  const state = useSelector((state) => state.emperors);
  const [searchDynasty, setSearchDynasty] = useState([...state.dynasty]);
  const imgArray = [romanHelmet, romanHelmet2, romanHelmet3, romanHelmet4];
  let result = [];

  const handlerSearch = (e) => {
    if (e.target.value === '') {
      result = [...state.dynasty];
    } else {
      result = state.dynasty.filter((data) => (
        data.name.toLowerCase().includes(e.target.value.toLowerCase())
      ));
    }
    setSearchDynasty([...result]);
  };

  const listStyle = () => {
    let toggleColor = true;
    let counter = 1;
    let imgIndex = 0;
    return (
      <ul className={style.ul}>
        {searchDynasty.map((dynasty) => {
          counter += 1;
          if (counter === 3) {
            toggleColor = !toggleColor;
            counter = 1;
          }
          if (imgIndex === 3) {
            imgIndex = 0;
          } else {
            imgIndex += 1;
          }
          return (
            <li key={uuidv4()} className={toggleColor ? `${style.li} ${style.liOne}` : `${style.li} ${style.liTwo}`}>
              <DynastyCard name={dynasty.name} count={dynasty.count} img={imgArray[imgIndex]} />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <Heading />
      <div className={style.mainContainer}>
        <div className={style.searchContainer}>
          <input type="text" onChange={handlerSearch} placeholder="Search By Dynasty..." className={style.search} />
        </div>
        <div className={style.dynastyContainer}>
          <h2 className={style.h2}>Dynasty</h2>
          {listStyle()}
        </div>
      </div>
    </>
  );
};

export default Home;
