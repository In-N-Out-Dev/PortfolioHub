import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';
import PortfolioDetailed from 'pages/portfolio/PortfolioDetailed';

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/portfolio"
        element={<PortfolioDetailed />}
      />
    </Routes>
  );
};

export default Router;
