import * as USERAPI from './users-api'; //imports all functionality from this file as a variable

export async function signUp(userData) {
    const token = await userAPI.signUp(userData);
    //TODO: more user service related tasks to be handled later
    return token;
}