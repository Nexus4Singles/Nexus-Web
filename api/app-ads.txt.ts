import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('google.com, pub-6962612390435323, DIRECT, f08c47fec0942fa0');
}
