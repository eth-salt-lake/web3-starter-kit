import { Box, Drawer, Link, styled, Theme, useMediaQuery, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import NextLink from 'next/link';
import WalletConnectDialog from './dialogs/wallet-connect-dialog';
import { useDispatch, useSelector } from '../store';
import { cleanWalletCache, MyWallet, WalletStore } from '../store/wallet-store';
import { getFirstActiveWallet } from '../store/store-getters';
import { walletNameToConnector } from '../utility/walletUtils';
import { disconnectWallet } from './web3/connect';

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



    const walletStore: WalletStore = useSelector((state) => state.wallet);
    const [activeWallet, setActiveWallet] = useState<MyWallet>();
    const [walletModalOpen, setWalletModalOpen] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleConnectWalletClick = () => {
        setWalletModalOpen(true);
    };

    const handlePathChange = () => {
        if (open) {
            onClose?.();
        }
    };

    const handleDisconnect = (): void => {
        // get active wallet to disconnect from
        if (activeWallet) {
            const conn = walletNameToConnector(activeWallet.walletName);
            if (conn != null) {
                disconnectWallet(conn);
            }
        }

        //@ts-ignore
        dispatch(cleanWalletCache());

        onClose?.();
        router.push('/');
    };

    useEffect(
        handlePathChange,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath]
    );

    useEffect(() => {
        if (walletStore.wallets.length > 0) {
            // find active wallet
            const aw = getFirstActiveWallet(walletStore);
            if (aw) {
                setActiveWallet(aw);
            } else {
                setActiveWallet(undefined);
            }
        } else {
            setActiveWallet(undefined);
        }
    }, [walletStore, walletStore.wallets]);

    return (
        <>
            <WalletConnectDialog
                open={walletModalOpen}
                onClose={() => setWalletModalOpen(false)}
                onConnect={() => console.log('connected')}
            />
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
                    {activeWallet ? (
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