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

  it("Should add a product", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", ethers.constants.AddressZero, "Manufacturer");
    await supplyChain.addProduct(0, "Model123", "Part456", "Serial789", 100);

    const product = await supplyChain.getProduct(0);

    expect(product.modelNumber).to.equal("Model123");
    expect(product.partNumber).to.equal("Part456");
    expect(product.serialNumber).to.equal("Serial789");
    expect(product.cost).to.equal(100);
  });

  it("Should transfer ownership of a product", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", ethers.constants.AddressZero, "Manufacturer");
    await supplyChain.addParticipant("Supplier", "password", ethers.constants.AddressZero, "Supplier");
    await supplyChain.addProduct(0, "Model123", "Part456", "Serial789", 100);

    await supplyChain.newOwner(0, 1, 0);
    const product = await supplyChain.getProduct(0);

    expect(product.productOwner).to.equal(ethers.constants.AddressZero);
  });

  it("Should retrieve product track (ownership history)", async function () {
    await supplyChain.addParticipant("Manufacturer", "password", ethers.constants.AddressZero, "Manufacturer");
    await supplyChain.addParticipant("Supplier", "password", ethers.constants.AddressZero, "Supplier");
    await supplyChain.addProduct(0, "Model123", "Part456", "Serial789", 100);

    await supplyChain.newOwner(0, 1, 0);
    const productTrack = await supplyChain.getProvenance(0);

    expect(productTrack.length).to.equal(1);
  });

  
});
