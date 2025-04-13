import React from "react";
import { name, city } from "../data/data.js";

const divStyle ={
  color: 'firebrick',
};

function Home() {
  return( 
  <div id="home" style={divStyle}>
    <h1>
      {name} is a Web Developer from {city}!
    </h1>
  </div>
  );
}

export default Home;
