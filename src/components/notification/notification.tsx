
import React from "react";
import './notification.css'

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
export const Notification:React.FC<NotificationIE> = (props) =>{
    const onClick = () =>{
        props.onClick()
    }


    return <div className={'notification' + ' ' + (props.linkText == undefined? 'normal': 'large')}> 
    <div className = 'otclick_date'>
    {props.isNew?
    <div className = 'H4'><img src='/dot.svg' alt="logo" /> {props.tittle}</div>
    :
    <div className = 'H4'>{props.tittle}</div>}
    <div className = 'date'>{props.date}</div>
    </div>
    {props.cost == undefined?
        <div className = 'description_cost'>{props.description}</div>
    :
    <div className = 'description_cost'>{props.description}, {props.cost + '₽'}</div>
    }
    <a href = {props.href} className = 'aclass'> {props.linkText}</a>

    </div>

}