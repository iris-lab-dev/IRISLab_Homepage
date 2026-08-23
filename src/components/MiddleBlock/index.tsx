import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { useHistory } from "react-router-dom";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  MiddleBlockSection,
  Title,
  Content,
  ContentWrapper,
  ServiceSectionOuter,
  ServiceContentWrapper,
  ServiceWrapper,
  ServiceRow,
  ServiceCard,
  ServiceLogoSlot,
  MinPara,
  ServiceCardTitle,
  ServiceCardSubtitle,
  ServiceCardDescription,
  ServiceCardAction,
  TeamGroup,
  TeamGroupTitle,
  ValueGrid,
  ValueCard,
  ValueTitle,
  ValueSubtitle,
  ValueDescription,
} from "./styles";

interface SectionItem {
  title?: string;
  subtitle?: string;
  content: string;
  icon: string;
  link?: string;
}

interface TeamGroupItem {
  title: string;
  section: SectionItem[];
}

interface ValueItem {
  title: string;
  subtitle: string;
  content: string;
}

interface MiddleBlockProps {
  title: string;
  content: string;
  button?: string;
  icon?: string;
  section?: SectionItem[];
  groups?: TeamGroupItem[];
  values?: ValueItem[];
  id?: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, icon, section, groups, values, id, t }: MiddleBlockProps) => {
  const history = useHistory();
  const renderInlineMarkup = (value: string) => ({ __html: t(value) });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navigateTo = (link?: string) => {
    if (!link) {
      return;
    }

    if (/^https?:\/\//i.test(link)) {
      window.open(link, "_blank", "noopener,noreferrer");
      return;
    }

    history.push(link);
  };

  const hasSection = typeof section === "object" && section.length > 0;
  const hasGroups = typeof groups === "object" && groups.length > 0;
  const hasValues = typeof values === "object" && values.length > 0;
  const isServiceSection = id === "service";
  const isEcosystemSection = ["products", "companies", "brands", "teams"].includes(id || "");
  const renderCards = (items: SectionItem[]) => (
    <ServiceRow $stacked={isEcosystemSection} gutter={isEcosystemSection ? [12, 12] : [24, 24]}>
      {items.map((item, index) => (
        <Col
          key={`${item.title}-${index}`}
          lg={isEcosystemSection ? 12 : 7}
          md={isEcosystemSection ? 12 : 8}
          sm={isEcosystemSection ? 24 : 12}
          xs={24}
        >
          <ServiceCard $stacked={isEcosystemSection} onClick={() => navigateTo(item.link)}>
            <ServiceLogoSlot $tight={isServiceSection}>
              <SvgIcon src={item.icon || icon || ""} width="120px" height="120px" />
            </ServiceLogoSlot>
            {isEcosystemSection ? (
              <div>
                <ServiceCardTitle>{t(item.title || "")}</ServiceCardTitle>
                <ServiceCardSubtitle>{t(item.subtitle || "")}</ServiceCardSubtitle>
                <ServiceCardDescription dangerouslySetInnerHTML={renderInlineMarkup(item.content)} />
                {item.link && (
                  <ServiceCardAction
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigateTo(item.link);
                    }}
                  >
                    바로가기
                  </ServiceCardAction>
                )}
              </div>
            ) : (
              <MinPara $wide={isServiceSection} dangerouslySetInnerHTML={renderInlineMarkup(item.content)} />
            )}
          </ServiceCard>
        </Col>
      ))}
    </ServiceRow>
  );

  return (
    <MiddleBlockSection id={id}>
      <Slide direction="up" triggerOnce>
        {hasSection || hasGroups ? (
          <ServiceSectionOuter>
            <ServiceContentWrapper>
              <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
              <Content dangerouslySetInnerHTML={renderInlineMarkup(content)} />
              <ServiceWrapper>
                {hasGroups ? (
                  <div>
                    {groups.map((group) => (
                      <TeamGroup key={group.title}>
                        <TeamGroupTitle>{t(group.title)}</TeamGroupTitle>
                        {renderCards(group.section)}
                      </TeamGroup>
                    ))}
                  </div>
                ) : (
                  renderCards(section || [])
                )}
              </ServiceWrapper>
            </ServiceContentWrapper>
          </ServiceSectionOuter>
        ) : (
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
                <Content dangerouslySetInnerHTML={renderInlineMarkup(content)} />
                {hasValues && (
                  <ValueGrid>
                    {values.map((value) => (
                      <ValueCard key={value.title}>
                        <div>
                          <ValueTitle>{t(value.title)}</ValueTitle>
                          <ValueSubtitle>{t(value.subtitle)}</ValueSubtitle>
                        </div>
                        <ValueDescription dangerouslySetInnerHTML={renderInlineMarkup(value.content)} />
                      </ValueCard>
                    ))}
                  </ValueGrid>
                )}
                {button && (
                  <Button name="submit" onClick={() => scrollTo("mission")}>
                    {t(button)}
                  </Button>
                )}
              </Col>
            </ContentWrapper>
          </Row>
        )}
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
