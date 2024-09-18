
import React, { useEffect, useState } from "react";
import {Button} from "./components/button/index";


function App() {
    const onClick = () => {
        console.log('text')
    }
  return (
    <div>
        <Button onClick={()=>onClick()} size="large" type="primary">Войти</Button>
        <Button onClick={()=>onClick()} size="large" type="secondary">Войти</Button>
        <Button onClick={()=>onClick()} size="large" type="ghost">Войти</Button>
        <Button onClick={()=>onClick()} size="large" type="shaded">Войти</Button>
  </div>
);
}

export default App;
