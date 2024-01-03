import { RowData, Table } from '@tanstack/react-table';
import clsx from 'clsx';
import { Search, XCircle } from 'lucide-react';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type FilterProps<T extends RowData> = {
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

const DEBOUNCE_MS = 300;

export default function Filter<T extends RowData>({
  className,
  table,
  ...rest
}: FilterProps<T>) {
  const [filter, setFilter] = React.useState('');

  const handleClearFilter = () => {
    table.setGlobalFilter('');
    setFilter('');
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      table.setGlobalFilter(filter);
    }, DEBOUNCE_MS);
    return () => clearTimeout(timeout);
  }, [filter, table]);

  return (
    <div className={clsxm('relative mt-1 self-start', className)} {...rest}>
      <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
        <Search className='text-xl text-typo' />
      </div>
      <input
        type='text'
        value={filter ?? ''}
        onChange={(e) => {
          setFilter(String(e.target.value));
        }}
        className={clsx(
          'flex w-full rounded-lg shadow-sm',
          'min-h-[2.25rem] py-0 px-9 md:min-h-[2.5rem]',
          'border-gray-300 focus:border-primary-500 focus:ring-primary-500',
        )}
        placeholder='Search...'
      />
      {table.getState().globalFilter !== '' && (
        <div className='absolute inset-y-0 right-0 flex items-center pr-2'>
          <button type='button' onClick={handleClearFilter} className='p-1'>
            <XCircle className='text-xl text-typo-icons' />
          </button>
        </div>
      )}
    </div>
  );
}
