interface PortfolioData {
  no: number;
  title: string;
  start: string;
  end?: string;
  skills: string[];
}

type PortfolioState = 'GALLERY' | 'LIST';

interface PortfolioHeaderProps {
  portfolioState: PortfolioState;
  setPortfolioState: React.Dispatch<React.SetStateAction<PortfolioState>>;
}

interface PortfolioCartListProps {
  portfolios: PortfolioData[];
  openedWidth: number;
}
