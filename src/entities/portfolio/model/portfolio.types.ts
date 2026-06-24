import type { Asset } from "@/shared/api/coincap.types";

export type PorfolioState = {
  items: Asset[];
  selectedAsset: Asset | null;
};
