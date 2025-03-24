//1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//2
console.log(building["numberOfFloors"])

//3

console.log("number of flor apartments are on the floors 1 is :"+building.numberOfAptByFloor.firstFloor)
console.log("number of flor apartments are on the floors 3 is :"+building.numberOfAptByFloor.thirdFloor)

//4
console.log("name of the second tenat is :"+building.nameOfTenants[0] +" she has "+ building.numberOfRoomsAndRent.sarah[0]+" rooms ")



console.log("add----->"+(building.numberOfRoomsAndRent.dan[1]+building.numberOfRoomsAndRent.sarah[1]))


if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200 ;
    console.log(  building.numberOfRoomsAndRent.dan[1])
}

