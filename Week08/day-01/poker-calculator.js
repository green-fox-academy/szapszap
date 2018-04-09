module.exports = (white, black) => {
  let cards = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];
  let cards1 = white.map(e => e.split(''));
  let cards2 = black.map(e => e.split(''));
  let highestWhite = cards1[4][0];
  let highestBlack = cards2[4][0];
  for (let i = 0; i < white.length - 1; i++) {
    if (cards2[i][0] === cards2[i + 1][0]) {
      return 'Black wins! - (Pair: 5)';
    } 
  }
  if (cards.indexOf(highestWhite) > cards.indexOf(highestBlack)) {
      return `White wins! - (High card: ${highestWhite})`;
    }  
    return `Black wins! - (High card: ${highestBlack})`;
  }


