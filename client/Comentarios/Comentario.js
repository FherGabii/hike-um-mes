Template.Comentario.helpers({
	usernameDoAutor: function() {
		var idDoAutor = this.autor; //FOCA NO THIS
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username; //Mostrar o id do autor
	}
});