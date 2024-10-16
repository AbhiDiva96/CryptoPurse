require("@nomiclabs/hardhat-waffle");
require("dotenv").config(); // To manage environment variables

module.exports = {
    solidity: {
        version: "0.8.0",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    networks: {
        hardhat: {
            chainId: 1337, // Local development network
        },
        // Uncomment to add other networks (like Rinkeby or Mainnet)
        /*
        rinkeby: {
            url: process.env.RINKEBY_URL, // Infura or Alchemy URL for Rinkeby
            accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`], // Your wallet's private key
        },
        mainnet: {
            url: process.env.MAINNET_URL, // Infura or Alchemy URL for Mainnet
            accounts: [`0x${process.env.MAINNET_PRIVATE_KEY}`], // Your wallet's private key
        },
        */
    },
    paths: {
        artifacts: "./artifacts", // Directory for compiled contracts
        sources: "./contracts",    // Directory for smart contracts
        tests: "./test",           // Directory for tests
        cache: "./cache",          // Cache directory
        scripts: "./scripts",      // Directory for deployment scripts
    },
    // Optional: Add any plugins you might use
    // plugins: [],
};
