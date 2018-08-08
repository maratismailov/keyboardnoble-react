import React, { Component } from 'react';
import TextInput from './TextInput';
import ShowTask from './ShowTask';
import Menu, { SubMenu, MenuItem } from 'rc-menu';

import '../Style.css';
import '../rc-menu.css';

class Boyarin extends Component {
  state = {
    text: 'the quick brown fox jumps over the lazy dog',
    dictionary: 'the quick brown fox jumps over the lazy dog',
    toCheck: null,
    error: null,
    newDictionary: null,
    file: require('../dictionary/rui_top200.txt'),
    inputValue: '',
    value: 'Русский интернет-корпус топ 200',
    
    menuIsOpen: true
  }

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.loadText(this.state.file);
    this.textInput.focus();
  }
  
  // componentDidUpdate() {
  //   // this.textInput.current.focusTextInput();
  //   this.focusTextInput;
  // }
  // focusTextInput() {
  //   // Explicitly focus the text input using the raw DOM API
  //   // Note: we're accessing "current" to get the DOM node
  //   this.textInput.focus();
  // }
  
  // handleDictSelect = (selectedOption) => {
  //   this.setState({ file: selectedOption.value }, () => this.loadText(this.state.file));
  //   this.setState({ value: selectedOption.label })
  // }

  handleSelect = (selectedOption) => {
    this.setState({ file: selectedOption.key }, () => this.loadText(this.state.file))
    this.setState({ inputValue: ''})
    this.setState({ error: null })
    this.setState({ value: selectedOption.item.props.children })
    this.setState({ menuIsOpen: false })

    console.log(selectedOption.title);
    console.log(this.state.menuIsOpen);
    console.log(`Selected: ${selectedOption.item.props.children}`);
  }

  loadText = path => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;
      const allText = xhr.responseText;
      this.setState({ preTask: allText }, () => this.grabDictionary());
    }
    xhr.send(null);
  }

  grabDictionary = () => {
    const preTask = this.state.preTask
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
    this.setState({ dictionary: preReadyDict });
  }

  textCheckHandler = event => {
    const enteredValue = event.target.value
    this.setState({
      toCheck: enteredValue,
      inputValue: enteredValue,
    });
    const dictionary = this.state.dictionary;
    const dictLength = dictionary.length;
    const enteredLength = enteredValue.length;
    const toCheck = dictionary.substr(0, enteredLength);

    if (dictLength >= enteredLength && toCheck !== enteredValue) {
      this.setState({ error: 'Error' });
    } else if (dictLength < enteredLength && !enteredValue.includes(dictionary)) {
      this.setState({ error: 'Error' })
    } else {
      this.setState({ error: null });
      if (dictLength < enteredLength) {
        this.grabDictionary('newtext');
        this.setState({ inputValue: '' });
      }
    }
  }

  render() {
    var placeholder = <span>{this.state.value}</span>;

    const DictSelectMenu = (
      <Menu
        // multiple
        onClick={this.handleSelect}
        triggerSubMenuAction={'click'}
        // visible = {this.state.menuIsOpen}
      >
        <SubMenu title={placeholder} key="1" className='rc-menu-main' visible = {this.state.menuIsOpen}>
          <SubMenu title='Списки частотности/Русский интернет-корпус' key="5" className='MenuElement' popupVisible = {this.state.menuIsOpen}>
            <MenuItem key={require('../dictionary/rui_top100.txt')} visible = {this.state.menuIsOpen}>Русский интернет-корпус топ 100 </MenuItem>
            <MenuItem key={require('../dictionary/rui_top200.txt')}>Русский интернет-корпус топ 200</MenuItem>
            <MenuItem key={require('../dictionary/rui_top500.txt')}>Русский интернет-корпус топ 500</MenuItem>
            <MenuItem key={require('../dictionary/rui_top1000.txt')}>Русский интернет-корпус топ 1000</MenuItem>
            <MenuItem key={require('../dictionary/rui_top2000.txt')}>Русский интернет-корпус топ 2000</MenuItem>
            <MenuItem key={require('../dictionary/rui_top5000.txt')}>Русский интернет-корпус топ 5000</MenuItem>
          </SubMenu>
          <SubMenu title='Списки частотности/Национальный корпус русского языка' key="2" className='MenuElement'isOpen = {this.state.menuIsOpen}>
            <MenuItem key={require('../dictionary/rlnc_top100.txt')}>Национальный корпус русского языка топ 100</MenuItem>
            <MenuItem key={require('../dictionary/rlnc_top200.txt')}>Национальный корпус русского языка топ 200</MenuItem>
            <MenuItem key={require('../dictionary/rlnc_top500.txt')}>Национальный корпус русского языка топ 500</MenuItem>
            <MenuItem key={require('../dictionary/rlnc_top1000.txt')}>Национальный корпус русского языка топ 1000</MenuItem>
            <MenuItem key={require('../dictionary/rlnc_top2000.txt')}>Национальный корпус русского языка топ 2000</MenuItem>
            <MenuItem key={require('../dictionary/rlnc_top5000.txt')}>Национальный корпус русского языка топ 5000</MenuItem>
            <MenuItem key={require('../dictionary/rlnc_top10000.txt')}>Национальный корпус русского языка топ 10000</MenuItem>
          </SubMenu>
          <SubMenu title='Frequency lists/Contemporary fiction' key="3" className='MenuElement' isOpen = {this.state.menuIsOpen}>
            <MenuItem key={require('../dictionary/contemp_fiction_top100.txt')}>Contemporary fiction top 100</MenuItem>
            <MenuItem key={require('../dictionary/contemp_fiction_top200.txt')}>Contemporary fiction top 200</MenuItem>
            <MenuItem key={require('../dictionary/contemp_fiction_top300.txt')}>Contemporary fiction top 300</MenuItem>
            <MenuItem key={require('../dictionary/contemp_fiction_top500.txt')}>Contemporary fiction top 500</MenuItem>
            <MenuItem key={require('../dictionary/contemp_fiction_top1000.txt')}>Contemporary fiction top 1000</MenuItem>
            <MenuItem key={require('../dictionary/contemp_fiction_top2000.txt')}>Contemporary fiction top 2000</MenuItem>
          </SubMenu>
          <SubMenu title='Frequency lists/Project Gutenberg' key="4" className='MenuElement' isOpen = {this.state.menuIsOpen}>
            <MenuItem key={require('../dictionary/project_gutenberg_top100.txt')}>Project Gutenberg top 100</MenuItem>
            <MenuItem key={require('../dictionary/project_gutenberg_top1000.txt')}>Project Gutenberg top 1000</MenuItem>
            <MenuItem key={require('../dictionary/project_gutenberg_top2000.txt')}>Project Gutenberg top 2000</MenuItem>
            <MenuItem key={require('../dictionary/project_gutenberg_top5000.txt')}>Project Gutenberg top 5000</MenuItem>
            <MenuItem key={require('../dictionary/project_gutenberg_top10000.txt')}>Project Gutenberg top 10000</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    );

    return (
      <div>
        <div className='Menu'>
          <div className='rc-menu'>{DictSelectMenu}</div>
        </div>
        <TextInput
          // autofocus="true"
          isError={this.state.error}
          changed={(event) => {
            this.textCheckHandler(event)
          }}
          value={this.state.inputValue}
          ref={this.textInput} 
          autoFocus
        />
        <div className='App'>
          <ShowTask task={this.state.dictionary} />
        </div>

        <div className="App" >
          <div>
            {this.state.error}
          </div>
        </div>

      </div>
    )
  }
}

export default Boyarin;