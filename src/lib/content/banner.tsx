import * as React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';

export const BANNER_CONTENT: (() => React.ReactNode)[] = [
  () => (
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
      <PrimaryLink href='#'>Baca panduan</PrimaryLink>
    </span>
  ),
  () =>
    'Quia magnam ipsam consequuntur quam eligendi et corrupti blanditiis voluptatum, nisi beatae placeat, quis libero nihil voluptatibus ad. Quasi animi accusantium alias, dolorem ducimus consequuntur!',
  () =>
    'Doloribus tenetur rem laboriosam ad voluptatibus magni repellat quos tempora iusto commodi',
];

export const BANNER_DELAY_MS = 5000;
