import { useState } from "react";
import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  Title,
  ContentWrapper,
  HistoryContentWrapper,
  ServiceSectionOuter,
  ServiceContentWrapper,
  ServiceWrapper,
  ServiceRow,
  ServiceCard,
  ServiceLogoSlot,
  MinPara,
  StyledRow,
  ButtonWrapper,
  HistoryWrapper,
  MilestoneSection,
  HistorySectionTitle,
  MilestoneList,
  MilestoneCard,
  MilestoneDate,
  MilestoneTitle,
  MilestoneDescription,
  AllUpdatesSection,
  HistoryFilters,
  HistoryFilterButton,
  HistoryGroup,
  HistoryYear,
  HistoryItems,
  HistoryMonthGroup,
  HistoryMonthLabel,
  HistoryMonthEntries,
  HistoryItem,
  HistoryDay,
  HistoryText,
} from "./styles";

const historyFilters = ["All", "Core", "Service", "Patent", "SNS"] as const;
type HistoryFilter = (typeof historyFilters)[number];

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  milestones,
  history,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const [activeHistoryFilter, setActiveHistoryFilter] = useState<HistoryFilter>("All");
  const renderInlineMarkup = (value: string) => ({ __html: t(value) });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const hasSection = typeof section === "object" && section.length > 0;
  const hasMilestones = typeof milestones === "object" && milestones.length > 0;
  const hasHistory = typeof history === "object" && history.length > 0;
  const hasTimeline = hasMilestones || hasHistory;
  const hasIcon = Boolean(icon);

  const groupHistoryItemsByMonth = (
    items: {
      month: string;
      day?: string;
      category?: string;
      content: string;
    }[]
  ) => {
    return items.reduce(
      (acc, item) => {
        const monthGroup = acc.find((group) => group.month === item.month);

        if (monthGroup) {
          monthGroup.items.push(item);
          return acc;
        }

        acc.push({
          month: item.month,
          items: [item],
        });

        return acc;
      },
      [] as {
        month: string;
        items: {
          month: string;
          day?: string;
          content: string;
        }[];
      }[]
    );
  };

  const filteredHistory = (history || [])
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => activeHistoryFilter === "All" || item.category === activeHistoryFilter),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        {hasSection ? (
          <ServiceSectionOuter>
            <ServiceContentWrapper id={id}>
              <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
              {content ? <Content dangerouslySetInnerHTML={renderInlineMarkup(content)} /> : null}
              <ServiceWrapper>
                <ServiceRow gutter={[24, 24]}>
                  {section.map(
                    (
                      item: {
                        title?: string;
                        content: string;
                        icon: string;
                      },
                      id: number
                    ) => {
                      return (
                        <Col key={id} lg={7} md={8} sm={12} xs={24}>
                          <ServiceCard>
                            <ServiceLogoSlot>
                              <SvgIcon
                                src={item.icon}
                                width="108px"
                                height="108px"
                              />
                            </ServiceLogoSlot>
                            {/* {item.title ? <MinTitle>{t(item.title)}</MinTitle> : null} */}

                            <MinPara dangerouslySetInnerHTML={renderInlineMarkup(item.content)} />
                          </ServiceCard>
                        </Col>
                      );
                    }
                  )}
                </ServiceRow>
              </ServiceWrapper>
            </ServiceContentWrapper>
          </ServiceSectionOuter>
        ) : hasTimeline ? (
          <StyledRow justify="space-between" align="middle" id={id} direction={direction}>
            <Col span={24}>
              <HistoryContentWrapper>
                <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
                {hasMilestones ? (
                  <MilestoneSection>
                    <HistorySectionTitle>Key Milestones</HistorySectionTitle>
                    <MilestoneList>
                      {milestones.map((milestone, index) => (
                        <MilestoneCard key={index}>
                          <MilestoneDate>{t(milestone.date)}</MilestoneDate>
                          <MilestoneTitle>{t(milestone.title)}</MilestoneTitle>
                          {milestone.description ? <MilestoneDescription>{t(milestone.description)}</MilestoneDescription> : null}
                        </MilestoneCard>
                      ))}
                    </MilestoneList>
                  </MilestoneSection>
                ) : null}
                {hasHistory ? (
                  <AllUpdatesSection>
                    <HistorySectionTitle>All Updates</HistorySectionTitle>
                    <HistoryFilters>
                      {historyFilters.map((filter) => (
                        <HistoryFilterButton
                          key={filter}
                          type="button"
                          $active={activeHistoryFilter === filter}
                          onClick={() => setActiveHistoryFilter(filter)}
                        >
                          {filter}
                        </HistoryFilterButton>
                      ))}
                    </HistoryFilters>
                    <HistoryWrapper>
                      {filteredHistory.map((group, groupIndex) => {
                        const monthGroups = groupHistoryItemsByMonth(group.items);

                        return (
                          <HistoryGroup key={groupIndex}>
                            <HistoryYear>{t(group.year)}</HistoryYear>
                            <HistoryItems>
                              {monthGroups.map((monthGroup, monthGroupIndex) => {
                                return (
                                  <HistoryMonthGroup key={monthGroupIndex}>
                                    <HistoryMonthLabel dangerouslySetInnerHTML={renderInlineMarkup(monthGroup.month)} />
                                    <HistoryMonthEntries>
                                      {monthGroup.items.map((item, itemIndex) => {
                                        return (
                                          <HistoryItem key={itemIndex}>
                                            {item.day ? <HistoryDay dangerouslySetInnerHTML={renderInlineMarkup(item.day)} /> : null}
                                            <HistoryText dangerouslySetInnerHTML={renderInlineMarkup(item.content)} />
                                          </HistoryItem>
                                        );
                                      })}
                                    </HistoryMonthEntries>
                                  </HistoryMonthGroup>
                                );
                              })}
                            </HistoryItems>
                          </HistoryGroup>
                        );
                      })}
                    </HistoryWrapper>
                  </AllUpdatesSection>
                ) : null}
              </HistoryContentWrapper>
            </Col>
          </StyledRow>
        ) : (
          <StyledRow
            justify="space-between"
            align="middle"
            id={id}
            direction={direction}
          >
            {hasIcon ? (
              <Col lg={11} md={11} sm={12} xs={24}>
                <SvgIcon src={icon as string} width="100%" height="100%" />
              </Col>
            ) : null}
            <Col lg={hasIcon ? 11 : 24} md={hasIcon ? 11 : 24} sm={hasIcon ? 11 : 24} xs={24}>
              <ContentWrapper>
                <Title dangerouslySetInnerHTML={renderInlineMarkup(title)} />
                {content ? <Content dangerouslySetInnerHTML={renderInlineMarkup(content)} /> : null}
                {direction === "right" ? (
                  <ButtonWrapper>
                    {typeof button === "object" &&
                      button.map(
                        (
                          item: {
                            color?: string;
                            title: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Button
                              key={id}
                              color={item.color}
                              onClick={() => scrollTo("about")}
                            >
                              {t(item.title)}
                            </Button>
                          );
                        }
                      )}
                  </ButtonWrapper>
                ) : null}
              </ContentWrapper>
            </Col>
          </StyledRow>
        )}
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
