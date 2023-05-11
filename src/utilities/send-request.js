import {getToken} from './users-service';

export default async function sendRequest(url, method = 'GET', payload = null){
    //fetch accepts an options obj as the 2nd argument
    //used to include a data payload, set headers, 

    const options = { method };
    if (payload) {
        options.headers = {'Content-Type': 'application/json'};
        options.body = JSON.stringify(payload);
    }

    const token = getToken();
    if (token){
        options.headers = options.headers || {};
        //code above results in the same as the code below, just written shorter
        // options.headers ||= {};
        //prefacing with 'Bearer ' is recommended in HTTP specification 
        options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options)

    //res.ok will be false if the status code set to 400
    if(res.ok) return res.json();
    //this throws a 400 error in the network tab
    throw new Error('Bad Request');
}