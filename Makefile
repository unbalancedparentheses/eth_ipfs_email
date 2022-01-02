init:
	cargo install --git https://github.com/gakonst/foundry --bin forge --locked
	cargo install --git https://github.com/gakonst/foundry --bin cast
	git submodule init
	git submodule update
	(cd hh_node && npm install --save-dev hardhat)
run_app:
	(cd frontend && npm install && npm start) 
test_contracts:
	forge test --root contracts/
run_node:
	(cd hh_node && npx hardhat node)

