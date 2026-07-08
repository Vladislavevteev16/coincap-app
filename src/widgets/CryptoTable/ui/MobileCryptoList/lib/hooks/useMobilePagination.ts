import { useState, useMemo } from "react";

import type { Asset } from "@/shared/api/coincap.types";

export const useMobilePagination = (
  data: Asset[],
  itemsPerPage: number = 10,
) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return data.slice(start, end);
  }, [data, page, itemsPerPage]);

  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return {
    currentData,
    page,
    total: data.length,
    totalPages,
    goToPage,
  };
};
