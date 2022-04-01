import { AppBar, Box, Button, Container, IconButton, Toolbar, Link, Avatar, ButtonBase } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';
import WalletConnectDialog from './dialogs/wallet-connect-dialog';
import { Menu } from '@mui/icons-material';
import { AccountPopover } from './account/account-popover';
import { useSelector } from '../store';
import { getFirstActiveWallet } from '../store/store-getters';
import { MyWallet, WalletStore } from '../store/wallet-store';
import { Web3ReactHooks } from '@web3-react/core';
import { hooks } from './web3/connectors/metamask';
import Image from 'next/image';

interface MainNavbarProps {
    onOpenSidebar?: () => void;
}

interface AccountButtonProps {
    accountData: MyWallet;
    provider?: ReturnType<Web3ReactHooks['useProvider']>;
}

const AccountButton: FC<AccountButtonProps> = (props: AccountButtonProps) => {
    const { accountData } = props;
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [openPopover, setOpenPopover] = useState<boolean>(false);

    const user = {
        avatar: accountData.avatar ? accountData.avatar : '/images/icn-user.svg',
        name: (accountData.ensNames && accountData.ensNames?.length > 0) ? accountData.ensNames[0] : accountData.address,
    };

    const handleOpenPopover = (): void => {
        setOpenPopover(true);
    };

    const handleClosePopover = (): void => {
        setOpenPopover(false);
    };

    return (
        <>
            <Box
                component={ButtonBase}
                onClick={handleOpenPopover}
                ref={anchorRef}
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: 2
                }}
            >
                <Avatar
                    sx={{
                        height: 40,
                        width: 40,
                        pt: user.avatar === '/images/icn-user.svg' ? 0.5 : 0,
                    }}
                    src={user.avatar}
                />
            </Box>
            <AccountPopover
                anchorEl={anchorRef.current}
                onClose={handleClosePopover}
                open={openPopover}
            />
        </>
    );
};

export const MainNavbar: FC<MainNavbarProps> = (props) => {
    const { onOpenSidebar } = props;
    const anchorRef = useRef<HTMLButtonElement | null>(null);

    const [walletModalOpen, setWalletModalOpen] = useState<boolean>(false);
    const [activeWallet, setActiveWallet] = useState<MyWallet>();

    const walletStore: WalletStore = useSelector((state) => state.wallet);

    const handleConnectWalletClick = () => {
        setWalletModalOpen(true);
    };

    const { useProvider } = hooks;

    const provider = useProvider();

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

    useEffect(() => {
        provider?.addListener('network', (e: Event) => {
            console.log('network changed: ', e);
        });
    }, [provider]);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (e: any) => {
                if (e.length > 0) {
                    console.log('account changed: ', e);
                }
            });
        }
    }, []);

    return (
        <>
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: 'background.paper',
                    color: 'text.secondary',
                }}
            >
                <Container maxWidth="lg">
                    <WalletConnectDialog
                        open={walletModalOpen}
                        onClose={() => setWalletModalOpen(false)}
                        onConnect={() => console.log('connected')}
                    />
                    <Toolbar
                        disableGutters
                        sx={{ minHeight: 64 }}
                    >
                        <NextLink
                            href="/"
                            passHref
                        >
                            <Box
                                sx={{
                                    marginTop: 2,
                                }}
                            >
                                <a>
                                    <Image
                                        src="/images/slcdao-logo.png"
                                        width={41}
                                        height={41}
                                        alt="SLCDAO logo"
                                    />
                                </a>
                            </Box>
                        </NextLink>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton
                            color="inherit"
                            onClick={onOpenSidebar}
                            sx={{
                                display: {
                                    md: 'none'
                                }
                            }}
                        >
                            <Menu fontSize="small" />
                        </IconButton>
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: {
                                    md: 'flex',
                                    xs: 'none'
                                }
                            }}
                        >
                            <NextLink
                                href="/"
                                passHref
                            >
                                <Link
                                    color="textSecondary"
                                    underline="none"
                                    variant="subtitle2"
                                >
                                    Example Link 1
                                </Link>
                            </NextLink>
                            <NextLink
                                href="/browse"
                                passHref
                            >
                                <Link
                                    color="textSecondary"
                                    sx={{ ml: 2 }}
                                    underline="none"
                                    variant="subtitle2"
                                >
                                    Example Link 2
                                </Link>
                            </NextLink>
                            <NextLink
                                href="/"
                                passHref
                            >
                                <Link
                                    color="textSecondary"
                                    component="a"
                                    sx={{ ml: 2 }}
                                    underline="none"
                                    variant="subtitle2"
                                >
                                    Example Link 3
                                </Link>
                            </NextLink>
                            {activeWallet ? (
                                <AccountButton
                                    accountData={activeWallet}
                                />
                            ) : (
                                <Button
                                    onClick={handleConnectWalletClick}
                                    size="medium"
                                    sx={{ ml: 2 }}
                                    variant="contained"
                                >
                                    Connect Wallet
                                </Button>
                            )}

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};