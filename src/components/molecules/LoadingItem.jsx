import { Skeleton } from "antd";
import React from "react";

function LoadingItem() {
  return (
    <div className="flex w-full">
      {[...Array(2)].map((value) => (
        <div
          key={value}
          className="w-180px relative mr-4 block w-[180px] overflow-hidden  rounded-lg bg-white px-2.5 pb-3 pt-3 shadow-sm"
        >
          <Skeleton
            active
            paragraph={{
              rows: 6,
            }}
            className="h-28 sm:h-32 md:h-36 lg:h-52"
            title={false}
          />
        </div>
      ))}
    </div>
  );
}

export default React.memo(LoadingItem);
