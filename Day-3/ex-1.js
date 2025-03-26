const titre = document.querySelector('h1');
console.log(titre.textContent);

const article = document.querySelector('article');
article.removeChild(article.lastElementChild);

const sousTitre = document.querySelector('h2');
sousTitre.addEventListener('click', () => {
    sousTitre.style.backgroundColor = 'red';
});

const sousSousTitre = document.querySelector('h3');
sousSousTitre.addEventListener('click', () => {
    sousSousTitre.style.display = 'none';
});

const boutonGras = document.createElement('button');
boutonGras.textContent = 'Mettre en gras';
boutonGras.addEventListener('click', () => {
    const paragraphes = document.querySelectorAll('p');
    paragraphes.forEach(p => p.style.fontWeight = 'bold');
});
article.appendChild(boutonGras);