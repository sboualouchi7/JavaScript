document.addEventListener('DOMContentLoaded', () => {
    // 1
    const form = document.querySelector('form');
    console.log(form);

    // 2
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    console.log(fnameInput, lnameInput);

    // 3
    const inputsByName = document.getElementsByName('firstname');
    const inputsByName2 = document.getElementsByName('lastname');
    console.log(inputsByName, inputsByName2);

    // 4
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const firstName = fnameInput.value.trim();
        const lastName = lnameInput.value.trim();
        
        const usersList = document.querySelector('.usersAnswer');
        usersList.innerHTML = ''; // Clear previous entries
        
        if (firstName) {
            const firstNameLi = document.createElement('li');
            firstNameLi.textContent = firstName;
            usersList.appendChild(firstNameLi);
        }
        
        if (lastName) {
            const lastNameLi = document.createElement('li');
            lastNameLi.textContent = lastName;
            usersList.appendChild(lastNameLi);
        }
    });
});