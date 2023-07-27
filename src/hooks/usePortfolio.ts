import { useState } from 'react';

import PORTFOLIO_DATA from 'contents/portfolioData';

import type { PortfolioData } from 'types/portfolio';

const initPortoflioData = (portfolios: PortfolioData[]) => {
  const ret = [...portfolios];
  const totalCnt = portfolios.length;
  if (totalCnt < 5) {
    while (ret.length < 5) {
      ret.push(...portfolios);
    }
  }
  return ret.slice(0, 5);
};

export const usePortfolioGallery = () => {
  const totalCnt = PORTFOLIO_DATA.length;
  const [firstNo, setFirstNo] = useState(0);
  const [portfolios, setPortfolios] = useState<PortfolioData[]>(initPortoflioData(PORTFOLIO_DATA));

  const handleIncreaseOpenedNo = () => {
    setFirstNo((prev) => (prev + 1) % totalCnt);
    setPortfolios((prev) => {
      const next = [...prev];
      next.pop();
      next.unshift(PORTFOLIO_DATA[(firstNo + 1) % totalCnt]);
      return next;
    });
  };

  const handleDecreaseOpenedNo = () => {
    setFirstNo((prev) => (prev - 1 + totalCnt) % totalCnt);
    setPortfolios((prev) => {
      const next = [...prev];
      next.shift();
      next.push(PORTFOLIO_DATA[(firstNo - 1 + totalCnt) % totalCnt]);
      return next;
    });
  };

  return {
    portfolios,
    handleIncreaseOpenedNo,
    handleDecreaseOpenedNo,
  };
};
