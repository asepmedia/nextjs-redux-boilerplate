import { getCourses } from '@/app/reducers/post/PostSlice';
import InputSelect from '@/components/molecules/InputSelect';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export default function Blog({ params, query }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [post, setPost] = useState('');
  const statePost = useSelector((state) => state.post);

  useEffect(() => {
    console.log(router?.query?.slug);
    dispatch(getCourses());
  }, [router]);

  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <div className={'flex flex-col'}>
        <div className={'mx-auto flex w-1/3 flex-col gap-y-4'}>
          <div>
            <Link href={'/'}>{router?.query?.slug}</Link>
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
    </>
  );
}
