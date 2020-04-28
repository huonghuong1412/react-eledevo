export default function callAPI(data){
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/homeCompanyInfo";
        fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({quotesTitle: data.quotesTitle, quotesDescription: data.quotesDescription, bgImage: data.bgImage, counterStudentJoin: data.counterStudentJoin, counterCoursesComplete: data.counterCoursesComplete, counterStudentHaveJob: data.counterStudentHaveJob})
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