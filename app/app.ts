import { AlmeSDK } from "../sdk/typescript";

const sdk = new AlmeSDK("https://api.devnet.solana.com");

async function main() {

  const pool = await sdk.getPool("POOL_PUBLIC_KEY");

  console.log(pool);

}

main();
