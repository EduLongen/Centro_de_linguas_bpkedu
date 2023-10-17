const URL_AVALIACOES = "https://65nsvke1.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22avaliacoes%22%5D+%0A++%7C+order%28nota_avaliacao+desc%29";

fetch(URL_AVALIACOES, {
    method: "GET",
})
    .then(result => result.json())
    .then(({ result }) => {
        result.forEach(task => {
            
            const container = document.querySelector("div.testimonial-box-container")

            var testimonial = document.createElement("div")
            testimonial.classList.add("mystyle")

            var box_top = document.createElement("div")
            box_top.classList.add("box-top")


            var profile = document.createElement("div")
            profile.classList.add("profile")

            var profile_img = document.createElement("div")
            profile_img.classList.add("profile-img")

            var img = document.createElement("img")
            img.src = "./assets/img/perfil.jpg"
            img.alt = "imagem usuário"

            profile_img.appendchild(img)
            box_top.appendchild(profile_img)


            var usuario = document.createElement("div")
            usuario.classList.add("name-user")

            var strong = document.createElement("strong")
            strong.classList.add("nome_avaliacao")
            strong.innertext = task.nome_avalicao
            usuario.appendchild(strong)

            var span = document.createElement("span")
            span.classList.add("usuario_avaliacao")
            span.innerText = task.instragram_usuario
            usuario.appendchild(span)

            var box_estrela = document.createElement("div")
            box_estrela.classList.add("box_estrela")
            usuario.appendchild(box_estrela)

            profile.append(usuario)
            box_top.appendchild(profile)



            var reviews = document.createElement("div")
            reviews.classList.add("reviews")

            var box_estrela2 = document.createElement("div")
            box_estrela2.classList.add("box_estrela")
            reviews.appendchild(box_estrela2)


            var nota = task.nota_avaliacao


            var div_comentario = document.createElement("div")
            div_comentario.classList.add("client-comment")


            var p = document.createElement("p")
            p.innerText = task.texto_avaliacao
            div_comentario.appendChild(p)


            testimonial.appendchild(box_top)
            testimonial.appendchild(div_comentario)

            var testimonial = document.createElement("div")
            testimonial.classList.add("mystyle")

            var box_top = document.createElement("div")
            box_top.classList.add("box-top")




            var profile = document.createElement("div")
            profile.classList.add("profile")

            var profile_img = document.createElement("div")
            profile_img.classList.add("profile-img")

            var img = document.createElement("img")
            img.src = task. //Alterar
            img.alt = "imagem usuário"

            profile_img.appendchild(img)
            box_top.appendchild(profile_img)


            var usuario = document.createElement("div")
            usuario.classList.add("name-user")

            var strong = document.createElement("strong")
            strong.classList.add("nome_avaliacao")
            strong.innertext = task.nome_avalicao
            usuario.appendchild(strong)

            var span = document.createElement("span")
            span.classList.add("usuario_avaliacao")
            span.innerText = task.instragram_usuario
            usuario.appendchild(span)

            var box_estrela = document.createElement("div")
            box_estrela.classList.add("box_estrela")
            usuario.appendchild(box_estrela)

            profile.append(usuario)
            box_top.appendchild(profile)



            var reviews = document.createElement("div")
            reviews.classList.add("reviews")

            var box_estrela2 = document.createElement("div")
            box_estrela2.classList.add("box_estrela")
            reviews.appendchild(box_estrela2)


            var nota = task.nota_avaliacao


            var div_comentario = document.createElement("div")
            div_comentario.classList.add("client-comment")


            var p = document.createElement("p")
            p.innerText = task.texto_avaliacao
            div_comentario.appendChild(p)


            testimonial.appendchild(box_top)
            testimonial.appendchild(div_comentario)

            container.appendChild(testimonial)

        });

    })
    .catch(console.error);