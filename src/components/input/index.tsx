
import React from "react";
import './styles.css'

export  interface inputIE{
    styles?:React.CSSProperties,
    className?:string,
    label: string;
    text: string;
    error_message?: string;
    disabled?: boolean;
    children?: React.ReactNode
}
export const InputPlace:React.FC<inputIE> = (props) =>{
    const onClick = () => {
        console.log('text')
    }


    return <div>
        <div className = 'label_text'>{props.label}</div>
        {props.error_message == undefined?
        props.disabled?
        <div className = 'place_holder_disabled'>
            <div className = 'text_disabled_input'>{props.text}</div>
        </div>
        
        
        :
        <input className = 'place_holder' placeholder = {props.text}></input>
        :
        <div>
        <input className = 'place_holder_error' placeholder = {props.text}></input>
        <div>{props.error_message}</div></div>
    }
        
        {props.children}
        </div>

}