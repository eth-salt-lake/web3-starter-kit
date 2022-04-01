# dApp Starter Kit

dApp Starter Kit is flexible production grade **Web3** boilerplate with [Next.js 12](https://nextjs.org/blog/next-12), [React.js](https://reactjs.org/), [Material-UI](https://mui.com/), [Typescript](https://www.typescriptlang.org/) and [web3-react (beta)](https://github.com/NoahZinsmeister/web3-react). 

Includes wallet connection for most popular javascript [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) providers:
- [MetaMask](https://metamask.io/)
- [Coinbase Wallet](https://www.coinbase.com/wallet)
- [Wallet Connect](https://walletconnect.com/)
- Retrieval of users **latest transactions** from etherscan

dApp Starter Kit is meant:
- to be used as **boilerplate** to quickly deploy new project
- to be used as **educational** resource
- to be **flexible** accomodating **easy customization**  


# Quick start

## Running locally in development mode

1. `git clone https://github.com/eth-salt-lake/dao-app.git` clones the dApp repository   
2. `cd dao-app && git checkout main` checks out the desired branch
3. `cp env.local.example .env.local` prepares environment variables for development
4. `npm install` installs dependencies
5. `npm run dev` runs development server

That's it. The project should run on your local computer `http://localhost:3000`


# Features

- based om latest [Next.js](https://nextjs.org/)
- styling customization with [material design]((https://mui.com/))
- Wallet connections and current connected wallet caching with [web3-react (beta)](https://github.com/NoahZinsmeister/web3-react)
- state management with [redux-toolkit](https://github.com/reduxjs/redux-toolkit)
- [dotenv](https://github.com/motdotla/dotenv), and more...


# Guides

Simple instructions on how to customize your dApp project. 

## API Configuration

In development create in the root folder file `.env.local`, for production `.env.production`: 

```
.env.local
.env.production
```

Contents:
```
APP_NAME=My dApp
ETHERSCAN_API_KEY=mykey
ETHERSCAN_API_ENDPOINT=https://api-testnet.polygonscan.com/api
INFURA_KEY=infura
```

`APP_NAME`

Custom app name

`ETHERSCAN_API_KEY`

To request information directly from `etherscan` (or etherscan like service) you need an API key. For example for [etherscan.io](https://etherscan.io) go to: `https://etherscan.io/myapikey` and create one.  


`ETHERSCAN_API_ENDPOINT`

Check the documentation for an endpoint [here](https://docs.etherscan.io/getting-started/endpoint-urls). Or if you'd like to connect to L2 chain like [Polygon](https://polygon.technology/) then check the endpoints [here](https://docs.polygonscan.com/getting-started/endpoint-urls).  


`INFURA_KEY`

[Infura](https://infura.io) is a popular gateway to the ethereum (or ethereum like) nodes json-rpc. To get a key you need to create an account, login and create new project for which tyou can generate new keys. This enables your project to send and receive transactions from selected chain. 

## dApp Configuration

```
root
|_config.ts
 ```

Contents: 
```
export const ETHERSCAN_URL = 'https://etherscan.io/';
export const NETWORK_COIN_SYMBOL = 'ETH';
export const DEFAULT_NETWORK_ID = 1; // check folder web/chain.ts for more network IDs
export const APP_NAME = "dApp Started Kit"
export const DEFAULT_APP_THEME = 'light'; // light, dark
 ```

`ETHERSCAN_URL`

Base URl from the transactions table to etherscan for more details. 

`NETWORK_COIN_SYMBOL`

Display value for selected chains currency

`APP_NAME`

Custom app name. 

`DEFAULT_APP_THEME`

`light` or `dark`.

`DEFAULT_NETWORK_ID`

The selected network dApp will communicate with.

Helper chain table:
| Chain ID | Network |
|----------|---------|
| 1        | Mainnet |
| 3        | Ropsten |
| 4        | Rinkeby |
| 5        | Goerli |
| 10       | Optimism |
| 42       | Kovan |
| 56       | BSC |
| 137      | Polygon |
| 42161    | Arbitrum One |
| 43114    | Avalanche |
| 80001    | Polygoin Mumbai |


## i18n

International

## API Endpoints

Endpoint for getting users latest transactions. 
```
|-- pages/api/transactions/[walletaddress].ts
```

## Styling with Material Design

TDB (Where to modify it)

## 
---

# Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm run start`:

```
npm install
npm run build
npm run start
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
