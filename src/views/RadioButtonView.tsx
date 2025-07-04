import { FC, useState } from "react";

import RadioButton from "@/components/RadioButton/RadioButton";

const RadioButtonView: FC = () => {
  const [selectedData, setSelectedData] = useState({
    value: 1,
    name: "first",
  });
  return (
    <>
      <div className="p-3">
        {/* 라디오 버튼 영역 */}
        <RadioButton
          item={selectedData}
          onChange={(newItem: any) => setSelectedData(newItem)}
        />

        {/* 결과 영역 */}
        <div className="py-4 flex flex-col">
          <span>
            VALUE :
            <span className="text-[blue] ml-2">{selectedData.value}</span>
          </span>
          <span>
            NAME :<span className="text-[green] ml-2">{selectedData.name}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default RadioButtonView;
