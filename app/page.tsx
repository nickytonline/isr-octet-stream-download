import "../styles/globals.css";

async function getData() {
  const res = await fetch("https://catfact.ninja/fact", {
    next: { revalidate: 60 },
  });

  return res.json();
}

export default async function Page() {
  const { fact } = await getData();
  return (
    <>
      <h1>Random Cat Fact</h1>
      <p>{fact}</p>
    </>
  );
}
