import * as React from 'react';
import { BsQuestionCircle } from 'react-icons/bs';

import IconButton from '@/components/buttons/IconButton';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/popover/Popover';

import { ExtractProps } from '@/types/helper';

type ExamplePopoverProps = ExtractProps<typeof Popover>;

export default function ExamplePopover({ ...rest }: ExamplePopoverProps) {
  return (
    <Popover {...rest}>
      <PopoverTrigger asChild>
        <IconButton
          variant='ghost'
          className='rounded-full'
          icon={BsQuestionCircle}
        />
      </PopoverTrigger>
      <PopoverContent side='right'>
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
}
