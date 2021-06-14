//PRODUCT CARD COMPONENT
function componentCard(product) {
  return `<div class="col-sm-6 col-md-4">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="${product.image}"
                    alt="Emotions domino"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      ${product.name} 
                    </h5>
                    <p class="card-text text-justify">
                     ${product.description}
                    </p>
                    <h6>Age range: +${product.age}</h6>
                    <h4>€${product.price}</h4>
                   <button id="${product.id}" type="button" class="btn btn-primary btnbuy">Add to Cart</button>
                  </div>
                </div>
              </div>`;
}

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

//CHARACTER CARD COMPONENT
function componentCharacterCard(character) {
  return `<div>
            <img
              src="${character.img}"
              alt="${character.alt}"
            />
          </div>`;
}
