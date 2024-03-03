const product = [
    {
        id: 1,
        image : 'image/image-1.jpg',
        title: 'Iphon',
        price: '$120000',
    },
    {
        id: 2,
        image: 'image/image-2.jpg',
        title: 'Mobile',
        price: '$33000',
    },
    {
        id: 3,
        image: 'image/image-3.jpg',
        title: 'Mobile',
        price: '$22300',
    },
    {
        id: 4,
        image: 'image/image-4.jpg',
        title: 'Mobile',
        price: '$44300',
    },
    {
        id: 5,
        image: 'image/image-5.jpg',
        title: 'Mobile',
        price: '$25300',
    },
    {
        id: 6,
        image: 'image/image-6.jpg',
        title: 'Mobile',
        price: '$110000',
    },
    {
        id: 7,
        image: 'image/image-7.jpg',
        title: 'Mobile',
        price: '$37300',
    },
    {
        id: 8,
        image: 'image/image-8.jpg',
        title: 'Mobile',
        price: '$1830',
    },
    {
        id: 9,
        image: 'image/image-9.jpg',
        title: 'Mobile',
        price: '$1530',
    },
    {
        id: 10,
        image: 'image/image-10.jpg',
        title: 'Mobile',
        price: '$1030',
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item)=>{
    var {image, title, price} = item;
    return(
        `<div class="box">
        <div class="img-box">
        <img src = ${image}></img>
        </div>
        <div class="left">
            <p>${title}</p>
            <h2>${price}</h2>
            <button> Add to Cart </button>
        </div>
                </div>`
        
    )
}).join('')

window.addEventListener("load",function () {
    var loaderwrapper = document.querySelector(".wrapper");
    if( loaderwrapper ){
      loaderwrapper.style.transition = " opacity 20s ease";
      loaderwrapper.style.opacity = "0";
      setTimeout(function () {
        loaderwrapper.style.display = "none";
      }, 500);
    }
});

