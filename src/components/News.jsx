import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Select, Typography, Row, Col, Card } from 'antd';
import moment from 'moment';

// import { useGetCryptosQuery } from '../services/cryptoapi';
// import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetGoogleNewsQuery } from '../services/googleNewsApi';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {

  const topics = ['Europe', 'UK', 'Africa', 'Finance']
  
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  // const { data } = useGetCryptosQuery(100);
  const body = useMemo(() => ({
    "text": newsCategory,
    "region": "wt-wt",
    "max_results": simplified ? 6 : 12
  }), [simplified, newsCategory])
  const { data: googleNews } = useGetGoogleNewsQuery(body)
  // const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });

  if (!googleNews?.count) return 'Loading...';
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            defaultActiveFirstOption='Cryptocurrency'
            // defaultOpen='Cryptocurrency'
            defaultValue='Cryptocurrency'
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {topics.map((topic) => <Option key={topic} value={topic}>{topic}</Option>)}
          </Select>
        </Col>
      )}
      {googleNews.news.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card"
          >
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'grid',
                height: '100%',
                position: 'absolute',
                padding: '10px'
              }}
            >
              <div className="news-image-container">
                <Title
                  className="news-title"
                  level={4}
                >
                  {news.title.length > 50 ? `${news.title.substring(0, 50)}...` : news.title}
                </Title>
                <img style={{ maxHeight:'100px', maxWidth: '100px', objectFit: 'contain'}} src={news?.image || demoImage} alt="" />
              </div>
              <p>{news.body.length > 200 ? `${news.body.substring(0, 200)}...` : news.body}</p>
              <div className="provider-container">
                <div>
                  {/* <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" /> */}
                  <Text className="provider-name">{news.source}</Text>
                </div>
                <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

News.propTypes = {
  simplified: PropTypes.bool
}

export default News