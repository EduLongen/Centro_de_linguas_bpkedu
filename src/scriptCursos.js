// Definir a URL de onde os dados dos cursos serão recuperados.
const URL_CURSOS = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22cursos%22%5D+%7C+order%28_updatedAt+desc%29%5B0...5%5D%7B%0A++name%0A%7D+%0A";

// Inicializar uma string vazia para armazenar informações sobre cursos.
var stringCursos = "";

// Encontrar um elemento HTML com a classe "cursosFooter" e atribuí-lo à variável "footer".
const footer = document.querySelector("ul.cursosFooter")

// Criar um fragmento de documento para otimizar a adição de elementos ao DOM.
var fragmento = document.createDocumentFragment();

// Encontrar um elemento HTML com a tag "select" e o id "cursos" e atribuí-lo à variável "seletor".
const seletor = document.querySelector("select#cursos")

// Realizar uma solicitação GET para a URL_CURSOS.
fetch(URL_CURSOS, {
    method: "GET",
})
    .then(result => result.json())
    .then(({ result }) => {
        // Iterar sobre os resultados recuperados.
        result.forEach(task => {
            // Atualizar a stringCursos com os nomes dos cursos formatados.
            stringCursos = stringCursos.concat("• ", task.name, "<br>");

            // Criar um elemento "li" para a lista de cursos no rodapé.
            var li = document.createElement('li');
            // Criar um elemento "a" (âncora) para cada curso na lista de rodapé.
            var cursosFooter = document.createElement("a");
            cursosFooter.textContent = task.name;
            cursosFooter.setAttribute("href", "#"); 
            li.appendChild(cursosFooter); 
            // Adicionar o elemento "li" ao fragmento.
            fragmento.appendChild(li); 

            // Criar um elemento "option" para o menu suspenso de seleção.
            var opcao = document.createElement("option");
            opcao.setAttribute("value", task.name); 
            opcao.innerText = task.name; 
            // Adicionar o elemento "option" ao elemento "select".
            seletor.appendChild(opcao);
        });
        // Adicionar o fragmento ao rodapé da página.
        footer.appendChild(fragmento);

        // Encontrar um elemento HTML com a classe "description" e atualizar seu conteúdo com a string de cursos.
        var p = document.querySelector("p.description");
        p.innerHTML = stringCursos;
    })
    .catch(console.error); // Lidar com erros, se ocorrerem.
