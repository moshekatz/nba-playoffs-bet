import Container from '@/components/container';

export async function getStaticProps() {
  return { props: { hi: 'hello' } };
}

export default function Home({ hi }) {
  return (
    <Container>
      <div className="flex flex-col max-w-2xl mx-auto space-y-6">
        <h1 className="text-xl font-semibold tracking-wide text-gray-900">
          NBA Playoffs Bet
        </h1>
        <h2 className="text-lg font-semibold tracking-wide text-gray-700">
          Total
        </h2>
        <ol>
          <li>1. Shalom - 6</li>
          <li>2. Moshe - 4</li>
          <li>3. Zan - 3</li>
        </ol>
        <h2 className="text-lg font-semibold tracking-wide text-gray-700">
          Play In
        </h2>
        <ol>
          <li>1. Shalom - 6</li>
          <li>2. Moshe - 4</li>
          <li>3. Zan - 3</li>
        </ol>
      </div>
    </Container>
  );
}
