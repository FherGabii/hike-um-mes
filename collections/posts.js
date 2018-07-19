Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoDoFormulario, urlDaImagem) {
		if(Meteor.userId() !==null && textoDoFormulario)  {
			// && serve para checar mais de uma condição
			// No caso queremos checar se o texto tá vazio ou não, por incrível que pareça, 
			// isso funciona
			Posts.insert({
				texto: textoDoFormulario,
				idDoAutor: Meteor.userId(),
				curtidas: [], //isso cria uma lista vazia
				imagem: urlDaImagem
			});
		}
	
	},
	"curtirPost": function(idDoPost) {
		Posts.update(idDoPost, {
			$addToSet: { //adicionar ao conjunto, listas de elementos que não podem se repetir
				curtidas: Meteor.userId()
			}
		});
	},
	"descurtirPost": function(idDoPost) {
        Posts.update(idDoPost, {
           $pull: {
                curtidas: Meteor.userId()  
           } 
        });
    },
    "removerPost": function(idDoPost) {
    	var post = Posts.findOne({_id: idDoPost});
        var idDoAutor = post.idDoAutor;

        if(idDoAutor === Meteor.userId()) {
            Posts.remove(idDoPost);
        }

        
    }
	
	
});