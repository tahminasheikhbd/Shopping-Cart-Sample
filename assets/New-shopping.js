const products =[
  {
    "productName": "Wireless  Headphones",
    "category": "Electronics",
    "price": 59.99,
    "stockquantity": 120,
    "description": "High-quality wireless Bluetooth headphones with noise cancellation.",
    "SKU": "ELEC-BTH-001",
    "brand": "SoundWave",
    "imageURL": "assets/images/bag-3.webp"
  },
  {
    "productName": "Stainless Steel Water Bottle",
    "category": "Home & Kitchen",
    "price": 24.99,
    "stockquantity": 200,
    "description": "Eco-friendly stainless steel water bottle, 750ml capacity.",
    "SKU": "HOME-WB-002",
    "brand": "HydraPro",
    "imageURL": "assets/images/laptop-1.avif"
  },
  {
    "productName": "Portable Phone Charger",
    "category": "Electronics",
    "price": 39.99,
    "stockquantity": 75,
    "description": "Compact portable charger with 10,000mAh capacity.",
    "SKU": "ELEC-PC-003",
    "brand": "ChargeTech",
    "imageURL": "assets/images/watch-3.jpg"
  },
  {
    "productName": "Yoga Mat",
    "category": "Sports & Outdoors",
    "price": 29.99,
    "stockquantity": 150,
    "description": "Non-slip yoga mat with extra thickness for comfort.",
    "SKU": "SPORT-YM-004",
    "brand": "ZenFlex",
    "imageURL": "assets/images/shoe-4.avif"
  },
  {
    "productName": "LED Desk Lamp",
    "category": "Home & Office",
    "price": 34.99,
    "stockquantity": 90,
    "description": "Adjustable LED desk lamp with touch control and USB charging port.",
    "SKU": "HOME-DL-005",
    "brand": "BrightLite",
    "imageURL": "assets/images/watch-1.jpg"
  },
  {
    "productName": "Smart Watch",
    "category": "Electronics",
    "price": 149.99,
    "stockquantity": 50,
    "description": "Water-resistant smartwatch with fitness tracking and notifications.",
    "SKU": "ELEC-SW-006",
    "brand": "FitTime",
    "imageURL": "assets/images/shoe-3.webp"
  },
  {
    "productName": "Electric Kettle",
    "category": "Home & Kitchen",
    "price": 49.99,
    "stockquantity": 60,
    "description": "Fast-boiling electric kettle with 1.7L capacity and auto shut-off.",
    "SKU": "HOME-EK-007",
    "brand": "BrewMaster",
    "imageURL": "assets/images/iphone-1.avif"
  },
  {
    "productName": "Wireless Mouse",
    "category": "Electronics",
    "price": 19.99,
    "stockquantity": 180,
    "description": "Ergonomic wireless mouse with adjustable DPI settings.",
    "SKU": "ELEC-WM-008",
    "brand": "ClickEase",
    "imageURL": "assets/images/laptop-2.jpeg"
  },
  {
    "productName": "Running Shoes",
    "category": "Sports & Outdoors",
    "price": 89.99,
    "stockquantity": 100,
    "description": "Lightweight running shoes with breathable mesh upper.",
    "SKU": "SPORT-RS-009",
    "brand": "SpeedRun",
    "imageURL": "assets/images/watch-2.webp"
  },
  {
    "productName": "Ceramic Coffee Mug",
    "category": "Home & Kitchen",
    "price": 12.99,
    "stockquantity": 300,
    "description": "12oz ceramic coffee mug with a comfortable handle.",
    "SKU": "HOME-CM-010",
    "brand": "SipWell",
    "imageURL": "assets/images/bag-2.avif"
  },
  {
    "productName": "Noise Cancelling Earbuds",
    "category": "Electronics",
    "price": 79.99,
    "stockquantity": 130,
    "description": "In-ear noise-canceling earbuds with superior sound quality.",
    "SKU": "ELEC-NCE-011",
    "brand": "SoundPulse",
    "imageURL": "assets/images/shoe-2.webp"
  },
  {
    "productName": "Fitness Tracker",
    "category": "Electronics",
    "price": 69.99,
    "stockquantity": 110,
    "description": "Waterproof fitness tracker with heart rate monitor and GPS.",
    "SKU": "ELEC-FT-012",
    "brand": "HealthPro",
    "imageURL": "assets/images/shoe-1.jpg"
  }
]

let cartList =[]





window.addEventListener('DOMContentLoaded',()=>{





const productContainer = document.getElementById('product-container')
if(products.length >0){
  products.forEach(product =>{
  const productCard = document.createElement('div')
  productCard.setAttribute('id',product.SKU)
  productCard.innerHTML=`
  
  
   <div class="border bg-slate-200 flex flex-col gap-4 rounded-lg border-slate-300 shadow shadow-black overflow-hidden  min-h-[400px]">
  
     <img src=${product.imageURL} class="aspect-square object-cover h-[150px] md:h-[200px]" >
    <h2 class="font-semibold  text-center ">${product.productName}</h2>
    <div class="flex mx-auto px-4 flex-col ">
      <div class="flex gap-1">
        <span class="text-neutral-600 font-semibold ">Brand: </span>
        <span>${product.brand}</span>
      </div>
  
      <div class="flex gap-1">
        <span class="text-neutral-600 font-semibold ">Stock:</span>
        <span id='product-stock'>${product.stockquantity}</span>
      </div>
    </div>
    
    <div class="">
      <p id="price" class="text-xl font-semibold text-rose-600 text-center">$${product.price.toLocaleString('en',{
        currency:'usd',
        maximumFractionDigits:2,
        minimumFractionDigits:2
      })}</p>
    </div>
    <button 

    id='add-to-cart-btn'
    class="bg-neutral-600 p-2 rounded text-white text-center w-[70%]  mx-auto mb-4 ">Add to cart</button>
  
  
   
  </div> 

  
  `
  productContainer.appendChild(productCard)
})
}
//===========EVENT-EFECT ==================>
productContainer.addEventListener('click',(e)=>{
e.preventDefault()

if(e.target.id==='add-to-cart-btn'){
  const getProductParent= e.target.parentElement.parentElement

  if(getProductParent){
    const stockElement = getProductParent.querySelector('#product-stock')
    stockElement.innerText = Number(stockElement.innerText)-1
    
  }



  if(cartList.some(cart=> cart.sku===getProductParent.id)){
    cartList=cartList.map(cart=>{
      if(cart.sku===getProductParent.id){
        cart.quantity=cart.quantity +1
        return cart
      }else{
        return cart
      }
    })
  }else{

    
  const cart= {
    sku:getProductParent.id,
    quantity:1
  }
  cartList.push(cart)
  }
  

}
displayCart()



})



//================ REMOVE BTN PROCESS ==========>
  const cartListContainer = document.getElementById('cart-list-container')
  cartListContainer.addEventListener("click",(e)=>{

   const element = e.target.parentElement

   const productSku= element.id.replace('cart','')
   const productCard = document.getElementById(productSku)
   const crrQuantity = cartList.find(item=> item.sku==productSku)?.quantity ||0
   const stockElement = productCard.querySelector('#product-stock')
   stockElement.innerText= Number(stockElement.innerText) + crrQuantity
   
 
   cartList=cartList.filter(cart=> cart.sku!== productSku)
   displayCart()
  
  })
  
//================ REMOVE BTN PROCESS END==========>














//===========EVENT-EFECT-END ==================>
 const displayCart=()=>{

  const cartLisrContainer=document.getElementById('cart-list-container')


  const taxvalue= 0.10
  const shippingCost = 20

  const totalPrice = document.getElementById('cart-total-price')
  const tax = document.getElementById('cart-tax')
  const shipping = document.getElementById('cart-shipping')
  const grandTotal = document.getElementById('cart-grand-total')

// let totalPriceValue =0
// cartList.forEach(item=>{

//     const productData = products.find(product=> product.SKU==item.sku)
//     if(productData){
//       const productCost = productData.price * item.quantity
//       totalPriceValue += productCost
//     }
// console.log(totalPriceValue)
  
// })

//====================REDUCE USE ====================>
const cartMetaData = cartList.reduce((acc,cartItem)=>{

  const productData = products.find(item=> item.SKU== cartItem.sku)
  const totalPrice = productData.price * cartItem.quantity
  const tax = taxvalue * totalPrice
  const shipping = shippingCost * cartItem.quantity
  const grandTotal = totalPrice + tax + shipping 

  return{
    totalPrice: acc.totalPrice + totalPrice,
    tax : acc.tax + tax,
    shipping : acc.shipping + shipping,
    grandTotal: acc.grandTotal + grandTotal

  }

},

{
totalPrice:0,
tax:0,
shipping:0,
grandTotal:0
})
//======================== IMPLIMENT ============================>
totalPrice.innerText=`$${cartMetaData.totalPrice.toLocaleString('en',{
  currency:'usd',
  minimumFractionDigits:2,
  maximumFractionDigits:2
})}`
tax.innerText=`$${cartMetaData.tax.toLocaleString('en',{
  currency:'usd',
  minimumFractionDigits:2,
  maximumFractionDigits:2
})}`
shipping.innerText=`$${cartMetaData.shipping.toLocaleString('en',{
  currency:'usd',
  minimumFractionDigits:2,
  maximumFractionDigits:2
})}`
grandTotal.innerText=`$${cartMetaData.grandTotal.toLocaleString('en',{
  currency:'usd',
  minimumFractionDigits:2,
  maximumFractionDigits:2
})}`

document.getElementById('cart-count').innerText=`${cartList.length}`

//====================================================>
  cartLisrContainer.innerHTML=""


  if(cartList.length>0){
    cartList.forEach(cart=>{

    const product = products.find(product=> product.SKU===cart.sku) 
    const div = document.createElement('div')  
    div.classList.add('flex','gap-4','min-h-[150px]','rounded-lg','shadow-lg','bg-slate-200', 'relative','mx-4') 
   
    div.id='cart' + cart.sku
    div.innerHTML=`
    
   
  <img src=${product.imageURL} alt="" class="block w-2/5  aspect-[5/3] object-cover rounded-tl-lg  rounded-bl-lg">
  <div class="details w-3/5  flex flex-col justify-center">
    <h1 class="font-bold  mb-2 mt-1">${product.productName}</h1>
    <div class="flex justify-between pr-2">
      <div class="flex flex-col gap-2"><span class="font-semibold">Quantity</span><span>${cart.quantity}</span>
      
      </div>
      <div class="flex flex-col gap-2"><span  class="font-semibold">Price</span><span>${product.price.toLocaleString('en',{
        currency:'usd',
        minimumFractionDigits:2,
        maximumFractionDigits:2

      })}</span>
      
      </div>

      <div class="flex flex-col gap-2"><span  class="font-semibold">Total</span><span>${(product.price * cart.quantity).toLocaleString('en',{

        

      })}</span>
      
      </div>


    </div>
  </div>


 <span id='cart-item-remove' class="bg-red-600 p-3 size-[10px] font-bold  text-white grid place-content-center absolute rounded-full cursor-pointer -right-1 -top-1"><ion-icon name="close-outline" class="pointer-events-none"></ion-icon></span>

</div>

 
    `  
  if(cartLisrContainer){
    cartLisrContainer.appendChild(div)
  }

  
    }
   
    )
  }



 }















})