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
  },
  selectors: {
    selectAssetList: (state) => state.items,
  },
});

export const { addAsset } = porfolioSlice.actions;
export const { selectAssetList } = porfolioSlice.selectors;

export default porfolioSlice.reducer;
