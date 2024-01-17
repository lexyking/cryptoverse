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
      </div>
         
        {/* <Button className="menu-control-container"></Button> */}
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined />} key={'Home'}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key={'Cryptocurrencies'}>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} key={'Exchanges'}>
            <Link to='/exchanges'>Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} key={'News'}>
            <Link to='/news'>News</Link>
          </Menu.Item>
        </Menu>
    </nav>
  )
}

export default Navbar;