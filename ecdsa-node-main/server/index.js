const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

// const balances = {
//   "0x1": 100, // dan
//   "0x2": 50, // al
//   "0x3": 75, // ben
// };
/*
From generate.js
(base) karenjyang@Karens-MBP server % node scripts/generate.js
private key: 513a7525ac2debfe0c67efb39104b3289f649bbb4f17374c579411f4f98b1c8e
public key: 0492245662aa916bd48ee3a5c0144ba370086091c35f9159603d73913a7e07a11f297fe8bd77deff6dfb2d8c72ea703267def378a2f4e508d5b554357f9be83c97

(base) karenjyang@Karens-MBP server % node scripts/generate.js
private key: 1a351bdb36414f2d3a920fdb832f5c9e508298e68473600811eb60548fcfa670
public key: 046324d9150c194d5298910c1e573c582ef4cd388bf5064d77a2ee73c50f0b1facd284aa5e3da089688149938dc138c7c4ddfdddfd0369550ad5b63ff1f857880c

(base) karenjyang@Karens-MBP server % node scripts/generate.js
private key: 764e4a32b1946050905f60b6ff535c6ccf0fcf86b32e95abc2c967ad30bdd43e
public key: 0409d24b15521d3bb36dabbce4fc6c47f5fc2492077a092a3a73c12a20f8ae88db32de552a6cb6abb5ad45dbcdfdfd91c666e88ea6e93404e8cfcd96d9c993b795

Address (last 20 digits of public key): 08d5b554357f9be83c97
Address (last 20 digits of public key): 550ad5b63ff1f857880c
Address (last 20 digits of public key): 04e8cfcd96d9c993b795

*/

//public keys
const balances = {
  "0492245662aa916bd48ee3a5c0144ba370086091c35f9159603d73913a7e07a11f297fe8bd77deff6dfb2d8c72ea703267def378a2f4e508d5b554357f9be83c97": 100, 
  "046324d9150c194d5298910c1e573c582ef4cd388bf5064d77a2ee73c50f0b1facd284aa5e3da089688149938dc138c7c4ddfdddfd0369550ad5b63ff1f857880c": 50, 
  "0409d24b15521d3bb36dabbce4fc6c47f5fc2492077a092a3a73c12a20f8ae88db32de552a6cb6abb5ad45dbcdfdfd91c666e88ea6e93404e8cfcd96d9c993b795": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  // Need to sign a message on client side then send to server

  // send a signed transaction to the server and server should recover the public key from signature
  // and only allow the transfer to go through if it has a valid public key that has those funds

  // TODO: get a signature from the client-side application
  // recover the public key from the signature, which will be your sender
  // you want to derive address from signature then it derived from person with the private key 
  // security issue: anyone can send anyone's funds
 
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}