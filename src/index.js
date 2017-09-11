import React from 'react';
import ReactDOM from 'react-dom';

//component
const App = () => {
    return <div>Hi!</div>;
}

//take this HTML and render to page
ReactDOM.render(<App />,document.querySelector(".container"));