/* 

Cart class with method chaining 

*/


class Cart{

   constructor(){

   
    this.obj = []; 
    this.item_id = []; 
    this.price = []; 
    this.quantity = []; 
    this.discount; 

   }




}

Cart.prototype.addItem = function(obj){
    this.obj.push(obj); 
   
    this.discount; 

    return this;  


}; 

Cart.prototype.getItemId = function(){

    return this.item_id; 

}; 

Cart.prototype.removeItem = function(arg){
    let listToDelete = []; 
    listToDelete.push(arg.item_id); 
    let self = this.obj; 
    this.obj.reduceRight(function(acc, arr, idx) {
        if (listToDelete.indexOf(arr) > -1)
            self.splice(idx,1);
    }, 0);  

    return this; 


}; 


Cart.prototype.addDiscount = function(disc){
    
    this.discount = parseInt(disc.substr(0, disc.length-1));
    return this; 

}; 

Cart.prototype.totalItems = function(){

    return this.obj.length; 

}; 

Cart.prototype.totalQuantity = function(){

    let qty = 0; 
    for(let i = 0; i<this.obj.length; i++){

        qty += parseInt(this.obj[i].quantity); 
        

    }

    return qty; 

}; 

Cart.prototype.totalPrice = function(){
    let price = 0; 
    for(let i = 0; i<this.obj.length; i++){

        price += parseInt(this.obj[i].price); 
        

    }

    return price; 
};

Cart.prototype.showAll = function(){
    let item_id = "";
    let price = 0; 
    let qty = 0; 
    for(let i = 0; i<this.obj.length; i++){

        console.log(`Item Id : ${this.obj[i].item_id}`);
        console.log(`Price : ${this.obj[i].price}`);
        console.log(`Quantity : ${this.obj[i].quantity}`); 
        

    }

    

   

};

let cart = new Cart();
console.log(cart.addItem({item_id:4, price:400, quantity:2}).addItem({item_id:5, price:500, quantity:3}).removeItem({item_id:4}).addItem({item_id:10, price:600, quantity:4}));

console.log(cart.showAll()); 



