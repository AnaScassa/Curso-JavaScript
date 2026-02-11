//---------exercise 2 --------------------------------------------
let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxGuesses = 10;

function newGame(){
    //re abrir a pagina
    window.location.reload();
}

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1);
    console.log(computerNumber);
}

function compareNumbers(){
    if(attempts < maxGuesses){
        const userNumber = Number(document.getElementById("numberBox").value);
        userNumbers.push(" " + userNumber); // push = pegar o numero
        document.getElementById("guesses").innerHTML = userNumbers;

        if(userNumber > computerNumber){
            document.getElementById("guess").innerHTML =  'Your number is too high';
            document.getElementById("numberBox").value = ' '; // esvazia o input
            attempts++;
            document.getElementById("attemps").innerHTML = attempts;
        }else if(userNumber < computerNumber){
            document.getElementById("guess").innerHTML =  'Your number is too low';
            document.getElementById("numberBox").value = ' ';
            attempts++;
            document.getElementById("attemps").innerHTML = attempts;
        }else{
            document.getElementById("guess").innerHTML =  'THATS RIGHT!!!';
            attempts++;
            document.getElementById("attemps").innerHTML = attempts;

            //função para o input ficar sem possibilidade de escrever mais
            document.getElementById("numberBox").setAttribute('Readonly', 'Readonly');
        }
    }else{
        document.getElementById("guess").innerHTML = "You Lose! The computerNumber was: " + computerNumber;
        document.getElementById("numberBox").setAttribute('Readonly', 'Readonly');
    }
}