import axios from 'axios';
import { NFTStorage, File } from 'nft.storage'

export const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweENCMjE5ZEE2MjQ4MjAwQjE2QTgxMjE3NTBhZjk1ZTNlN0EwRmEyRTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MDA4MTU5MzA0MCwibmFtZSI6IkROTiJ9.vGZTzLdHWUC8b7_mrapKyd1uvlGT3raHcxdRCfvNL2I';

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


// const pinataSDK = require('@pinata/sdk');

// const pinata = new pinataSDK('c1a98673ce3f3ea125cf', 'b2c2c673018efa94a1792b8b667da01dce98133fff4c543ef7937ed8bbe54531');

export async function storeArticle(title: string, content: string, walletAddress: string) {
    // const response = await pinata.pinJSONToIPFS({
    //     title, content, walletAddress
    // })
    // return response;
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOWU5NDQ0Yy1iZDVjLTQyNTUtOTczNC1jZWMwNmVmMjEwMjAiLCJlbWFpbCI6ImtvdXN0aHViQGFzcWkuaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYzFhOTg2NzNjZTNmM2VhMTI1Y2YiLCJzY29wZWRLZXlTZWNyZXQiOiJiMmMyYzY3MzAxOGVmYTk0YTE3OTJiOGI2NjdkYTAxZGNlOTgxMzNmZmY0YzU0M2VmNzkzN2VkOGJiZTU0NTMxIiwiaWF0IjoxNjcwMDg5MzI0fQ.ExKsXOsPDQGIhSwSlkUHAcE0pYiIAdgyaDFdhrlcogw'
        }
    }
    const respone = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', 
        {
            title, content, walletAddress
        }, config);
    console.log(respone)
}
