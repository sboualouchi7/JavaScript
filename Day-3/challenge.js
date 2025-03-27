document.getElementById('lib-button').addEventListener('click', function() {

    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;
    
    if (!noun || !adjective || !person || !verb || !place) {
      alert('Please fill in all fields!');
      return;
    }
    
    const story = `One day, ${person} found a ${adjective} ${noun} and decided to ${verb} it at ${place}.`;
    
    document.getElementById('story').textContent = story;
  });
