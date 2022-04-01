import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { Connector } from "@web3-react/types";
import { WalletConnect } from "@web3-react/walletconnect";
import { getAddChainParameters } from "./chains";

export const connectWallet = (connector: MetaMask | WalletConnect | CoinbaseWallet, chainId: number): Connector | undefined => {
    return connector instanceof WalletConnect || connector instanceof Network
        ? void connector.activate(chainId === -1 ? undefined : chainId)
        : void connector.activate(chainId === -1 ? undefined : getAddChainParameters(chainId));
};

export const disconnectWallet = (connector: MetaMask | WalletConnect | CoinbaseWallet): void => {
    connector.deactivate();
};