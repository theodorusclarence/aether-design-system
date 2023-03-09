import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function TypographyPage() {
  return (
    <Layout>
      <Seo templateTitle='Typography' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography as='h1' variant='j1'>
              Typography
            </Typography>

            <div className='mt-8'>
              <Typography as='h1' variant='j1'>
                Jumbo 1 <span className='italic'>Jumbo 1</span>
              </Typography>
              <Typography as='h1' variant='j2'>
                Jumbo 2 <span className='italic'>Jumbo 2</span>
              </Typography>
              <Typography variant='h1' as='h1'>
                Heading 1 <span className='italic'>Heading 1</span>
              </Typography>
              <Typography variant='h2' as='h2'>
                Heading 2 <span className='italic'>Heading 2</span>
              </Typography>
              <Typography variant='h3' as='h3'>
                Heading 3 <span className='italic'>Heading 3</span>
              </Typography>
              <Typography variant='h4' as='h4'>
                Heading 4 <span className='italic'>Heading 4</span>
              </Typography>
              <Typography variant='h5' as='h5'>
                Heading 5 <span className='italic'>Heading 5</span>
              </Typography>
              <Typography variant='h6' as='h6'>
                Heading 6 <span className='italic'>Heading 6</span>
              </Typography>
              <Typography variant='s1'>
                Subtitle 1 <span className='italic'>Subtitle 1</span>
              </Typography>
              <Typography variant='s2'>
                Subtitle 2 <span className='italic'>Subtitle 2</span>
              </Typography>
              <Typography variant='s3'>
                Subtitle 3 <span className='italic'>Subtitle 3</span>
              </Typography>
              <Typography variant='s4'>
                Subtitle 4 <span className='italic'>Subtitle 4</span>
              </Typography>
              <Typography variant='b1'>
                Body 1 <span className='italic'>Body 1</span>
              </Typography>
              <Typography variant='b2'>
                Body 2 <span className='italic'>Body 2</span>
              </Typography>
              <Typography variant='b3'>
                Body 3 <span className='italic'>Body 3</span>
              </Typography>
              <Typography variant='c1'>
                Caption 1 <span className='italic'>Caption 1</span>
              </Typography>
              <Typography variant='c2'>
                Caption 2 <span className='italic'>Caption 2</span>
              </Typography>
            </div>

            <div className='mt-8'>
              <Typography variant='h1' as='h1' color='primary'>
                Primary
              </Typography>
              <Typography variant='h1' as='h1' color='secondary'>
                Secondary
              </Typography>
              <Typography variant='h1' as='h1' color='tertiary'>
                Tertiary
              </Typography>
            </div>

            <div className='mt-8'>
              <Typography
                // No need to assign variant, use the class
                className='h3 sm:h2 md:h1 lg:j1'
              >
                Responsive
              </Typography>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
