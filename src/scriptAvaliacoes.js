const URL_AVALIACOES = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22avaliacoes%22%5D+%0A%7B%0A++nota_avaliacao%2C+instagram_usuario%2C+texto_avaliacao%2C+nome_avaliacao%0A%7D+%5B0...6%5D%0A++%7C+order%28nota_avaliacao+desc%29";
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
            img.alt = "imagem usuário";
            img.url = ./assets/img/perfil.jpg;
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

            //falta notas
            
                var estrela = document.createElement("i");
                estrela.classList.add("fas fa-star");
                boxEstrela2.appendChild(estrela);
                boxEstrela2.appendChild(estrela);
                boxEstrela2.appendChild(estrela);
                boxEstrela2.appendChild(estrela);
                boxEstrela2.appendChild(estrela);
            
            

        });
    })
    .catch(console.error);

{/* <div id="testimonials">
                
<!--testimonials-box-container------>
<div class="testimonial-box-container">
    <!--BOX-1-------------->
    <div class="testimonial-box">
        <!--top------------------------->
        <div class="box-top">
            <!--profile----->
            <div class="profile">
                <!--img---->
                <div class="profile-img">
                    <img src="./assets/img/perfil.jpg" alt="imagem usuário">
                </div>
                <!--name-and-username-->
                <div class="name-user">
                    <strong class="nome_avaliacao">Maria</strong>
                    <span class="usuario_avaliacao">@maria</span>
                    <div class="box-estrela"></div>
                </div>
            </div>
            <!--reviews------>
            <div class="reviews">
                <div class="box-estrela">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fa-regular fa-star"></i><!--Empty star-->
                </div>
            </div>
        </div>
        
        <div class="client-comment">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos earum magnam, at nulla impedit atque quae rem, quo illum ex nemo magni fugit possimus esse iure voluptatem omnis quia.</p>
        </div>
    </div>
</div>

</div>  */}