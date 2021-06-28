import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={props.onInc}>Aumentar</button>
      <button onClick={props.onDec}>Diminuir</button>
    </div>
  );
};
