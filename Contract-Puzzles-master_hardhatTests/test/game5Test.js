const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');
const { ethers } = require('hardhat');

describe('Game5', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game5');
    const game = await Game.deploy();

    const signer = await ethers.provider.getSigner(0);

    const threshold = 0x00FfFFfFFFfFFFFFfFfFfffFFFfffFfFffFfFFFf;
    let valid;
    let address;
    let wallet;
    while (!valid) {
      wallet = ethers.Wallet.createRandom();
      address = await wallet.getAddress();

      if (address < threshold) {
        valid = true;
        wallet = wallet.connect(ethers.provider);
      }
    }

    await signer.sendTransaction({
      to:address,
      value: ethers.utils.parseEther('0.1') // 1 ether
    })

    return { game, wallet };
  }
  it('should be a winner', async function () {
    const { game, wallet } = await loadFixture(deployContractAndSetVariables);

    // good luck
    await game.connect(wallet).win();

    //await game.win();

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});


/*

(base) karenjyang@Karens-MBP COntract-Puzzles-master % npx hardhat test test/game5Test.js


  Game5
    ✔ should be a winner (2921ms)


  1 passing (3s)

  

(base) karenjyang@Karens-MBP COntract-Puzzles-master % npx hardhat test


  Game1
    ✔ should be a winner (578ms)

  Game2
    ✔ should be a winner (40ms)

  Game3
    ✔ should be a winner (46ms)

  Game4
    ✔ should be a winner

  Game5
    ✔ should be a winner (1615ms)


  5 passing (2s)


*/
