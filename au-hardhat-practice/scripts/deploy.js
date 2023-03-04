async function main() {

  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.deployed();

  console.log(
    `Counter deployed to: ${counter.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


/*
Deploy to local network (only exist during lifetime of script, virtual blockchain)

(base) karenjyang@Karens-MBP au-hardhat-practice % npx hardhat run scripts/deploy.js
Downloading compiler 0.8.4
Compiled 1 Solidity file successfully
Counter deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3


Deploy smart contract to Goerli Test Network
(base) karenjyang@Karens-MBP au-hardhat-practice % npx hardhat run scripts/deploy.js --network goerli
Counter deployed to: 0x7b2D11de74fb140f7e18B0355eF5b3f82945082e
(base) karenjyang@Karens-MBP au-hardhat-practice % 

https://goerli.etherscan.io/address/0x7b2D11de74fb140f7e18B0355eF5b3f82945082e

*/
