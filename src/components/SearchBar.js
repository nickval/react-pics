import React from 'react';



class SearchBar extends React.Component {
    state = {text: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.text);
        this.props.onSubmit(this.state.text);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Input picture name:</label>
                        <input 
                            type="text" 
                            onChange={event => this.setState({text: event.target.value})}
                            value={this.state.text}
                            placeholder="name"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;