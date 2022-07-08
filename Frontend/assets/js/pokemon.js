// /*	var carregarPersonagens="https://swapi.dev/api/people/?format=json";

// 		console.log(carregarPersonagens);

// 		fetch (carregarPersonagens)
// 			.then((response)=> {
// 				return response.json();
// 			})

// 			.then ((data) => {
// 				console.log(data);
// 			})
// 		*/

function loadpk() {
  console.log("iniciou o metodo");
  var personagensSW = document.getElementById("saNomes").value - 1;
  document.getElementById("c1").style.display = "block";
  console.log("passou aqui");
  console.log(personagensSW);

  var url = "http://localhost:8888/personagens/" + personagensSW;

  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      document.getElementById("c1").style.display = "none";

      if (personagensSW > -1) {
        console.log("chegou aqui");
        document.getElementById("infPersonagem").style.display = "block";
        document.getElementById("picFront").style.display = "block";

        document.getElementById("nome").innerHTML =
          "<div class='tag'>Nome:</div>" + data["name"];
        document.getElementById("aniversario").innerHTML =
          "<div class='tag'>Aniversário:</div>" + data["birth_year"];
        document.getElementById("sexo").innerHTML =
          "<div class='tag'>Sexo:</div>" + data["gender"];
        document.getElementById("corPele").innerHTML =
          "<div class='tag'>Cor da pele:</div>" + data["skin_color"];
        document.getElementById("corOlhos").innerHTML =
          "<div class='tag'>Cor dos Olhos:</div>" + data["eye_color"];

        let img = data["name"];
        document
          .getElementById("picFront")
          .setAttribute("src", "img/" + img + ".png");
      } else {
        document.getElementById("infPersonagem").style.display = "none";
        document.getElementById("picFront").style.display = "none";
      }
    });
}

//SEGUNDA COMBO
function loadpk2() {
  var personagensSW = document.getElementById("saNomes2").value - 1;
  document.getElementById("c2").style.display = "block";
  console.log("passou aqui");
  console.log(personagensSW);
  var url2 = "http://localhost:8888/personagens/" + personagensSW;

  fetch(url2)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
      document.getElementById("c2").style.display = "none";

      if (personagensSW > -1) {
        document.getElementById("infPersonagem2").style.display = "block";
        document.getElementById("picFront2").style.display = "block";

        document.getElementById("nome2").innerHTML =
          "<div class='tag'>Nome:</div>" + data["name"];
        document.getElementById("aniversario2").innerHTML =
          "<div class='tag'>Aniversário:</div>" + data["birth_year"];
        document.getElementById("sexo2").innerHTML =
          "<div class='tag'>Sexo:</div>" + data["gender"];
        document.getElementById("corPele2").innerHTML =
          "<div class='tag'>Cor da pele:</div>" + data["skin_color"];
        document.getElementById("corOlhos2").innerHTML =
          "<div class='tag'>Cor dos Olhos:</div>" + data["eye_color"];

        let img = data["name"];
        document
          .getElementById("picFront2")
          .setAttribute("src", "img/" + img + ".png");
      } else {
        document.getElementById("infPersonagem2").style.display = "none";
        document.getElementById("picFront2").style.display = "none";
      }
    });
}
