import InputSelect from "@/components/molecules/InputSelect";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const settingState = useSelector((state) => state.setting);
  return (
    <div className={"flex flex-col"}>
      <div className={"container mx-auto"}>
        <InputSelect htmlFor={"country_id"} label={"Select Your Country"} />
      </div>
    </div>
  );
}
