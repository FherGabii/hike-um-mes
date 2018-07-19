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