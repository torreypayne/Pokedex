# { "id":1,
#   "attack":125,
#   "defense":100,
#   "image_url":"/assets/pokemon_snaps/127.png",
#   "moves":["vicegrip"],
#   "name":"Pinsir",
#   "poke_type":"bug" }

json.extract! pokemon, :id, :attack, :defense, :image_url, :moves, :name, :poke_type
