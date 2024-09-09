import React from 'react';
import './comp.css';
type Props = {
    text: string;
    buttonColor: string;
    colorText: string;
    size: string;
    type: string;
};
class MyComponent extends React.Component<Props, {}> {
    render() {
        return <div className = {this.props.buttonColor}>
        <button className = 'buttonBig12'>
            
            <div className = {this.props.size}>
                <div className = {this.props.colorText} >
                    
                {this.props.text}
                </div></div>
            </button></div>
            
    }
}

export default MyComponent;