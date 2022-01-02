init:
	cargo install --git https://github.com/gakonst/foundry --bin forge --locked
	git submodule init
	git submodule update
run_app:
	(cd decentralized-email-frontend && npm install && npm start) 
test_contracts:
	forge test --root contracts/
