import React, { useState } from "react";

function EncendidoOpagado(params) {
  // Define la funcion del estado y lo representa con un boleano
  const [stateCar, SetStateCar] = useState(false);

  // Aqui esta la funcion que haga lo contrario a su estado actual
  const encenderApagar = () => {
    SetStateCar(!stateCar)
  }

  return (
    <div>
      {/* Pregunta como se encuentra el stateCar, apagado o encendido */}
      <h3>El coche esta: {stateCar ? "Encendido💥" : "Apagado⛔"}</h3>
      {/* Lanza la funcion "EncenderApagar" */}
      <button onClick={encenderApagar}>Encendido / Apagado</button>
    </div>
  );
}

export default EncendidoOpagado;
