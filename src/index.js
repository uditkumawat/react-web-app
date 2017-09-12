import _ from 'lodash';
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

        this.videoSearch("react tutorials");
    }

    videoSearch(term){

        YTsearch({key:API_KEY,term:term},(videos) => {
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300)
        return (
            < div >
            < SearchBar onSearchTermChange={videoSearch}/ >
            <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    };
};

ReactDOM.render(<App />,document.querySelector(".container"));