import { useState } from 'react';
import React from 'react';
import './App1.css';

function App() {
    const [value1, setValue] = useState(false)
  return (
    <div className="App">
      <header>
        <div className="line">
        <div className="App-logomain1">GRAC</div>
        <div className="App-logomain2">EY</div>
        </div>
      </header>
      <body>
        
        <div className="App-text">
            Добро пожаловать!
        </div>
        
        <div>
        
            {
            value1 == false? 
            <div className="sorr">
                
                <div className="buttonbig">
                <img src={'/pin.svg'}className='button'></img>
                <div> <img src={'/heart.svg'} className= "heartkit" alt="logo" /></div>
                    <div>Найти сиделку</div>
                <div className="App-textsmall">Я хочу подобрать сиделку для близкого</div>
                </div>
                
                
                <div  onClick={()=>setValue(!value1)} className="buttonsmall">
                <div> <img src={'/kit.svg'} className= "heartkit" alt="logo" /></div>
                    Стать сиделкой
                <div className="App-textsmall">Я ищу и принимаю заявки от клиентов</div>
                
                </div>
            </div>
            :

            <div className="sorr">
                <div  onClick={()=>setValue(!value1)} className="buttonmainsmall">
                <div> <img src={'/heart.svg'} className= "heartkit" alt="logo" /></div>
                    Найти сиделку
                <div className="App-textsmall">Я хочу подобрать сиделку для близкого</div>
                </div>
                <div className="buttonbig">
                <img src={'/pin.svg'}className='button'></img>
                <div> <img src={'/kit.svg'} className= "heartkit" alt="logo" /></div>
                    Стать сиделкой
                <div className="App-textsmall">Я ищу и принимаю заявки от клиентов</div>
                </div>
            </div>
            }


        </div>
        
        <div className="App-textsmall2">Уже есть аккаунт? <a href='/login' className="link">Войти</a></div>
        {
            value1 == false?
            <a href='/register_user'>
            <div className="sorr"><div className="button1">Продолжить</div></div></a>
        :
        <a href='/register_nurse'>
            <div className="sorr"><div className="button1">Продолжить</div></div></a>
        }
        
      </body>
    </div>
  );
}

export default App;
