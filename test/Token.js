const { expect } = require('chai');

describe('Token contract', () => {
  let Token, token, owner, addr1, addr2;

  beforeEach(async () => {
    Token = await ethers.getContractFactory('Token');
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    token = await Token.deploy();
  });

  describe('Deployment', () => {
    it('should set the right owner', async () => {
      expect(await token.owner()).to.equal(owner.address);
    });
  });

  describe('Transactions', () => {
    it('Should transfer tokens between accounts', async () => {
      await token.transfer(addr1.address, 50);
      const addr1Balance = await token.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      await token.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await token.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
  });
});
