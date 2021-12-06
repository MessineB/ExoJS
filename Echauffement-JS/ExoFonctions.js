//Exercice 1 

function testNum(a) {
    var a = 10;
    if (a === 10) {
        a = "true" ;
    } else {
        a = "false";
    }
    return a;
}
console.log(testNum(2));


//Exercice 3


function Conca(str1, str2) {
    str1= "Salut"
    str2=" Nejma"
    console.log( str1.toUpperCase() + str2.toUpperCase() )
  }
Conca()

//Exercice 4
let x=10;
let y=15;
function Compare(x, y){
    if (x>y) {
        console.log("Le premier nombre est plus grand")
    }
    else if(x<y) {
        console.log("Le premier nombre est plus petit")
    }
    else {  
        console.log("Les deux nombres sont identiques") 

    }
}
Compare(x,y);

//Exercice 5 
    str1= "Salut"
    num1=500;
function ConcaNum(str1, num1) {
    
    console.log( str1.toUpperCase() + num1 )
  }
  ConcaNum(str1,num1)

  //Exercice 6 
  str1="Belaroussi "
  str2=" Messine "
  age=24;
  function Phrase( str1,str2,age){
      console.log("Bonjour "+ str1 + str2 + "tu as "+ age + " ans")
  }
Phrase(str1,str2,age)

//Exercice 7 



function Id(age, genre){
    if ( genre == "Homme" ){
        if ( age> 18 ) {
            console.log("Vous etes un Homme et majeur")
        }
        else { console.log("Vous etes un Homme et mineur")}
    }
    else if ( genre == "Femme") {
        if ( age>18 ){
            console.log("Vous etes une Femme Majeur")
        }
        else { console.log("Vous etes une Femme mineure")} 
    }
    else { 
        if ( age>18) {
            console.log("Vous etes ni homme ni une femme et majeur")
        }
        else {console.log("Vous etes ni homme ni une femme et mineur")}
    }
    
}
Id(70,"Femme");


//Exercice 8 

function Somme(a,b,c) {
    console.log(a+b+c)
}
Somme(5,6,7)



