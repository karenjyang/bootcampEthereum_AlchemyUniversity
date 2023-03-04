const { ethers, upgrades } = require('hardhat');

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1');
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.address
  );

  console.log('Proxy contract address: ' + proxy.address);

  console.log('Implementation contract address: ' + implementationAddress);
}

main();

/*

(base) karenjyang@Karens-MBP my-upgradeable-contract % npx hardhat run scripts/deployProxy.js --network goerli
Compiled 3 Solidity files successfully
Proxy contract address: 0xf207Ab0f5F4C4595b79bfAaB2F70BBC6f6E9daaa
Implementation contract address: 0x1A01c7FC730c3a6F3365f06e2596bAc329c32E35
(base) karenjyang@Karens-MBP my-upgradeable-contract % 

(base) karenjyang@Karens-MBP my-upgradeable-contract % npx hardhat verify --network goerli 0x1A01c7FC730c3a6F3365f06e2596bAc329c32E35
Nothing to compile
Successfully submitted source code for contract
contracts/VendingMachineV1.sol:VendingMachineV1 at 0x1A01c7FC730c3a6F3365f06e2596bAc329c32E35
for verification on the block explorer. Waiting for verification result...

Successfully verified contract VendingMachineV1 on Etherscan.
https://goerli.etherscan.io/address/0x1A01c7FC730c3a6F3365f06e2596bAc329c32E35#code




*/