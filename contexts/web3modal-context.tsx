import { FC, useEffect, createContext, ReactNode, useState } from 'react';
import Web3Modal, { CHAIN_DATA_LIST } from 'web3modal';
import { DEFAULT_CHAIN_ID, web3ProviderOptions } from '../config';
import { ethers } from 'ethers';
import PropTypes from 'prop-types';
import { MyWallet } from '../types/my-wallet';

export interface Web3ContextValue {
    wallet: MyWallet | undefined;
    provider: ethers.providers.Web3Provider | undefined;
    connect: () => Promise<ethers.providers.Web3Provider | undefined>;
    disconnect: () => void;
}

interface Web3ProviderProps {
    children?: ReactNode;
}

export const Web3Context = createContext<Web3ContextValue | null>(null);

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