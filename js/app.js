const allCardsArr = document.querySelectorAll(".card");

allCardsArr.forEach(function (card) {
    card.addEventListener('click', select);
});

function select(event) {
    const selectedCardClass = event.target.classList[1];

    const selectedCard = document.querySelector("."+selectedCardClass);
    console.log(selectedCard);

    selectedCard.firstElementChild

    rotateCard(selectedCard);
    }

function rotateCard(rotateThisCard) {
     rotateThisCard.style.transform = "rotate3d(0, 1, 0, "+180+"deg)";
     rotateThisCard.firstElementChild.style.opacity = "0";
     
    }