Posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirPost": function(textoDoFormulario) {
		if(Meteor.userId() !==null)  {
			Posts.insert({
				texto: textoDoFormulario,
				idDoAutor: Meteor.userId(),
				curtidas: [] //isso cria uma lista vazia
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
    }	
	
});