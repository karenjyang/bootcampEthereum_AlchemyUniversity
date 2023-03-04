// // add the game address here and update the contract name if necessary
// const gameAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // change this out
// const contractName = "Game1";  // change this out

// async function main() {
//     // attach to the game
//     const game = await hre.ethers.getContractAt(contractName, gameAddr);

//     // do whatever you need to do to win the game here:
//     const tx = await game.win();

//     // did you win? Check the transaction receipt!
//     // if you did, it will be in both the logs and events array
//     const receipt = await tx.wait();
//     console.log(receipt);
// }

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });

// ---------- Game 1 above

  // add the game address here and update the contract name if necessary
// const gameAddr = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0"; // change this out
// const contractName = "Game2";  // change this out

// async function main() {
//     // attach to the game
//     const game = await hre.ethers.getContractAt(contractName, gameAddr);

//     // do whatever you need to do to win the game here:
//     const tx1 = await game.setX(20);
//     // await tx1.await();
//     const tx2 = await game.setY(30);
//     // await tx2.await();
//     const tx3 = await game.win();
//     // await tx3.await();

//     // did you win? Check the transaction receipt!
//     // if you did, it will be in both the logs and events array
//     const receipt1 = await tx1.wait();
//     console.log(receipt1);

//     const receipt2 = await tx2.wait();
//     console.log(receipt2);

//     const receipt3 = await tx3.wait();
//     console.log(receipt3);
// }

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });

  // ---------- Game 2 above


  // add the game address here and update the contract name if necessary
  // const gameAddr = "0x0165878A594ca255338adfa4d48449f69242Eb8F"; // change this out after deploying contract for Game3.sol
  // const contractName = "Game3";  // change this out
  
  // async function main() {
  //     // attach to the game
  //     const game = await hre.ethers.getContractAt(contractName, gameAddr);
  
  //     // do whatever you need to do to win the game here:
    
  //     // y is set to 210
  //     const tx1 = await game.win(45); // pass in x as 45 so that sum is 255
  //     // await tx1.await();
  
  //     // did you win? Check the transaction receipt!
  //     // if you did, it will be in both the logs and events array
  //     const receipt1 = await tx1.wait();
  //     console.log(receipt1);
  
  // }
  
  // main()
  //   .then(() => process.exit(0))
  //   .catch(error => {
  //     console.error(error);
  //     process.exit(1);
  //   });

  // ---------- Game 3 above

    // add the game address here and update the contract name if necessary
    // const gameAddr = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6"; // change this out after deploying contract for Game3.sol
    // const contractName = "Game4";  // change this out
    
    // async function main() {
    //     // attach to the game
    //     const game = await hre.ethers.getContractAt(contractName, gameAddr);
    
    //     // do whatever you need to do to win the game here:
      
    //     // y is set to 210
    //     const tx1 = await game.win(0); // pass in x as -200 so that sum is 10, data type is uint8
    //     // await tx1.await();
    
    //     // did you win? Check the transaction receipt!
    //     // if you did, it will be in both the logs and events array
    //     const receipt1 = await tx1.wait();
    //     console.log(receipt1);
    
    // }
    
    // main()
    //   .then(() => process.exit(0))
    //   .catch(error => {
    //     console.error(error);
    //     process.exit(1);
    //   });

  // ------- Game4 above

      // add the game address here and update the contract name if necessary
      const gameAddr = "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318"; // change this out after deploying contract for Game3.sol
      const contractName = "Game5";  // change this out
      
      async function main() {
          // attach to the game
          const game = await hre.ethers.getContractAt(contractName, gameAddr);
      
          // do whatever you need to do to win the game here:
        
          allowances[msg.sender] = 10000;
          balances[msg.sender] = 10000;
        

          const tx1 = giveMeAllowance(10);
          const tx2 = mint(5);

          const tx3 = await game.win(); 
          // await tx3.await();
      
          // did you win? Check the transaction receipt!
          // if you did, it will be in both the logs and events array
          const receipt3 = await tx3.wait();
          console.log(receipt3);
      
      }
      
      main()
        .then(() => process.exit(0))
        .catch(error => {
          console.error(error);
          process.exit(1);
        });
  
    // ------- Game5 above

   