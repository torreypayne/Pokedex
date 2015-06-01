Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokemon = new Pokedex.Models.Pokemon(attrs);
  var pokedex = this;
  callback = callback || function() {};
  pokemon.save({}, {
    success: function() {
      pokedex.pokes.add(pokemon);
      pokedex.addPokemonToList(pokemon);
      callback(pokemon);
    }
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  var newPokemon = $(event.currentTarget).serializeJSON();
  this.createPokemon(newPokemon, this.renderPokemonDetail.bind(this));
};
