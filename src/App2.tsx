
import React, { useEffect, useState } from "react";
import {ButtonStandart} from "./components/button/index";


function App() {
    const onClick = () => {
        console.log('text')
    }
  return (
    <div>
        <ButtonStandart onClick={()=>onClick()} size="large" type="primary">Войти</ButtonStandart>
        <ButtonStandart onClick={()=>onClick()} size="large" type="secondary">Войти</ButtonStandart>
        <ButtonStandart onClick={()=>onClick()} size="large" type="ghost">Войти</ButtonStandart>
        <ButtonStandart onClick={()=>onClick()} size="large" type="shaded">Войти</ButtonStandart>
  </div>
);
}

export default App;
