
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
//own components
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

//youtube API KEY from console.developers.google.com

const API_KEY = 'AIzaSyCuj_PhRhYHrxMrDbG-9Y6RYxQnxLv0q4E';


//component
class App extends Component{

    constructor(props) {
        super(props);

        this.state={videos:[]};

        YTsearch({key:API_KEY,term:'Udit'},(videos) => {
            this.setState({videos});
        });
    }

    render() {
        return (
            < div >
            < SearchBar / >
            <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    };
};

ReactDOM.render(<App />,document.querySelector(".container"));