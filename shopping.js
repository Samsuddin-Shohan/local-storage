const addItem = ()=>{
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    //add to browser
    if(name!==''){
        displayName(name);
        addProductToCart(name);
    }
    //addto local storage
    nameField.value = '';
}
const displayProductFromLocalStorage = ()=>{
    let cart = getCart();
    for(let name in cart ){
        displayName(name);
    }
}

const displayName = name =>{
    const product = document.getElementById('product');
    const li = document.createElement('li');
    li.innerText = name;
    product.appendChild(li);
}
const addProductToCart = (name) =>{

    let cart = getCart();
    if(cart[name]){
        cart[name] = cart[name]+1;
    }
    else{
        cart[name] = 1;
    }
    
    let cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}

const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
       cartObj = JSON.parse(cart); 
       console.log(cartObj);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}
const placeOrder = () =>{
    document.getElementById('product').textContent = '';
    localStorage.removeItem('cart');
} 
displayProductFromLocalStorage();
