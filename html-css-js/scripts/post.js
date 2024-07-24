import { requestApi } from "./request.js";
import { handleAuthentication } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const isloggedIn = handleAuthentication();
  if (!isloggedIn) {
    window.location.href = '/app/login.html'
  }

  async function fetchPost() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const data = await requestApi(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const imgData = await requestApi(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );

    document.title = data.title;

    const divEl = document.querySelector(".post");
    const imgContainerEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const postDetailEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    const bodyEl = document.createElement("p");

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

  fetchPost();
});
