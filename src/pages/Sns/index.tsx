import { useEffect } from "react";
import { Card, Col, Row, Tag, Typography } from "antd";
import styled from "styled-components";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";

const { Title, Paragraph, Text } = Typography;

const snsGroups = [
  {
    account: "tumtum.kr",
    description: "틈틈 공식 인스타그램",
    channels: [
      {
        platform: "Instagram",
        href: "https://www.instagram.com/tumtum.kr",
      },
    ],
  },
  {
    account: "50days_left",
    description: "0에서 1을 만드는 50일간의 기록",
    channels: [
      {
        platform: "YouTube",
        href: "https://www.youtube.com/@50days_left",
      },
      {
        platform: "Instagram",
        href: "https://www.instagram.com/50days_left",
      },
    ],
  },
  {
    account: "아이리스랩",
    description: "주식회사 아이리스랩 공식 채널",
    channels: [
      {
        platform: "Homepage",
        href: "https://irislab.co.kr",
      },
      {
        platform: "YouTube",
        href: "https://youtube.irislab.co.kr",
      },
      {
        platform: "Chzzk",
        href: "https://chzzk.irislab.co.kr",
      },
      {
        platform: "Discord",
        href: "https://discord.irislab.co.kr",
      },
      {
        platform: "Github",
        href: "https://github.irislab.co.kr",
      },
      {
        platform: "Toonation",
        href: "https://toon.at/donate/irislab",
      },
    ],
  },
];

const PageSection = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 5rem 0;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const StyledCard = styled(Card)`
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);

  .ant-card-body {
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

const AccountName = styled(Title)`
  && {
    margin-bottom: 0.75rem;
  }
`;

const ChannelList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.5rem;
`;

const ChannelLink = styled.a`
  display: inline-flex;
  align-items: center;
  border: 1px solid #f0d37a;
  border-radius: 999px;
  background: #fff9e8;
  color: #ad6800;
  padding: 0.45rem 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    border-color: #d4a017;
    color: #8c5500;
    transform: translateY(-2px);
  }
`;

const Sns = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <PageSection>
        <Hero>

          <Title level={2}>SNS</Title>
          <Paragraph>
            아이리스랩에서 운영하는 SNS 채널 목록입니다.
          </Paragraph>
        </Hero>
        <Row gutter={[24, 24]}>
          {snsGroups.map((group) => (
            <Col key={group.account} lg={8} md={12} sm={24} xs={24}>
              <StyledCard hoverable>
                <AccountName level={3}>{group.account}</AccountName>
                <Text type="secondary">{group.description}</Text>
                <ChannelList>
                  {group.channels.map((channel) => (
                    <ChannelLink
                      key={`${group.account}-${channel.platform}`}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${group.account} ${channel.platform}`}
                    >
                      {channel.platform}
                    </ChannelLink>
                  ))}
                </ChannelList>
              </StyledCard>
            </Col>
          ))}
        </Row>
      </PageSection>
    </Container>
  );
};

export default Sns;
