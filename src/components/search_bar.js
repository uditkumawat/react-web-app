import React,{Component} from 'react';

/*
//search bar component (function based)
const SearchBar = () => {
    return <input />;
}
*/

class SearchBar extends Component{

    constructor(props){

        super(props);

        this.state = {term:''};
    }

    render(){
        return (
            <div className="search-bar">
                    <input
                        value={this.state.term}
                        onChange={this.onInputChange}/>
            </div>
        )
    }

    //function to handle when there is change in input in textBox
    onInputChange = (event)=>{
       
        this.setState({
            term:event.target.value
        });

        this.props.onSearchTermChange(event.target.value);
    }
}

export default SearchBar;