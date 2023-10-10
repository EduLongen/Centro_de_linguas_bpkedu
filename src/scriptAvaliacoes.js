const URL_AVALIACOES = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22avaliacoes%22%5D+%7B%0A++nota_avaliacao%2C%0A++nome_avaliacao%2C%0A++instagram_usuario%2C%0A++texto_avaliacao%2C%0A%7D%0A";

fetch(URL_AVALIACOES, {
    method: "GET",
})
    .then(result => result.json())
    .then(({ result }) => {
        result.forEach(task => {
            console.log(task.nome_avaliacao) // PARAMOS AQUI

        });

    })
    .catch(console.error);