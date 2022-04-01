import type { AddEthereumChainParameter } from '@web3-react/types';

const ETH: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
}

const MATIC: AddEthereumChainParameter['nativeCurrency'] = {
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
}

export interface BasicChainInformation {
    urls: string[]
    name: string
}

export interface ExtendedChainInformation extends BasicChainInformation {
    nativeCurrency: AddEthereumChainParameter['nativeCurrency']
    blockExplorerUrls: AddEthereumChainParameter['blockExplorerUrls']
}


const isExtendedChainInformation = (chainInformation: BasicChainInformation | ExtendedChainInformation): chainInformation is ExtendedChainInformation => {
    return !!(chainInformation as ExtendedChainInformation).nativeCurrency
};


export const getAddChainParameters = (chainId: number): AddEthereumChainParameter | number => {
    const chainInformation = CHAINS[chainId]
    if (isExtendedChainInformation(chainInformation)) {
        return {
            chainId,
            chainName: chainInformation.name,
            nativeCurrency: chainInformation.nativeCurrency,
            rpcUrls: chainInformation.urls,
            blockExplorerUrls: chainInformation.blockExplorerUrls,
        };
    } else {
        return chainId;
    }
};

export const CHAINS: { [chainId: number]: BasicChainInformation | ExtendedChainInformation } = {
    1: {
        urls: [
            process.env.INFURA_KEY ? `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}` : "",
            process.env.ALCHEMY_KEY ? `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}` : "",
            'https://cloudflare-eth.com',
        ].filter((url) => url !== ""),
        name: 'Mainnet',
    },
    3: {
        urls: [process.env.INFURA_KEY ? `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}` : ""].filter(
            (url) => url !== ""
        ),
        name: 'Ropsten',
    },
    4: {
        urls: [process.env.INFURA_KEY ? `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}` : ""].filter(
            (url) => url !== ""
        ),
        name: 'Rinkeby',
    },
    5: {
        urls: [process.env.INFURA_KEY ? `https://goerli.infura.io/v3/${process.env.INFURA_KEY}` : ""].filter(
            (url) => url !== ""
        ),
        name: 'Görli',
    },
    42: {
        urls: [process.env.INFURA_KEY ? `https://kovan.infura.io/v3/${process.env.INFURA_KEY}` : ""].filter(
            (url) => url !== ""
        ),
        name: 'Kovan',
    },
    // Polygon
    137: {
        urls: [
            process.env.INFURA_KEY ? `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_KEY}` : "",
            'https://polygon-rpc.com',
        ].filter((url) => url !== ""),
        name: 'Polygon Mainnet',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://polygonscan.com'],
    },
    80001: {
        urls: [process.env.INFURA_KEY ? `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_KEY}` : ""].filter(
            (url) => url !== undefined
        ),
        name: 'Polygon Mumbai',
        nativeCurrency: MATIC,
        blockExplorerUrls: ['https://mumbai.polygonscan.com'],
    },
}

export const URLS: { [chainId: number]: string[] } = Object.keys(CHAINS).reduce<{ [chainId: number]: string[] }>(
    (accumulator, chainId) => {
        const validURLs: string[] = CHAINS[Number(chainId)].urls

        if (validURLs.length) {
            accumulator[Number(chainId)] = validURLs
        }

        return accumulator
    },
    {}
)
