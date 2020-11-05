import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import classnames from "classnames";

interface CarouselProps {
  children: React.ReactNode;
  /**
   * dots位置
   */
  position?: "top" | "bottom";
}

const Carousel: React.FC<CarouselProps> = (props) => {
  const { children, position = "bottom" } = props;

  const childrenCount = React.Children.count(children);

  const [activeIndex, setActiveIndex] = useState(0),
    [itemWidth, setItemWidth] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sliderRect = sliderRef.current?.getBoundingClientRect();

    if (sliderRect) {
      setItemWidth(sliderRect.width);
    }
  }, []);

  // setInterval
  const delay = 2000;

  const fnRef = useRef<() => void>();
  fnRef.current = () =>
    setActiveIndex((val) => (val >= childrenCount - 1 ? 0 : val + 1));

  useEffect(() => {
    const timer = setInterval(() => {
      fnRef.current?.();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="henry-carousel">
      <div
        className={classnames("carousel-slider", "carousel-initialized")}
        ref={sliderRef}
      >
        <div className="carousel-list">
          <div
            className="carousel-wrapper"
            style={{
              width: `${itemWidth * childrenCount}px`,
              transform: `translate3d(-${activeIndex * itemWidth}px, 0px, 0px)`,
              transition: "500ms all ease",
            }}
          >
            {React.Children.map(children, (node, index) => (
              <div
                className="carousel-item"
                key={index}
                style={{ width: `${itemWidth}px` }}
              >
                {node}
              </div>
            ))}
          </div>
        </div>
        <ul
          className={classnames("carousel-dots", `carousel-dots-${position}`)}
        >
          {new Array(childrenCount).fill(1).map((num, index) => (
            <li
              key={index}
              className={classnames({
                "carousel-dots-active": index === activeIndex,
              })}
            >
              <button></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
