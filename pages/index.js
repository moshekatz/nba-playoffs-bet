import Container from '@/components/container';
import {
  getAllBets,
  getNormalizedBetsByRound,
  getNormalizedBetsByUser,
} from '../api/betsApi';

import {
  calculatePtsByUsername,
  calculatePtsForRound,
} from '../api/ptsCalculator';

export async function getStaticProps() {
  const allBets = getAllBets();

  const betsByRound = getNormalizedBetsByRound(allBets);
  const ptsByRound = calculatePtsForRound(betsByRound);

  const betsByUser = getNormalizedBetsByUser(allBets);
  const ptsByUser = calculatePtsByUsername(betsByUser);

  return { props: { ptsByRound, ptsByUser } };
}

export default function Home({ ptsByRound, ptsByUser }) {
  const sortedPtsByRound = {};
  Object.entries(ptsByRound).forEach(([round, roundPts]) => {
    if (round !== 'total') {
      sortedPtsByRound[round] = Object.entries(roundPts)
        .sort((a, b) => b[1]['total'] - a[1]['total'])
        .map(([username, pts]) => {
          return [username, pts];
        });
    } else {
      sortedPtsByRound[round] = Object.entries(roundPts)
        .sort((a, b) => b[1] - a[1])
        .map(([username, pts]) => {
          return [username, pts];
        });
    }
  });

  return (
    <Container>
      <div className="flex flex-col max-w-2xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold tracking-wide text-gray-900">
          NBA Playoffs Bet
        </h1>

        {Object.entries(sortedPtsByRound).map(([round, sortedRoundPts]) => {
          return (
            <div key={round} className="space-y-1">
              <h2 className="text-lg font-semibold tracking-wide text-gray-700 capitalize">
                {round}
              </h2>
              <ol>
                {sortedRoundPts.map((roundPts, i) => {
                  const [username, userPts] = roundPts;
                  const title = `${username} - ${
                    userPts['total'] >= 0 ? userPts['total'] : userPts
                  }`;
                  return (
                    <li key={username}>
                      <details>
                        <summary className="capitalize font-semibold">
                          {i + 1}. {title}
                        </summary>

                        <p className="mt-2 mb-2">
                          {/* {JSON.stringify(roundPts[1])} */}
                          Ahalan
                        </p>
                      </details>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
