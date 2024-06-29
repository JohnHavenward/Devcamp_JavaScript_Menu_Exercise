/* 

BUILD OUT A DINER MENU USING JAVASCRIPT

Build out a Diner menu in JAVASCRIPT. Here are your instructions to build that Diner.
Bottega Diner
Have the Main Menu and a Sides Menu
You get one entree and two side choices at regular cost.
- show them the entire menu (print out)
- A user selects an entree.
- “Waitress” makes a comment based on their selection
- comment can either be a comparison of the two items, or random comment pulled from a comment vault.
- Tell them the price
- repeat the above options for side choices (comment and a price)
- total up the cost

BONUS:
Have breakfast, lunch, and dinner menu. Breakfast has different items, lunch and dinner have the same items but are different prices.

BONUS:
Allow for item customization (how items are prepared, decide additional cost implications)

*/


// VARIABLES

// Nombre del restaurante: "Bottega Restaurant"
// - Lista de platos para el desayuno
// - Lista de platos para la comida/cena
// - Lista de bebidas
// - Lista de respuestas para elegir un plato o bebida
// - Lista de comentarios aleatorios
// - Lista de comentarios de comparación entre platos
// - Lista de personalización de platos

// - Cada item debe tener: NOMBRE / PRECIO DÍA / PRECIO NOCHE / OPCIONES PERSONALIZACIÓN (NOMBRE / COSTE ADICIONAL) /  

// NOTA: hacer muchas listas aleatorias de comentarios??



// RESUMEN DEL PROCESO

// CLIENTE: Elige si quiere desayunar, comer o cenar

// CAMARERA: Da la bienvenida e informa del menú
// CLIENTE: Elige un plato

// CAMARERA: Hace un comentario y pregunta si quiere personalizar el plato
// CLIENTE: Elige si lo quiere personalizar

// CAMARERA: dice el precio del plato

// --- REPETIR (3 veces) --- 1 plato principal y 2 acompañantes

// CAMARERA: Preguntar por la bebida
// CLIENTE: Elige la bebida

// CAMARERA: informa del precio de la bebida y del total de la comida




const messageDisplayElement = document.getElementById("message");
const optionDisplayElements = document.querySelectorAll(".option");
const confirmButtonElement = document.getElementById("confirm-button");

optionDisplayElements.forEach((element) => element.addEventListener("click", selectOption));


let useNightPrice = false;
let itemPrice;
let totalPrice = 0;
let dishesOrdered = 0;

let roundCounter = 0;

let typeEffectSpeed = 50;

let selectedMainMenu;
let selectedSidesMenu;
let selectedBeveragesMenu;

let selectedOption;
let lastSelectedOption;

let selectedFirstSideDish;

let selectedDish;
let lastSelectedDish;



askCustomer("HOLA!!", mealTimeMenu, false);



function askCustomer(message, selectedMenu, customization) {
      
            
      resetOptions();
      
      
      //Desactivar botón
      confirmButtonElement.classList.add("inactive");
      confirmButtonElement.removeEventListener("click", confirmSelection);
      
      
      
      //messageDisplayElement.innerHTML = message;
      typeEffect(messageDisplayElement, message, 0);
      
      for (let i = 0; i < optionDisplayElements.length; i++ ) {
      
            if (customization) {
                  if (i < selectedMenu[lastSelectedOption].customOptions.length) {
                        typeEffect(optionDisplayElements[i], selectedMenu[lastSelectedOption].customOptions[i].name, 0);
                        
                  } else {
                        optionDisplayElements[i].innerHTML = "";
                        optionDisplayElements[i].classList.add("inactive");
                  }
                  
            } else {
                  if (i < selectedMenu.length) {
                        typeEffect(optionDisplayElements[i], selectedMenu[i].name, 0);
                        
                        if (selectedFirstSideDish == selectedMenu[i].name && selectedMenu == selectedSidesMenu) optionDisplayElements[i].classList.add("inactive");
                        
                  } else {
                        optionDisplayElements[i].innerHTML = "";
                        optionDisplayElements[i].classList.add("inactive");
                  } 
            }
            
            
            
      }
      
}



function resetOptions() {
      lastSelectedOption = selectedOption;
      selectedOption = undefined;
      
      optionDisplayElements.forEach((element) => {
            if (element.classList.contains("inactive"))
                  element.classList.remove("inactive");
            
            if (element.classList.contains("selected"))
                  element.classList.remove("selected");
            
      })
}



function typeEffect(element, text, i) {
        
      if (i < text.length) {
            if (i == 0) {
                  element.innerHTML = "";
            }
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, typeEffectSpeed, element, text, i);
      }
}



function selectOption() {
      
      if (!this.classList.contains("inactive")) {
            
            if (selectedOption == undefined) {
                  confirmButtonElement.classList.remove("inactive");
                  confirmButtonElement.addEventListener("click", confirmSelection);
                  
            } else {
                  optionDisplayElements[selectedOption].classList.remove("selected");
            }
            
            selectedOption = this.dataset.id;
            optionDisplayElements[selectedOption].classList.add("selected"); 
      }
}



function confirmSelection() {
      
      roundCounter++;
      
      switch (roundCounter) {
            case 1:
                  assignMealtimeMenus();
                  askCustomer("ELIGE 1", selectedMainMenu, false);
                  break;
            case 2:
                  selectedDish = selectedSidesMenu[selectedOption].name;

                  askCustomer(makeComment() + " PERSONALIZA 1", selectedMainMenu, true);
                  break;
            case 3:
                  calculateItemPrice(selectedMainMenu, true);
                  askCustomer("ELIGE 2 " + itemPrice, selectedSidesMenu, false);
                  break;
            case 4:
                  lastSelectedDish = selectedDish;
                  selectedDish = selectedSidesMenu[selectedOption].name;
                  selectedFirstSideDish = selectedSidesMenu[selectedOption].name;
                  
                  askCustomer(makeComment() + " PERSONALIZA 2", selectedSidesMenu, true);
                  break;
            case 5:
                  calculateItemPrice(selectedSidesMenu, true);
                  askCustomer("ELIGE 3 " + itemPrice, selectedSidesMenu, false);
                  break;
            case 6:
                  lastSelectedDish = selectedDish;
                  selectedDish = selectedSidesMenu[selectedOption].name;
                  
                  askCustomer(makeComment() + " PERSONALIZA 3", selectedSidesMenu, true);
                  break;
            case 7:
                  calculateItemPrice(selectedSidesMenu, true);
                  askCustomer("ELIGE BEBIDA " + itemPrice, selectedBeveragesMenu, false);
                  break;
            case 8:
                  calculateItemPrice(selectedSidesMenu, false);
                  askCustomer("APROVECHE " + totalPrice, [], false);
                  break;
      }
      
      
      
}



function assignMealtimeMenus() {
      
      useNightPrice = mealTimeMenu[selectedOption].nightPrice;
      selectedMainMenu = mealTimeMenu[selectedOption].mainMenu;
      selectedSidesMenu = mealTimeMenu[selectedOption].sidesMenu;
      selectedBeveragesMenu = mealTimeMenu[selectedOption].beveragesMenu;
}



function calculateItemPrice(selectedMenu, customization) {
      let priceKey = useNightPrice ? "nightPrice" : "price";
      
      let basePrice = customization ? selectedMenu[lastSelectedOption][priceKey] : selectedMenu[selectedOption][priceKey];
      let customizationPrice = customization ? selectedMenu[lastSelectedOption].customOptions[selectedOption][priceKey] : 0;
       
      itemPrice = basePrice + customizationPrice;
      totalPrice += itemPrice;
}


function makeComment() {
      if (Math.random() < 0.5 || !lastSelectedDish) {
            return simpleComments[Math.floor(Math.random() * simpleComments.length)];
            
      } else {
            return complexComments[Math.floor(Math.random() * complexComments.length)].replace("(A)", selectedDish).replace("(B)", lastSelectedDish);
      }
      
      
      
      
      

      
      
}

