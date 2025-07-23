document.addEventListener('DOMContentLoaded', function() {
    // --- Fonctionnalité 1 : Changement de titre dynamique ---
    // Sélectionne l'élément h1 de la page.
    const h1 = document.querySelector('h1');
    // Définit le texte initial du h1.
    h1.textContent = 'Bienvenue sur mon portfolio';

    // Attend 3 secondes, puis change le texte du h1.
    setTimeout(() => {
        h1.textContent = 'Je suis Quentin, développeur web'; 
    }, 3000);

    // --- Fonctionnalité 2 : Message de statut du projet HTML/CSS ---
    // Utilisation d'une constante en camelCase pour la convention JS.
    const projetHtmlCssReussi = true; 
    // Sélectionne la div où le message du projet HTML/CSS doit apparaître.
    let messageDiv = document.querySelector('#message_projet_html_css');

    // Vérifie si le projet HTML/CSS est réussi et affiche le message approprié.
    if (projetHtmlCssReussi) {
        // Si réussi, insère un paragraphe de succès avec un style inline.
        messageDiv.innerHTML = '<p style="color: green; font-weight: bold;">Félicitations ! Mon premier projet HTML/CSS est un succès !</p>';
    } else {
        // Sinon, insère un paragraphe indiquant que le projet est en cours.
        messageDiv.innerHTML = '<p style="color: orange;">Le projet HTML/CSS est en cours de développement...</p>';    
    }

    // --- Fonctionnalité 3 : Filtrage des projets ---
    // Définit la fonction pour filtrer les projets par catégorie.
    function filtrerProjets(categorie) {
        // Sélectionne toutes les cartes de projets qui ont la classe 'projet-item'.
        const tousLesProjets = document.querySelectorAll('.projet-item');
        
        // Boucle sur chaque élément de la liste 'tousLesProjets'.
        for (const projetItem of tousLesProjets) {
            // Récupère la catégorie spécifiée dans l'attribut 'data-category' de chaque projet.
            const categorieDuProjet = projetItem.dataset.category;

            // Condition pour afficher ou masquer le projet :
            // Si la catégorie demandée est "all" (afficher tout)
            // OU si la catégorie demandée correspond à la catégorie du projet actuel.
            if (categorie === "all" || categorie === categorieDuProjet) {
                // Affiche l'élément en modifiant son style 'display' à 'block'.
                projetItem.style.display = 'block'; 
            } else {
                // Masque l'élément en modifiant son style 'display' à 'none'.
                projetItem.style.display = 'none'; 
            }
        }
    }

    // --- Appels de fonction pour tester le filtrage (pour l'instant, c'est manuel) ---
    // Décommente et modifie la ligne ci-dessous pour tester différentes catégories.
    // Par défaut, affichons tous les projets.
    filtrerProjets('all'); // Affiche tous les projets
    // Exemple pour n'afficher que les projets 'web-dev' :
    // filtrerProjets('web-dev'); 
    // Exemple pour n'afficher que les projets 'oop' :
    // filtrerProjets('oop');
});

// --- Fin du script portfolio.js ---