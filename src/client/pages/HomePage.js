import React from 'react'

const HomePage = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={() => console.log("Hi There!")}>Click Me</button>
        </div>

    )
};

export default {
    component: HomePage
};