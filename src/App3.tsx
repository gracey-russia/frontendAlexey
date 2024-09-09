import React from 'react';
import { Radio, Checkbox, Input, Tag, Progress, Form, ConfigProvider } from 'antd';
import './App1.css';
import {Notification} from "./components/notification/notification";
import {Drawer} from "./components/drawer/index";
import {Message} from "./components/message/index";
const App = () => {
    const onClick = () => {
        console.log('text')
    }
    //<Notification description = 'Зима Владислава Ильинична' tittle = 'Новый отклик' cost = '1200' isNew ={true} onClick = {()=>onClick()} date = 'Сегодня' ></Notification>
    /*<ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#304299',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <Radio></Radio>
  </ConfigProvider>*/
    return <div>
        <Drawer description = 'text text text text text text text text text text' tittleBig = 'Tittle' tittleSmall = 'Tittle' buttonText = 'Продолжить'></Drawer>
        <Message text = 'сообщение' time = '13:20' incoming = {true}></Message>
        
    
    </div>
};

export default App;