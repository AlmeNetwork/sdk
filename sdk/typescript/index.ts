import { Connection, PublicKey } from "@solana/web3.js";

export class AlmeSDK {

  connection: Connection;

  constructor(endpoint: string) {
    this.connection = new Connection(endpoint);
  }

  async getPool(poolAddress: string) {
    const pubkey = new PublicKey(poolAddress);
    const account = await this.connection.getAccountInfo(pubkey);
    return account;
  }

}
