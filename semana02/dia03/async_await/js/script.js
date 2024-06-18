
const url = "https://jsonplaceholder.typicode.com/posts";



const fetchPosts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


const renderPosts = async () => {
    const posts = await fetchPosts();
    const appDiv = document.querySelector(".app");
    let postList = "";
    posts.forEach(element => {
        // console.log(element);
        postList += `<div>
        <h2>${element.id} - ${element.title}: </h2>
        <p>${element.body}</p>
        </div>`;
        
        appDiv.innerHTML = postList;
    });
}   

renderPosts();
