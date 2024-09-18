
import React from "react";
import './styles.css'

export  interface NotificationIE{
    tittle?: string;
    styles?:React.CSSProperties,
    className?:string,
    description?: string;
    cost?: string;
    date?: string;
    href?: string;
    linkText?: string;
    isNew?: true | false; 
    onClick: ()=>void,
    children?: React.ReactNode
}
export const Notification:React.FC<NotificationIE> = (propsn) =>{
    const onClick = () =>{
        propsn.onClick()
    }


    return <div className={'notification' + ' ' + (propsn.linkText == undefined? 'normal_notification': 'large_notification')}> 
    <div className = 'otclick_date'>
    {propsn.isNew?
    <div className = 'H4'><img src='/dot.svg' alt="logo" /> {propsn.tittle}</div>
    :
    <div className = 'H4'>{propsn.tittle}</div>}
    <div className = 'date'>{propsn.date}</div>
    </div>
    {propsn.cost == undefined?
        <div className = 'description_cost'>{propsn.description}</div>
    :
    <div className = 'description_cost'>{propsn.description}, {propsn.cost + '₽'}</div>
    }
    <a href = {propsn.href} className = 'aclass'> {propsn.linkText}</a>

    </div>

}