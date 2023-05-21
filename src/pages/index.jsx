import { getCourses } from '@/app/reducers/post/PostSlice';
import { transformObjtoQuery } from '@/app/utils/helpers';
import InputSelect from '@/components/molecules/InputSelect';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const dispatch = useDispatch();

  const [post, setPost] = useState('');
  const statePost = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(
      getCourses(
        transformObjtoQuery({
          limit: 5,
          page: 1,
        }),
      ),
    );
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <div className={'flex flex-col'}>
        <div className={'mx-auto   flex w-1/3 flex-col gap-y-4'}>
          <div>
            <Link href={'/blog/asep-yayat'}>
              <h3>Test</h3>
            </Link>
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
