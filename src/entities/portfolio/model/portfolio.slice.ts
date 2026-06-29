import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { PorfolioState } from "./portfolio.types";

import type { Asset } from "@/shared/api/coincap.types";

const initialState: PorfolioState = {
  items: [],
  selectedAsset: null,
};

export const porfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<Asset>) => {
      state.items.push(action.payload);
    },
    setSelectedAsset: (state, action: PayloadAction<Asset>) => {
      state.selectedAsset = action.payload;
    },
  },
  selectors: {
    selectAssetList: (state) => state.items,
    selectCurrentAsset: (state) => state.selectedAsset,
  },
});

export const { addAsset, setSelectedAsset } = porfolioSlice.actions;
export const { selectAssetList, selectCurrentAsset } = porfolioSlice.selectors;

export default porfolioSlice.reducer;
