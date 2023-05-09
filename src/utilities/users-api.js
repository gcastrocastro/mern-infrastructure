const BASE_URL = '/api/users'; // this path is a serverside route, allowed in development due to the proxy in package.json

export async function signUp(userData){
    const res = await fetch(BASE_URL, {
        //second arg in fetch can be an options object {}
        method: 'POST',
        headers: {'Content-type': 'Application/json'}, //special mssg to provide additional details about request
        body: JSON.stringify(userData)
    }); 

    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Sign Up')
    }
}