import { lazy, useEffect } from "react";
import Board from "../../components/Board";
import data from "../../content/NoticeBoard";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Notice = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <Board title="Notice" items={data} basePath="/notice" />
    </Container>
  );
};

export default Notice;
