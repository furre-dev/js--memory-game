const allCardsArr = document.querySelectorAll(".card");

let hasFlippedCard = false;
let firstCard, secondCard;
let bothSelected = false;

let firstCardImage, secondCardImage;

let playerPoints = 0;

//runs the shuffleCards function on load
shuffleCards(allCardsArr);


//Shuffles the order of the cards to get a unique game every time
function shuffleCards(shuffleArray) {
    for (let i = 0; i < shuffleArray.length; i++) {
        let randomOrder = Math.floor(Math.random() * 100);
        shuffleArray[i].style.order = "" + randomOrder + "";
    }
}
//rotateThisCard = card element
function rotateCard(rotateThisCard) {
    //adding active class to element, which has rotate in css
    rotateThisCard.classList.add("active");

    //if else statements to determine if it's the first or second card
    if (hasFlippedCard == false) {
        firstCard = rotateThisCard;
        console.log("first card= " + firstCard.classList[1]);

        firstCardImage = firstCard.firstElementChild.src;
        console.log(firstCardImage)

        hasFlippedCard = true;
        bothSelected = false;
    } else if (hasFlippedCard == true) {
        secondCard = rotateThisCard;
        console.log("second card= " + secondCard.classList[1]);

        secondCardImage = secondCard.firstElementChild.src;
        console.log(secondCardImage)

        hasFlippedCard = false;
        bothSelected = true;
    }
    if (bothSelected == true && (firstCardImage != secondCardImage)) {
        allCardsArr.forEach(function (thisCard) {
            thisCard.style.pointerEvents = "none";
        });

        setTimeout(() => {
            firstCard.classList.remove("active");
            secondCard.classList.remove("active");
            allCardsArr.forEach(function (thisCard) {
                thisCard.style.pointerEvents = "all";
            });
        }, 1000);
    } else if (bothSelected == true && (firstCardImage == secondCardImage)) {
        playerPoints = playerPoints + 1;
        console.log(playerPoints)
        document.querySelector(".points").textContent = playerPoints;
    }

}



allCardsArr.forEach(function (card) {
    card.addEventListener('click', select);
});

function select(event) {
    const selectedCardClass = event.target.classList[1];
    //selectedcardClass takes event target and reads the second classlist
    //which is from one - twelve. The variable under has the value of an
    //element with the class value of the class that was read on electedCardClass
    const selectedCard = document.querySelector("." + selectedCardClass);

    //runs rotateCard on click.
    rotateCard(selectedCard);
}
