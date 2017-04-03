window.onload = function(){

	function publicar(postTexto){
		this.postTexto = postTexto;
	};

	document.getElementById("postear").addEventListener("click", function(){

		var postTexto = document.getElementById("post-texto").value
		document.getElementById("post-texto").value = "";
		localStorage.setItem("nuevoPost",JSON.stringify(new publicar(postTexto)));

		console.log(new publicar(postTexto));
	//	console.log("carajo");

		var contenedorPrincipal = document.getElementById("div-posts");
		var contenedorPost = document.createElement("div");
		var parrafo = document.createElement("p");

		if(contenedorPrincipal.hasChildNodes() == false){

			parrafo.innerText = postTexto
			contenedorPost.appendChild(parrafo);
			contenedorPrincipal.appendChild(contenedorPost);
			console.log("false")

		}else if(contenedorPrincipal.hasChildNodes() == true){

			parrafo.innerText = postTexto
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