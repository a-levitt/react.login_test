import React from "react";
import Form from "./Form.jsx";

let isRegistered = true;

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
