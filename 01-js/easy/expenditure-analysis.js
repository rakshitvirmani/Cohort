/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  output_obj = []
  for (trns in transactions){
    temp_obj = {}
    // console.log(output_obj)
    // console.log(transactions[trns]["category"])
    const categoryExists = output_obj.find(item => item["category"] == transactions[trns]["category"]);
    if (categoryExists != undefined){
      categoryExists["totalSpent"] += transactions[trns]["price"];
    }
    else{
      temp_obj["category"] = transactions[trns]["category"];
      temp_obj["totalSpent"] = transactions[trns]["price"];
      output_obj.push(temp_obj)
    }
  } 
  return output_obj;
}

module.exports = calculateTotalSpentByCategory;
// const output = calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 2,
//     timestamp: 1656259600000,
//     price: 20,
//     category: 'Food',
//     itemName: 'Burger',
//   },
//   {
//     id: 3,
//     timestamp: 1656019200000,
//     price: 15,
//     category: 'Clothing',
//     itemName: 'T-Shirt',
//   },
//   {
//     id: 4,
//     timestamp: 1656364800000,
//     price: 30,
//     category: 'Electronics',
//     itemName: 'Headphones',
//   },
//   {
//     id: 5,
//     timestamp: 1656105600000,
//     price: 25,
//     category: 'Clothing',
//     itemName: 'Jeans',
//   },
// ])

// console.log(output)
