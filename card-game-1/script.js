const cardList = document.querySelectorAll(".card")
cardList = []

function cardFlip(card){
    card.classList.add('flipped');
    setTimeout(function() {
        card.classList.remove('flipped');  // Desvira a carta após 1 segundo
    }, 1000);
}
