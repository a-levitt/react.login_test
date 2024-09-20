import React from 'react';
import Input from './Input';

function Form(props) {

    const [isMousedOver, setIsMouseOver] = React.useState(false);
    const [userData, setData] = React.useState({
        username: "",
        password: ""

    });

    function captureData(event) {
        const newValue = event.target.value;
        const inputData = event.target.name;

        setData(prevValue => {
            if (inputData === "username") {
                return {
                    username: newValue,
                    password: prevValue.password
                }
            } else if (inputData === "password") {
                return {
                    username: prevValue.username,
                    password: newValue
                }
            }
        })
    }


    function handleMouseOver() {
        setIsMouseOver(true);
    }

    function handleMouseOut() {
        setIsMouseOver(false);
    }

    return (
        <>
        <h1>Welcome
            <br/> username: {userData.username}
            <br/> password: {userData.password}
        </h1>
        <form className="form">
            <input
                name="username"
                onChange={captureData}
                type="text"
                placeholder="username"
                value={userData.username}
            />
            <input
                name="password"
                onChange={captureData}
                type="password"
                placeholder="password"
                value={userData.password}
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