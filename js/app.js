

$.getJSON("http://pokeapi.co/api/v2/pokemon/",
	function(response){
		var pokemons=response.results;
		crearPokemons(pokemons);

	});
	$.getJSON(pokemons.url, function (response){
      var abilities = response.abilities;
			habilidades.click(pokemons);
			conole.log (abilities)


    });





//var xhr = new XMLHttpRequest();

//xhr.onreadystatechange = function (e) {
//	if (this.readyState === 4) {
		//if (this.status === 200) {
			//var response = JSON.parse(this.response);
			//var pokemons=response.result;
			//crearPokemos(pokemons);
		//}

	//}
//};

//xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

//xhr.send();
var plantillaPokemon='<div class="col s12 m6 l3">' +
'<div class="card">'+
    '<div class="card-image waves-effect waves-block waves-light">'+
     '<img class="activator" src="img/--nombre--.png">'+
   '</div>'+
    '<div class="card-content">'+
      '<span class="card-title activator grey-text text-darken-4">--nombre--<i class="material-icons right">more_vert</i></span>'+
    '</div>'+
    '<div class="card-reveal">'+
      '<span class="card-title grey-text text-darken-4">--nombre--<i class="material-icons right">close</i></span>'+
      '<p>--habilidades--</p>'+
    '</div>'+
  '</div>'+

'</div>';

function habilidades (abilities){
	var plantillaFinal="";
	abilities.forEach(function(habilidades){
		console.log(abilities);
	});
}




function crearPokemons(pokemons) {
	var plantillaFinal="";
	pokemons.forEach(function (pokemon) {
		plantillaFinal += plantillaPokemon.replace("--nombre--",pokemon.name)
		.replace("--nombre--",pokemon.name)
		.replace("--nombre--",pokemon.name)

	});

	$(".pokedex").html(plantillaFinal);
};
