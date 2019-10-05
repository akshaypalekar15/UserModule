export const userLogin = (isLoggedIn) => {
    return {
        type: 'LOGIN',
        payload: isLoggedIn
    };
}

export const userLogout = (isLoggedIn) => {
    return {
        type: 'LOGOUT',
        payload: isLoggedIn
    }
}