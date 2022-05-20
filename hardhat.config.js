require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

console.log("this is", process.env.REACT_APP_RINKEBY_RPC_URL);
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/25242e95cad0432792e18027facfa39c",
      accounts: [
        "cabb183b19e7f87ff7925c5b2e50712c07b42ab5b899e9ffcdd308263ebe78d2",
      ],
    },
  },
  etherscan: {
    apiKey: "HNWKTJ4CWMQCEU3IPH41YTTCFJG6W7ATMS",
  },
};

//npx hardhat verify --network rinkeby 0xd83f4e6E57C53Dc2FC50d88e56E790a5Be0D31ba

//Nothing to compile
//Successfully submitted source code for contract
//contracts/HyunJeongNFT.sol:HyunJeongNFT at 0xd83f4e6E57C53Dc2FC50d88e56E790a5Be0D31ba
//for verification on the block explorer. Waiting for verification result...

//Successfully verified contract HyunJeongNFT on Etherscan.
//https://rinkeby.etherscan.io/address/0xd83f4e6E57C53Dc2FC50d88e56E790a5Be0D31ba#code
