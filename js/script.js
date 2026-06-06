document.addEventListener('DOMContentLoaded', () => {
    // Gallery Logic
    const thumbnails = document.querySelectorAll('.thumbnail');
    const previewDiv = document.getElementById('preview-div');
    const previewImg = document.getElementById('preview-img');

    const showImage = (src) => {
        previewImg.src = src;
        previewDiv.classList.add('active');
    };

    const hideImage = () => {
        previewDiv.classList.remove('active');
        // Wait for transition before clearing src to avoid flicker, optional
    };

    thumbnails.forEach(thumb => {
        // Mouse events
        thumb.addEventListener('mouseenter', () => showImage(thumb.src));
        thumb.addEventListener('mouseleave', hideImage);
        
        // Keyboard accessibility events
        thumb.addEventListener('focus', () => showImage(thumb.src));
        thumb.addEventListener('blur', hideImage);
        
        // Allow selection with Enter/Space as well
        thumb.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent page scroll for space
                showImage(thumb.src);
            }
        });
    });

    // Calculator Logic
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    const calcBtn = document.getElementById('calc-btn');
    const resultDisplay = document.getElementById('result-display');

    calcBtn.addEventListener('click', () => {
        let num1 = Number(num1Input.value);
        let num2 = Number(num2Input.value);
        let operator = operatorSelect.value;
        let result = 0;

        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        }

        resultDisplay.textContent = result;
    });
});
