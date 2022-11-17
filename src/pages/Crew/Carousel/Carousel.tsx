import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
  CarouselWrapper,
  PaginationDot,
  Inner,
  PaginationDotsWrapper,
} from "./Carousel.styles";

interface CarouselProps {
  children: React.ReactElement[];
}

export default function Carousel({ children }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const translateValue = activeIndex * 100;

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > React.Children.count(children) - 1) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const swipeHandlers = useSwipeable({
    trackMouse: true,
    onSwipedRight: () => updateIndex(activeIndex - 1),
    onSwipedLeft: () => updateIndex(activeIndex + 1),
  });

  return (
    <>
      <CarouselWrapper {...swipeHandlers}>
        <Inner translateX={translateValue}>{children}</Inner>
      </CarouselWrapper>
      <PaginationDotsWrapper>
        {React.Children.map(children, (child, index) => {
          return <PaginationDot key={index} active={index === activeIndex} />;
        })}
      </PaginationDotsWrapper>
    </>
  );
}
