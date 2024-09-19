function getValidNumberOfCards() {
    const maxAttempts = 10;
    let attempts = 0;

    while (attempts < maxAttempts) {
        const numberOfCards = Number(prompt("Enter an even number of cards between 4 and 14."));

        if (numberOfCards >= 4 && numberOfCards <= 14 && numberOfCards % 2 === 0) {
            return numberOfCards;
        } else {
            attempts++;
            alert(`Invalid input. Please enter an even number between 4 and 14. Attempts left: ${maxAttempts - attempts}`);
        }
    }
}

function shuffleArray() { 
    return Math.random() - 0.5; 
}

function displayCards(numberOfCards) {
    const allCardsContainer = document.querySelector(".all-cards");
    allCardsContainer.innerHTML = '';

    const cardImages = [
        'assets/bobrossparrot.gif',
        'assets/explodyparrot.gif',
        'assets/fiestaparrot.gif',
        'assets/metalparrot.gif',
        'assets/revertitparrot.gif',
        'assets/tripletsparrot.gif',
        'assets/unicornparrot.gif'
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

function cardFlip(card){
    card.classList.add('flipped');
    setTimeout(function() {
        card.classList.remove('flipped');  
    }, 1000);
}

const numberOfCards = getValidNumberOfCards(); 
displayCards(numberOfCards); 
