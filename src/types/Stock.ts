export interface Stock {
  name: string;
  ticker: string;
  type: StockType;
  trend?: Trend;
  estimate?: PriceRange;
  pressures: PriceRange[];
  supports: PriceRange[];
}

interface PriceRange {
  upperBound: number;
  lowerBound: number;
}

export enum StockType {
  STOCK,
  ETF,
}

export enum Trend {
  UP,
  DOWN,
  FLAT,
}
