import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import Card from "./components/layout/Card";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
// eslint-disable-next-line import/no-anonymous-default-export
export default (propos) => (
  <div className="App">
    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={6}></CondicionalComIf>
    </Card>
    <Card titulo="#05 - Condicional">
      <Condicional numero={5}></Condicional>
    </Card>
    <Card titulo="#04 - Repetição">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="#03 Componentes com filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#02 Componente com Parametro">
      <ComParametro titulo="Esse é o titulo" subtitulo="esse é o subtitulo" />
    </Card>
    <Card titulo="#01 Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
