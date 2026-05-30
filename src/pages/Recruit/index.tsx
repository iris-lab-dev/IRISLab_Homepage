import { lazy, useEffect } from "react";
import Board from "../../components/Board";
import data from "../../content/RecruitBoard";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Recruit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <Board title="Recruit" items={data} basePath="/recruit" />
    </Container>
  );
};

export default Recruit;
