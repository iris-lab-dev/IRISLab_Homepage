import { lazy, useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Card, Typography, Tag } from "antd";
import styled from "styled-components";
import { marked } from "marked";
import data from "../../content/NoticeBoard";
import { BoardItem } from "../../components/Board/types";

marked.setOptions({ breaks: true });

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const { Title, Paragraph, Text } = Typography;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  .ant-card-body {
    padding: 2rem;
  }
`;

const NoticeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = (data as BoardItem[]).find((el) => el.id === id);

  const renderContent = useMemo(() => {
    if (!item) return { __html: "" };
    const html = marked.parse(item.content);
    return { __html: html };
  }, [item]);

  if (!item) {
    return <Redirect to="/notice" />;
  }

  return (
    <Container>
      <ScrollToTop />
      <Wrapper>
        <StyledCard>
          <Tag color="gold">{item.category}</Tag>
          <Title level={2} style={{ marginTop: "1rem" }}>
            {item.title}
          </Title>
          <Text type="secondary">{item.date}</Text>
          <Paragraph style={{ marginTop: "1.5rem" }}>
            <span dangerouslySetInnerHTML={renderContent} />
          </Paragraph>
        </StyledCard>
      </Wrapper>
    </Container>
  );
};

export default NoticeDetail;
