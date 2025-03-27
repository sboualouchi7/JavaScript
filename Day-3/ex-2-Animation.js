function myMove() {
    const animate = document.getElementById('animate');
    const container = document.getElementById('container');
    let position = 0;
    const containerWidth = container.offsetWidth;
    const boxWidth = animate.offsetWidth;
    const maxPosition = containerWidth - boxWidth;
    
    // Clear any existing interval (prevent multiple clicks)
    if (window.animationInterval) {
        clearInterval(window.animationInterval);
    }
    
    window.animationInterval = setInterval(frame, 1);
    
    function frame() {
        if (position >= maxPosition) {
            clearInterval(window.animationInterval);
        } else {
            position++;
            animate.style.left = position + 'px';
        }
    }
}