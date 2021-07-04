///////////FUNCTIONS///////////

//ADD HTML TO CONTAINER WITH ID #productSection
function generateProductCard(product) {
  //ADD WITH APPPEND jQUERY METHOD
  $('#productSection').append(componentCardShop(product));
}

function checkStock(product) {
  // TOGGLE BUTTON STATE
  if (product.stock <= 0) {
    $(`#${product.id}`).addClass('btn-danger');
    $(`#${product.id}`).attr('disabled', true);
    $(`#${product.id}`).html('Out of Stock');
  } else {
    $(`#${product.id}`).removeClass('btn-danger');
    $(`#${product.id}`).attr('disabled', false);
    $(`#${product.id}`).html('Add to Cart');
  }
}

function generateTotal() {
  $('#cartSection').empty();
  let total = 0;
  //RENDER CART IN DOM
  for (const product of CART) {
    $('#cartSection').append(componentCartCard(product));
    total += product.total();
  }
  TOTAL = total;
  // UPDATE LOCAL STORAGE  CART SESSION
  localStorage.setItem('cart', JSON.stringify(CART));

  $('#totalSection').text(TOTAL);
  //ADD EVENTS HANDLER TO PRODUCT CARDS IN CART
  $('.btnremove').click(function (e) {
    //FIND SELECTED PRODUCT
    let selected = CART.find((product) => product.id == this.value);
    selected.stock = 1;
    checkStock(selected);
    //REMOVE PRODUCT FROM CART
    let result = CART.filter((product) => product.id != this.value);
    CART = result;
    //RECURSIVE RENDERING IN DOM
    generateTotal();
  });
}
function generateResume() {
  for (const product of CART) {
    $('#checkoutSection').append(componentResume(product));
  }
}

function getProducts() {
  // CALL DATA FROM JSON FILE WITH AJAX
  $.getJSON('data/products.json', (res) => {
    productList = res;
    // LIMIT PRODUCT CARDS IN HOME
    if (homePage) {
      productList = productList.slice(0, productGalleryLimit);
    }
    // CREATE PRODUCT CARDS IN DOM
    for (let product of productList) {
      generateProductCard(product);
    }
    //ADD EVENTS HANDLER TO PRODUCT CARDS
    //ADD TO CART EVENT
    $('.btnbuy').click(function (e) {
      //OPEN SIDEBAR
      $('.sidebar-wrapper').css('display', 'block');
      //FIND SELECTED PRODUCT
      let selected = CART.find((product) => product.id == this.id);
      // CHANGE PRODUCT STOCK
      if (selected != undefined) {
        selected.sell();
        checkStock(selected);
      } else {
        let product = new Product(
          productList.find((product) => product.id == this.id)
        );
        product.sell();
        checkStock(product);
        // ADD PRODUCT TO CART ARRAY
        CART.push(product);
      }

      generateTotal();
    });

    //SHOW DESCRIPTION ON HOVER
    $('.product-card').hover(
      function (e) {
        $('.product-info', this).removeClass('visually-hidden');
        $('.product-info', this).css('opacity', '1');
      },
      function (e) {
        $('.product-info', this).addClass('visually-hidden');
        $('.product-info', this).css('opacity', '0');
      }
    );
  });
}

$('#checkoutForm').on('submit', function (e) {
  let data = $(this).serializeArray();
  let result = {};
  for (const info of data) {
    result[`${info.name}`] = info.value;
  }

  $('#checkoutFormSection').empty();
  $('#checkoutFormSection').append(componentFinishPuchase(result));
});

///////////PROGRAM///////////
let productList = [];

generateTotal();
// RENDER Navbar from /utils functions
renderNavigation();
generateResume();
getProducts();
