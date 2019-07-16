const someOrder = {
  items: [
    { name: 'Dragon food', price: 8, quantity: 8 },
    { name: 'Dragon cage(small)', price: 800, quantity: 1 },
    { name: 'shipping', price: 40, shipping: true }
  ]
}
const orderTotal = order => {
  const totalItems = order.items
    .filter(x => !x.shipping)
    .reduce((prev, cur) => prev + cur.price, 0)
}
const shippingItem =
  order.items.find(x => !!x.shipping)
const shipping =
  totalItem > 1000 ? 0 : shippingItem.price
return totalItems + shipping
result = orderTotal(someOrder)
// result 904