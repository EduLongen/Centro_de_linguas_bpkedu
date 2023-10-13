const URL_CURSOS = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22cursos%22%5D+%7B%0A++_id%2C+%0A++name%2C%0A%7D%0A";

var stringCursos = "";

const footer = document.querySelector("ul.cursosFooter")
var fragmento = document.createDocumentFragment();

const seletor = document.querySelector("select#cursos")


fetch(URL_CURSOS, {
    method: "GET",
})
    .then(result => result.json())
    .then(({ result }) => {
        result.forEach(task => {
            stringCursos = stringCursos.concat(task.name, "<br>");

            var li = document.createElement('li');
            var cursosFooter = document.createElement("a");
            cursosFooter.textContent = task.name;
            cursosFooter.setAttribute("href", "#"); 
            li.appendChild(cursosFooter); 
            fragmento.appendChild(li); 

         
            var opcao = document.createElement("option");
            opcao.setAttribute("value", task.name); 
            opcao.innerText = task.name; 
            seletor.appendChild(opcao);
        });
        footer.appendChild(fragmento);

        var p = document.querySelector("p.description");
        p.innerHTML = stringCursos;
    })
    .catch(console.error);