
Template.Post.onCreated(function() {
   Meteor.subscribe("comentarios", this.data._id); 
});

Meteor.subscribe("posts");
Meteor.subscribe("usuarios");
Template.Feed.helpers({
	posts: function() {
		var postsDaCollection = Posts.find().fetch().reverse();
		//Inverter a ordem dos posts, pros mais novos aparecem no topo
		return postsDaCollection;
	}
});