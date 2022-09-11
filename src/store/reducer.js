import {EDIT_TODO_INPUT, ADD_TODO, REMOVE_TODO, SET_TODO_INPUT } from "./constants";

const initState = {
    todos : [],
    todoInput : '',
}

function reducer(state , action) {
    switch (action.type) {
        case SET_TODO_INPUT: 
            return { 
                ...state, 
                todoInput : action.payload 
            }
        case ADD_TODO: 
            return { 
                ...state, 
                todos : [action.payload,...state.todos] 
            }  
        case REMOVE_TODO :
            let states = [...state.todos];
            return {  
                ...state,  
                todos : states.filter( val => val !== action.payload )
            }
        case EDIT_TODO_INPUT : 
            console.log(action.index);
            console.log(action.payload);
            let state_edit = [...state.todos];
            state_edit[action.index] = action.payload;
            return { 
                ...state, 
                todos : state_edit
            } 
        default : 
            throw new Error('invalid action')
    }
}

export { initState }
export default reducer;






