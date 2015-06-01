Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $div = $('<div>').addClass('detail');
  $div.append($('<img>').attr('src', pokemon.get('image_url')));
  for (var attr in pokemon.attributes) {
    $div.append(attr + ":  ");
    $div.append(pokemon.get(attr) + "<br>");
  }

  this.$pokeDetail.html($div);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var $li = $(event.currentTarget);
  var foundId = $li.data('id');
  var pokemon = this.pokes.find({ id: foundId });
  this.renderPokemonDetail(pokemon);
};
