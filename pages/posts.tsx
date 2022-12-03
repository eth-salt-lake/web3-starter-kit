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
import { Post, PostFromChain } from "../types/my-wallet";
import axios from "axios";


const tabs = [
    { label: 'Transactions', value: 'transactions' },
];

const Account: NextPage = () => {
    const [posts, setPosts] = useState<Array<Post>>([]);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<any>("");

    const { wallet, provider } = useWeb3();

    const loadPosts = async () => {
        const postFromChain: Array<PostFromChain> = [
            {
                "cid": "QmV1pDbJfthgx3jPmwHPXY9uT8EA1LB7Mwy71c4dbWJW32",
                "creator": "0x2e50d66f02AC0d0503812b1f000a616b89A2fd91",
                "validityScore": 23
            },
            {
                "cid": "QmXB3ZLqxmmoupQxjkkEYqNMbhkdNPRLxzLXHYtqabv6Eb",
                "creator": "0x2e50d66f02AC0d0503812b1f000a616b89A2fd91",
                "validityScore": 23
            },
        ];
        const parsedPosts = await Promise.all(
            postFromChain.map(async (element) => {
                const response = await axios(`https://gateway.pinata.cloud/ipfs/${p.cid}`);
                return await response.data;
            })
        )
        setPosts(parsedPosts)
    }

    useEffect(() => {
        // const postFromChain: Array<PostFromChain> = [
        //     {
        //         "cid": "QmV1pDbJfthgx3jPmwHPXY9uT8EA1LB7Mwy71c4dbWJW32",
        //         "creator": "0x2e50d66f02AC0d0503812b1f000a616b89A2fd91",
        //         "validityScore": 23
        //     },
        //     {
        //         "cid": "QmXB3ZLqxmmoupQxjkkEYqNMbhkdNPRLxzLXHYtqabv6Eb",
        //         "creator": "0x2e50d66f02AC0d0503812b1f000a616b89A2fd91",
        //         "validityScore": 23
        //     },
        // ];
        
        
        // console.log(parsedPosts)
    }, []);

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    return (
        <>
            <Head>
                <title>
                    Articles
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
                    <Typography>Articles</Typography>
                    <Grid container width="100%" direction="row" alignItems="center">
                        <Grid item xs={1}><Typography variant="subtitle1">Title</Typography></Grid>
                        <Grid item xs>
                            <TextField variant="standard" size="small" fullWidth onChange={(e) => setTitle(e?.target.value)}/>
                        </Grid>
                    </Grid>
                    {/* <Divider sx={{ mb: 3 }} /> */}
                    {
                        posts.map((post) => <Box>
                            <Typography>{post.cid}</Typography>
                            <Typography>{post.creator}</Typography>
                            <Typography>{post.validityScore}</Typography>
                        </Box>)
                    }
                    <Divider sx={{ mb: 3 }} />
                    <Button
                            size="large"
                            variant="contained"
                            onClick={async () => {
                                console.log(title, content?.html, wallet?.address)
                                const walletAddress = wallet?.address ? wallet.address : '';
                                const res = await storeNFT(title, content?.html, walletAddress)
                                console.log(res)
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