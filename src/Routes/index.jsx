import { Routes, Route } from "react-router"
import {Homepage, News, CryptoDetails, CryptoCurrencies, Exchanges} from '../components';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" 
      element={<Homepage />}/>
      <Route exact path="/exchanges"
      element={<Exchanges />} />
      <Route exact path="/cryptocurrenries"
      element={<CryptoCurrencies />} />
      <Route exact path="/crypto/:coinId"
      element={<CryptoDetails />} />
      <Route exact path="/news" 
      element={<News />} />
    </Routes>
  )
}

export default AppRoutes