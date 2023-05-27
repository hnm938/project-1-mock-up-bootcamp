const drinkListContainer = document.getElementById("drink-list-container");

async function fetchDrink(query) {
  // queries: s= search by drink name, i= serach by ingredient name, f= search by first letter,  

  // Fetch from API using drink name
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?${query}`
  );
  const drinks = (await res.json()).drinks; // get drinks from data query

  const drinkList = document.getElementById("drink-list");
  const drinkIngredients = [];

  // console.log(drinkIngredients);
  // return;

  // literate through drinks, appending each one as a list item
  /* 
  !! HTML is directly being set inline instead of appending a new element
  !! this not only results cleaner code but also
  !! prevents being able to re-appened any HTML to the container
  */
  drinkList.innerHTML = drinks
    .map((drink) => {
      let drinkIngredients = [];
      //#region Gather drink ingredients
      if (drink.strIngredient1) {
        drinkIngredients.push(drink.strIngredient1);
      }
      if (drink.strIngredient2) {
        drinkIngredients.push(drink.strIngredient2);
      }
      if (drink.strIngredient3) {
        drinkIngredients.push(drink.strIngredient3);
      }
      if (drink.strIngredient4) {
        drinkIngredients.push(drink.strIngredient4);
      }
      if (drink.strIngredient5) {
        drinkIngredients.push(drink.strIngredient5);
      }
      if (drink.strIngredient6) {
        drinkIngredients.push(drink.strIngredient6);
      }
      if (drink.strIngredient7) {
        drinkIngredients.push(drink.strIngredient7);
      }
      if (drink.strIngredient8) {
        drinkIngredients.push(drink.strIngredient8);
      }
      if (drink.strIngredient9) {
        drinkIngredients.push(drink.strIngredient9);
      }
      if (drink.strIngredient10) {
        drinkIngredients.push(drink.strIngredient10);
      }
      if (drink.strIngredient11) {
        drinkIngredients.push(drink.strIngredient11);
      }
      if (drink.strIngredient12) {
        drinkIngredients.push(drink.strIngredient12);
      }
      if (drink.strIngredient13) {
        drinkIngredients.push(drink.strIngredient13);
      }
      if (drink.strIngredient14) {
        drinkIngredients.push(drink.strIngredient14);
      }
      if (drink.strIngredient15) {
        drinkIngredients.push(drink.strIngredient15);
      }
      //#endregion

      return `
        <li>
          <div class="drink-list--drink">
            <div style="display: flex; flex-direction: row">
              <img src="${drink.strDrinkThumb}" alt="drink thumbnail">
              <div>
                <h1 class="drink-name">${drink.strDrink}</h1>
                <ul class="drink-ingredients">
                  <h2>Ingredients</h2>
                  ${drinkIngredients
                    .map((ingredient) => `<li>${ingredient}</li>`)
                    .join("")}
                </ul>
              </div>
            </div>
            ${
              drink.strVideo != null
                ? `
                <div>
                  <h3>Video</h3>
                  <iframe src="https://www.youtube.com/embed/${
                    drink.strVideo.split("v=")[1]
                  }" allowfullscreen></iframe>
                </div>
                `
                : ""
            }
          </div>
        </li>
        <hr/>
      `;
    })
    .join("");
}

async function init() {
  // Set drink start letter categories
  const drinkLetters = document.getElementById("drink-letters-category");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  drinkLetters.innerHTML = alphabet.split("").map((letter) => `
    <button onclick="fetchDrink('f=${letter}')">${letter}</button>
  `).join("");
}

window.onload = () => {
  init();
  fetchDrink("s=gin");
};
