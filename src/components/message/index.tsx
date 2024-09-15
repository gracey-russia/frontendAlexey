
import React from "react";
import './styles.css'
import {ButtonStandart} from "../button/index";

export  interface messageIE{
    styles?:React.CSSProperties,
    className?:string,
    text: string;
    time: string;
    incoming: true | false;
    gracey: true | false;
    children?: React.ReactNode
}
export const Message:React.FC<messageIE> = (props) =>{
    const onClick = () => {
        console.log('text')
    }


    return <div>
        {props.gracey? 
        <div className = 'grace_message'>
            <div className = 'grace_tittle'>Грейси</div>
            <div className = 'grace_text'>{props.text}</div>
        <div className = 'grace_time'>13:20</div></div>
        : 
        props.incoming? 
        <div className = 'incoming'><div>{props.text}</div><div className = 'time'>13:20</div></div>
            :    
            <div className = 'outcoming'><div>{props.text}</div><div className = 'time'>13:40</div></div>
            

        }
        
    </div>

}