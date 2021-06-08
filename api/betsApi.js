import { allBets } from '../data/bets';

export { getAllBets, getNormalizedBetsByRound, getNormalizedBetsByUser };

function getAllBets() {
  return allBets;
}

function getNormalizedBetsByRound(allBets) {
  const betsByRound = getBetsByRound(allBets);
  const normalizedBetsByRound = normalizeBetsByRound(betsByRound);
  return normalizedBetsByRound;
}

function getBetsByRound(allBets) {
  let betsByRound = {};
  allBets.forEach((bet) => {
    const { betRound, ...props } = bet;
    if (betsByRound[betRound]) {
      betsByRound[betRound].push(props);
    } else {
      betsByRound[betRound] = [props];
    }
  });
  return betsByRound;
}

function normalizeBetsByRound(betsByRound) {
  const normalizedBetsByRound = {};
  Object.entries(betsByRound).forEach(([betRound, roundBets]) => {
    const normalizedRoundBets = getNormalizedRoundBets(roundBets);
    normalizedBetsByRound[betRound] = normalizedRoundBets;
  });
  return normalizedBetsByRound;
}

function getNormalizedRoundBets(roundBets) {
  const normalizedRoundBets = { actual: {}, bets: {} };
  roundBets.forEach((roundBet) => {
    const { username, betId, bet } = roundBet;
    if (username === 'actual') {
      normalizedRoundBets[username][betId] = bet;
    } else {
      if (!normalizedRoundBets['bets'][username]) {
        normalizedRoundBets['bets'][username] = {};
      }
      normalizedRoundBets['bets'][username][betId] = bet;
    }
  });
  return normalizedRoundBets;
}

function getNormalizedBetsByUser(allBets) {
  const betsByUser = getBetsByUser(allBets);
  const normalizedBetsByUser = normalizeBetsByUser(betsByUser);
  return normalizedBetsByUser;
}

function getBetsByUser(allBets) {
  let betsByUser = {};
  allBets.forEach((bet) => {
    const { username, ...props } = bet;
    if (betsByUser[username]) {
      betsByUser[username].push(props);
    } else {
      betsByUser[username] = [props];
    }
  });
  return betsByUser;
}

function normalizeBetsByUser(betsByUser) {
  const normalizedBetsByUser = {};
  Object.entries(betsByUser).forEach(([betUser, userBets]) => {
    const normalizedUserBets = getNormalizedUserBets(userBets);
    normalizedBetsByUser[betUser] = normalizedUserBets;
  });
  return normalizedBetsByUser;
}

function getNormalizedUserBets(userBets) {
  const normalizedUserBets = {};
  userBets.forEach((userBet) => {
    const { betRound, betId, bet } = userBet;
    if (!normalizedUserBets[betRound]) {
      normalizedUserBets[betRound] = {};
    }
    normalizedUserBets[betRound][betId] = bet;
  });
  return normalizedUserBets;
}
