import useScreenWidth from "../../hooks/useScreenWidth";
import {
  Wrapper,
  Heading,
  Description,
  InformationPart,
  ExploreLink,
  ExploreLinkWrapper,
} from "./Home.styles";

export default function Home() {
  const isMobile = useScreenWidth(640);
  const isTablet = useScreenWidth(960);

  return (
    <Wrapper isMobile={isMobile} isTablet={isTablet}>
      <InformationPart>
        <Heading>
          So, you want travel to
          <br />
          <span>SPACE</span>
        </Heading>
        <Description>
          Let's face it: if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a trully out of this world
          experience!
        </Description>
      </InformationPart>
      <ExploreLinkWrapper>
        <ExploreLink to="/destination">Explore</ExploreLink>
      </ExploreLinkWrapper>
    </Wrapper>
  );
}
