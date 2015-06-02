Pokedex.RootView.prototype.reassignToy = function (event) {
  event.preventDefault();
  var $pokemon = $(event.currentTarget);
  var $oldPokemon = this.$toyDetail.find('select');
  var toyId = this.$toyDetail.find('option').data('toy-id');

  console.log($oldPokemon.data('pokemon-id'));
  console.log(toyId);
  console.log($oldPokemon.val());


  var oldPokemon = this.pokes.find({ id: $oldPokemon.data('pokemon-id') });
  var toy = oldPokemon.toys().find({ id: toyId });
  toy.set('pokemon_id', $oldPokemon.val());

  var that = this;
  toy.save({}, { success: function () {
    oldPokemon.toys().remove([toy]);
    that.renderPokemonDetail(oldPokemon);
    that.$toyDetail.empty();
  }});
};

Pokedex.RootView.prototype.renderToysList = function (toys) {
};
