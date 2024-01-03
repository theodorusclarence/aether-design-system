export function buildPaginationControl(
  currentPage: number,
  pageCount: number,
  delta = 1,
) {
  const rangeWithDots: (number | string)[] = [];

  const range = [...Array(pageCount)]
    .map((_, i) => i + 1)
    .map((page) => {
      if (
        Math.abs(page - 1) <= delta ||
        Math.abs(pageCount - page) <= delta ||
        Math.abs(currentPage - page) <= delta
      )
        return page;

      return -1;
    })
    .filter((page) => page !== -1);

  range.forEach((page, i) => {
    const previousPage = range[i - 1];
    if (page - previousPage > 1) rangeWithDots.push('...');
    rangeWithDots.push(page);
  });

  return rangeWithDots;
}
