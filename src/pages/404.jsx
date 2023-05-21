import { Button, Result } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className={"justify] flex h-screen items-center justify-center"}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button
              type="primary"
              className={"!bg-blue-500"}
              onClick={() => {
                router.push("/");
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
