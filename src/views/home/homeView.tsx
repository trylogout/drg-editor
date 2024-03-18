import { Layout, Upload } from '@/components';
import type { ReactElement } from 'react';

export function HomeView(): ReactElement {
  return (
    <Layout>
      <div className='flex items-center justify-center'>
        <img
          src='assets/logo.png'
          alt='logo'
          className='mx-auto w-32'
          width={128}
          height={47}
        />
        <img
          src='assets/season04.webp'
          alt='season logo'
          className='season-logo mx-auto w-32'
          width={128}
          height={47}
        />
      </div>
      <Upload />
    </Layout>
  );
}

export default HomeView;
