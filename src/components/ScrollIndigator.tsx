import { FC, useState, useEffect, useRef } from "react";

interface scrollContainerProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
}

const ScrollIndigator: FC<scrollContainerProps> = ({ scrollContainerRef }) => {
  //   const [isVisible, setIsVisible] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  //   const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (!scrollContainerRef.current) return;
    console.log("scroll");
    const SCROLL_TOP = scrollContainerRef.current.scrollTop;
    const SCROLL_HEIGHT = scrollContainerRef.current.scrollHeight;
    const CLIENT_HEIGHT = scrollContainerRef.current.clientHeight;
    // const SCROLL_TOP = document.documentElement.scrollTop;
    // const SCROLL_HEIGHT = document.documentElement.scrollHeight;
    // const CLIENT_HEIGHT = document.documentElement.clientHeight;

    console.log(SCROLL_TOP, SCROLL_HEIGHT, CLIENT_HEIGHT);
    const scrolledHeight = (SCROLL_TOP / (SCROLL_HEIGHT - CLIENT_HEIGHT)) * 100;
    setScrollTop(scrolledHeight);
    // if (SCROLL_TOP > 78) setIsVisible(true);
    // else setIsVisible(false);
    // console.log(scrolledHeight);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      console.log("USE EFFECT!!");
      scrollContainer.addEventListener("scroll", onScroll);
      return () => {
        if (scrollContainer) {
          console.log("CLEAN UP EVENTLISTENER!!");
          scrollContainer.removeEventListener("scroll", onScroll);
        }
      };
    }
  }, []);
  //   useEffect(() => {
  //     console.log("USE EFFECT!!");
  //     window.addEventListener("scroll", onScroll);
  //     return () => {
  //       console.log("CLEAN UP EVENTLISTENER!!");
  //       window.removeEventListener("scroll", onScroll);
  //     };
  //   }, []);

  return (
    <>
      <div className="w-full fixed top-[37px] md:top-[77px] bg-[#FFF] h-[3px] z-[99] right-2 left-0">
        <div className={`bg-teal-400 h-[3px]`} style={{ width: `${scrollTop}%` }} />
      </div>
    </>
  );
};

export default ScrollIndigator;
