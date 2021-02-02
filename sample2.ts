// function addTax(price:number){
//   const tax: number = 10;
//   return Math.round( price+(price*tax/100))  ;
// }

let addTax = (price: number,tax:number=10): number => {
  // const tax: number = 10;
  return Math.round(price + (price * tax / 100));
}


console.log(addTax(521,10));
console.log(addTax(12000,8));
console.log(addTax(12000));





