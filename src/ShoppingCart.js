class ShoppingCart {
  constructor(){
  this.crate = []
}

getItems() {
  return this.crate
}

clear() {
  this.crate = []
}

addItem(itemName, quantity, price){
  this.crate.push({ name : itemName, 
                    quantity : quantity, 
                    pricePerUnit : price})
}

total() {
  return this.crate.reduce(function (sum, item) {
    return sum += (item.pricePerUnit * item.quantity)
  }, 0)
}
}

module.exports = ShoppingCart

