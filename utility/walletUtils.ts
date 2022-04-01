import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { Connector } from "@web3-react/types";
import { WalletConnect } from "@web3-react/walletconnect";
import { coinbaseWallet } from "../components/web3/connectors/coinbase";
import { metaMask } from "../components/web3/connectors/metamask";
import { walletConnect } from "../components/web3/connectors/wallet-connect";
import { MyWallet } from "../store/wallet-store";
import { hooks as metamaskHooks } from "../components/web3/connectors/metamask";
import { hooks as coinbaseHooks } from "../components/web3/connectors/coinbase";
import { hooks as walletConnectHooks } from "../components/web3/connectors/wallet-connect";

export const appName: string | undefined = process.env.APP_NAME;

/**
 * converting an active wallets name to appropriate connector to disconnect from
 * @param connector 
 * @returns 
 */
export const getWeb3ConnectorName = (connector: Connector): string => {
    if (connector instanceof MetaMask) return 'MetaMask';
    if (connector instanceof WalletConnect) return 'WalletConnect';
    if (connector instanceof CoinbaseWallet) return 'Coinbase';
    if (connector instanceof Network) return 'Network';
    return 'Unknown';
};

/**
 * based on current connector return logo
 * @param connector 
 * @returns 
 */
export const getWeb3ConnectorLogo = (connector: Connector): string => {
    if (connector instanceof MetaMask) return '/images/meta-mask-fox.svg';
    if (connector instanceof WalletConnect) return '/images/wallet-connect-logo.svg';
    if (connector instanceof CoinbaseWallet) return '/images/coinbase-wallet-logo.svg';
    if (connector instanceof Network) return '';
    return '';
}

/**
 * converting an active wallets name to appropriate connector to disconnect from
 * @param walletName 
 * @returns 
 */
export const walletNameToConnector = (walletName: string) => {
    switch (walletName) {
        case getWeb3ConnectorName(metaMask):
            return metaMask;
        case getWeb3ConnectorName(coinbaseWallet):
            return coinbaseWallet;
        case getWeb3ConnectorName(walletConnect):
            return walletConnect;
        default:
            return null;
    }
};

/**
 * Return the right hooks for the wallet
 * @param walletName 
 * @returns 
 */
export const walletNameToHooks = (walletName: string): Web3ReactHooks | null => {
    switch (walletName) {
        case 'MetaMask':
            return metamaskHooks;
        case 'Coinbase':
            return coinbaseHooks;
        case 'WalletConnect':
            return walletConnectHooks;
        default:
            return null;
    }
};


/**
 * augments a wallet with avatar and ens name if they exist
 * 
 * @param myWallet 
 * @param provider 
 * @returns 
 */
export const augmentWalletWithAvatar = async (myWallet: MyWallet, provider?: ReturnType<Web3ReactHooks['useProvider']>): Promise<MyWallet> => {
    return new Promise<MyWallet>((resolve, reject) => {
        let name = '';
        if (myWallet.ensNames && myWallet.ensNames?.length > 0) {
            if (myWallet.ensNames[0] !== null) {
                name = myWallet.ensNames[0];
                myWallet.name = name;
            }
        }
        if (provider) {
            provider.getAvatar(myWallet.address).then((avatar: any) => {
                if (avatar) {
                    myWallet.avatar = avatar;
                }
                resolve(myWallet);
            }).catch((err: any) => {
                console.log('err: ', err);
                reject(err);
            });
        } else {
            resolve(myWallet);
        }
    });
};

/**
 * Shortening of the address to 6 places from both sides for display purposes
 * @param address 
 * @param length 
 * @returns 
 */
export const shortenWalletAddress = (address: string, length: number = 6) => {
    return address.slice(0, length) + '...' + address.slice(address.length - length);
};

/**
 * Shortening of the address to 6 places at the start for display purposes
 * @param hash 
 * @param length 
 * @returns 
 */
export const shortenHash = (hash: string, length: number = 6) => {
    if (hash && hash.length > length) {
        return hash.slice(0, length) + '...';
    }
    return hash;
};