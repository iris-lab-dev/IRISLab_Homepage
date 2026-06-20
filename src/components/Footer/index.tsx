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
  CopyrightPara,
  Large,
  Empty,
  FooterContainer,
  SocialItem,
  SocialIcon,
  SocialLabel,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  label: string;
}

const Footer = () => {
  const socialLinks: SocialLinkProps[] = [
    {
      href: "https://github.com/iris-lab-dev",
      src: "github.svg",
      label: "iris-lab-dev",
    },
    {
      href: "https://www.youtube.com/@kririslab",
      src: "youtube.svg",
      label: "아이리스랩",
    },
  ];

  const SocialLink = ({ href, src, label }: SocialLinkProps) => {
    return (
      <SocialItem
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={`${src}-${label}`}
        aria-label={label}
      >
        <SocialIcon src={`${process.env.PUBLIC_URL}/img/svg/${src}`} alt={src} />
        <SocialLabel>{label}</SocialLabel>
      </SocialItem>
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
                대표 : 이종우 | 사업자등록번호 : <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7238803656">723-88-03656</a>
              </Para>
              <Para>
                주소 : 경상남도 양산시 하북면 지곡1길 8 1동 406호
              </Para>
              <Para>
                이메일 : contact@irislab.co.kr | 연락처 : 070-8970-6780
              <br/>
              </Para>
               <Para>
                통신판매업 신고번호 : 2026-경남양산-0378
              </Para>
              <Para>
                직업정보제공사업 신고번호 : 양산 제2026-3호
              </Para>
               <Para>
                호스팅 서비스 제공 : (유)한국오라클
              </Para>
              <br/>
 
              <CopyrightPara>
                이익을 넘어 가치를, 경쟁을 넘어 선순환을 설계합니다. <br/>
                © IRIS Lab Co.,Ltd.
              </CopyrightPara>

            </Col>
            {/* <Col lg={6} md={7} sm={24} xs={24}>
              <Title>Policy</Title>
              <Large to="/">이용약관</Large>
              <Large to="/">개인정보처리방침</Large>
              <Large to="/">개인정보 수집 및 이용 동의</Large>
              <Large to="/">업무위수탁약관</Large>
              <Empty />
              <Title>Support</Title>
              <Large to="/">Support Center</Large>
              <Large to="/">Customer Support</Large>
            </Col> */}
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
                  src={`${process.env.PUBLIC_URL}/img/png/logo.png`}
                  alt="logo.png"
                  width="101px"
                  style={{ height: "auto", display: "block" }}
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              {socialLinks.map((socialLink) => (
                <SocialLink
                  key={`${socialLink.src}-${socialLink.label}`}
                  href={socialLink.href}
                  src={socialLink.src}
                  label={socialLink.label}
                />
              ))}
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);

