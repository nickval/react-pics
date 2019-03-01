import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = {
        images: []
    }

    onFormSubmit = (text) => {
        console.log(text);
        unsplash.get('/search/photos',{
            params: {query: text}
        }).then(response => {
            console.log(response.data);
            this.setState({images: response.data.results});
        })
    }

    render(){
        return (
            <div className="ui container"  style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onFormSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;