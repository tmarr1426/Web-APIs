let cardImg = document.getElementById("card-image");
let cardsRemaining = document.getElementById("card-remaining");
let cardButton = document.getElementById("card-button");

const createDeckAndGiveId = async () => {
  try {
    let url =
      "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

    let response = await fetch(url);
    let json = await response.json();

    let cardId = json.deck_id;
    return cardId;
  } catch (err) {
    console.log(err);
  }
};

const drawCard = async (deckId) => {
  try {
    let url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`;

    let response = await fetch(url);
    let json = await response.json();

    if (json.error) throw new Error(json.error);

    let myCardData = {
      img: json.cards[0].images.svg,
      remaining: json.remaining,
    };

    return myCardData;
  } catch (err) {
    console.log(err);
    cardsRemaining.textContent = err;
  }
};

const start = async () => {
  let cardId = await createDeckAndGiveId();

  cardButton.onclick = async () => {
    cardImg.style.opacity = 0;

    let { img, remaining } = await drawCard(cardId);
    cardsRemaining.textContent = `Remaining: ${remaining}`;
    cardButton.textContent = remaining == 0 ? "Reshuffle" : "Draw a Card";
    if (remaining == 0) {
        await start();
    } else {
        cardImg.src = img;
    }

    setTimeout(() => {
        cardImg.style.opacity = 1;
    },100)

  };
};

start();
