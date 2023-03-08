import { Info, Trash2 } from 'lucide-react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Tag from '@/components/tag/Tag';
import Typography from '@/components/typography/Typography';

export default function TagPage() {
  return (
    <Layout>
      <Seo templateTitle='Tag' />

      <main>
        <section className=''>
          <div className='layout min-h-main py-20'>
            <Typography as='h1' variant='h1'>
              Tag
            </Typography>

            <Tag>Default</Tag>
            <Tag color='primary' leftIcon={Info}>
              Primary
            </Tag>
            <Tag color='secondary'>Secondary</Tag>
            <Tag color='danger' rightIcon={Trash2}>
              Danger
            </Tag>
            <Tag color='orange'>Orange</Tag>
            <Tag color='warning'>Warning</Tag>
            <Tag color='success'>Success</Tag>

            <div className='mt-2'>
              <Tag color='primary' size='sm'>
                Small
              </Tag>
              <Tag color='primary'>Base</Tag>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
