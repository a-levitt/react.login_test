import React from 'react';
import Input from './Input';

function Form(props) {

    const [isMousedOver, setIsMouseOver] = React.useState(false);

    function handleClick() {
        setMouseClick(true);
    }

    function handleMouseOver() {
        setIsMouseOver(true);
    }

    function handleMouseOut() {
        setIsMouseOver(false);
    }

    return (
        <>
        <h1>"Welcome"</h1>
        <form className="form">
            <Input
                type="text"
                placeholder="username"
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
                    onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
        </>
    )
}

export default Form;