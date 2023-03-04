import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }
    async function getBlock(blockNumber) {
      return transactions = alchemy.core.getBlockWithTransactions(blockNumber);
    }
    

    getBlockNumber();
    getBlock();
  });

  return <div className="App">Block Number: {blockNumber} {transactions} </div>;
}

export default App;


/*
Can you get more information about the current block and display it in the page? 
Take a look at alchemy.core.getBlock() for how you might go about that.

Blocks contains transactions. Can you get the list of transactions for a given block? 
Can you use alchemy.core.getBlockWithTransactions() for this?

How about getting details for individual transactions? 
The alchemy.core.getTransactionReceipt() looks handy.
*/
