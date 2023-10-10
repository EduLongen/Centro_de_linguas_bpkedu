const URL_CORDENACAO = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22cordenacao%22%5D+%7B%0A++_id%2C+%0A++nome_cordenacao%2C%0A++%22foto_cordenacao%22%3A+foto_cordenacao.asset-%3Eurl%2C%0A%7D%0A%7C+order%28_updatedAt+asc%29%5B0%5D";

fetch(URL_CORDENACAO, {
    method: "GET",
})
    .then(result => result.json())
    .then(({ result }) => {
            var descricao = document.querySelector("p.name");
            descricao.innerText = result.nome_cordenacao;

            var imagem = document.querySelector("img.cordenacao");
            imagem.setAttribute("src", result.foto_cordenacao);
            imagem.width = 400;

    })
    .catch(console.error);