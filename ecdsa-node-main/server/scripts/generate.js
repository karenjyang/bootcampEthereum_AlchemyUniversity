const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");


const privateKey = secp.utils.randomPrivateKey();
console.log('private key:', toHex(privateKey));

 const publicKey = secp.getPublicKey(privateKey);
 console.log('public key:', toHex(publicKey));

 /*
 Use in server:  node scripts/generate.js 

(base) karenjyang@Karens-MBP server % node scripts/generate.js
private key: 513a7525ac2debfe0c67efb39104b3289f649bbb4f17374c579411f4f98b1c8e
public key: 0492245662aa916bd48ee3a5c0144ba370086091c35f9159603d73913a7e07a11f297fe8bd77deff6dfb2d8c72ea703267def378a2f4e508d5b554357f9be83c97

(base) karenjyang@Karens-MBP server % node scripts/generate.js
private key: 1a351bdb36414f2d3a920fdb832f5c9e508298e68473600811eb60548fcfa670
public key: 046324d9150c194d5298910c1e573c582ef4cd388bf5064d77a2ee73c50f0b1facd284aa5e3da089688149938dc138c7c4ddfdddfd0369550ad5b63ff1f857880c

(base) karenjyang@Karens-MBP server % node scripts/generate.js
private key: 764e4a32b1946050905f60b6ff535c6ccf0fcf86b32e95abc2c967ad30bdd43e
public key: 0409d24b15521d3bb36dabbce4fc6c47f5fc2492077a092a3a73c12a20f8ae88db32de552a6cb6abb5ad45dbcdfdfd91c666e88ea6e93404e8cfcd96d9c993b795

*/