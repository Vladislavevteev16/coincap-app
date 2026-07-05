export type Asset = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
};

export type AssetsResponse = {
  data: Asset[];
  timestamp: number;
};

export type GetAssetsParams = {
  limit?: number;
  offset?: number;
  search?: string;
  ids?: string;
  sort?: "marketCapUsd" | "priceUsd" | "volumeUsd24Hr" | "changePercent24Hr";
  order?: "asc" | "desc";
};

export type AssetResponse = {
  data: Asset;
  timestamp: number;
};

export type AssetHistoryItem = {
  priceUsd: string;
  time: number;
};

export type AssetHistoryResponse = {
  data: AssetHistoryItem[];
  timestamp: number;
};

export type GetAssetHistoryParams = {
  interval?: "m1" | "m5" | "m15" | "m30" | "h1" | "h2" | "h6" | "h12" | "d1";
  start?: number;
  end?: number;
};

export type ChartDataPoint = {
  date: string;
  price: number;
};

export type PurchaseState = {
  amount: string;
  isLoading: boolean;
  error?: string;
};
