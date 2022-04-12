export const DEFAULT_CHAINS: { [key: string]: any } = {
    "1": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Ethereum Mainnet",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": [
            "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
            "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
            "https://api.mycryptoapi.com/eth",
            "https://cloudflare-eth.com"
        ]
    },
    "2": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Expanse Network",
        "nativeCurrency": {
            "name": "Expanse Network Ether",
            "symbol": "EXP",
            "decimals": 18
        },
        "rpcUrls": [
            "https://node.expanse.tech"
        ]
    },
    "3": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Ropsten",
        "nativeCurrency": {
            "name": "Ropsten Ether",
            "symbol": "ROP",
            "decimals": 18
        },
        "rpcUrls": [
            "https://ropsten.infura.io/v3/${INFURA_API_KEY}",
            "wss://ropsten.infura.io/ws/v3/${INFURA_API_KEY}"
        ]
    },
    "4": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Rinkeby",
        "nativeCurrency": {
            "name": "Rinkeby Ether",
            "symbol": "RIN",
            "decimals": 18
        },
        "rpcUrls": [
            "https://rinkeby.infura.io/v3/${INFURA_API_KEY}",
            "wss://rinkeby.infura.io/ws/v3/${INFURA_API_KEY}"
        ]
    },
    "5": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "G\u00f6rli",
        "nativeCurrency": {
            "name": "G\u00f6rli Ether",
            "symbol": "GOR",
            "decimals": 18
        },
        "rpcUrls": [
            "https://goerli.infura.io/v3/${INFURA_API_KEY}",
            "wss://goerli.infura.io/v3/${INFURA_API_KEY}",
            "https://rpc.goerli.mudit.blog/"
        ]
    },
    "6": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Ethereum Classic Testnet Kotti",
        "nativeCurrency": {
            "name": "Kotti Ether",
            "symbol": "KOT",
            "decimals": 18
        },
        "rpcUrls": [
            "https://www.ethercluster.com/kotti"
        ]
    },
    "7": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "ThaiChain",
        "nativeCurrency": {
            "name": "ThaiChain Ether",
            "symbol": "TCH",
            "decimals": 18
        },
        "rpcUrls": [
            "https://rpc.dome.cloud"
        ]
    },
    "8": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Ubiq",
        "nativeCurrency": {
            "name": "Ubiq Ether",
            "symbol": "UBQ",
            "decimals": 18
        },
        "rpcUrls": [
            "https://rpc.octano.dev",
            "https://pyrus2.ubiqscan.io"
        ]
    },
    "9": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Ubiq Network Testnet",
        "nativeCurrency": {
            "name": "Ubiq Testnet Ether",
            "symbol": "TUBQ",
            "decimals": 18
        },
        "rpcUrls": []
    },
    "10": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Optimism",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": [
            "https://mainnet.optimism.io/"
        ]
    },
    "28": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Boba Network Rinkeby Testnet",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": [
            "https://rinkeby.boba.network/"
        ]
    },
    "42": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Kovan",
        "nativeCurrency": {
            "name": "Kovan Ether",
            "symbol": "KOV",
            "decimals": 18
        },
        "rpcUrls": [
            "https://kovan.poa.network",
            "http://kovan.poa.network:8545",
            "https://kovan.infura.io/v3/${INFURA_API_KEY}",
            "wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}",
            "ws://kovan.poa.network:8546"
        ]
    },
    "56": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Binance Smart Chain Mainnet",
        "nativeCurrency": {
            "name": "Binance Chain Native Token",
            "symbol": "BNB",
            "decimals": 18
        },
        "rpcUrls": [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org"
        ]
    },
    "61": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Ethereum Classic Mainnet",
        "nativeCurrency": {
            "name": "Ethereum Classic Ether",
            "symbol": "ETC",
            "decimals": 18
        },
        "rpcUrls": [
            "https://www.ethercluster.com/etc"
        ]
    },
    "62": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Ethereum Classic Testnet Morden",
        "nativeCurrency": {
            "name": "Ethereum Classic Testnet Ether",
            "symbol": "TETC",
            "decimals": 18
        },
        "rpcUrls": []
    },
    "63": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Ethereum Classic Testnet Mordor",
        "nativeCurrency": {
            "name": "Mordor Classic Testnet Ether",
            "symbol": "METC",
            "decimals": 18
        },
        "rpcUrls": [
            "https://www.ethercluster.com/mordor"
        ]
    },
    "69": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Optimism Kovan",
        "nativeCurrency": {
            "name": "Kovan Ether",
            "symbol": "KOR",
            "decimals": 18
        },
        "rpcUrls": [
            "https://kovan.optimism.io/"
        ]
    },
    "97": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Binance Smart Chain Testnet",
        "nativeCurrency": {
            "name": "Binance Chain Native Token",
            "symbol": "tBNB",
            "decimals": 18
        },
        "rpcUrls": [
            "https://data-seed-prebsc-1-s1.binance.org:8545",
            "https://data-seed-prebsc-2-s1.binance.org:8545",
            "https://data-seed-prebsc-1-s2.binance.org:8545",
            "https://data-seed-prebsc-2-s2.binance.org:8545",
            "https://data-seed-prebsc-1-s3.binance.org:8545",
            "https://data-seed-prebsc-2-s3.binance.org:8545"
        ]
    },
    "100": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Gnosis Chain (formerly xDai)",
        "nativeCurrency": {
            "name": "xDAI",
            "symbol": "xDAI",
            "decimals": 18
        },
        "rpcUrls": [
            "https://rpc.gnosischain.com",
            "https://xdai.poanetwork.dev",
            "wss://rpc.gnosischain.com/wss",
            "wss://xdai.poanetwork.dev/wss",
            "http://xdai.poanetwork.dev",
            "https://dai.poa.network",
            "ws://xdai.poanetwork.dev:8546"
        ]
    },
    "101": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "EtherInc",
        "nativeCurrency": {
            "name": "EtherInc Ether",
            "symbol": "ETI",
            "decimals": 18
        },
        "rpcUrls": [
            "https://api.einc.io/jsonrpc/mainnet"
        ]
    },
    "137": {
        "rpcUrls": [
            "https://polygon-rpc.com/",
            "https://rpc-mainnet.matic.network",
            "https://matic-mainnet.chainstacklabs.com",
            "https://rpc-mainnet.maticvigil.com",
            "https://rpc-mainnet.matic.quiknode.pro",
            "https://matic-mainnet-full-rpc.bwarelabs.com"
        ],
        "nativeCurrency": {
            "name": "MATIC",
            "symbol": "MATIC",
            "decimals": 18
        },
        "chainId": `0x${Number(137).toString(16)}`,
        "chainName": "Polygon Mainnet",
    },
    "42161": {
        "chainId": `0x${Number(1).toString(16)}`,
        "chainName": "Arbitrum One",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": [
            "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
            "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
            "https://arb1.arbitrum.io/rpc",
            "wss://arb1.arbitrum.io/ws"
        ]
    },
    "80001": {
        "rpcUrls": [
            "https://matic-mumbai.chainstacklabs.com",
            "https://rpc-mumbai.maticvigil.com",
            "https://matic-testnet-archive-rpc.bwarelabs.com"
        ],
        "nativeCurrency": {
            "name": "MATIC",
            "symbol": "MATIC",
            "decimals": 18
        },
        "chainId": `0x${Number(80001).toString(16)}`,
        "chainName": "Mumbai Testnet"
    },
};
