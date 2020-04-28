export default function callAPI(data){
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/feedbacks/" + data.id;
        fetch(url, {
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({classname: data.classname, content: data.comment , img: data.img})
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