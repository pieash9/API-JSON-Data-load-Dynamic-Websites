/* function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
} */

/* 
1. get the container element where you want to add the new element
2. create child element
3. set innerText or innerHTML
4. append child to the container
*/

/* function displayPost(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    console.log(post);
    const postDiv = document.createElement("div");
    postDiv.classList.add('post')
    postDiv.innerHTML = `
        <h4>User-${post.id}</h4>
        <h5>Post : ${post.title}</h5>
        <p><b> Post Descriptions: </b> ${post.body}</p>
    `;
    postContainer.appendChild(postDiv)
  }
}

loadPost();
 */

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPostData(data));
}
loadData();

function displayPostData(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    // console.log(post);
    const divPost = document.createElement("div");
    divPost.classList.add("post");
    divPost.innerHTML = `
    <h3>Post id : ${post.id}</h3>
    <h5>Post title : ${post.title}</h5>
    <p>Post Description : ${post.body}</p>
    
    `;
    postContainer.appendChild(divPost);
  }
}
