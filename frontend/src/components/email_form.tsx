import { useState } from "react"
import { create } from "ipfs-http-client";
import { ethers } from "ethers";
import MailerJson from "./../contracts_abis/Mailer.json"

const client = create('https://ipfs.infura.io:5001/api/v0' as any);

export const EmailForm = (provider: ethers.providers.Web3Provider) => {

  const [to, setTo] = useState<string>("")
  const [msg, setMsg] = useState<string>("")
  const [msgUrl, setMsgUrl] = useState("")

  //This is hardcoded
  //We need to update it to the right one when the contract
  //gets deployed
  const contract_address = 
    "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const created = await client.add(msg);
    setMsgUrl(`https://ipfs.infura.io/ipfs/${created.path}`);

    //new ethers.Contract( address , abi , signerOrProvider )
    //Uses first account
    const signer = await provider.getSigner();

    const mailer_contract = new ethers.Contract(contract_address, MailerJson.abi, signer)

    const accounts = await provider.listAccounts();
    const to_account = accounts[0];

    mailer_contract.send_email(to_account, { gasLimit: 400000 })
  }

  return (
    <>
      <h3>ETH IPFS EMAIL</h3>
      <form onSubmit={handleSubmit}>
        <label>
          To:
          <br />
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <br />
          <textarea cols={30} rows={10} value={msg} onChange={(e) => setMsg(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Send" />
      </form>
      <br />
      <a href={msgUrl} target="_blank">{msgUrl}</a>      
    </>
  )
}
