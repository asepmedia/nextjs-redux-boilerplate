import { getCourses } from '@/app/reducers/post/PostSlice';
import InputSelect from '@/components/molecules/InputSelect';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const dispatch = useDispatch();

  const statePost = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  return (
    <div className={'flex flex-col'}>
      <div className={'mx-auto   flex w-1/3 flex-col gap-y-4'}>
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
            }}
          />
        </div>
      </div>
    </div>
  );
}
