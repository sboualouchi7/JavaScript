function hasEnoughChange(itemPrice, coins) {
    const [quarters, dimes, nickels, pennies] = coins;
    const totalChange = 
        quarters * 0.25 + 
        dimes * 0.10 + 
        nickels * 0.05 + 
        pennies * 0.01;
    
    return totalChange >= itemPrice;
}