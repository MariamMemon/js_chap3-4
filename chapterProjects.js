// Manipulating an array

let theList = [
    'Laurence', 'Svekis', true, 35, null, undefined,
    {
        test: 'one',
        score: 55
    },
    ['one', 'two']
]
theList.pop();
theList.shift();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
theList.splice(4,3)
console.log(theList)

// Company product catalog

let inventory = [];
 let item1 = {
    name: "Laptop",
    model: "6588",
    cost: 40000,
    quantity: 10,
  };
  
  let item2 = {
    name: "Smartphone",
    model: "6548",
    cost: 20000,
    quantity: 15,
  };
  
  let item3 = {
    name: "Tablet",
    model: "9876",
    cost: 25000,
    quantity: 20,
  };
  inventory.push(item1, item2, item3);
  console.log(inventory);
  console.log(inventory[2].quantity);
  let item4 = {
    name: "Headphones",
    model: "7652",
    cost: 1500,
    quantity: 25,
  };
  inventory.push(item4);
  console.log(inventory[3].cost);