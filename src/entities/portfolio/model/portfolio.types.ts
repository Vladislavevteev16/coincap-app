import type { Asset } from "@/shared/api/coincap.types";

export type SavedItems = Pick<Asset, "name" | "id" | "priceUsd"> & {
  qty: number;
  purchasePriceUsd?: string;
};

export type PorfolioState = {
  items: SavedItems[];
  selectedAsset: Asset | null;
  isOpenModalPortfolio: boolean;
};
