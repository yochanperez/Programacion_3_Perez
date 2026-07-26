document.addEventListener("DOMContentLoaded", () => {
    const triangulo = document.getElementById('triangulo');
    let isDragging = false;
    let startX = 0;
    let scaleValue = 1;

    function updateScale(newX) {
        if (!triangulo) return;
        const diffX = newX - startX;
        scaleValue += diffX * 0.005;
        scaleValue = Math.max(0.5, Math.min(2, scaleValue));
        triangulo.style.transform = `scale(${scaleValue})`;
        startX = newX;
    }

    if (triangulo) {
        triangulo.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            startX = e.clientX;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            updateScale(e.clientX);
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        triangulo.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isDragging = true;
            startX = e.touches[0].clientX;
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            updateScale(e.touches[0].clientX);
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
        });
    }
});