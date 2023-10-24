const URL_PROFESSORES = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27professores%27%5D%7B%0A++%22imageUrl%22%3A+imagem.asset-%3Eurl+%2B+%22%3Fh%3D250%26w%3D250%26blur%3D50%22%2C+nome%2C+disciplina%0A%7D+%5B0...6%5D";

const professores = document.querySelector(".caixas");

fetch(URL_PROFESSORES)
  .then(response => response.json())
  .then(data => {
    data.result.forEach(task => {
        var box = document.createElement("div");
        box.classList.add("box1");

        var imagem = document.createElement("img");
        imagem.alt = "Imagem do professor";
        imagem.src = task.imageUrl;
        imagem.classList.add("img-profile");
        box.appendChild(imagem);

        var nome = document.createElement("div");
        nome.innerText = task.nome;
        nome.classList.add("nome-professor");
        box.appendChild(nome);

        var disciplina = document.createElement("div");
        disciplina.innerText = task.disciplina;
        disciplina.classList.add("nome-materia-professor");
        box.appendChild(disciplina);

        professores.appendChild(box);

    });
  })
  .catch(console.error);