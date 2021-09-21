
const initialState = [{
    id: 1,
    task: 'Complete React course',
    done: false
}];

const todoReducer = (state = initialState, action) => {

    if(action?.type === 'addTodo') {
        return [...state, action.payload];
    }

    return state;
};

const newTodo = {
    id: 2,
    task: 'Complete Node course',
    done: false
};

const addTodoAction = {
    type: 'addTodo',
    payload: newTodo
};

let todos = todoReducer();
todos = todoReducer(todos, addTodoAction);

console.log(todos);
