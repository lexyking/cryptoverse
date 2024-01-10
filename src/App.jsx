// import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </main>
  );
}

export default App;
