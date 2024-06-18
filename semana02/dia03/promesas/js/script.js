
const url = "https://jsonplaceholder.typicode.com/posts";


fetch(url)
    .then(response => response.json())
    .then((post=[]) => {
        // console.log(data)
        const appDiv = document.querySelector(".app");
        let postList = "";
        post.forEach(element => {
            // console.log(element);
            postList += `<div>
            <h2>${element.id} - ${element.title}: </h2>
            <p>${element.body}</p>
            </div>`;
            
            appDiv.innerHTML = postList;
        });
    })
    .catch(error => console.log(error))
