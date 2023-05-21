import { Button, Result } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Custom500() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>500 - Page Not Found</title>
      </Head>
      <div className={'justify] flex h-screen items-center justify-center'}>
        <Result
          status="500"
          title="500"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button
              type="primary"
              className={'!bg-blue-500'}
              onClick={() => {
                router.push('/');
              }}
            >
              Back Home
            </Button>
          }
        />
      </div>
    </>
  );
}
