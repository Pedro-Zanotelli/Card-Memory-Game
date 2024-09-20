let flippedCards = [];
let isFlippingAllowed = false
let clickCounter = 0

function getValidNumberOfCards() {
    const maxAttempts = 10;
    let attempts = 0;

    while (attempts < maxAttempts) {
        const numberOfCards = Number(prompt("Enter an even number of cards between 4 and 14."));

        if (numberOfCards >= 4 && numberOfCards <= 14 && numberOfCards % 2 === 0) {
            return numberOfCards;
        } else {
            attempts++;
            alert(`Invalid input. Please enter an even number between 4 and 14.`);
        }
    }

    return 14;
}

function shuffleArray() { 
    return Math.random() - 0.5; 
}

function displayCards(numberOfCards) {
    const allCardsContainer = document.querySelector(".all-cards");
    allCardsContainer.innerHTML = '';

    const cardImages = [
        'assets/B_Radiance.png',
        'assets/Quirrel.png',
        'assets/Grimm.png',
        'assets/The_Knight.png',
        'assets/zote.png',
        'assets/hornet.png',
        'assets/pure_vessel.png'
    ]

    const cardsArray = [];
    for (let i = 0; i < numberOfCards / 2; i++) {
        cardsArray.push(cardImages[i], cardImages[i]);
    }

    cardsArray.sort(shuffleArray);

    for(let i = 0; i < numberOfCards; i++ ) {
        const cardElement = `
            <div class="card" onclick="cardFlip(this)">
                <div class="front-face face">
                    <img src="assets/back.png">
                </div>
                <div class="back-face face">
                    <img src="${cardsArray[i]}">
                </div>
            </div>
        `
        ;

        allCardsContainer.innerHTML += cardElement;
    }
}

function checkingCards() {

    const [firstCard, secondCard] = flippedCards; /*n esquecer que a variavel flippedcards ja foi definida no começo do codigo*/

    const firstImage = firstCard.querySelector('.back-face img').src;
    const secondImage = secondCard.querySelector('.back-face img').src;

    if (firstImage === secondImage) {
        flippedCards = [];
    }
    else {

        isFlippingAllowed = false;
        setTimeout(() => {
           firstCard.classList.remove('flipped');
           secondCard.classList.remove('flipped');
           flippedCards = [] 
           isFlippingAllowed = true;
           checkAllCardsFlipped()
        }, 1000);
    }

    checkAllCardsFlipped()
}

function checkAllCardsFlipped() {
    const allCards = document.querySelectorAll('.card');
    const flippedCardsCount = document.querySelectorAll('.flipped').length;

    if (flippedCardsCount === allCards.length) {
        alert(`You won in ${clickCounter} moves!`);
    }
}

function cardFlip(card){

    if (!isFlippingAllowed || card.classList.contains('flipped')) return;/*houve uma grande confusão no meu cerebro nessa parte, entao eu vou reexplicar pra mim mesmo:
    essa parte do codigo é utilizada apenas como condição, onde se uma das duas for verdadeiro o codigo impede vc de virar a carta. o que me causou mais confusão foi 
    !isFlippingAllowed, se isFlippingAllowed for false, isso significa que a condição será true, portanto nao podera virar a carta.*/ 

    card.classList.add('flipped');
    flippedCards.push(card); /*Ao clicar em uma carta o elemento 'card' é enviado para o array de flippedCards e é armazenado
    em firstCard ou secondCard*/
    clickCounter++;

    if (flippedCards.length === 2) {
        checkingCards()
    }

}

function flippingAllCards() {
    let allCards = document.querySelectorAll('.card');

    for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.add('flipped');
    }

    isFlippingAllowed = false;
    
    setTimeout(() => {
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.remove('flipped');
        }
        isFlippingAllowed = true;
    }, 1500);
}

const numberOfCards = getValidNumberOfCards(); 
displayCards(numberOfCards); 
flippingAllCards()
