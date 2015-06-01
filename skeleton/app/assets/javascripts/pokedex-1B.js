Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {

  var detail = this;
  var $div = $('<div>').addClass('detail');
  $div.append($('<img>').attr('src', pokemon.get('image_url')));
  for (var attr in pokemon.attributes) {
    var $p = $('<p>').append(attr + ": ");
    $div.append($p.append(pokemon.escape(attr)));
  }
  var toyList = $('<ul>').addClass('toys');
  pokemon.fetch({
    success: function() {
      pokemon.toys().each(function(toy) {
        detail.addToyToList(toy);
      });
    }
  });

  $div.append(toyList);

  this.$pokeDetail.html($div);
  this.$pokeDetail.on("click", "li", this.selectToyFromList.bind(this));
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var $li = $(event.currentTarget);
  var foundId = $li.data('id');
  var pokemon = this.pokes.find({ id: foundId });
  this.renderPokemonDetail(pokemon);
};
