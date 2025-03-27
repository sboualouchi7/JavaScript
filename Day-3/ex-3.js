var allBoldItems;
//1
function getBoldItems() {
  let parag = document.getElementsByTagName("p")[0];
 // console.log("this is p ", parag);

  var strg = parag.querySelectorAll("strong");
 // console.log("this is strong ", strg);

  allBoldItems = strg;
  //console.log(allBoldItems);
  return allBoldItems;
}

getBoldItems();


//2
function highlight() {
  allBoldItems.forEach((element) => {
    element.style.color = "blue";
  });
}
//highlight();


//3

function returnItemsToDefault(){
    allBoldItems.forEach((elm)=>{
        elm.style.color='black';
    })
}

//returnItemsToDefault();

//4
let parag = document.getElementsByTagName("p")[0];
parag.addEventListener('mouseover', highlight)
parag.addEventListener('mouseout', returnItemsToDefault)

