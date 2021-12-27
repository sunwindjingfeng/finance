import { Stock, StockType, Trend } from "../types";

export function getAllStockData(): Stock[] {
  return generateMockData();
}

function generateMockData(): Stock[] {
  return [
    {
      name: "标普能源板块",
      ticker: "XLE",
      type: StockType.ETF,
      trend: Trend.DOWN,
      supports: [
        {
          upperBound: 53.9,
          lowerBound: 51.5,
        },
        {
          upperBound: 50.7,
          lowerBound: 47.5,
        },
        {
          upperBound: 46.9,
          lowerBound: 45.7,
        },
      ],
      pressures: [
        {
          upperBound: 56.4,
          lowerBound: 54.7,
        },
        {
          upperBound: 57.1,
          lowerBound: 58.45,
        },
        {
          upperBound: 59.3,
          lowerBound: 61.7,
        },
      ],
    },
    {
      name: "标普高科技板块",
      ticker: "XLK",
      type: StockType.ETF,
      supports: [
        {
          upperBound: 168.9,
          lowerBound: 165.2,
        },
        {
          upperBound: 163.8,
          lowerBound: 162.3,
        },
        {
          upperBound: 161.1,
          lowerBound: 156.6,
        },
      ],
      pressures: [
        {
          upperBound: 173.3,
          lowerBound: 171.1,
        },
      ],
    },
  ];
}
