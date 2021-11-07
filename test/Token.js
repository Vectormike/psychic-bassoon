const { expect } = require('chai');
const { ethers } = require('ethers');

describe('Token contract', () => {
  let Token, token, addr1, addr2;

  beforeEach(async () => {
    Token = await ethers.getContractFactory('Token');
    token = await Token.deploy();
    [owner, addr1, addr2, _] = await ethers.getSigners();
  });

  describe('Deployment', () => {
    it('should set the right owner', async () => {
      expect(await token.owner().to.equal(owner.address));
    });
  });

  // describe('T')
});
