document.addEventListener('DOMContentLoaded', function() {
    // Change the text of the h1 element after 3 seconds //
    const h1 = document.querySelector('h1');
    h1.textContent = 'Bienvenue sur mon portfolio';
    setTimeout(() => {
        h1.textContent = 'Je suis Quentin, développeur web'; 
    }, 3000);
    
    const projetHtmlCssReussi = true
    let messageDiv = document.querySelector('#message_projet_html_css');
    if (projetHtmlCssReussi) {
        messageDiv.innerHTML = '<p>Félicitations ! Mon premier projet HTML/CSS est un succès !</p>';
    } else {
        messageDiv.innerHTML = '<p>Le projet HTML/CSS est en cours de développement...</p>';    
    }
});

        