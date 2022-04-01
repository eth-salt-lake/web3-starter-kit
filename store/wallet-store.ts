import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from ".";

export interface MyWallet {
    address: string;
    name?: string,
    avatar?: string,
    isActive?: boolean,
    ensNames?: (string | null)[] | undefined,
    network?: MyNetwork,
    walletName: string,
}

export interface MyNetwork {
    chainId: number,
    ensAddress?: string,
    name: string,
}

export interface WalletStore {
    wallets: MyWallet[];
}

const initState: WalletStore = {
    wallets: [],
};

const slice = createSlice({
    name: "wallet",
    initialState: initState,
    reducers: {
        upsertWallet(state: WalletStore, action: { payload: MyWallet }) {
            const wallet: MyWallet = action.payload;
            const foundIndex = state.wallets.findIndex((w) => w.address === wallet.address);
            if (foundIndex < 0) {
                state.wallets.push(wallet);
            } else {
                state.wallets[foundIndex] = wallet;
            }
            // make all other wallets non active if this one is active
            if (wallet.isActive) {
                state.wallets.forEach((w) => {
                    if (w.address !== wallet.address) {
                        w.isActive = false;
                    }
                });
            }
        },
        updateWalletNetwork(state: WalletStore, action: { payload: { address: string, network: MyNetwork } }) {
            const network = action.payload.network;
            const address = action.payload.address;
            const foundIndex = state.wallets.findIndex((w) => w.address === address);
            if (foundIndex < 0) {
                return; // nothing to do
            }
            state.wallets[foundIndex].network = network;
        },
        disconnect(state: WalletStore) {
            // simply deletes cache
            state.wallets = [];
        },
    },
});

export const upsertWallet = (wallet: MyWallet): AppThunk => async (dispatch) => {
    // upsert wallet
    dispatch(slice.actions.upsertWallet(wallet));
};

export const setWalletNetwork = (address: string, network: MyNetwork): AppThunk => async (dispatch) => {
    dispatch(slice.actions.updateWalletNetwork({ address, network }));
};

export const cleanWalletCache = (): AppThunk => async (dispatch) => {
    console.log('cleaning wallet cache');
    dispatch(slice.actions.disconnect());
};

export const { reducer } = slice;