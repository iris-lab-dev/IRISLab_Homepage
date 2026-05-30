import { lazy, useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Card, Typography, Tag } from "antd";
import styled from "styled-components";
import { marked } from "marked";
import data from "../../content/RecruitBoard";
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

const ApplyButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.6rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #d4a017, #f5d46b);
  color: #1f1f1f;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 12px 30px rgba(212, 160, 23, 0.28);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 36px rgba(212, 160, 23, 0.32);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RecruitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const item = (data as BoardItem[]).find((el) => el.id === id);

  const renderContent = useMemo(() => {
    if (!item) return { __html: "" };
    const html = marked.parse(item.content);
    return { __html: html };
  }, [item]);

  if (!item) {
    return <Redirect to="/recruit" />;
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
          {item.applyLink ? (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
              <ApplyButton onClick={() => window.open(item.applyLink, "_blank", "noopener,noreferrer")}>지원하기</ApplyButton>
            </div>
          ) : null}
        </StyledCard>
      </Wrapper>
    </Container>
  );
};

export default RecruitDetail;
