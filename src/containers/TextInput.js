import React, { Component } from 'react';

// import '../Style.css';
class TextInput extends Component {

    render() {
        let isError = 'App';
        if (this.props.isError == null) {
            isError = 'App'
        } else {
            isError = 'Error'
        }

        return (
            <div>
                <textarea
                    onChange={this.props.changed}
                    value={this.props.value}
                    className={isError}
                    {...this.props}
                />
            </div>
        )
    }
}

export default TextInput;