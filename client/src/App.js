import React from "react";
import { Paper } from "@material-ui/core";
import { Link, Router, Redirect } from "@reach/router";

import style from "./components/style.module.css";
import NotFound from "./views/NotFound";
import ChooseBeef from "./components/ChooseBeef";
import CutInfo from "./views/CutInfo";
function App() {
  return (
    <div>
      <Paper elevation={3} className={style.padding}>
        <h5>{/* Add Links here */}</h5>

        <Router>
          {/* Add Routes here */}
          <ChooseBeef path="/" default />
          <CutInfo path="cuts/info/:name/" />
          {/* <NotFound /> */}
        </Router>

        {/* MAKE A CARD TO SHOW DETAILS OF EACH BEEF REGION */}
      </Paper>
    </div>
  );
}

export default App;
