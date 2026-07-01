import { useAppSelector } from "@/app/store";

import { selectCurrentAsset } from "@/entities/portfolio/model";

export const useCurrentAsset = () => useAppSelector(selectCurrentAsset);
