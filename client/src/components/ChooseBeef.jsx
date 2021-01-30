import style from "./style.module.css";
import cow from "../images/cow.png";
import beefObject from "../helper/beefy";
import { useEffect, useState } from "react";

const ChooseBeef = () => {
  const [regions, setRegions] = useState([]);
  const [cuts, setCuts] = useState([]);
  const [showRegion, setShowRegion] = useState(null);

  useEffect(() => {
    let regionsArray = [];
    for (let index in beefObject["regions"]) {
      regionsArray.push(beefObject["regions"][index]);
      // regionsArray.push(beefObject["regions"][index]["name"]);
    }
    // for (let one in regionsArray) {
    //   console.log(regionsArray[one]);
    // }
    setRegions(regionsArray);
  }, []);

  useEffect(() => {
    let cutsArray = [];
    let regionIdx = 0;
    if (showRegion !== null) {
      for (let index in regions) {
        if (regions[index]["name"] === showRegion) {
          regionIdx = index;
          console.log(`regionIdx is now: ${regionIdx}`);
        }
      }
      // console.log(regions[regionIdx]["cuts"]);
      for (let cutidx in regions[regionIdx]["cuts"]) {
        cutsArray.push(regions[regionIdx]["cuts"][cutidx]);
        console.log(regions[regionIdx]["cuts"][cutidx]["name"]);
      }
    }
    // for (let one in cutsArray) {
    //   console.log(`cutsArray: ${cutsArray[one]["name"]}`);
    // }
    setCuts(cutsArray);
  }, [showRegion]);

  const handleChange = (e) => {
    console.log(e);
    setShowRegion(e.target.value);
  };

  return (
    <>
      {/* <div className={style.main}> */}
      <h1>What's Your Beef?</h1>
      <h3>Pick a cow region...</h3>
      <img src={cow} alt="cow" className={style.centerImage} />
      <select className={style.centerImage} onChange={handleChange}>
        <option default>Choose one...</option>
        {regions.map((region, idx) => {
          return (
            <option key={idx} value={region[idx]}>
              {region["name"]}
            </option>
          );
        })}
      </select>
      <div>
        {cuts &&
          cuts.map((cut, idx) => {
            return (
              <div>
                <p>{cut.name}</p>
                <img src={`../images/${cut.name}.png`} alt={cut.name} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ChooseBeef;
