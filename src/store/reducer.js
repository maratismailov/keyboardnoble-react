const initialState = {
    // text: 'the quick brown fox jumps over the lazy dog',
    dictionary: 'the quick brown fox jumps over the lazy dog',
    // toCheck: null,
    error: null,
    // newDictionary: null,
    file: require('../dictionary/rui_top200.txt'),
    inputValue: '',
    value: 'Русский интернет-корпус топ 200',
    preTask: 'Pretask test text7',
    task: null,
    textLoaded: false,
    preReadyDict: 'preReadyDict',
    correctValue: '',
    currentValue: '',
    input2Value: '',
    correct2Value: '',
    input3Value: ''

    // menuIsOpen: true
}
const reducer = (state = initialState, action) => {
    // console.log(action.allText)
    switch (action.type) {
        case 'HANDLE_SELECT':
            return {
                ...state,
                file: action.selectedOption.key,
                inputValue: '',
                error: null,
                value: action.selectedOption.item.props.children,
                menuIsOpen: false
            }

        case 'LOAD_TEXT':
            return {
                ...state,
                preTask: action.allText,
                textLoaded: true
            }

        case 'GRAB_DICT':
            return {
                ...state,
                dictionary: action.preReadyDict,
                currentValue: '',
                correctValue: ''
            }

        case 'ENTER_VALUE':
            state.input2Value = state.input3Value + action.inputValue
            const preCurrentValue = action.inputValue;
            // if (state.currentValue.length === 0) {
            //     // state.input2Value = action.inputValue;
            //     console.log('empty')
            // }
            // const reverseString = str => {
            //     return str.split("").reverse().join("");
            // }
            if (state.error === null) {
                if (action.inputValue.includes(' ')) {
                    // state.input2Value = state.input2Value.concat(action.inputValue)
                    state.input3Value = action.inputValue
                }
                else {
                    // state.input2Value = state.correctValue.substring(0) action.inputValue
                    // const goodValue = this.props.inputValue.substring(
                    //     0,
                    //     this.props.correctValue.length
                    // );
                }
                var reReversedString = preCurrentValue.split(" ").reverse()[0];

            }
            else {
                var reReversedString = state.correctValue.split(' ').reverse()[0] + preCurrentValue.replace(state.correctValue, '')
            }
            // const reReversedString = reversedArray[0]
            // console.log(reReversedArray)

            return {
                ...state,
                inputValue: action.inputValue,
                currentValue: reReversedString
            }

        case 'CORRECT_VALUE':
            return {
                ...state,
                correctValue: action.inputValue
            }

        case 'CLEAR_CORRECT_VALUE':
            return {
                ...state,
                correctValue: ''
            }

        case 'REFRESH_TASK':
            return {
                ...state,
                currentValue: ''
            }

        case 'IS_ERROR':
            return {
                ...state,
                error: 'error',
                currentValue: state.correctValue.split(' ').reverse()[0] + state.inputValue.replace(state.correctValue, '')
            }

        case 'NO_ERROR':
            return {
                ...state,
                error: null
            }

        case 'NEW_TASK':
            return {
                ...state,
                inputValue: ''
            }


    };

    return state;
};

export default reducer;