const { ethers } = require("hardhat");

async function main() {
    const CryptoPurse = await ethers.getContractFactory("CryptoPurse");
    const purse = await CryptoPurse.deploy(1000000); // 1 million initial tokens
    console.log("CryptoPurse deployed to:", purse.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
