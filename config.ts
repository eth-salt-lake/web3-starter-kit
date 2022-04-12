import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import WalletConnectProvider from '@walletconnect/web3-provider';

export const ETHERSCAN_URL = 'https://etherscan.io/';
export const NETWORK_COIN_SYMBOL = 'ETH';
export const DEFAULT_CHAIN_ID = 1; // check the docs for more info
export const APP_NAME = "dApp Started Kit"
export const DEFAULT_APP_THEME: 'light' | 'dark' = 'light'; // light, dark

// list of providers for web3 modal
export const web3ProviderOptions = {
    walletconnect: {
        display: {
            name: "Mobile"
        },
        package: WalletConnectProvider,
        options: {
            infuraId: "INFURA_ID" // required
        }
    },
    walletlink: {
        package: CoinbaseWalletSDK,
        options: {
            appName: APP_NAME,
            infuraId: "INFURA_ID" // required
        },
    },
};