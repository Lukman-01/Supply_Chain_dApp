require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PtOW84EIMyfAaX93sYECGs_QLonqicN8',
      accounts: ['8431b27ab2ba78ecc97181e3baf0defe507b490a78ecbb7b25f0e4621278d66f'],
    },
  },
};
