import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MissionContent from "../../content/MissionContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        id="about"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        history={MissionContent.history}
        icon=""
        id="history"
      />
    </Container>
  );
};

export default Home;
