import { getCourses } from '@/app/reducers/post/PostSlice';
import { transformObjtoQuery } from '@/app/utils/helpers';
import { Nunito } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const inter = Nunito({ subsets: ['latin'] });

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
      <div className={`flex flex-col pb-5 ${inter.className}`}>
        <div className={'container mx-auto px-5'}>
          <div className={'mt-5 pb-5'}>
            <h3 className={'text-3xl font-bold text-cyan-800'}>Kursus Pilihan</h3>
            <p className={'text-slate-400'}>Kurus terbaik untuk investasi masa depan</p>
          </div>
          <div className={'grid gap-5 lg:grid-cols-4'}>
            {statePost.courses.data.length > 0
              ? statePost.courses.data.map((post, index) => (
                  <Link href={`/blog/${post.slug}`} key={index}>
                    <div className={'flex min-h-[450px] flex-col justify-between gap-y-5 rounded-xl border px-6 py-3'}>
                      <div className={'relative h-[250px]'}>
                        <Image
                          src={post.image_url}
                          alt={''}
                          fill
                          style={{
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                      <h3 className={'text-2xl font-bold text-cyan-900'}>{post.name}</h3>
                      <h3 className={'text-2xl font-black text-red-500'}>
                        <s className={'mr-2 !font-medium !text-slate-600'}>{post.price_discount_formatted}</s>
                        {post.price_formatted}
                      </h3>
                    </div>
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}
