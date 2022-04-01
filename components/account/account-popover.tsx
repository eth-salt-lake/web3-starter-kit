import { Avatar, Box, Divider, Popover, Typography, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import { FC, useEffect, useState } from "react";
import NextLink from 'next/link';
import { AccountCircle, Logout, SupervisedUserCircle } from "@mui/icons-material";
import { shortenWalletAddress, walletNameToConnector } from "../../utility/walletUtils";
import { useRouter } from "next/router";
import { cleanWalletCache, MyWallet, WalletStore } from "../../store/wallet-store";
import { useDispatch, useSelector } from "../../store";
import { getFirstActiveWallet } from "../../store/store-getters";
import { disconnectWallet } from "../web3/connect";

interface AccountPopoverProps {
    anchorEl: null | Element;
    onClose?: () => void;
    open: boolean;
}

export const AccountPopover: FC<AccountPopoverProps> = (props) => {
    const { anchorEl, onClose, open, ...other } = props;
    const router = useRouter();

    const walletStore: WalletStore = useSelector((state) => state.wallet)
    const dispatch = useDispatch();;

    const [wallet, setWallet] = useState<MyWallet>();

    // handle wallet disconnect
    const handleDisconnect = (): void => {

        const activeWallet = getFirstActiveWallet(walletStore);

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

    useEffect(() => {
        if (walletStore.wallets.length > 0) {
            const aw = getFirstActiveWallet(walletStore);
            if (aw) {
                setWallet(aw);
            }
        }
    }, [walletStore]);

    useEffect(() => {
    }, []);

    return (
        <Popover
            anchorEl={anchorEl}
            anchorOrigin={{
                horizontal: 'center',
                vertical: 'bottom',
            }}
            keepMounted
            onClose={onClose}
            open={open}
            {...other}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    p: 2,
                    display: 'flex',
                }}
            >
                <Avatar
                    src={wallet?.avatar}
                    sx={{
                        height: 40,
                        width: 40,
                        pt: wallet?.avatar === '/images/icn-user.svg' ? 0.5 : 0,
                    }}
                >
                    <SupervisedUserCircle fontSize="small" />
                </Avatar>
                <Box
                    sx={{
                        ml: 1
                    }}
                >
                    <Typography variant="subtitle1">
                        {wallet?.name}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="subtitle2"
                    >
                        {wallet?.address ? shortenWalletAddress(wallet.address) : ''}
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ my: 1 }}>
                <NextLink
                    href="/account"
                    passHref
                >
                    <MenuItem
                        component="a"
                        onClick={onClose}
                    >
                        <ListItemIcon>
                            <AccountCircle fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                            primary={(
                                <Typography variant="subtitle1">
                                    My Account
                                </Typography>
                            )}
                        />
                    </MenuItem>
                </NextLink>

                <MenuItem onClick={handleDisconnect}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                        primary={(
                            <Typography variant="subtitle1">
                                Disconnect
                            </Typography>
                        )}
                    />
                </MenuItem>
            </Box>
        </Popover >
    );
};