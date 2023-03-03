import { flexRender, RowData, Table } from '@tanstack/react-table';
import clsx from 'clsx';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography/Typography';

type TBodyProps<T extends RowData> = {
  isLoading?: boolean;
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

export default function TBody<T extends RowData>({
  className,
  isLoading = false,
  table,
  ...rest
}: TBodyProps<T>) {
  const rows = table.getRowModel().rows;

  return (
    <tbody
      className={clsxm('divide-y divide-typo-divider bg-white', className)}
      {...rest}
    >
      {isLoading && (
        <tr className='animate-pulse bg-gray-50'>
          <td
            colSpan={table.getAllColumns().length}
            className='whitespace-nowrap px-6 py-4 text-center text-sm text-gray-700'
          >
            <span>Memuat data...</span>
          </td>
        </tr>
      )}
      {rows.length === 0 && !isLoading ? (
        <tr className='bg-gray-50'>
          <td
            colSpan={table.getAllColumns().length}
            className='whitespace-nowrap px-6 py-4 text-center text-sm text-gray-700'
          >
            <span>Data tidak ditemukan</span>
          </td>
        </tr>
      ) : (
        rows.map((row, index) => (
          <tr
            key={row.id}
            className={clsxm(index % 2 === 0 ? 'bg-white' : 'bg-gray-50')}
          >
            {row.getVisibleCells().map((cell) => (
              <Typography
                key={cell.id}
                as='td'
                variant='b2'
                color='secondary'
                className={clsx([
                  'whitespace-nowrap',
                  'truncate',
                  'py-4 pl-[34px] pr-3',
                ])}
                title={cell.getValue() as string}
                style={{
                  width:
                    cell.column.getSize() !== 0
                      ? cell.column.getSize()
                      : undefined,
                  maxWidth:
                    cell.column.getSize() !== 0
                      ? cell.column.getSize()
                      : undefined,
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Typography>
            ))}
          </tr>
        ))
      )}
    </tbody>
  );
}
