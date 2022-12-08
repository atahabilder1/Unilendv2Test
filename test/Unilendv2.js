const Migrations = artifacts.require("Migrations");

contract('Migrations', (accounts) => {
  it('should  deploy the contract in the Ganache account 1', async () => {
    const MigrationInstance = await Migrations.deployed();
    const owner = await MigrationInstance.owner();
    console.log(owner);
    assert.equal(owner, accounts[0], "The adress in not matched");
  });



});
