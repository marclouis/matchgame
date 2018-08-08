let MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
  let $game = $('#game');
  let values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});
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
  let colors = [
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

  for (let valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
    let value = cardValues[valueIndex];
    let color = colors[value - 1];
    let data = {
      value: value,
      color: color,
      isFlipped: false
    };

    let $cardElement = $('<div class="col-xs-3 card"></div>');
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

   if ($card.data('isFlipped')) {
     return;
   }

   $card.css('background-color', $card.data('color'))
       .text($card.data('value'))
       .data('isFlipped', true);

   let flippedCards = $game.data('flippedCards');
   flippedCards.push($card);

   if (flippedCards.length === 2) {
     if (flippedCards[0].data('value') === flippedCards[1].data('value')) {
       let matchCss = {
         backgroundColor: 'rgb(153, 153, 153)',
         color: 'rgb(204, 204, 204)'
       };
       flippedCards[0].css(matchCss);
       flippedCards[1].css(matchCss);
     } else {
       let card1 = flippedCards[0];
       let card2 = flippedCards[1];
       window.setTimeout(function() {
         card1.css('background-color', 'rgb(32, 64, 86)')
             .text('')
             .data('isFlipped', false);
         card2.css('background-color', 'rgb(32, 64, 86)')
             .text('')
             .data('isFlipped', false);
       }, 350);
     }
     $game.data('flippedCards', []);
   }
 };
