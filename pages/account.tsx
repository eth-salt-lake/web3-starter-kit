import { Network } from "@ethersproject/networks";
import { BaseProvider, Web3Provider } from "@ethersproject/providers";
import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import { Web3ReactHooks } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AccountTransactions } from "../components/account/account-transactions";
import { MainLayout } from "../components/main-layout";
import { BasicChainInformation, CHAINS, ExtendedChainInformation } from "../components/web3/chains";
import { NETWORK_COIN_SYMBOL } from "../config";
import { useSelector } from "../store";
import { getFirstActiveWallet } from "../store/store-getters";
import { MyWallet, WalletStore } from "../store/wallet-store";
import { walletNameToConnector, walletNameToHooks } from "../utility/walletUtils";

const tabs = [
    { label: 'Transactions', value: 'transactions' },
];

const Account: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('transactions');

    const walletStore: WalletStore = useSelector((state) => state.wallet);

    const [wallet, setWallet] = useState<MyWallet>();
    const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
    const [chain, setChain] = useState<ExtendedChainInformation | BasicChainInformation>();
    const [loadingBalance, setLoadingBalance] = useState<boolean>(false);
    const [loadingNetwork, setLoadingNetwork] = useState<boolean>(false);


    const getBalance = async (provider: BaseProvider, address: string): Promise<BigNumber> => {
        if (provider && address) {
            return provider.getBalance(address);
        }
        return BigNumber.from(0);
    };

    const getNetwork = async (provider: BaseProvider): Promise<Network | null> => {
        if (provider) {
            return provider.getNetwork();
        }
        return null;
    };

    useEffect(() => {
        const activeWallet = getFirstActiveWallet(walletStore);
        if (activeWallet) {
            setWallet(activeWallet);
        }
    }, [walletStore]);

    useEffect(() => {

        if (wallet) {
            const connector = walletNameToConnector(wallet.walletName);
            if (connector) {
                const prov = ethers.getDefaultProvider();
                if (prov) {
                    setLoadingBalance(true);
                    getBalance(prov, wallet.address).then((balance) => {
                        setBalance(balance);
                    }).catch((e) => {
                        console.error(e);
                        toast.error(e.message);
                    }).finally(() => {
                        setLoadingBalance(false);
                    });

                    setLoadingNetwork(true);
                    getNetwork(prov).then((network) => {
                        if (network) {
                            const chainId = network.chainId;
                            const chain = CHAINS[chainId];
                            setChain(chain);
                        }
                    }).finally(() => {
                        setLoadingNetwork(false);
                    });
                }
            }
        }

    }, [wallet]);

    return (
        <>
            <Head>
                <title>
                    Account
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8,
                    minHeight: '100vh',
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h4">
                        My Account
                    </Typography>
                    <Typography
                        variant="body1"
                        color="textSecondary"
                    >
                        {wallet?.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        {!loadingNetwork && (`Network: ${chain?.name}`)}
                        {loadingNetwork && (`Loading network...`)}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        Address: {wallet?.address}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        {!loadingBalance && (`Balance: ${formatEther(balance)} ${NETWORK_COIN_SYMBOL}`)}
                        {loadingBalance && 'Loading balance...'}
                    </Typography>
                    <Tabs
                        indicatorColor="primary"
                        onChange={(event: ChangeEvent<{}>, value: string) => setCurrentTab(value)}
                        scrollButtons="auto"
                        textColor="primary"
                        value={currentTab}
                        variant="scrollable"
                        sx={{ mt: 3 }}
                    >

                        {tabs.map(({ label, value }) => (
                            <Tab
                                key={value}
                                label={label}
                                value={value}
                            />
                        ))}
                    </Tabs>
                    <Divider sx={{ mb: 3 }} />
                    {currentTab === 'transactions' && <AccountTransactions />}
                </Container>
            </Box>
        </>
    );
};

Account.getLayout = (page) => (
    <MainLayout>
        {page}
    </MainLayout>
);

export default Account;