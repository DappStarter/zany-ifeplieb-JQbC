require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food nose crawl script minor grace bag army giggle'; 
let testAccounts = [
"0xcc1a46bc9cc9090a2456cd2a00397254d420a602092c81de6b3461e9d79805cf",
"0xdac56dfa825e0f321d33fb6ece2abea92b0abd44b9a2bdcb6431cae0a4a5ba3c",
"0xf42edcf7c2b5ee12638d3149c113f537dcf64c7680387a8861e759f42208242a",
"0xb87b81226e95da03a68c3df24f18b6328af80815eaad52a6e9c77862ce9c1457",
"0x074b7aa13375b83b8f2b61ce0e62396eb2501c4f7ebde1fcb1cad3d9a8ef30f5",
"0x5c0810dbcc8e59c53782904365b0adac3d585a11c7ef5f0f376032ecfc2dd4c5",
"0x15e7a71f4b3fd5ee05d1d0201a1fb4f6b195f63aa9837ef8893f42949b4e16e9",
"0x4af6b59e96ad6a85aeecb1831ff293b475ae3b671ae319026a119cf492eb4e5a",
"0xcd3ca78cbce17fc10171bd03f47e75dca3e691730d58ad38f5376c663d3fd04a",
"0x460518a4e785646c82d337a5b0f3dad320cedd9306079382c1f202fe18e4a0ac"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

