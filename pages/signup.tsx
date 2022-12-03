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
import dynamic from "next/dynamic";
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { WidgetProps } from '@worldcoin/id'

const WorldIDWidget = dynamic<WidgetProps>(
    () => import('@worldcoin/id').then((mod) => mod.WorldIDWidget),
    { ssr: false }
  )

  const widgetProps: WidgetProps = {
    actionId: "wid_staging_0791a24e6fc3be1e245d2446dd30bc85",
    signal: "user-id-1",
    enableTelemetry: true,
    appName: "ConfCon",
    signalDescription: "Get your ticket to ConfCon 2023",
    theme: "dark",
    debug: true, // Recommended **only** for development
    onSuccess: (result) => console.log(result),
    onError: ({ code, detail }) => console.log({ code, detail }),
    onInitSuccess: () => console.log("Init successful"),
    onInitError: (error) => console.log("Error while initialization World ID", error),
  };


const Account: NextPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('transactions');

    const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));
    const [network, setNetwork] = useState<Network>();
    const [loadingBalance, setLoadingBalance] = useState<boolean>(false);
    const [loadingNetwork, setLoadingNetwork] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<any>("");

    const { wallet, provider } = useWeb3();

    useEffect(() => {
        
    }, [wallet, provider]);

    return (
        <>
            <Head>
                <title>
                    Signup
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
                    <Typography>Signup</Typography>
                    <WorldIDWidget {...widgetProps} />
                    <Button
                            size="large"
                            variant="contained"
                            onClick={async () => {
                                // console.log(title, content?.html, wallet?.address)
                                // const walletAddress = wallet?.address ? wallet.address : '';
                                // const res = await storeNFT(title, content?.html, walletAddress)
                                // console.log(res)
                                // storeNFT(title, content, wallet)
                            }}
                        >
                            Signup
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