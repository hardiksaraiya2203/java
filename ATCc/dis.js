let d = data.map((value,index)=>{
    return `<div class="col-3"><div class="card" style="width:18rem;">
    <img src="${value.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${value.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted ">${value.price}</h6>
      <p class="card-text">${value.description}</p>
      <button href="#" class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
    </div>
  </div></div>`
});

cart = []

const addToCart = (index)=>{

  let selectedProduct = data[index];
  cartitem = cart.find((arrayitems)=>{
    return arrayitems.item.id = selectedProduct.id;
  })
  if(cartitem == undefined){

    cart.push({item : selectedProduct,count :1});
  }
  else{
    cartitem.count = cartitem.count +1;
  }
  console.log(cart);
  document.getElementById('count').innerHTML = cart.length;
};


document.getElementById('display').innerHTML = d.join(" ");