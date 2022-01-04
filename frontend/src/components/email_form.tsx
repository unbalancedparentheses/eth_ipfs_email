import { useState } from "react"
import { create } from "ipfs-http-client";

const client = create('https://ipfs.infura.io:5001/api/v0' as any);

export const EmailForm = () => {

  const [to, setTo] = useState<string>("")
  const [msg, setMsg] = useState<string>("")
  const [msgUrl, setMsgUrl] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const created = await client.add(msg);
    setMsgUrl(`https://ipfs.infura.io/ipfs/${created.path}`);
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
