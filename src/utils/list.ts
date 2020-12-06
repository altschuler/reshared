import { useCallback, useMemo, useState } from 'react';
import { PaginationConfig } from 'antd/lib/pagination';

export interface UsePaginationOptions {
    pageSize?: number;
}

export const usePagination = (options?: UsePaginationOptions) => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(options?.pageSize || 10);
    const [total, setTotal] = useState(0);

    const handlePaginationChange = useCallback((page: number, pageSize: number) => {
        setPage(page);
        setPageSize(pageSize);
    }, []);

    const config = useMemo(
        () =>
            ({
                hideOnSinglePage: true,
                onChange: handlePaginationChange,
                current: page,
                pageSize,
                total,
            } as PaginationConfig),
        [handlePaginationChange, page, pageSize, total],
    );

    return { config, offset: (page - 1) * pageSize, limit: pageSize, setTotal };
};
