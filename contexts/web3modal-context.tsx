import { FC, useEffect, createContext, ReactNode, useState } from 'react';
import Web3Modal, { CHAIN_DATA_LIST } from 'web3modal';
import { DEFAULT_CHAIN_ID, web3ProviderOptions } from '../config';
import { ethers } from 'ethers';
import PropTypes from 'prop-types';
import { MyWallet } from '../types/my-wallet';
import { DEFAULT_CHAINS } from '../blockchains';

export interface Web3ContextValue {
    wallet: MyWallet | undefined;
    provider: ethers.providers.Web3Provider | undefined;
    connect: () => Promise<ethers.providers.Web3Provider | undefined>;
    connectTo: (chainId: number) => Promise<ethers.providers.Web3Provider | undefined>;
    disconnect: () => void;
}

interface Web3ProviderProps {
    children?: ReactNode;
}

export const Web3Context = createContext<Web3ContextValue>({
    wallet: undefined,
    provider: undefined,
    connect: () => Promise.resolve(undefined),
    connectTo: (chainId: number) => Promise.resolve(undefined),
    disconnect: () => { }
});

export const Web3Provider: FC<Web3ProviderProps> = (props) => {

    const { children } = props;
    const [modal, setModal] = useState<Web3Modal | undefined>(undefined);
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | undefined>(undefined);
    const [wallet, setWallet] = useState<MyWallet | undefined>(undefined);

    /**
     * Connect to the provider and listen to change events
     * @param modal web3modal instance
     * @returns 
     */
    const onConnect = async (modal: Web3Modal): Promise<ethers.providers.Web3Provider | undefined> => {
        const instance = await modal?.connect();
        if (!instance) {
            return undefined;
        }

        instance.on('accountsChanged', (accounts: string[]) => {
            const prov = new ethers.providers.Web3Provider(instance);
            if (wallet?.address !== accounts[0]) {
                getWeb3Account(prov);
            }
        });

        instance.on('chainChanged', (chainId: number) => {
            const prov = new ethers.providers.Web3Provider(instance);
            getWeb3Account(prov);
        });

        const prov = new ethers.providers.Web3Provider(instance);
        setProvider(prov);
        getWeb3Account(prov);

        return prov;
    };

    /**
    * Getting user wallet from the active provider
    * 
    * @param provider ethers.providers.Web3Provider
    * @returns MyWallet
    */
    const getWeb3Account = async (provider: ethers.providers.Web3Provider): Promise<MyWallet> => {
        if (!provider) {
            throw new Error('provider is not defined');
        }
        const myWallet: MyWallet = {};
        try {
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            myWallet.address = address;
            const ensName = await provider.lookupAddress(address);
            if (ensName) {
                myWallet.ensName = ensName;
                const resolver = await provider.getResolver(ensName);
                const avatarMetaData = await resolver?.getText("avatar");
                myWallet.avatar = avatarMetaData;
            }
        } catch (e: any) {
            console.error(e);
        }
        setWallet(myWallet);
        return myWallet;
    };

    /**
     * Disconnect from the provider
     */
    const onDisconnect = async () => {
        if (modal) {
            modal?.clearCachedProvider();
            setWallet(undefined);
        }
    };

    // when modal is available
    useEffect(() => {
        if (modal?.cachedProvider) {
            onConnect(modal);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modal]);

    // on page load init web3modal
    useEffect(() => {
        const web3Modal = new Web3Modal({
            network: CHAIN_DATA_LIST[DEFAULT_CHAIN_ID].network,
            cacheProvider: false,
            providerOptions: web3ProviderOptions,
        });
        setModal(web3Modal);
    }, []);

    /**
     * Calling connect on the Web3Modal instance will open the modal and return a provider
     * @returns ethers.providers.Web3Provider (or undefined if not connected)
     */
    const connect = async (): Promise<ethers.providers.Web3Provider | undefined> => {
        if (modal) {
            const provider = await onConnect(modal);
            return provider;
        }
        return undefined;
    }

    /**
     * Connect to a specific chain (asking wallet to switch/add network before connecting)
     * @param chainId chainId to connect to
     * @returns 
     */
    const connectTo = async (chainId: number): Promise<ethers.providers.Web3Provider | undefined> => {
        if (!window.ethereum) {
            throw Error('No web3 provider found');
        }
        if (!DEFAULT_CHAINS.hasOwnProperty(chainId)) {
            throw Error('Provided ChainId not supported. Supported chains are: ', DEFAULT_CHAINS);
        }
        const walletNetwork = window.ethereum.networkVersion;
        console.log('current and default wallet network: ', walletNetwork);
        if (walletNetwork !== chainId.toString()) {
            return window.ethereum!.request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        ...DEFAULT_CHAINS[chainId.toString()],
                    }
                ]
            }).then(() => {
                return connect();
            }).catch((e: any) => {
                console.error(e);
                return undefined;
            });
        } else {
            return connect();
        }
    };

    /**
     * Disconnect wallet
     */
    const disconnect = () => {
        onDisconnect();
    }

    return (
        <Web3Context.Provider
            value={{
                wallet,
                provider,
                connect,
                connectTo,
                disconnect,
            }}
        >
            {children}
        </ Web3Context.Provider>
    );
};

Web3Provider.propTypes = {
    children: PropTypes.node.isRequired
};

export const Web3Consumer = Web3Context.Consumer;