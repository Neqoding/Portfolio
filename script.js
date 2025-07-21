document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('h1');
    h1.textContent = 'Bienvenue sur mon portfolio';
    setTimeout(() => {
        h1.textContent = 'Je suis Quentin, développeur web';
        
    }, 3000);
});

        