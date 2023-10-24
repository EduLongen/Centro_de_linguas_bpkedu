const URL_POSTS = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22posts%22%5D+%7B%0A++%22imagem%22%3A+imagem.asset-%3Eurl%2C%0A++href%2C%0A%7D+%5B0...6%5D%0A";

const posts = document.querySelector(".redes-img");

fetch(URL_POSTS)
  .then(response => response.json())
  .then(data => {
    data.result.forEach(task => {
      var img = document.createElement("img");
      img.src = task.imagem;
      img.onclick = function() {
        window.location.href = task.href;
      }
      posts.appendChild(img);
    });
  })
  .catch(console.error);
