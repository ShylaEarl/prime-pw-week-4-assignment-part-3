console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//declared a global variable named basket with a value of an empy array.
let basket = [];
console.log('Basket is', basket);
console.log(`Basket is ${basket}`);

//add global const named maxItems set to 5
const maxItems = 5;

//created a function called addItem
// function addItem(item){
//   basket.push(item);
//   return true;
// }//end addItem function

function addItem(item){
  if(isFull(basket) === false){
    basket.push(item);
    return true;
  } else {
    return false;
  } //end conditional
}//end addItem function

console.log('Testing addItem function. Each item added should return true.');
console.log('A new item was added to your basket:', addItem('socks'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('sweater'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('gloves'));
console.log(`Basket is now ${basket}`);
// console.log('A new item was added to your basket:', addItem());
// console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('stocking hat'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('sunglasses'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('earrings'));
console.log(`Basket is now ${basket}`);
console.log('A new item was added to your basket:', addItem('necklace'));
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

// //add global const named maxItems set to 5
// const maxItems = 5;

//created a function called isFull
function isFull(array){
  if (array.length < maxItems){
    return false;
  } else if (array.length >= maxItems){
    return true;
  }//end conditional
}//end isFull function

console.log('Testing isFull function.');
console.log('Currently the basket is empty so this should return False.', isFull(basket));

console.log('A new item was added to your basket:', addItem('socks'));
console.log(`Basket is now ${basket}`);
console.log('Is the basket full?', isFull(basket));
console.log('A new item was added to your basket:', addItem('sweater'));
console.log(`Basket is now ${basket}`);
console.log('Is the basket full?', isFull(basket));
console.log('A new item was added to your basket:', addItem('gloves'));
console.log(`Basket is now ${basket}`);
console.log('Is the basket full?', isFull(basket));
console.log('A new item was added to your basket:', addItem('stocking hat'));
console.log(`Basket is now ${basket}`);
console.log('Is the basket full?', isFull(basket));
console.log('A new item was added to your basket:', addItem('sunglasses'));
console.log(`Basket is now ${basket}`);
console.log('Is the basket full?', isFull(basket));

console.log('Currently the basket is full so this should return True.', isFull(basket));

//created a function called removeItem using indexOf()
// function removeItem(item){
//   for(let i=0; i<basket.length; i++){
//     if(basket.indexOf(item) === i){
//       return i;
//     } //end conditional
//   }//end for loop
// }//end removeItem function
//
// console.log('Testing removeItem function, part 1 indexOf()');
// console.log('The index for gloves is:', removeItem('gloves'));
// console.log('Shyla is not an item in the basket so she is:', removeItem('Shyla'));
// console.log('The index for sunglasses is:', removeItem('sunglasses'));
// console.log('The index for socks is:', removeItem('socks'));

//created a function called removeItem using indexOf() and splice()
function removeItem(item){
  for(let i=0; i<basket.length; i++){
    if(basket.indexOf(item) === i){
      basket.splice(item)
    }//end conditional
  }//end for loop
  return item;
}//end removeItem function

console.log('Testing removeItem function, part 2 splice()');
console.log('This item has been removed from your basket:', removeItem('gloves'));
console.log(`Basket is now ${basket}`);
console.log('This item has been removed from your basket:', removeItem('Shyla'));
console.log(`Basket is now ${basket}`);
console.log('This item has been removed from your basket:', removeItem('sunglasses'));
console.log(`Basket is now ${basket}`);
console.log('This item has been removed from your basket:', removeItem('socks'));
console.log(`Basket is now ${basket}`);
