init:
	cargo install --git https://github.com/gakonst/foundry --bin forge --locked
	cargo install --git https://github.com/gakonst/foundry --bin cast
	git submodule init
	git submodule update
run_app:
	(cd frontend && npm install && npm start) 
test_contracts:
	forge test --root contracts/
