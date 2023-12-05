import React from "react";
import EncendidoOpagado from "./encendidoopagado.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <ul className="text-center bg-warning p-2 fs-2">
        <p>Random Number</p>
      </ul>

      <EncendidoOpagado />
    </div>
  );
};

export default Home;
