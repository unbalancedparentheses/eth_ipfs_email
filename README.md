# eth_ipfs_email

0. Check design docs: https://mirror.xyz/madhavanmalolan.eth/JTBs4nDH9oBpmPYwxqt9RNM61FvET2AsvXEbNcoT4_A

1. Makefile to launch dependencies using nix and docker-compose
2. Add an HTML + JS button to login using metamask
3. The HTML should have a body and a button to encrypt and upload the body. The body should be sent encrypted with the public key to IPFS.
4. The IPFS hash plus the public key should be sent using Ethers to a local ethereum node  
5. Ethers should run the solidity code that reiceves the user public key and its hash
6. Use the graph to list all the message of the user

Up to here the functionality is similar to a notepad instead of a mailing system. After step it works as a mail system

8. Now messages should be sent to another user/key. It might be a good idea to use a merkle tree for this https://github.com/Anish-Agnihotri/merkle-airdrop-starter
9. Support non metamask wallets
10. Deploy in eth tesnet
11. Deploy in polygon and arbitrum


## Quick start

- make init to start repo 
- make run_app to start the web service
- make run_node to start the local blockchain
- make test_contracts to build and test the contracts
- deploy_on_local_node to deploy contracts on local node
