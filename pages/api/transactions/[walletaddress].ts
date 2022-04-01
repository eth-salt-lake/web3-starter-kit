// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  status: string,
  message?: string,
  result?: any[],
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { walletaddress } = req.query;
  const latestTxs = await axios.get(`${process.env.ETHERSCAN_API_ENDPOINT}`, {
    params: {
      module: 'account',
      action: 'txlist',
      address: walletaddress,
      endblock: '99999999',
      startblock: '0',
      offset: '50',
      page: '1',
      sort: 'desc',
      apiKey: `${process.env.ETHERSCAN_API_KEY}`,
    },
  });
  const tx: Data = latestTxs.data;
  res.status(200).json(tx);
}
