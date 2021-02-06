import React, { useEffect, useState } from "react";
import beefObject from "../helper/beefy";
import axios from "axios";

export default ({ name }) => {
  const [thisCut, setThisCut] = useState({});
  const [wiki, setWiki] = useState();
  const [loaded, setLoaded] = useState(false);

  const wikiUrl = "https://en.wikipedia.org/api/rest_v1";

  useEffect(() => {
    loadBeefCut();
    fetchCutFromWiki();
  }, []);

  const loadBeefCut = () => {
    for (let rId in beefObject["regions"]) {
      for (let cId in beefObject["regions"][rId]["cuts"]) {
        if (beefObject["regions"][rId]["cuts"][cId]["name"] === name) {
          const thisObject = beefObject["regions"][rId]["cuts"][cId];
          setThisCut(thisObject);
          console.log(rId, cId, name);
        }
      }
    }
  };
  // wiki: /page/summary/{title}
  const fetchCutFromWiki = () => {
    let tempName = name.toLowerCase();
    axios
      .get(`${wikiUrl}/page/summary/${tempName}`)
      .then((res) => {
        setWiki(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log("Error: ", err));
  };
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
