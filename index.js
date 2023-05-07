// -scroll-
let scrollBtn = document.getElementById("scrollUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ----- przepisy strona główna ------
let currentRecipe = recipes;
let mainRecipes = currentRecipe;
let categories = new Set();
let ingBtns = new Set();
let diets = new Set();
let portion = new Set();
let occasions = new Set();
let ingredient = new Array();
let filtrArray = {category: 'wszystkie', portion: 0, diet: 'wszystkie', occasion: 'wszystkie'};
let recipe = document.getElementById('recipe');
let basket = JSON.parse(localStorage.getItem("data")) || [];

let ingGenerate = (id) => {
    let ingredients = [];
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].id === id) {
          ingredients = recipes[i].ingCategory;
        //   console.log(ingredients)
          break;
        }
    } return ingredients;
};

// ------- GŁÓWNY kod --------
let generateRecipe = () => {
    return (
        (recipe.innerHTML = mainRecipes
        .map((x) => {
            let {id, title, image, makeTime, bakeTime,fav} = x;
            let allIngBtns = ingGenerate(id);
            return ` <article class="lowContainer">
                        <div class="mainInfo">
                            <div class="title">
                                <object data=${image === undefined ? "img/Dania/logo.jpg" : image} ></object>
                                <h1>${title}</h1>
                                <i class="${fav === true ? "icon-heart" : "icon-heart-empty"} love"></i>
                            </div>
                            <div class="recipeIngedients">
                                <h2>składniki</h2>
                                <div class="buttons" id="buttons-id-${id}">
                                ${allIngBtns.map(element => `<button>${element}</button>`).join('')}
                                </div>
                            </div>
                        </div>
                        <div class="infos">
                            ${makeTime === undefined ? "" : '<p>Czas przygotowywania: <span>' + makeTime + 'min.' + '</span></p>'}
                            ${bakeTime === undefined ? "" : '<p>Czas pieczenia: <span>' + bakeTime + 'min.' + '</span></p>'}
                        </div>
                        <button class="link" id="${id}" onclick="goToRecipe(${id})">
                            <span class="goToRecipe">
                                <i class="icon-food"></i>
                                Przejdź do przepisu!
                            </span>
                        </button>
                    </article>`;
        })
    .join("")) || ""
    );
};
generateRecipe();

// ----WYSZUKIWARKA----
document.getElementById("searchBtn").addEventListener("click", () => {
    let searchInput = document.getElementById('searchInput');
    searchInput.classList.toggle('visible');
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    const search = e.target.value;
    const foundRecipe = recipes.filter((product) => {
        if(product.title.toLowerCase().includes(search.toLowerCase())){
            return product;
        }
    });
    mainRecipes = foundRecipe;
    generateRecipe(mainRecipes);

    if(foundRecipe.length === 0) mainRecipes = recipes;
});

//  ------- przycisk ULUBIONE --------
document.getElementById('favButton').addEventListener('click', () => {
    mainRecipes = recipes.filter((recipe) => recipe.fav === true);
    generateRecipe(mainRecipes);
});


// ------ ASIDE -------

const setButtonActive = (buttonList, value) => {
    buttonList.forEach((button) => {
        button.classList.toggle('active', button.dataset[value] === filtrArray[value]);
    });
};
const setButtonDeactive = (buttonList, value) => {
    buttonList.forEach((button) => {
        button.classList.remove('active', button.dataset[value] === filtrArray[value]);
    });
};

// ---kategorie---
const categoriesGenerate = (items) => {
    for(let i = 0; i < items.length; i++){
        categories.add(items[i].category)
    }
    const categoriesItems = document.getElementById('categories');

    categories = ["wszystkie",...categories];

    categories.forEach((category, index) => {
        const newCategory = document.createElement('button');
        newCategory.innerHTML = category;
        newCategory.classList.add('filter-btn');
        newCategory.dataset.category = category;

        index === 0 ? newCategory.classList.add('active') : '';
        categoriesItems.appendChild(newCategory);
    });
};
// --- porcje ---
let inputElement = document.getElementById('portionInput');
document.querySelector('.more').addEventListener('click', function() {
    inputElement.value++;
    inputElement.innerHTML = inputElement.value;
    inputElement.value = parseInt(inputElement.value);
    updatePortion();
});
document.querySelector('.less').addEventListener('click', function() {
    inputElement.value = Math.max(0, inputElement.value - 1);
    inputElement.innerHTML = inputElement.value;
    inputElement.value = parseInt(inputElement.value);
    updatePortion();
});
// ---- diety ----
const dietsGenerate = (items) => {
    for(let i = 0; i < items.length; i++){
        items[i].diet === undefined ? items[i].diet = "wszystkie" : "";
        diets.add(items[i].diet)
        // console.log(items[i].diet)
    }
    const dietItems = document.querySelector('.diet');
    diets.forEach((diet, index) => {
        const newDiets = document.createElement('button');
        newDiets.classList.add('filter-btn');
        newDiets.innerHTML = diet;
        newDiets.dataset.diet = diet;

        index === 0 ? newDiets.classList.add('active') : '';
        dietItems.appendChild(newDiets);
    });
};
// ---- okazje ----
const occasionsGenerate = (items) => {
    for(let i = 0; i < items.length; i++){
        items[i].occasion === undefined ? items[i].occasion = "wszystkie" : "";
        occasions.add(items[i].occasion)
    }
    const occasionItems = document.querySelector('.occasion')
    occasions.forEach((occasion, index) => {
        const newOccasions = document.createElement('button');
        newOccasions.classList.add('filter-btn');
        newOccasions.innerHTML = occasion;
        newOccasions.dataset.occasion = occasion;

        index === 0 ? newOccasions.classList.add('active') : '';
        occasionItems.appendChild(newOccasions);
    });
};


// ---- generowanie ----
window.onload = occasionsGenerate(recipes);
window.onload = dietsGenerate(recipes);
window.onload = categoriesGenerate(recipes);


// -----SORTOWANIE------
// -okazje-
const occasionsButtons = document.querySelectorAll('.occasion button');
occasionsButtons.forEach((btn) => btn.addEventListener("click", (e) => {
    filtrArray.occasion = e.target.dataset.occasion;

    setButtonActive(occasionsButtons, 'occasion');
    updateFilter();
}));
// -diety-
const dietsButtons = document.querySelectorAll('.diet button');
dietsButtons.forEach((btn) => btn.addEventListener("click", (e) => {
    filtrArray.diet = e.target.dataset.diet;

    setButtonActive(dietsButtons, 'diet');
    updateFilter();
}));
// -porcje-
let updatePortion = () => {
    filtrArray.portion = inputElement.value;
    updateFilter();
};
// -kategorie
const categoriesButtons = document.querySelectorAll('.categories button');
categoriesButtons.forEach((btn) => btn.addEventListener("click", (e) => {
    filtrArray.category = e.target.dataset.category;

    setButtonActive(categoriesButtons, 'category');
    updateFilter();
}));


// ----- FILTROWANIE -----
const updateFilter = () => {
    mainRecipes = recipes.filter((recipe) => {
        recipe.portions ||= 0;
        return  (filtrArray.category === 'wszystkie' || recipe.category === filtrArray.category) &&
                (recipe.portions >= Number(filtrArray.portion)) &&
                (filtrArray.occasion === 'wszystkie' || recipe.occasion === filtrArray.occasion) &&
                (filtrArray.diet === 'wszystkie' || recipe.diet === filtrArray.diet);
    });
};
document.getElementById('filtrButton').addEventListener('click', () => {
    generateRecipe(mainRecipes);
    filtrArray = {category: 'wszystkie', portion: 0, diet: 'wszystkie', occasion: 'wszystkie'};
    setButtonDeactive(categoriesButtons, 'category');
    setButtonDeactive(dietsButtons, 'diet');
    setButtonDeactive(occasionsButtons, 'occasion');
    inputElement.value = 0;
    inputElement.innerHTML = inputElement.value;
    
});


// --- SKŁADNIKI - bardziej skomplikowane ---

let combinedIngredients = recipes.flatMap(recipe => recipe.ingCategory);
// -generowanie-
const ingredientsGenerate = () => {
    const ingredientsItems = document.querySelector('.ingredientsAll');
    // console.log(combinedIngredients)
    let ingredientsArray = combinedIngredients.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
    ingredientsArray.sort();
    ingredientsArray.forEach((ingCategory) => {
        const newIngredients = document.createElement('button');
        newIngredients.innerHTML = ingCategory;
        newIngredients.dataset.ingCategory = ingCategory;

        ingredientsItems.appendChild(newIngredients);
    });
    // console.log(ingredientsArray)
};
window.onload = ingredientsGenerate(mainRecipes);

const resetIngButton = document.getElementById('reset');
const ingredientsButtons = document.querySelectorAll('.ingredientsAll button');
// -przycisk 'wszystko'-
resetIngButton.addEventListener('click', (e) => {
    ingredientsButtons.forEach((btn) => btn.classList.remove('active'));
    mainRecipes = currentRecipe;
    generateRecipe(mainRecipes);
})

// -każdy z osobna-
ingredientsButtons.forEach((btn) => btn.addEventListener("click", (e) => {
    updateFilter();
    const isActive = e.target.classList.contains("active");
    isActive ? e.target.classList.remove("active") : e.target.classList.add("active");
    
    const checkedIngredients = Array.from(ingredientsButtons)
        .filter(btn => btn.classList.contains("active"))
        .map(btn => btn.dataset.ingCategory);

    mainRecipes = recipes.filter((recipe) => checkedIngredients
        .some(category => recipe.ingCategory
        .includes(category))
    );
    generateRecipe(mainRecipes);
}));

// -przycisk 'nie mam nic więcej'-
document.getElementById('nothingElse').addEventListener('click', () => {
    updateFilter();
    const checkedIngredients = Array.from(ingredientsButtons)
        .filter(btn => btn.classList.contains("active"))
        .map(btn => btn.dataset.ingCategory);
        
    mainRecipes = mainRecipes.filter((recipe) => checkedIngredients.every(category => recipe.ingCategory.includes(category)));
   generateRecipe(mainRecipes);
});


// ---- LINKI ----
let goToRecipe = (id) => {
    let selectedItem = id;
    basket.push({
        id: selectedItem,
    })
    let search = basket.find((x) => x.id === id);
    localStorage.setItem("data", JSON.stringify(basket));
    window.location.href='recipe.html';
};