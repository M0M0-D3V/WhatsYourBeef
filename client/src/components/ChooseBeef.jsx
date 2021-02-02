import style from "./style.module.css";
import cow from "../images/cow.png";
import beefObject from "../helper/beefy";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";

const ChooseBeef = () => {
  const [regions, setRegions] = useState([]);
  const [currentRegion, setCurrentRegion] = useState();
  const [cuts, setCuts] = useState([]);
  const [showRegion, setShowRegion] = useState(null);
  const [regionIdx, setRegionIdx] = useState(null);

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
    if (showRegion !== null) {
      let rId = 0;
      for (let index in regions) {
        if (regions[index]["name"] === showRegion) {
          setRegionIdx(index);
          rId = index;
          setCurrentRegion(regions[index]);
          console.log(`regionIdx is now: ${regionIdx}`);
        }
      }
      // console.log(regions[regionIdx]["cuts"]);
      for (let cutidx in regions[rId]["cuts"]) {
        cutsArray.push(regions[rId]["cuts"][cutidx]);
        console.log(regions[rId]["cuts"][cutidx]["name"]);
      }
      // for (let one in cutsArray) {
      //   console.log(`cutsArray: ${cutsArray[one]["name"]}`);
      // }
    }
    console.log("regionIdx", regionIdx);
    setCuts(cutsArray);
  }, [showRegion]);

  const handleChange = (e) => {
    console.log(e);
    setShowRegion(e.target.value);
  };

  return (
    <>
      {/* <div className={style.main}> */}
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <h3>Pick a cow region...</h3>
      <img src={cow} alt="cow" className={style.centerImage} />

      <div className={style.chooseRegion}>
        <select className={style.selectRegion} onChange={handleChange}>
          <option default>Choose one...</option>
          {regions.map((region, idx) => {
            return (
              <option key={idx} value={region[idx]}>
                {region["name"]}
              </option>
            );
          })}
        </select>
      </div>
      {currentRegion && (
        <div className={style.description}>
          {" "}
          {currentRegion["description"]}{" "}
        </div>
      )}
      {cuts &&
        cuts.map((cut, idx) => {
          return (
            <Link to={`/cuts/info/${cut.name}`}>
              <div className={style.cutCard} key={idx} onMouseEnter={() => {}}>
                <p>{cut.name}</p>
                <img
                  src={`https://my-beef-bucket.s3-us-west-1.amazonaws.com/${cut.name}.png`}
                  alt={cut.name}
                />
                <p>Click to see more info</p>
                {/* <p>cooking methods:</p>
                <ul>
                  {cut.method.map((method, idx) => {
                    return <li>{method}</li>;
                  })}
                </ul> */}
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default ChooseBeef;
