Template.Pesquisa.rendered = function() {
  Meteor.typeahead.inject();
}

Template.Pesquisa.helpers({
  items: function() {
    // data source function
    // TODO fetch items from meteor collection
    return Meteor.users.find().fetch().map(function(object){ 
      return {id: object._id, value: object.profile.name};
    });
  },
  selected: function(event, suggestion, datasetName) {
    // event - the jQuery event object
    // suggestion - the suggestion object
    // datasetName - the name of the dataset the suggestion belongs to
    // TODO your event handler here
    //A próxima linha é para redirecionar para a página do usuário que procuro
    FlowRouter.go("/perfis/" + suggestion.id);
    //o que está entre parenteses é o caminho que quero levar o camarada
    // Então, dá pra somar "caminhos" ou "textos"
  }
});