export default function callAPI(data){
    return new Promise((resolve, reject) => {
        const url = "http://localhost:3001/popularPostData";
        fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({blog_title: data.blog_title, blog_link: data.blog_link, img: data.img, blog_content: '', category_id: 5, views: 9999, created_at: '2020-03-06 09:07:40', updated_at: null})
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