const URL_FAQ = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22faq%22%5D+%0A++%7C+order%28created_at+asc%29";

var faq = document.querySelector("div.layout");

fetch(URL_FAQ, {
    method: "GET",
})
    .then(response => response.json())
    .then(data => {
        data.result.forEach(task => {
            var perguntaTexto = "+ " + task.pergunta;

            var accordion = document.createElement("div");
            accordion.classList.add("accordion");

            var perguntaDiv = document.createElement("div");
            perguntaDiv.classList.add("accordion__question");
            var pPergunta = document.createElement("p");
            pPergunta.innerText = perguntaTexto;
            perguntaDiv.appendChild(pPergunta);

            var respostaDiv = document.createElement("div");
            respostaDiv.classList.add("accordion__answer");
            var pResposta = document.createElement("p");
            pResposta.innerHTML = task.resposta;
            respostaDiv.appendChild(pResposta);

            accordion.appendChild(perguntaDiv);
            accordion.appendChild(respostaDiv);

            faq.appendChild(accordion);
        });
    })
    .catch(error => console.error(error))
    .finally(() => {
        const answers = document.querySelectorAll(".accordion");
        answers.forEach((event) => {
            event.addEventListener("click", () => {
                event.classList.toggle("active");
            });
        });
    });
