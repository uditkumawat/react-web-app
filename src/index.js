
import React from 'react';
import ReactDOM from 'react-dom';

//own components
import SearchBar from './components/search_bar.js';

//youtube API KEY from console.developers.google.com

const API_KEY = 'AIzaSyCuj_PhRhYHrxMrDbG-9Y6RYxQnxLv0q4E';

//component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

//take this HTML and render to page
ReactDOM.render(<App />,document.querySelector(".container"));