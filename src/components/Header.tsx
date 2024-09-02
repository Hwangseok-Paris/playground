import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import navigationList from "@/Constants/NavigationList";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header: FC = () => {
  const [menuList, setMenuList] = useState(false);
  const navigate = useNavigate();

  const handleMenuButton = () => {
    if (menuList) {
      setMenuList(false);
    } else setMenuList(true);
  };

  const handleClickLinkButton = (link: string) => {
    navigate(link);
    setMenuList(false);
  };

  return (
    <>
      <header>
        <div className="flex relative w-full  flex-col bg-[blue]/30 md:bg-[green]/30 transition-colors duration-1000 ease-out">
          <div className="flex h-[40px] w-full p-2 justify-center items-center md:justify-start">
            <div className="flex md:hidden absolute left-[10px] ">
              <button className="flex " onClick={handleMenuButton}>
                <Bars3Icon className="size-6" />
              </button>
            </div>
            <div className="flex items-center justify-center ">
              <Link to="/">PLAY GROUND</Link>
            </div>
          </div>
          {menuList && (
            <div className="flex absolute z-30 md:hidden bg-[#FFF] left-2 top-[45px] rounded-lg w-auto h-auto p-[20px]  border border-1">
              <ul className="flex flex-col justify-start items-start gap-3 ">
                {navigationList &&
                  navigationList.map((page) => {
                    return (
                      <li>
                        <button onClick={() => handleClickLinkButton(page.path)}>
                          {page.text}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
          <div className="p-2 hidden md:flex items-start md:bg-[#FFF] border border-b-green-100 gap-4">
            {navigationList &&
              navigationList.map((page) => {
                return (
                  <div className="hover:underline hover:underline-offset-4">
                    <Link to={page.path}>{page.text}</Link>
                  </div>
                );
              })}
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
