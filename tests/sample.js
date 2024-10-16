const { expect } = require("chai");

describe("CryptoPurse", function () {
    let CryptoPurse;
    let purse;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        CryptoPurse = await ethers.getContractFactory("CryptoPurse");
        [owner, addr1, addr2] = await ethers.getSigners();

        purse = await CryptoPurse.deploy(1000000);
        await purse.deployed();
    });

    it("Should have correct initial supply", async function () {
        expect(await purse.totalSupply()).to.equal(1000000 * 10 ** 18);
    });

    it("Should transfer tokens between accounts", async function () {
        await purse.transfer(addr1.address, 50);
        expect(await purse.balanceOf(addr1.address)).to.equal(50);
        expect(await purse.balanceOf(owner.address)).to.equal(999950);
    });

    it("Should fail if sender doesn’t have enough tokens", async function () {
        const initialBalance = await purse.balanceOf(owner.address);
        await expect(purse.connect(addr1).transfer(owner.address, 1)).to.be.revertedWith("Insufficient balance");
        expect(await purse.balanceOf(owner.address)).to.equal(initialBalance);
    });
});
