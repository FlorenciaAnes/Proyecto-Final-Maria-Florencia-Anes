// UTILS FUNCTION LIBRARY

//ADD HTML NAVBAR TO CURRENT PAGE
function renderNavigation() {
  // CREATE NAVBAR IN DOM from MAIN_LINKS in data.js
  $('#header').append(componentNavbar());
  $('.sidebar-wrapper').append(componentSidebar());
  for (let link of MAIN_LINKS) {
    $('#navbar-list').append(componentNavbarList(link));
  }
  $('#navbar-list').append(
    '<li> <button type="button" id="side-bar-button" class="btn btn"><i class="bi bi-cart-fill text-light"></i></button></li>'
  );
  //SHOW SIDEBAR HANDLER
  $('#side-bar-button').click(function (e) {
    generateTotal();
    $('.sidebar-wrapper').css('display', 'block');
  });

  //HIDE SIDEBAR HANDLERS
  // BUTTON
  $('#side-bar-close').click(function (e) {
    //PREVENT CHILD EVENT PROPAGATION HANDLER
    $('.sidebar-wrapper').css('display', 'none');
  });
  // MODAL
  $('.sidebar-wrapper').click(function (e) {
    //PREVENT CHILD EVENT PROPAGATION HANDLER
    $('.sidebar').click(function (e) {
      e.stopPropagation();
    });
    $('.sidebar-wrapper').css('display', 'none');
  });
  // CREATE FOOTER IN DOM
  $('.footer-container').append(componentFooter());
}

//ADD HTML IN CHARACTERS TO CONTAINER WITH ID #grid-characters
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
