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
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "Feed"});    
    }
});