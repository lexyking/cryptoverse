import { Layout, Typography, Space } from 'antd';
import { Link } from 'react-router-dom';
import './App.css';
import {Navbar} from './components';
import AppRoutes from './Routes'

function App() {
  return (
    <main className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
           <AppRoutes />
          </div>
        </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color:'white', textAlign:'center'}}>
          Cryptoverse <br /> All rights reserved.
        </Typography.Title>
        <Space>
          <Link to={'/'}>Home</Link>
          <Link to={'/exchanges'}>Exchanges</Link>
          <Link to={'/news'}>News</Link>
        </Space>
      </div>
      </div>
    </main>
  );
}

export default App;
