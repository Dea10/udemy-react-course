
export const todoReducer = (state = [], action) => {

    const {type, payload} = action;

    switch (type) {
        case 'addTask':
            return [...state, payload];

        case 'deleteTask':
            return state.filter(todo => todo.id !== payload);

        case 'toggle':
            return state.map(todo => 
                    todo.id === payload 
                    ? {...todo, done: !todo.done} 
                    : todo
                )

        default:
            return state;
    }

}