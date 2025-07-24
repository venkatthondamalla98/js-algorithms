const orders = [
  { customer: "Bob", totalAmount: 600 },
  { customer: "Alice", totalAmount: 400 },
  { customer: "Charlie", totalAmount: 300 },
  { customer: "Bob", totalAmount: 900 }
];

const modifyOrders = (orders) => {
    let result = {}
    for(let order of orders){
        let customer = order.customer;
        let amount = order.totalAmount;
        if(result[customer]){
            result[customer] += amount
        }else{
            result[customer] = amount
        }
    }
    return result
}


console.log(modifyOrders(orders));
