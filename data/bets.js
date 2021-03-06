const playInBets = [
  { betRound: 'play-in', betId: 'east-7', username: 'moshe', bet: 'wizards' },
  { betRound: 'play-in', betId: 'east-7', username: 'shalom', bet: 'celtics' },
  { betRound: 'play-in', betId: 'east-7', username: 'zan', bet: '' },

  { betRound: 'play-in', betId: 'east-8', username: 'moshe', bet: 'celtics' },
  { betRound: 'play-in', betId: 'east-8', username: 'shalom', bet: 'wizards' },
  { betRound: 'play-in', betId: 'east-8', username: 'zan', bet: 'wizards' },

  { betRound: 'play-in', betId: 'west-7', username: 'moshe', bet: 'lakers' },
  { betRound: 'play-in', betId: 'west-7', username: 'shalom', bet: 'lakers' },
  { betRound: 'play-in', betId: 'west-7', username: 'zan', bet: 'lakers' },

  { betRound: 'play-in', betId: 'west-8', username: 'moshe', bet: 'warriors' },
  { betRound: 'play-in', betId: 'west-8', username: 'shalom', bet: 'warriors' },
  { betRound: 'play-in', betId: 'west-8', username: 'zan', bet: 'warriors' },

  { betRound: 'play-in', betId: 'east-7', username: 'actual', bet: 'celtics' },
  { betRound: 'play-in', betId: 'east-8', username: 'actual', bet: 'wizards' },
  { betRound: 'play-in', betId: 'west-7', username: 'actual', bet: 'lakers' },
  {
    betRound: 'play-in',
    betId: 'west-8',
    username: 'actual',
    bet: 'grizzlies',
  },
];

const extrasBets = [
  { betRound: 'extras', betId: 'pts-lead', username: 'moshe', bet: 'mitchell' },
  { betRound: 'extras', betId: 'pts-lead', username: 'shalom', bet: 'embid' },
  { betRound: 'extras', betId: 'pts-lead', username: 'zan', bet: 'randle' },

  { betRound: 'extras', betId: 'ast-lead', username: 'moshe', bet: 'harden' },
  { betRound: 'extras', betId: 'ast-lead', username: 'shalom', bet: 'harden' },
  { betRound: 'extras', betId: 'ast-lead', username: 'zan', bet: 'jokic' },

  { betRound: 'extras', betId: 'reb-lead', username: 'moshe', bet: 'embid' },
  { betRound: 'extras', betId: 'reb-lead', username: 'shalom', bet: 'golbert' },
  { betRound: 'extras', betId: 'reb-lead', username: 'zan', bet: 'golbert' },

  { betRound: 'extras', betId: 'finals-mvp', username: 'moshe', bet: 'durant' },
  {
    betRound: 'extras',
    betId: 'finals-mvp',
    username: 'shalom',
    bet: 'durant',
  },
  { betRound: 'extras', betId: 'finals-mvp', username: 'zan', bet: 'lebron' },

  {
    betRound: 'extras',
    betId: 'finals-score',
    username: 'moshe',
    bet: 'nets-lakers-nets-6',
  },
  {
    betRound: 'extras',
    betId: 'finals-score',
    username: 'shalom',
    bet: 'nets-lakers-nets-6',
  },
  {
    betRound: 'extras',
    betId: 'finals-score',
    username: 'zan',
    bet: 'nets-lakers-lakers-6',
  },

  { betRound: 'extras', betId: 'pts-lead', username: 'actual', bet: '' },
  { betRound: 'extras', betId: 'ast-lead', username: 'actual', bet: '' },
  { betRound: 'extras', betId: 'reb-lead', username: 'actual', bet: '' },
  { betRound: 'extras', betId: 'finals-mvp', username: 'actual', bet: '' },
  { betRound: 'extras', betId: 'finals-score', username: 'actual', bet: '' },
];

const roundOneBets = [
  {
    betRound: 'round-one',
    betId: 'east-1-8',
    username: 'moshe',
    bet: 'philli-4',
  },
  {
    betRound: 'round-one',
    betId: 'east-1-8',
    username: 'shalom',
    bet: 'philli-5',
  },
  {
    betRound: 'round-one',
    betId: 'east-1-8',
    username: 'zan',
    bet: 'philli-5',
  },

  {
    betRound: 'round-one',
    betId: 'east-2-7',
    username: 'moshe',
    bet: 'nets-4',
  },
  {
    betRound: 'round-one',
    betId: 'east-2-7',
    username: 'shalom',
    bet: 'nets-5',
  },
  { betRound: 'round-one', betId: 'east-2-7', username: 'zan', bet: 'nets-5' },

  {
    betRound: 'round-one',
    betId: 'east-3-6',
    username: 'moshe',
    bet: 'bucks-6',
  },
  {
    betRound: 'round-one',
    betId: 'east-3-6',
    username: 'shalom',
    bet: 'bucks-6',
  },
  { betRound: 'round-one', betId: 'east-3-6', username: 'zan', bet: 'bucks-6' },

  {
    betRound: 'round-one',
    betId: 'east-4-5',
    username: 'moshe',
    bet: 'knicks-7',
  },
  {
    betRound: 'round-one',
    betId: 'east-4-5',
    username: 'shalom',
    bet: 'knicks-7',
  },
  {
    betRound: 'round-one',
    betId: 'east-4-5',
    username: 'zan',
    bet: 'knicks-6',
  },

  {
    betRound: 'round-one',
    betId: 'west-1-8',
    username: 'moshe',
    bet: 'jazz-5',
  },
  {
    betRound: 'round-one',
    betId: 'west-1-8',
    username: 'shalom',
    bet: 'jazz-5',
  },
  {
    betRound: 'round-one',
    betId: 'west-1-8',
    username: 'zan',
    bet: 'jazz-4',
  },

  {
    betRound: 'round-one',
    betId: 'west-2-7',
    username: 'moshe',
    bet: 'lakers-5',
  },
  {
    betRound: 'round-one',
    betId: 'west-2-7',
    username: 'shalom',
    bet: 'lakers-7',
  },
  {
    betRound: 'round-one',
    betId: 'west-2-7',
    username: 'zan',
    bet: 'lakers-7',
  },

  {
    betRound: 'round-one',
    betId: 'west-3-6',
    username: 'moshe',
    bet: 'blazers-6',
  },
  {
    betRound: 'round-one',
    betId: 'west-3-6',
    username: 'shalom',
    bet: 'blazers-7',
  },
  {
    betRound: 'round-one',
    betId: 'west-3-6',
    username: 'zan',
    bet: 'nuggets-7',
  },

  {
    betRound: 'round-one',
    betId: 'west-4-5',
    username: 'moshe',
    bet: 'clippers-6',
  },
  {
    betRound: 'round-one',
    betId: 'west-4-5',
    username: 'shalom',
    bet: 'clippers-6',
  },
  {
    betRound: 'round-one',
    betId: 'west-4-5',
    username: 'zan',
    bet: 'clippers-6',
  },

  {
    betRound: 'round-one',
    betId: 'east-1-8',
    username: 'actual',
    bet: 'philli-5',
  },
  {
    betRound: 'round-one',
    betId: 'east-2-7',
    username: 'actual',
    bet: 'nets-5',
  },
  {
    betRound: 'round-one',
    betId: 'east-3-6',
    username: 'actual',
    bet: 'bucks-4',
  },
  {
    betRound: 'round-one',
    betId: 'east-4-5',
    username: 'actual',
    bet: 'hawks-5',
  },
  {
    betRound: 'round-one',
    betId: 'west-1-8',
    username: 'actual',
    bet: 'jazz-5',
  },
  {
    betRound: 'round-one',
    betId: 'west-2-7',
    username: 'actual',
    bet: 'suns-6',
  },
  {
    betRound: 'round-one',
    betId: 'west-3-6',
    username: 'actual',
    bet: 'nuggets-6',
  },
  {
    betRound: 'round-one',
    betId: 'west-4-5',
    username: 'actual',
    bet: 'clippers-7',
  },
];

const game7Bets = [
  {
    betRound: 'game-7',
    betId: 'clippers-mavericks-7',
    username: 'moshe',
    bet: 'clippers-4',
  },
  {
    betRound: 'game-7',
    betId: 'clippers-mavericks-7',
    username: 'shalom',
    bet: 'mavericks-6',
  },
  {
    betRound: 'game-7',
    betId: 'clippers-mavericks-7',
    username: 'zan',
    bet: 'mavericks-7',
  },
  {
    betRound: 'game-7',
    betId: 'clippers-mavericks-7',
    username: 'actual',
    bet: 'clippers-15',
  },

  {
    betRound: 'game-7',
    betId: 'nets-bucks-7',
    username: 'moshe',
    bet: 'bucks-4',
  },
  {
    betRound: 'game-7',
    betId: 'nets-bucks-7',
    username: 'shalom',
    bet: 'nets-8',
  },
  {
    betRound: 'game-7',
    betId: 'nets-bucks-7',
    username: 'zan',
    bet: 'nets-16',
  },
  {
    betRound: 'game-7',
    betId: 'nets-bucks-7',
    username: 'actual',
    bet: 'bucks-4',
  },

  {
    betRound: 'game-7',
    betId: 'philli-hawks-7',
    username: 'moshe',
    bet: 'philli-9',
  },
  {
    betRound: 'game-7',
    betId: 'philli-hawks-7',
    username: 'shalom',
    bet: 'hawks-7',
  },
  {
    betRound: 'game-7',
    betId: 'philli-hawks-7',
    username: 'zan',
    bet: 'philli-5',
  },
  {
    betRound: 'game-7',
    betId: 'philli-hawks-7',
    username: 'actual',
    bet: 'hawks-7',
  },
];

const roundTwoBets = [
  {
    betRound: 'round-two',
    betId: 'east-1-4',
    username: 'moshe',
    bet: 'philli-5',
  },
  {
    betRound: 'round-two',
    betId: 'east-1-4',
    username: 'shalom',
    bet: 'philli-6',
  },
  {
    betRound: 'round-two',
    betId: 'east-1-4',
    username: 'zan',
    bet: 'philli-6',
  },

  {
    betRound: 'round-two',
    betId: 'east-2-3',
    username: 'moshe',
    bet: 'nets-6',
  },
  {
    betRound: 'round-two',
    betId: 'east-2-3',
    username: 'shalom',
    bet: 'nets-7',
  },
  {
    betRound: 'round-two',
    betId: 'east-2-3',
    username: 'zan',
    bet: 'nets-6',
  },

  {
    betRound: 'round-two',
    betId: 'west-1-4',
    username: 'moshe',
    bet: 'jazz-7',
  },
  {
    betRound: 'round-two',
    betId: 'west-1-4',
    username: 'shalom',
    bet: 'clippers-6',
  },
  {
    betRound: 'round-two',
    betId: 'west-1-4',
    username: 'zan',
    bet: 'jazz-7',
  },

  {
    betRound: 'round-two',
    betId: 'west-2-3',
    username: 'moshe',
    bet: 'suns-6',
  },
  {
    betRound: 'round-two',
    betId: 'west-2-3',
    username: 'shalom',
    bet: 'suns-6',
  },
  {
    betRound: 'round-two',
    betId: 'west-2-3',
    username: 'zan',
    bet: 'suns-6',
  },

  {
    betRound: 'round-two',
    betId: 'east-1-4',
    username: 'actual',
    bet: '',
  },
  {
    betRound: 'round-two',
    betId: 'east-2-3',
    username: 'actual',
    bet: '',
  },
  {
    betRound: 'round-two',
    betId: 'west-1-4',
    username: 'actual',
    bet: 'clippers-6',
  },
  {
    betRound: 'round-two',
    betId: 'west-2-3',
    username: 'actual',
    bet: 'suns-4',
  },
];

const confFinalsBets = [
    {
      betRound: 'conf-finals',
      betId: 'suns-clippers',
      username: 'moshe',
      bet: 'suns-5',
    },
    {
      betRound: 'conf-finals',
      betId: 'suns-clippers',
      username: 'shalom',
      bet: 'clippers-6',
    },
    {
      betRound: 'conf-finals',
      betId: 'suns-clippers',
      username: 'zan',
      bet: 'suns-6',
    },
    {
      betRound: 'conf-finals',
      betId: 'suns-clippers',
      username: 'actual',
      bet: 'suns-6',
    },

    {
      betRound: 'conf-finals',
      betId: 'bucks-hawks',
      username: 'moshe',
      bet: 'bucks-4',
    },
    {
      betRound: 'conf-finals',
      betId: 'bucks-hawks',
      username: 'shalom',
      bet: 'bucks-5',
    },
    {
      betRound: 'conf-finals',
      betId: 'bucks-hawks',
      username: 'zan',
      bet: 'bucks-6',
    },
    {
      betRound: 'conf-finals',
      betId: 'bucks-hawks',
      username: 'actual',
      bet: 'bucks-6',
    },
];

const finalsBets = [
  {
    betRound: 'the-finals',
    betId: 'finals-score',
    username: 'moshe',
    bet: 'bucks-7',
  },
  {
    betRound: 'the-finals',
    betId: 'finals-score',
    username: 'shalom',
    bet: 'suns-6',
  },
  {
    betRound: 'the-finals',
    betId: 'finals-score',
    username: 'zan',
    bet: 'suns-6',
  },
  {
    betRound: 'the-finals',
    betId: 'finals-score',
    username: 'actual',
    bet: '',
  },
  {
    betRound: 'the-finals',
    betId: 'finals-mvp',
    username: 'moshe',
    bet: 'middleton',
  },
  {
    betRound: 'the-finals',
    betId: 'finals-mvp',
    username: 'shalom',
    bet: 'booker',
  },
  {
    betRound: 'the-finals',
    betId: 'finals-mvp',
    username: 'zan',
    bet: 'paul',
  },
  {
    betRound: 'the-finals',
    betId: 'finals-mvp',
    username: 'actual',
    bet: '',
  },

  {
    betRound: 'the-finals',
    betId: 'game-1',
    username: 'moshe',
    bet: 'bucks-4',
  },
  {
    betRound: 'the-finals',
    betId: 'game-1',
    username: 'shalom',
    bet: 'suns-7',
  },
  {
    betRound: 'the-finals',
    betId: 'game-1',
    username: 'zan',
    bet: 'suns-8',
  },
  {
    betRound: 'the-finals',
    betId: 'game-1',
    username: 'actual',
    bet: 'suns-13',
  },

  {
    betRound: 'the-finals',
    betId: 'game-2',
    username: 'moshe',
    bet: 'bucks-5',
  },
  {
    betRound: 'the-finals',
    betId: 'game-2',
    username: 'shalom',
    bet: 'suns-7',
  },
  {
    betRound: 'the-finals',
    betId: 'game-2',
    username: 'zan',
    bet: 'suns-5',
  },
  {
    betRound: 'the-finals',
    betId: 'game-2',
    username: 'actual',
    bet: 'suns-10',
  },

  {
    betRound: 'the-finals',
    betId: 'game-3',
    username: 'moshe',
    bet: 'bucks-5',
  },
  {
    betRound: 'the-finals',
    betId: 'game-3',
    username: 'shalom',
    bet: 'bucks-10',
  },
  {
    betRound: 'the-finals',
    betId: 'game-3',
    username: 'zan',
    bet: 'bucks-10',
  },
  {
    betRound: 'the-finals',
    betId: 'game-3',
    username: 'actual',
    bet: 'bucks-20',
  },

  {
    betRound: 'the-finals',
    betId: 'game-4',
    username: 'moshe',
    bet: 'bucks-7',
  },
  {
    betRound: 'the-finals',
    betId: 'game-4',
    username: 'shalom',
    bet: 'bucks-8',
  },
  {
    betRound: 'the-finals',
    betId: 'game-4',
    username: 'zan',
    bet: 'bucks-12',
  },
  {
    betRound: 'the-finals',
    betId: 'game-4',
    username: 'actual',
    bet: 'bucks-6',
  },

  {
    betRound: 'the-finals',
    betId: 'game-5',
    username: 'moshe',
    bet: 'bucks-5',
  },
  {
    betRound: 'the-finals',
    betId: 'game-5',
    username: 'shalom',
    bet: 'suns-9',
  },
  {
    betRound: 'the-finals',
    betId: 'game-5',
    username: 'zan',
    bet: 'suns-8',
  },
  {
    betRound: 'the-finals',
    betId: 'game-5',
    username: 'actual',
    bet: 'bucks-4',
  },

  // {
  //   betRound: 'the-finals',
  //   betId: 'game-6',
  //   username: 'moshe',
  //   bet: '',
  // },
  // {
  //   betRound: 'the-finals',
  //   betId: 'game-6',
  //   username: 'shalom',
  //   bet: '',
  // },
  // {
  //   betRound: 'the-finals',
  //   betId: 'game-6',
  //   username: 'zan',
  //   bet: '',
  // },
  // {
  //   betRound: 'the-finals',
  //   betId: 'game-6',
  //   username: 'actual',
  //   bet: '',
  // },

  // {
  //   betRound: 'the-finals',
  //   betId: 'game-7',
  //   username: 'moshe',
  //   bet: '',
  // },
  // {
  //   betRound: 'the-finals',
  //   betId: 'game-7',
  //   username: 'shalom',
  //   bet: '',
  // },
  // {
  //   betRound: 'the-finals',
  //   betId: 'game-7',
  //   username: 'zan',
  //   bet: '',
  // },
  // {
  //   betRound: 'the-finals',
  //   betId: 'game-7',
  //   username: 'actual',
  //   bet: '',
  // },
];

export const allBets = [
  ...finalsBets,
  ...confFinalsBets,
  ...roundTwoBets,
  ...roundOneBets,
  ...playInBets,
  ...game7Bets,
  ...extrasBets,
];
