///////////FUNCTIONS///////////

//ADD HTML TO CONTAINER WITH ID #grid-characters
function generateHTML(character) {
  //ADD WITH APPPEND jQUERY METHOD
  $('#grid-characters').append(componentCharacterCard(character));
}
///////////PROGRAM///////////
let characterList = [];

function getCharacters() {
  // CALL DATA FROM JSON FILE WITH AJAX
  $.getJSON('data/characters.json', (res) => {
    characterList = res;

    // CREATE CHARACTERS IN DOM
    for (let character of characterList) {
      generateHTML(character);
    }
  });
}

getCharacters();
