import React from 'react';
import { Radio, Checkbox, Input, Tag, Progress, Form, ConfigProvider } from 'antd';
import './App1.css';
import {Notification} from "./components/notification/index";
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
        
        <Notification description = 'Зима Владислава Ильинична' tittle = 'Новый отклик' cost = '1200' isNew ={true} onClick = {()=>onClick()} date = 'Сегодня' ></Notification>
        <Drawer description = 'text text text text text text text text text text' tittleBig = 'Tittle' tittleSmall = 'Tittle' buttonText = 'Продолжить'></Drawer>
        <Message text = 'Message' time = '13:20' incoming = {true} gracey = {false}></Message>
        <Message text = 'Привет нормально работает?' time = '13:20' incoming = {false} gracey = {true}></Message>
        
    
    </div>
};

export default App;