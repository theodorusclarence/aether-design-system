import { Users } from 'lucide-react';
import * as React from 'react';

import StatisticsCard from '@/components/cards/StatisticsCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function CardPage() {
  return (
    <Layout>
      <Seo templateTitle='Statistics Card' />

      <main>
        <section className=''>
          <div className='layout min-h-screen max-w-xs space-y-4 py-20'>
            <StatisticsCard
              variant='primary'
              icon={Users}
              label='Lorem Ipsum'
              value={10}
            />
            <StatisticsCard
              variant='secondary'
              icon={Users}
              label='Lorem Ipsum'
              value={10}
            />
            <StatisticsCard
              variant='danger'
              icon={Users}
              label='Lorem Ipsum'
              value={10}
            />
            <StatisticsCard
              variant='warning'
              icon={Users}
              label='Lorem Ipsum'
              value={10}
            />
            <StatisticsCard
              variant='success'
              icon={Users}
              label='Lorem Ipsum'
              value={10}
            />
            <StatisticsCard variant='primary' label='Lorem Ipsum' value={10} />
            <StatisticsCard
              variant='primary'
              icon={Users}
              label='Lorem Ipsum'
              value={10}
              isLoading
            />
            <StatisticsCard
              variant='primary'
              label='Lorem Ipsum'
              value={10}
              isLoading
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
