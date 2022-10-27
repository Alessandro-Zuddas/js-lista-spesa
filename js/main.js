"use strict";

const products = ["Carne", "Pesce", "Acqua","Birra", "Vino" ];

const shoppingList = document.getElementById("shopping-list");

let currentIndex = 0;

while(currentIndex <= products.length -1){

    let item = document.createElement("li");

    item.innerHTML = products[currentIndex];

    shoppingList.append(item);

    currentIndex++;
}
