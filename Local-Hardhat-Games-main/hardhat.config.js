require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: 'localhost'
};

/*

 Let's go ahead and run our local node. You can do so by running:   npx hardhat node. 
 This will spin up a local, persistent hardhat blockchain on your port 8545.
 This is a local blockchain.

(base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.

Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

Account #2: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

Account #3: 0x90F79bf6EB2c4f870365E785982E1f101E93b906 (10000 ETH)
Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

Account #4: 0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65 (10000 ETH)
Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a

Account #5: 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc (10000 ETH)
Private Key: 0x8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba

Account #6: 0x976EA74026E726554dB657fA54763abd0C3a0aa9 (10000 ETH)
Private Key: 0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e

Account #7: 0x14dC79964da2C08b23698B3D3cc7Ca32193d9955 (10000 ETH)
Private Key: 0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356

Account #8: 0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f (10000 ETH)
Private Key: 0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97

Account #9: 0xa0Ee7A142d267C1f36714E4a8F75612F20a79720 (10000 ETH)
Private Key: 0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6

Account #10: 0xBcd4042DE499D14e55001CcbB24a551F3b954096 (10000 ETH)
Private Key: 0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897

Account #11: 0x71bE63f3384f5fb98995898A86B02Fb2426c5788 (10000 ETH)
Private Key: 0x701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82

Account #12: 0xFABB0ac9d68B0B445fB7357272Ff202C5651694a (10000 ETH)
Private Key: 0xa267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1

Account #13: 0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec (10000 ETH)
Private Key: 0x47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd

Account #14: 0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097 (10000 ETH)
Private Key: 0xc526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa

Account #15: 0xcd3B766CCDd6AE721141F452C550Ca635964ce71 (10000 ETH)
Private Key: 0x8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61

Account #16: 0x2546BcD3c84621e976D8185a91A922aE77ECEc30 (10000 ETH)
Private Key: 0xea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0

Account #17: 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E (10000 ETH)
Private Key: 0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd

Account #18: 0xdD2FD4581271e230360230F9337D5c0430Bf44C0 (10000 ETH)
Private Key: 0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0

Account #19: 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199 (10000 ETH)
Private Key: 0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e

WARNING: These accounts, and their private keys, are publicly known.
Any funds sent to them on Mainnet or any other live network WILL BE LOST.


Open up a second terminal and keep your hardhat node running in the first terminal.
Deploy the contract.
Temporary hardhat node that is only available during your process.
Port 8545.

(base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/deploy.js --network localhost
Game1 deployed to address: 0x5FbDB2315678afecb367f032d93F642f64180aa3

eth_chainId
eth_accounts
eth_blockNumber
eth_chainId (2)
eth_estimateGas
eth_getBlockByNumber
eth_gasPrice
eth_sendTransaction
  Contract deployment: Game1
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0x3af2eb5a48ea26f6ffd2c72bc02a6f3849033cf6673dd4321bc0c9f7d2b93ef8
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            106983 of 106983
  Block #1:            0xdd923a5a19d3d50e73570bf9487014eaddeaa3d9fdcc9033dbdc4dad9840e32e

eth_chainId
eth_getTransactionByHash

Look at logs and parsed logs that are found in events.
(base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/win.js
{
  to: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  contractAddress: null,
  transactionIndex: 0,
  gasUsed: BigNumber { value: "22425" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000004000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000',
  blockHash: '0x6ecb3673dd9b1f0bbc9acba7259cbecd63cef49a9602def82512f0c391e4f672',
  transactionHash: '0xa33b395d11315467ef639174622e9e6f920f1c1307397e0f8788434435a17b08',
  logs: [
    {
      transactionIndex: 0,
      blockNumber: 2,
      transactionHash: '0xa33b395d11315467ef639174622e9e6f920f1c1307397e0f8788434435a17b08',
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      topics: [Array],
      data: '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      logIndex: 0,
      blockHash: '0x6ecb3673dd9b1f0bbc9acba7259cbecd63cef49a9602def82512f0c391e4f672'
    }
  ],
  blockNumber: 2,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "22425" },
  effectiveGasPrice: BigNumber { value: "1766405085" },
  status: 1,
  type: 0,
  byzantium: true,
  events: [
    {
      transactionIndex: 0,
      blockNumber: 2,
      transactionHash: '0xa33b395d11315467ef639174622e9e6f920f1c1307397e0f8788434435a17b08',
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      topics: [Array],
      data: '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      logIndex: 0,
      blockHash: '0x6ecb3673dd9b1f0bbc9acba7259cbecd63cef49a9602def82512f0c391e4f672',
      args: [Array],
      decode: [Function (anonymous)],
      event: 'Winner',
      eventSignature: 'Winner(address)',
      removeListener: [Function (anonymous)],
      getBlock: [Function (anonymous)],
      getTransaction: [Function (anonymous)],
      getTransactionReceipt: [Function (anonymous)]
    }
  ]
}

In other terminal, output shows Contract call:

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_accounts
eth_blockNumber
eth_chainId (2)
eth_estimateGas
eth_getBlockByNumber
eth_gasPrice
eth_sendTransaction
  Contract call:       Game1#win
  Transaction:         0xa33b395d11315467ef639174622e9e6f920f1c1307397e0f8788434435a17b08
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
  Value:               0 ETH
  Gas used:            22425 of 22425
  Block #2:



(base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/deploy.js --network localhost
Game2 deployed to address: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
(base) karenjyang@Karens-MBP Local-Hardhat-Games-main % 

Other terminal output: 
  Contract deployment: Game2
  Contract address:    0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
  Transaction:         0x3bfc6c4619af1847ad9f54637badf7bb019d6ea9122fe79b8155214545d31492
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            215576 of 215576
  Block #3:            0x54de742270304aba49725c542b8998266ec69ba79b1619f4e427bbfdab316691



  (base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/win.js
{
  to: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  contractAddress: null,
  transactionIndex: 0,
  gasUsed: BigNumber { value: "43724" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  blockHash: '0x1b76bd45c825dcd6396190e72e1ce08454d19867be47444a9f827e39bf9a14f8',
  transactionHash: '0xb58b68239a907fae57ccb011a66bdff36b84fc46892293bac560cc729b724821',
  logs: [],
  blockNumber: 4,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "43724" },
  effectiveGasPrice: BigNumber { value: "1588109189" },
  status: 1,
  type: 0,
  byzantium: true,
  events: []
}
{
  to: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  contractAddress: null,
  transactionIndex: 0,
  gasUsed: BigNumber { value: "43768" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  blockHash: '0x44e3d1862ae5d44bb519e97c786cfa60de13c9f6fe823975cbc9b67e41750181',
  transactionHash: '0xb4cec4743bec541cab133601937b89cea4cdb53d282294ee8223a66b70cfa814',
  logs: [],
  blockNumber: 5,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "43768" },
  effectiveGasPrice: BigNumber { value: "1514809828" },
  status: 1,
  type: 0,
  byzantium: true,
  events: []
}
{
  to: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  contractAddress: null,
  transactionIndex: 0,
  gasUsed: BigNumber { value: "27134" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040200000000000000000400000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000400000000000000000',
  blockHash: '0x7ab5c41c9d744a510faaaa94a9c29f2667ba5a7ebbad121b1fde7314b2701110',
  transactionHash: '0x0045218cce47d14b85085b8f961946d248b2558d7c0276e2822c94c97b988872',
  logs: [
    {
      transactionIndex: 0,
      blockNumber: 6,
      transactionHash: '0x0045218cce47d14b85085b8f961946d248b2558d7c0276e2822c94c97b988872',
      address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
      topics: [Array],
      data: '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      logIndex: 0,
      blockHash: '0x7ab5c41c9d744a510faaaa94a9c29f2667ba5a7ebbad121b1fde7314b2701110'
    }
  ],
  blockNumber: 6,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "27134" },
  effectiveGasPrice: BigNumber { value: "1450646368" },
  status: 1,
  type: 0,
  byzantium: true,
  events: [
    {
      transactionIndex: 0,
      blockNumber: 6,
      transactionHash: '0x0045218cce47d14b85085b8f961946d248b2558d7c0276e2822c94c97b988872',
      address: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
      topics: [Array],
      data: '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      logIndex: 0,
      blockHash: '0x7ab5c41c9d744a510faaaa94a9c29f2667ba5a7ebbad121b1fde7314b2701110',
      args: [Array],
      decode: [Function (anonymous)],
      event: 'Winner',
      eventSignature: 'Winner(address)',
      removeListener: [Function (anonymous)],
      getBlock: [Function (anonymous)],
      getTransaction: [Function (anonymous)],
      getTransactionReceipt: [Function (anonymous)]
    }
  ]
}

Other terminal output:
  Contract call:       Game2#win
  Transaction:         0x0045218cce47d14b85085b8f961946d248b2558d7c0276e2822c94c97b988872
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0
  Value:               0 ETH
  Gas used:            27134 of 27134
  Block #6:            0x7ab5c41c9d744a510faaaa94a9c29f2667ba5a7ebbad121b1fde7314b2701110



  (base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/deploy.js --network localhost
Game3 deployed to address: 0x0165878A594ca255338adfa4d48449f69242Eb8F

(base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/win.js
{
  to: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  contractAddress: null,
  transactionIndex: 0,
  gasUsed: BigNumber { value: "25017" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000401000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000',
  blockHash: '0x75511d591a6d02cbb715350c6ad91636dc89c3c26fbdf397d03bb961368a0abb',
  transactionHash: '0xe6dad17051370e3cafd67f7603cd994c375d1eb8e600046f69c3956726e2aea0',
  logs: [
    {
      transactionIndex: 0,
      blockNumber: 8,
      transactionHash: '0xe6dad17051370e3cafd67f7603cd994c375d1eb8e600046f69c3956726e2aea0',
      address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
      topics: [Array],
      data: '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      logIndex: 0,
      blockHash: '0x75511d591a6d02cbb715350c6ad91636dc89c3c26fbdf397d03bb961368a0abb'
    }
  ],
  blockNumber: 8,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "25017" },
  effectiveGasPrice: BigNumber { value: "1345791845" },
  status: 1,
  type: 0,
  byzantium: true,
  events: [
    {
      transactionIndex: 0,
      blockNumber: 8,
      transactionHash: '0xe6dad17051370e3cafd67f7603cd994c375d1eb8e600046f69c3956726e2aea0',
      address: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
      topics: [Array],
      data: '0x000000000000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      logIndex: 0,
      blockHash: '0x75511d591a6d02cbb715350c6ad91636dc89c3c26fbdf397d03bb961368a0abb',
      args: [Array],
      decode: [Function (anonymous)],
      event: 'Winner',
      eventSignature: 'Winner(address)',
      removeListener: [Function (anonymous)],
      getBlock: [Function (anonymous)],
      getTransaction: [Function (anonymous)],
      getTransactionReceipt: [Function (anonymous)]
    }
  ]
}

Other terminal output:

  Contract deployment: Game3
  Contract address:    0x0165878a594ca255338adfa4d48449f69242eb8f
  Transaction:         0xf8734eaff9496c72cfe4eeebf25218961ea33e89597ad46f44ae566e670651f6
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            205840 of 205840
  Block #7:            0xba492f7bb8a40e994667044d4b3c2ce0cd8afecea482050fe5a6b34ba86e11c6


  (base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/deploy.js --network localhost
Game4 deployed to address: 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6



(base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/win.js
Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="Error: VM Exception while processing transaction: reverted with reason string 'Incorrect argument passed in!'", method="estimateGas", transaction={"from":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","to":"0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6","data":"0x345a44230000000000000000000000000000000000000000000000000000000000000000","accessList":null}, error={"name":"ProviderError","_stack":"ProviderError: HttpProviderError\n    at HttpProvider.request (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/http.ts:78:19)\n    at AutomaticSenderProvider.request (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/accounts.ts:344:34)\n    at AutomaticGasProvider.request (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/gas-providers.ts:135:34)\n    at AutomaticGasPriceProvider.request (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/gas-providers.ts:153:36)\n    at BackwardsCompatibilityProviderAdapter.send (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/backwards-compatibility.ts:36:27)\n    at EthersProviderWrapper.send (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:48)\n    at EthersProviderWrapper.<anonymous> (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:640:31)\n    at step (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)\n    at Object.next (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)\n    at /Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:23:71","code":-32603,"_isProviderError":true,"data":{"message":"Error: VM Exception while processing transaction: reverted with reason string 'Incorrect argument passed in!'","data":"0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001d496e636f727265637420617267756d656e742070617373656420696e21000000"}}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.2)
    at Logger.makeError (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:78:20)
    at EthersProviderWrapper.<anonymous> (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  reason: "Error: VM Exception while processing transaction: reverted with reason string 'Incorrect argument passed in!'",
  code: 'UNPREDICTABLE_GAS_LIMIT',
  method: 'estimateGas',
  transaction: {
    from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    to: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
    data: '0x345a44230000000000000000000000000000000000000000000000000000000000000000',
    accessList: null
  },
  error: ProviderError: HttpProviderError
      at HttpProvider.request (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/http.ts:78:19)
      at AutomaticSenderProvider.request (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/accounts.ts:344:34)
      at AutomaticGasProvider.request (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/gas-providers.ts:135:34)
      at AutomaticGasPriceProvider.request (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/gas-providers.ts:153:36)
      at BackwardsCompatibilityProviderAdapter.send (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/hardhat/src/internal/core/providers/backwards-compatibility.ts:36:27)
      at EthersProviderWrapper.send (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:48)
      at EthersProviderWrapper.<anonymous> (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:640:31)
      at step (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
      at Object.next (/Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
      at /Users/karenjyang/Desktop/Local-Hardhat-Games-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:23:71
}


(base) karenjyang@Karens-MBP Local-Hardhat-Games-main % npx hardhat run scripts/deploy.js --network localhost
Game5 deployed to address: 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318






*/
