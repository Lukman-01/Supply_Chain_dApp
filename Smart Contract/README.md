# Supply_Chain_dApp White Papper

# What is the supply chain?

1. Supply chain is a path that products or services take from the producer to the consumer, involving multiple components and organizations.
2. The components of the supply chain include producers, middlemen, shippers, warehouses, wholesalers, retailers, and consumers.
3. The traditional supply chain involves multiple intermediaries, leading to increased prices at each level.
4. Blockchain technology can be applied to supply chains to track and trace the entire process, ensuring transparency and simplifying the exchange of data and information.
5. Certified Origins Italia is an example of a company using a complex supply chain to provide high-quality and traceable food products, such as premium olive oil.
6. Natural disasters can disrupt supply chains, making it difficult for relief agencies to deliver goods and services to victims.
7. Hurricane Dorian is mentioned as an example of a disaster that threatened supply chains needed for recovery efforts.
8. Blockchain technology has the potential to help address obstacles in traditional supply chain implementations in the context of disaster recovery.


# Supply chain challenges and blockchain solutions

1. Lack of transparency: In traditional supply chains, data is often siloed within each organization, limiting visibility for other participants. Blockchain provides a transparent and shared ledger where every transaction and movement of products or services is recorded. All participants can view the data, ensuring transparency throughout the supply chain.

2. Lack of traceability: Without transparent data, tracing the origin and journey of a product becomes difficult. Blockchain enables end-to-end traceability by recording every transaction and movement on the decentralized ledger. Participants can track a product's current location and trace its entire history back to the original producer.

3. Time lag: Physical transfers in the supply chain often encounter delays, causing discrepancies between the timing of product movements and data updates. With blockchain and smart contracts, transactions can be automated, reducing human interaction and processing time. This enables real-time updates and eliminates the need to wait for data processing during specific work hours.

4. Data inconsistency and loss: Data inconsistencies and loss can occur when transferring data between different organizations and systems. By using blockchain, all participants enter and access data through the smart contract interface, ensuring consistency throughout the supply chain. Data is securely stored on the blockchain, reducing the risk of loss or tampering.

5. Non-standard and unavailable status tracking: Traditional supply chains often lack a standardized approach for tracking the status of products or services. Blockchain addresses this by providing a unified and accessible platform. Participants can query the blockchain to obtain real-time information about the location and status of a product, regardless of which organization or step in the supply chain they are involved with.

Overall, blockchain technology offers transparency, traceability, reduced time lag, data consistency, and standardized tracking capabilities, effectively addressing the challenges faced in supply chain implementations.



# Blockchain solution examples

1. Certified Origins Italia:
   - Producer of high-quality extra-virgin olive oil.
   - Challenges in the olive oil industry with fraud and authenticity.
   - Implemented blockchain solution with Oracle to boost consumer confidence.
   - Customers can use a mobile app to trace every bottle of olive oil back to its origin.

2. Disaster Recovery Example:
   - PO8, a Bahama-based blockchain company, raising crypto for Hurricane Dorian relief.
   - PO8 is a blockchain ecosystem for marine archeology and treasure hunting.
   - Investors can buy PO8 tokens to fund recovery efforts.
   - Found artifacts are auctioned off, and buyers can use PO8 tokens for purchases.

3. Addressing Supply Chain Issues with Blockchain:
   - Blockchain provides solutions to challenges in supply chain management.
   - Certified Origins Italia's blockchain implementation enhances consumer trust.
   - PO8's blockchain approach enables fundraising and artifact purchases using cryptocurrency.

4. Introduction to Cryptocurrency Tokens:
   - Explanation of PO8 tokens as a form of cryptocurrency.
   - Tokens can be used to invest in PO8 and purchase artifacts in the auction.
   - Ethereum mentioned as the blockchain platform used to create tokens.


# Supply chain project

1. Introduction:
   - Purpose: Developing a Supply Chain Application on the Blockchain.
   - Goal: Connect producers to consumers, manage products and services, reduce costs, offer transparency, and visibility.

2. Data Types:
   - Assets: Products that can be bought by consumers.
   - Participants: Entities involved in the supply chain (manufacturers, suppliers, shippers, and consumers).
   - Ownership: Determines the current participant who owns a product at a certain point in time.
   - Payment Token: Used for participants to pay each other during ownership transfers.

3. Functions (Token Side):
   - Initialize Tokens: Create a pool of payment tokens.
   - Transfer Tokens: Allow participants to transfer tokens among themselves.
   - Authorize Token Payments: Enable token transfers on behalf of another participant.


# Designing Your supply-chain App

1. Objective: Develop a Supply Chain Application on the Blockchain to connect producers to consumers, manage products and services, reduce costs, and provide transparency and visibility.

2. Data Storage: Store data related to the supply chain application.

3. Types of Data:
   a. Assets: Products that can be bought by consumers.
   b. Participants: Entities involved in the supply chain, such as manufacturers, suppliers, shippers, and consumers.
   c. Ownership: Define ownership structure to track product ownership over time.
   d. Payment Tokens: Tokens used by participants for payment as ownership changes.

4. Smart Contract Components:
   a. Data Items (Nouns): Assets, participants, ownership, payment tokens.
   b. Functions (Verbs): Capabilities to perform actions in the supply chain.

5. Token Capabilities:
   a. Initialize Tokens: Function to set up an initial pool of payment tokens.
   b. Transfer Tokens: Function to enable token transfers among participants.
   c. Authorized Token Payments: Function to authorize token transfers on behalf of another agent.

6. Supply Chain Capabilities:
   a. Add and Update Participants: Function to include new participants and update participant information.
   b. Move Products: Function to facilitate the movement of products along the supply chain.
   c. Add and Update Assets: Function to add and update information related to the products being tracked.
   d. Asset Tracking: Separate functions to track the current location of a product and trace its provenance.

7. Purpose: Achieve cost reduction, transparency, and efficient management of products and services in the supply chain.

8. Conclusion: Understand the objectives, data elements, and functions required, and start working on implementing the code for the supply chain application.

 # Token Smart Contract Details

1. Introduction:
   - Purpose: Create a payment token smart contract for the supply chain application.
   - Reasons for creating a token: Demonstrate token creation and restrict participation to authorized supply chain participants.

2. Token Use Analogy: Drawing a parallel to arcade tokens, where specific tokens are required to access games, and general currency is used for other purchases.

3. Choice of Token Standard: ERC-20 is selected due to its common usage and compatibility with Ethereum wallets.

4. ERC-20 Token Data Items (Minimum):
   - totSupply: Total number of tokens in circulation.
   - Name: Descriptive name for the token.
   - Decimals: Precision used when displaying token amounts.
   - Symbol: Short identifier for the token.
   - Balances: Current balance of each participating account mapped to their address.
   - Allowed: Number of tokens authorized for transfer between accounts mapped to the sender's address.

5. Functions for ERC-20 Token (Mandatory):
   - totalSupply: Returns the current total number of tokens.
   - balanceOf: Returns the balance of a specific account.
   - allowance: Returns the remaining number of tokens allowed to be transferred between accounts.
   - transfer: Transfers tokens from the owner to a target account.
   - transferFrom: Transfers tokens from one specific account to another specific account.
   - approve: Sets the maximum allowed number of tokens that can be transferred between specific accounts.

6. Example of Approve Function: Drawing a parallel to a purchase order where a maximum authorized amount is set for transferring tokens without additional authorization.

7. Conclusion: Explanation of the ERC-20 token's functionality within the supply chain application.


 # Supply chain smart contract details

1. Introduction:
   - Overview of the supply chain smart contract.
   - Purpose: Manage products, participants, and ownership transfers within the supply chain.

2. Data Structures:
   - Product Structure:
     - Attributes: Model number, part number, cost, serial number, etc.
     - Mapping: Creates a list of products.

   - Participant Structure:
     - Attributes: Username, password, Ethereum address, etc.
     - Mapping: Provides a list of participants.

   - Ownership Structure:
     - Attributes: Product ID, owner ID, transaction time.
     - Records ownership details at a specific point in time.

3. Global Scalar Variables:
   - Product ID, participant ID, and owner ID.
   - Used to uniquely identify products, participants, and owners within the structures.

4. Functionality:
   - Participant Functions:
     - AddParticipant: Creates a new participant.
     - GetParticipant: Retrieves participant information.

   - Product Functions:
     - AddProduct: Adds a new product.
     - GetProduct: Retrieves product information.

   - Ownership Functions:
     - NewOwner: Transfers ownership of a product.
     - GetProvenance: Retrieves the chain of ownership records for a product.
     - GetOwnership: Retrieves ownership record for a specific point in time.

   - Authentication Function:
     - AuthenticateParticipant: Validates participant credentials for security purposes.

5. Note on Deletion:
   - Participants and products are not deleted, but can be disabled or made inactive in a real application.

 

 

