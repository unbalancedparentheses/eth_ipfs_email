// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.11;

contract Mailer {

    struct Email {
        address from;
        uint32 ipfs_hash;
    }

    //The address works as an Inbox
    mapping(address => Email[]) private emails;

    function send_email( address to, uint32 ipfs_hash) external {
        emails[to].push(Email(msg.sender, ipfs_hash));
    }

    //We may need to return the Emails unpacked
    //This commentary should be updated when the integration 
    //with the front end is done
    function list_messages(address receiving_address) external view
        returns (Email[] memory)
    {    
        return emails[receiving_address];
    }
}
