window.onload = function(){

	function publicar(autor, postTexto){
		this.autor = autor;
		this.postTexto = postTexto;
	};

	document.getElementById("postear").addEventListener("click", function(){

		var autor = document.getElementById("post-autor").value
		var postTexto = document.getElementById("post-texto").value
		document.getElementById("post-autor").value = "";
		document.getElementById("post-texto").value = "";
		localStorage.setItem("nuevoPost",JSON.stringify(new publicar(autor, postTexto)));

		console.log(new publicar(autor, postTexto));
	//	console.log("carajo");

		var contenedorPrincipal = document.getElementById("div-posts");
		var contenedorPost = document.createElement("div");
		var parrafo = document.createElement("p");
		var nombreAutor = document.createElement("p");

		if(contenedorPrincipal.hasChildNodes() == false){

			nombreAutor.innerText = autor
			parrafo.innerText = postTexto
			contenedorPost.appendChild(nombreAutor);
			contenedorPost.appendChild(parrafo);

			contenedorPrincipal.appendChild(contenedorPost);
			console.log("false")

		}else if(contenedorPrincipal.hasChildNodes() == true){

			nombreAutor.innerText = autor
			parrafo.innerText = postTexto
			contenedorPost.appendChild(nombreAutor);
			contenedorPost.appendChild(parrafo);
			contenedorPrincipal.prepend(contenedorPost)
		//	contenedorPost.appendChild(parrafo);
		//	contenedorPost.insertBefore();
		//	contenedorPrincipal.appendChild(contenedorPost)

			console.log("true")

			//contenedorPrincipal.appendChild(contenedorPost);
			
		}

		/*

		var postTexto = document.getElementById("post-texto");

		var contenedorPrincipal = document.getElementById("div-posts");
			contenedorPrincipal.innerHTML = "";

		var contenedorPost = document.createElement("div");
			contenedorPost.classList.add("clase-post");

		var parrafo = document.createElement("p");
			parrafo.innerHTML = postTexto.value;

		contenedorPost.appendChild(parrafo);
		contenedorPrincipal.appendChild(contenedorPost);
		*/

	})


	/*

		var contenedorPrincipal = document.getElementById("div-posts");
			contenedorPrincipal.innerHTML = "";

		var contenedorPost = document.createElement("div");
			contenedorPost.classList.add("clase-post");

		var parrafo = document.createElement("p");
			parrafo.innerHTML = postTexto.value;

		contenedorPost.appendChild(parrafo);
		contenedorPrincipal.prepend(contenedorPost);


	*/

			//posts.innerText = postTexto

		/*function crearPost(post){

			var contenedorPrincipal = document.getElementById("div-posts");
				contenedorPrincipal.innerHTML = "";

			for(var i = 0; i < post.length; i++){

				var contenedorPost = document.createElement("div");
					contenedorPost.classList.add("clase-post");

				for(var prop in post[i]){
					var 
				}
			}
		}
	*/


}