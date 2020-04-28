export default function callAPI(text){
    return new Promise((resolve, reject) => {
        console.log("texttttt" + text)
        const url = `http://localhost:3001/differences?title_like=${text}`;
        // const url = `http://localhost:3001/slides?q=${text}`;
        fetch(url, {
            method: "GET"
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
            console.log(res);
        })
        .catch((error) => {
            reject(error);
        })
    })
}