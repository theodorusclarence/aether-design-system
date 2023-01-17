import { RowData, Table } from '@tanstack/react-table';
import * as React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';
import { buildPaginationControl } from '@/lib/pagination';

import Button from '@/components/buttons/Button';

type PaginationControlProps<T extends RowData> = {
  data: T[];
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

/**
 *
 * @see https://javascript.plainenglish.io/create-a-pagination-in-a-react-way-df5c6fe1e0c7
 */
export default function PaginationControl<T extends RowData>({
  className,
  data,
  table,
  ...rest
}: PaginationControlProps<T>) {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();
  const paginationControl = buildPaginationControl(currentPage, pageCount);

  const handlePageControlClick = (page: string | number) => {
    if (page !== '...') {
      table.setPageIndex((page as number) - 1);
    }
  };

  return (
    <div
      className={clsxm(
        'flex items-center justify-between gap-x-2  md:justify-end',
        className
      )}
      {...rest}
    >
      <div className='flex gap-1'>
        <Button
          variant='ghost'
          size='sm'
          leftIcon={HiChevronLeft}
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Prev
        </Button>
        {paginationControl.map((page, index) => (
          <Button
            key={index}
            variant='ghost'
            size='sm'
            className={clsxm(
              currentPage === page && 'bg-primary-400',
              'min-w-[2rem]'
            )}
            onClick={() => handlePageControlClick(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant='ghost'
          size='sm'
          rightIcon={HiChevronRight}
          disabled={
            !table.getCanNextPage() ||
            data.length < table.getState().pagination.pageSize
          }
          onClick={() => table.nextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
