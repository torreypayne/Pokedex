Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $li = $('<li>').data('toy-id', toy.get('id'));
  $li.data('pokemon-id', toy.get('pokemon_id'));
  var $attrs = $('<p>');
  $attrs.text(toy.get('name') + ' ' + toy.get('happiness') + ' ' + toy.get('price'));
  $li.append($attrs);
  this.$pokeDetail.find('ul').append($li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var $toyDetail = $('div').addClass('toy-detail');
  this.$toyDetail.html($toyDetail);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var $selectedToy = $(event.currentTarget);
  var pokemon = this.pokes.find({ id: $selectedToy.data('pokemon-id') });

  var toy = pokemon.toys().find({ id: $selectedToy.data('toy-id') });

  this.$toyDetail.html( $('<div>').addClass('detail').append(toy.get('name')) );
  this.$toyDetail.append($('<img>').attr('src', toy.get('image_url')));
};
