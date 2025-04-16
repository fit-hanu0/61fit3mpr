import { createStore } from "redux";

export default createStore((state = {}, action) => {
    switch (action.type) {
        case 'todos/add': {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        }
        default:
            return state;
    };
}, {
    todos: ['Study', 'Watch TV', 'Have Dinner']
});