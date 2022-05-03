import { GET_QUESTIONS_LIST, DELETE_QUESTIONS, ADD_QUESTIONS, TOGGLE_QUESTIONS } from '../actions/types.js';

const initialState = {
    questions: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS_LIST:
            return {
                ...state,
                questions: action.payload
            };
        case DELETE_QUESTIONS:
            return {
                ...state,
                questions: state.questions.filter(questions => questions.id != action.payload)
            }
        case ADD_QUESTIONS:
            return {
                ...state,
                questions: [...state.questions, action.payload],
            };
        case TOGGLE_QUESTIONS:
            return {
                ...state,
                questions: [...state.questions],
            };
        default:
            return state;
    }
}
