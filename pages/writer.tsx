import { Network } from "@ethersproject/networks";
import { BaseProvider } from "@ethersproject/providers";
import { Box, Container, Divider, Grid, Tab, Tabs, Typography, Button, TextField } from "@mui/material";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useEffect, useState } from "react";
import { AccountTransactions } from "../components/account/account-transactions";
import { MainLayout } from "../components/main-layout";
import { NETWORK_COIN_SYMBOL } from "../config";
import { useWeb3 } from "../hooks/use-web3";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { storeNFT } from "../utility/storage";



const tabs = [
    { label: 'Transactions', value: 'transactions' },
];

const Account: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('transactions');

    const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
    const [network, setNetwork] = useState<Network>();
    const [loadingBalance, setLoadingBalance] = useState<boolean>(false);
    const [loadingNetwork, setLoadingNetwork] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<any>("");

    const { wallet, provider } = useWeb3();

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

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    return (
        <>
            <Head>
                <title>
                    Publish Article
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
                    <Typography>Publish Article</Typography>
                    <Grid container width="100%" direction="row" alignItems="center">
                        <Grid item md={1}><Typography variant="subtitle1">Title</Typography></Grid>
                        <Grid item md>
                            <TextField variant="standard" size="small" fullWidth onChange={(e) => setTitle(e?.target.value)}/>
                        </Grid>
                    </Grid>
                    {/* <Divider sx={{ mb: 3 }} /> */}
                    <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={(e) => setContent(e)} />
                    <Divider sx={{ mb: 3 }} />
                    <Button
                            size="large"
                            variant="contained"
                            onClick={() => {
                                console.log(title, content?.html, wallet?.address)
                                const walletAddress = wallet?.address ? wallet.address : '';
                                storeNFT(title, content?.html, walletAddress)
                                // storeNFT(title, content, wallet)
                            }}
                        >
                            Publish
                        </Button>
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