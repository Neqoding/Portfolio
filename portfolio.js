document.addEventListener('DOMContentLoaded', function() {
    // ... (Ton code précédent pour le changement de titre et le message HTML/CSS)

    // --- Fonctionnalité : Filtrage des projets par catégories ---

    // 1. Sélectionne tous les boutons qui ont l'attribut 'data-filter'.
    //    Ceci nous donnera une liste de tous tes boutons "Tout", "Développement Web", etc.
    const boutonsDeFiltre = document.querySelectorAll('button[data-filter]');

    // 2. Parcourt chaque bouton de filtre un par un.
    for (const bouton of boutonsDeFiltre) { // <-- 'bouton' est défini ici, à l'intérieur de la boucle
        // 3. Pour chaque 'bouton', ajoute un écouteur d'événement 'click'.
        //    La fonction (callback) ici sera exécutée chaque fois qu'un de ces boutons est cliqué.
        bouton.addEventListener('click', function() {
            // 'this' à l'intérieur de cette fonction de rappel fait référence au bouton qui a été cliqué.
            // On récupère la valeur de l'attribut 'data-filter' de ce bouton spécifique.
            const categorieSelectionnee = this.getAttribute('data-filter');
            
            // Appelle la fonction 'filtrerProjets' que tu as déjà définie,
            // en lui passant la catégorie récupérée du bouton cliqué.
            filtrerProjets(categorieSelectionnee);
        });
    }

    // --- Définition de la fonction filtrerProjets (doit être définie AVANT d'être appelée) ---
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

    // --- Appel initial pour afficher tous les projets au chargement de la page ---
    // Cet appel est important pour que les projets soient visibles au début.
    filtrerProjets('all'); 
});