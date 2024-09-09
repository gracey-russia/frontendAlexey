import React from 'react';
type TestComponentProps = {
    name: string;
    description: string;
}

const TestComponent: React.FC<TestComponentProps> = ({
    name, 
    description

}: TestComponentProps): JSX.Element => {
    const onClick: React.MouseEventHandler = (
        e: React.MouseEvent<HTMLButtonElement>
    ) =>{
        console.log('onClick', e);
    }
    const onInput: React.FormEventHandler = (
        e: React.FormEvent<HTMLInputElement>
    ) => {
        console.log('onInput', e);
    }

    const onSubmit: React.FormEventHandler = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        console.log('onSubmit', e);
    }
    return (
        <div>
            <div>{name}</div>
            <div>{description}</div>
            <form action = '#' onSubmit = {onSubmit}>
                <input onInput = {onInput} />
                <button type = 'submit'>Submit</button>
            </form>
            <button onClick = {onClick}>button</button>
            
        </div>
    )
}
export default TestComponent