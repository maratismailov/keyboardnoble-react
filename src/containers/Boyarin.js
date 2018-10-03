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
    this.state = { currentValue: '', correctValue: '', correctValue2: '', index: 0, inputValue: '', inputValue2: '' }
  }
  componentDidMount() {
    this.loadText(this.props.file);
  }

  componentDidUpdate(prevProps) {
    if (this.props.file !== prevProps.file) {
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

  handleSelect = event => {
    const file = event.target.dataset.file
    const name = event.target.dataset.name
    this.props.handleSelectStore(file, name);
    // console.log(event.target.dataset.value)
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
    const taskLength = 18;
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
    this.setState({ currentValue: '', correctValue: '', correctValue2: '', index: 0, inputValue: '', inputValue2: '' })
  };

  enterValueHandler = enteredValue => {
    this.props.enteredValue(enteredValue)
  }

  // getValueHandler = (toCheckValue) => {
  //   this.toCheckValue = this.props.inputValue;
  //   return toCheckValue;
  // }

  stateIndexUpdader = (toCheckValue, inputValue) => {
    this.setState({ index: this.state.index + 1, correctValue2: this.state.correctValue2 + toCheckValue, inputValue2: this.state.inputValue2 + toCheckValue })
    // console.log('stateIndexUpdater', 'index: ', this.state.index, 'value: ', this.state.correctValue )
  }

  stateIndexZeroer = (toCheckValue) => {
    this.setState({ index: 0, correctValue: '', correctValue2: '', inputValue2: '', inputValue: '' });
    // console.log('stateIndexZeroer', 'index: ', this.state.index)
  }

  correctValueUpdater = (correctValue) => {
    this.setState({ correctValue: correctValue })
  }

  inputValueUpdater = (toCheckValue) => {
    this.setState({ inputValue: toCheckValue })
  }

  // const goodValue = this.props.inputValue.substring(
  //   0,
  //   this.props.correctValue.length
  // );
  // const badValue = this.props.inputValue.substring(
  //   this.props.correctValue.length
  // );
  // const fullValue = this.props.dictionary.substring(
  //   this.props.correctValue.length + badValue.length,
  //   this.props.dictionary.length
  // );

  textCheckHandler = event => {
    var dictArray = this.props.dictionary.split(' ')
    var toCheckValue = event.target.value;
    var index = this.state.index;
    if (index < 1) {
      var correctValue = '';
      var inputValue = '';
    }
    else {
      var correctValue = this.state.correctValue
      var inputValue = this.state.inputValue
    }
    inputValue = this.state.inputValue2 + toCheckValue;

    const dictLength = dictArray[index].length;
    const enteredLength = toCheckValue.length;
    var dictArrayLength = dictArray.length;
    this.enterValueHandler(toCheckValue);
    const dictionary = this.props.dictionary;
    const toCheck = dictArray[index].substr(0, enteredLength);
    var toCheckValue3 = '';
    // var correctValue = this.state.correctValue;
    // var correctValue = '';
    var correctValue2 = '';
    // console.log(this.state.correctValue)
    this.inputValueUpdater(inputValue);


    if (dictLength >= enteredLength && toCheck !== toCheckValue) {
      this.props.error();
    } else if (
      dictLength < enteredLength &&
      !toCheckValue.includes(dictArray[index])
    ) {
      this.props.error();
    }
    else if (dictLength < enteredLength && !toCheckValue.includes(' ')) {
      this.props.error()
    }


    else {
      // if ()
      correctValue = this.state.correctValue2 + toCheckValue
      this.correctValueUpdater(correctValue);

      // correctValue = this.state.correctValue2 + toCheckValue;
      if (event.target.value.includes(' ')) {
        console.log(dictLength, enteredLength)


        this.correctValueUpdater(correctValue);
        console.log(this.state.correctValue)

        // correctValue = correctValue + event.target.value;
        this.stateIndexUpdader(toCheckValue, inputValue);
        correctValue = this.state.correctValue2 + toCheckValue;

        // console.log('value: ', correctValue)
        if (dictArrayLength === index + 1) {
          correctValue = ''
          // console.log('zero', dictArrayLength, index, 'value: ', correctValue)
          this.grabDictionary("newtext");
          toCheckValue = "";
          this.props.newTask();
          this.props.clearCorrectValue();
          this.stateIndexZeroer();
        }
      }
      // else {
      //   correctValue = correctValue + correctValue2
      // }

      this.props.loadCorrectValue(toCheckValue);
      this.props.noError();
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
      isError = "Input";
    } else {
      isError = "Error";
    }
    const goodValue = this.state.inputValue.substring(
      0,
      this.state.correctValue.length
    );
    const badValue = this.props.dictionary.substring(
      this.state.correctValue.length,
      this.state.inputValue.length
    );
    const fullValue = this.props.dictionary.substring(
      this.state.correctValue.length + badValue.length,
      this.props.dictionary.length
    );
    // span.innerHTML = value.substring(0, 3) + '<span class="red">' + value.substring(2) + '</span>'

    return (
      <div>
        <div className="Menu">
          <DictSelectMenu
            className="rc-menu"
            placeholder={this.props.name}
            handleSelect={this.handleSelect}
            // value={this.props.value}
          />
        </div>
        <div>
          {/* <div>
            correctValue: {this.state.correctValue}
          </div>
          <div>
            correctValue2: {this.state.correctValue2}
          </div>
          <div>
            inputValue: {this.state.inputValue}
          </div>
          <div>
            inputValue2: {this.state.inputValue2}
          </div> */}
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
          <input className='Input'
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
          {/* {this.props.currentValue} */}
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
    name: state.name,
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
    handleSelectStore: (file, name) =>
      dispatch({ type: "HANDLE_SELECT", file: file, name: name }),
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
