import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});
AccountsTemplates.configure({
    postSignUpHook: function(userId, info) {
    	//procurar o usuário com esse id
        Meteor.users.update(userId, {
            $set: {
                "profile.seguidores": [],
                "profile.seguindo": []
                //lembrando que [] é aquela coisa da lista vazia
                //então tamo criando uma lista de seguindo e seguidores vazios
            }
        });
    }
});
Meteor.publish("posts", function() {
     var usuario = Meteor.users.findOne({_id: Meteor.userId()});
    var seguindo = usuario.profile.seguindo;
    var autores = seguindo;
    autores.push(Meteor.userId());

    return Posts.find({idDoAutor: {$in: autores}});

    
});
Meteor.publish("usuarios", function() {
    return Meteor.users.find({}, {fields: {
        "username": 1,
        "_id": 1,
        "profile": 1
    }});
});

Meteor.publish("comentarios", function(idDoPost) {
    return Comentarios.find({post: idDoPost});
});

