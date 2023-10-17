const URL_POSTS = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*[_type==%22posts%22] {%22imagem%22: imagem.asset->url} | order(_updatedAt asc)[0]";

const posts = document.querySelector(".redes-img");

fetch(URL_POSTS)
  .then(response => response.json())
  .then(data => {
    data.result.forEach(task => {
      var img = document.createElement("img");
      img.src = task.imagem;
      posts.appendChild(img);
    });
  })
  .catch(console.error);
