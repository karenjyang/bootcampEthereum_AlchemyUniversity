const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0xf207Ab0f5F4C4595b79bfAaB2F70BBC6f6E9daaa';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Implementation contract address: ' + implementationAddress);
}

main();

/*


(base) karenjyang@Karens-MBP my-upgradeable-contract % npx hardhat run scripts/upgradeProxy.js --network goerli
The current contract owner is: [object Promise]
Implementation contract address: 0x0eaf63347e965959B4e2a919BEf58EeBf6E1fCbd

(base) karenjyang@Karens-MBP my-upgradeable-contract % npx hardhat verify --network goerli 0xf207Ab0f5F4C4595b79bfAaB2F70BBC6f6E9daaa
Verifying implementation: 0x0eaf63347e965959B4e2a919BEf58EeBf6E1fCbd
Nothing to compile
Successfully submitted source code for contract
contracts/VendingMachineV2.sol:VendingMachineV2 at 0x0eaf63347e965959B4e2a919BEf58EeBf6E1fCbd
for verification on the block explorer. Waiting for verification result...

Implementation 0x0eaf63347e965959B4e2a919BEf58EeBf6E1fCbd already verified.
Verifying proxy: 0xf207Ab0f5F4C4595b79bfAaB2F70BBC6f6E9daaa
Contract at 0xf207Ab0f5F4C4595b79bfAaB2F70BBC6f6E9daaa already verified.
Linking proxy 0xf207Ab0f5F4C4595b79bfAaB2F70BBC6f6E9daaa with implementation
Successfully linked proxy to implementation.
Verifying proxy admin: 0x50f706E6a5B76AC5E70f541D11b12164Fc885901
Contract at 0x50f706E6a5B76AC5E70f541D11b12164Fc885901 already verified.

Proxy fully verified.

*/

