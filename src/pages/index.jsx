import InputSelect from "@/components/molecules/InputSelect";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={"flex flex-col"}>
      <div className={"mx-auto   flex w-1/3 flex-col gap-y-4"}>
        <div>
          <InputSelect
            htmlFor={"country_id"}
            label={"Select Your Country"}
            defaultValue={1}
            options={[
              {
                value: 1,
                text: "Indonesia",
              },
              {
                value: 2,
                text: "Singapore",
              },
              {
                value: 3,
                text: "Thailand",
              },
            ]}
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
