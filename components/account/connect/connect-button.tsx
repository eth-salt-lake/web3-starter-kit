/* eslint-disable @next/next/no-img-element */
import { LoadingButton } from '@mui/lab';
import { Box, Button, Stack, Typography } from '@mui/material';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { MetaMask } from '@web3-react/metamask';
import { WalletConnect } from '@web3-react/walletconnect';
import { FC, useEffect } from 'react';
import toast from 'react-hot-toast';
import { DEFAULT_NETWORK_ID } from '../../../config';
import { getWeb3ConnectorLogo, getWeb3ConnectorName } from '../../../utility/walletUtils';
import { connectWallet } from '../../web3/connect';

interface ConnectCardButtonProps {
    connector: MetaMask | WalletConnect | CoinbaseWallet,
    chainId: number | undefined,
    isActivating: boolean,
    isActive: boolean,
    error: Error | undefined,
    tosPolicy: boolean,
    onClose?: () => void;
}

export const ConnectCardButton: FC<ConnectCardButtonProps> = (props) => {

    const { connector, isActivating, isActive, error, tosPolicy, onClose } = props;

    const connectTo = (connector: MetaMask | WalletConnect | CoinbaseWallet) => {
        let chainId: number = 1; // default
        if (DEFAULT_NETWORK_ID) {
            chainId = +DEFAULT_NETWORK_ID;
        }
        console.log('connectTo', chainId);
        connectWallet(connector, chainId);
    }

    useEffect(() => {
        if (isActive && !error) {
            onClose?.();
        }
    }, [isActivating, isActive, error, onClose]);

    useEffect(() => {
        if (error) {
            toast.error(error.message);
        }
    }, [error]);

    return (
        <Box>
            <LoadingButton loading={isActivating} disabled={isActivating || !tosPolicy} onClick={() => connectTo(connector)}
                variant="text"
                color="secondary"
                sx={{
                    borderRadius: '3px',
                    border: '0.5px solid',
                    borderColor: 'neutral.50',
                    width: '100%',
                }}
            >
                <Stack
                    spacing={1}
                    direction="row"
                    alignItems="flex-end"
                >
                    <Stack
                        direction="column"
                        alignItems="center"
                        spacing={1}
                    >
                        <img
                            src={getWeb3ConnectorLogo(connector)}
                            alt="Wallet logo"
                            style={{
                                filter: tosPolicy ? 'grayscale(0%)' : 'grayscale(100%)',
                            }}
                            width={45}
                        />
                        <Typography
                            variant="h6"
                            color="textSecondary"
                        >
                            {getWeb3ConnectorName(connector)}
                        </Typography>
                    </Stack>
                </Stack>
            </LoadingButton>
        </Box>
    );
};