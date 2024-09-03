import React, { FC, useState, useEffect, useMemo } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchSelectBox: FC = () => {
  const options: string[] = useMemo(() => {
    return [
      "올림픽공원",
      "서울대공원",
      "잠실종합운동장 주경기장",
      "예스24라이브홀",
      "장충체육관",
      "클럽FF",
      "송도 달빛축제공원",
      "올림픽 체조경기장(KESPO DOM)",
    ];
  }, []);

  const [inputValue, setInputValue] = useState<string>(""); // 텍스트박스 입력값
  const [filteredOptions, setFilteredOptions] = useState<string[]>([...options]); // 필터링된 옵션 리스트
  const [inputFocus, setInputFocus] = useState(false); // inputFocus 상태 > 옵션 표시여부 결정
  const [checkValue, setCheckValue] = useState(false); // inputBox 내 값 유효성 체크용

  /**
   * handleInputChange
   * 인풋박스 입력값 변경 감지 > 옵션 리스트 필터링
   * @param e
   */
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

  /**
   * handleOptionClick
   * 옵션 항목 선택 핸들러
   * @param option
   * @returns
   */
  const handleOptionClick = (option: string) => {
    setInputValue(option);

    if (option === "") {
      return setFilteredOptions(options);
    }
    const filterd = options.filter((item) => item.toLowerCase().includes(option.toLowerCase()));
    setFilteredOptions(filterd);
    setInputFocus(false);
  };

  /**
   * handleBlur
   * inputBox Div 아웃포커스시 옵션 리스트 닫기
   * @param e
   */
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
      setInputFocus(false);
    }
  };

  // inputValue 값 유효성 체크
  useEffect(() => {
    if (inputValue && options.includes(inputValue)) {
      setCheckValue(true);
    } else {
      setCheckValue(false);
    }
  }, [inputValue, options]);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div
          className="relative  max-w-[1000px] md:w-[300px] h-[75px]"
          onBlur={handleBlur}
          tabIndex={-1}>
          <div className="relative flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="Type options..."
              onFocus={() => setInputFocus(true)}
            />
            <MagnifyingGlassIcon
              className="flex h-full justify-center size-6 absolute right-2 opacity-50"
              onClick={() => setInputFocus(true)}
            />
          </div>
          {inputFocus && (
            <ul className="absolute border bg-white w-full mt-1 max-h-[200px] overflow-y-auto">
              <li
                key={0}
                className="p-2 hover:bg-gray-200 cursor-pointer text-[#000000]/30"
                onClick={() => handleOptionClick("")}>
                select option
              </li>
              {filteredOptions.length > 0
                ? filteredOptions.map((option, index) => (
                    <li
                      key={index + 1}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleOptionClick(option)}>
                      {option}
                    </li>
                  ))
                : ""}
            </ul>
          )}
        </div>
        <div className="pt-[200px] md:pl-10 md:pt-0 md:w-[500px]">
          <div className="flex gap-1">
            FOCUS SATATUS :
            {inputFocus ? (
              <div className="text-[green]">TURE</div>
            ) : (
              <div className="text-[red]">FALSE</div>
            )}
          </div>
          <div>
            FILTERD OPTION LIST : {filteredOptions.length == 0 ? "EMPTY" : filteredOptions.length}
          </div>
          <div className="flex gap-1">
            VALIDATION CHECK :
            {checkValue ? (
              <div className="text-[green]">SUCCESS</div>
            ) : (
              <div className="text-[red]">FAIL</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchSelectBox;
