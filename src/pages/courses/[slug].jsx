import { getCourse } from '@/app/reducers/post/PostThunk';
import { InputSelect } from '@/components';
import Layout from '@/components/organism/layout';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

function Courses({ params, query }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [post, setPost] = useState('');
  const statePost = useSelector((state) => state.post);

  useEffect(() => {
    console.log(router?.query?.slug);
    if (router?.query?.slug) {
      dispatch(getCourse(`/${router?.query?.slug}`));
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <Layout title={statePost?.course?.data[0]?.name}>
        <div className={`flex flex-col pb-5`}>
          <div className={'container mx-auto px-5'}>
            <div>
              <Link href={'/'}>{statePost?.course?.data?.length ? statePost?.course?.data[0].name : null}</Link>
            </div>
            <div>
              <InputSelect
                htmlFor={'country_id'}
                label={'Select Your Country'}
                placeholder={'Choose one'}
                loading={statePost.courses.loading}
                options={statePost.courses.data.map((data) => {
                  return {
                    value: data.id,
                    text: data.name,
                  };
                })}
                onSelect={(value, option) => {
                  console.log({ value });
                  console.log({ option });
                  setPost(option.children);
                }}
              />
              {post}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Courses;
