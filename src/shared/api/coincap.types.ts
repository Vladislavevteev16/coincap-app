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
