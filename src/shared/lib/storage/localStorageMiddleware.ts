import type { Middleware } from "@reduxjs/toolkit";

import type { SavedItems } from "@/entities/portfolio/model/portfolio.types";

import type { RootState } from "@/app/store";

const STORAGE_KEY = "portfolio_items";

const enum ActionName {
  addAsset = "portfolio/addAsset",
  removeAsset = "portfolio/removeAsset",
  updatePortfolioPrices = "portfolio/updatePortfolioPrices",
}

export const loadItemsFromStorage = (): SavedItems[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

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
      const typedAction = action.type as ActionName;
      if (
        [
          ActionName.addAsset,
          ActionName.removeAsset,
          ActionName.updatePortfolioPrices,
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
