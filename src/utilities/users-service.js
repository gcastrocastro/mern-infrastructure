import * as userAPI from './users-api'; //imports all functionality from this file as a variable

export async function signUp(userData) {
    const token = await userAPI.signUp(userData);
    
    localStorage.setItem('token', token);
    
    return token;
}