import { withTranslation } from "react-i18next";
import Container from "../../common/Container";

import {
  FooterSection,
  NavLink,
  LogoContainer,
  Para,
  CopyrightPara,
} from "./styles";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <Container>
          <NavLink to="/">
            <LogoContainer>
              <img
                src={`${process.env.PUBLIC_URL}/img/png/logo.png`}
                alt="IRIS Lab"
                width="101px"
                style={{ height: "auto", display: "block" }}
              />
            </LogoContainer>
          </NavLink>
          <Para>
            대표 : 이종우 | 사업자등록번호 : 723-88-03656 | <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=7238803656">사업자정보확인</a>
          </Para>
          <Para>
            주소 : 경상남도 양산시 하북면 지곡1길 8 1동 406호
          </Para>
          <Para>
            이메일 : contact@irislab.co.kr | 연락처 : 070-8970-6780
          </Para>
          <Para>
            통신판매업 신고번호 : 2026-경남양산-0378
          </Para>
          <Para>
            직업정보제공사업 신고번호 : 양산 제2026-3호
          </Para>
          <Para>
            인터넷신문사업 등록번호 : 경남,아02750 (아이리스TV | IRIS TV)
          </Para>
          <Para>
            호스팅 서비스 제공 : Github, Inc.
          </Para>
          <CopyrightPara>
            이익을 넘어 가치를, 경쟁을 넘어 선순환을 설계합니다. | © IRIS Lab Co.,Ltd.
          </CopyrightPara>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);

