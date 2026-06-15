import { useMemo, useState } from "react";
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

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  border: 1px solid ${({ $active }) => ($active ? "#d4a106" : "#d9d9d9")};
  background: ${({ $active }) => ($active ? "#fff7e6" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ad6800" : "#595959")};
  border-radius: 999px;
  padding: 0.35rem 1rem;
  cursor: pointer;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  transition: all 0.2s ease;

  &:hover {
    border-color: #d4a106;
    color: #ad6800;
  }
`;

interface BoardProps {
  title: string;
  items: BoardItem[];
  basePath?: string;
}

const Board = ({ title, items, basePath }: BoardProps) => {
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = useMemo(
    () => ["전체", ...Array.from(new Set(items.map((item) => item.category)))],
    [items]
  );

  const filteredItems = useMemo(() => {
    if (selectedCategory === "전체") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const goDetail = (id: string) => {
    if (!basePath) return;
    history.push(`${basePath}/${id}`);
  };

  return (
    <BoardContainer>
      <Title level={2} style={{ textAlign: "center", marginBottom: "2rem" }}>
        {title}
      </Title>
      <CategoryList>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            type="button"
            $active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryList>
      <List
        itemLayout="vertical"
        dataSource={filteredItems}
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
