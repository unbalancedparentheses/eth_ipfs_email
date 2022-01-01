import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './App.css';
import { ethers } from "ethers";


function App() {
  const provider = new ethers.providers.Web3Provider((window as any).ethereum);

  async function getAccounts(provider: any) {
    const val = await provider.send("eth_requestAccounts", []);
    console.log(val);
  }

  return (
    <div >
      <Button type="primary" onClick={async () => { await getAccounts(provider); }}>
        Accounts
      </Button>
    </div>
  );
}

export default App;
