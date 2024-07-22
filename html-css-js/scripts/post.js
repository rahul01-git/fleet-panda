const loggedIn = localStorage.length;
if (!loggedIn) {
  alert("Please login to view to page !");
  window.location.href = "/app/login.html";
} else {
  async function fetchpost() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const imageRes = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    const data = await response.json();
    const imgData = await imageRes.json();

    document.title = data.title;

    const divEl = document.querySelector(".post");
    const imgContainerEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const postDetailEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    const bodyEl = document.createElement("p");

    divEl.classList.add("post");
    imgContainerEl.classList.add("img-container");
    postDetailEl.classList.add("post-detail");
    titleEl.classList.add("title");
    bodyEl.classList.add("body");

    imgEl.src = imgData.url;
    imgContainerEl.appendChild(imgEl);

    titleEl.innerText = data.title;
    bodyEl.innerText = data.body;

    postDetailEl.appendChild(titleEl);
    postDetailEl.appendChild(bodyEl);

    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
      divEl.appendChild(imgContainerEl);
      divEl.appendChild(postDetailEl);
    }, 1000);
  }
  fetchpost();
}
