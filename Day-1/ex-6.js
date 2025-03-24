const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  };
  
  let sentence = '';
  for (let x in details) {
    sentence += `${x} ${details[x]} `; 
  }
  console.log(sentence.trim()); 
  //trim to remove spaces