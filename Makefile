init:
	cargo install --git https://github.com/gakonst/foundry --bin forge --locked
run_app:
	(cd decentralized-email-frontend && npm install && npm start) 
test_contracts:
	forge test --root contracts/ -o contracts/ 
