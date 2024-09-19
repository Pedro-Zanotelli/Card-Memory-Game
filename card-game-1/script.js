let numberOfCards
()

function getValidNumberOfCards() {
    
    while (true) {
        numberOfCards = Number(prompt("Enter a number of cards between 4 and 14 (inclusive), and it must be even."));

        if (numberOfCards >= 4 && numberOfCards <= 14 && numberOfCards % 2 === 0) {
            return numberOfCards; 
        } else {
            console.log("Invalid input. Please enter an even number between 4 and 14.");
        }
    }
}

let counter = 0
const addedCardsArray = [
    "Adicione uma tarefa no botão acima",
    "Passe o mouse na tarefa para ver o botão excluir",
    "Clique na tarefa para marca-la como feita"
];

function addCards() {
    const addedCard = document.querySelector(".card");

    for(let i = 0; i < numberOfCards; i++ ) {
        const cardHtml = `
            <div class="front-face face">
                 <img src="assets/back.png">
            </div>
            <div class="back-face face">        
                <img src="assets/bobrossparrot.gif">
            </div>
        `;

        addedCard.innerHTML += cardHtml;
    }
}

function cardFlip(card){
    card.classList.add('flipped');
    setTimeout(function() {
        card.classList.remove('flipped');  // Desvira a carta após 1 segundo
    }, 1000);
}
