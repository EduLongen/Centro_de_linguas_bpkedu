const URL_AVALIACOES = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22avaliacoes%22%5D+%0A%7B%0A++nota_avaliacao%2C+instagram_usuario%2C+texto_avaliacao%2C+nome_avaliacao%2C%22foto_avaliacao%22%3A+foto_avaliacao.asset-%3Eurl%0A%0A%7D+%5B0...6%5D%0A++%7C+order%28nota_avaliacao+desc%29";
const testimonialBoxContainer = document.querySelector("div.testimonial-box-container");

fetch(URL_AVALIACOES, {
    method: "GET",
})
    .then(result => result.json())
    .then(({ result }) => {
        result.forEach(task => {
            var testimonialBox = document.createElement("div");
            testimonialBox.classList.add("testimonial-box");
            testimonialBoxContainer.appendChild(testimonialBox);

            var boxTop = document.createElement("div");
            boxTop.classList.add("box-top");
            testimonialBox.appendChild(boxTop);

            var clientComment = document.createElement("div");
            clientComment.classList.add("client-comment");
            testimonialBox.appendChild(clientComment);

            var p = document.createElement("p");
            p.innerText = task.texto_avaliacao;
            clientComment.appendChild(p);

            var profile = document.createElement("div");
            profile.classList.add("profile");
            boxTop.appendChild(profile);

            var reviews= document.createElement("div");
            reviews.classList.add("reviews");
            boxTop.appendChild(reviews);

            var profileImg = document.createElement("div");
            profileImg.classList.add("profile-img");
            profile.appendChild(profileImg);

            var img = document.createElement("img"); //alterar dps
            img.setAttribute("src",  task.foto_avaliacao);
            img.alt = "imagem usuário";
            profileImg.appendChild(img);

            var nameUser = document.createElement("div");
            nameUser.classList.add("name-user");
            profile.appendChild(nameUser);

            var nomeAvaliacao = document.createElement("strong");
            nomeAvaliacao.classList.add("nome_avaliacao");
            nomeAvaliacao.innerText = task.nome_avaliacao;
            nameUser.appendChild(nomeAvaliacao);
            
            var usuarioAvaliacao = document.createElement("span");
            usuarioAvaliacao.classList.add("usuario_avaliacao");
            usuarioAvaliacao.innerText = task.instagram_usuario;
            nameUser.appendChild(usuarioAvaliacao);

            var boxEstrela1 = document.createElement("div");
            boxEstrela1.classList.add("box-estrela");
            nameUser.appendChild(boxEstrela1);
            
            var boxEstrela2 = document.createElement("div");
            boxEstrela2.classList.add("box-estrela");
            reviews.appendChild(boxEstrela2);

            var estrela = document.createElement("i");
            var estrela1 = document.createElement("i");
            var estrela2 = document.createElement("i");
            var estrela3 = document.createElement("i");
            var estrela4 = document.createElement("i");

            nota = task.nota_avaliacao;

            switch (nota){
                case 0:
                    estrela.classList.add("fa-regular", "fa-star");
                    estrela1.classList.add("fa-regular", "fa-star");
                    estrela2.classList.add("fa-regular", "fa-star");
                    estrela3.classList.add("fa-regular", "fa-star");
                    estrela4.classList.add("fa-regular", "fa-star");
                    break;
                case 1:
                    estrela.classList.add("fas","fa-star");
                    estrela1.classList.add("fa-regular", "fa-star");
                    estrela2.classList.add("fa-regular", "fa-star");
                    estrela3.classList.add("fa-regular", "fa-star");
                    estrela4.classList.add("fa-regular", "fa-star");
                    break;
                case 2:
                    estrela.classList.add("fas","fa-star");
                    estrela1.classList.add("fas","fa-star");
                    estrela2.classList.add("fa-regular", "fa-star");
                    estrela3.classList.add("fa-regular", "fa-star");
                    estrela4.classList.add("fa-regular", "fa-star");
                    break;
                case 3:
                    estrela.classList.add("fas","fa-star");
                    estrela1.classList.add("fas","fa-star");
                    estrela2.classList.add("fas","fa-star");
                    estrela3.classList.add("fa-regular", "fa-star");
                    estrela4.classList.add("fa-regular", "fa-star");
                    break;
                case 4:
                    estrela.classList.add("fas","fa-star");
                    estrela1.classList.add("fas","fa-star");
                    estrela2.classList.add("fas","fa-star");
                    estrela3.classList.add("fas","fa-star");
                    estrela4.classList.add("fa-regular", "fa-star");
                    break;
                case 5:
                    estrela.classList.add("fas","fa-star");
                    estrela1.classList.add("fas","fa-star");
                    estrela2.classList.add("fas","fa-star");
                    estrela3.classList.add("fas","fa-star");
                    estrela4.classList.add("fas","fa-star");
                    break;
            }

            boxEstrela2.appendChild(estrela);
            boxEstrela2.appendChild(estrela1);
            boxEstrela2.appendChild(estrela2);
            boxEstrela2.appendChild(estrela3);
            boxEstrela2.appendChild(estrela4);
        });
    })
    .catch(console.error);