var listAllCards = document.getElementsByClassName("card");
var listCards;
var cardFound = false;

function sortcard(card) {
  switch (card) {
    case "java":
      listCards = document.getElementsByClassName("java");
      hideCard();
      break;

    case "c":
      listCards = document.getElementsByClassName("c");
      hideCard();
      break;

    case "html":
      listCards = document.getElementsByClassName("html");
      hideCard();
      break;

    case "javascript":
      listCards = document.getElementsByClassName("javascript");
      hideCard();
      break;

    case "all":
      for (
        let allCardIndex = 0;
        allCardIndex < listAllCards.length;
        allCardIndex++
      ) {
        listAllCards[allCardIndex].style.display = "block";
      }
      break;

    default:
      console.log(card);
      break;
  }
}

function hideCard() {
  for (
    let allCardIndex = 0;
    allCardIndex < listAllCards.length;
    allCardIndex++
  ) {
    for (let cardIndex = 0; cardIndex < listCards.length; cardIndex++) {
      if (listAllCards[allCardIndex] == listCards[cardIndex]) {
        listCards[cardIndex].style.display = "block";
        cardFound = true;
      }
    }

    if (!cardFound) {
      listAllCards[allCardIndex].style.display = "none";
    }
    cardFound = false;
  }
}