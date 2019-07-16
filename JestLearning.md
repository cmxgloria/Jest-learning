```
https://devhints.io/jest                  jest
```

```
https://www.youtube.com/watch?v=7r4xVDI2vho            jest crash course
```
 


```
https://www.youtube.com/watch?v=Eu35xM76kKY&list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr&index=1           unit test in javascript
```
```
const someOrder = {
  items:[
    {name: 'Dragon food',       price:8,    quantity:8},
    {name:'Dragon cage(small)', price:800,  quantity:1},
    {name: 'shipping',          price:40,   shipping: true}
  ]
}
const orderTotal = order =>{
  const totalItems =order.items
  .filter(x=>!x.shipping)
  .reduce((prev,cur)=>prev + cur.price,0)}
  const shippingItem = 
  order.items.find(x=>!!x.shipping)
  const shipping = 
  totalItem > 1000 ? 0 : shippingItem.price
  return totalItems + shipping
result = orderTotal(someOrder)
result 904
```

```
https://egoist.moe/2017/11/26/tesing-javascript-apps-using-jest/                           jest
```

```
https://devhints.io/enzyme
```
enzyme is for testing react component when you npx install create react app already come with enzyme + jest for test your react component and javascript functions

