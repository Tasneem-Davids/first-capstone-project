function Product(image, productName, price) {
    this.image = image;
    this.productName = productName;
    this.price = price;
}

let product1 = new Product("../images/leather bracelet.jfif", "Stacked Leather Bracelet", 190);
let product2 = new Product("../images/diamond.jfif", "Diamond Bracelet", 400);
let product3 = new Product("../images/plat.jfif", "Platinum Bracelet", 450);
let product4 = new Product("../images/Rose.jfif", "Rose Gold Diamond Bracelet", 550);
let product5 = new Product("../images/gold.jfif", "Gold Bracelet", 500);
let product6 = new Product("../images/silver.jfif", "Sterling Silver Bracelet", 200);

let myProducts = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6
]

function calculateTotal(){
let myCart = fetchCart();
let total = 0;
myCart.forEach( (cartItem, index) => {
    total += Number(cartItem.price);
});

let discount = Number(localStorage.getItem('discount'));
if (!isNaN(discount)) //Make sure discount is a numeric value before we perform mathematical operations on it
    return total
else   
    return total - discount;

}

let deliveryBtn = document.getElementById("DeliverBtn");
let delivery = document.createElement('button');
delivery.textContent = "Deliver";
delivery.className = "btn btn-danger";
delivery.style.backgroundColor = "blueviolet";
delivery.style.marginLeft = "4px";
delivery.onclick = function(){

    alert("R100 delivery charge has been added to your total!");//Delivery option plus 100 for delivery charges
    prompt("Please provide an address below.");

    cartTotal + 100;
}

deliveryBtn.appendChild(delivery);

let couponInput = document.getElementById("EnterCouponCode");
let couponBtn = document.getElementById("CouponBtn");
let coupon = document.createElement('button');
coupon.textContent = "Submit Coupon";
coupon.className = "btn btn-danger";
coupon.style.backgroundColor = "crimson";
coupon.onclick = function(){//Coupon code is Tasneem 
    if(couponInput.value !== "Tasneem"){//Wrong could will show invalid
        alert("invalid coupon!");
    }
    else if(couponInput.value === "Tasneem"){
        alert("R50 has been deducted from your total!");//right code will minus 100 from total and send an alert
        localStorage.setItem('discount', 50);
    }
};
couponBtn.appendChild(coupon);


let collectBtn = document.getElementById("CollectBtn");
collectBtn.onclick = function(){
    alert("You can collect at this address:\n 6 Albert Road, Woodstock Exchange.\n Leave your info in the form below, and we will notify you when your order is ready!");//Selecting the collect option 
}


function dltFromCart(index){
    let myCart = localStorage.getItem(JSON.stringify('myCart'));
    myCart = fetchCart();
   if(!myCart){
       myCart = []
       return;
   };
    myCart.splice(index, 1);
    localStorage.setItem('myCart', JSON.stringify(myCart));
    setTimeout(function(){
        location.reload()
    });
}

function fetchCart(){//This fetches or creates the cart
    let myCart = JSON.parse(localStorage.getItem('myCart'));
    if(!myCart){
        myCart = []
    }
    return myCart;
}

function showItems(){

    let cartTable = document.getElementById("cart");
    cartTable.innerHTML = "";

    let myCart = fetchCart();

    myCart.forEach( (cartItem, index) => {

        let tableRow = cartTable.insertRow(index);

        let productImage = document.createElement('td');
        let productImg = document.createElement('img');
        productImg.src = cartItem.image;
        productImg.className = "img img-thumbnail rounded-circle";
        productImg.style.height = "100px";
        productImg.style.marginTop = "5px"

        productImage.appendChild(productImg);

        let productName = document.createElement('td');
        productName.style.fontStyle = "oblique";
        productName.style.marginLeft = "25px";

        let productPrice = document.createElement('td');

        productName.innerHTML = cartItem.productName;
        productPrice.innerHTML = "R" + cartItem.price;

        let dltBtn = document.createElement('td')
        let dltButton = document.createElement('button');
        dltButton.textContent = "Remove Item";
        dltButton.style.width = "80px";
        dltButton.style.height = "60px";

        dltButton.onclick = function(){
            dltFromCart(index);  
        };
        dltButton.className = "btn btn-danger";

        dltBtn.appendChild(dltButton);

    tableRow.appendChild(productImage);
    tableRow.appendChild(productName);
    tableRow.appendChild(productPrice);
    tableRow.appendChild(dltBtn);

    });

    document.getElementById('Total').innerHTML = "R" + calculateTotal();
}

function allClear(){
    localStorage.clear('myCart');
    setTimeout(function(){
        location.reload()
    });
}

function generateNum(){//Creating the function to generate a random number
    return Math.floor(Math.random() * 1000000000);
}

let generateButton = document.getElementById("submitBtn");//This calls the button and sets an event listener then calls the function 
generateButton.onclick = function(){
    alert("Thanks for your support, here is your reference number: " + generateNum());
};


$(document).on({//The following fade out and in methods are for the little icons i created on the some of the pages I created. Tapping anywhere on the page will execute this function.
    'click': function(){
       $(".img-thumbnail1").fadeOut(3000, function(){
           $(".img-thumbnail1").attr("images/shopping cart.jpg");
       })
       .fadeIn(3000)
    }
});

$(document).ready(function(){//This function is for my dropdown menu on my cart page.
    $("#Option li").hover(function(){
        $(".dropdown",this).slideDown(100);
    },function(){
        $(".dropdown",this).slideUp(100);
    });
});



