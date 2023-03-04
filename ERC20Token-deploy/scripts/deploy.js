async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));

  // make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
  const Token = await ethers.getContractFactory("GoofyGoober");
  const token = await Token.deploy();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});


/*

(base) karenjyang@Karens-MBP ERC20Token-deploy % npx hardhat run scripts/deploy.js --network goerli
Compiled 6 Solidity files successfully
Deploying contracts with the account: 0x0B05DA855CCc20E2EA86242a37e314c342F15bE9
Account balance: 0.100312968162170036
Token address: 0x86295501abAff9A3d425F93E4DAE4E36D241057F

https://goerli.etherscan.io/address/0x86295501abAff9A3d425F93E4DAE4E36D241057F

*/


