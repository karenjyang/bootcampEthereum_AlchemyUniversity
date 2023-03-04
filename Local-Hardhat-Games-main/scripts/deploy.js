// replace the name of the contract with which one you want to deploy!
// const contractName = "Game1";
// const contractName = "Game2";
// const contractName = "Game3";
// const contractName = "Game4";
const contractName = "Game5";

async function main() {
  const Game = await hre.ethers.getContractFactory(contractName);
  // if you need to add constructor arguments for the particular game, add them here:
  const game = await Game.deploy();
  console.log(`${contractName} deployed to address: ${game.address}`);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });


 /*

const contractName = "Game1"; // <-- use the contract name here

async function main() {
  const Game = await hre.ethers.getContractFactory(contractName); // <-- hardhat compiles and grabs the contract abi/bytecode using the name
  const game = await Game.deploy(); // <-- the transaction to deploy your contract to the blockchain
  console.log(`${contractName} deployed to address: ${game.address}`); // <-- our log telling us the address!
}

*/