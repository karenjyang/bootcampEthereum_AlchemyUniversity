async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  const nft = await MyToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
 
  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmPRA49qZo3zyvQMBX5hZhVcaBVWokMv3urJtJnNNAgtdu");

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  /*
  share link:
  https://ipfs.io/ipfs/QmPRA49qZo3zyvQMBX5hZhVcaBVWokMv3urJtJnNNAgtdu?filename=PureEnergy.png
  Copy CID:
  QmPRA49qZo3zyvQMBX5hZhVcaBVWokMv3urJtJnNNAgtdu

  (base) karenjyang@Karens-MBP MintNFT-main % node ipfs/upload.js                
{
  path: 'QmQ1UN94LWquPPAMDtB1JhSMMqAMQQcye6nfFvTurB9t58',
  cid: CID(QmQ1UN94LWquPPAMDtB1JhSMMqAMQQcye6nfFvTurB9t58),
  size: 290
}

(base) karenjyang@Karens-MBP MintNFT-main % npx hardhat run scripts/deploy.js --network goerli
Compiled 14 Solidity files successfully
NFT deployed to: 0xeAF310AE910Bb1Bb92eEbf8158E0DBCFD08f4D75
NFT Minted!

  */