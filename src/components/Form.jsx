import React from 'react';
import Input from './Input';

function Form(props) {

    const [isMousedOver, setIsMouseOver] = React.useState(false);
    const [userData, setData] = React.useState({
        username: "",
        password: "",
        email: ""
    });

    function captureData(event) {

        const {value, name} = event.target;

        setData(prevValue => {
            return {
                ...prevValue,
                [name]: value
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
            <br/> email: {userData.email}
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
                <input
                    name="email"
                    onChange={captureData}
                    type="email"
                    placeholder="email"
                    value={userData.email}
                />
                {!props.isRegistered && <Input
                    type="password"
                    placeholder="confirm password"
                />}
                <button type="submit" style={{backgroundColor: isMousedOver ? "black" : "white"}}
                        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    {props.isRegistered ? "Login" : "Register"}
                </button>
            </form>
        </>
    )
    }

    export default Form;