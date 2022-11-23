import { CarouselItemWrapper } from "./CarouselItem.styles";

interface CarouselItemProps {
  children: React.ReactNode;
}

export default function CarouselItem({ children }: CarouselItemProps) {
  return <CarouselItemWrapper>{children}</CarouselItemWrapper>;
}
