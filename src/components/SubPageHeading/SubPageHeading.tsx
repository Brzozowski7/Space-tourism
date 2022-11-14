import { Heading, HeadingNumber } from "./SubPageHeading.styles";

interface SubPageHeadingProps {
  children: React.ReactNode;
  subpageNumber: string;
}

export default function SubPageHeading({ children, subpageNumber }: SubPageHeadingProps) {
  return (
    <Heading>
      <HeadingNumber>{subpageNumber}</HeadingNumber>
      {children}
    </Heading>
  );
}
