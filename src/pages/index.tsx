export default function Home(props) {
  return <h1>Home</h1>
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  const eightHoursInSeconds = 60 * 60 * 8;

  return {
    props: {
      episodes: data,
    },
    revalidate: eightHoursInSeconds,
  }
}