class Item {
    code
    description
    name
    price
    discount
    imgLink

    constructor(code, description, name, price, discount, imgLink) {
        this.code = code
        this.description = description
        this.name = name
        this.price = price
        this.discount = discount
        this.imgLink = imgLink
    }
}

class Cart {
    item
    qty

    constructor(item, qty) {
        this.item = item
        this.qty = qty
    }
}

class Order {
    orderID
    orderDate
    cartArray

    constructor(orderID, orderDate, cartArray) {
        this.orderID = orderID
        this.orderDate = orderDate
        this.cartArray = cartArray;
    }
}

let burgers = [
    new Item('B1001', "Enjoy the timeless flavor of our Classic Burger, now in a satisfying large size.", "Classic Burger (Large)", 750, 0, "src/Burgers/Classic_Burger.jpeg"),
    new Item('B1002', "A smaller take on our beloved Classic Burger, with a delightful 15% discount.", "Classic Burger (Regular)", 1500, 15, "src/Burgers/Classic_Burger_(Regular).jpg"),
    new Item('B1003', "Savor the lean and tasty Turkey Burger, perfect for a healthier choice.", "Turkey Burger", 1600, 0, "src/Burgers/Turkey_Burger.jpg"),
    new Item('B1004', "Delight in the juicy, flavorful Chicken Burger in a hearty large size.", "Chicken Burger (Large)", 1400, 0, "src/Burgers/Chicken_Burger_(Large).jpg"),
    new Item('B1005', "Bite into the tender Chicken Burger, now with a 20% discount.", "Chicken Burger (Regular)", 800, 20, "src/Burgers/Chicken_Burger_(Regular).png"),
    new Item('B1006', "Melt into our large Cheese Burger, packed with cheesy goodness.", "Cheese Burger (Large)", 1000, 0, "src/Burgers/Cheese_Burger_(Large).png"),
    new Item('B1007', "Indulge in the regular Cheese Burger, an all-time favorite.", "Cheese Burger (Regular)", 600, 0, "src/Burgers/Cheese_Burger_(Regular).jpeg"),
    new Item('B1008', "Treat yourself to our Bacon Burger, crispy bacon with every bite, at a 15% discount.", "Bacon Burger", 650, 15, "src/Burgers/Bacon_Burger.jpg"),
    new Item('B1009', "Experience the exotic flavors of our Shawarma Burger.", "Shawarma Burger", 800, 0, "src/Burgers/Shawarma_Burger.jpg"),
    new Item('B1010', "Discover the unique taste of olives in our Olive Burger.", "Olive Burger", 1800, 0, "src/Burgers/Olive_Burger.jpg"),
    new Item('B1012', "Double the cheese, double the delight, with a 20% discount.", "Double-Cheese Burger", 1250, 20, "src/Burgers/Double_Cheese_Burger.png"),
    new Item('B1013', "Enjoy the crunch of our Crispy Chicken Burger, regular size.", "Crispy Chicken Burger (Regular)", 1200, 0, "src/Burgers/Cryspy_Chicken_Burger_(Regular).jpg"),
    new Item('B1014', "Bigger and crispier, our large Crispy Chicken Burger with a 10% discount.", "Crispy Chicken Burger (Large)", 1600, 10, "src/Burgers/Cryspy_Chicken_Burger_(Large).jpg"),
    new Item('B1015', "Vegetarian delight with our savory Paneer Burger.", "Paneer Burger", 900, 0, "src/Burgers/Paneer_Burger.jpg")
]
let submarines = [
    new Item('B1016', "Dive into the large, crispy chicken-filled submarine.", "Crispy Chicken Submarine (Large)", 2000, 0, "src/Submarines/Crispy Chicken Submarine (Large).jpg"),
    new Item('B1017', "A smaller yet equally delicious Crispy Chicken Submarine.", "Crispy Chicken Submarine (Regular)", 1500, 0, "src/Submarines/Crispy Chicken Submarine (Regular).jpg"),
    new Item('B1018', "Enjoy a larger serving of our tasty Chicken Submarine with a 3% discount.", "Chicken Submarine (Large)", 1800, 3, "src/Submarines/Chicken Submarine (Large).png"),
    new Item('B1019', "The classic Chicken Submarine, a regular favorite.", "Chicken Submarine (Regular)", 1400, 0, "src/Submarines/Chicken Submarine (Regular).jpg"),
    new Item('B1020', "Packed with flavors, our Grinder Submarine is a must-try.", "Grinder Submarine", 2300, 0, "src/Submarines/Grinder Submarine.jpg"),
    new Item('B1021', "Loaded with cheese, our Cheese Submarine is a hit.", "Cheese Submarine", 2200, 0, "src/Submarines/Cheese Submarine.jpg"),
    new Item('B1022', "Twice the cheese, paired with succulent chicken at a 16% discount.", "Double Cheese n Chicken Submarine", 1900, 16, "src/Submarines/Double Cheese n Chicken Submarine.png"),
    new Item('B1023', "Our Special Horgie Submarine is bursting with unique flavors.", "Special Horgie Submarine", 2800, 0, "src/Submarines/Special Horgie Submarine.jpg"),
    new Item('B1024', "The ultimate treat, our MOS Special Submarine.", "MOS Special Submarine", 3000, 0, "src/Submarines/MOS Special Submarine.jpeg")
]
let fries = [
    new Item('B1025', "Crispy, golden steak fries in a large serving.", "Steak Fries (Large)", 1200, 0, "src/Fries/Steak_Fries (Large).jpg"),
    new Item('B1026', "Medium-sized, perfectly seasoned steak fries.", "Steak Fries (Medium)", 600, 0, "src/Fries/Steak-Fries (Regular).jpg"),
    new Item('B1027', "Classic, crispy French fries in a large portion.", "French Fries (Large)", 800, 0, "src/Fries/French_Fries (Large).jpeg"),
    new Item('B1028', "Medium portion of your favorite French fries.", "French Fries (Medium)", 650, 0, "src/Fries/French_Fries (Regular).jpeg"),
    new Item('B1029', "Bite-sized delight, small French fries.", "French Fries (Small)", 450, 0, "src/Fries/French_Fries (Small).jpeg"),
    new Item('B1030', "Sweet and savory, large Sweet Potato Fries.", "Sweet Potato Fries (Large)", 600, 0, "src/Fries/Sweet Potato Fries (Large).jpg")
]
let pasta = [
    new Item('B1031', "Creamy pasta with chicken and cheese, now with a 15% discount.", "Chicken n Cheese Pasta", 1600, 15, "src/Pasta/Chicken_Cheese_Pasta.jpg"),
    new Item('B1032', "Delicious penne pasta with tender chicken.", "Chicken Penne Pasta", 1700, 0, "src/Pasta/Chicken_Penne_Pasta.jpg"),
    new Item('B1033', "Baked to perfection, Ground Turkey Pasta Bake with a 10% discount.", "Ground Turkey Pasta Bake", 2900, 10, "src/Pasta/Ground_Turkey_pasta.jpg"),
    new Item('B1034', "Indulge in our rich and Creamy Shrimp Pasta.", "Creamy Shrimp Pasta", 2000, 0, "src/Pasta/creamy_shrimp_pasta.jpg"),
    new Item('B1035', "Fresh and zesty, our Lemon Butter Pasta.", "Lemon Butter Pasta", 1950, 0, "src/Pasta/Lemon_Butter_pasta.jpg"),
    new Item('B1036', "Elegant Tagliatelle Pasta with a hint of sophistication, 1% discount.", "Tagliatelle Pasta", 2400, 1, "src/Pasta/Tagliatelle_Pasta.png"),
    new Item('B1037', "Baked to a golden finish, our Baked Ravioli with a 1% discount.", "Baked Ravioli", 2000, 1, "src/Pasta/Baked_Ravioli.jpg")
]
let bevrage = [
    new Item('B1044', "Refreshing Pepsi, now with a 5% discount.", "Pepsi (330ml)", 990, 5, "src/Beverages/pepsi.jpg"),
    new Item('B1045', "Classic Coca-Cola, perfect for any occasion.", "Coca-Cola (330ml)", 1230, 0, "src/Beverages/coca_cola.jpg"),
    new Item('B1046', "Crisp and clean Sprite with a 3% discount.", "Sprite (330ml)", 1500, 3, "src/Beverages/sprite.jpg"),
    new Item('B1047', "Tangy and sweet Mirinda with a 7% discount.", "Mirinda (330ml)", 850, 7, "src/Beverages/mirinda.jpg")
]

let cardDiv = document.getElementById("menu-div");
let divBody = ``;

let i = 0;

loadItemsInDOM("Burgers", burgers);
loadItemsInDOM("Submarines", submarines);
loadItemsInDOM("Fries", fries);
loadItemsInDOM("Pasta", pasta);
loadItemsInDOM("Beverage", bevrage);

function loadItemsInDOM(name, itemArray) {
    divBody += `<div class="container justify-content-center">
                    <p class="text-center fs-3 fw-bold text-danger" style="font-family: 'Varela Round', sans-serif;">${name}</p>
                </div>
                <hr>
                
                <div class="menu-div row gap-5 justify-content-center mt-4" style="">`
    itemArray.forEach(element => {
        divBody += `<div class="card" id="${i++}" style="width: 18rem; cursor: pointer;">
                        <img src="${element.imgLink}" class="card-img-top" alt="...">
                        <div class="card-body d-flex flex-column gap-1">
                            <div id="item-card-name" style="text-align: center; font-family: 'Varela Round', sans-serif; font-size: larger;">${element.name}</div>
                            <div>
                                <p class="card-text">${element.description}</p>
                            </div>
                            <div style="display: flex; flex-direction: row; justify-content: right;">
                                Rs.${element.price}.00
                            </div>
                        </div>
                    </div>`
    })

    divBody += '</div> <br><br><br>'
}

cardDiv.innerHTML = divBody;

document.getElementById('nbb-cart').addEventListener('click', () => {
    document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
})

let x = i + 1;
i = 0;

cardAddEventListners(burgers);
cardAddEventListners(submarines);
cardAddEventListners(fries);
cardAddEventListners(pasta);
cardAddEventListners(bevrage);

function cardAddEventListners(itemArray) {
    itemArray.forEach(element => {
        document.getElementById(i++).addEventListener('click', () => {
            cardClicked(element);
        })
    })
}
function cardClicked(element) {
    document.getElementById('main-item-detail-displayer').style.display = "flex";

    document.getElementById('item-detail-container').innerHTML = `  <div class="container-fluid d-flex flex-row">
                                                                        <p class="" style="font-family: 'Varela Round', sans-serif;">${element.name}</p>
                                                                        <div id="item-detail-close" class="d-flex flex-grow-1 justify-content-end" style="cursor: pointer;">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
                                                                        </div>
                                                                    </div>

                                                                    <div class="container-fluid p-2 d-flex justify-content-center">
                                                                        <img class="w-50 rounded-4" src="${element.imgLink}" alt="">
                                                                    </div>

                                                                    <div class="container-fluid p-4">
                                                                        <p class="align-content-center" style="font-family: 'Varela Round', sans-serif; text-align: center;" >${element.description}</p>
                                                                    </div>

                                                                    <div class="container-fluid item-price-qty d-flex flex-column flex-lg-row">
                                                                        <div>
                                                                            <div class="input-group mb-3">
                                                                                <div class="input-group-prepend">
                                                                                    <span class="input-group-text">Rs</span>
                                                                                </div>
                                                                                <input id="qty" type="text" class="form-control" placeholder="Quantity" aria-label="Amount (to the nearest dollar)">
                                                                            </div>
                                                                        </div>

                                                                        <div class="d-flex w-100 justify-content-end">
                                                                            <p class="" style="font-family: 'Varela Round', sans-serif;">Rs. ${element.price}.00</p>
                                                                        </div>
                                                                    </div>

                                                                    <div class="container-fluid w-100 item-add-to-cart row d-flex flex-grow-1 justify-content-center align-content-end">
                                                                        <button id="${x++}" type="button" class="btn btn-danger">Add to Cart &nbsp<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="24px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg></button>
                                                                    </div>`;

    document.getElementById('item-detail-close').addEventListener('click', () => {
        document.getElementById('main-item-detail-displayer').style.display = "none";
    })

    document.getElementById(x - 1).addEventListener('click', () => {
        document.getElementById('main-item-detail-displayer').style.display = "none";

        new bootstrap.Popover(document.getElementById('nbb-cart')).toggle();

        cartOperations(element, Number(document.getElementById('qty').value));
    })
};

// x = i+1;
// cartAddEventListner(burgers);
// cartAddEventListner(submarines);
// cartAddEventListner(fries);
// cartAddEventListner(pasta);
// cartAddEventListner(bevrage);

// function cartAddEventListner(itemArray) {
//     itemArray.forEach(element => {
//         document.getElementById(x++).addEventListener('click', () => {
//             cartOperations(element);
//         })
//     })
// }

let cart = [];
let itemQTYarray = [];
let cartTBLBody = ``;

document.getElementById("btn-cart-clearence").addEventListener('click', () => {
    cart = [];
    document.getElementById('cart-details').style.display = "none";
    document.getElementById('cart-tbl').style.display = "none"
    document.getElementById('cart-tbl-p-1').style.display = "block";
    document.getElementById('cart-tbl-p-2').style.display = "block";

    cartTBLBody = ``;

    console.log(cart);

})

let cartTBLHead = ` <thead>
                        <tr>
                            <th style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" scope="col">Item Name</th>
                            <th style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" scope="col">Unit Price</th>
                            <th style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" scope="col">Quantity</th>
                            <th style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" scope="col">Amount</th>
                            <th style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" class=" d-none d-lg-block" scope="col">Discount</th>
                        </tr>
                    </thead>
                    <tbody>`;

function cartOperations(item, qty) {
    document.getElementById('cart-details').style.display = "block";
    document.getElementById('cart-tbl').style.display = "table";
    document.getElementById('cart-tbl-p-1').style.display = "none";
    document.getElementById('cart-tbl-p-2').style.display = "none";

    cart.push(new Cart(item, qty));

    cartTBLBody += `
                    <tr>
                        <td style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" class="fw-light" >${item.name}</td>
                        <td style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" class="fw-light" >${item.price}</td>
                        <td style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" class="fw-light" >${qty}</td>
                        <td style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" class="fw-light" >${(parseFloat(item.price * qty)).toLocaleString('en-LK', { style: 'currency', currency: 'LKR' })}</td>
                        <td style="font-family: 'Varela Round', sans-serif; background-color: rgb(232, 236, 237);" class="fw-light d-none d-lg-block" >${parseFloat((item.price * (item.discount / 100)) * qty).toLocaleString('en-LK', { style: 'currency', currency: 'LKR' })} (${item.discount}%)</td>
                    </tr>
                `;


    let subTotal = 0;
    let totalDiscount = 0;

    // cart.forEach(element => {
    //     subTotal += (element.price * qty);
    //     totalDiscount = totalDiscount + (element.price * ((item.discount) / 100) * qty);
    // });

    cart.forEach(element => {
        subTotal += (element.item.price * element.qty);
        totalDiscount += ((element.item.price * (element.item.discount / 100)) * qty)
    });

    document.getElementById('sub-total').innerText = subTotal.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' });
    document.getElementById('total-discount').innerText = totalDiscount.toLocaleString('en-LK', { style: 'currency', currency: 'LKR' });
    document.getElementById('discounted-total').innerText = (subTotal - totalDiscount).toLocaleString('en-LK', { style: 'currency', currency: 'LKR' });

    document.getElementById('net-total').innerText = (subTotal - totalDiscount).toLocaleString('en-LK', { style: 'currency', currency: 'LKR' });

    document.getElementById('cart-tbl').innerHTML = cartTBLHead + cartTBLBody + "</tbody>"
}

document.getElementById('cart-check-out-btn').addEventListener('click', () => {
    placeOrder(cart);

    cart = [];
    document.getElementById('cart-details').style.display = "none";
    document.getElementById('cart-tbl').style.display = "none"
    document.getElementById('cart-tbl-p-1').style.display = "block";
    document.getElementById('cart-tbl-p-2').style.display = "block";

    cartTBLBody = ``;
})

let orders = []

function getOrderID() {
    return orders.length == 0 ? 1 : orders[orders.length - 1].orderID + 1;
}

let orderList = ``;

document.getElementById('order-clearence').addEventListener('click', ()=> {
    orders = []

    orderList = `
                    <div class="container p-4 p-lg-5">
                        <p class="fs-varella-round fw-bold fs-4 text-center">There are no any placed orders. &nbsp;&nbsp;&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="35px"
                                viewBox="0 0 24 24" width="35px" fill="#000000">
                                <rect fill="none" height="24" width="24" />
                                <path
                                    d="M12,10L12,10c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v0C13,9.55,12.55,10,12,10z M12,6L12,6 c-0.55,0-1-0.45-1-1V2c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v3C13,5.55,12.55,6,12,6z M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22 s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2S18.1,18,17,18z M8.1,13h7.45 c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14c0.25-0.48,0.08-1.08-0.4-1.34v0c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.27,2H2 C1.45,2,1,2.45,1,3v0c0,0.55,0.45,1,1,1h1l3.6,7.59l-1.35,2.44C4.52,15.37,5.48,17,7,17h11c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7 L8.1,13z" />
                            </svg>
                        </p>
                        <p class="fs-varella-round fw-medium text-secondary text-center" style="font-size: large;">You can
                            manage orders by placing couple of orders.</p>
                    </div>
                `;

    
    document.getElementById('orders').innerHTML = orderList;

    orderList = ``;
})

function placeOrder(cartArray) {
    orders.push(new Order(getOrderID()
        , new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        , cartArray)
    );

    let y = 0;

    orders.forEach(order => {

        let subTotal = 0;
        let totalDiscount = 0;

        let temp_y = y++;

        order.cartArray.forEach(cartItem => {
            subTotal += cartItem.item.price * cartItem.qty;
            totalDiscount += cartItem.item.price * (cartItem.item.discount / 100) * cartItem.qty;
        })

        orderList += `
                        <div class="container" data-bs-toggle="collapse" href="#collapseExample${temp_y}" role="button"
                            aria-expanded="false" aria-controls="collapseExample">
                            <div class="container-fluid d-flex flex-row justify-content-center fw-bold fs-6 p-4 rounded-3 border hover-Shadow"
                                style="cursor: pointer;">
                                <div class="container-fluid fs-varella-round text-center align-content-center Orderid">O${order.orderID.toString().padStart(4, '0')}</div>
                                <div class="container-fluid fs-varella-round text-center align-content-center Orderdate">${order.orderDate}</div>
                                <div class="container-fluid fs-varella-round text-center align-content-center d-none d-lg-block itemAmount">${order.cartArray.length} Items</div>
                                <div class="container-fluid fs-varella-round text-center align-content-center d-none d-lg-block TotalDiscount">${parseFloat(totalDiscount).toLocaleString('en-LK', { style: 'currency', currency: 'LKR' })}</div>
                                <div class="container-fluid fs-varella-round text-center align-content-center TotalBill">${parseFloat(subTotal - totalDiscount).toLocaleString('en-LK', { style: 'currency', currency: 'LKR' })}</div>
                            </div>
                        </div>
                        <div class="collapse" id="collapseExample${temp_y}">
                            <div class="card card-body rounded-3 d-flex flex-column">
                                <p class="fs-varella-round text-center fw-bold fs-4 p-3">Order Summary</p>`

        order.cartArray.forEach(cartItem => {
            orderList += `<div class="container-fluid rounded-3 d-flex flex-column flex-lg-row">
                                    <div class="container-fluid p-3 d-flex flex-column justify-content-center w-75">
                                        <div class="container-fluid d-flex justify-content-center"><img src="${cartItem.item.imgLink}" class="w-75 rounded-2" alt=""></div>
                                    </div>

                                    <div class="container-fluid justify-content-center align-content-center gap-2">
                                        <p class="fs-varella-round text-center fw-bold fs-5">${cartItem.item.name}</p>
                                        <div class="container-fluid d-flex flex-row">
                                            <p class="text-center fs-varella-round fw-bold fs-6 text-secondary align-content-center">Quantity</p> &nbsp; &nbsp; &nbsp;
                                            <p class="text-end fs-varella-round align-content-center text-secondary fst-italic fw-bold fs-6 flex-grow-1">${cartItem.qty} (pcs)</p>
                                        </div>
                                        <div class="container-fluid d-flex flex-row">
                                            <p class="text-center fs-varella-round fw-bold fs-6 text-secondary align-content-center">Discount</p> &nbsp; &nbsp; &nbsp;
                                            <p class="text-end fs-varella-round align-content-center text-secondary fst-italic fw-bold fs-6 flex-grow-1">${(cartItem.item.price * (cartItem.item.discount / 100) * cartItem.qty).toLocaleString('en-LK', { style: 'currency', currency: 'LKR' })}</p>
                                        </div>
                                        <div class="container-fluid d-flex flex-row">
                                            <p class="text-center fs-varella-round fw-bold fs-5 text-danger align-content-center">Discounted Total</p> &nbsp; &nbsp; &nbsp;
                                            <p class="text-end fs-varella-round align-content-center fst-italic fw-bold flex-grow-1">${((cartItem.item.price * cartItem.qty) - (cartItem.item.price * (cartItem.item.discount / 100) * cartItem.qty)).toLocaleString('en-LK', { style: 'currency', currency: 'LKR' })}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr>`
        })

        orderList += `       </div>
                        </div>
                    `
    });

    document.getElementById('orders').innerHTML = orderList;
    console.log(orders);

    orderList = ``;
}
