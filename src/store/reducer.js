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
    currentValue: ''

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
            }

        case 'ENTER_VALUE':
            return {
                ...state,
                inputValue: action.inputValue,
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

        case 'IS_ERROR':
            return {
                ...state,
                error: 'error'
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