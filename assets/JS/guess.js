let numberToGuess = Math.round(Math.random()*100);
let vie = 10;


function precision () {
    let userAnswer = parseInt(document.getElementById('userAnswer').value);
    if (userAnswer < numberToGuess) {
        document.getElementById('precision').innerHTML = "C'est plus !";
    }
    if (userAnswer > numberToGuess) {
        document.getElementById('precision').innerHTML = "C'est moins !";
    }
}


function retry () {
    vie = 10;
    numberToGuess = Math.round(Math.random()*100);
    document.getElementById('userAnswer').style.display = "inline";
    document.getElementById('valid').style.display = "inline";
    document.getElementById('retry').style.display = "none";
    document.getElementById('life').innerHTML = "Il vous reste " + vie + " vies.";
    document.getElementById('precision').style.display = "inline";
    document.getElementById('life').style.display = "inline";
    winRemove();
    looseRemove();
}

function looseRemove () {
    let loose = document.querySelector('.loose');
    if (loose) {
        loose.remove();
    }
}


function winRemove () {
    let win = document.querySelector('.win');
    if (win) {
        win.remove();
    }
}


function winOrFail () {
    let userAnswer = parseInt(document.getElementById('userAnswer').value);
    if (numberToGuess === userAnswer) {
        let win = document.createElement('h2');
        win.innerHTML = "Bien jouer c'etait le bon nombre !!";
        win.className = "win";
        document.getElementById('toGuess').appendChild(win);
        document.getElementById('userAnswer').style.display = "none";
        document.getElementById('valid').style.display = "none";
        document.getElementById('retry').style.display = "inline";
        document.getElementById('precision').style.display = "none";
        document.getElementById('life').innerHTML = "Il vous restait " + vie + " vies.";
    }
    else {
        vie--;
        document.getElementById('life').innerHTML = "Il vous reste " + vie + " vies.";
    }
}

function loose () {
    if (vie === 0) {
        let loose = document.createElement('h2');
        loose.innerHTML = "Vous n'avez plus de vie ... C'est Perdu !!";
        loose.className = "loose";
        document.getElementById('toGuess').appendChild(loose);
        document.getElementById('userAnswer').style.display = "none";
        document.getElementById('valid').style.display = "none";
        document.getElementById('retry').style.display = "inline";
        document.getElementById('precision').style.display = "none";
        document.getElementById('life').style.display = "none";
    }
}


document.getElementById('valid').addEventListener("click", function (){
    winRemove();
    winOrFail();
    loose();
    precision();
})


document.getElementById('retry').addEventListener("click", function () {
    retry();
})