import React from 'react';
import Input from './Input';

function Form(props) {

    const [isMousedOver, setIsMouseOver] = React.useState(false);
    const [name, setName] = React.useState('');
    const [headingText, setHeadingText] = React.useState('');

    function captureUsername(event) {
        setName(event.target.value);
    }

    function handleClick(event) {
        setHeadingText(name);
        event.preventDefault();
    }

    function handleMouseOver() {
        setIsMouseOver(true);
    }

    function handleMouseOut() {
        setIsMouseOver(false);
    }

    return (
        <>
        <h1>Welcome {headingText}</h1>
        <form className="form" onSubmit={handleClick}>
            <input
                onChange={captureUsername}
                type="text"
                placeholder="username"
                value={name}
            />
            <Input
                type="password"
                placeholder="password"
            />
            {!props.isRegistered && <Input
                type="password"
                placeholder="confirm password"
            /> }
            <button type="submit" style={{backgroundColor: isMousedOver ? "black" : "white"}}
                    onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
               {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
        </>
    )
}

export default Form;