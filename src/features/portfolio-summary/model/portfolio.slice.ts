import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type PortfolioItem = {
  name: string;
  price: number;
  quantity: number;
  total: number;
};

type PortfolioProps = {
  savedCryptoItems: PortfolioItem[];
};

const initialState: PortfolioProps = {
  savedCryptoItems: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCryptoItem: (state, action: PayloadAction<PortfolioItem>) => {
      state.savedCryptoItems.push(action.payload);
    },
    removeCryptoItem: (state, action: PayloadAction<string>) => {
      state.savedCryptoItems = state.savedCryptoItems.filter(
        (item) => item.name !== action.payload,
      );
    },
    updateCryptoItem: (state, action: PayloadAction<PortfolioItem>) => {
      const index = state.savedCryptoItems.findIndex(
        (item) => item.name === action.payload.name,
      );
      if (index !== -1) {
        state.savedCryptoItems[index] = action.payload;
      }
    },
  },
  selectors: {
    getTotal: (state) =>
      state.savedCryptoItems.reduce((acc, item) => acc + item.total, 0),
    getSavedCryptoList: (state) => state.savedCryptoItems,
  },
});
