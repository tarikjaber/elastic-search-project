import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Footer from './components/Footer/Footer';
import Navigationbar from './components/NavBar/NavBar';
import './App.css';

function App() {
  async function checkClusterStatus() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const key = process.env.REACT_APP_ACCESS_KEY;
    const secret = process.env.REACT_APP_ACCESS_SECRET;
    console.log(key)
    console.log(secret)
    const base64Credentials = btoa(`${key}:${secret}`);

    const headers = {
      'Authorization': `Basic ${base64Credentials}`
    };
    console.log(apiUrl);

    try {
      const response = await fetch(`${apiUrl}_cluster/health`, { headers });
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
    <div className="App">
      <Navigationbar />
      <Footer />
    </div>
  );
}

export default App;
