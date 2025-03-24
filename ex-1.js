//part 1
const people = ["Greg", "Mary", "Devon", "James"];
console.log(people)
//1 remove greg
people.shift();
console.log(people)

//2 rplace
people[2]="Jason";
console.log(people)

//3 add
people.push("Salman");
console.log(people)

//4 show index
console.log(people.indexOf("Mary"));

//5
let people2 = people.slice(1,people.length-1)
console.log(people2)

//6 return -1 beacause indexOf method when it can not find the index it retourn -1
console.log(people.indexOf("Foo"));

//7
let last = people[people.length-1]
console.log(last)


//part 2
console.log("*****************************")

//1
for(i=0 ; i<=people.length; i++){
    console.log(people[i])
}

//2
for(i=0 ; i<=people.length; i++){
    console.log(people[i])
    if(people[i]=="Devon") {
        break
    }  
}



