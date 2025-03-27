document.getElementById('MyForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const radius = parseFloat(document.getElementById('radius').value);
    
    if (isNaN(radius)) {
        alert('Please enter a valid number for radius');
        return;
    }
    
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    
    document.getElementById('volume').value = volume.toFixed(4);
});