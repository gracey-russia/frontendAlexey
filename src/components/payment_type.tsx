import { useState } from 'react';
import React from 'react';
import './App1.css';

function App() {
    const [value1, setValue] = useState(false)
  return (
    <div className="App">
      
      <div className="line">
        <div className="logo-text">GRAC<span className="blue">EY</span></div>
        
        </div>
      
      <body>
        
        <div className="App-text">
            Добро пожаловать!
        </div>
        
        <div>
        
            {
            !value1? 
            <div className="sorr">
                
                <div className="buttonBig">
                <img src='/pin.svg' className='button'></img>
                <div> <img src='/heart.svg' className= "heart_kit" alt="logo" /></div>
                    <div>Найти сиделку</div>
                <div className="App-textSmall">Я хочу подобрать сиделку для близкого</div>
                </div>
                
                
                <div  onClick={()=>setValue(!value1)} className="buttonSmall">
                <div> <img src='/kit.svg' className= "heart_kit" alt="logo" /></div>
                    Стать сиделкой
                <div className="App-textSmall">Я ищу и принимаю заявки от клиентов</div>
                
                </div>
            </div>
            :

            <div className="sorr">
                <div  onClick={()=>setValue(!value1)} className="buttonMainSmall">
                <div> <img src='/heart.svg' className= "heart_kit" alt="logo" /></div>
                    Найти сиделку
                <div className="App-textSmall">Я хочу подобрать сиделку для близкого</div>
                </div>
                <div className="buttonBig">
                <img src='/pin.svg' className='button'></img>
                <div> <img src='/kit.svg' className= "heart_kit" alt="logo" /></div>
                    Стать сиделкой
                <div className="App-textSmall">Я ищу и принимаю заявки от клиентов</div>
                </div>
            </div>
            }


        </div>
        
        <div className="App-textSmall2">Уже есть аккаунт? <a href='/login' className="link">Войти</a></div>
        {
            !value1?
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
