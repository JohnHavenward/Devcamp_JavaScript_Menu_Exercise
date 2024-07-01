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





const messageDisplayElement = document.getElementById("message");
const optionDisplayElements = document.querySelectorAll(".option");
const confirmButtonElement = document.getElementById("confirm-button");

optionDisplayElements.forEach((element) => element.addEventListener("click", selectOption));



let roundCounter = 0;


let selectedMainMenu;
let selectedSidesMenu;
let selectedBeveragesMenu;

let priceKey;
let itemPrice;
let totalPrice = 0;


let selectedOption;
let lastSelectedOption;

let selectedMainDish;
let selectedFirstSideDish;
let selectedSecondSideDish;


let typeEffectSpeed = 30;
let typeEffectTimeoutID;





askCustomer(createMessage(false), mealTimeMenu, false);



function askCustomer(message, selectedMenu, customization) {
      
      resetOptions();      
      toggleConfirmButton();
      
      displayMessage(message);
      displayOptions(selectedMenu, customization);
      
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



function toggleConfirmButton() {
      
      if (confirmButtonElement.classList.contains("inactive")) {
            confirmButtonElement.classList.remove("inactive");
            confirmButtonElement.addEventListener("click", confirmSelection);
            
      } else {
            confirmButtonElement.classList.add("inactive");
            confirmButtonElement.removeEventListener("click", confirmSelection);
      } 
      
}



function displayMessage(message) {
      
      typeEffect(messageDisplayElement, message, 0);
      
}



function displayOptions(selectedMenu, customization) {
      
      let options = customization ? selectedMenu[lastSelectedOption].customOptions : selectedMenu;
      
      for (let i = 0; i < optionDisplayElements.length; i++ ) {
      
            if (i < options.length) {
                  
                  let priceTag = options[i][priceKey] != undefined ?  `  [${formatPrice(options[i][priceKey])}]` : "";
                  
                  typeEffect(optionDisplayElements[i], options[i].name + priceTag, 0);
                  
                  if (!customization && selectedMenu[i].name == selectedFirstSideDish && selectedMenu == selectedSidesMenu) {
                        optionDisplayElements[i].classList.add("inactive");
                  } 
                  
            } else {
                  optionDisplayElements[i].innerHTML = "";
                  optionDisplayElements[i].classList.add("inactive");
            } 
      }
      
}



function typeEffect(element, text, i) {
        
      if (i < text.length) {
            if (i == 0) {
                  element.innerHTML = "";
            }
            element.innerHTML += text.charAt(i);
            i++;
            
            typeEffectTimeoutID = setTimeout(typeEffect, typeEffectSpeed, element, text, i);
      }
      
}



function selectOption() {
      
      if (!this.classList.contains("inactive")) {
            
            if (selectedOption == undefined) {
                  toggleConfirmButton();
                  
            } else {
                  optionDisplayElements[selectedOption].classList.remove("selected");
            }
            
            selectedOption = this.dataset.id;
            optionDisplayElements[selectedOption].classList.add("selected"); 
      }
      
}



function confirmSelection() {
      
      clearTimeout(typeEffectTimeoutID);
      
      roundCounter++;
      
      switch (roundCounter) {
            case 1:
                  assignMealtimeMenus();
                  askCustomer(createMessage(false), selectedMainMenu, false);
                  break;
            case 2:
                  selectedMainDish = selectedMainMenu[selectedOption].name;
                  askCustomer(createMessage(true), selectedMainMenu, true);
                  break;
            case 3:
                  calculateItemPrice(selectedMainMenu);
                  askCustomer(createMessage(false), selectedSidesMenu, false);
                  break;
            case 4:
                  selectedFirstSideDish = selectedSidesMenu[selectedOption].name;
                  askCustomer(createMessage(true), selectedSidesMenu, true);
                  break;
            case 5:
                  calculateItemPrice(selectedSidesMenu);
                  askCustomer(createMessage(false), selectedSidesMenu, false);
                  break;
            case 6:
                  selectedSecondSideDish = selectedSidesMenu[selectedOption].name;
                  askCustomer(createMessage(true), selectedSidesMenu, true);
                  break;
            case 7:
                  calculateItemPrice(selectedSidesMenu);
                  askCustomer(createMessage(false), selectedBeveragesMenu, false);
                  break;
            case 8:
                  calculateItemPrice(selectedBeveragesMenu);
                  askCustomer(createMessage(false), [], false);
                  break;
      }
      
}



function assignMealtimeMenus() {
      
      priceKey = mealTimeMenu[selectedOption].useNightPrice ? "nightPrice" : "price";

      selectedMainMenu = mealTimeMenu[selectedOption].mainMenu;
      selectedSidesMenu = mealTimeMenu[selectedOption].sidesMenu;
      selectedBeveragesMenu = mealTimeMenu[selectedOption].beveragesMenu;
      
}



function calculateItemPrice(selectedMenu) {
      
      if (selectedMenu != selectedBeveragesMenu) {   
            itemPrice = selectedMenu[lastSelectedOption].customOptions[selectedOption][priceKey];
            
            if (itemPrice == undefined) {
                  itemPrice = selectedMenu[lastSelectedOption][priceKey];
                  
            } else {
                  itemPrice += selectedMenu[lastSelectedOption][priceKey];
            }
            
      } else {
            itemPrice = selectedMenu[selectedOption][priceKey];
      }
      
      totalPrice += itemPrice;
      
}



function createMessage(needComment) {
      
      let price = roundCounter < 8 ? itemPrice : totalPrice;
      price = formatPrice(price); 
      
      let message = askMessages[roundCounter].replace("(precio)", price)
      
      return (needComment ? makeComment() + " " + message : message);
      
}



function formatPrice(rawPrice) {
      
      return (Math.round(rawPrice * 100) / 100).toFixed(2) + "$";
      
}



function makeComment() {
      
      if (Math.random() < 0.5 || !selectedFirstSideDish) {
            return simpleComments[Math.floor(Math.random() * simpleComments.length)];
            
      } else {
            let complexComments = !selectedSecondSideDish ? complexComments_AB : complexComments_ABC;
            
            let comment = complexComments[Math.floor(Math.random() * complexComments.length)];
            
            comment = comment.replace("(A)", selectedMainDish);
            comment = comment.replace("(B)", selectedFirstSideDish);
            comment = comment.replace("(C)", selectedSecondSideDish);
            
            return comment;
      }
      
}