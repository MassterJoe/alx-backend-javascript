export default function handleResponseFromAPI(promise) {
    return new Promise((resolve, reject) => {
        if (promise) {
            const obj = {
                status: 200,
                body: 'success'
            }
            resolve(obj);
        } else {
            reject(new Error({}));
        }
    })
        .finally((response) => {
            console.log("Got a response from the API");
        });
}