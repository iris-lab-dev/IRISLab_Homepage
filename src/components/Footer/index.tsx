import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Empty,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <img src={`/img/svg/${src}`} alt={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={16} md={16} sm={24} xs={24}>
              {/* <Title>이익을 넘어 가치를,</Title>
              <Title>경쟁을 넘어 선순환을 설계합니다.</Title>
              <Empty /> */}
              <Para>
                대표 : 홍길동 | 사업자등록번호 : 123-45-67890 사업자정보 확인
              </Para>
              <Para>
                주소 : 고구려시 신라구 백제로12길 22, 2층 2482호 (가야동, 아이리스빌딩)
              </Para>
              <Para>
                이메일 : contact@irislab.co.kr | 연락처 : 02-0000-0000
              </Para>
              <Para>
                통신판매업신고번호: 1900-서울강남-9999호 | 직업정보제공사업 신고번호: 서울청 제9999-9999호
              </Para>
            </Col>
            <Col lg={6} md={7} sm={24} xs={24}>
              <Title>Policy</Title>
              <Large to="/">이용약관</Large>
              <Large to="/">개인정보처리방침</Large>
              <Large to="/">개인정보 수집 및 이용 동의</Large>
              <Large to="/">업무위수탁약관</Large>
              {/* <Empty />
              <Title>Support</Title>
              <Large to="/">Support Center</Large>
              <Large to="/">Customer Support</Large> */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <img
                  src="/img/png/logo.png"
                  alt="logo.png"
                  width="101px"
                  style={{ height: "auto", display: "block" }}
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://github.com/Adrinlol/create-react-app-adrinlol"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/Adrinlolx"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/lasha-kakabadze/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@lashakakabadze/"
                src="medium.svg"
              />
              
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
