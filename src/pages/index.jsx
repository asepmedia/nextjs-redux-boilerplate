import { getCourses } from '@/app/reducers/post/PostSlice';
import { transformObjtoQuery } from '@/app/utils/helpers';
import { SkeletonProduct } from '@/components';
import Layout from '@/components/organism/layout';
import { Rate } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();

  const [post, setPost] = useState('');
  const statePost = useSelector((state) => state.post);
  useEffect(() => {
    setTimeout(() => {
      dispatch(
        getCourses(
          transformObjtoQuery({
            limit: 5,
            page: 1,
          }),
        ),
      );
    }, 2000);
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <Layout>
        <div className={`flex flex-col pb-5`}>
          <div className={'container mx-auto px-5'}>
            <div className={'mt-5 pb-5'}>
              <h3 className={'text-3xl font-bold text-cyan-800'}>Kursus Pilihan</h3>
              <p className={'text-slate-400'}>Kursus terbaik untuk investasi masa depan</p>
            </div>
            {statePost.courses.loading ? <SkeletonProduct count={8} grid={4} /> : null}
            <div className={'grid grid-cols-2 gap-5 lg:grid-cols-4'}>
              {statePost.courses.data.length > 0
                ? statePost.courses.data.map((post, index) => (
                    <Link href={`/courses/${post.slug}`} key={index}>
                      <div
                        className={
                          'justify-betweens flex min-h-[430px] flex-col gap-y-5 rounded-xl border px-3 py-3 lg:min-h-[480px] lg:px-6 lg:py-3'
                        }
                      >
                        <div className={'relative h-[200px] lg:h-[250px]'}>
                          <Image
                            src={post.image_url}
                            alt={''}
                            fill
                            style={{
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                        <h3 className={'font-bold text-cyan-900 lg:text-2xl '}>{post.name}</h3>
                        <h3 className={'mt-auto font-black text-red-500 lg:text-2xl'}>
                          <s className={'mr-2 !font-medium !text-slate-600'}>{post.price_formatted}</s>
                          {post.price_discount > 0 ? post.price_discount_formatted : 'GRATIS'}
                        </h3>
                        <Rate className={'text-sm text-orange-500'} allowHalf defaultValue={5} />
                      </div>
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
