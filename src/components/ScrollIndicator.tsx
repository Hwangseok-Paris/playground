import { FC, useState, useEffect, useCallback } from "react";

interface scrollContainerProps {
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  color?: string;
}

const ScrollIndicator: FC<scrollContainerProps> = ({
  scrollContainerRef,
  color = "bg-slate-500",
}) => {
  //   const [isVisible, setIsVisible] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  //   const scrollContainerRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const SCROLL_TOP = scrollContainerRef.current.scrollTop;
    const SCROLL_HEIGHT = scrollContainerRef.current.scrollHeight;
    const CLIENT_HEIGHT = scrollContainerRef.current.clientHeight;
    // const SCROLL_TOP = document.documentElement.scrollTop;
    // const SCROLL_HEIGHT = document.documentElement.scrollHeight;
    // const CLIENT_HEIGHT = document.documentElement.clientHeight;

    const scrolledHeight = (SCROLL_TOP / (SCROLL_HEIGHT - CLIENT_HEIGHT)) * 100;
    setScrollTop(scrolledHeight);
    // if (SCROLL_TOP > 78) setIsVisible(true);
    // else setIsVisible(false);
    // console.log(scrolledHeight);
  }, [scrollContainerRef]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", onScroll);
      return () => {
        if (scrollContainer) {
          // console.log("CLEAN UP EVENTLISTENER!!");
          scrollContainer.removeEventListener("scroll", onScroll);
        }
      };
    }
  }, [onScroll, scrollContainerRef]);
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
      <div className="w-full absolute top-[37px] md:top-[77px] bg-[#FFF] h-[3px] z-[99] right-2 left-0">
        <div className={`${color} h-[3px]`} style={{ width: `${scrollTop}%` }} />
      </div>
    </>
  );
};

export default ScrollIndicator;
