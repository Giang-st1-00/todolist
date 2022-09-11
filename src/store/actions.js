import { EDIT_TODO_INPUT, SET_TODO_INPUT , ADD_TODO , REMOVE_TODO} from "./constants";

export const setTodoInput = payload => ({
    type : SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type : ADD_TODO, 
    payload
})

export const removeTodo = (payload,index) => ({
    type : REMOVE_TODO, 
    payload, 
    index
})

export const editTodoInput = (payload,index) => ({
    type : EDIT_TODO_INPUT,
    payload,
    index
})





