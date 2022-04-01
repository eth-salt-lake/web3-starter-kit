import { FC } from "react";
import { hooks } from "./connectors/coinbase";

const WalletListener: FC = () => {

    const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks;

    return (
        <>
        </>
    );
};