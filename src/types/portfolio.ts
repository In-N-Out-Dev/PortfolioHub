export interface PortfolioData {
  no: number;
  title: string;
  start: string;
  end?: string;
  skills: string[];
}

export type PortfolioState = 'GALLERY' | 'LIST';

export type PortfolioHeaderProps = {
  portfolioState: PortfolioState;
  setPortfolioState: React.Dispatch<React.SetStateAction<PortfolioState>>;
};

export type PortfolioCartListProps = {
  portfolios: PortfolioData[];
  openedWidth: number;
};
