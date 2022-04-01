import { MyWallet, WalletStore } from "./wallet-store";

export const getFirstActiveWallet = (store: WalletStore): MyWallet | undefined => {
    const activeWallets = store.wallets.filter((w) => w.isActive);
    return activeWallets.length > 0 ? activeWallets[0] : undefined;
};