import React from 'react';

class SearchBar extends React.Component{
    
    state = {inputText : ""};

    handleInput=(event)=>
    {
        this.setState({inputText:event.target.value});
    }

    
    handleSubmit=(event)=>
    {
        console.log(event);
        if(event.key==='Enter' || event.type==='click')
        {
            this.props.onButtonClicked(this.state.inputText);
        }
       
    }
    render()
    {
        return(
                <div className="ui fluid action input">
                    <input value={this.state.inputText} onKeyDown={this.handleSubmit} onChange={this.handleInput} type="text" placeholder="Search..."/>
                    <div onClick={this.handleSubmit} className="ui button">Search</div>
                </div>
                
            )
    }
}

export default SearchBar;