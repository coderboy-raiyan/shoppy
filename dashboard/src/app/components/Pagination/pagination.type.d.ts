export type IPagination = {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalItem: number;
  perPage: number;
  showItem: number;
};
