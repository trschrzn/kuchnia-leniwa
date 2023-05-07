let currentRecipe = recipes;
let favs = [];
let basket = JSON.parse(localStorage.getItem("data")) || [];
let recipeCart = document.querySelector('.recipeCart');
let diets = new Set();
let occasions = new Set();

// ---- koszyk, czyli kliknięty przepis ----
function basketMaker(product) {
    basket = basket.slice(basket.length-1)

    let flatBasket = basket.flatMap(element => element.id);
    for (var key in flatBasket) {
        // console.log("key " + key + " has value " + flatBasket[key]);
    }
    let mainId = flatBasket[key];
    return product.id === mainId;
};

let foundId = basket.find(basketMaker).id;
const result = currentRecipe.filter((recipe) => recipe.id === foundId);

// ----- PRZEPIS -----
// -składniki-
let ingGenerate = (id) => {
    let ingredient = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i].id === id) {
          ingredient = result[i].ingredients;
        //   console.log(ingredient)
          break;
        }
    } return ingredient;
};

// -checkbox'y-
let checkboxMaker = (id) => {
    let ingredient = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i].id === id) {ingredient = result[i].ingredients;}
    }
    let checkboxes = '';
    for(let j = 0; j < ingredient.length; j++){
        checkboxes += `<li>
        <input class="check-2" id="check`+[j]+`" type="checkbox" name="check`+[j]+`" />
        <label class="check_2" for="check`+[j]+`">
            <span>
                <svg width="12px" height="10px" viewbox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
            </span>
        <span></span>
        </label>
    </li>`;
    }
    return checkboxes;
};

// -instrukcje przygotowania-
let descGenerate = (id) => {
    let description = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i].id === id) {
            description = result[i].description;
        //   console.log(description)
          break;
        }
    } return description;
};

// -zdjęcia-
let photosGenerate = (id) => {
    let photos = [];
    let allPhotos = '';

    for (let i = 0; i < result.length; i++) {
        if (result[i].id === id) {
            result[i].image === undefined ? image = "" : photos = result[i].image;
        }
        for(let j = 0; j < photos.length; j++){
            allPhotos += `<img src="${photos}" alt="zdjęcie">`;
            // console.log(photos)
        }
    }
    return allPhotos;
}

let generateCartRecipe = () => {
    return (recipeCart.innerHTML = result
        .map((x) => {
            let {id, title, makeTime, bakeTime, fav, temp} = x;
            let allIngList = ingGenerate(id);
            let description = descGenerate(id);
            let allCheckbox = checkboxMaker(id);
            let allPhotos = photosGenerate(id);
            let search = favs.find((x) => x.id === id) || [];
            return ` <div class="bigContainer">
            <div class="title">
                <h1>${title}</h1>
                <button id="love" onclick="favButton(${id})"><i class="${search.fav || fav === true ? 'icon-heart' : 'icon-heart-empty'} love"></i></button>
            </div>
            <section class="ingredients">
                <div class="recipeIngredients">
                    <h2>składniki</h2>
                    <ul>${allIngList.map(element => `<li>${element}</li>`).join('')}</ul>
                </div>
                <div class="checkboxes">
                    <h2>aaaaaaa</h2>
                    <ul>${allCheckbox}</ul>
                    <span class="textSmwhr">sprawdź i zaznacz co masz!</span>
                </div>
            </section>
            <div class="recipe">
                <h2>sposób przygotowania</h2>
                <ol>
                    ${description.map(element => `<li>${element}</li>`).join('')}
                </ol>
            </div>
            <div class="infos">
                ${makeTime === undefined ? "" : '<p>Czas przygotowywania: <span>' + makeTime + ' min.</span></p>'}
                ${bakeTime === undefined ? "" : '<p>Czas pieczenia: <span>' + bakeTime + ' min.</span></p>'}
                ${temp === undefined ? "" : '<p>Temperatura pieczenia: <span>' + temp + '&#176;C' + ' </span></p>'}
            </div>
            <div class="photos">${allPhotos}</div>
        </div>`;
        })
    );
};
generateCartRecipe();

// ------ ASIDE -------

// -składniki-
let combinedIngredients = result.flatMap(recipe => recipe.ingCategory);
const ingredientsGenerate = () => {
    const ingredientsItems = document.querySelector('.ingredients');

    combinedIngredients.forEach((ingCategory) => {
        const newIngredients = document.createElement('button');
        newIngredients.innerHTML = ingCategory;
        newIngredients.dataset.ingredients = ingCategory;

        ingredientsItems.appendChild(newIngredients);
    });
};

// -porcje-
const portionGenerate = (id) => {
    id = foundId;
    let portion = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i].id === id) {
            result[i].portions === undefined ? "-" : portion = result[i].portions;
        }
    }
    document.getElementById("portionInputId").value = portion;
};

// -diety-
const dietsGenerate = (items) => {
    for(let i = 0; i < items.length; i++){
        diets.add(items[i].diet)
    }
    const dietsItems = document.querySelector('.diet');

    diets.forEach((diet) => {
        const newDiet = document.createElement('button');
        diet === undefined ? diet = "brak" : "";
        newDiet.innerHTML = diet;

        dietsItems.appendChild(newDiet);
    });
};
// -okazje-
const occasionsGenerate = (items) => {
    const occasionItems = document.querySelector('.occasion');

    for(let i = 0; i < items.length; i++){
        occasions.add(items[i].occasion)
    }
    occasions.forEach((occasion) => {
        const newOccasion = document.createElement('button');
        occasion === undefined ? occasion = "brak" : "";
        newOccasion.innerHTML = occasion;

        occasionItems.appendChild(newOccasion);
    });
};

window.onload = ingredientsGenerate(result), portionGenerate(result), dietsGenerate(result), occasionsGenerate(result);

// ---- ulubione -----
let love = document.querySelector('#love');

let favButton = (id) => {
    let mainFavId = id;
    let search = result.find((x) => x.id === mainFavId);
    let fav = search.fav;
    
    const favGenerate = (items) => {
        for(let i = 0; i < items.length; i++){
            fav = items[i].fav;
            mainFavId = items[i].id;
        }
        search = favs.find((x) => x.id === mainFavId);

        search.fav === true ? love.innerHTML = '<i class="icon-heart love"></i>' : love.innerHTML = '<i class="icon-heart-empty love"></i>';
    };
    favGenerate(favs)
};


// ------ przelicznik -------
const ingredients = {
    cukier: {glass: 220,spoon: 13,smallSpoon: 4.5,kind: 'g',},
    'mąka pszenna': {glass: 170,spoon: 10,smallSpoon: 3,kind: 'g',},
    ogólne: {glass: 250,spoon: 15,smallSpoon: 5,kind: 'ml',},
    'mąka ziemniaczana': {glass: 180,spoon: 10.5, smallSpoon: 3,kind: 'g',},
    ryż: {glass: 230,kind: 'g',},
    'cukier puder': {glass: 200,kind: 'g',},
    'kasza gryczana': {glass: 180,kind: 'g',},
    'oleje roślinne': {glass: 210,kind: 'g',},
    miód: {glass: 340,kind: 'g',},
    masło: {spoon: 40,kind: 'g',},
    sól: {smallSpoon: 10,kind: 'g',},
    kakao: {smallSpoon: 5,kind: 'g',},
    'herbata(liściasta)': {smallSpoon: 5,kind: 'g',},
    'kawa(mielona)': { smallSpoon: 5, kind: 'g', },
};

const measureButton = document.getElementById('measureButton');
const measureContainer = document.getElementById('measureContainer');
const textMeasure = document.querySelector('.what-to-calculate');
const mainMeasureContainer = document.querySelector('.main-calculate');

let generateIngredients = () => {
    const thingContainer = document.querySelector('.thing');
    let button = Object.keys(ingredients);

    button.forEach((element) => {
        
        const newButton = document.createElement('button');

        newButton.innerHTML = element;
        newButton.classList.add('whatMeasure');
        newButton.dataset.textContent = element;
        thingContainer.appendChild(newButton);
    });
};
window.onload = generateIngredients();

measureButton.addEventListener('click', () => {
    let conatiner = document.getElementById('measureContainer');
    conatiner.style.display == "flex" ? conatiner.style.display = "none" : conatiner.style.display = "flex";
    const whatMeasureBtns = document.querySelectorAll('.thing button');

    whatMeasureBtns.forEach((btn) => btn.addEventListener('click', (e) => {
        const text = e.target.textContent;
        textMeasure.innerHTML = text;

        const { glass, spoon, smallSpoon, kind } = ingredients[text] || {};

        const isGlass = glass ? `<form class="glass"><input type="number" name="how-many-glasses" id="how-many-glasses" value="1" /> <span class="what-kind">szklanka</span> = <input type="text" name="how-much-water" id="how-much-water" value=${glass} /><span class="whats">${kind}</span></form>` : '';
        const isSpoon = spoon ? `<form class="spoon"><input type="number" name="how-many-spoones" id="how-many-spoones" value="1" /> <span class="what-kind">łyżka stołowa</span> = <input type="text" name="how-much-spoones-ml" id="how-much-spoones-ml" value=${spoon} /><span class="whats">${kind}</span></form>` : '';
        const isSmallSpoon = smallSpoon ? `<form class="small-spoon"><input type="number" name="how-many-small-spoon" id="how-many-small-spoon" value="1" /> <span class="what-kind">łyżeczka</span>= <input type="text" name="how-much-small-spoon-ml" id="how-much-small-spoon-ml" value=${smallSpoon} /><span class="whats">${kind}</span></form>`: '';

        mainMeasureContainer.innerHTML = isGlass + isSpoon + isSmallSpoon;

        function convertUnits(input, output, unitValue) {
            input.addEventListener("change", (e) => {
                output.value = e.target.value * unitValue;
            });
            output.addEventListener("change", (e) => {
                input.value = e.target.value / unitValue;
            });
        }

        let glassInput = document.getElementById('how-many-glasses')
        let glassOutput = document.getElementById("how-much-water");
        let spoonInput = document.getElementById("how-many-spoones");
        let spoonOutput = document.getElementById("how-much-spoones-ml");
        let smallSpoonInput = document.getElementById("how-many-small-spoon");
        let smallSpoonOutput = document.getElementById("how-much-small-spoon-ml");
    
        convertUnits(glassInput, glassOutput, glass);
        convertUnits(spoonInput, spoonOutput, spoon);
        convertUnits(smallSpoonInput, smallSpoonOutput, smallSpoon);
    }));
});