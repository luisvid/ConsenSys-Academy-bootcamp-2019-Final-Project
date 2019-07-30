const HDWalletProvider = require('truffle-hdwallet-provider');
// const config = require('./config');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: `${__dirname}/src/contracts`,
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    /*
    rinkeby: {
      provider: () => new HDWalletProvider(config.mnemonic, 'https://rinkeby.infura.io/'),
      network_id: '4',
      gas: 4712388,
    },
    ropsten: {
      provider: () => new HDWalletProvider(config.mnemonic, 'https://ropsten.infura.io/'),
      network_id: '3',
      gas: 4712388,
    },
    */
  }
};
