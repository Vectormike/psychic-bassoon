pragma solidity ^0.8.3;

// create a token
contract Token {
    string public name = "Vectormike";
    string public symbol = "VEC";
    uint256 totalSupply = 100;
    address public owner;
    mapping(address => uint256) balances;

    constructor() public {
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transferToken(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Inenough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }
}
