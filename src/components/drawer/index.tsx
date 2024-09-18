
import React from "react";
import './styles.css'
import {Button} from "../button/index";

export  interface drawerIE{
    tittleBig: string;
    tittleSmall: string;
    styles?:React.CSSProperties,
    className?:string,
    description: string;
    buttonText: string;
    children?: React.ReactNode
}
export const Drawer:React.FC<drawerIE> = (props) =>{
    const onClick = () => {
        console.log('text')
    }


    return <div className = 'banner'>
        <div className = 'H3'>{props.tittleBig}</div>
        <div className = 'center_div'><div className = 'H4'>{props.tittleSmall}</div></div>
        <div className = 'center_div'><div className = 'text'>{props.description}</div></div>
        <div className ='buttonew'><Button onClick={()=>onClick()} size="large" type="primary">{props.buttonText}</Button></div>
        {props.children}
    </div>

}