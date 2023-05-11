import * as userAPI from './users-api'; //imports all functionality from this file as a variable

export async function signUp(userData) {
    const token = await userAPI.signUp(userData);
    
    localStorage.setItem('token', token);

    return token;
}

export function getToken() {
    //attempt to get token from localstorage
    const token = localStorage.getItem('token');
    //this can be null when user hasn't logged in before 
    if (!token) return null;
    // if token is retrieved, 
        //decode the payload from token so we can check if it's still valid (or expired)
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000){
        //if not valid, we remove the token
        localStorage.removeItem('token');
        return null;
    } 
    // else return token
    return token;
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}