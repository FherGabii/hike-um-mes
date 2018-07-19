Template.Perfil.helpers({
    perfil: function() {
        var idDoUsuario = FlowRouter.getParam("id"); //procurar se tem algum usuário
        //cadastrado com o id desejado
        var info = Meteor.users.findOne({_id: idDoUsuario});
        return info;
    },
    //a partir daqui, é pra mostrar só os posts do usuário com o id que pedimos
    posts: function() {
        var idDoUsuario = FlowRouter.getParam("id");
        var postsDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch();
        return postsDoPerfil;
    }

});