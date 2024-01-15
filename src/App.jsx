import { Layout, Typography, Space } from 'antd';
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
      </div>
      <div className="footer"></div>
    </main>
  );
}

export default App;
