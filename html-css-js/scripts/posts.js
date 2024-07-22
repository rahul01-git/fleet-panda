const loggedIn = localStorage.length;
if (!loggedIn) {
  alert("Please login to view to page !");
  window.location.href = "/app/login.html";
} else {
  async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const imageRes = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await response.json();
    const imgData = await imageRes.json()

    const postsDiv = document.querySelector(".posts");
    data.forEach((data, i) => {
      const divEl = document.createElement("div");
      const titleEl = document.createElement("h3");
      const bodyEl = document.createElement("p");
      const imgContainerEl = document.createElement('div')
      const imageEl = document.createElement('img')
      const hrefEl = document.createElement('a')

      hrefEl.innerText = 'read more ...'
      hrefEl.href = `/app/post.html?id=${data.id}`
      titleEl.innerText = data.title;
      bodyEl.innerText = data.body;
      imageEl.src = imgData[i].url

      divEl.classList.add("post");
      titleEl.classList.add("title");
      bodyEl.classList.add("body");
      imgContainerEl.classList.add('img-container')

      imgContainerEl.appendChild(imageEl)

      divEl.appendChild(imgContainerEl)
      divEl.appendChild(titleEl);
      divEl.appendChild(bodyEl);
      divEl.appendChild(hrefEl)

      postsDiv.appendChild(divEl);
    });
  }

  fetchPosts();
}
