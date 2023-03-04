pragma solidity ^0.8.0;

contract AttemptWinnerCaller {

    constructor() {}

    function callAttempt(address _contractAddress) public {
        (bool success, ) = _contractAddress.call(
            abi.encodeWithSignature("attempt()")
        );
        require(success, "attempt call failed");
    }

}
