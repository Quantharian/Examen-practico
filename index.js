document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    for (let i = 1; i <= 5; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.value = i;
        button.addEventListener('click', () => {
            const buttons = container.querySelectorAll('button');
            buttons.forEach((btn) => (btn.disabled = false));
            button.disabled = true;
        });
        container.appendChild(button);
    }
});
