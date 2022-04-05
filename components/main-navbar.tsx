import { AppBar, Box, Button, Container, IconButton, Toolbar, Link, Avatar, ButtonBase, FormControlLabel, FormGroup } from '@mui/material';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';
import { Menu } from '@mui/icons-material';
import { AccountPopover } from './account/account-popover';
import Image from 'next/image';
import { Web3Context, Web3ContextValue } from '../contexts/web3modal-context';
import { MyWallet } from '../types/my-wallet';
import { ThemeUISwitch } from './theme-switch';
import { SettingsContext, SettingsContextValue } from '../contexts/settings-context';


interface MainNavbarProps {
    onOpenSidebar?: () => void;
}

interface AccountButtonProps {
    accountData: MyWallet;
}

const AccountButton: FC<AccountButtonProps> = (props: AccountButtonProps) => {
    const { accountData } = props;
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const [openPopover, setOpenPopover] = useState<boolean>(false);

    const user = {
        avatar: accountData.avatar ? accountData.avatar : '',
        name: (accountData.ensName && accountData.ensName?.length > 0) ? accountData.ensName : accountData.address,
    };

    const handleOpenPopover = (): void => {
        setOpenPopover(true);
    };

    const handleClosePopover = (): void => {
        setOpenPopover(false);
    };

    useEffect(() => {
    }, [accountData]);

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
                        pt: user.avatar === '' ? 0.5 : 0,
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

    const [themeSwitch, setThemeSwitch] = useState<boolean>(false);

    const { connect, wallet } = useContext(Web3Context) as Web3ContextValue;
    const { saveSettings, settings } = useContext(SettingsContext) as SettingsContextValue;

    const connectWallet = async () => {
        try {
            await connect();
        } catch (e) {
            console.warn(e);
        }
    };

    const handleThemeSwitch = () => {
        settings.theme === 'light' ? saveSettings({ theme: 'dark' }) : saveSettings({ theme: 'light' });
        setThemeSwitch(!themeSwitch);
    };

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
                            <ThemeUISwitch sx={{ m: 1 }} checked={themeSwitch} onChange={handleThemeSwitch} name="themeswitch" />
                            {wallet ? (
                                <AccountButton
                                    accountData={wallet}
                                />
                            ) : (
                                <Button
                                    onClick={connectWallet}
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