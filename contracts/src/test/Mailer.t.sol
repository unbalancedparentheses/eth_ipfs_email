// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.11;

import "ds-test/test.sol";
import "../Mailer.sol";


contract MailerTest is DSTest, Mailer {

    Mailer mailer;

    function setUp() public {
        mailer = new Mailer();
    }

    function testSendMessage(address dst, uint32 ipfs_hash1, uint32 ipfs_hash2) 
    public {
        mailer.send_email(dst, ipfs_hash1);
        mailer.send_email(dst, ipfs_hash2);
        Email[] memory emails = mailer.list_messages(dst);
        assertEq(emails.length, 2);
        assertEq(emails[0].ipfs_hash, ipfs_hash1);
        assertEq(emails[1].ipfs_hash, ipfs_hash2);
        assertEq(emails[0].from, address(this));
        assertEq(emails[1].from, address(this));
    }
}
