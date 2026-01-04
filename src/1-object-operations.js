const Cart = {
    customerName : 'Alex',
    totalPrice : 0,
    itemCount : 0
};

Cart.items = ['apples', 'bananas', 'cherries']
Cart.itemCount = 3;
Cart.totalPrice = 99.99;
delete Cart.customerName;
console.log(Cart)
