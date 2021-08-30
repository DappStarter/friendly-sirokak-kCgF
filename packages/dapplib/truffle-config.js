require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind honey include kitten success stock'; 
let testAccounts = [
"0x4a325fdfb6efdf0f5042cc8b5bc890773682d2e8932a2351976d4ab0649b3f7f",
"0x932edaa205d21201063d14efa310113cc1b9e63980148e2236d4716aea23727b",
"0x4cd9948f20da0cd3e8946024352b961288a452b84095b527afb4806953d8958a",
"0x304439971924442499c2b9c634c048e6c2c38ad2c76431f4aa16f51e5b91991a",
"0x25c0ededb9260bd615bc871fb0a015d8948faa52d799bb1834a2f51bcc079494",
"0x95cf07d54dffb6a8317a03c6fcaa96555e49560f00603a11e36dfc979d576442",
"0x72c40eb138b73257e1f5de4ee551f80022278917fd3bb1344e3a6d20c5f237ab",
"0x4637e0c66ea31f01934f17a753252ada9a37b40d25211e9506455cb38b54ec6b",
"0xa05004fb68042f7217ce24d618408794f54610399a3fadf6e17704e20d8cb787",
"0xfc47ede1a64fe21c711856295a2cc516c8e962bdbee219675a6e99421b1472f5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


