import { lazy } from "react";
import ProductsContent from "../../content/AboutContent.json";
import TeamsContent from "../../content/TeamsContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const Ecosystem = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        id="products"
        title={ProductsContent.title}
        content={ProductsContent.text}
        section={ProductsContent.section}
      />
      <MiddleBlock
        id="teams"
        title={TeamsContent.title}
        content={TeamsContent.text}
        groups={TeamsContent.groups}
      />
    </Container>
  );
};

export default Ecosystem;
