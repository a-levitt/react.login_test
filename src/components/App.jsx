import React from "react";
import Form from "./Form.jsx";

let isRegistered = false;

function App() {
    return (
        <div className="container">
           <Form
               isRegistered={isRegistered}
           />
        </div>
    );
}

export default App;
