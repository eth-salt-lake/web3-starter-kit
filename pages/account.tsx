import { Network } from "@ethersproject/networks";
import { BaseProvider } from "@ethersproject/providers";
import { Box, Container, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AccountTransactions } from "../components/account/account-transactions";
import { MainLayout } from "../components/main-layout";
import { NETWORK_COIN_SYMBOL } from "../config";
import { Web3Context, Web3ContextValue } from "../contexts/web3modal-context";

const tabs = [
    { label: 'Transactions', value: 'transactions' },
];

const Account: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('transactions');

    const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
    const [network, setNetwork] = useState<Network>();
    const [loadingBalance, setLoadingBalance] = useState<boolean>(false);
    const [loadingNetwork, setLoadingNetwork] = useState<boolean>(false);

    const { wallet, provider } = useContext(Web3Context) as Web3ContextValue;

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
        if (wallet?.address && provider) {

            setLoadingNetwork(true);
            getNetwork(provider).then((net: Network | null) => {
                console.log('network', net);
                if (net !== null) {
                    setNetwork(net);
                }
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                setLoadingNetwork(false);
            });;

            setLoadingBalance(true);
            getBalance(provider, wallet.address).then((balance) => {
                setBalance(balance);
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                setLoadingBalance(false);
            });
        }
    }, [wallet, provider]);

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
                    <Grid
                        container
                    >
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                        >
                            <Typography variant="h4">
                                My Account
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                            >
                                {wallet?.ensName}
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
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6}
                        >
                            <Typography
                                variant="h4"
                            >
                                Network
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                            >
                                {loadingNetwork && 'Loading network...'}
                                {!loadingNetwork && network?.name}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                {`Chain Id: ${network?.chainId}`}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                {`ENS address: ${network?.ensAddress}`}
                            </Typography>
                        </Grid>
                    </Grid>

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