import { useState } from 'react';

const usePortfolioGallery = (portfolioData: PortfolioData[]) => {
  const totalCnt = portfolioData.length;
  const [openedNo, setOpenedNo] = useState(0); // totalCnt 미만으로
  /**
   * TODO: portfolioCnt도 커스텀할 수 있게 만들기
   */
  const [portfolioCnt, setPortfolioCnt] = useState(5);
  const halfCnt = Math.floor(portfolioCnt / 2);
  const boundaryCnt = openedNo + halfCnt + 1;
  const initPortfolio =
    halfCnt <= openedNo
      ? [
          ...portfolioData.slice(openedNo - halfCnt, boundaryCnt),
          ...(boundaryCnt >= totalCnt ? portfolioData.slice(0, boundaryCnt - totalCnt) : []),
        ]
      : [
          ...portfolioData.slice(totalCnt - (portfolioCnt - boundaryCnt), totalCnt),
          ...portfolioData.slice(0, boundaryCnt),
        ];

  const [portfolios, setPortfolios] = useState(initPortfolio);

  const handleIncreaseOpenedNo = () => {
    setOpenedNo((prev) => (prev + 1) % totalCnt);
    setPortfolios((prev) => [...prev.slice(1), portfolioData[boundaryCnt % totalCnt]]);
  };

  const handleDecreaseOpenedNo = () => {
    setOpenedNo((prev) => (prev - 1 + totalCnt) % totalCnt);
    setPortfolios((prev) => [
      portfolioData[(openedNo - halfCnt - 1 + totalCnt) % totalCnt],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  return { portfolios, handleIncreaseOpenedNo, handleDecreaseOpenedNo };
};

export default usePortfolioGallery;
