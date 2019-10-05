const InitialState = {
    isLoggedIn: false,
}


const rootReducer = (state = InitialState, action) => {
    debugger;
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state,
                isLoggedIn: action.payload
            }
        
        case 'LOGOUT':
            return{
                ...state,
                isLoggedIn: action.payload
            }
            
        default:
            return { ...state };
    }
}

export default rootReducer;