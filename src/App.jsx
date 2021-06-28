import React from "react";
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import Card from "./components/layout/Card";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Super from "./components/comunicacao/indireta/Super";
import Pai from "./components/comunicacao/direta/Pai";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

// eslint-disable-next-line import/no-anonymous-default-export
export default (propos) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#11 - Mega" color="#73503C">
        <Mega qtdeNumero={8}></Mega>
      </Card>
      <Card titulo="#10 - Contador" color="#293E6A">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#09 - Input" color="#9C0F5F">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicação indireta" color="#000">
        <Super></Super>
      </Card>
      <Card titulo="#07 - Comunicação direta" color="#4298B5">
        <Pai sobrenome="freitas"></Pai>
      </Card>
      <Card titulo="#06 - Condicional v2" color="#FA6900">
        <CondicionalComIf numero={6}></CondicionalComIf>
      </Card>
      <Card titulo="#05 - Condicional" color="#008BBA">
        <Condicional numero={5}></Condicional>
      </Card>
      <Card titulo="#04 - Repetição" color="#D96459">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="#03 Componentes com filhos" color="#FF85CB">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 Componente com Parametro" color="#92B06A">
        <ComParametro titulo="Esse é o titulo" subtitulo="esse é o subtitulo" />
      </Card>
      <Card titulo="#01 Primeiro Componente" color="#E94C6F">
        <Primeiro />
      </Card>
    </div>
  </div>
);
