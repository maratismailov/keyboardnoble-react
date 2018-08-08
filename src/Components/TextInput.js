import React, { Component } from 'react';

// import '../Style.css';


class TextInput extends Component {
    // console.log(props.isError);
   
    render () {
        var isError='App';
        if (this.props.isError == null){
            isError='App'
        } else {
            isError='Error'
        }
        return (
            <div>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.value} 
                    className={isError}
                    // autoFocus="true"
                />
            </div>
        )

    }
}

export default TextInput;