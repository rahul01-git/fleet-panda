const loggedIn = localStorage.length;
if (!loggedIn) {
  alert("Please login to view to page !");
  window.location.href = "/app/login.html";
} else {
  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const postsDiv = document.querySelector(".posts");
    data.forEach((data) => {
      const divEl = document.createElement("div");
      const titleEl = document.createElement("h3");
      const bodyEl = document.createElement("p");

      titleEl.innerText = data.title;
      bodyEl.innerText = data.body;

      divEl.classList.add("post");
      titleEl.classList.add("title");
      bodyEl.classList.add("body");

      divEl.appendChild(titleEl);
      divEl.appendChild(bodyEl);

      postsDiv.appendChild(divEl);
    });
  }

  fetchPosts();
}
