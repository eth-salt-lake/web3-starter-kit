import { NFTStorage, File } from 'nft.storage'

export const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDg4YUUzYzk4YzhhRTViZDE4NGUwNzQyNTlGZjNEN2ZEMEFDZjlmRDgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDA0MzkxNDQwNywibmFtZSI6Im5ld3NhcHAifQ.Xq4YBENV5yds5JZEME80JL9ROwh6VRmh8sE-r39s2xw';

export async function storeNFT(title: string, content: string, walletAddress: string) {
    // // load the file from disk
    // const image = await fileFromPath(imagePath)

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    return nftstorage.store({
        image: new Blob([content]),
        name: walletAddress,
        description: title,
    })
}