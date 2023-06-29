export default function handleResponseFromAPI(promise) {
    return new Promise((resolve, reject) => {
        if (promise) {
            const obj = {
                status: 200,
                body: 'success'
            }
            resolve(obj);
        } else {
            const obj2 = {} 
            reject(new Error(obj2));
        }
    })
        .finally((response) => {
            console.log("Got a response from the API");
        });
}