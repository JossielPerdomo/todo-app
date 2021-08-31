
export const todoReducer = (state = [], action) => {
    
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        
        case "update":
            return state.map(todo => 
                (todo.id === action.payload.id)
                ? {...todo, text: action.payload.value}
                : state
            );

        case "delete":
            return state.filter(todo => todo.id !== action.payload);

        case "toggle":
            return state.map(todo => (
                todo.id === action.payload 
                ? {...todo, isComplete: !todo.isComplete}
                : todo
            ));

        default:
            return state;
    }

}
