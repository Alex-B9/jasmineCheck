
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
// concaténer 2 texte
let concatString = (texte1, texte2) => {
    let text = texte1 + texte2;
    return text;
}
// afficher le 5ème charactère 
let afficherCar5 =  (texte) => {
    return texte.charAt(4);
}
// Affiche les 9 premier charactère
let afficher9Car =  (texte) => {
    return texte.substring(0,9);
}
// Affiche le texte en majuscule 
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
// Affiche le texte en minuscule 
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
// Supprimer les espaces entre chaques mots
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
// Renvoie 'True' si le type de "texte" est égale à un texte 
let IsString =  (texte) => {
    if(typeof texte === 'string'){
        return true;
    }
}
// Afficher l'extension du fichier 
let AfficherExtensionString =  (texte) => {
    return texte.split('.').pop();
}
// Compter le nombre d'espaces entre chaque mot 
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length -1;
}
// Inverser l'ordre des lettres d'un paragraphe
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
// Calculer la puissance de deux nombres
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);
}
// Afficher la valeur absolue d'un nombre 
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
// Afficher les valeurs absolues de plusieurs nombres
// modifie la valeur du tableau
let valeurAbsolueArray =  (array) => {
    array.forEach((e, k) => {
        array[k]=Math.abs(e)
    });
    return array;
}
// Calculer la surface d'un cercle en fonction de son rayon
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * (rayon * rayon));
}
// Calculer l'hypothènuse d'un triangle rectangle
let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab,ac);
}
// Calculer l'IMC (Poids / (taille x taille)
// toFixed() fixe le chiffre choisis en parenthèse après la virgule
let calculIMC =  (poids, taille) => {
    return new Number((poids / (taille * taille)).toFixed(2));
}
