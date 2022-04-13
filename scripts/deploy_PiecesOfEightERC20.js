async function main () {
  const POE = await ethers.getContractFactory('POEToken');
  console.log(`Deploying POE...`);
  const poe = await POE.deploy();
  await poe.deployed();
  console.log(`POE deployed to: ${poe.address}`);
}

main ()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });