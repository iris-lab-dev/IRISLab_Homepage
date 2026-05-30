import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement | null;

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleNavigate = (path: string, targetId?: string) => {
    setVisibility(false);

    const goToTarget = () => {
      if (targetId) {
        scrollTo(targetId);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (location.pathname !== path) {
      history.push(path);
      setTimeout(goToTarget, 150);
      return;
    }

    goToTarget();
  };

  const MenuItem = () => {
    return (
      <>
        <CustomNavLinkSmall onClick={() => handleNavigate("/", "about")} aria-label={t("About")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleNavigate("/recruit")} aria-label={t("Recruit")}>
          <Span>{t("Recruit")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => handleNavigate("/notice")} aria-label={t("Notice")}>
          <Span>{t("Notice")}</Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer
            to="/"
            aria-label="homepage"
            onClick={(event) => {
              event.preventDefault();
              handleNavigate("/", "about");
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/img/png/logo.png`}
              alt="logo.png"
              width="101px"
              style={{ height: "auto", display: "block" }}
            />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);

