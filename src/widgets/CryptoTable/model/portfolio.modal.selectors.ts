import { useAppSelector } from "@/app/store";

import { selectCurrentAsset } from "@/entities/portfolio/model/portfolio.slice";

export const useCurrentAsset = () => useAppSelector(selectCurrentAsset);
