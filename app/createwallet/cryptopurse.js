import { ethers } from 'ethers';

// ABI and Contract Address (Replace with your deployed contract info)
const CryptoPurseABI = [
    // Add the ABI of your CryptoPurse contract here
];
const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';

// Function to get the contract instance
export const getContract = async () => {
    if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, CryptoPurseABI, signer);
        return contract;
    } else {
        throw new Error("MetaMask not found");
    }
};

// Deposit Ether into the smart contract
export const deposit = async (amount) => {
    try {
        const contract = await getContract();
        const tx = await contract.deposit({ value: ethers.utils.parseEther(amount) });
        await tx.wait();
        alert('Deposit successful!');
    } catch (error) {
        console.error('Deposit failed:', error);
        alert('Deposit failed');
    }
};

// Withdraw Ether from the smart contract
export const withdraw = async (amount) => {
    try {
        const contract = await getContract();
        const tx = await contract.withdraw(ethers.utils.parseEther(amount));
        await tx.wait();
        alert('Withdrawal successful!');
    } catch (error) {
        console.error('Withdrawal failed:', error);
        alert('Withdrawal failed');
    }
};

// Check the balance of the user in the smart contract
export const checkBalance = async () => {
    try {
        const contract = await getContract();
        const balance = await contract.checkBalance();
        return ethers.utils.formatEther(balance);
    } catch (error) {
        console.error('Check balance failed:', error);
        return '0';
    }
};
