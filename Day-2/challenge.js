
const SystemeSolaire = [
    { name: 'Mercure', moons: 0, color: 'gray' },  
    { name: 'Vénus', moons: 0, color: 'orange' },      
    { name: 'Terre', moons: 1, color: 'blue' },        
    { name: 'Mars', moons: 2, color: 'red' },          
    { name: 'Jupiter', moons: 79, color: 'brown' } 
];


function creerSystemeSolaire() {
    const sectionPlanetes = document.querySelector('.listPlanets');

    SystemeSolaire.forEach(donneesPlanete => {

        const divPlanete = document.createElement('div');
        
        divPlanete.classList.add('planet');
        
        divPlanete.style.backgroundColor = donneesPlanete.color;
        
        divPlanete.textContent = donneesPlanete.name;

        for (let i = 0; i < donneesPlanete.moons; i++) {

            const divLune = document.createElement('div');
            divLune.classList.add('moon');
            
            const angle = (i / donneesPlanete.moons) * 360;  
            const rayon = 60; 
            
            divLune.style.left = `calc(50% + ${Math.cos(angle * Math.PI / 180) * rayon}px)`;
            divLune.style.top = `calc(50% + ${Math.sin(angle * Math.PI / 180) * rayon}px)`;

            divPlanete.appendChild(divLune);
        }

        sectionPlanetes.appendChild(divPlanete);
    });
}


document.addEventListener('DOMContentLoaded', creerSystemeSolaire);