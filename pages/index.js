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
        <ol>
          <li>Shalom - 6</li>
          <li>Moshe - 4</li>
          <li>Zan - 3</li>
        </ol>
      </div>
    </Container>
  );
}
