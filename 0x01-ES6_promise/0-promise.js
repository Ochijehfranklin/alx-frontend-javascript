export default function getResponseFromAPI(){
    const succeed = true;
    return new Promise((resolve, reject) => {
        if (succeed){
            resolve("It was a success");
        } else {
            reject("it was not good");
        }
    });
}
