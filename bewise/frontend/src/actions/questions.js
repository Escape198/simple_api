import axios from 'axios';
import { GET_QUESTIONS_LIST, DELETE_QUESTIONS, ADD_QUESTIONS, TOGGLE_QUESTIONS } from '../actions/types';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


export const getQuestions = () => dispatch => {
    axios.get('api/main/')
        .then(result => {
            dispatch({
                type: GET_QUESTIONS_LIST,
                payload: result.data
            });
        }).catch(err => console.log(err));
};

export const deleteQuestions = (id) => dispatch => {
    axios.delete(`api/main/${id}/`)
        .then(result => {
            dispatch({
                type: DELETE_QUESTIONS,
                payload: id
            });
        }).catch(err => console.log(err));
};


export const addQuestions = (questions) => dispatch => {
    axios.post('api/main/', questions)
        .then(result => {
            dispatch({
                type: ADD_QUESTIONS,
                payload: result.data,
            });
        }).catch(err => console.log(err));
};


export const toggleQuestions = (questions) => dispatch => {
    questions.done = !questions.done;
    axios.put(`api/main/${questions.id}/`, questions)
        .then(result => {
            dispatch({
                type: TOGGLE_QUESTIONS,
                payload: result.data,
            });
        }).catch(err => console.log(err));
};
