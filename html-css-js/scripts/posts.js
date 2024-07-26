import { requestApi } from "./request.js";
import { handleAuthentication } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const isloggedIn = handleAuthentication();
  if (!isloggedIn) {
    window.location.href = "/app/login.html";
  }

  async function fetchPosts() {
    const data = await requestApi("https://jsonplaceholder.typicode.com/posts");
    const imgData = await requestApi(
      "https://jsonplaceholder.typicode.com/photos"
    );

    const postsDiv = document.querySelector(".posts");
    data.forEach((data, i) => {
      const divEl = document.createElement("div");
      const titleEl = document.createElement("h3");
      const bodyEl = document.createElement("p");
      const imgContainerEl = document.createElement("div");
      const imageEl = document.createElement("img");
      const hrefEl = document.createElement("a");

      hrefEl.innerText = "read more ...";
      hrefEl.href = `/app/post.html?id=${data.id}`;
      titleEl.innerText = data.title;
      bodyEl.innerText = data.body;
      imageEl.src = imgData[i].url;

      divEl.classList.add("post");
      titleEl.classList.add("title");
      bodyEl.classList.add("body");
      imgContainerEl.classList.add("img-container");

      imgContainerEl.appendChild(imageEl);
      divEl.appendChild(imgContainerEl);
      divEl.appendChild(titleEl);
      divEl.appendChild(bodyEl);
      divEl.appendChild(hrefEl);

      setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
        postsDiv.appendChild(divEl);
      }, 1000);
    });
  }

  fetchPosts();
});
