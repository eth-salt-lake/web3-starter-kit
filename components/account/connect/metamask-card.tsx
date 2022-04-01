import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { upsertWallet, MyWallet } from "../../../store/wallet-store";
import { augmentWalletWithAvatar, getWeb3ConnectorName } from "../../../utility/walletUtils";
import { hooks, metaMask } from "../../web3/connectors/metamask";
import { ConnectCardButton } from "./connect-button";

interface MetaMaskConnectCardProps {
    onClose: () => void;
    tosPolicy: boolean,
}

export const MetaMaskConnectCard: FC<MetaMaskConnectCardProps> = (props) => {

    const { tosPolicy, onClose } = props;

    const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

    const dispatch = useDispatch();

    const chainId = useChainId();
    const accounts = useAccounts();
    const error = useError();
    const isActivating = useIsActivating();

    const isActive = useIsActive();

    const provider = useProvider();
    const ENSNames = useENSNames(provider);

    useEffect(() => {
        if (accounts && accounts.length > 0) {
            const wallet: MyWallet = {
                address: accounts[0],
                isActive: isActive,
                ensNames: ENSNames,
                walletName: getWeb3ConnectorName(metaMask),
            };
            augmentWalletWithAvatar(wallet, provider).then((walletWithAvatar) => {
                dispatch(upsertWallet(walletWithAvatar));
            });
        }

    }, [accounts, provider, ENSNames, chainId, isActivating, isActive, error, dispatch]);

    return (
        <>
            <ConnectCardButton
                chainId={chainId}
                connector={metaMask}
                error={error}
                isActivating={isActivating}
                isActive={isActive}
                tosPolicy={tosPolicy}
                onClose={onClose}
            />
        </>
    );
}