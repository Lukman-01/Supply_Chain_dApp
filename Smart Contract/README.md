# Explanation of Supply Chain Contract

1. Contract Initialization:
   - The contract is deployed, initializing the `product_id`, `participant_id`, and `owner_id` variables to 0.
   - Empty mappings are created for `products`, `participants`, `ownerships`, and `productTrack`.

2. Adding Participants:
   - Participants can be added using the `addParticipant` function, providing their name, password, Ethereum address, and participant type.
   - Each participant is assigned a unique participant ID (`participant_id`).
   - The participant details are stored in the `participants` mapping.

3. Adding Products:
   - Only participants with the participant type "Manufacturer" can add products using the `addProduct` function.
   - Product details, such as model number, part number, serial number, cost, and owner, are provided.
   - The product is assigned a unique product ID (`product_id`).
   - The product details are stored in the `products` mapping.

4. Transferring Ownership:
   - Ownership of a product can be transferred from one participant to another using the `newOwner` function.
   - The function requires the IDs of the current owner (`_user1Id`), the new owner (`_user2Id`), and the product (`_prodId`).
   - The function checks the participant types of both owners to ensure a valid ownership transfer.
   - If the transfer is valid, a new ownership entry is created, and the product owner and ownership details are updated.
   - The ownership ID is stored in the `ownerships` mapping, and the ownership ID is added to the `productTrack` mapping for the specific product.
   - An event `TransferOwnership` is emitted.

5. Retrieving Participant and Product Information:
   - Participants and product details can be retrieved using their respective IDs.
   - The `getParticipant` function returns the participant's name, address, and type.
   - The `getProduct` function returns the product's model number, part number, serial number, cost, owner address, and manufacturing timestamp.

6. Retrieving Product Provenance:
   - The `getProvenance` function returns an array of ownership IDs (`productTrack`) associated with a specific product ID.
   - This provides a track record of ownership transfers for the product.

7. Authenticating Participants:
   - The `authenticateParticipant` function can be used to authenticate a participant by comparing their ID, username, password, and participant type.
   - If all conditions are met, the function returns `true`, indicating successful authentication.

Now, let's walk through an example scenario:

1. Participants are added to the contract:
   - Participant 1 with ID 0: Manufacturer
   - Participant 2 with ID 1: Supplier
   - Participant 3 with ID 2: Consumer

2. A product is added by the manufacturer:
   - The manufacturer (Participant 1) adds a product with ID 0 and provides its details.
   - The product is associated with the manufacturer's address and current timestamp.

3. Ownership is transferred:
   - The manufacturer (Participant 1) transfers ownership of the product (ID 0) to the supplier (Participant 2) using the `newOwner` function.
   - The ownership details are updated, and the ownership transfer is recorded in the `productTrack` mapping.

4. Retrieving information:
   - Information about participants and products can be retrieved using their respective IDs.
   - For example, `getParticipant(0)` returns the details of Participant 1 (Manufacturer).
   - Similarly, `getProduct(0)` returns the details of the product, including the current owner


5. Product provenance:
   - The `getProvenance(0)` function returns an array of ownership IDs associated with the product (ID 0).
   - This allows tracking the ownership history of the product.

6. Participant authentication:
   - Participants can be authenticated using the `authenticateParticipant` function by providing their ID, username, password, and participant type.
   - If the provided information matches the stored participant details, the function returns `true`, indicating successful authentication.

