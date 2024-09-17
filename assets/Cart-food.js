window.addEventListener('DOMContentLoaded',()=>{

const foods=[
  {
    "foodName": "Burger",
    "category": "Electronics",
    "price": 59.99,
    "stockquantity": 120,
    "description": "High-quality wireless Bluetooth headphones with noise cancellation.",
    "SKU": "ELEC-BTH-001",
    "brand": "SoundWave",
    "imageURL": "assets/images/burger-3.webp"
  },
  {
    "foodName": "Pizza",
    "category": "Home & Kitchen",
    "price": 24.99,
    "stockquantity": 200,
    "description": "Eco-friendly stainless steel water bottle, 750ml capacity.",
    "SKU": "HOME-WB-002",
    "brand": "HydraPro",
    "imageURL": "assets/images/pizza-3.png"
  },
  {
    "foodName": "Sandwich",
    "category": "Electronics",
    "price": 39.99,
    "stockquantity": 75,
    "description": "Compact portable charger with 10,000mAh capacity.",
    "SKU": "ELEC-PC-003",
    "brand": "ChargeTech",
    "imageURL": "assets/images/sandwich-1.webp"
  },
  {
    "foodName": "French fry",
    "category": "Sports & Outdoors",
    "price": 29.99,
    "stockquantity": 150,
    "description": "Non-slip yoga mat with extra thickness for comfort.",
    "SKU": "SPORT-YM-004",
    "brand": "ZenFlex",
    "imageURL": "assets/images/french-fry-3.webp"
  },
  {
    "foodName": "Pasta",
    "category": "Home & Office",
    "price": 34.99,
    "stockquantity": 90,
    "description": "Adjustable LED desk lamp with touch control and USB charging port.",
    "SKU": "HOME-DL-005",
    "brand": "BrightLite",
    "imageURL": "assets/images/pasta-2.png"
  },
  {
    "foodName": "Burger",
    "category": "Electronics",
    "price": 149.99,
    "stockquantity": 50,
    "description": "Water-resistant smartwatch with fitness tracking and notifications.",
    "SKU": "ELEC-SW-006",
    "brand": "FitTime",
    "imageURL": "assets/images/burger-1.png"
  },
  {
    "foodName": "Sandwich",
    "category": "Home & Kitchen",
    "price": 49.99,
    "stockquantity": 60,
    "description": "Fast-boiling electric kettle with 1.7L capacity and auto shut-off.",
    "SKU": "HOME-EK-007",
    "brand": "BrewMaster",
    "imageURL": "assets/images/sandwich-3.webp"
  },
  {
    "foodName": "Noodles",
    "category": "Electronics",
    "price": 19.99,
    "stockquantity": 180,
    "description": "Ergonomic wireless mouse with adjustable DPI settings.",
    "SKU": "ELEC-WM-008",
    "brand": "ClickEase",
    "imageURL": "assets/images/pasta-1.png"
  },
  {
    "foodName": "Pizza",
    "category": "Sports & Outdoors",
    "price": 89.99,
    "stockquantity": 100,
    "description": "Lightweight running shoes with breathable mesh upper.",
    "SKU": "SPORT-RS-009",
    "brand": "SpeedRun",
    "imageURL": "assets/images/pizza-1.webp"
  },
  {
    "foodName": "French fry",
    "category": "Home & Kitchen",
    "price": 12.99,
    "stockquantity": 300,
    "description": "12oz ceramic coffee mug with a comfortable handle.",
    "SKU": "HOME-CM-010",
    "brand": "SipWell",
    "imageURL": "assets/images/french-fry-4.png"
  },
  {
    "foodName": "Noodles",
    "category": "Electronics",
    "price": 79.99,
    "stockquantity": 130,
    "description": "In-ear noise-canceling earbuds with superior sound quality.",
    "SKU": "ELEC-NCE-011",
    "brand": "SoundPulse",
    "imageURL": "assets/images/pasta-5.webp"
  },
  {
    "foodName": "Burger",
    "category": "Electronics",
    "price": 69.99,
    "stockquantity": 110,
    "description": "Waterproof fitness tracker with heart rate monitor and GPS.",
    "SKU": "ELEC-FT-012",
    "brand": "HealthPro",
    "imageURL": "assets/images/burger-3.webp"
  }
]
let cartList=[]


const productContainer =document.getElementById('product-container')
if(foods.length >0){
foods.forEach(food=>{
const foodCard = document.createElement('div')
foodCard.setAttribute('id',food.SKU)
foodCard.innerHTML=

`



          <div class="cart-item flex flex-col justify-between pb-[20px] pt-[10px] md:w-[300px] px-4  border items-center shadow-lg shadow-gray-400 bg-white h-[320px] md:h-[400px] gap-4 overflow-hidden">
          <img src=${food.imageURL} alt="" class="aspect-[2/2] w-[70%]  object-cover block ">
          <h1 class="text-center font-bold text-xl md:text-2xl">${food.foodName}</h1>
          <div class="flex flex-col gap-1 ">
           <div class="flex font-semibold items-center mx-auto gap-1"> <span class="text-gray-500 md:text-xl">Quantity : </span>
            <span class='font-bold'>${food.stockquantity}</span>
          </div>
          <div class="flex font-semibold items-center mx-auto gap-1"> <span class="text-gray-500 md:text-xl">Price : </span>
            <span class='text-[red] font-bold'> $${food.price.toLocaleString('en',{

              currency:'usd',
              minimumIntegerDigits:2,
              maximumFractionDigits:2

            })}</span>
          </div>
          </div>
   
          <button
          id='add-to-cart-btn'
          class="mx-auto bg-yellow-400 border border-yellow-500 font-semibold  text-black  w-full p-2">Add to Cart</button>

        </div>


`
productContainer.appendChild(foodCard) 

})

}

//=========== EVENT EFFECT START====================>
productContainer.addEventListener('click',e =>{
  e.preventDefault()

  if(e.target.id=='add-to-cart-btn'){

const getProductParent= e.target.parentElement.parentElement
if(cartList.some(cart=> cart.sku===getProductParent.id)){
  cartList=cartList.map(cart=>{
    if(cart.sku===getProductParent.id){
      cart.quantity= cart.quantity + 1
      return cart
    }else{
      return cart
    }
  })
}else{



  const cart ={
    sku:getProductParent.id,
    quantity:1
  }
  
  cartList.push(cart)
}



  }
  displayCart()
})

 //=========== EVENT EFFECT END ====================>





//======= CART LIST CONTAINER START =================>
const displayCart = ()=>{
  const cartListContainer =document.getElementById('cart-list-container')
  cartListContainer.innerHTML=''
  if(cartList.length>0){
    cartList.forEach(product=>{
      const food = foods.find(food => food.SKU=== product.sku)
      const div = document.createElement('div')
      
      div.classList.add( 'bg-white','rounded-lg','flex','gap-6','pt-2','pb-3','mx-4','items-center','h-[120px]','md:h-[100px]')
      div.innerHTML=`

  <img src=${food.imageURL} alt="" class="w-[20%] m-2 block aspect-[2/2] object-cover">
  
  <div class="  ">
    <p class="text-xl font-bold mb-2">${food.foodName}</p>
    <div class=" flex md:space-x-8 space-x-14  justify-between">
      <div class="flex flex-col gap-1">
        <span class="font-semibold">Quantity :</span>
        <span class='font-semibold'>${product.quantity}</span>
      </div>

      <div class="flex flex-col gap-1">
        <span class="font-semibold">Price : </span>
        <span class='text-[red] font-bold'>$${food.price.toLocaleString('en',{
          currency:'usd',
          minimumFractionDigits:2,
          maximumFractionDigits:2
        })}</span>
      </div>

      <div class="flex flex-col gap-1">
        <span class="font-semibold">Total : </span>
        <span class='font-semibold text-teal-700'>$${(food.price * product.quantity).toLocaleString('en',{
          currency:'usd',
          minimumFractionDigits:2,
          maximumFractionDigits:2
        })}</span>
      </div>
    </div>
  </div>

</div>
      
      `
      cartListContainer.appendChild(div)
      
    })

  }

}

 //======= CART LIST CONTAINER END =================> 













})