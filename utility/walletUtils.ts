export const appName: string | undefined = process.env.APP_NAME;

/**
 * Shortening of the address to 6 places from both sides for display purposes
 * @param address 
 * @param length 
 * @returns 
 */
export const shortenWalletAddress = (address: string, length: number = 6) => {
    return address.slice(0, length) + '...' + address.slice(address.length - length);
};

/**
 * Shortening of the address to 6 places at the start for display purposes
 * @param hash 
 * @param length 
 * @returns 
 */
export const shortenHash = (hash: string, length: number = 6) => {
    if (hash && hash.length > length) {
        return hash.slice(0, length) + '...';
    }
    return hash;
};