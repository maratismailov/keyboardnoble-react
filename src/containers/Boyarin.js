import React, { Component } from "react";
import axios from "axios";
import TextInput from "./TextInput";
import ShowTask from "../components/ShowTask";
import { connect } from "react-redux";
import DictSelectMenu from "../assets/Menu";

import "../Style.css";
import "../rc-menu.css";

var toCheckValue = '';

class Boyarin extends Component {
  constructor(props) {
    super(props)
    this.state = { currentValue: '', toCheckValue: '' , index: 0 }
  }
  componentDidMount() {
    this.loadText(this.props.file);
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.loadText(this.props.file);
    }
    // if (this.props.inputValue !== prevProps.inputValue) {
    //   // this.setState({ toCheckValue: this.props.inputValue})
    //   // console.log('toCheckValue:'+this.state.toCheckValue);
    //   // console.log(this.props.inputValue)
    //   const toCheckValue = this.props.inputValue
    //   this.getValueHandler(toCheckValue);
    // }
  }

  handleSelect = selectedOption => {
    this.props.handleSelectStore(selectedOption);
  };

  loadText = path => {
    axios.get(path).then(allText => {
      this.props.loadTextStore(allText.data);
      this.grabDictionary();
    });
  };

  grabDictionary = () => {
    // console.log("this.props.preTask");
    const preTask = this.props.preTask;
    const dictLength = preTask.split("\n").length;
    const firstRandomElement = Math.floor(Math.random() * (dictLength - 2)) + 1;
    const taskLength = 17;
    const newDict = preTask.split(/\r?\n/g);
    var preReadyDict = newDict[firstRandomElement] + " ";
    for (let i = 1; i < taskLength; i++) {
      const randomElement = Math.floor(Math.random() * (dictLength - 2)) + 1;
      if (i !== taskLength - 1) {
        preReadyDict = preReadyDict + newDict[randomElement] + " ";
      } else {
        preReadyDict = preReadyDict + newDict[randomElement];
      }
    }
    // console.log(preReadyDict);
    this.props.grabDictionary(preReadyDict);
  };

  enterValueHandler = enteredValue => {
    this.props.enteredValue(enteredValue)
  }

  // getValueHandler = (toCheckValue) => {
  //   this.toCheckValue = this.props.inputValue;
  //   return toCheckValue;
  // }


  textCheckHandler = event => {
    var toCheckValue = event.target.value;
    var dictArray = this.props.dictionary.split(' ')
    // var reReversedString = preCurrentValue.split(" ").reverse()[0];
    var index = this.state.index;
    console.log(dictArray[index])
    this.enterValueHandler(toCheckValue);
    // const toCheckValue = this.state.toCheckValue;
    const dictionary = this.props.dictionary;
    // const dictLength = dictionary.length;
    const dictLength = dictArray[index].length;
    const enteredLength = toCheckValue.length;
    // const toCheck = dictionary.substr(0, enteredLength);
    const toCheck = dictArray[index].substr(0, enteredLength);
    var toCheckValue3 = '';
    var toCheckValue2 = '';
    var correctValue = '';
    var correctValue2 = '';

    if (dictLength >= enteredLength && toCheck !== toCheckValue) {
      this.props.error();
      console.log('error1')
      console.log(index)
      console.log(toCheck)
      console.log(toCheckValue)
    } else if (
      dictLength < enteredLength &&
      !toCheckValue.includes(dictArray[index])
    ) {
      this.props.error();
      console.log('error2')
    } else {
      if (event.target.value.includes(' ')) {
        correctValue2 = event.target.value;
        this.setState ({ index: index+1 })
        console.log(event.target.value)
        console.log('space')
        console.log(index)
      }
      else {
        correctValue = correctValue + correctValue2
      }

      this.props.loadCorrectValue(toCheckValue);
      this.props.noError();
      if (dictLength < enteredLength) {
        // this.grabDictionary("newtext");
        // enteredValue = "";
        // this.props.newTask();
        // this.props.clearCorrectValue();
        // index = index +1;
      }
      // if (event.which)
      // console.log(event.key);
    }
  };

  taskRefreshHandler = event => {
    // this.setState ({currentValue: this.props.currentValue})
    // currentValue = event.target.value
    // currentValuetoStore()
    // console.log(event.target.value)
    if (this.props.isError === null && event.which === 32) {
      // this.setState ({currentValue: ''})
      // console.log('noerror')
      // this.props.refreshTaskInStore()
    }
  }

  render() {
    let isError = "App";
    if (this.props.isError == null) {
      isError = "App";
    } else {
      isError = "Error";
    }
    const goodValue = this.props.inputValue.substring(
      0,
      this.props.correctValue.length
    );
    const badValue = this.props.inputValue.substring(
      this.props.correctValue.length
    );
    const fullValue = this.props.dictionary.substring(
      this.props.correctValue.length + badValue.length,
      this.props.dictionary.length
    );
    // span.innerHTML = value.substring(0, 3) + '<span class="red">' + value.substring(2) + '</span>'

    return (
      <div>
        <div className="Menu">
          <DictSelectMenu
            className="rc-menu"
            placeholder={this.props.value}
            handleSelect={this.handleSelect}
          />
        </div>
        <div className="App">
          <span className="GoodValue">{goodValue}</span>
          <span className="BadValue">{badValue}</span>
          <span className="FullValue">{fullValue}</span>
        </div>
        {/* <div className='App'>
          <ShowTask task={this.props.dictionary} />
        </div> */}
        {/* <div className='App2'>
          {this.props.inputValue}
        </div> */}
        <div>
          <input className='App'
            onKeyUp={event => {
              this.taskRefreshHandler(event);
            }}
            onChange={event => {
              this.textCheckHandler(event);
            }}
            value={this.props.currentValue}
            className={isError}
          />
        </div>
        <div>
          {this.props.currentValue}
        </div>
        {/* <TextInput
          // className='App'
          isError={this.props.isError}
          changed={(event) => {
            this.textCheckHandler(event)
          }}
          value={this.props.inputValue}
        // ref={elem => this.textFocus = elem}
        /> */}
        <div className="App">
          <div>{this.props.error}</div>
        </div>
      </div>
    );
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
    textLoaded: state.textLoaded,
    correctValue: state.correctValue,
    currentValue: state.currentValue
  };
};

const MapDispatchToProps = dispatch => {
  return {
    handleSelectStore: selectedOption =>
      dispatch({ type: "HANDLE_SELECT", selectedOption: selectedOption }),
    loadTextStore: allText => dispatch({ type: "LOAD_TEXT", allText: allText }),
    grabDictionary: preReadyDict =>
      dispatch({ type: "GRAB_DICT", preReadyDict: preReadyDict }),
    enteredValue: enteredValue =>
      dispatch({ type: "ENTER_VALUE", inputValue: enteredValue }),
    error: () => dispatch({ type: "IS_ERROR" }),
    noError: () => dispatch({ type: "NO_ERROR" }),
    refreshTaskInStore: () => dispatch({ type: "REFRESH_TASK" }),
    newTask: () => dispatch({ type: "NEW_TASK" }),
    loadCorrectValue: toCheckValue =>
      dispatch({ type: "CORRECT_VALUE", inputValue: toCheckValue }),
    clearCorrectValue: () => dispatch({ type: "CLEAR_CORRECT_VALUE" })
  };
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Boyarin);
