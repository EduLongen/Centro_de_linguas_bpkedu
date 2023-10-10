const URL_CURSOS = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22cursos%22%5D+%7B%0A++_id%2C+%0A++name%2C%0A%7D%0A";

var stringCursos = "";

fetch(URL_CURSOS, {
    method: "GET",
})
    .then(result => result.json())
    .then(({ result }) => {
        result.forEach(task => {
            stringCursos = stringCursos.concat(task.name, "<br>");

        });
        var p = document.querySelector("p.description");
        p.innerHTML = stringCursos;
    })
    .catch(console.error);