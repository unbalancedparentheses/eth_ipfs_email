// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.11;

contract EmailStorage {
    struct Message {
        address from;
        address to;
        uint32 ipfs_hash;
    }

    mapping(address => Message[]) private messages_to;

    function send(
        address to,
        uint32 ipfs_hash
    ) external {
        Message[] storage messages = messages_to[to];
        messages.push(Message(msg.sender, to, ipfs_hash));
    }

    function list_messages(address to)
        external
        view
        returns (Message[] memory)
    {
        return messages_to[to];
    }
}
