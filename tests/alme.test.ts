import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";

describe("alme-network", () => {

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.AlmeLiquidity as Program;

  it("Initializes liquidity pool", async () => {

    const pool = anchor.web3.Keypair.generate();

    await program.methods.initializePool()
      .accounts({
        pool: pool.publicKey,
        authority: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([pool])
      .rpc();

    console.log("Pool created:", pool.publicKey.toString());

  });

});
