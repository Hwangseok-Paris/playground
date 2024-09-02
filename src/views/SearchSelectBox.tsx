import React, { FC, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchSelectBox: FC = () => {
  const options: string[] = [
    "올림픽공원",
    "서울대공원",
    "잠실종합운동장 주경기장",
    "예스24라이브홀",
  ];

  const [inputValue, setInputValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([...options]);
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (e.target.value === "" && inputValue === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredOptions(filtered);
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    console.log(inputValue, option);

    const filterd = options.filter((item) => {
      item.toLowerCase().includes(option.toLowerCase());
    });
    setFilteredOptions(filterd);

    console.log(filteredOptions);

    setInputFocus(false);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    // 포커스가 div 바깥으로 나갈 때만 드롭다운을 닫음
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setInputFocus(false);
    }
  };

  return (
    <div className="relative w-full" onBlur={handleBlur} tabIndex={-1}>
      <div className="relative flex">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="border p-2 w-full"
          placeholder="Type to filter options..."
          onFocus={() => setInputFocus(true)}>
          {/* ggg */}
        </input>
        <MagnifyingGlassIcon
          className="flex h-full justify-center size-6 absolute right-2 opacity-50"
          onClick={() => setInputFocus(true)}
        />
      </div>
      {inputFocus && filteredOptions.length > 0 && (
        <ul className="absolute border bg-white w-full mt-1 max-h-[200px] overflow-y-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
      {/* 
      {!inputValue && (
        <ul className="absolute border bg-white w-full mt-1 max-h-40 overflow-y-auto">

        </ul>
      )} */}
    </div>
  );
};
export default SearchSelectBox;
