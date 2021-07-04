// DECLARE HOMEPAGE CONDITION
const checkRoute = $(location).attr('pathname');
console.log(checkRoute);
const homePage = checkRoute == '/' || checkRoute == '/index.html';

// DECLARE LIMIT PRODUCT CARDS IN HOME
let productGalleryLimit = 3;
// DECLARE HEADERS LINKS
const MAIN_LINKS = [
  { title: 'Characters', url: 'index.html#characters', target: '' },
  {
    title: 'Fanzines',
    url: homePage ? '#fanzines' : 'https://untadoendetergente.blogspot.com/',
    target: homePage ? '' : 'blank',
  },
  { title: 'Shop', url: 'index.html#shop', target: '' },
  { title: 'About', url: 'index.html#about', target: '' },
];

// DECLARE CART
let CART = [];
let TOTAL = 0;

// CHECK LOCAL STORAGE FOR CART SESSION
let cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));

if (cartFromLocalStorage.length >= 0)
  for (let product of cartFromLocalStorage) {
    let updatedProducts = new Product(product);
    CART.push(updatedProducts);
  }
