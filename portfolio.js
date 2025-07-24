document.addEventListener('DOMContentLoaded', function() {
    // --- SÉLECTIONS DES ÉLÉMENTS DU DOM (au début, une seule fois) ---
    const h1Element = document.querySelector('h1');
    const messageDiv = document.querySelector('#message_projet_html_css');
    const boutonsDeFiltre = document.querySelectorAll('button[data-filter]');
    const themeToggleButton = document.querySelector('#toggle-theme'); // Nouveau : sélection du bouton de thème
    const bodyElement = document.body; // Nouvelle : sélection de l'élément <body>

    // --- Fonctionnalité 1 : Changement de titre dynamique ---
    h1Element.textContent = 'Bienvenue sur mon portfolio';
    setTimeout(() => {
        h1Element.textContent = 'Je suis Quentin, développeur web'; 
    }, 3000);
    
    // --- Fonctionnalité 2 : Message de statut du projet HTML/CSS ---
    const projetHtmlCssReussi = true; 
    if (projetHtmlCssReussi) {
        messageDiv.innerHTML = '<p style="color: green; font-weight: bold;">Félicitations ! Mon premier projet HTML/CSS est un succès !</p>';
    } else {
        messageDiv.innerHTML = '<p style="color: orange;">Le projet HTML/CSS est en cours de développement...</p>';    
    }

    // --- Fonctionnalité 3 : Filtrage des projets par catégories (définition) ---
    function filtrerProjets(categorie) {
        const tousLesProjets = document.querySelectorAll('.projet-item');
        
        for (const projetItem of tousLesProjets) {
            const categorieDuProjet = projetItem.dataset.category;

            if (categorie === "all" || categorie === categorieDuProjet) {
                projetItem.style.display = 'block'; 
            } else {
                projetItem.style.display = 'none'; 
            }
        }
    }

    // --- Fonctionnalité 4 : Gestion des écouteurs de clic pour les filtres ---
    for (const bouton of boutonsDeFiltre) {
        bouton.addEventListener('click', function() {
            const categorieSelectionnee = this.getAttribute('data-filter');
            filtrerProjets(categorieSelectionnee);
        });
    }

    // --- Fonctionnalité 5 : Bascule du thème (Clair/Sombre) ---
    // Ajout de l'écouteur de clic sur le bouton de bascule de thème
    themeToggleButton.addEventListener('click', function() {
        bodyElement.classList.toggle('dark-theme'); // Bascule la classe 'dark-theme' sur le <body>
        
        // Met à jour le texte du bouton en fonction du thème actuel
        if (bodyElement.classList.contains('dark-theme')) {
            themeToggleButton.textContent = 'Changer le thème (Clair)';
        } else {
            themeToggleButton.textContent = 'Changer le thème (Sombre)';
        }
    });

    // --- Appels initiaux (au chargement de la page) ---
    filtrerProjets('all'); // Affiche tous les projets par défaut

}); // Fin de DOMContentLoaded