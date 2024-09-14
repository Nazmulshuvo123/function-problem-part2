/**
 * Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalLaptopPrice = laptopPrice * laptopQuantity;
    const totalTabletPrice = tabletPrice * tabletQuantity;
    const totalMobilePrice = mobilePrice * mobileQuantity; 

    const totalBudget = totalLaptopPrice + totalMobilePrice + totalTabletPrice;

    return totalBudget;
    
}

const totalCost = calculateElectronicsBudget(2, 3, 5);
console.log(totalCost);