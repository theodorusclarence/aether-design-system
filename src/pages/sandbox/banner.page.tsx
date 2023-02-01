import { Popover } from '@headlessui/react';
import * as React from 'react';

import Banner from '@/components/Banner';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function BannerPage() {
  return (
    <Layout>
      <Seo templateTitle='Banner' />
      <Popover className='sticky top-0 z-40 shadow-md'>
        <div className='layout flex min-h-[3.5rem] items-center justify-between gap-6 bg-white  md:justify-start lg:min-h-[4.5rem]'>
          <UnstyledLink href='/' className='flex'>
            Dummy Navbar
          </UnstyledLink>
        </div>
        <Banner />
      </Popover>

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            {[...Array(5)].map(() => (
              <>
                <Typography as='h2' variant='h2' className='space-y-2'>
                  Hello
                </Typography>
                <Typography variant='b2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio quaerat soluta, suscipit tempora est officia
                  recusandae illum at facilis. Necessitatibus repudiandae
                  exercitationem quibusdam, perferendis facere dolorum est
                  reiciendis corrupti nihil laboriosam hic at consectetur qui
                  reprehenderit quasi nemo ab et accusamus ut architecto
                  molestiae assumenda id. Quaerat qui facilis quod. Veritatis
                  repudiandae accusantium odit inventore itaque cupiditate
                  recusandae fuga ratione consequatur autem, cum repellendus
                  quos. Repellendus eius quas numquam repellat incidunt, sit
                  autem iure et voluptates, fugiat dolores, unde tenetur error
                  quis! Reiciendis amet excepturi voluptatem ex impedit rem
                  labore mollitia quo fugit facere sit a dicta repudiandae
                  sapiente, provident tempora delectus deleniti fugiat. Mollitia
                  provident eos earum ullam error repellat cupiditate ipsam,
                  dolorum quasi. Aliquam, harum. Iusto ducimus inventore quae
                  eveniet ullam, molestias perferendis obcaecati cumque
                  recusandae accusantium explicabo ipsum incidunt assumenda
                  corrupti atque qui minima mollitia animi reprehenderit harum
                  sapiente autem facere consequuntur odio? Expedita porro
                  consequatur veritatis laboriosam, alias necessitatibus quis
                  inventore. Pariatur exercitationem dolorum praesentium ut
                  dignissimos earum quasi, hic ipsa labore? Asperiores in sint
                  aliquid nemo soluta fuga quidem obcaecati eum vitae neque?
                  Modi commodi odit suscipit dolor facere delectus corrupti
                  aliquam at magni! Id error sint dolorum quas delectus eius
                  ratione culpa natus accusamus?
                </Typography>
              </>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
