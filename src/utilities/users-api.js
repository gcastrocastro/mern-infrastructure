const BASE_URL = '/api/users'; // this path is a serverside route, allowed in development due to the proxy in package.json

export async function signUp(userData){
    const res = await fetch(BASE_URL, {
        //second arg in fetch can be an options object {}
        method: 'POST',
        headers: {'Content-type': 'Application/json'}, //special mssg to provide additional details about request
        body: JSON.stringify(userData) //converts js to text, necessary for sending data to database, on server side we then convert it to js again using express.json()
    }); 

    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Sign Up');
    }
}