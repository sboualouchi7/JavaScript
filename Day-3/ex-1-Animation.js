//part 1

setTimeout(() => {
alert("Hello Word, 2 second left")    
}, 2000);


//part 2

function addPar(){
    var di = document.getElementById('container');
    let p = document.createElement('p');
    p.textContent='Hello World';
    di.appendChild(p)
}

setTimeout(() => {
   addPar()  
    }, 2000);
    

//part 3
//1
intervalId = setInterval(addPar,2000)


//2

document.getElementById('clear').addEventListener('click', function() {
    clearInterval(intervalId);
    console.log('Interval cleared!');
});