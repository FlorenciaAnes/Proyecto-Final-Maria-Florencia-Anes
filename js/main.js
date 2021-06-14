///////////FUNCTIONS///////////
//ADD HTML TO CONTAINER WITH ID #productSection
function generateHTML(product) {
  //ADD WITH APPPEND jQUERY METHOD
  $('#productSection').append(componentCard(product));
}

function generateTotal(cart) {
  $('#totalSection').empty();
  for (const product of cart) {
    $('#totalSection').append(
      `<p>${product.name} - €${product.price} stock: ${product.stock} </p>`
    );
  }
}

function getProducts() {
  // CALL DATA FROM JSON FILE WITH AJAX
  $.getJSON('data/products.json', (res) => {
    productList = res;

    // CREATE PRODUCTS IN DOM
    for (let product of productList) {
      generateHTML(product);
    }

    $('.btnbuy').click(function (e) {
      let selected = CART.find((product) => product.id == this.id);
      console.log(selected);
      if (selected != undefined) {
        selected.sell();
      } else {
        let product = new Product(
          productList.find((product) => product.id == this.id)
        );
        product.sell();
        CART.push(product);
      }
      generateTotal(CART);
    });
  });
}
///////////PROGRAM///////////
let productList = [];
// Button Handler GET DATA
$('.btnget').click(function (e) {
  getProducts();
  $('.btnget').addClass('disabled');
});
