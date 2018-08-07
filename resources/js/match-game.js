var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  let value = [];
  for (let i=0; i<=8; i++) {
    value.push(i);
    value.push(i);
  };
  return value;

  let random =[];
  while (value.length>0) {
    let rando = Math.floor(Math.random() * value.length);
    let randoSplice = value.splice(rando,1)[0];
    random.push(randoSplice);
  };
  return random;
};
console.log(random);

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
