import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { loadItemsFromStorage } from "@/shared/lib/storage/localStorageMiddleware";

import type { Asset } from "@/shared/api/coincap.types";

import type { PortfolioState, SavedItems } from "./portfolio.types";

const initialState: PortfolioState = {
  items: loadItemsFromStorage(),
  selectedAsset: null,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<SavedItems>) => {
      const findAsset = state.items.find((i) => i.id === action.payload.id);

      if (findAsset) {
        const totalQty = findAsset.qty + action.payload.qty;
        const totalCost =
          findAsset.qty *
            Number(findAsset.purchasePriceUsd || findAsset.priceUsd) +
          action.payload.qty * Number(action.payload.priceUsd);

        findAsset.qty = totalQty;
        findAsset.purchasePriceUsd = (totalCost / totalQty).toString();
        findAsset.priceUsd = action.payload.priceUsd;
      } else {
        state.items.push({
          ...action.payload,
          purchasePriceUsd: action.payload.priceUsd,
        });
      }
    },
    removeAsset: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setSelectedAsset: (state, action: PayloadAction<Asset>) => {
      state.selectedAsset = action.payload;
    },
    updatePortfolioPrices: (state, action: PayloadAction<Asset[]>) => {
      const assets = action.payload;
      state.items.forEach((item) => {
        const currentAsset = assets.find((a) => a.id === item.id);
        if (currentAsset) {
          item.priceUsd = currentAsset.priceUsd;
        }
      });
    },
  },
  selectors: {
    selectAssetList: (state) => state.items,
    selectCurrentAsset: (state) => state.selectedAsset,
    selectTotalPortfolioPrice: (state) =>
      state.items.reduce((acc, i) => acc + i.qty * Number(i.priceUsd), 0),
    selectQtyAssets: (state) => state.items.length,
  },
});

const selectItems = (state: { portfolio: PortfolioState }) =>
  state.portfolio.items;

export const selectTotalPortfolioPrice = createSelector(
  [selectItems],
  (items) => items.reduce((acc, i) => acc + i.qty * Number(i.priceUsd), 0),
);

export const selectTotalPurchasePrice = createSelector([selectItems], (items) =>
  items.reduce(
    (acc, i) => acc + i.qty * Number(i.purchasePriceUsd || i.priceUsd),
    0,
  ),
);

export const selectTotalProfit = createSelector(
  [selectTotalPortfolioPrice, selectTotalPurchasePrice],
  (totalCurrent, totalPurchase) => totalCurrent - totalPurchase,
);

export const selectTotalProfitPercent = createSelector(
  [selectTotalPortfolioPrice, selectTotalPurchasePrice],
  (totalCurrent, totalPurchase) => {
    if (totalPurchase === 0) return 0;
    return ((totalCurrent - totalPurchase) / totalPurchase) * 100;
  },
);

export const {
  addAsset,
  removeAsset,
  setSelectedAsset,
  updatePortfolioPrices,
} = portfolioSlice.actions;

export const { selectAssetList, selectCurrentAsset, selectQtyAssets } =
  portfolioSlice.selectors;

export default portfolioSlice.reducer;
