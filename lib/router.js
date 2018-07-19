FlowRouter.route("/", {
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});    
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "sobre"});    
    }
});
FlowRouter.route("/contato", {
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "contato"});    
    }
});
FlowRouter.route("/feed", {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "Feed"});    
    }
});
FlowRouter.route("/perfis/:id", { //os dois pontos significa que é uma variável
    //pra não ter que criar rota pra cada usuário que é impossível né
    //Só que só isso faria com que qualquer valor digitado após localhost3000/perfil/algumaCoisa
    //te direcionasse a um "perfil", mesmo que ele não existisse
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Perfil"});    
    }
});