import React, { useState } from "react";
import Sub from "./Sub";

export default (props) => {
  const [label, setLabel] = useState("valor");
  const [num, setNum] = useState(0);

  function quandoClicar(valorGerado, texto) {
    setNum(valorGerado);
    setLabel(texto);
  }
  return (
    <div>
      <h4>
        {label} :{num}
      </h4>
      <Sub onClicar={quandoClicar}></Sub>
    </div>
  );
};
