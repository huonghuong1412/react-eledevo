export default function callAPI(data){
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/benefits";
        fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({title: data.title, description: data.description, link: data.link, img: data.img})
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