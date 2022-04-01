import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { upsertWallet, MyWallet } from "../../../store/wallet-store";
import { augmentWalletWithAvatar, getWeb3ConnectorName } from "../../../utility/walletUtils";
import { hooks, walletConnect } from "../../web3/connectors/wallet-connect";
import { ConnectCardButton } from "./connect-button";

interface WalletConnectCardProps {
    onClose: () => void;
    tosPolicy: boolean,
}

export const WalletConnectCard: FC<WalletConnectCardProps> = (props) => {

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
                walletName: getWeb3ConnectorName(walletConnect),
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
                connector={walletConnect}
                error={error}
                isActivating={isActivating}
                isActive={isActive}
                tosPolicy={tosPolicy}
                onClose={onClose}
            />
        </>
    );
}