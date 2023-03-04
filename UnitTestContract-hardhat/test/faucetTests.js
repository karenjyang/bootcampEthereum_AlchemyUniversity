const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');

describe('Faucet', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractAndSetVariables() {
    const Faucet = await ethers.getContractFactory('Faucet');
    const faucet = await Faucet.deploy();

    const [owner] = await ethers.getSigners();

    let withdrawAmount = ethers.utils.parseUnits('1', 'ether');

    return { faucet, owner, withdrawAmount };
  }

  it('should deploy and set the owner correctly', async function () {
    const { faucet, owner } = await loadFixture(deployContractAndSetVariables);

    expect(await faucet.owner()).to.equal(owner.address);
  });

  it('should not allow withdrawals above .1 ETH at a time', async function () {
    const { faucet, withdrawAmount } = await loadFixture(
      deployContractAndSetVariables
    );
    await expect(faucet.withdraw(withdrawAmount)).to.be.reverted;
  });
});

/*

(base) karenjyang@Karens-MBP test % npx hardhat test          
Compiled 1 Solidity file successfully


  Faucet
Signer 1 address:  0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    ✔ should deploy and set the owner correctly (724ms)


  1 passing (727ms)



  (base) karenjyang@Karens-MBP UnitTestContract-hardhat % npx hardhat test test/faucetTests.js


  Faucet
    ✔ should deploy and set the owner correctly (744ms)
    ✔ should not allow withdrawals above .1 ETH at a time


  2 passing (780ms)

  */