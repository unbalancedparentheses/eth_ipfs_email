import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './App.css';
import { ethers } from "ethers";


function App() {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);

  const [accounts, setAccounts] = useState<string[]>([""]);


  async function getAccounts(provider: any) {
    const val = await provider.send("eth_requestAccounts", []);
    setAccounts(val)
    console.log(val)
    console.log(accounts)
  }

  return (
    <div>
      <div>      
        <b>
        Hola
        </b>
        <b>
          Tus cuentas conectadas son: {accounts}
        </b>
      </div>
    <Button type="primary" onClick={async () => { await getAccounts(provider); }}>
      Refresh
    </Button>
    </div>
  );
}

export default App;
