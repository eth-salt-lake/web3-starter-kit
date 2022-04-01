import { HighlightOff } from '@mui/icons-material';
import { Box, Grid, Modal, Typography, Stack, FormControlLabel, Link, IconButton, Checkbox } from '@mui/material';
import { FC, useState } from 'react';
import { CoinbaseConnectCard } from '../account/connect/coinbase-card';
import { MetaMaskConnectCard } from '../account/connect/metamask-card';
import { WalletConnectCard } from '../account/connect/walletconnect-card';

interface WalletConnectDialogProps {
    open: boolean;
    onClose: () => void;
    onConnect: () => void;
}

const WalletConnectDialog: FC<WalletConnectDialogProps> = (props) => {
    const { open, onClose } = props;

    const [tosPolicy, setTosPolicy] = useState<boolean>(false);

    const onTosPolicyClick = () => {
        setTosPolicy(!tosPolicy);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="Connect Wallet"
                aria-describedby="Select Wallet to connect"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '10px',
                        p: 4,
                        backgroundColor: 'background.paper',
                    }}
                >
                    <Stack
                        direction="column"
                        alignContent="center"
                        sx={{
                            pb: 4,
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                            }}
                        >
                            <IconButton onClick={onClose}>
                                <HighlightOff />
                            </IconButton>
                        </Box>
                        <Typography
                            variant="h4"
                            color="textSecondary"
                        >
                            Connect Wallet
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            sx={{
                                pb: 4,
                            }}
                        >
                            Select a wallet to connect you&apos;d like to connect with
                        </Typography>
                        <Box>
                            <FormControlLabel
                                control={(
                                    <Checkbox
                                        value={tosPolicy}
                                        onChange={() => setTosPolicy(!tosPolicy)}
                                        checked={tosPolicy}
                                    />
                                )}
                                label={(
                                    <Typography
                                        variant="h5"
                                        color="textSecondary"
                                    >
                                        I accept the
                                        {' '}
                                        <Link
                                            component="a"
                                            href="https://example.com/tos"
                                        >
                                            Terms of Service
                                        </Link>
                                        {' '}
                                        and
                                        {' '}
                                        <Link
                                            component="a"
                                            href="https://example.com/privacy"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </Typography>)}
                            />
                        </Box>
                    </Stack>
                    <Grid
                        container
                        flexDirection={{ sx: 'column', md: 'row' }}
                        spacing={2}
                        flexWrap="wrap"
                    >
                        <Grid
                            item
                            sx={{
                                pr: 2,
                            }}
                            xs={12}
                            sm={12}
                            md={4}
                        >
                            <MetaMaskConnectCard
                                tosPolicy={tosPolicy}
                                onClose={onClose}
                            />
                        </Grid>
                        <Grid
                            item
                            sx={{
                                pr: 2,
                            }}
                            xs={12}
                            sm={12}
                            md={4}
                        >
                            <CoinbaseConnectCard
                                tosPolicy={tosPolicy}
                                onClose={onClose}
                            />
                        </Grid>
                        <Grid
                            item
                            sx={{
                                pr: 2,
                            }}
                            xs={12}
                            sm={12}
                            md={4}
                        >
                            <WalletConnectCard
                                tosPolicy={tosPolicy}
                                onClose={onClose}
                            />
                        </Grid>
                    </Grid>
                    <Box>
                        <Typography
                            color="error"
                            variant="subtitle2"
                        >
                        </Typography>
                    </Box>
                </Box>
            </Modal >
        </>
    );
};

export default WalletConnectDialog;