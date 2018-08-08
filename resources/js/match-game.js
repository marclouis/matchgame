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
   for (let i=1; i<=8; i++) {
     value.push(i);
     value.push(i);
   }
   let random =[];
   while (value.length>0) {
     let rando = Math.floor(Math.random() * value.length);
     let randoSplice = value.splice(rando,1)[0];
     random.push(randoSplice);
   }
   return random;
 };

 console.log(MatchGame.generateCardValues());

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

  $game.empty();
  $game.data('flippedCards', []);

  for (var valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
    var value = cardValues[valueIndex];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };

    var $cardElement = $('<div class="col-xs-3 card"></div>');
    $cardElement.data(data);

    $game.append($cardElement);
  }

  $('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

 MatchGame.flipCard = function($card, $game) {

 };
