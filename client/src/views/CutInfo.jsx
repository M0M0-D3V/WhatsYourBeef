import React, { useEffect, useState } from "react";
import beefObject from "../helper/beefy";

export default ({ name }) => {
  const [thisCut, setThisCut] = useState({});

  useEffect(() => {
    for (let rId in beefObject["regions"]) {
      for (let cId in beefObject["regions"][rId]["cuts"]) {
        if (beefObject["regions"][rId]["cuts"][cId]["name"] === name) {
          const thisObject = beefObject["regions"][rId]["cuts"][cId];
          setThisCut(thisObject);
          console.log(rId, cId, name);
        }
      }
    }
  }, []);
  return (
    <div>
      <img
        src={`https://my-beef-bucket.s3-us-west-1.amazonaws.com/${name}.png`}
        alt={name}
      />
      <p>Info of cut: {name} here</p>
      {thisCut.methods}
    </div>
  );
};
