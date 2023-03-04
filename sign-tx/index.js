const { Alchemy, Network, Wallet, Utils } = require('alchemy-sdk');
require('dotenv').config();

const { TEST_API_KEY, TEST_PRIVATE_KEY } = process.env;

const settings = {
  apiKey: TEST_API_KEY,
  network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(settings);

let wallet = new Wallet(TEST_PRIVATE_KEY);

async function main() {
  const nonce = await alchemy.core.getTransactionCount(
    wallet.address,
    'latest'
  );
   
  let transaction = {
    to: "0x0B05DA855CCc20E2EA86242a37e314c342F15bE9",   
    value: Utils.parseEther('0.001'), // 0.001 worth of ETH being sent
    gasLimit: '21000',
    maxPriorityFeePerGas: Utils.parseUnits('5', 'gwei'),
    maxFeePerGas: Utils.parseUnits('20', 'gwei'),
    nonce: nonce,
    type: 2,
    chainId: 5, // göerli transaction
  };

  let rawTransaction = await wallet.signTransaction(transaction);
  console.log('Raw tx: ', rawTransaction);
  let tx = await alchemy.core.sendTransaction(rawTransaction);
  console.log(`https://goerli.etherscan.io/tx/${tx.hash}`);
}

main();


/*

(base) karenjyang@Karens-MBP sign-tx % node index.js
Raw tx:  0x02f873050385012a05f2008504a817c800825208940b05da855ccc20e2ea86242a37e314c342f15be987038d7ea4c6800080c080a0d245f3966f16363251468f337f5bbec21a839b8b524fe67ca540e935b35fa148a025362f6184dbec2575dbd8d3e503c1669042397edbcca9b45cad8de5a80bbb3b
https://goerli.etherscan.io/tx/0x588364e898f18416f0bef62af57862546fce938959c268c4a865e61403acd684


[ This is a Goerli Testnet transaction only ]
Transaction Hash:
0x588364e898f18416f0bef62af57862546fce938959c268c4a865e61403acd684 
Status:
Success
Block:
 8279449 1 Block Confirmation
Timestamp:
23 secs ago (Jan-08-2023 11:58:12 PM +UTC)
From:
0x1145bc8530b27e63bfbacde7971ce2f922c79764 
To:
0x0b05da855ccc20e2ea86242a37e314c342f15be9 
Value:
0.001 Ether ($0.00)
Transaction Fee:
0.000105000064155 Ether ($0.00)
Gas Price:
0.000000005000003055 Ether (5.000003055 Gwei)
Gas Limit & Usage by Txn:
21,000 | 21,000 (100%)
Gas Fees:
Base: 0.000003055 Gwei |Max: 20 Gwei |Max Priority: 5 Gwei
Burnt & Txn Savings Fees:
🔥 Burnt: 0.000000000064155 Ether ($0.00)💸 Txn Savings: 0.000314999935845 Ether ($0.00)


*/