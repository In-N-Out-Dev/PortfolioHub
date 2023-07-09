export interface PortfolioData {
  no: number;
  title: string;
  start: string;
  end?: string;
  skills: string[];
}

export type PortfolioCartListProps = {
  portfolios: PortfolioData[];
};
