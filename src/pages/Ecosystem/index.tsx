import { lazy } from "react";
import ProductsContent from "../../content/AboutContent.json";
import CompaniesContent from "../../content/CompaniesContent.json";
import BrandsContent from "../../content/BrandsContent.json";

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
        id="companies"
        title={CompaniesContent.title}
        content={CompaniesContent.text}
        section={CompaniesContent.section}
      />
      <MiddleBlock
        id="brands"
        title={BrandsContent.title}
        content={BrandsContent.text}
        section={BrandsContent.section}
      />
    </Container>
  );
};

export default Ecosystem;
