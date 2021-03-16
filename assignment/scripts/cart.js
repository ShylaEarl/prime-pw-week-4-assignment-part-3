console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
  basket.push(item);
  return true;
}//end addItem

console.log('Basket is', basket);
console.log('A new item was added to your basket:', addItem());
console.log('A new item was added to your basket:', addItem('socks'));
console.log('A new item was added to your basket:', addItem('sweater'));

function listItems(array){
  for(i=0; i<array.length; i++){
    console.log('These are the items in your basket:', array[i]);
  }//end loop
}//end listItem

console.log(listItems(basket));

function empty(){
  basket = [];
  return basket;
}

console.log(empty());
