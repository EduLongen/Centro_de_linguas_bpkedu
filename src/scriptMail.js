const formulario = document.getElementById('mailTo');

formulario.addEventListener('submit', function (event) {

    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cursos =  document.getElementById('cursos').value;
    const destinatario = 'centrodelinguas@gmail.com'
    
    document.location.href = `mailto:${destinatario}?&subject= Interesse em curso de Linguas! &body= Olá sou o(a) ${nome} e gostaria de me inscrever para o curso de ${cursos} `;

});