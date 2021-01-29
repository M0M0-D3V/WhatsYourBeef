import style from "./style.module.css";
import cow from "../images/cow.png";
import beefObject from "../helper/beefy";
import { useEffect, useState } from "react";

const ChooseBeef = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    let regionsArray = [];
    for (let index in beefObject["regions"]) {
      regionsArray.push(beefObject["regions"][index]["name"]);
    }
    // for (let one in regionsArray) {
    //   console.log(regionsArray[one]);
    // }
    setRegions(regionsArray);
  }, []);

  return (
    <>
      {/* <div className={style.main}> */}
      <h1>What's Your Beef?</h1>
      <h3>Pick a cow region...</h3>
      <img src={cow} alt="cow" className={style.centerImage} />
      <select className={style.centerImage}>
        {regions.map((region, idx) => {
          return <option key={idx}>{region}</option>;
        })}
      </select>
      {/* </div> */}
    </>
  );
};

export default ChooseBeef;
