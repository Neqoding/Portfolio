// Déclaration des variables de stock et de revenu global EN DEHORS de la fonction
// pour qu'elles persistent entre les appels.
let stockGlobalCroissants = 50; // On peut commencer avec le stock initial
let stockGlobalPainsChocolat = 30;
let stockGlobalBaguettes = 20;
let chiffreAffaireTotal = 0;

function enregistrerVente (nomProduit, quantiteVendue, prixUnitaire) {
    // 1. Vérification des paramètres au début
    if (typeof nomProduit !== 'string' || typeof quantiteVendue !== 'number' || typeof prixUnitaire !== 'number') {
        throw new Error('Paramètres invalides : Le nom du produit doit être une chaîne, la quantité et le prix des nombres.');
    }
    if (quantiteVendue <= 0 || prixUnitaire <= 0) {
        throw new Error('La quantité vendue et le prix unitaire doivent être supérieurs à zéro.');
    }

    let revenuGenereParVente = quantiteVendue * prixUnitaire;
    let stockAvantVente;
    let stockApresVente;
    let produitExiste = true; // Pour vérifier si on gère ce produit

    // 2. Mise à jour du stock en fonction du produit
    // Ici, on utilise une structure conditionnelle pour gérer différents stocks
    if (nomProduit === 'Croissants') {
        stockAvantVente = stockGlobalCroissants;
        if (stockGlobalCroissants < quantiteVendue) {
            console.warn(`Attention : Pas assez de ${nomProduit} en stock. Stock actuel : ${stockGlobalCroissants}. Demande : ${quantiteVendue}.`);
            return; // Arrêter la fonction si pas assez de stock
        }
        stockGlobalCroissants -= quantiteVendue;
        stockApresVente = stockGlobalCroissants;
    } else if (nomProduit === 'pains au chocolat') {
        stockAvantVente = stockGlobalPainsChocolat;
        if (stockGlobalPainsChocolat < quantiteVendue) {
            console.warn(`Attention : Pas assez de ${nomProduit} en stock. Stock actuel : ${stockGlobalPainsChocolat}. Demande : ${quantiteVendrage}.`);
            return;
        }
        stockGlobalPainsChocolat -= quantiteVendue;
        stockApresVente = stockGlobalPainsChocolat;
    } else if (nomProduit === 'Baguettes') {
        stockAvantVente = stockGlobalBaguettes;
        if (stockGlobalBaguettes < quantiteVendue) {
            console.warn(`Attention : Pas assez de ${nomProduit} en stock. Stock actuel : ${stockGlobalBaguettes}. Demande : ${quantiteVendue}.`);
            return;
        }
        stockGlobalBaguettes -= quantiteVendue;
        stockApresVente = stockGlobalBaguettes;
    } else {
        console.warn(`Produit '${nomProduit}' non géré dans le stock.`);
        produitExiste = false;
        stockApresVente = "N/A"; // Pas de stock à afficher si produit non géré
    }

    // 3. Mise à jour du chiffre d'affaires total si le produit existe et la vente a eu lieu
    if (produitExiste) {
        chiffreAffaireTotal += revenuGenereParVente;
    }

    // 4. Affichage des informations
    console.log(`--- Nouvelle Vente ---`);
    console.log(`Produit: ${nomProduit}`);
    console.log(`Quantité vendue: ${quantiteVendue}`);
    console.log(`Prix unitaire: ${prixUnitaire}€`);
    console.log(`Revenu généré par cette vente: ${revenuGenereParVente.toFixed(2)}€`);
    
    if (produitExiste) {
        console.log(`Stock restant de ${nomProduit}: ${stockApresVente}`);
    }
    console.log(`---------------------`);

    // Une fonction peut retourner quelque chose, mais ici, elle modifie des variables globales
    // et affiche directement. On pourrait retourner un statut de vente si besoin.
}

// Appels de la fonction
enregistrerVente('Croissants', 10, 1.2);
enregistrerVente('pains au chocolat', 3, 1.5);
enregistrerVente('Baguettes', 1, 2.00);
enregistrerVente('Croissants', 45, 1.2); // Une autre vente pour voir le stock diminuer encore
enregistrerVente('Bonbons', 5, 0.5); // Produit non géré


console.log(`\n--- Résumé de la Journée ---`);
console.log(`Chiffre d'affaires total de la journée: ${chiffreAffaireTotal.toFixed(2)}€`);
console.log(`Stock final de Croissants: ${stockGlobalCroissants}`);
console.log(`Stock final de Pains au chocolat: ${stockGlobalPainsChocolat}`);
console.log(`Stock final de Baguettes: ${stockGlobalBaguettes}`);