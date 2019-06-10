import React from 'react';
import './App.css';
import Form from "./components/Form";

function App() {
    return (
        <div className="App">
            <header>
                <h1>User Details</h1>
            </header>
            <section>
                <Form/>
            </section>
        </div>
    );
}

export default App;
