const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SupplyChain", function () {
  let supplyChain;

  beforeEach(async function () {
    const SupplyChain = await ethers.getContractFactory("SupplyChain");
    supplyChain = await SupplyChain.deploy();
    await supplyChain.deployed();
  });

  it("Should add a participant", async function () {
    await supplyChain.addParticipant("Alice", "password", ethers.constants.AddressZero, "Manufacturer");
    const participant = await supplyChain.getParticipant(0);

    expect(participant.userName).to.equal("Alice");
    expect(participant.participantType).to.equal("Manufacturer");
  });

});
