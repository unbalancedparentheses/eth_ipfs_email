# eth_ipfs_email

1. Makefile que levanta todo, baja dependencias. Lo ideal seria que use Nix

2. Metamask es un plugin que permite compartir tu wallet con el frontend (OAuth)

3. HTML/Ethers es el frontend (Javascript). form con el mensaje y un boton que es enviar

4. El boton manda el mensaje encriptado a IPFS (Postgres) y manda el hash del mensaje en IPFS y la clave publica a Ethereum.

5. Truffle/Ethereum es el backend (Elixir)
