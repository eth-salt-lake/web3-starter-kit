import type { Connector } from '@web3-react/types';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import { Network } from '@web3-react/network';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { useWeb3React, Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import { hooks as metaMaskHooks, metaMask } from '../connectors/metamask';
import { hooks as walletConnectHooks, walletConnect } from '../connectors/wallet-connect';
import { coinbaseWallet, hooks as coinbaseWalletHooks } from '../connectors/coinbase';
import { hooks as networkHooks, network } from '../connectors/network';
import { FC } from 'react';

const connectors: [MetaMask | WalletConnect | CoinbaseWallet | Network, Web3ReactHooks][] = [
    [metaMask, metaMaskHooks],
    [walletConnect, walletConnectHooks],
    [coinbaseWallet, coinbaseWalletHooks],
    [network, networkHooks],
];

function Child() {
    useWeb3React();
    return null;
}

const Web3Provider: FC = () => {
    return (
        <Web3ReactProvider connectors={connectors}>
            <Child />
        </Web3ReactProvider>
    );
};

export default Web3Provider; 
