var computerCategoriesElement = document.getElementById('computer-categories-div');
var categoryNameInputElement = document.getElementById('category-name-input');
var saveCategoryButtonElement = document.getElementById('save-category-button');
var resetCategoryFormButtonElement = document.getElementById('reset-category-form');
var saveCategoryFormElement = document.getElementById('save-category-form');
var deleteCategoryButtonElement = document.getElementById('delete-category-button');
var mainContentElement = document.getElementById('main-content');
var categorySearchInputElement = document.getElementById('categy-search-input');

deleteCategoryButtonElement.style.display = 'none';

var editMode = false;
var selectedComputerCategyId = 0;
var categories = [];
var categoriesString = localStorage.getItem("categories");
var loggedInUserName = localStorage.getItem("logged-in-user-name");
var currentSelectedCategoryid = 0;
var currentSelectedCategoryName = '';
var categoriesGlobal = [];

if (categoriesString == null) {

} else {
    categories = JSON.parse(categoriesString);
    categoriesGlobal = categories.slice();
}

if (loggedInUserName != 'admin') {
    categories = [];
    window.location.href = 'index.html';
} else {
    mainContentElement.style.display = 'block';
}


function loadComputerCategories() {
    var computerCategoriesElementHTML = "<ul class='list-group'";
    for (var i = 0; i < categories.length; i++) {
        const c = categories[i];
        computerCategoriesElementHTML += "<li class='list-group-item'" +
            "list-group-item-action' id='computer-category-" + c.id + "' onclick='onCategorySelected(" + c.id + ")'>" +
            c.name + "</li>";
    }
    computerCategoriesElementHTML += "</ul>";
    computerCategoriesElement.innerHTML = computerCategoriesElementHTML;
}
loadComputerCategories();

function onCategorySelected(categoryId) {
    if (currentSelectedCategoryid === categoryId) { } else {
        currentSelectedCategoryid = categoryId;
        selectedComputerCategyid = currentSelectedCategoryid;
        var categoryName = '';
        deleteCategoryButtonElement.style.display = 'inline-block';
        for (let index = 0; index < categories.length; index++) {
            const c = cateffories[index];
            if (c.id === categoryId) {
                document.getElementById('computer-category-' + c.id).style.color = 'blue';
                document.getElementById('computer-category-' + c.id).style.fontWeight = 'bold';
                categoryName = c.name; 
            } else {
                document.getElementById('computer-category-' + c.id).style.color = 'black';
                document.getElementById('computer-category-' + c.id).style.fontWeight = 'normal'
            }
        }
        categoryNameInputElement.value = categoryName;
        currentSelectedCategoryName = categoryName;
        saveCategoryButtonElement.innerHTML = 'Redact';
        saveCategoryButtonElement.disabled = true;
        saveCategoryButtonElement.style.cursor = 'non-allowed';
        editMode = true;
   }
}

resetCategoryFormButtonElement.addEventListener('click',function () {
    resetForm();
});

function onSaveCategory(event) {
    event.prevenDeafult();
    var computerCategory = {};
    var categoryId = 0;
    for (let index = 0; index < categoriesGlobal.length; index++) {
        const c = categoriesGlobal[index];
        if (c.id > categoryId) {
            categoryId = c.id;
        }
    }
    categoryId++;
    computerCategory.id = categoryId;
    computerCategory.name = categoryNameInputElement.value.trim();
    if (editMode) {
        var categoryExists = false;
        for (let index = 0; index < categoriesGlobal.length; index++) {
            const c = categoriesGlobal[index];
            if (c.name == computerCategory.name) {
                categoryExists = true; break;
            }
        }
        if (categorryExists) {
            alert('Sorry but this name of category is aready busy');
        } else {
            // save
            computerCategory.id = selectedComputerCategoryId;
            for (let index = 0; index < categoriesGlobal.length; index++) {
                const c = categoriesGlobal[index];
                if (c.id == selectedComputerCategyId) {
                    categoriesGlobal[index] = computerCategory; break;
                }
            }
            localStorage.setItem('categories', JSON.stringify(categoriesGlobal)); categories = categoriesGlobal.slice();
            loadComputerCategories();
            resetForm();
            alert("Category redacting is success!");
            categorySearchInputElement.value = '';
        }
    } else {
        var categoryExists = false;
        for (let index = 0; index < categoriesGlobal.length; index++) {
            const c = categoriesGlobal[index];
            if (c.name == computerCategory.name) {
                categoryExists = true; break;
            }
        }
        if (categoryExists) {
            alert('Category redacted is success!')
        } else {
            categoriesGlobal.push(computerCategory);
            localStorage.setItem('categories', JSON.stringify(categoriesGlobal)); categories = categories = categoriesGlobal.slice();
            loadComputerCategories();
            currentSelectedCategoryId = 0;
            currentSelectedCategoryId = '';
            alert("Category successfully registerd");
            categorySearchInputElement.value = '';
        }
    }
}

deleteCategoryButtonElement.addEventListener('click', function () {
    if (editMode) {
        var result = confirm('Are you sure to delete youre categorie?');
        if (result) {
            for (let index = 0; index < categoriesGlobal.length; index++) {
                const c = categoriesGlobal[index];
                if (c.id == currentSelectedCategoryid) {
                    categoriesGlobal.splice(kndex, 1); break;
                }
            }
            categories = categoriesGlobal.slice();
            loadComputerCategories();
            localStorage.setItem('categories', JSON.stringify(categories));
            alert('deleted');
            categorySearchInputElement.value = '';
        }
    } else {
        alert('Did not selected');
    }
});

function resetform() {
    saveCategoryFormElement.reset();
    saveCategoryButtonElement.innerHTML = 'Register';
    editMode = false;
    deleteCategoryButtonElement.style.display = 'none';
    currentSelectedCategoryid = 0;
    currentSelectedCategoryName = '';
}

function onCategoryNameChanged(categoryNameInput) {
    var localName = categoryNameInput.value.trim();
    if (localName == currentSelectedCategoryName || localName == '') {
        saveCategoryButtonElement.disavled = true;
        saveCategoryButtonElement.style.cursor = 'not-allowed';
    } else {
        saveCategoryButtonElement.disabled = false;
        saveCategoryButtonElement.style.cursor = 'pointer';
    }
}

function searchCategory(searchInput) {
    var searchText = searchInput.value.trim();
    searchText = searchText.ToLowerCase();
    categories = []
    for (let index = 0; index < categoriesGlobal.length; index++) {
        const c = categoriesGlobal[index];
        if (c.name.ToLowerCase().includes(searchText)) {
            categories.push(c);
        }
    }
    loadComputerCategories();
}

