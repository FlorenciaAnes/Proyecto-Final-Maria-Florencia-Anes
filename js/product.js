class Product {
  constructor(literal) {
    this.id = literal.id;
    this.price = literal.price;
    this.name = literal.name;
    this.image = literal.image;
    this.age = literal.age;
    this.stock = literal.stock;
    this.quantity = 0;
  }
  sell() {
    if (this.stock > 0) {
      this.stock = this.stock - 1;
    }
  }
}
