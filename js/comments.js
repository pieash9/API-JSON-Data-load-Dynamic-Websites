function loadComment() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((datas) => displayComment(datas));
}
loadComment();

function displayComment(datas) {
  const commentContainer = document.getElementById("comment-container");
  for (const data of datas) {
    console.log(data);
    const div = document.createElement("div");
    div.classList.add("bg-blue-300");
    div.classList.add("p-5");
    div.classList.add("rounded-xl");
    div.innerHTML = `
    <p class = "text-center underline">Comment : ${data.id}</p>
        <h2 class="text-2xl">Name : ${data.name}</h2>
        <p>Comment : ${data.body}</p>
        
        `;
    commentContainer.appendChild(div);
  }
}
