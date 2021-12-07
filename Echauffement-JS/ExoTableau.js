
//Exercice 1

let mois = ['Janvier','Fevrier','Mars','Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];

//Exercice 2 

let mois = ['Janvier','Fevrier','Mars','Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
console.log(mois [2]);

//Exercice 3 

let mois = ['Janvier','Fevrier','Mars','Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
console.log(mois [4]);

//Exercice 4 

let mois = ['Janvier','Fevrier','Mars','Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
mois.splice(7, 1, 'Août');
console.log(mois[7]);

//Exercice 5 

var arr = { "Aisne" : 2, "Nord" : 59, "Oise": 60, "Pas-de-Calais" : 62, "Somme" : 80 };

//Exercice 6

var arr = {  2 :"Aisne" , 59: "Nord" ,  60: "Oise", 62: "Pas-de-Calais" ,80 : "Somme" };
var arr = arr[59];
console.log(arr);

//Exercice 7 

var arr = {  2 :"Aisne" , 59: "Nord" ,  60: "Oise", 62: "Pas-de-Calais" ,80 : "Somme", 51 : "Marne" };

//Exercice 8 


let mois = ['Janvier','Fevrier','Mars','Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
var i=0;
while (i<12) {
    console.log(mois[i]);
    i++;
}

//Exercice 9

var arr = {  2 :"Aisne" , 59: "Nord" ,  60: "Oise", 62: "Pas-de-Calais" ,80 : "Somme", 51 : "Marne" };
let i
for (i in arr) {
    console.log(arr[i])
}

//Exercice 10 

var arr = {  2 :"Aisne" , 59: "Nord" ,  60: "Oise", 62: "Pas-de-Calais" ,80 : "Somme", 51 : "Marne" };
let i
for (i in arr) {
    console.log( "Le departement"+ arr[i] + " a le numero "+ i )
}
