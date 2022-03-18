// Création d'un tableau 
let CreationTableauLangages =  () => {
    return array = [ 'Html', 'CSS', 'Java', 'PHP' ];
}
// Création d'un tableau 
let CreationTableauNombres =  () => {
    return array = [ 0, 1, 2, 3, 4, 5 ];
}
// Remplacer un élément d'un tableau
let RemplacementElement =  (langages) => {
    langages[2] = 'Javascript';
    return langages;
}
// Ajout d'un élément dans un tableau
let AjoutElementLangages =  (langages) => {
    langages.push('Ruby','Python');
    return langages;
}
// Ajout de nombres dans un tableau 
// s'ajoute dans l'ordre d'insertion (-2,-1)
let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1);
    return nombres;
}
// Supprime le premier élément d'un tableau
let SuppressionPremierElement =  (langages) => {
    langages.shift();
    return langages;
}
// Supprime le dernier élément d'un tableau
let SuppressionDernierElement =  (langages) => {
    langages.pop();
    return langages;
}
// Converti une chaîne de caractères en tableau
let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    return reseaux_sociaux_chaine.split(",");
}
// Converti un tableau en chaîne de caractères
let ConversionTableauChaine =  (langages) => {
    return langages.toString();
}
// Trie un tableau 
let TriTableau =  (reseaux_sociaux) => {
    return reseaux_sociaux.sort();
}
// inverse un tableau
let InversionTableau =  (langages) =>{
    return langages.reverse();
}
