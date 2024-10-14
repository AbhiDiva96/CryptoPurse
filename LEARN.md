# Learn: Cryptopurse Project

Welcome to the Cryptopurse Project! This guide will help you understand how to build a basic crypto wallet connection and import feature using **Next.js**, **TypeScript**, **CSS**, and **JavaScript**.

## Project Overview

The Cryptopurse project is a simple crypto wallet interface that allows users to:
- **Connect** to an existing wallet.
- **Import** a wallet using private keys or seed phrases.

This project uses the **Next.js** framework for the front-end and TypeScript for type safety, with CSS for styling the UI.

---

## Tech Stack

- **Next.js**: A React-based framework for building fast and modern web applications.
- **TypeScript**: Enhances JavaScript with types, making the code more reliable and easier to manage.
- **CSS**: For styling the components and layout.
- **JavaScript**: For handling wallet connections and crypto-related logic.

---

## How to Start

1. **Install Dependencies**  
   Clone the repository and install the required dependencies:
   ```bash
   git clone https://github.com/yourusername/cryptopurse.git
   cd cryptopurse
   npm install
   ```

2. **Run the Application**  
   Start the Next.js development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

---

## Features Breakdown

### 1. **Wallet Connection**
The user can connect their wallet via MetaMask or WalletConnect. You'll use libraries like `ethers.js` or `web3.js` to handle the wallet connection.

- **MetaMask Connection Example (JavaScript)**
   ```ts
   async function connectWallet() {
     if (window.ethereum) {
       try {
         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
         console.log('Connected account:', accounts[0]);
       } catch (error) {
         console.error('Connection error:', error);
       }
     } else {
       alert('Please install MetaMask!');
     }
   }
   ```

### 2. **Import Wallet**
The user can import a wallet using their private key or seed phrase. This can be done using libraries such as `ethers.js` to securely handle wallet details.

- **Private Key Import Example (JavaScript with ethers.js)**
   ```ts
   import { Wallet } from 'ethers';

   function importWallet(privateKey: string) {
     try {
       const wallet = new Wallet(privateKey);
       console.log('Imported wallet address:', wallet.address);
     } catch (error) {
       console.error('Invalid private key:', error);
     }
   }
   ```

---

## Folder Structure

- **pages/**: Contains the Next.js pages (e.g., `index.tsx` for the main wallet connection page).
- **components/**: Reusable React components like wallet connection buttons, input forms for importing wallets.
- **styles/**: CSS files for custom styling.

---

## Styling the Interface

You can modify the CSS in the `styles` folder to customize the look and feel of the application. Below is an example of how you might style the wallet connection button.

- **CSS Example**
   ```css
   .connect-button {
     background-color: #ff9f1a;
     border: none;
     padding: 10px 20px;
     border-radius: 5px;
     color: white;
     font-size: 16px;
     cursor: pointer;
     transition: background-color 0.3s ease;
   }

   .connect-button:hover {
     background-color: #e88e1a;
   }
   ```

---

## Learning Resources

Here are a few resources that might help you as you build your crypto wallet:

- [Next.js Documentation](https://nextjs.org/docs)
- [Ethers.js Documentation](https://docs.ethers.io/v5/)
- [MetaMask Integration Guide](https://docs.metamask.io/guide/)
- [Web3.js Documentation](https://web3js.readthedocs.io/en/v1.3.4/)

---

Feel free to explore and customize the cryptopurse project! Happy coding!

--- 
