//1
let colors=["white","black","blue","yellow"];
//2
for(i=0; i<colors.length;i++){
    console.log("My #"+ (i+1) +" Choice is "+colors[i])
}
let suffixes = ['st', 'nd', 'rd', 'th'];
//bonus
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

