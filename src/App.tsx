import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Client } from '@elastic/elasticsearch';

function App() {
  async function checkClusterStatus() {
    const client = new Client({
      node: process.env.REACT_APP_API_URL,
    });

    try {
      const response = await client.cluster.health();
      console.log(response);
    } catch (error) {
      console.error('Error fetching cluster status:', error);
    }
  }

  useEffect(() => {
    checkClusterStatus()
  }, [])

  return (
    <h1>Hello world</h1>
  );
}

export default App;
