import { useState, useEffect, useDeferredValue } from 'react'
import PropTypes from 'prop-types'
import millify from "millify"
import { Row, Col, Input, Card } from "antd"
import { Link, useLocation } from "react-router-dom"

import { useGetCryptosQuery } from '../services/cryptoapi'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  if (isFetching) return 'Loading...'

  return (
    <>
      { !simplified && <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={handleChange}
          />
        </div>}
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {
          cryptos?.map((crypto) => (
            <Col key={crypto?.uuid} xs={24} sm={12} lg={6}
              className='crypto-card'
            >
              { console.log({ crypto })}
              <Link to={`/crypto/${crypto?.uuid}`}>
                <Card
                title={`${crypto?.rank}. ${crypto?.name} (${crypto?.symbol})`}
                  extra={<img className='crypto-image' src={crypto?.iconUrl}/>}
                  hoverable
                  >
                    <p>Price: ${millify(crypto?.price)}</p>
                    <p>Market Cap: ${millify(crypto?.marketCap)}</p>
                      <p span={12}>Change 1h: {`${crypto?.
                      change >= 0 ? '+' : ''}$
                      ${millify(crypto?.change)}%`}</p>
                  </Card>              
              </Link>
            </Col>
            ))
        }
      </Row>
    </>
  )
}

Cryptocurrencies.propTypes = {
  simplified: PropTypes.bool
}

export default Cryptocurrencies