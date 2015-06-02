Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $li = $('<li>').data('toy-id', toy.get('id'));
  $li.data('pokemon-id', toy.get('pokemon_id'));
  var $attrs = $('<p>');
  $attrs.text(toy.get('name') + ' ' + toy.get('happiness') + ' ' + toy.get('price'));
  $li.append($attrs);
  this.$pokeDetail.find('ul').append($li);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var $what = $('<div>').addClass('detail');
  this.$toyDetail.append($what);

  var $select = $('<select>').data('pokemon-id', toy.get('pokemon_id'));
  $select.data('toy-id', toy.get('id'));

  this.pokes.each(function (pokemon) {
    var $option = $('<option>').data('pokemon-id', pokemon.get('id'));
    $option.data('toy-id', toy.get('id'));
    $option.attr('value', pokemon.get('id'));
    $option.text(pokemon.get('name'));
    if (pokemon.get('id') === toy.get('pokemon_id')) {
      $option.prop('selected', true);
    }
    $select.append($option);
  });

  this.$toyDetail.append($select);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var $selectedToy = $(event.currentTarget);
  var pokemon = this.pokes.find({ id: $selectedToy.data('pokemon-id') });

  var toy = pokemon.toys().find({ id: $selectedToy.data('toy-id') });

  this.$toyDetail.html( $('<div>').addClass('detail').append(toy.get('name')) );
  this.$toyDetail.append($('<img>').attr('src', toy.get('image_url')));
  this.renderToyDetail(toy);
};
