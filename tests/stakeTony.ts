import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { createMint } from '@solana/spl-token';
import {
  clusterApiUrl,
  Connection,
  Keypair,
} from '@solana/web3.js';

import { StakeTony } from '../target/types/stake_tony';

const payer = Keypair.generate();
const mintAuthority = Keypair.generate();
const freezeAuthority = Keypair.generate();

(async => () const connection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed'
);

const mint = await createMint(
  connection,
  payer,
  mintAuthority.publicKey,
  freezeAuthority.publicKey,
  9 // We are using 9 to match the CLI decimal default exactly
);
describe("stakeTony", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.StakeTony as Program<StakeTony>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
