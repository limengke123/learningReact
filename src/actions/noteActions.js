import * as actionTypes from './actionTypes';

const addTodo = text => ({
    type: actionTypes.ADD_TODO,
    payload: text
});

const todoToDoing = id => ({
    type: actionTypes.CHANGE_TODO_TO_DOING,
    payload: id
});

const doingToDone = id => ({
    type: actionTypes.CHANGE_DOING_TO_DONE,
    payload: id
});

const doneToDoing = id => ({
    type: actionTypes.CHANGE_DONE_TO_DOING,
    payload: id
});

const doingToTodo = id => ({
    type: actionTypes.CHANGE_DONE_TO_DOING,
    payload: id
});
const deleteTodo = id => ({
    type: actionTypes.DELETE_TODO,
    payload: id
});
export default {
    addTodo,
    todoToDoing,
    doingToDone,
    doneToDoing,
    doingToTodo,
    deleteTodo,
}