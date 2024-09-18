
import React from "react";
import './styles.css'

export  interface ButtonStandartIE{
    styles?:React.CSSProperties,
    className?:string,
    type: 'primary'|'secondary'|'ghost'|'shaded',
    size: 'large'|'normal',
    onClick: ()=>void,
    children?: React.ReactNode
}
export const ButtonStandart:React.FC<ButtonStandartIE> = (props) =>{
    const onClick = () =>{
        props.onClick()
    }


    return <div onClick={()=>onClick()} className={"GraceButton" + ' ' +(props.type == undefined? 'secondary':props.type) + ' ' +(props.size == undefined? 'normal':props.size) + ' ' +(props.className == undefined? '':props.className)}>
        {props.children}
    </div>
}