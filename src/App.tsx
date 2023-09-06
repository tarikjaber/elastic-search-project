import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  async function checkClusterStatus() {
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
      const response = await fetch(`${apiUrl}_cluster/health`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching cluster status:', error);
    }
  }

  useEffect(() => {
    // Uncomment to actually check the cluster status
    checkClusterStatus()

    console.log("amongus")
  }, [])

  return (
    <h1>Hello world</h1>
  );
}

export default App;
