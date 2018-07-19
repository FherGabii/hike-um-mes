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
    },
    segue: function() {
        var idDoUsuario = FlowRouter.getParam("id");
        var usuario = Meteor.users.findOne({_id: idDoUsuario});
        var seguidores = usuario.profile.seguidores;

        var posicao = seguidores.indexOf(Meteor.userId());
        return posicao !== -1;

        //if(posicao === -1) {
            //return false;
        //} else {
            //return true;
        //}
    },
    euMesmo: function() {
        var idDoUsuario = FlowRouter.getParam("id");
        return idDoUsuario === Meteor.userId();
           
    }


});
Template.Perfil.events({
    "click .seguir": function(evento, template) {
       console.log("Seguindo");
       var idDoUsuario = FlowRouter.getParam("id");
        Meteor.call("seguirUsuario", idDoUsuario);

    },
    "click .deixar-de-seguir": function(evento, template) {
       console.log("Deixando de seguir");
        var idDoUsuario = FlowRouter.getParam("id");
        Meteor.call("deixarDeSeguirUsuario", idDoUsuario);

    }
});