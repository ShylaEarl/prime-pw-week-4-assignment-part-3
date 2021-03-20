console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//declared a global variable named basket with a value of an empy array.
let basket = [];
console.log('Basket is', basket);
console.log(`Basket is ${basket}`);

//created a function called addItem
function addItem(item){
  basket.push(item);
  return true;
}//end addItem function

console.log('Testing addItem function. Each item added should return true.');
console.log('A new item was added to your basket:', addItem('socks'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('sweater'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('gloves'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem());
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('stocking hat'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('sunglasses'));
console.log(`Basket is now ${basket}`);

//created function called listItems
function listItems(array){
  for(let i=0; i<array.length; i++){
    console.log('These are the items in your basket:', array[i]);
  }//end for loop
}//end listItem function

console.log('Testing listItems function. Each item should be listed.');
console.log(listItems(basket)); //Why is this logging as undefined?

//created a function called empty to empty the basket and return an empty array.
function empty(){
  basket = [];
  return basket;
}

console.log('Testing empty function. Basket should now be empty.');
console.log(empty());
console.log('Basket is', basket);
console.log(`Basket is ${basket}`);

//***STRETCH GOALS***
