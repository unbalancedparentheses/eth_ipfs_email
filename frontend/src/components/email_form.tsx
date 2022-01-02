import { useState } from "react"

export const EmailForm = () => {

  const [to, setTo] = useState<string>("")
  const [msg, setMsg] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert(msg)
    e.preventDefault();
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
    </>
  )
}
