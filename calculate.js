// task is to calculate the total budget required to buy electronics:

const electronics = {
    laptop: 35000,
    tablet: 15000,
    mobile: 20000
};

function calculateElectronicsBudget(price){
    let total = 0;
    for(let key in price){
        const electronicPrice = price[key];
        total = total + electronicPrice;
    }
    return total;
}

const totalBudget = calculateElectronicsBudget(electronics);
console.log(totalBudget);