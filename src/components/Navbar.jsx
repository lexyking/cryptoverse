import { Button, Menu, Avatar, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <Avatar shape='square' size={64} src={Logo}
        style={{ color: '#fff' }} />
        <Typography.Title level={3} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
    </nav>
  )
}

export default Navbar;