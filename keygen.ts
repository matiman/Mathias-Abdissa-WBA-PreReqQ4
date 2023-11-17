import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
import bs58 from 'bs58'
import wallet from "./dev-wallet.json"
//import * as prompt from 'prompt-sync'
//hCyRq7v8YMh9rfuRLrxQQgCBehUGNwW2y9FmJPJ5rZb


//Generate a new keypair
// let kp = Keypair.generate()
//
// console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
//
// console.log(`The key ist: [${kp.secretKey}]`);

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
console.log(`New Key fromSecretKeyt: [${keypair.publicKey.toBase58()}]`);

//Create a Solana devnet connection to devnet SOL tokens
const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
// We're going to claim 2 devnet SOL tokens
        const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);

        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();