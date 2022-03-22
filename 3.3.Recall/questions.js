// Filtre les mots du tableau commencant par la lettre "a"
let selectElementsStartingWithA = (array) => {
    return array.filter((array) => array.startsWith('a'));
}
// filtre les mots du tableau commencant par une voyelle
let selectElementsStartingWithVowel = (array) => {
    return array.filter(str => /^[aeiou]/i.test(str));
}
// Supprime les valeurs nulles d'un tableau
let removeNullElements = (array) => {
    return array.filter(x=>x !== null);
}
// Supprime les valeurs nulles et fausses d'un tableau 
let removeNullAndFalseElements = (array) => {
    return array.filter(x => x !== null && x !== false);
}
// Inverse les lettres de chaque élément d'un tableau 
let reverseWordsInArray = (array) => {
    let a = array.join();
	let b = a.split('').reverse().join('');
	let c = b.split(',');
	let d = c.reverse();
	return d;
}
// 
let everyPossiblePair = (array) => {
    let arr1 = [];
    for(let i = 0; i < array.length; i ++){
        let arr2 = [];
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                console.log('same name');
            }else{
                arr2.push(array[j]);
            }
            arr2.sort();
        }
        
        arr1.push(arr2);
    }

    arr1.sort();
    return arr1;
}
// Affiche le tableau sans les 3 premier éléments
let allElementsExceptFirstThree = (array) => {
    array.splice(0,3);
    return array;
}
// Ajoute element au début du tableau
let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}
// Trie par la dernière lettre
let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));;
}
// Obtient la première moitié d'une chaîne
let getFirstHalf = (string) => {
    return string.substring(0, Math.round (string.length /2));
}
// Rend le nombre négatif
let makeNegative = (number) => {
    return Math.abs(number)* -1;
}
// Compte les éléments d'un tableau qui sont des palindromes
let numberOfPalindromes = (array) => {
    let counter = 0;
	array.forEach((e) => {
		let a = e.split('').reverse().join('');
		if (a === e) {
			counter++;
		}
	});
	return counter;
}
// Renvoie le mot le plus court d'un tableau
let shortestWord = (array) => {
    return array.reduce((a,b) => a.length <= b.length ? a : b) ;
}
// Renvoie le mot le plus long d'un tableau
let longestWord = (array) => {
    return array.reduce((a,b) => a.length > b.length ? a : b);
}
// Résume les nombres dans un tableau
let sumNumbers = (array) => {
    return array.reduce((partialSum,a) => partialSum + a, 0);
}
// repette un tableau 
let repeatElements = (array) => {
    return array.concat(array);
}
// Transforme une chaîne de caractères en nombres 
let stringToNumber = (string) => {
    return parseInt(string);
}
// calcule la moyenne d'un tableau de nombres
let calculateAverage = (array) => {
    return array.reduce((aac,v,i,a)=>(aac+v/a.length),0);
}
// Récupère les 5 premiers index d'un tableau
let getElementsUntilGreaterThanFive = (array) => {
    return array.slice(0,6);
}
// Converti un tableau en object
let convertArrayToObject = (array) => {
    // return Object.fromEntries(array);
    // return Object.fromEntries(Object.entries(array));
    // let arr = [['a', 'b'], ['c', 'd']];
    // let arr = [['a', 'b', 'c'], ['a', 'b', 'c'] ];
    // const obj = Object.fromEntries(arr);
    // return obj;

    // let obj = Object.assign({}, array);
    // Object.fromEntries(obj);
    // return obj;

    let obj = {};

	for (let i = 0; i < array.length; i += 2) {
		obj[array[i]] = array[i + 1];
	}

	return obj;
}
// Sépare les lettres des mots d'un tableau 
let getAllLetters = (array) => {
    return [... new Set(array.join('').split('').sort())];
}

let swapKeysAndValues = (object) => {
    return {...new Set(object.join('').split('').sort)};
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    console.log(string.split('.'));
    return string.replace(/\w\S*/g, (txt) => {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
