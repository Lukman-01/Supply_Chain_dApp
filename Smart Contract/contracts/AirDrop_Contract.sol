// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./erc20Token_Contract.sol";

contract SupCoinAirdrop {
    SupCoin public token; // Declare the token contract instance

    constructor(address _tokenAddress) {
        token = SupCoin(_tokenAddress); // Initialize the token contract instance
    }

    /**
     * @dev Function to distribute tokens to multiple recipients.
     * @param recipients The array of recipient addresses.
     * @param amount The amount of tokens to be transferred to each recipient.
     */
    function airdropTokens(address[] memory recipients, uint256 amount) public {
        for (uint256 i = 0; i < recipients.length; i++) {
            token.transfer(recipients[i], amount); // Transfer tokens from the token contract to each recipient
        }
    }
}
