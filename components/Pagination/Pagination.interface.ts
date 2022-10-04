export interface PaginationProps {
  setPage: (page: number) => void;
  pageCount: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed: number;
  forcePage: number;
}
