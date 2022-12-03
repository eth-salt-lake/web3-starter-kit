export interface MyWallet {
    address?: string;
    ensName?: string;
    avatar?: string;
}

export interface PostFromChain {
    cid?: string;
    creator?: string;
    validityScore?: number;
}

export interface Post {
    cid?: string;
    creator?: string;
    validityScore?: number;
}