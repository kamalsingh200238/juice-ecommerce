import Temp from "@/components/temp";
import client from "@/sanity/client";

async function getData() {
  const data = client.fetch(`*[_type == 'product']`);
  return data;
}

export default async function Home() {
  const data = await getData();
  const dataString = JSON.stringify(data, undefined, 2);
  console.log({ data });
  return (
    <main>
      {/* <pre>{dataString}</pre> */}
      <Temp products={data} />
    </main>
  );
}
