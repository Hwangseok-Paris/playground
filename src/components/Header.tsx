import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <>
      <header>
        <div className="flex flex-col">
          <div className="flex justify-between bg-[blue] md:bg-[green] p-2 transition-colors duration-500 ease-in-out">
            <Link to="/">Header</Link>
            <div className="md:hidden">
              <button>메뉴버튼</button>
            </div>
          </div>
          <div className="p-2 hidden md:block md:bg-[green]/30 transition-colors duration-500 ease-in-out">
            네비게이션 버튼
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
