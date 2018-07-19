Template.Post.helpers({
	usernameDoAutor: function() {
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return (autor.username); //retorna o nome do autor
	},
	numeroDeCurtidas: function() {
		return this.curtidas.length;
	},
	usuarioCurtiu: function() {
		var curtidas = this.curtidas;
		var posicao = curtidas.indexOf(Meteor.userId());
		

		if(posicao === -1) { // === significa igual no java script
			return false;
		} else {
 //usuario curtiu o post, que ele conta a partir de 0, se ninguém curtiu fica negativo 
// !== significa diferente no java script
// só um = significa que quer colocar a coisa que tá do lado direito, no lado esquerdo
			return true;
		}
	},
	comentarios: function() {
		return Comentarios.find({post: this._id}).fetch();
		//estamos olhando pro atributo post e o valor que ele tem é o id
		// todas nossas características estão em this. 
		//fetch serve para entregar os comentários de volta pra gente
	},
	eAutor: function() {
        var idDoAutor = this.idDoAutor;
        return idDoAutor === Meteor.userId();
    }


});

Template.Post.events({
	"click .botao-curtir": function(envento, template) {//O eveno é clicar no elemento botão. O . é pra in
	//indicar a classe do grupo, que tá curtindo . se for sem o ponto, é só a 
	//tag do elemento
		console.log(template.data._id);//pra dar pra ver quem curtiu
	
		Meteor.call("curtirPost", template.data._id); //chamar uma função
	},
	"click .botao-descurtir": function(evento, template) {
        Meteor.call("descurtirPost", template.data._id);     
    },
    "click .botao-remover": function(evento, template) {
        Meteor.call("removerPost", template.data._id);

    }


});