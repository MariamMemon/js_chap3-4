// 3.1

let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList);
shoppingList[1] = "bananas";
console.log(shoppingList);

// 3.2

let shoppingList2 = [];
shoppingList2.push("Milk");
shoppingList2.push("Bread");
shoppingList2.push("Apples");
let indexofBread = shoppingList2.indexOf("Bread");
shoppingList2.splice(indexofBread, 1, "Bananas", "Eggs");
shoppingList2.pop();
shoppingList2.sort();
let indexofMilk= shoppingList2.indexOf("Milk");
console.log(shoppingList2);
console.log("Index of Milk: " + indexofMilk);
let indexofBananas = shoppingList2.indexOf("Bananas");
shoppingList2.splice(indexofBananas + 1, 0, "Carrots", "Lettuce");
let newList = ["Juice", "Pop"];
shoppingList2 = shoppingList2.concat(newList,newList);
console.log(shoppingList2);
let indexOfPop = shoppingList2.lastIndexOf("Pop");
console.log("Last index of Pop: " + indexOfPop);
console.log(shoppingList2);

// 3.3

let numbersArray = [1, 2, 3];
let nestedArray = [numbersArray, numbersArray, numbersArray];
console.log(nestedArray[1][1]);

// 3.4

let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    isAutomatic: true,
    mileage: 15000,
}
let newProperty = "color";
myCar[newProperty] = "blue"
newProperty = "forSale";
myCar[newProperty] = false;
console.log("Make: " + myCar.make);
console.log("Model: " + myCar.model);
console.log("For Sale: " + myCar.forSale);

//3.5

let people = {
    friends: []
  };
  let friend1 = {
    firstName: "Waniya",
    lastName: "Anwar",
    ID: 12345
  };
  let friend2 = {
    firstName: "Sahiba",
    lastName: "Chohan",
    ID: 56789
  };
  let friend3 = {
    firstName: "Areeba",
    lastName: "Aftab",
    ID: 11112
  };
  people.friends.push(friend1, friend2, friend3);
  console.log(people);
  



