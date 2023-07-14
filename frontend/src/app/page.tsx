import client from "@/sanity/client";

async function getData() {
  const data = client.fetch(`*[_type == 'product']`);
  return data;
}

export default async function Home() {
  const data = await getData();
  const dataString = JSON.stringify(data, undefined, 2);
  console.log({data})
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{dataString}</pre>
    </main>
  );
}
