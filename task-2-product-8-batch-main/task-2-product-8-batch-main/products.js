const products = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://images.pexels.com/photos/130987/pexels-photo-130987.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 79.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/1209776/pexels-photo-1209776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 788.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/1826387/pexels-photo-1826387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1279.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://images.pexels.com/photos/7512608/pexels-photo-7512608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://images.pexels.com/photos/7512039/pexels-photo-7512039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/2228583/pexels-photo-2228583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://images.pexels.com/photos/8608229/pexels-photo-8608229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://images.pexels.com/photos/19239903/pexels-photo-19239903/free-photo-of-interior-of-a-modern-living-room.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600',
    price: 9.99,
  },
];

// let disp=products.map(function(value){
//   return ` <article class="product">
//   <img src=${value.image} class="product-img img" alt="" />
//   <footer>
//     <h5 class="product-name">${value.title}</h5>
//     <span class="product-price">${value.price}</span>
//   </footer>
// </article>`
// })
// document.getElementById("products").innerHTML=disp.join(" ");
display(products)

let butn = products.reduce(function(pre,value,index){
  if(pre.includes(value.company) == false){

      pre.push(value.company);
  }
  return pre;
},[]).map(function(value){
  return `<article class="companies" id="companies">
  <button class="company-btn" onclick=filterData('${value}')>${value}</button>
</article>`
})
document.getElementById("companies").innerHTML=butn.join(" ");

display(products);

// document.getElementById("btn").innerHTML = comp.join(" ");


function filterData(companies){

    let p = products.filter(function(value){
      return value.company == companies
    });
    display(p)

}

function display(p){
  let disp = p.map(function(value){

    return ` <article class="product">
    <img src=${value.image} class="product-img img" alt="" />
    <footer>
      <h5 class="product-name">${value.title}</h5>
      <span class="product-price">${value.price}</span>
      <span class="product-price">${value.company}</span>
    </footer>
  </article>`
  })
  document.getElementById("products").innerHTML = disp.join(" ");
}

// Sorting 
function AtoZ()
{
  products.sort(function(a,b){
    if (a.title > b.title){
      return 1;
    }
    else{
      return -1;
    }
    // return a.company - b.company;
  });
  display(products);
}
function ZtoA()
{
  products.sort(function(a,b){
    if (a.price > b.price){
      return -1;
    }
    else{
      return 1;
    }
    // return b.company - a.company;
  });
  display(products);
}


