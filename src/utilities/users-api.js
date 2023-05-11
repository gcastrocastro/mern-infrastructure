import sendRequest from './send-request.js';
const BASE_URL = '/api/users'; // this path is a serverside route, allowed in development due to the proxy in package.json

export async function signUp(userData){
    return sendRequest(BASE_URL, 'POST', userData);

    // const res = await fetch(BASE_URL, {
    //     //second arg in fetch can be an options object {}
    //     method: 'POST',
    //     //special mssg to provide additional details about request
    //     headers: {'Content-type': 'Application/json'}, 
    //     //converts js to text, necessary for sending data to database, on server side we then convert it to js again using express.json()
    //     body: JSON.stringify(userData)
    // }); 

    // if (res.ok) {
    //     return res.json();
    // } else {
    //     throw new Error('Invalid Sign Up');
    // }
}

export function login(credentials){
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken(credentials){
    return sendRequest(`${BASE_URL}/check-token`, 'GET', credentials);
}