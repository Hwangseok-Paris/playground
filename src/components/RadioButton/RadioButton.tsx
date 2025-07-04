import { FC, useState } from "react";

type Props = {
  item: { value: number; name: string };
  onChange: (e: any) => void;
};

const RadioButton: FC<Props> = ({ item, onChange }) => {
  const options = [
    {
      value: 1,
      name: "First",
    },
    {
      value: 2,
      name: "Second",
    },
    {
      value: 3,
      name: "Third",
    },
    {
      value: 4,
      name: "Fourth",
    },
  ];

  return (
    <>
      <div className="flex gap-3">
        {options &&
          options.map((option, idx) => {
            return (
              <div key={idx}>
                <label className="">
                  <input
                    type="radio"
                    className="sr-only peer"
                    id={`radio-${idx}`}
                    checked={option.value === item.value}
                    value={option.value}
                    onChange={(e: any) => {
                      console.log(e.target.value);
                      onChange(option);
                    }}
                  />
                  <label
                    htmlFor={`radio-${idx}`}
                    className="block font-bold px-4 py-2 rounded border cursor-pointer border-gray-300 text-gray-700 peer-checked:bg-blue-600 peer-checked:text-white transition duration-200"
                  >
                    {option.name}
                  </label>
                </label>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RadioButton;
