import { lazy } from "react";
import SnsContent from "../../content/NetworkContent.json";
import ChannelsContent from "../../content/ChannelsContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const Network = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        id="sns"
        title={SnsContent.title}
        content={SnsContent.text}
        section={SnsContent.section}
      />
      <MiddleBlock
        id="channels"
        title={ChannelsContent.title}
        content={ChannelsContent.text}
        section={ChannelsContent.section}
      />
    </Container>
  );
};

export default Network;
