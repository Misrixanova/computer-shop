var adminPageButton = document.getElementById('admin-page-button'); adminPageButton.addEventListener('click', function () { window.location.href = "admin.html"; });

var myComputersButton = document.getElementById('my-computers-button');
var myOrdersButton = document.getElementById('my-orders-button');
var shoppingButton = document.getElementById('shopping-button');
var loginButton = document.getElementById('login-button');
var logoutButton = document.getElementById('logout-button');
myComputersButton.addEventListener('click',function () { window.location.href = "computers.html"; });
shoppingButton.addEventListener('click', function () {
    window.location.href = "shopping.html";
});
var userLoggedIn = false;

var loggedInUserId = localStorage.getItem("logged-in-user-id");
if (loggedInUserId == null) {
    userLoggedIn = false;
} else {
    userLoggedIn = true;
}
var showSuccessLoginMessage = localStorage.getItem('show-success-login-message');
if (showSuccessLoginMessage == null) {

} else {
    document.getElementById('success-login-alert').style.display = 'block';
    localStorage.removeItem('show-success-login-message');
    setTimeout( () => {
        document.getElementById('success-login-alert').style.display = 'none';
    }, 1200);
}
function showButtons() {
    if (userLoggedIn) {
        loginButton.style.display = 'none';
        myComputersButton.style.display = 'inline-block';
        myOrdersButton.style.display = 'inline-block';
        logoutButton.style.display = 'inline-block';

    } else {
        logoutButton.style.display = 'none';
        myComputersButton.style.display = 'none';
        myOrdersButton.style.display = 'none';
        loginButton.style.display = 'inline-block';
    }
}
showButtons();
function onLogin() {
    window.location.href = "login.html";
}
function onLogout() {
    
    setTimeout(() => {
        userLoggedIn = false;
        localStorage.removeItem("logged-in-user-id");
        localStorage.removeItem("logged-in-user-name");
        showButtons();
        document.getElementById('success-logout-alert').style.display = 'block';
        showUsermane();
        setTimeout(() => {
            document.getElementById('success-logout-alert').style.display = 'none';

        }, 1200);
    }, 500);


}
var user = [];
var categories = [];
var computers = [];

function addObjects() {
    // Add users
    user.push({ id: 1, name: "User-1", phone: "055-324-3434", username: "u1", password: "p1" });
    user.push({ id: 2, name: "User-2", phone: "055-324-1232", username: "u2", password: "p2" });
    user.push({ id: 3, name: "User-3", phone: "055-324-6765", username: "u3", password: "p3" });
    user.push({ id: 4, name: "User-4", phone: "055-324-9823", username: "u4", password: "p4" });
    user.push({ id: 5, name: "User-5", phone: "055-324-7151", username: "u5", password: "p5" });
    user.push({ id: 6, name: "Admin", phone: "055-324-0000", username: "Admin", password: "Admin" });

    // Add categories
    categories.push({ id: 1, name: "Acer"});
    categories.push({ id: 2, name: "HP"});
    categories.push({ id: 3, name: "Asus"});
    categories.push({ id: 4, name: "Dell"});
    categories.push({ id: 5, name: "Lenovo"});
    categories.push({ id: 6, name: "LG"});
    categories.push({ id: 7, name: "Casper"});
    categories.push({ id: 8, name: "Fujitsu"});
    categories.push({ id: 9, name: "Nexus"});
    categories.push({ id: 10, name: "Samsung"});
    categories.push({ id: 11, name: "Toshiba"});
    categories.push({ id: 12, name: "Sony"});

    // Add computer (Acer)
    computers.push({ id: 1, name: "Acer 1", price: 578, description: "Acer 1 desc", isNew: false, imagePath: "img/acer.jpg", userId: 1, categoryId: 1 });
    computers.push({ id: 2, name: "Acer 2", price: 4355, description: "Acer 2 desc", isNew: true, imagePath: "img/acer.jpg", userId: 1, categoryId: 1 });
    computers.push({ id: 3, name: "Acer 3", price: 5433, description: "Acer 3 desc", isNew: false, imagePath: "img/acer.jpg", userId: 1, categoryId: 1 });
    computers.push({ id: 4, name: "Acer 4", price: 578, description: "Acer 4 desc", isNew: true, imagePath: "img/acer.jpg", userId: 1, categoryId: 1 });
    computers.push({ id: 5, name: "Acer 5", price: 578, description: "Acer 5 desc", isNew: false, imagePath: "img/acer.jpg", userId: 1, categoryId: 1 });
    computers.push({ id: 6, name: "Acer 6", price: 478, description: "Acer 6 desc", isNew: true, imagePath: "img/acer.jpg", userId: 1, categoryId: 1 });
    computers.push({ id: 7, name: "Acer 7", price: 578, description: "Acer 7 desc", isNew: true, imagePath: "img/acer.jpg", userId: 1, categoryId: 1 });
    computers.push({ id: 8, name: "Acer 8", price: 3789, description: "Acer 8 desc", isNew: false, imagePath: "img/acer.jpg", userId: 1, categoryId: 1 });
    computers.push({ id: 9, name: "Acer 9", price: 2258, description: "Acer 9 desc", isNew: true, imagePath: "img/acer.jpg", userId: 2, categoryId: 1 });
    computers.push({ id: 10, name: "Acer 10", price: 3278, description: "Acer 10 desc", isNew: false, imagePath: "img/acer.jpg", userId: 2, categoryId: 1 });
    computers.push({ id: 11, name: "Acer 11", price: 3978, description: "Acer 11 desc", isNew: false, imagePath: "img/acer.jpg", userId: 2, categoryId: 1 });
    computers.push({ id: 12, name: "Acer 12", price: 4228, description: "Acer 12 desc", isNew: false, imagePath: "img/acer.jpg", userId: 2, categoryId: 1 });
    computers.push({ id: 13, name: "Acer 13", price: 4378, description: "Acer 13 desc", isNew: false, imagePath: "img/acer.jpg", userId: 2, categoryId: 1 });
    computers.push({ id: 14, name: "Acer 14", price: 4578, description: "Acer 14 desc", isNew: true, imagePath: "img/acer.jpg", userId: 2, categoryId: 1 });
    computers.push({ id: 15, name: "Acer 15", price: 4778, description: "Acer 15 desc", isNew: false, imagePath: "img/acer.jpg", userId: 2, categoryId: 1 });
    computers.push({ id: 16, name: "Acer 16", price: 4988, description: "Acer 16 desc", isNew: false, imagePath: "img/acer.jpg", userId: 2, categoryId: 1 });
    computers.push({ id: 17, name: "Acer 17", price: 5178, description: "Acer 17 desc", isNew: false, imagePath: "img/acer.jpg", userId: 3, categoryId: 1 });
    computers.push({ id: 18, name: "Acer 18", price: 5378, description: "Acer 18 desc", isNew: false, imagePath: "img/acer.jpg", userId: 3, categoryId: 1 });
    computers.push({ id: 19, name: "Acer 19", price: 5578, description: "Acer 19 desc", isNew: true, imagePath: "img/acer.jpg", userId: 3, categoryId: 1 });
    computers.push({ id: 20, name: "Acer 20", price: 5678, description: "Acer 20 desc", isNew: true, imagePath: "img/acer.jpg", userId: 3, categoryId: 1 });
    computers.push({ id: 21, name: "Acer 21", price: 6378, description: "Acer 21 desc", isNew: true, imagePath: "img/acer.jpg", userId: 3, categoryId: 1 });
    computers.push({ id: 22, name: "Acer 22", price: 6478, description: "Acer 22 desc", isNew: false, imagePath: "img/acer.jpg", userId: 3, categoryId: 1 });
    computers.push({ id: 23, name: "Acer 23", price: 6678, description: "Acer 23 desc", isNew: true, imagePath: "img/acer.jpg", userId: 3, categoryId: 1 });
    computers.push({ id: 24, name: "Acer 24", price: 6878, description: "Acer 24 desc", isNew: true, imagePath: "img/acer.jpg", userId: 3, categoryId: 1 });
    computers.push({ id: 25, name: "Acer 25", price: 7278, description: "Acer 25 desc", isNew: true, imagePath: "img/acer.jpg", userId: 4, categoryId: 1 });
    computers.push({ id: 26, name: "Acer 26", price: 7378, description: "Acer 26 desc", isNew: true, imagePath: "img/acer.jpg", userId: 4, categoryId: 1 });
    computers.push({ id: 27, name: "Acer 27", price: 7578, description: "Acer 27 desc", isNew: true, imagePath: "img/acer.jpg", userId: 4, categoryId: 1 });
    computers.push({ id: 28, name: "Acer 28", price: 7678, description: "Acer 28 desc", isNew: false, imagePath: "img/acer.jpg", userId: 4, categoryId: 1 });
    computers.push({ id: 29, name: "Acer 29", price: 7878, description: "Acer 29 desc", isNew: true, imagePath: "img/acer.jpg", userId: 4, categoryId: 1 });
    computers.push({ id: 30, name: "Acer 30", price: 8378, description: "Acer 30 desc", isNew: true, imagePath: "img/acer.jpg", userId: 4, categoryId: 1 });
    computers.push({ id: 31, name: "Acer 31", price: 8478, description: "Acer 31 desc", isNew: true, imagePath: "img/acer.jpg", userId: 4, categoryId: 1 });
    computers.push({ id: 32, name: "Acer 32", price: 8678, description: "Acer 32 desc", isNew: false, imagePath: "img/acer.jpg", userId: 4, categoryId: 1 });
    computers.push({ id: 33, name: "Acer 33", price: 8978, description: "Acer 33 desc", isNew: true, imagePath: "img/acer.jpg", userId: 5, categoryId: 1 });
    computers.push({ id: 34, name: "Acer 34", price: 9178, description: "Acer 34 desc", isNew: true, imagePath: "img/acer.jpg", userId: 5, categoryId: 1 });
    computers.push({ id: 35, name: "Acer 35", price: 9378, description: "Acer 35 desc", isNew: true, imagePath: "img/acer.jpg", userId: 5, categoryId: 1 });
    computers.push({ id: 36, name: "Acer 36", price: 9478, description: "Acer 36 desc", isNew: false, imagePath: "img/acer.jpg", userId: 5, categoryId: 1 });
    computers.push({ id: 37, name: "Acer 37", price: 9678, description: "Acer 37 desc", isNew: false, imagePath: "img/acer.jpg", userId: 5, categoryId: 1 });
    computers.push({ id: 38, name: "Acer 38", price: 378, description: "Acer 38 desc", isNew: false, imagePath: "img/acer.jpg", userId: 5, categoryId: 1 });
    computers.push({ id: 39, name: "Acer 39", price: 878, description: "Acer 39 desc", isNew: true, imagePath: "img/acer.jpg", userId: 5, categoryId: 1 });
    computers.push({ id: 40, name: "Acer 40", price: 8378, description: "Acer 40 desc", isNew: true, imagePath: "img/acer.jpg", userId: 5, categoryId: 1 });
 
    
    var idCounter = 40;

    //acer

    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 40; i++ ) {
            idCounter++;
            computers.push(
                {
                    id: idCounter, name: "Acer" + idCounter, price: computers[i].price, descripption: "Acer" + idCounter + " desc",
                    isNew: computers[i].isNew, imagePath: "img/acer.jpg", userId: computers[i].userId, categoryId: 1
                }
            );
        }
    }
    //hp
    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "hp" + idCounter, price: computers[i].price, descripption:"hp" + (1+1) + " desc",
                isNew: computers[i].isNew, imagePath: "img/hp.jpg", userId: computers[i].userId, categoryId: 2
            }
        );
    }

    //asus

    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "Asus" + idCounter, price: computers[i].price, descripption: "Asus" + (1+1) + " desc",
                isNew: computers[i].isNew, imagePath: "img/asus.jpg", userId: computers[i].userId, categoryId: 3
            }
        );
    }

    //dell
    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "Dell" + idCounter, price: computers[i].price, descripption: "dell" + (1+1) + " desc",
                isNew: computers[i].isNew, imagePath: "img/dell.jpg", userId: computers[i].userId, categoryId: 4
            }
        );
    }

    //lenovo
    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "Lenovo" + idCounter, price: computers[i].price, descripption:"lenovo" + (1+1) + " desc",
                isNew: computers[i].isNew, imagePath: "img/lenovo.jpg", userId: computers[i].userId, categoryId: 5
            }
        );
    }


    for (var i = 0; i < computers.length; i++) {
        const c = computers[i];
        c.ran = 8;
        c.cpu = "Core I 9";
        c.drive = 500; c.driveType = (i % 2 == 0) ? 'hdd' : 'ssd';
        c.os = "Windows 10";
        c.videoCard = 3;
    }

    for (var i = 0; i < computers,length; i++) {
        const c = computers[i];

        for (var j = 0; j < users.length; j++) {
            const u = users[j];
            if (u.id === c.userId) {
                c.phone = u.phone; break;
            }  
        }
    }

}

//all compters
addObjects();

function loadDataFromLocalStorage() {
    var usersString = localStorage.getItem("users");
    var categoriesString = localStorage.getItem("categories");
    var computersString = localStorage.getItem("computers");

    if (usersString == null) {
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        user = JSON.parse(usersString);
    }

    if (categoriesString == null) {
        localStorage.setItem("categories", JSON.stringify(categories));
    } else {
        categories = JSON,parse(categoriesString);
    }

    if (computersString == null) {
        localStorage.setItem("computers", JSON.stringify(computers));
    } else {
        computers = JSON.parse(computersString);
    }

}

loadDataFromLocalStorage();
comsole.log("Total number or all computers =" + computers.length);
function onClearLocalStorage() {
    localStorage.removeItem("users")
    localStorage.removeItem("categories")
    localStorage.removeItem("computers")
    localStorage.removeItem("basketComputers");
    localStorage.removeItem("orders");
    localStorage.removeItem("customers");
    localStorage.removeItem("order-customer");
    localStorage.removeItem("logged-in-user-id");
    window.location.reload();

}

var customers = [];
customers.push({ id: 1, name: "Customer-1", address: "Customer-1-address", phone: "044-111-2222", email:"customer1@gmail.com"});
customers.push({ id: 2, name: "Customer-2", address: "Customer-2-address", phone: "044-555-7777", email:"customer2@gmail.com"});
customers.push({ id: 3, name: "Customer-3", address: "Customer-3-address", phone: "044-999-5555", email:"customer3@gmail.com"});



var customersString = localStorage.getItem("customers");

if (customersString == null) {
    localStorage.setItem("customers", JSON.stringify(customers));
} else {
    customers = JSON.parse(customersString);
}


var orders = [];

// 1 order
var order1 = {};
order1.id = 1;
order1.note = " Order will be in 2 days. ";
var order1BasketComputers = [];
order1BasketComputers.push({ id: 1, count: 7, computer: computers[1] });
order1BasketComputers.push({ id: 2, count: 3, computer: computers[3] });
order1BasketComputers.push({ id: 3, count: 9, computer: computers[5] });
order1.BasketComputers = order1BasketComputers;
order1.userId = 1;
order1.register = new Date(2023, 09, 23);
order1.totalPrice = calculateOrderTotalPrice(order1);



//order 2
var order2 = {};
order2.id = 2;
order2.note = " Order will be in 4 days and add 4 keybaord in order. ";
var order2BasketComputers = [];
order2BasketComputers.push({ id: 4, count: 12, computer: computers[51] });
order2BasketComputers.push({ id: 5, count: 15, computer: computers[52] });
order2BasketComputers.push({ id: 6, count: 6, computer: computers[53] });
order2.BasketComputers = order2BasketComputers;
order2.customer = customers[0];
order2.userId = 2;
order2.register = new Date(2023, 09, 30);
order2.totalPrice = calculateOrderTotalPrice(order2);

//register 3 order
var order3 = {};
order3.id = 2;
order3.note = " Order will be in 12 days and add 2 screen. ";
var order3BasketComputers = [];
order3BasketComputers.push({ id: 7, count: 1, computer: computers[97] });
order32BasketComputers.push({ id: 8, count: 2, computer: computers[99] });
order3BasketComputers.push({ id: 9, count: 3, computer: computers[101] });
order3.BasketComputers = order2BasketComputers;
order3.customer = customers[2];
order3.userId = 3;
order3.register = new Date(2023, 10, 09);
order3.totalPrice = calculateOrderTotalPrice(order3);



orders.push(order1);
orders.push(order2);
orders.push(order3);


// var ordersString = localStorage.getItem("orders");

// if (ordersString == null) {
//     localStorage.setItem("orders", JSON.stringify(orders));
// } else {
//     orders = JSON.parse(ordersString);
// }



var myOrdersButton = document.getElementById('my-login-button');

myOrdersButton.addEventListener('click', function () {
    window.location.href = "login.html";
});



function calculateOrderTotalPrice(order) {
    var totalPrice = 0;

    for (let index = 0; index < order,BasketComputers,length; index++) {
        const b = order.BasketComputers[index];
        totalPrice += b.count = b.computer.price;

    }

    return totalPrice;
}



var loggedInUserName = document.getElementById('logged-in-user-name');
console.log('userLoggedIn : ' + userLoggedIn);
function showUsermane() {
    if (userLoggedIn) {
        var username = '';
        for (let index = 0; index < user.length; index++) {
            const user = users[index];
            if (user.id == loggedInUserId) {
                username = user.username; break;
            }
        }
        loggedInUserName.innerHTML = username;
        if (username === 'admin') {
            adminPageButton.style.display = 'inline-block';
        } else {
            adminPageButton.style.display = 'none';
        }
    } else {
        loggedInUserName.innerHTML = '';
        adminPageButton.style.display = 'none';
    }
}
showUsermane();