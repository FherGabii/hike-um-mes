Template.NovoComentario.events({
    "submit form": function(evento, template) {
        evento.preventDefault(); //Para evitar que a página seja recarregada ao enviar um formulário
        var texto = evento.target.texto.value;
        var idDoPost = template.data._id; //Pegar o id do Post
        Meteor.call("inserirComentario", texto, idDoPost);
        evento.target.texto.value = "";
    }
});