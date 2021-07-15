export { calculatePtsByUsername, calculatePtsForRound };

function calculatePtsByUsername(normalizedBetsByUser) {
  const ptsByUsername = {};
  const actualBet = normalizedBetsByUser['actual'];
  Object.keys(normalizedBetsByUser)
    .filter((u) => u !== 'actual')
    .forEach((user) => {
      const userBet = normalizedBetsByUser[user];
      Object.keys(userBet).forEach((round) => {
        if (!ptsByUsername[user]) {
          ptsByUsername[user] = {};
          ptsByUsername[user]['total'] = 0;
        }

        const userPtsForRound = calculatePtsByRoundForUser(
          round,
          actualBet[round],
          userBet[round]
        );

        ptsByUsername[user][round] = userPtsForRound;

        ptsByUsername[user]['total'] += userPtsForRound.total;
      });
    });

  calcPlayInSpecialPtsForUser(ptsByUsername);

  return ptsByUsername;
}

function calculatePtsForRound(normalizedBetsByRound) {
  let ptsForRound = {};
  ptsForRound['total'] = {};
  Object.keys(normalizedBetsByRound).forEach((round) => {
    ptsForRound[round] = calculatePtsByRound(
      round,
      normalizedBetsByRound,
      ptsForRound
    );
  });
  ptsForRound['total']['zan'] -= 1;
  return ptsForRound;
}

function calculatePtsByRound(round, normalizedBetsByRound, ptsForRound) {
  const ptsByRound = {};
  const roundBet = normalizedBetsByRound[round];
  const actualBet = roundBet['actual'];
  Object.keys(roundBet['bets']).forEach((user) => {
    const userBet = roundBet['bets'][user];
    ptsByRound[user] = calculatePtsByRoundForUser(round, actualBet, userBet);

    if (ptsForRound['total'][user]) {
      ptsForRound['total'][user] += ptsByRound[user]['total'];
    } else {
      ptsForRound['total'][user] = ptsByRound[user]['total'];
    }
  });

  calcPlayInSpecialPtsForRound(ptsByRound, round);

  return ptsByRound;
}

function calcPlayInSpecialPtsForRound(ptsByRound, round) {
  if (round === 'play-in') {
    ptsByRound['zan']['east-8'] -= 1;
    ptsByRound['zan']['total'] -= 1;
  }
}

function calcPlayInSpecialPtsForUser(ptsByUser) {
  // Zanzury will get only one point if east-8 is currect - so reduce one point from result.
  ptsByUser['zan']['play-in']['east-8'] -= 1;
  ptsByUser['zan']['play-in']['total'] -= 1;
  ptsByUser['zan']['total'] -= 1;
}

const playInPts2PredicatesMap = new Map();
playInPts2PredicatesMap.set(2, teamAndPlacement);
playInPts2PredicatesMap.set(1, teamInPlayoffs);

const roundOnePts2PredicatesMap = new Map();
roundOnePts2PredicatesMap.set(4, winnerAndGames);
roundOnePts2PredicatesMap.set(2, winnerOnly);

const roundTwoPts2PredicatesMap = new Map();
roundTwoPts2PredicatesMap.set(8, winnerAndGames);
roundTwoPts2PredicatesMap.set(4, winnerOnly);

const confFinalsPts2PredicatesMap = new Map();
confFinalsPts2PredicatesMap.set(16, winnerAndGames);
confFinalsPts2PredicatesMap.set(8, winnerOnly);

const game7Pts2PredicatesMap = new Map();
game7Pts2PredicatesMap.set(3, closestBet);

const finalsPts2PredicatesMap = new Map();
finalsPts2PredicatesMap.set(5, finalsMvpPredicate);
finalsPts2PredicatesMap.set(4, closestFinalsGameBet);
finalsPts2PredicatesMap.set(3, closestDrawFinalsGameBet);
finalsPts2PredicatesMap.set(32, winnerAndGames);
roundOnePts2PredicatesMap.set(16, winnerOnly);

const calculatorMap = {
  'play-in': {
    bets: ['east-7', 'east-8', 'west-7', 'west-8'],
    predicates: playInPts2PredicatesMap,
  },
  'round-one': {
    bets: [
      'east-1-8',
      'east-2-7',
      'east-3-6',
      'east-4-5',
      'west-1-8',
      'west-2-7',
      'west-3-6',
      'west-4-5',
    ],
    predicates: roundOnePts2PredicatesMap,
  },
  'round-two': {
    bets: ['east-1-4', 'east-2-3', 'west-1-4', 'west-2-3'],
    predicates: roundTwoPts2PredicatesMap,
  },
  'game-7': {
    bets: ['clippers-mavericks-7', 'nets-bucks-7', 'philli-hawks-7'],
    predicates: game7Pts2PredicatesMap,
  },
  'conf-finals': {
    bets: ['suns-clippers','bucks-hawks'],
    predicates: confFinalsPts2PredicatesMap
  },
  'the-finals': {
    bets: ['finals-score', 'finals-mvp', 'game-1', 'game-2', 'game-3', 'game-4'], // 'game-5', 'game-6', 'game-7'],
    predicates: finalsPts2PredicatesMap
  }
};

function calculatePtsByRoundForUser(round, actualBet, userBet) {
  let result = {
    total: 0,
  };
  if (calculatorMap[round]) {
    calculatorMap[round]['bets'].forEach((betId) => {
      const betPts = calculatePtsByBetIdForUser(
        round,
        betId,
        actualBet,
        userBet
      );
      result[betId] = betPts;
      result['total'] += betPts;
    });
  }
  return result;
}

function calculatePtsByBetIdForUser(round, betId, actualBet, userBet) {
  for (const [pts, predicate] of calculatorMap[round]['predicates'].entries()) {
    if (actualBet[betId] !== '' && predicate(betId, actualBet, userBet)) {
      return pts;
    }
  }

  return 0;
}

function teamAndPlacement(betId, actualBet, userBet) {
  return actualBet[betId] === userBet[betId];
}

function teamInPlayoffs(betId, actualBet, userBet) {
  return Object.values(actualBet).includes(userBet[betId]);
}

function winnerAndGames(betId, actualBet, userBet) {
  return actualBet[betId] === userBet[betId];
}

function winnerOnly(betId, actualBet, userBet) {
  return actualBet[betId].split('-')[0] === userBet[betId].split('-')[0];
}

function closestBet(betId, actualBet, userBet) {
  if (betId === 'clippers-mavericks-7' && userBet[betId] === 'clippers-4')
    return true;
  if(betId === 'nets-bucks-7' && userBet[betId] === 'bucks-4')
    return true
  if(betId === 'philli-hawks-7' && userBet[betId] === 'hawks-7')
    return true
  return false;
}

function finalsMvpPredicate(betId, actualBet, userBet) {
  return false;
}

function closestFinalsGameBet(betId, actualBet, userBet) {
  if(betId === 'game-1' && userBet[betId] === 'suns-8') return true;
  if(betId === 'game-2' && userBet[betId] === 'suns-7') return true; 
  if(betId === 'game-4' && userBet[betId] === 'bucks-7') return true; 
}

function closestDrawFinalsGameBet(betId, actualBet, userBet) {
  if(betId === 'game-3' && userBet[betId] === 'bucks-10') return true;
}
