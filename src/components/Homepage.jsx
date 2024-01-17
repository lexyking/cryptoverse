import { useEffect, useMemo, useState} from 'react'
import millify from "millify"
import { Typography, Row, Col, Statistic } from "antd"
import { Link } from "react-router-dom"
import { useGetCryptosQuery } from "../services/cryptoapi";
import { News, CryptoCurrencies } from '../components/index'

const { Title } = Typography;
const Homepage = () => {
  const {data, isFetching } = useGetCryptosQuery(10)

  if (isFetching) return 'Loading ...'
  // eslint-disable-next-line no-unsafe-optional-chaining
  const { total24hVolume, totalCoins, totalExchanges, totalMarketCap, totalMarkets } = data?.data?.stats

    return (
    <>
      <Title level={2} className="heading">Global Crypto Statistic</Title>
      <Row>
        <Col span={12} style={{ fontWeight: 'bold'}}><Statistic value={totalCoins} title='Total CryptoCurrencies'/></Col>
        <Col span={12} style={{ fontWeight: 'bold'}}><Statistic value={totalExchanges} title='Total Exchanges'/></Col>
        <Col span={12} style={{ fontWeight: 'bold'}}><Statistic value={millify(totalMarketCap)} title='Total Market Cap'/></Col>
        <Col span={12} style={{ fontWeight: 'bold'}}><Statistic value={millify(total24hVolume)} title='Total 24H volume'/></Col>
        <Col span={12} style={{ fontWeight: 'bold'}}><Statistic value={millify(totalMarkets)} title='Total Markets'/></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
        <Title level={3} className="show-more"><Link to={'/cryptocurrencies'}>Show more</Link></Title>
      </div>
      <CryptoCurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to={'/news'}>Show more</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage