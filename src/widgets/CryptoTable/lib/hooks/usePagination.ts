import { useState } from "react";

export const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState<number>(initialPage);
  return { page, setPage };
};
