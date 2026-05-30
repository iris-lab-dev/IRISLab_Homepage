import { Card, List, Tag, Typography } from "antd";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BoardItem } from "./types";

const { Title, Text } = Typography;

const BoardContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;

  .ant-card-body {
    padding: 1.75rem;
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`;

interface BoardProps {
  title: string;
  items: BoardItem[];
  basePath?: string;
}

const Board = ({ title, items, basePath }: BoardProps) => {
  const history = useHistory();

  const goDetail = (id: string) => {
    if (!basePath) return;
    history.push(`${basePath}/${id}`);
  };

  return (
    <BoardContainer>
      <Title level={2} style={{ textAlign: "center", marginBottom: "2rem" }}>
        {title}
      </Title>
      <List
        itemLayout="vertical"
        dataSource={items}
        renderItem={(item) => (
          <StyledCard
            key={item.id}
            hoverable={Boolean(basePath)}
            onClick={() => goDetail(item.id)}
          >
            <MetaRow>
              <Tag color="gold">{item.category}</Tag>
              <Text type="secondary">{item.date}</Text>
            </MetaRow>
            <Title level={4} style={{ marginTop: 0 }}>
              {item.title}
            </Title>
          </StyledCard>
        )}
      />
    </BoardContainer>
  );
};

export default Board;
