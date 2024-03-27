# Full-dApp Setup Guide

SupplyChain DApp is a decentralized application built on the Ethereum blockchain that revolutionizes supply chain management. It provides transparency, immutability, and efficiency in tracking and verifying the provenance, authenticity, and quality of products throughout the supply chain. 
## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (>= v18.17)
- Yarn (v1 or v2+)
- Git
- MetaMask or similar Ethereum wallet browser extension

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Lukman-01/Supply_Chain_dApp.git
   cd Supply_Chain_dApp
   cd Full-dApp
   ```
## Environment Configuration

After setting up the project, configure the development environment:

2. **Initialize a Local Blockchain:**

In the first terminal, run a local network:

```bash
yarn chain
```

3. **Deploy Your Smart Contract:**

In the second terminal, deploy the test contract:

```bash
yarn deploy
```

4. **Launch your NextJS Application:**

In the third terminal, start your NextJS app:

```bash
yarn start
```

Visit your app on http://localhost:3000 to interact with your smart contract using the contract component or the example UI in the frontend.