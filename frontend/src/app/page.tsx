import Temp from '@/components/temp';
import client from '@/lib/sanity-client';

async function getData() {
  const data = client.fetch(`*[_type == 'product']`);
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
      <Temp products={data} />
    </main>
  );
}
