import React, { Component } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import ShowTask from '../components/ShowTask';
import { connect } from 'react-redux';
import DictSelectMenu from '../assets/Menu'

import '../Style.css';
import '../rc-menu.css';

class Boyarin extends Component {

  componentDidMount() {
    this.loadText(this.props.file)


  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.loadText(this.props.file);
    }
  }

  handleSelect = (selectedOption) => {
    this.props.handleSelectStore(selectedOption);
  }

  loadText = (path) => {
    axios.get(path)
      .then(allText => {
        this.props.loadTextStore(allText.data)
        this.grabDictionary()
      })
  }


  grabDictionary = () => {
    console.log('this.props.preTask');
    const preTask = this.props.preTask;
    const dictLength = preTask.split('\n').length;
    const firstRandomElement = Math.floor(Math.random() * (dictLength - 2)) + 1;
    const taskLength = 17;
    const newDict = preTask.split(/\r?\n/g);
    var preReadyDict = newDict[firstRandomElement] + ' ';
    for (let i = 1; i < taskLength; i++) {
      const randomElement = Math.floor(Math.random() * (dictLength - 2)) + 1;
      if (i !== (taskLength - 1)) {
        preReadyDict = preReadyDict + newDict[randomElement] + ' ';
      } else {
        preReadyDict = preReadyDict + newDict[randomElement];
      }
    }
    console.log(preReadyDict)
    this.props.grabDictionary(preReadyDict)
  }

  textCheckHandler = event => {
    let enteredValue = event.target.value;
    this.props.enteredValue();
    console.log(this.props.isError);
    const dictionary = this.props.dictionary;
    const dictLength = dictionary.length;
    const enteredLength = enteredValue.length;
    const toCheck = dictionary.substr(0, enteredLength);

    if (dictLength >= enteredLength && toCheck !== enteredValue) {
      this.props.error();
    } else if (dictLength < enteredLength && !enteredValue.includes(dictionary)) {
      this.props.error();
    } else {
      this.props.noError();
      if (dictLength < enteredLength) {
        this.grabDictionary('newtext');
        enteredValue = '';
        this.props.newTask();
      }
    }
  }

  render() {

    return (
      <div>
        <div className='Menu'>
          <DictSelectMenu
            className='rc-menu'
            placeholder={this.props.value}
            handleSelect={this.handleSelect}
          >
          </DictSelectMenu>
        </div>
        <TextInput
          isError={this.props.isError}
          changed={(event) => {
            this.textCheckHandler(event)
          }}
          value={this.props.inputValue}
        // ref={elem => this.textFocus = elem}
        />
        <div className='App'>
          <ShowTask task={this.props.dictionary} />
        </div>

        <div className="App" >
          <div>
            {this.props.error}
          </div>
        </div>

      </div>
    )
  }
}

const MapStateToProps = state => {
  return {
    value: state.value,
    isError: state.error,
    inputValue: state.inputValue,
    dictionary: state.dictionary,
    file: state.file,
    preTask: state.preTask,
    menuIsOpen: state.menuIsOpen,
    textLoaded: state.textLoaded
  };
};

const MapDispatchToProps = dispatch => {
  return {
    handleSelectStore: selectedOption => dispatch({ type: 'HANDLE_SELECT', selectedOption: selectedOption }),
    loadTextStore: allText => dispatch({ type: 'LOAD_TEXT', allText: allText }),
    grabDictionary: preReadyDict => dispatch({ type: 'GRAB_DICT', preReadyDict: preReadyDict }),
    enteredValue: enteredValue => dispatch({ type: 'ENTER_VALUE', toCheck: enteredValue, inputValue: enteredValue }),
    error: () => dispatch({ type: 'IS_ERROR' }),
    noError: () => dispatch({ type: 'NO_ERROR' }),
    newTask: () => dispatch({ type: 'NEW_TASK' })
  };
};


export default connect(MapStateToProps, MapDispatchToProps)(Boyarin);