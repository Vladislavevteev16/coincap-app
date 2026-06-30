import type { Middleware } from "@reduxjs/toolkit";

import {
  addAsset,
  removedAsset,
  updatePortfolioPrices,
  //   clearPortfolio,
} from "@/entities/portfolio/model/portfolio.slice";

import type { SavedItems } from "@/entities/portfolio/model/portfolio.types";

import type { RootState } from "@/app/store";

export const STORAGE_KEY = "portfolio_items";

const saveItemsToStorage = (items: SavedItems[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
};

export const portfolioMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    if (action instanceof Object && "type" in action) {
      const typedAction = action.type as
        | "portfolio/addAsset"
        | "portfolio/removedAsset"
        | "portfolio/updatePortfolioPrices";
      if (
        [
          addAsset.type,
          removedAsset.type,
          updatePortfolioPrices.type,
          // clearPortfolio.type,
        ].includes(typedAction)
      ) {
        const state = store.getState() as RootState;
        const items = state.portfolio.items;

        const saved = localStorage.getItem(STORAGE_KEY);
        const savedItems = saved ? JSON.parse(saved) : [];

        if (JSON.stringify(items) !== JSON.stringify(savedItems)) {
          saveItemsToStorage(items);
        }
      }
    }

    return result;
  };
