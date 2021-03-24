function Product(image, productName, price) {//constructor function
    this.image = image;
    this.productName = productName;
    this.price = price;
}

let product1 = new Product("../images/leather bracelet.jfif", "Stacked Leather Bracelet", 190);//products 
let product2 = new Product("../images/diamond.jfif", "Diamond Bracelet", 400);
let product3 = new Product("../images/plat.jfif", "Platinum Bracelet", 450);
let product4 = new Product("../images/Rose.jfif", "Rose Gold Diamond Bracelet", 550);
let product5 = new Product("../images/gold.jfif", "Gold Bracelet", 500);
let product6 = new Product("../images/silver.jfif", "Sterling Silver Bracelet", 200);

let myProducts = [//Products array
    product1,
    product2,
    product3,
    product4,
    product5,
    product6
]

function addProductToCart(product) {
    let myCart = JSON.parse(localStorage.getItem('myCart'));//fetches or creates the cart
    if (!myCart){
        myCart = [];
    }

    alert("Your item has been added to your cart! " + "R" + product.price + " has been added to your total.");//alerts when item has been added
    myCart.push(product);
    localStorage.setItem('myCart', JSON.stringify(myCart));
}

function showProducts(myProducts) {//displays items on the catalogue page
    let div = document.getElementById("productSection");

    myProducts.forEach(function (product) {
        let discription = document.createElement('h1');//discription
        discription.innerHTML = product.productName;
        discription.style.marginTop = "20px";

        let productPrice = document.createElement('h3');//Price
        productPrice.innerHTML = "R" + product.price;
        productPrice.style.fontStyle = "oblique";
        productPrice.style.color = "maroon";

        let productImg = document.createElement('img');//image
        productImg.src = product.image;
        productImg.className = "img img-thumbnail rounded-circle";
        productImg.style.marginTop = "30px";
        productImg.style.marginRight = "20px";

        let addToCartBtn = document.createElement('button');//add to cart button
        addToCartBtn.textContent = "Add To Cart";
        addToCartBtn.id = "add";
        addToCartBtn.className = "btn btn-primary";
        addToCartBtn.style.marginTop = "100px";
        addToCartBtn.style.marginRight = "6px";
        addToCartBtn.onclick = function(){
            addProductToCart(product);
        };

        div.appendChild(discription);//appends each element to the div
        div.appendChild(productPrice)
        div.appendChild(productImg);
        div.appendChild(addToCartBtn);
    })

}

function onDocumentLoad() {//creates a function that will be added to the HTML page that will call the function once the page has loaded
    showProducts(myProducts);
}

$(document).ready(function(){
    $("#Bag").dbclick(function(){
      $("#Bag").animate({
        left: '100px',
        height: '+=250px',
        right: '-100px',
        height: '200px'
      });
    });
  });

  $(document).ready(function(){
    $("#Form").hover(function(){
      $("#Form").css("hieght", "170px").slideUp(2000).slideDown(2000);
    });
  });