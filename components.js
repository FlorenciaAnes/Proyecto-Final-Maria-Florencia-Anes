//NAV HEADER
function componentNavbar() {
  return `<nav class="header-container">
        <div class="logo-header"><a href="index.html">Cocolin Press</a></div>
        <div class="menu">
          <ul id="navbar-list">
          </ul>
        </div> 
      </nav>
      `;
}

//NAV LIST HEADER
function componentNavbarList(link) {
  return `<li><a href="${link.url}" target="${link.target}">${link.title}</a></li>`;
}

function componentSidebar() {
  return `<div class="sidebar p-3">
        <div class="card scrolls bg-secondary text-end h-100">
          <div class="card-header d-flex align-items-center justify-content-end">
            <h4 class="text-white">MY CART</h4>
            <button
              type="button"
              id="side-bar-close"
              class="btn btn-light btn-sm mx-2"
            >
              <h6>X</h6>
            </button>
          </div>
          <div id="cartSection" class="card-body"></div>
          <div class="card-footer bg-light d-flex align-items-center justify-content-between">
            <button
            type="button"
            id="btncheckout"
            class="btn btn-primary btn-sm mx-2">
              <a class="text-reset text-decoration-none" href="checkout.html">
                  CHECKOUT
              </a>
            </button>
            <h4>Total:$<span id="totalSection"></span></h4>
          </div>
        </div>
      </div>`;
}
function componentFooter() {
  return `
  <p class="copyright">
          Copyright @2021 | Designed with love by
          <a href="index.html">Cocolin Press</a>
        </p>

        <ul class="social_footer_ul">
          <li>
            <a href="https://www.facebook.com/CocolinPress" target="_blank"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </li>
          <li>
            <a href="https://www.instagram.com/cocolinpress/" target="_blank"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
        </ul>
  `;
}

//PRODUCT CARD COMPONENT IN SHOP
function componentCardShop(product) {
  const soldout = product.stock === 0;
  const btnbuy = soldout
    ? `<button id="${product.id}" type="button" class="btn btn-danger btnbuy" disabled>Out of Stock</button>`
    : `<button id="${product.id}" type="button" class="btn btn-primary btnbuy">Add to Cart</button>`;

  return `<div class="col-sm-6 col-md-4 col-lg-3">
                <div class="product-card card">
                  <img
                    class="card-img-top"
                    src="${product.image}"
                    alt="Emotions domino"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      ${product.name} 
                    </h5>
                     <p class="product-info visually-hidden card-text text-justify">${product.description}</p>
                    <h6 class="product-info visually-hidden">Age range: +${product.age}</h6>
                    <h4>€${product.price}</h4>
                   ${btnbuy}
                  </div>
                </div>
              </div>`;
}

//PRODUCT CARD COMPONENT IN CART
function componentCartCard(product) {
  return `<div class="card id="cart-${product.id}" mb-3">
    <div class="card-header text-end">
    <button type="button" value="${product.id}" class="btn btnremove btn-outline-danger btn-sm">
      <i class="bi bi-x-square"></i>
      Remove
    </button>
      
    </div>
    <div class="row g-0 align-items-center">
      <div class="col-md-4" >
        <img src="${product.image}" class="img-fluid img-thumbnail  rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <h6 class="card-text">Price: €${product.price}</h6>
          <h6 class="card-text">Quantity: ${product.quantity}</h6>  
         
        </div>
      </div>
    </div>
  </div>`;
}

//ADD BADGE TO CART
function componenteBadge(string, clase) {
  return `<span class="badge ${clase}">${string}</span>`;
}

function getBadge(stock) {
  if (stock > 0) {
    return componenteBadge('AVAILABLE', 'badge-info');
  } else {
    return componenteBadge('OUT OF STOCK', 'badge-danger');
  }
}
//CHECKOUT  COMPONENTS
function componentResume(product) {
  return ` 
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="">
      <div class="fw-bold">${product.name}</div>
      <p>Price: $${product.price}</p>
      <p>Quantity: ${product.quantity}</p>
    </div>
    <span class="">Total:<p>$${product.total()}</p></span>
  </li>
    `;
}
function componentFinishPuchase(payer) {
  return ` 
    <div class="card text-start ms-4">
  <div class="card-body">
    <h5 class="card-title">Thanks for your Order!</h5>
    <p class="card-text">Hi ${payer.name},
We are delighted that you have found something you like!
As soon as your package is on its way, you will receive a delivery confirmation from us by email to: ${payer.email} or your phone ${payer.phone}.
 </p>
  <p> Your shipping Address: ${payer.address}, ${payer.zip}, ${payer.city},${payer.state}<br/>
 </p>
  
  </div>
</div>
    `;
}

//CHARACTER CARD COMPONENT
function componentCharacterCard(character) {
  return `<div>
            <img
              src="${character.img}"
              alt="${character.alt}"
            />
          </div>`;
}
