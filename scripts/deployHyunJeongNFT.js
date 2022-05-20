const hre = require("hardhat");

async function main() {
  const HyunJeongNFT = await hre.ethers.getContractFactory("HyunJeongNFT");
  const hyunJeongNFT = await HyunJeongNFT.deploy();

  await hyunJeongNFT.deployed();

  console.log("HyunJeongNFT deployed to:", hyunJeongNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//HyunJeongNFT deployed to: 0xd83f4e6E57C53Dc2FC50d88e56E790a5Be0D31ba
