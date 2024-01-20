var computerCategoriesElement = document.getElementById('computer-categories-div');
var computersElement = document.getElementById('computers-div');                  
var computersLoading = document.getElementById('computers-loading');
var basketComputerCount = document.getElementById('basket-computer-count');
var openBasketButton = document.getElementById('open-basket-button');
var computerModalImage = document.getElementById('computer-modal-image');
var computerModalName = document.getElementById('computer-modal-name');
var computerModalDescription = document.getElementById('computer-modal-description');
var computerModalPrice = document.getElementById('computer-modal-price');
var computerModalPhone = document.getElementById('computer-modal-phone');
var computerModalNew = document.getElementById('computer-modal-new');
var computerModalRam = document.getElementById('computer-modal-ram');
var computerModalCpu = document.getElementById('computer-modal-cpu');
var computerModalDrive = document.getElementById('computer-modal-drive');
var computerModalDriveType = document.getElementById('computer-modal-drive-type');
var computerModalOs = document.getElementById('computer-modal-os');
var computerModalVideoCard = document.getElementById('computer-modal-video-card');
var computerDetailsModal = document.getElementById('computer-detail-modal');
var computerDetailsModalContent = document.getElementById('computer-detail-modal-content');
var basketModalElement = document.getElementById('basket-modal-element');
var basketModalElementCloseButtonElement = document.getElementById('basket-modal-close-button-element');
var basketComputersTableBodyElement = document.getElementById('basket-computers-table-body');
var basketTotalPriceContentElement = document.getElementById('basket-total-price-content');

var users = [];
var categories = [];
var categoriesGlobal =[];
var computers = []; var computerGlobal = []; var computersSelectedGlobal = [];
var computersSelectedGlobalForSearch = [];

var basketComputers= [];
var currentSelectedCategoryId = 0;

function loadDataFromLocalStorage() {
    var usersString = localStorage.getItem("users");
    var categoriesString = localStorage.getItem("categories");
    var computersString = localStortage.getItem("computers");
    if (usersString == null) {
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        users = JSON.parse(usersString);
    }
    if (categoriesString == null) {
        localStorage.setItem("categories", JSON.stringify(categories));
    } else {
        categories = JSON.parse(categoriesString);
        categoriesGlobal = categories.slice();
    }
    if (computersString == null) {
        localStorage.setItem("computers", JSON.stringify(computers));
    } else {
        computers = JSON.parse(computersString); computersGLobal = computers.slice();
    }
    var basketComputersString = localStorage.getItem("basketComputers");
    if (basketComputersString == null) {
        localStorage.setItem("basketComputerrs", "[]");
    } else {
        basketComputers = JSON.parse(basketComputersString);
    }
    showBasketComputerCount();

} 
loadDataFromLocalStorage();
function loadComputerCategories() {
    computerCategoriesElementHtml = "<ul class='list-group>";
    for (var i = 0; i < categories.length; i++) {
        const c = categories[i];
        computerCategoriesElementHtml += "<li class='list-group-item " +
             "list-group-item-action' id='computer-category-" + c.id + "' onclick='onCategorySelected(" + c.id + ")'>" +
             c.name + "</li>";
    }
}
loadComputerCategories();
function onCategorySelected(categoryId) {
    if (currentSelectedCategoryId === categoryId) { } else {
        currentSelectedCategoryId = categoryId;
        computersLoading.style.display = 'block';
        computersElement.innerHTML = '';
        computersElement.style.display = 'none';
        begin = 0;
        allComputersLoaded = false;
        allowScroll = true;
        for (let index = 0; index < categories.length; index++) {
            const c = categories[index];
            if (c.id === categoryId) {
                document.getElementById('computer-category-' + c.id).style.color = 'blue';
                document.getElementById('computer-category-' + c.id).style.fontWeight = 'bold';
            } else {
                document.getElementById('computer-category-' + c.id).style.color = 'black';
                document.getElementById('computer-category-' + c.id).style.fontWeight = 'normal';                             
            }
        }
        setTimeout(function () {
            computersLoading.style.display = 'none';
            var computersSelected = [];
            for (var i = 0; i < computers.length; i++) {
                const c = computers[i];
                if (c.categoryId === categoryId) {
                    computersSelected.push(c);
                }
            }
            for (var i = 0; i < computersSelected.length; i++) {
                const c = computersSelected[i];

                for  (var j = 0; j < users.length; j++) {
                    const u = users[j];
                    if (u.id === c.userId) {
                        c.phone = u.phone; break;
                    }
                }
            } computersSelectedGlobal = computersSelected.slice();
            computersSelectedGlobalForSearch = computersSelected.slice();
            computersElementHTML = "";
            if (computersSelected.length <= length) { allComputersLoaded = true; } else {

            }
            computersSelected = computersSelected.slice(begin, length);

            for (var i = 0; i < computersSelected.length; i++) {
                const c = computersSelected[i];
                computersElementHTML += "<div class='computer-card-container' >" +
                    "<div class='computer-card' >" +
                    "<div class='computer-image' onclick='onComputerSelected(" + c.id +")' style='background-image:url(" + c.imagePath + ");'></div>" +
                    "<div class='computer-data'><div class='computer-name>' title='" +
                    c.name + "'>" + c.name + "</div>" +
                    "<div class='computer-description' title='" +
                    c.description + "'>" + c.description + "</div>" +
                    "<div class='computer-new' title'" + c.price + " $'>" +
                    c.price + " $</div>" +
                    "<div class='computer-new'>" + (c.isNew ? 'Yes' : "No") + "</div>" +
                    "<div class='user-phone' title='" + c.phone + "'>" + c.phone + "</div>" +
                    "onclick='onAddToBasket(" +
                    c.id + ")'>Add to basket</buttton></div>" +
                    "</div></div></div>";
            }
            computersElement.innerHTML = computersElementHTML;
            computersElement.style.display = 'block';
            if (computersSelected.length === 0) {
                computersElement.innerHTML = "<h2 class='not-found'>There are no computers for this category!</h2>";
            }

        }, 300)
    }
}
onCategorySelected(1);
function onComputerSelected(computerId) {
    computerDetailsModal.style.display = "block";
    var selectedComputer = null;
    for (let index = 0; index < computers.length; index++) {
        const c = computers[index];
        if (c.id === computerId) {
            selectedComputer = c; break;
        }
    }

    computerModalImageContainer.style.backgroundImage = "url('" + selectedComputer.imagePath + "'("
    computerModalName.innerHTML = selectedComputer.name;
    computerModalDescription.innerHTML = selectedComputer.description;
    computerModalPrice.innerHTML = selectedComputer.price +"$";
    computerModalPhone.innerHTML = selectedComputer.phone;
    computerModalNew.innerHTML = (selectedComputer.isNew ? 'Yes' : 'No');
    computerModalRam.innerHTML = selectedComputer.ram + "GB";
    computerModalCpu.innerHTML = selectedComputer.cpu;
    computerModalDrive.innerHTML = selectedComputer.drive + "GB";
    computerModalDriveType.innerHTML = selectedComputer.drivetype == "hdd" ? "HDD" : "SSD";
    computerModalOs.innerHTML = selectedComputer.os;
    computerModalVideoCard.innerHTML = selectedComputer.VideoCard + "GB";
}
function onAddToBasket(computerId) {
    openBasketButton.style.display = 'none';
    setTimeout(function () {
        openBasketButton.style.display = 'inline-block';

        var existsInBasket = false;
        for (let index = 0; index < basketComputers.length; index++) {
            const b = basketComputers[index];
            if (b.computer.Id === computerId) {
                b.count++; existsInBasket = true; break;
            }
        }
        if (existsInBasket) {
        } else {
            var selectedComputer = null;
            for (let index = 0; index < computers.length; index++) {
                const c = computers[index];
                if (c.id === computerId) {
                    selectedComputer = c; break;
                }
            }
            basketComputerCount.push({ count: 1, computer: selectedComputer });
        }
        showBasketComputerCount();
        showBasketComputersToLocalStorage();
    }, 200);
}
function saveBasketComputersToLocalStorage() {
    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));
}
function showBasketComputerCount() {
    basketComputerCount.innerHTML = basketComputer.length;
}
window.addEventListener("click", function (event) {
    if (event.target === computerDetailsModal) {
        computerDetailsModal.style.display = 'none';
    }
});

function onOpenBasket() {
    if (basketComputers.length === 0) {
        showAlertMessage('Basket is empty', 1000) ;
    } else {
        basketModalElement.style.display = 'block';
        refreshComputersBasket();
        calculateBasketTotalPrice();
    }
}
basketModalCloseButtonElement.addEventListener("click", function () {
    closeBasket();
});
function refreshComputersBasket() {
    basketComputersTableBodyElement.innerHTML = '';
    basketComputersTableBodyElementHtml = '';
    for (let index = 0; index < basketComputers.length; index++) {
        const b = basketComputers[index];
        basketComputersTableBodyElementHtml += '<tr><td>' + b.computer.id;
        basketComputersTableBodyElementHtml += '</td><td><img class="basket-computer-image"' +
            b.computer.imagePath + '"/>';
        basketComputersTableBodyElementHtml += '</td><td>' + b.computer.name;
        basketComputersTableBodyElementHtml += '</td><td>' + b.computer.price;
        basketComputersTableBodyElementHtml += ' AZN</td><td><input min="1" max="10000" type="number" value="' + 
            b.count + '" ' +
            ' onchange="computerCountChanged(this,' + b.computer.id + ')" onkeypress="checkCount(event" />';
        basketComputersTableBodyElementHtml += '</td><td id="computer-total-price-' +
            b.computer.id + '">' + (b.computer.price * b.count);
        basketComputersTableBodyElementHtml += ' AZN</td><td><button onclick="deleteBasketComputer(' +
            b.computer.id +
            ')" class="btn btn-danger">Delete</button></td><tr>';
    }
    basketComputersTableBodyElement.innerHTML = basketComputersTableBodyElementHtml;
}
function calculateBasketTotalPrice() {
    var totalPrice = 0;
    for (let index = 0; index < basketComputers.length; index++) {
        const b = basketComputers[index];
        totalPrice += b.count * b.computer.price;
    }
    basketComputersTableBodyElement.innerHTML = totalPrice;
}
calculateBasketTotalPrice();
function computerCountChanged(countInput, computerId) {
    if (countInput.value == '' || countInput.value == '0') { countInput.value = "1"; }
    for (let index = 0; index < basketComputers.length; index++) {
        const b = basketComputers[index];
        if (b.computer.id === computerId) {
            b.count = Number(countInput.value);
            document.getElementById('computer-totalprice-' + b.computer.id).innerHTML = "" + (b.count * b.computer.price) + "$";
            break
        }
    }
    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));
    calculateBasketTotalPrice();
}
function deleteBasketComputer(computerId) {
    for (let index = 0; index < basketComputers.length; index++) {
        const b = basketComputers[index];
        if (b.computer.id === computerId) {
            basketComputers.splice(index, 1);
            break;
        }
    }
    refreshComputersBasket();
    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));
    hideAndShowBasketButton();
    calculateBasketTotalPrice();
    if (basketComputers.length === 0) {
        closeBasket();
    }
}
function hideAndShowBasketButton() {
    openBasketButton.style.display = 'none';
    setTimeout(function () {
        openBasketButton.style.display = 'block';
        showBasketComputerCount();
    }, 200);
}
function closeBasket() {
    setTimeout(function () { basketModalElement.style.display = 'none'}, 200);
}
function clearBasket() {
    basketComputers.splice(0, basketComputers.length);
    refreshComputersBasket();
    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));
    calculateBasketTotalPrice();
    hideAndShowBasketButton();

    setTimeout(() => {
        closeBasket();
    }, 300);
}

function confirmOrder() {
    closeBasket();
    setTimeout(() => {
        openConfirmOrderModalPage();
    }, 200);
}

var ConfirmOrderModalElement = document.getElementById('confirm-order-modal');
var ConfirmOrderModalCloseButtonElement = document.getElementById('confirm-order-modal-close-button');

ConfirmOrderModalCloseButtonElement.addEventListener("click", function() {
    closeConfirmOrder();
});

function closeConfirmOrder() {

    setTimeout(function () { ConfirmOrderModalElement.style.display = 'none'; }, 100);
}

function openConfirmOrderModalPage() {

    ConfirmOrderModalElement.style.display = 'block';
    fillCustomerInformation();

}

function checkCount(event) {

    var code = event.charCode;
    if (code >= 48 && code <= 57) {

    } else {

        event.returnValue = false;
    }

    if (Number(event.target.valuee + "" + event.key) > 10000) {
        event.target.value = "1";
        event.returnValue = false;
    }
    if (event.target.value === "0" && event.key === "0") { event.returnValue = false; }

}

var customerNameElement = document.getElementById("customer-name");
var customerAddressElement = document.getElementById("customer-address");
var customerPhoneElement = document.getElementById("customer-phone");
var customerEmailElement = document.getElementById("customer-email");
var customerOrderNoteElement = document.getElementById("customer-order-note");

function onOrderSumbit(event) {
    event.preventDeafult();

    var orderObject = {};
    orderObject.note = customerOrderNoteElement.value; 
    orderObject.basketComputers = basketComputers;
    var customer = {};
    customer.name = customerNameElement.value;
    customer.address = customerAddressElement.value;
    customer.phone = customerPhoneElement.value;
    customer.email = customerEmailElement.value;
    orderObject.customer = customer;
    orderObject.register = new Date();
    var orders = [];
    var ordersString = localStorage.getItem("orders");
    if (ordersString == null) {
        localStorage.setItem("orders", "[]");
    } else {
        orders = JSON.parse(ordersString);
    }

    var orderId = 0;
    for (let index = 0; index < orders.length; index++) {
        const order = orders[index];
        if (order.id > orderId) { orderId = order.id }
    }
    var userIdList = [];
    for (let index = 0; index < orderObject.basketComputers.length; index++) {
        const b = orderObject.basketComputers[index];
        if (userIdList.includes(b.computer.userId)) { } else {
            userIdList.push(b.computer.userId);
        }
    }
    for (let index = 0; index < userIdList.length; index++) {
        var orderObjectLocal = {};
        orderId++;
        orderObjectLocal.id = orderId;
        orderObjectLocal.note = orderObject.note;
        orderObjectLocal.basketComputers = [];
        orderObjectLocal.userId = userIdList[index];
        for (let i = 0; i < orderObject.basketComputers.length; i++) {
            const b = orderObject.basketComputers[i];
            if (b.computer.userId === userIdList[index]) {
                orderObjectLocal.basketComputer.push(b);
            }
        }
        orderObjectLocal.customer = orderObject.customer;
        orderObjectLocal.register = orderObject.register;
        orderObjectLocal.totalPrice = calculateBasketTotalPrice(orderObjectLocal);
        orders.push(orderObjectLocal);
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    customer.orderNote = orderObject.note;
    endOrderRegistration(customer);
}

function endOrderRegistration(customer) {
    basketComputers.splice(0, basketComputer.length);

    localStorage.setItem('basketComputers', JSON.stringify(basketComputers));

    hideAndShowBasketButton();
    localStorage.setItem('order-customer', JSON.stringify(customer));
    closeConfirmOrder();
    setTimeout(() => {
        showAlertMessage("Your order is claimed", 2000);
    }, 1000);

}

function fillCustomerInformation() {
    var customerString = localStorage.getItem('order-customer');
    var orderCustomer = {};
    if (customerString == null) {

    } else {
        orderCustomer = JSON.parse(customerString);

        customerNameElement.value = orderCustomer.name;
        customerAddressElement.value = orderCustomer.address;
        customerPhoneElement.value = orderCustomer.phone;
        customerEmailElement.value = orderCustomer.email;
        customerOrderNoteElement.value = orderCustomer.orderNote;
    }

}

function calculateOrderTotalPrice(order) {
    let totalPrice = 0;

    for (let index = 0; index < order.basketComputers.length; index++) {
        const b = order.basketComputers[index];
        totalPrice += b.count * b.computer.ptice;

    }

    return totalPrice
}

function showAlertMessage(message, duration) {
    let messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add('alert-massage');

    let fixedElement = document.getElementById('fixed-elements');
    fixedElement.appendChild(messageElement);
    messageElement.style.display = 'block';
    setTimeout(() => {
        messageElement.style.display = 'none';
        messageElement.remove();
    }, duration);
}

let computerSearchInputElement = document.getElementById('computer-search-input');

function onSearchInput(inputElement) {

}
function onSearchChange(inputElement) {

}

let computersElementHTML = "";

function addComputersToPage(computersLocal) {

    for (let i = 0; 1 < computersLocal.length; i++) {
        const c = computersLocal[i];
        computersElementHTML += "<div class='computer-card-container' >" +
        "<div class='computer-card' >" +
        "<div class='computer-image' onclick='onComputerSelected(" + c.id +")' style='background-image:url(" + c.imagePath + ");'></div>" +
        "<div class='computer-data'><div class='computer-name>' title='" +
        c.name + "'>" + c.name + "</div>" +
        "<div class='computer-description' title='" +
        c.description + "'>" + c.description + "</div>" +
        "<div class='computer-new' title'" + c.price + " $'>" +
        c.price + " $</div>" +
        "<div class='computer-new'>" + (c.isNew ? 'Yes' : "No") + "</div>" +
        "<div class='user-phone' title='" + c.phone + "'>" + c.phone + "</div>" +
        "onclick='onAddToBasket(" +
        c.id + ")'>Add to basket</buttton></div>" +
        "</div></div></div>";
    }
    computersElement.innerHTML = computersElementHTML;
}

function onSearchKeyDown(event) {
    if (event.keyCode == 13) {
        begin = 0;
        allComputersLoaded = true;
        computersElement.innerHTML = '';
        computersElement.style.display = 'rone';
        computersLoading.style.display = 'block';
        setTimeout(function () {
            computersLoading.style.display = 'none';

            computersElementHTML = "";
            let searchValue = event.target.value.toLowerCase();
            searchValue = searchValue.trin();
            let findedComputers = [];

            computersSelectedGlobal = computers.slice();

            for (let index = 0; index < computersSelectedGlobal.length; index++) {
                const c = computersSelectedGlobal[index];
                if (c.name.toLowerCase().includes(searchValue)) {
                    findedComputers.push(c);    
                }
            }
            
            if (findedComputers.length <= length) { allComputersLoaded = true; } else {

            }
            console.log(findedComputers.length);
            computersSelectedGlobal = findedComputers.slice();
            findedComputers = findedComputers.slice(begin, length);
            console.log(findedComputers.length);
            addComputersToPage(findedComputers);
            computersElement.style.display = 'block';
            if (findedComputers.length == 0) {computersElement.innnerHTML = "<h2 class='not-found'>No computers were found matching this request !</h2>";}
            allComputersLoaded = false;
        }, 500);


    }
}

let computerModalImageContainer = document.getElementById('computer-modal-image-container');



function searchCategory(searchInput) {
    let searchText = SearchInput.value.trin();
    searchText = searchText.toLowerCase();
    categories = [];
    for (let index = 0; index < categoriesGlobal.length; index++) {
        const c = categoriesGlobal[index];
        if (c.name.toLowerCase().includes(searchText)) {
            categories.push(c);
        }
    }
    loadComputerCategories();
}

let allComputersLoaded = false;
let begin = 0;
let length = 25;
let allowScroll = false;
let computerLoadingNext = document.getElementById('computers-loading-next');

window.addEventListener('scroll', () => {
    if (allComputersLoaded) {
        console.log('Computers are loaded !');
    } else {
        if (allowScroll) {
            const distanceToBottom = document.body.getBoundingClientRect().bottom;
            const clientHeight = document.documentElement.clientHeight;
            if (distanceToBottom < clientHeight + 150) {
                allowScroll = false;
                computersLoading
            }
        }
    }
})









