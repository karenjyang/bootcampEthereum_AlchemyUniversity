// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');

const CONTRACT_ADDRESS = '0xC13B146A8d52B47Ed4fb50751D507FC9011E7BFa';

const Alchemy_contract = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502'

async function main() {
  const AttemptWinner = await hre.ethers.getContractAt(
    'AttemptWinnerCaller',
    CONTRACT_ADDRESS
  );

  const tx = await AttemptWinner.callAttempt(Alchemy_contract);
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*

(base) karenjyang@Karens-MBP demo-goerli-hardhat % npx hardhat run scripts/deploy.js --network goerli
AttemptWinner deployed to 0xC13B146A8d52B47Ed4fb50751D507FC9011E7BFa
(base) karenjyang@Karens-MBP demo-goerli-hardhat % npx hardhat run scripts/Trigger_Winner.js --network goerli

Look at events
https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#events

Transaction Hash:
0x2aa3f75822d3af02293958e535500b1878272c6f8915e890eb44355ee4782ec7 
Status:
Success
Block:
 8323881 5 Block Confirmations
Timestamp:
1 min ago (Jan-16-2023 11:36:48 PM +UTC)
From:
0x0b05da855ccc20e2ea86242a37e314c342f15be9 
To:
 Contract 0xc13b146a8d52b47ed4fb50751d507fc9011e7bfa 
Value:
0 Ether ($0.00)
Transaction Fee:
0.00000098671614426 Ether ($0.00)
Gas Price:
0.000000000037220526 Ether (0.037220526 Gwei)

*/
