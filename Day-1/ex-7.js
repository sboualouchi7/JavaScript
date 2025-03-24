const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//first method without for loop

let secret ='';

let a = names[0];
a1 = a[0]
secret+=a1;

let b = names[1];
b1 = b[0]
secret+=b1;

let c = names[2];
c1 = c[0]
secret+=c1;


let d = names[3];
d1 = d[0]
secret+=d1;

let e = names[4];
e1 = e[0]
secret+=e1;

let f = names[2];
f1 = f[0]
secret+=f1;

//now i need to sort this word 

const sorted = secret.split('').sort().join('');
console.log(sorted)

//second method with for loop 

let secret1 ='';
for(let x in names){
    secret1 += names[x][0];
    console.log(names[x][0])

}
const sortedSecret = secret1.split('').sort().join('');
console.log(sortedSecret)