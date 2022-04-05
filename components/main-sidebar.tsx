import { Box, Drawer, Link, styled, Theme, useMediaQuery, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Web3Context, Web3ContextValue } from '../contexts/web3modal-context';

interface MainSidebarProps {
    onClose: () => void;
    open: boolean;
}

const MainSidebarLink = styled(Link)(
    ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        display: 'block',
        padding: theme.spacing(1.5),
        '&:hover': {
            color: '#ffffff',
            backgroundColor: theme.palette.action.hover
        }
    })
);

export const MainSidebar: FC<MainSidebarProps> = (props) => {
    const { onClose, open } = props;
    const router = useRouter();
    const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));


    const { connect, wallet, disconnect } = useContext(Web3Context) as Web3ContextValue;

    const handleConnectWalletClick = () => {
        connect();
    };

    const handlePathChange = () => {
        if (open) {
            onClose?.();
        }
    };

    const handleDisconnect = (): void => {
        // get active wallet to disconnect from
        disconnect();
        onClose?.();
        router.push('/');
    };

    useEffect(
        handlePathChange,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath]
    );

    return (
        <>
            <Drawer
                anchor="right"
                onClose={onClose}
                open={!lgUp && open}
                PaperProps={{ sx: { width: 256 } }}
                sx={{
                    zIndex: (theme) => theme.zIndex.appBar + 100
                }}
                variant="temporary"
            >
                <Box sx={{ p: 2 }}>
                    <NextLink
                        href="/"
                        passHref
                    >
                        <MainSidebarLink
                            color="textSecondary"
                            underline="none"
                            variant="subtitle2"
                        >
                            Home
                        </MainSidebarLink>
                    </NextLink>
                    {wallet ? (
                        <>
                            <NextLink
                                href="/account"
                                passHref
                            >
                                <MainSidebarLink
                                    color="textSecondary"
                                    underline="none"
                                    variant="subtitle2"
                                >
                                    My Account
                                </MainSidebarLink>
                            </NextLink>
                            <Button
                                fullWidth
                                sx={{ mt: 1.5 }}
                                variant="contained"
                                onClick={handleDisconnect}
                            >
                                Disconnect
                            </Button>
                        </>
                    ) : (
                        <Button
                            fullWidth
                            onClick={handleConnectWalletClick}
                            size="medium"
                            sx={{ mt: 1.5 }}
                            variant="contained"
                        >
                            Connect Wallet
                        </Button>
                    )}
                </Box>
            </Drawer>
        </>
    );
};