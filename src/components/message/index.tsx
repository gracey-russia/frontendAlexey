
import React from "react";
import './styles.css'
import {ButtonStandart} from "../button/comp1";

export  interface messageIE{
    styles?:React.CSSProperties,
    className?:string,
    text: string;
    time: string;
    incoming: true | false;
    children?: React.ReactNode
}
export const Message:React.FC<messageIE> = (props) =>{
    const onClick = () => {
        console.log('text')
    }


    return <div>
        {props.incoming?
        <div className = 'incoming'><div className = 'temp'>{props.text}</div></div>
        :    
        <div className = 'outcoming'>{props.text}</div>
        }
    </div>

}