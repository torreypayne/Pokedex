Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $li = $('<li>').text(pokemon.get('name') + ", " + pokemon.get('poke_type'));
  $li.addClass('poke-list-item').data('id', pokemon.get('id'));
  this.$pokeList.append($li);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  var pokedex = this;
  this.pokes.fetch({
    success: function() {
      pokedex.pokes.each(function(pokemon) {
        pokedex.addPokemonToList(pokemon);
      });
    }
  });
};
