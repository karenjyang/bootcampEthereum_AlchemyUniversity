const ethers = require('ethers');
require('dotenv').config();

async function main() {

  const url = process.env.GOERLI_URL;

  let artifacts = await hre.artifacts.readArtifact("Faucet");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Faucet Factory
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  let faucet = await factory.deploy();

  console.log("Faucet address:", faucet.address);

  await faucet.deployed();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});

/* 

(base) karenjyang@Karens-MBP au-deployContract % npx hardhat run scripts/deploy.js --network goerli
Compiled 1 Solidity file successfully
Faucet address: 0x62a2eBd820888e8BA7A38b6b8c132F711635E201

https://goerli.etherscan.io/address/0x62a2eBd820888e8BA7A38b6b8c132F711635E201

*/