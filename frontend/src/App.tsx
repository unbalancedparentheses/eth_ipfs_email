import { useState, useEffect } from 'react';
import { Button } from 'antd';
import './App.css';
import { ethers } from "ethers";
import { EmailForm } from "./components/email_form";

declare var window: any

const App = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const [accounts, setAccounts] = useState<string[]>([""]);


  const getAccounts = async (provider: ethers.providers.Web3Provider) => {
    const val = await provider.send("eth_requestAccounts", []);
    setAccounts(val)
  }

  useEffect(() => {
    getAccounts(provider)
    if(window.ethereum)
      window.ethereum.on('accountsChanged', (accounts: string[]) => setAccounts(accounts))
  }, [])

  return (
    <div>
      <div>
          Hi! Your connected account is: <b>{accounts}</b>
      </div>
      <EmailForm/>
    </div>
  );
}

export default App;
