import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'yzmnvt3b',
  dataset: 'production',
  apiVersion: '2023-05-29',
  useCdn: false,
});

export default client;
