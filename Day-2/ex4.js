function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    const prices = { london: 183, paris: 220 };
    return prices[destination.toLowerCase()] || 300;
}

function rentalCarCost(days) {
    let cost = days * 40;
    return days > 10 ? cost * 0.95 : cost;
}

function totalVacationCost() {
    const nights = +prompt("Hotel nights?");
    const destination = prompt("Destination?");
    const days = +prompt("Car rental days?");

    const car = rentalCarCost(days);
    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const total = car + hotel + plane;

    console.log(`Car: $${car}, Hotel: $${hotel}, Plane: $${plane}`);
    console.log(`Total: $${total}`);

    return total;
}

totalVacationCost();